/**
 * 小满豆作 · 1 元自愿支持弹层
 * 交互沿用《松涛粮站》的前端支持流程：收款码 / 已完成支持 / 下次一定 / 本地记忆。
 */
const Paywall = {
  STORAGE_KEY: '_xiaoman_beads_support',
  SESSION_KEY: '_xiaoman_beads_support_session',
  COOKIE_KEY: '_xiaoman_support_flag',
  AUTO_KEY: '_xiaoman_support_auto_shown',
  QR_URL: 'https://raw.githubusercontent.com/Mike798-cloud/songtao-grainstation/main/paycode.png',
  hasPaid() {
    const ls = this._safeGet(localStorage, this.STORAGE_KEY);
    const ss = this._safeGet(sessionStorage, this.SESSION_KEY);
    const cookie = this._getCookie(this.COOKIE_KEY);
    return !!(ls || ss || cookie);
  },
  markPaid() {
    const token = this._generateToken();
    this._safeSet(localStorage, this.STORAGE_KEY, token);
    this._safeSet(sessionStorage, this.SESSION_KEY, token);
    this._setCookie(this.COOKIE_KEY, token, 365);
  },
  _safeGet(store, key) { try { return store?.getItem(key) || ''; } catch (_) { return ''; } },
  _safeSet(store, key, value) { try { store?.setItem(key, value); } catch (_) {} },
  _generateToken() {
    const raw = `${Date.now()}_${Math.random().toString(36).slice(2, 10)}_abc_studio`;
    try { return btoa(raw); } catch (_) { return raw; }
  },
  _setCookie(name, value, days) {
    try {
      const d = new Date();
      d.setTime(d.getTime() + days * 86400000);
      document.cookie = `${name}=${value};expires=${d.toUTCString()};path=/;SameSite=Lax`;
    } catch (_) {}
  },
  _getCookie(name) {
    try {
      const needle = name + '=';
      for (const part of document.cookie.split(';')) {
        const c = part.trim();
        if (c.startsWith(needle)) return c.slice(needle.length);
      }
    } catch (_) {}
    return '';
  },
  autoShown() {
    return !!this._safeGet(localStorage, this.AUTO_KEY);
  },
  markAutoShown() {
    this._safeSet(localStorage, this.AUTO_KEY, String(Date.now()));
  },
  maybeAutoShow(delay = 950) {
    if (this.hasPaid() || this.autoShown()) return false;
    this.markAutoShown();
    window.setTimeout(() => this.show({ auto: true }), Math.max(0, delay));
    return true;
  },
  show(config = {}) {
    if (this.hasPaid()) {
      if (!config.auto) this._showThanks('已经记录过你的支持，谢谢你 ♡');
      return;
    }
    const old = document.getElementById('paywall-overlay');
    if (old) {
      old.style.display = 'flex';
      old.classList.remove('paywall-closing', 'paywall-show');
      requestAnimationFrame(() => requestAnimationFrame(() => old.classList.add('paywall-show')));
      return;
    }
    this._createOverlay(config);
  },
  hide() {
    const overlay = document.getElementById('paywall-overlay');
    if (!overlay) return;
    overlay.classList.add('paywall-closing');
    overlay.classList.remove('paywall-show');
    setTimeout(() => {
      overlay.style.display = 'none';
      overlay.classList.remove('paywall-closing');
    }, 360);
  },
  _onSupport() {
    this.markPaid();
    this.hide();
    this._showThanks('感谢你的支持！小满的旧站会再亮一会儿。');
  },
  _showThanks(message) {
    document.querySelector('.paywall-toast')?.remove();
    const toast = document.createElement('div');
    toast.className = 'paywall-toast';
    toast.textContent = message || '感谢你的支持！';
    document.body.appendChild(toast);
    setTimeout(() => toast.classList.add('show'), 40);
    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => toast.remove(), 360);
    }, 2800);
  },
  _createOverlay() {
    const html = `
      <div class="paywall-overlay" id="paywall-overlay" role="dialog" aria-modal="true" aria-label="支持小满豆作">
        <div class="paywall-card">
          <button class="paywall-close" type="button" data-pay-close aria-label="关闭">×</button>
          <div class="paywall-card-inner">
            <div class="paywall-header">
              <div class="paywall-title-row"><span class="paywall-heart">♡</span><span class="paywall-title">支持《小满豆作》</span><span class="paywall-heart">♡</span></div>
              <div class="paywall-subtitle">1元 自愿支持 · 不影响任何剧情与结局</div>
            </div>
            <div class="paywall-body">
              <div class="paywall-qr-wrapper">
                <img src="${this.QR_URL}" alt="1元收款码" class="paywall-qr-img" referrerpolicy="no-referrer" />
                <div class="paywall-qr-fallback">收款码需要联网加载<br><a href="${this.QR_URL}" target="_blank" rel="noopener">打开收款码原图</a></div>
                <div class="paywall-qr-glow"></div>
              </div>
              <div class="paywall-qr-tip">请用 <strong>某宝</strong> 扫码支持 1元</div>
              <div class="paywall-message">
                <p class="paywall-msg-warm">你好，我是 abc studio 的独立开发者。</p>
                <p class="paywall-msg-body">从旧帖子、会员记录到一颗颗能真正放下去的拼豆，这部作品花了不少时间一点点磨出来。<br>如果你在游玩时有过一点喜欢、害怕，或者被某句话轻轻戳到，愿意支持 <strong>1元</strong>，就已经是很大的鼓励。</p>
                <p class="paywall-msg-cute">1块钱买不到一盒拼豆，但能让我继续把下一段故事一颗一颗拼出来。</p>
                <p class="paywall-msg-warm2">当然，不支持也完全不影响游玩。谢谢你愿意在这个已经暂停营业的小店里多停一会儿。</p>
              </div>
            </div>
            <div class="paywall-footer">
              <div class="paywall-hint"><span class="paywall-hint-icon">💡</span><span>支持记录仅保存在当前浏览器；清除浏览器数据后，入口仍可手动打开。</span></div>
              <div class="paywall-btns">
                <button class="paywall-btn paywall-btn-support" type="button" data-pay-done>已完成支持 ♡</button>
                <button class="paywall-btn paywall-btn-later" type="button" data-pay-later>下次一定</button>
              </div>
            </div>
            <div class="paywall-studio">abc studio</div>
          </div>
        </div>
      </div>`;
    document.body.insertAdjacentHTML('beforeend', html);
    const overlay = document.getElementById('paywall-overlay');
    overlay.querySelector('[data-pay-close]').addEventListener('click', () => this.hide());
    overlay.querySelector('[data-pay-later]').addEventListener('click', () => this.hide());
    overlay.querySelector('[data-pay-done]').addEventListener('click', () => this._onSupport());
    overlay.addEventListener('click', e => { if (e.target === overlay) this.hide(); });
    const img = overlay.querySelector('.paywall-qr-img');
    img.addEventListener('load', () => overlay.querySelector('.paywall-qr-fallback')?.classList.add('hidden'));
    img.addEventListener('error', () => {
      img.classList.add('hidden');
      overlay.querySelector('.paywall-qr-fallback')?.classList.remove('hidden');
    });
    requestAnimationFrame(() => requestAnimationFrame(() => overlay.classList.add('paywall-show')));
  }
};
window.Paywall = Paywall;

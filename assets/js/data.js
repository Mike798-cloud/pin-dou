window.XM_DATA = (() => {
  const patterns = {
    umbrella: [
      '...............','......B........','....BBBBB......','...BBBBBBB.....','..BBBBBBBBB....','.BBBBBBBBBBB...','BBBBBBBBBBBBB..','.....W.B.W.....','.....W.B.W.....','.......B.......','.......B.......','.......B.......','.......B.......','.......BB......','...............'
    ],
    store: [
      '....................','....YYYYYYYYYYYY....','...YWWWWWWWWWWWWY...','..YWWRRWWWWBBWWWWY..','..YWWRRWWWWBBWWWWY..','..YWWRRWWWWBBWWWWY..','..YWWWWWWWWWWWWWWY..','..YYYYYYYYYYYYYYYY..','..SSSSSSSSSSSSSSSS..','..S..PP....GG....S..','..S.PPPP..GGGG...S..','..S.PPPP..GGGG...S..','..S..PP....GG....S..','..S............S....','..SSSSSSSSSSSSSSSS..','.....W........W.....','.....W........W.....','....BBB......BBB....','....................','....................'
    ],
    station: [
      '..................','.......SS.........','......SSSS........','.....SSWWSS.......','.....SSWWSS.......','.....SSBBSS.......','.....SSBBSS.......','......SSSS........','.......SS.........','.......SS.........','...YYYYSSYYYY.....','...Y...SS...Y.....','...Y...SS...Y.....','...YYYYYYYYYY.....','....W......W......','...BBB....BBB.....','..................','..................'
    ],
    table: [
      '..................','..SSSSSSSSSSSSSS..','..S............S..','..S.PP....GG...S..','..SPPPP..GGGG..S..','..SPPPP..GGGG..S..','..S.PP....GG...S..','..S....WW......S..','..S....WW......S..','..S.R......B...S..','..S.RR....BB...S..','..S............S..','..SSSSSSSSSSSSSS..','....W....W........','....W....W........','...BBBBBBBBBB.....','..................','..................'
    ]
  };

  return {
    brand: '小满豆作',
    account: { name: '林未', member: 'XM-0719-116', joined: '2022/05/14' },
    people: [
      {name:'林未',handle:'linwei_0719',joined:'2022/05/14',role:'旧会员',bio:'产品设计。工作日基本失踪；拼豆时最受不了空一格和歪一颗。',signature:'先对齐，再说别的。'},
      {name:'唐梨',handle:'pear_tang',joined:'2022/06/12',role:'旧会员',bio:'展陈设计。周末常来做小图，偶尔研究摆摊用的价签和门牌；最常用灰蓝。',signature:'做东西的时候可以不用讲话。'},
      {name:'阿闻',handle:'awen_shop',joined:'2022/05/20',role:'旧店员',bio:'小满豆作兼职店员，备考中。会记得谁总坐哪张桌，但经常忘记自己的咖啡放哪。',signature:'熨烫前先让我喝一口。'},
      {name:'小严',handle:'xiaoyan_work',joined:'2024/02/03',role:'旧会员',bio:'唐梨的同事。偶尔来做工位门牌和展会小摆件。',signature:'下班后不聊改稿。'}
    ],
    notices: [
      {date:'2026/08/28',title:'旧版云工作台最终迁移通知',tag:'系统',text:'旧版云工作台将于 9 月 15 日 24:00 停止服务。请在截止前导出图纸、检查未映射色号，并处理共同项目与寄存授权。'},
      {date:'2026/08/12',title:'旧版作品索引重建完成',tag:'系统',text:'历史图纸已完成只读索引。索引时间可能晚于作品实际编辑时间；版本号、豆数与设备记录不会因此改变。'},
      {date:'2025/07/29',title:'门店暂停营业公告',tag:'门店',text:'因租约与设备维护安排，小满豆作线下门店自 7 月 29 日起暂停营业。门店工作台 01–04 同步停止对会员开放。'},
      {date:'2025/07/18',title:'M42 灰蓝恢复补货',tag:'材料',text:'M42 灰蓝已补货。旧版 M31 用户请在图纸工具中使用兼容预览确认替代色。'},
      {date:'2025/06/30',title:'夏日透明底板周',tag:'活动',text:'周一至周四到店使用大底板免底板费，预约时选择“夏日大底板”即可。'}
    ],
    plaza: [
      {id:'p02', date:'2025/07/24 14:12', author:'小满豆作', title:'新手第一次来，选多大底板比较合适？', tags:['新手','FAQ'], text:'第一次建议 15×15 或 20×20。图案越大不一定越好，能在两小时内收尾更有成就感。', comments:['橙子汽水：真的，第一次做 30×30 做到怀疑人生。','海盐：15×15 小挂件非常友好。','小满豆作：如果是双人一起来，20×20 会比较好分工。','九格：我第一次做 20×20，两个小时刚好。','木木：如果容易纠结颜色，底板小一点真的更友好。','阿闻：第一次先做完一张，比第一张就挑战大图重要。']},
      {id:'p06', date:'2025/07/12 16:20', author:'薄荷', title:'周末人好多', tags:['闲聊'], visual:'assets/img/post-p06-card.jpg', detailVisual:'assets/img/post-p06-detail.jpg', text:'四张桌子全满，隔壁姐妹拼一只超级大的柴犬，围观了半小时。', comments:['椒盐：我也看到了！','阿闻：那桌最后真的拼到闭店。','薄荷：她们还在争耳朵到底要不要多一圈深灰。','青提：那天我在隔壁桌，听她们讨论耳朵讨论了二十分钟。','薄荷：最后深灰还是少了一圈哈哈。','阿闻：柴犬那张后来寄存了，真的很大。']},
      {id:'p47', date:'2025/07/17 18:24', author:'橘子汽水', title:'第一次来就碰上下雨', tags:['返图','雨天'], visual:'assets/img/post-p47-card.jpg', detailVisual:'assets/img/post-p47-detail.jpg', text:'本来只是想躲一会雨，结果坐到店里快打烊。窗边那排盒子在阴天里看着特别温柔。', comments:['春卷：雨天去真的会上瘾。','阿闻：窗边会有一点反光，拍照记得关闪。','橘子汽水：已经记下了，下次想试 03 号桌。']},
      {id:'p53', date:'2025/05/11 16:42', author:'橘子汽水', title:'给妈妈做的小花比想象中难', tags:['返图','求助'], visual:'assets/img/post-p53-card.jpg', detailVisual:'assets/img/post-p53-detail.jpg', text:'以为十几格的小花半小时能结束，结果为了叶子的绿色拆了三次。最后选了鼠尾草。', comments:['木木：鼠尾草和奶黄一起很好看。','阿闻：小图的难点经常全在配色。','橘子汽水：已经送出去了，她说像小盆栽。']},
      {id:'p51', date:'2025/07/05 13:08', author:'小满豆作', title:'今天下午临时空出一张桌', tags:['预约','门店'], text:'原本 15:00 的双人预约取消，03 号以外还有一张普通桌空出来。想做小底板可以直接来。', comments:['薄荷：可惜我今天在加班。','青提：周末临时位居然真的会出现。','阿闻：偶尔，通常十分钟就会被抢走。']},
      {id:'p09', date:'2025/05/22 20:18', author:'木木', title:'像素花束求配色建议', tags:['求助','配色'], text:'想做毕业礼物，黄色感觉有点刺眼，有没有更柔和的替代色？', comments:['阿闻：可以试试 M16 奶黄。','海盐：边框换深灰会压住一点。','木木：记下了，我先去试一版。']},
      {id:'p37', date:'2025/07/15 20:13', author:'木木', title:'闭店前一阵灰蓝真的快被拿空了', tags:['闲聊','材料'], visual:'assets/img/post-p37-card.jpg', detailVisual:'assets/img/post-p37-detail.jpg', text:'这几周来的人好多都在拿灰蓝。感觉这个店里每隔一段时间就会突然流行某个颜色。', comments:['阿闻：上一次是奶黄。','薄荷：我就是被你们带的。','木木：灰蓝真的太适合阴天了。']},
      {id:'p26', date:'2025/07/28 16:40', author:'小满豆作', title:'本周寄存柜暂缓清理', tags:['寄存','门店'], text:'因门店设备维护，本周原定清理的长期寄存作品顺延。需要邮寄的会员可以先在线登记。', comments:['橘子：那我下周再来拿。','阿闻：还在柜里的作品我们会先做标签复核。','青提：代取授权还能沿用旧的吗？','小满豆作：可以，系统里原有授权会一并保留。']},
      {id:'p04', date:'2025/07/19 19:36', author:'唐梨', title:'还是蓝色好看', tags:['返图','灰蓝'], visual:'assets/img/post-p04-card.jpg', detailVisual:'assets/img/post-p04-detail.jpg', text:'纠结了半小时，最后还是把边框换回灰蓝。M31 快没了，店员说新版色号已经到了。', comments:['阿闻：你已经连续三次选蓝色了😂','唐梨：因为某人以前说蓝色耐看。','海盐：这次边框比上次浅一点。','唐梨：嗯，旧色快用完了。']},
      {id:'p05', date:'2025/07/18 12:09', author:'小满豆作', title:'M42 灰蓝到货', tags:['材料','补货'], text:'M42 与旧版 M31 视觉接近，但熨烫后饱和度略低。旧图纸迁移可在图纸工具里做色号兼容。', comments:['唐梨：终于。','木木：那旧图会自动替换吗？','小满豆作：不会直接改历史版本，只会在兼容预览里显示。']},
      {id:'p01', date:'2025/07/26 21:08', author:'阿闻', title:'今天最后一位客人拼到打烊', tags:['店员日常','晚场'], visual:'assets/img/post-p01-card.jpg', detailVisual:'assets/img/post-p01-detail.jpg', text:'灰蓝豆又快见底了。最后一位客人说剩下那一点下次再来补。桌上两杯饮料最后都化得差不多。', comments:['@九格：你们几点打烊？','阿闻：平时十点，今天拖到十点半。','青提：两杯都化了说明聊很久。','阿闻：后面其实没怎么说话，就是一直坐着。']},
      {id:'p52', date:'2025/06/26 21:37', author:'唐梨', title:'展会撤完以后只想拼不用写字的东西', tags:['日常','闲聊'], visual:'assets/img/post-p52-card.jpg', detailVisual:'assets/img/post-p52-detail.jpg', text:'今天把最后一批物料撤完，脑子已经不想看任何标题。来店里做了一个没有字的小挂件，舒服很多。', comments:['小严：你明天还要整理照片。','唐梨：明天的我会处理。','阿闻：今天她连色号都让我念。','唐梨：谢谢人工语音助手。']},
      {id:'p54', date:'2025/04/27 18:05', author:'小满豆作', title:'五月旧图修复小周', tags:['活动','材料'], text:'5 月第一周带旧图纸到店，可免费使用旧色号兼容表和历史预览工具。适合以前做到一半、后来换过色号的图。', comments:['海盐：M31 这种也能看吗？','小满豆作：能，旧版颜色会显示新版近似色。','青提：终于能救我前年那张了。']},
      {id:'p08', date:'2025/06/16 13:55', author:'唐梨', title:'独自拼豆效率竟然更高', tags:['返图','日常'], visual:'assets/img/post-p08-card.jpg', detailVisual:'assets/img/post-p08-detail.jpg', text:'原本约的人又加班。一个人坐了三小时，居然比以前两个人一起快。', comments:['阿闻：但你还是拿了两杯饮料。','唐梨：顺手。','青提：一个人也会拿两杯吗？','唐梨：桌子空着怪奇怪的。']},
      {id:'p27', date:'2025/07/08 21:46', author:'阿闻', title:'03号桌今天又拼公交站', tags:['店员日常','大底板'], visual:'assets/img/post-p27-card.jpg', detailVisual:'assets/img/post-p27-detail.jpg', text:'旧图断色三次，最后还是拿历史预览一点点补。那个人说“反正站牌歪一点也看得出来”。', comments:['青提：03号桌是不是窗边那个？','阿闻：对，雨天最容易被窗户反光照到。','海盐：谁会把站牌做这么细。','阿闻：会把细边拆了又装的人。']},
      {id:'p10', date:'2025/05/03 15:01', author:'小满豆作', title:'五一预约已满', tags:['预约'], text:'5 月 3 日至 5 日所有时段已满，现场候位时间约 40–80 分钟。', comments:[]},
      {id:'p03', date:'2025/07/21 17:44', author:'棉花糖', title:'小猫杯垫翻车但意外能用', tags:['返图','杯垫'], visual:'assets/img/post-p03-card.jpg', detailVisual:'assets/img/post-p03-detail.jpg', text:'耳朵熨歪了，不过正好拿来压便签。老板说失败品不要急着扔。', comments:['西瓜泡泡：有点像故意做旧。','阿闻：失败品区欢迎你。','棉花糖：我已经开始觉得它可爱了。']},
      {id:'p11', date:'2025/04/11 22:09', author:'阿闻', title:'今天有人把坏掉的作品留给我当杯垫', tags:['店员日常'], visual:'assets/img/post-p11-card.jpg', detailVisual:'assets/img/post-p11-detail.jpg', text:'边缘彻底熨糊，但当杯垫居然很稳。她说下次再做一个正常的。', comments:['唐梨：不许丢。','阿闻：好，不丢。','木木：失败品也有失败品的归宿。']},
      {id:'p42', date:'2025/03/28 20:55', author:'海盐', title:'把上次没拼完的雨伞补完了', tags:['返图','雨伞'], visual:'assets/img/post-p42-card.jpg', detailVisual:'assets/img/post-p42-detail.jpg', text:'上回差一点没收尾，这次终于补完。小图虽然简单，但补最后几颗的时候莫名会舍不得结束。', comments:['春卷：雨伞真的很适合做挂件。','阿闻：你这次终于没把白色和奶白搞混。','海盐：店员记仇了。']},
      {id:'p55', date:'2025/02/22 20:16', author:'海盐', title:'旧图纸打不开的话先别急着重画', tags:['求助','材料'], text:'今天差点把前年存的图重新照着照片画一遍，后来才知道工具页能直接看兼容预览。给和我一样没认真看帮助中心的人留个提醒。', comments:['木木：收到，我就是不看说明书派。','阿闻：帮助中心存在的意义突然被发现。','海盐：对不起。']},
      {id:'p46', date:'2025/05/28 22:04', author:'唐梨', title:'下班后绕路来店里坐一会', tags:['日常','闲聊'], visual:'assets/img/post-p46-card.jpg', detailVisual:'assets/img/post-p46-detail.jpg', text:'没有想做很完整的东西，就是想把脑子里还在转的那点东西安静一下。店里灯有点黄，坐着就会慢下来。', comments:['青提：这种店最适合下班后发呆。','阿闻：你今天只拼了一个角。','唐梨：一个角也算开始。']},
      {id:'p29', date:'2025/06/02 20:41', author:'唐梨', title:'今天只想做不用改第七版的东西', tags:['日常','返图'], visual:'assets/img/post-p29-card.jpg', detailVisual:'assets/img/post-p29-detail.jpg', text:'白天的展板又改了一轮，下班后坐窗边拼了一个小时。小东西有个好处：哪里不对，自己拿起来改就行。', comments:['小严：你明天还是要改第八版。','唐梨：别提醒我。','阿闻：今天看起来确实像来避难的。']},
      {id:'p19', date:'2025/07/30 10:26', author:'阿闻', title:'柜台抽屉先别清', tags:['店员日常'], visual:'assets/img/post-p19-card.jpg', detailVisual:'assets/img/post-p19-detail.jpg', text:'柜台里那只熨坏的杯垫先不清了。昨天从共同朋友那里才知道，唐梨以后不会再来拿了。', comments:['纸飞机：她是 27 号走的，之前一直没敢跟你说。','阿闻：知道了。先放着吧。','木木：看到这条突然有点难受。','阿闻：嗯，先给她留着。','橘子：抽屉里那只我好像见过。','阿闻：嗯，边缘熨得有点糊，很好认。']},
      {id:'p12', date:'2025/03/07 11:40', author:'春卷', title:'第一次做像素雨伞', tags:['返图','雨伞'], visual:'assets/img/post-p12-card.jpg', detailVisual:'assets/img/post-p12-detail.jpg', text:'蓝色比想象中更显灰，放在包上很好看。', comments:['木木：这个配色很温柔。','阿闻：小图做完特别有成就感。']},
      {id:'p56', date:'2025/01/18 19:54', author:'阿闻', title:'复习座位今天被客人占了', tags:['店员日常','闲聊'], visual:'assets/img/post-p56-card.jpg', detailVisual:'assets/img/post-p56-detail.jpg', text:'我平时在前台最里面那张小桌背题，今天满场，只能抱着书坐收银台后面。五分钟后又开始帮人找 M16。', comments:['木木：备考店员在线答疑。','唐梨：你最后还是没背几页吧。','阿闻：闭嘴。','青提：祝考试顺利！']},
      {id:'p35', date:'2025/01/08 22:36', author:'阿闻', title:'考完一门来值晚班', tags:['店员日常','闲聊'], visual:'assets/img/post-p35-card.jpg', detailVisual:'assets/img/post-p35-detail.jpg', text:'脑子里全是选择题，今晚谁来都不要问我“这个蓝和那个蓝哪个好看”。我会让你两个都买。', comments:['木木：店员开始报复社会。','青提：你明明最后还是很认真帮我挑了。','阿闻：职业习惯，没办法。']},
      {id:'p57', date:'2024/12/08 14:27', author:'九格', title:'求一个愿意慢慢拼 32×32 的搭子', tags:['搭子项目','求助'], text:'想做一张冬天的街景，一个人估计会拖两个月。周末下午都可以，不赶进度，最好也喜欢低饱和颜色。', comments:['薄荷：听起来很适合我，但我手速特别慢。','九格：慢没关系，我也是。','阿闻：这种要求建议直接约三小时以上。','海盐：如果开项目了记得发返图。']},
      {id:'p14', date:'2024/11/02 16:33', author:'可乐加冰', title:'两个人拼同一张图真的会吵架', tags:['搭子项目'], visual:'assets/img/post-p14-card.jpg', detailVisual:'assets/img/post-p14-detail.jpg', text:'一个嫌颜色不对，一个嫌强迫症。最后还是一起拼完了。', comments:['唐梨：太真实了。','海盐：还有一种情况是两个人都嫌对方手速慢。','林未：以及有人会因为一颗歪了重来。','可乐加冰：对，就是这种。','阿闻：所以我才总说共同项目记得先分区。','九格：我们是一个嫌快一个嫌慢。','薄荷：双人项目最好开工前先分区。']},
      {id:'p43', date:'2024/10/25 18:16', author:'青提', title:'店员说我选色像在点奶茶', tags:['闲聊','配色'], visual:'assets/img/post-p43-card.jpg', detailVisual:'assets/img/post-p43-detail.jpg', text:'先要一点奶黄，再来一点灰蓝，最后又嫌粉紫太甜。配色这件事真的会犹豫很久。', comments:['阿闻：因为你站在色墙前二十分钟没挪。','青提：艺术需要时间。','木木：我也会这样。']},
      {id:'p58', date:'2024/10/04 17:52', author:'小满豆作', title:'国庆第三天：豆盘暂时不够用了', tags:['门店','活动'], text:'今天下午人比较多，部分豆盘在清洗消毒。到店如果没有空盘，可以先用小纸盒分色，晚场会恢复。', comments:['青提：第一次见到拼豆店豆盘告急。','阿闻：我今天洗盘洗到怀疑人生。','木木：辛苦了哈哈哈。']},
      {id:'p31', date:'2024/09/03 21:28', author:'唐梨', title:'如果周末真的去摆摊', tags:['闲聊','日常'], visual:'assets/img/post-p31-card.jpg', detailVisual:'assets/img/post-p31-detail.jpg', text:'想过做一些很小的挂件，不接复杂定制，只摆自己喜欢的颜色。想法目前停留在“买了一个收纳箱”。', comments:['青提：这已经是第一步了。','唐梨：第一步放了两个月。','小严：第二步是先把收纳箱拆开。','海盐：只卖自己喜欢的颜色这个想法很好。','唐梨：这样至少不用解释为什么不接定制。']},
      {id:'p38', date:'2024/08/28 20:12', author:'九九', title:'第一次做 32×32 结果只拼了边框', tags:['返图','大底板'], visual:'assets/img/post-p38-card.jpg', detailVisual:'assets/img/post-p38-detail.jpg', text:'想挑战一个复杂点的图，结果时间全花在边框和选色上。下次真的要先画草稿。', comments:['阿闻：大底板很容易高估自己。','九九：我今天充分感受到了。','海盐：能拼完边框已经很强了。']},
      {id:'p15', date:'2024/08/17 19:05', author:'阿闻', title:'今天的公交站牌好难熨', tags:['店员日常','大底板'], visual:'assets/img/post-p15-card.jpg', detailVisual:'assets/img/post-p15-detail.jpg', text:'边缘太细，来回补了三次。下次做同款我一定先拍照留底。', comments:['木木：细边真的很难。','阿闻：尤其那种明明看着差不多、拼起来却差一格的。']},
      {id:'p44', date:'2024/08/17 18:31', author:'薄荷', title:'共同项目结束后谁带走成品', tags:['搭子项目','闲聊'], text:'今天和朋友拼了一张双人图，最后开始认真讨论成品该挂谁包上。共同项目最难的原来是分赃。', comments:['可乐加冰：建议一人一周轮流带。','海盐：或者再做一份。','阿闻：门店建议是拍照留档，然后猜拳。']},
      {id:'p28', date:'2024/07/19 19:02', author:'阿闻', title:'雨天关店前的桌面', tags:['店员日常','雨天'], visual:'assets/img/post-p28-card.jpg', detailVisual:'assets/img/post-p28-detail.jpg', text:'今天雨大，窗边桌全是水印。有人走的时候忘了一把蓝色折叠伞，已经挂前台了。', comments:['海盐：雨天的店里真的很好看。','阿闻：就是拖地很累。']},
      {id:'p16', date:'2024/07/19 17:19', author:'林未', title:'下雨也要来拼', tags:['返图','雨天'], visual:'assets/img/post-p16-card.jpg', detailVisual:'assets/img/post-p16-detail.jpg', text:'躲雨躲进店里，最后干脆坐了一下午。', comments:['唐梨：你还把伞忘在店里。','林未：你不是拿了吗。','阿闻：前台那把蓝色折叠伞你们到底谁的。','唐梨：先算她的。']},
      {id:'p39', date:'2024/07/06 16:18', author:'海盐', title:'03号桌的窗边位置很适合发呆', tags:['闲聊','门店'], visual:'assets/img/post-p39-card.jpg', detailVisual:'assets/img/post-p39-detail.jpg', text:'如果不赶时间的话，真的很推荐坐靠窗的位置。下雨的时候会想一直待着。', comments:['青提：就是拍照会反光。','阿闻：以及空调口不在那边，夏天会稍微热一点。']},
      {id:'p59', date:'2024/06/21 20:02', author:'木木', title:'熨烫纸起雾是正常的吗', tags:['求助','新手'], text:'第一次自己在家补熨，纸上有一点白雾，吓得我马上停了。图现在没事，不确定还能不能继续。', comments:['阿闻：轻微起雾正常，先等冷却再看。','海盐：不要在很湿的桌面上熨。','木木：收到，我当时刚擦完桌子。','阿闻：那大概率就是水汽。']},
      {id:'p20', date:'2024/06/08 16:11', author:'海盐', title:'第一次做手机挂件', tags:['返图','新手'], visual:'assets/img/post-p20-card.jpg', detailVisual:'assets/img/post-p20-detail.jpg', text:'小图真的很适合新手，两小时内能做完，回家一路都在看。', comments:['阿闻：记得别暴晒，会有一点点翘。','橘子汽水：这类小图送朋友也很合适。']},
      {id:'p45', date:'2024/05/28 19:10', author:'林未', title:'低饱和绿色真的很耐看', tags:['返图','配色'], visual:'assets/img/post-p45-card.jpg', detailVisual:'assets/img/post-p45-detail.jpg', text:'以前总觉得绿色会很跳，今天试了鼠尾草，意外很安静。放在灰蓝旁边也不吵。', comments:['唐梨：终于不是只会拿蓝色了。','林未：是在你的监督下试的。','青提：这个配色听起来就好看。']},
      {id:'p21', date:'2024/05/20 19:48', author:'青提', title:'情侣款最后做成了姐妹款', tags:['返图','搭子项目'], visual:'assets/img/post-p21-card.jpg', detailVisual:'assets/img/post-p21-detail.jpg', text:'朋友临时来救场，最后把原本的情侣配色改掉了，意外更好看。', comments:['木木：有些图真的更适合姐妹色。','阿闻：现场救场经常会出现更好的版本。']},
      {id:'p32', date:'2024/04/14 15:32', author:'唐梨', title:'同事的工位门牌终于交货', tags:['返图','日常'], visual:'assets/img/post-p32-card.jpg', detailVisual:'assets/img/post-p32-detail.jpg', text:'小严催了三周。字比图难拼，最后一排拆了四次才顺眼。', comments:['小严：本人验收通过。','阿闻：你俩下班以后还在验收😂','林未：我可以理解拆四次这件事。']},
      {id:'p36', date:'2024/03/30 18:43', author:'阿闻', title:'我把自己的第一块熨坏了', tags:['店员日常','返图'], visual:'assets/img/post-p36-card.jpg', detailVisual:'assets/img/post-p36-detail.jpg', text:'每天帮别人熨，轮到自己反而压太久。现在它是前台最丑但最牢的杯垫。', comments:['唐梨：所以你不能再笑我的。','阿闻：你的还是更丑一点。','海盐：失败杯垫区越来越热闹。']},
      {id:'p22', date:'2024/03/02 14:06', author:'小满豆作', title:'周末加开午后场', tags:['预约'], text:'3 月起周六、周日增加 12:30 入场时段。大底板建议至少预留三小时。', comments:[]},
      {id:'p33', date:'2024/02/18 16:08', author:'林未', title:'今天终于承认自己会为了歪一颗全部重排', tags:['闲聊','搭子项目'], text:'本来只是边框有一颗偏了，拆着拆着半圈都没了。有人坐对面笑了十分钟。', comments:['唐梨：差一颗也看得出来是什么。','林未：看得出来和看着难受是两件事。','海盐：我支持重排派。','木木：我站林未这边，歪一颗真的会一直看到。','阿闻：你们这种人会让我下班很晚。']},
      {id:'p48', date:'2024/01/14 19:21', author:'阿闻', title:'工作台03充电线又不见了', tags:['店员日常','门店'], visual:'assets/img/post-p48-card.jpg', detailVisual:'assets/img/post-p48-detail.jpg', text:'每次都说要给 03 号桌的平板贴名字，结果最后总是只剩一根松松的线。', comments:['木木：03号桌真的很抢手。','阿闻：所以配件也最容易失踪。','青提：是不是又被卷进桌底了。']},
      {id:'p23', date:'2023/12/31 18:50', author:'阿闻', title:'今年最后一桌收工', tags:['店员日常'], visual:'assets/img/post-p23-card.jpg', detailVisual:'assets/img/post-p23-detail.jpg', text:'地上捡了四十多颗豆，最大的愿望是明年大家都把豆倒进盘子里再选。', comments:['九九：不可能。','木木：新年愿望不要太难。','阿闻：那改成“至少倒一半”。']},
      {id:'p60', date:'2023/11/15 13:44', author:'青提', title:'可以带自己画的像素图来吗', tags:['求助','新手'], text:'已经在平板上画好了 18×18，想直接照着做，不需要店里的转图功能。请问可以自带吗？', comments:['小满豆作：可以，建议导出成带网格的 PNG。','青提：好耶，谢谢。']},
      {id:'p17', date:'2023/10/09 12:26', author:'小满豆作', title:'搭子项目上线', tags:['系统','搭子项目'], text:'同一作品可添加 1 名共同编辑人，支持两端自动同步。', comments:['青提：终于可以和朋友一起做同一张图了。','海盐：支持分区就太好了。','小满豆作：保存记录会保留双方编辑时间。','木木：这个功能上线之后救了好多做不完的大图。','青提：两端一起改的时候会不会覆盖？','小满豆作：会保留版本记录，不会静默覆盖。']},
      {id:'p34', date:'2023/09/17 19:26', author:'林未', title:'加班后只适合做十五格以内', tags:['闲聊','新手'], text:'超过十五格我会开始计算明天几点能睡。唐梨说我来这里还在算工时。', comments:['唐梨：所以今天我负责挑色，你负责别催。','林未：你挑色比我加班还久。','木木：太像我了。']},
      {id:'p40', date:'2023/08/22 17:08', author:'阿闻', title:'有人把寄存单夹在书里了', tags:['店员日常','寄存'], visual:'assets/img/post-p40-card.jpg', detailVisual:'assets/img/post-p40-detail.jpg', text:'今天整理柜台时，在一本本子里翻出半年前的寄存单。还好字迹够大，一眼认出是谁的。', comments:['阿闻：后来那张寄存单被我夹进了专门的文件夹。']},
      {id:'p24', date:'2023/08/05 17:36', author:'橘子', title:'空调下面真的不要熨', tags:['闲聊'], text:'刚压好的板子吹冷风太快，差点裂开。店员帮我重新固定住了。', comments:['阿闻：是的，刚压好的板先别直接吹冷风。']},
      {id:'p61', date:'2023/07/19 18:11', author:'林未', title:'今天两个人都没带伞', tags:['闲聊','雨天'], visual:'assets/img/post-p61-card.jpg', detailVisual:'assets/img/post-p61-detail.jpg', text:'本来约好下班后只坐一小时，结果雨一直没停，硬是拖到店里快关门。', comments:['唐梨：是谁说天气预报肯定不准。','林未：不记得。','阿闻：前台借伞记录还留着。','唐梨：那就更不记得了。','木木：你们两个怎么每次下雨都在店里。']},
      {id:'p49', date:'2023/06/18 15:33', author:'小严', title:'把去年寄存的门牌取走了', tags:['寄存','返图'], visual:'assets/img/post-p49-card.jpg', detailVisual:'assets/img/post-p49-detail.jpg', text:'一直放在店里忘了拿，今天终于顺路带走。发现自己去年选的颜色比现在更高饱和。', comments:['唐梨：你终于。','阿闻：寄存柜感动落泪。']},
      {id:'p41', date:'2023/05/12 20:07', author:'薄荷', title:'周五晚场比想象中安静', tags:['闲聊','晚场'], visual:'assets/img/post-p41-card.jpg', detailVisual:'assets/img/post-p41-detail.jpg', text:'本来以为会很吵，结果大家都在低头拼自己的东西，偶尔才有人抬头问一句“这个色是不是更好”。', comments:['木木：晚场氛围真的好。','阿闻：适合做那种需要慢慢磨的图。']},
      {id:'p50', date:'2023/04/20 11:12', author:'木木', title:'老会员迁移邮件竟然还在', tags:['系统','闲聊'], text:'刚整理邮箱翻到很早以前的会员通知，才想起来自己第一次去店里已经是前年了。时间过得好快。', comments:[]},
      {id:'p62', date:'2023/02/12 16:05', author:'薄荷', title:'第一次来，有人愿意一起拼小挂件吗', tags:['搭子项目','新手'], text:'一个人有点不敢进店，想找同样第一次来的。图案可以到现场再选，周六下午都行。', comments:['青提：我可以！我也第一次。','薄荷：私信你啦。','阿闻：第一次来也完全可以自己来，我们不会考试。']},
      {id:'p63', date:'2022/12/24 20:28', author:'阿闻', title:'第一场圣诞夜晚场收工', tags:['店员日常','活动','晚场'], visual:'assets/img/post-p63-card.jpg', detailVisual:'assets/img/post-p63-detail.jpg', text:'今天有人拼雪人、有人拼游戏角色，还有一桌全程只在吃饼干。最后清场的时候桌底下全是白豆。', comments:['海盐：白豆真的会隐身。','阿闻：尤其掉在浅色地板上。','木木：明年还办吗？','小满豆作：如果大家还愿意来就办。']},
      {id:'p25', date:'2022/11/19 13:17', author:'小满豆作', title:'作品寄存标签改版', tags:['寄存'], text:'寄存标签新增共同创作者栏，双人项目可以提前设置代取与转交授权。', comments:[]},
      {id:'p18', date:'2022/06/01 09:20', author:'小满豆作', title:'欢迎来到小满豆作', tags:['门店'], visual:'assets/img/post-p18-card.jpg', detailVisual:'assets/img/post-p18-detail.jpg', text:'把喜欢的东西，一颗一颗留下来。', comments:['海盐：那时候还只有两张桌子。','阿闻：后来才慢慢把色墙补齐。','木木：原来我已经看着这个店开这么久了。','橘子：当时路过以为是咖啡店。','青提：我第一次来还是被朋友拉进来的。']}
    ],
    works: [
      {id:'w01',project:'umbrella',name:'蓝色小雨伞',owner:'林未',date:'2024/07/19',type:'个人项目',status:'草稿恢复',color:'M42',desc:'15×15，小挂件。旧设备上留有一份未同步草稿。'},
      {id:'w02',project:'store',name:'便利店门口',owner:'林未 / 唐梨',date:'2024/08/17',type:'搭子项目',status:'草稿',color:'M42',desc:'20×20，共同项目。'},
      {id:'w03',project:'station',name:'公交站牌',owner:'林未 / 唐梨',date:'2024/08/17',type:'搭子项目',status:'旧图修复',color:'M42',desc:'18×18，历史预览存在缺色。'},
      {id:'w04',name:'小猫杯垫',owner:'唐梨',date:'2025/04/11',type:'公开返图',status:'已完成',color:'M08',desc:'失败品，边缘熨坏。'},
      {id:'w05',name:'灰蓝边框',owner:'唐梨',date:'2025/07/19',type:'公开返图',status:'已完成',color:'M31',desc:'20×20，旧版色号。'},
      {id:'w06',project:'final',name:'IMG_0726',owner:'林未 / 唐梨',date:'2025/07/26',last:'2025/08/03 22:17',type:'搭子项目',status:'需兼容',color:'M31',desc:'旧版图纸预览不可用；版本历史仍可读取。'},
      {id:'w07',name:'毕业花束',owner:'林未',date:'2024/05/04',type:'个人项目',status:'已导出',color:'M16',desc:'20×20，毕业礼物。'}
    ],
    projects: {
      umbrella: {
        id:'umbrella', referenceImage:'assets/img/reference-umbrella.svg', referenceThumb:'assets/img/project-umbrella-thumb.jpg', title:'蓝色小雨伞', subtitle:'旧设备草稿 · 补全', size:15, pattern:patterns.umbrella,
        palette:{B:{code:'M42',name:'灰蓝',hex:'#6d8396'},W:{code:'M01',name:'奶白',hex:'#e8e4d8'}},
        missingRate:0.46, notes:'2024/07/19 · 雨天。旧设备里还有一份没来得及同步的草稿。',
        completeText:'草稿已补全。熨烫预览里，那把伞和作品广场旧返图中的颜色几乎一样。'
      },
      store: {
        id:'store', referenceImage:'assets/img/reference-store.svg', referenceThumb:'assets/img/project-store-thumb.jpg', title:'便利店门口', subtitle:'共同项目 · 继续编辑', size:20, pattern:patterns.store,
        palette:{Y:{code:'M16',name:'奶黄',hex:'#d7b968'},W:{code:'M01',name:'奶白',hex:'#e8e4d8'},R:{code:'M26',name:'莓红',hex:'#a86468'},B:{code:'M42',name:'灰蓝',hex:'#6d8396'},S:{code:'M73',name:'深灰',hex:'#565b60'},P:{code:'M51',name:'粉紫',hex:'#ad899a'},G:{code:'M34',name:'鼠尾草',hex:'#84957f'}},
        missingRate:0.46, notes:'2024/08/17 · 两杯饮料、站牌和一个没收好的雨伞。',
        completeText:'共同草稿已补全。右下角那块灰蓝没有被系统强调，但你知道它在画什么。'
      },
      station: {
        id:'station', referenceImage:'assets/img/reference-station.svg', referenceThumb:'assets/img/project-station-thumb.jpg', title:'公交站牌', subtitle:'旧图修复 · 历史预览', size:18, pattern:patterns.station,
        palette:{S:{code:'M73',name:'深灰',hex:'#565b60'},W:{code:'M01',name:'奶白',hex:'#e8e4d8'},B:{code:'M42',name:'灰蓝',hex:'#6d8396'},Y:{code:'M16',name:'奶黄',hex:'#d7b968'}},
        missingRate:0.48, notes:'2024/08/17 · 旧图纸曾出现断色。阿闻说当时是照着历史预览一点点补回来的。',
        completeText:'修复完成。预览右侧那块灰蓝和“便利店门口”的雨伞用了同一个色号。'
      },
      free16: {
        id:'free16', free:true, freeLabel:'小底板', freeUse:'头像、挂件、简易图案', title:'自由拼豆 · 16×16', subtitle:'小底板 · 自由创作', size:16, pattern:Array(16).fill('.'.repeat(16)),
        palette:{B:{code:'M42',name:'灰蓝',hex:'#6d8396'},W:{code:'M01',name:'奶白',hex:'#e8e4d8'},Y:{code:'M16',name:'奶黄',hex:'#d7b968'},R:{code:'M26',name:'莓红',hex:'#a86468'},S:{code:'M73',name:'深灰',hex:'#565b60'},P:{code:'M51',name:'粉紫',hex:'#ad899a'},G:{code:'M34',name:'鼠尾草',hex:'#84957f'},O:{code:'M22',name:'杏橙',hex:'#c88c61'},C:{code:'M58',name:'雾青',hex:'#91aaa6'},K:{code:'M80',name:'墨黑',hex:'#353738'}},
        missingRate:1, notes:'适合第一次自由创作；格子少，比较容易在短时间内完成。 自由画布只保存在当前浏览器，不会进入旧作品档案，也不会影响主线迁移。', completeText:''
      },
      free24: {
        id:'free24', free:true, freeLabel:'标准底板', freeUse:'杯垫、小场景、常规图案', title:'自由拼豆 · 24×24', subtitle:'标准底板 · 自由创作', size:24, pattern:Array(24).fill('.'.repeat(24)),
        palette:{B:{code:'M42',name:'灰蓝',hex:'#6d8396'},W:{code:'M01',name:'奶白',hex:'#e8e4d8'},Y:{code:'M16',name:'奶黄',hex:'#d7b968'},R:{code:'M26',name:'莓红',hex:'#a86468'},S:{code:'M73',name:'深灰',hex:'#565b60'},P:{code:'M51',name:'粉紫',hex:'#ad899a'},G:{code:'M34',name:'鼠尾草',hex:'#84957f'},O:{code:'M22',name:'杏橙',hex:'#c88c61'},C:{code:'M58',name:'雾青',hex:'#91aaa6'},K:{code:'M80',name:'墨黑',hex:'#353738'}},
        missingRate:1, notes:'兼顾细节和完成时间，是最通用的自由底板。 自由画布只保存在当前浏览器，不会进入旧作品档案，也不会影响主线迁移。', completeText:''
      },
      free32: {
        id:'free32', free:true, freeLabel:'大底板', freeUse:'角色立绘、复杂图案', title:'自由拼豆 · 32×32', subtitle:'大底板 · 自由创作', size:32, pattern:Array(32).fill('.'.repeat(32)),
        palette:{B:{code:'M42',name:'灰蓝',hex:'#6d8396'},W:{code:'M01',name:'奶白',hex:'#e8e4d8'},Y:{code:'M16',name:'奶黄',hex:'#d7b968'},R:{code:'M26',name:'莓红',hex:'#a86468'},S:{code:'M73',name:'深灰',hex:'#565b60'},P:{code:'M51',name:'粉紫',hex:'#ad899a'},G:{code:'M34',name:'鼠尾草',hex:'#84957f'},O:{code:'M22',name:'杏橙',hex:'#c88c61'},C:{code:'M58',name:'雾青',hex:'#91aaa6'},K:{code:'M80',name:'墨黑',hex:'#353738'}},
        missingRate:1, notes:'有更多空间处理轮廓与阴影，适合愿意慢慢拼的玩家。 自由画布只保存在当前浏览器，不会进入旧作品档案，也不会影响主线迁移。', completeText:''
      },
      free40: {
        id:'free40', free:true, freeLabel:'超大底板', freeUse:'大场景、高细节作品', title:'自由拼豆 · 40×40', subtitle:'超大底板 · 自由创作', size:40, pattern:Array(40).fill('.'.repeat(40)),
        palette:{B:{code:'M42',name:'灰蓝',hex:'#6d8396'},W:{code:'M01',name:'奶白',hex:'#e8e4d8'},Y:{code:'M16',name:'奶黄',hex:'#d7b968'},R:{code:'M26',name:'莓红',hex:'#a86468'},S:{code:'M73',name:'深灰',hex:'#565b60'},P:{code:'M51',name:'粉紫',hex:'#ad899a'},G:{code:'M34',name:'鼠尾草',hex:'#84957f'},O:{code:'M22',name:'杏橙',hex:'#c88c61'},C:{code:'M58',name:'雾青',hex:'#91aaa6'},K:{code:'M80',name:'墨黑',hex:'#353738'}},
        missingRate:1, notes:'细节空间最大；建议使用缩放和移动画布，草稿会持续自动保存。 自由画布只保存在当前浏览器，不会进入旧作品档案，也不会影响主线迁移。', completeText:''
      },
      final: {
        id:'final', referenceImage:'assets/img/reference-final.svg', title:'IMG_0726', subtitle:'共同项目 · 旧版兼容', size:18, pattern:patterns.table,
        palette:{S:{code:'M73',name:'深灰',hex:'#565b60'},P:{code:'M51',name:'粉紫',hex:'#ad899a'},G:{code:'M34',name:'鼠尾草',hex:'#84957f'},W:{code:'M01',name:'奶白',hex:'#e8e4d8'},R:{code:'M26',name:'莓红',hex:'#a86468'},B:{code:'M42',name:'灰蓝',hex:'#6d8396'}},
        missingRate:0, finalExpected:'B', notes:'最后正常编辑：2025/07/26 18:41。备注：最后一颗让她放。',
        completeText:'最后一颗落下。画面仍只是桌子、两杯饮料、两把镊子和一个空椅子。桌角那一点灰蓝，和两年前那把雨伞是同一个颜色。'
      }
    },
    bookings: [
      {date:'2025/07/26',time:'18:00–22:00',name:'唐梨',seat:'03',note:'单人 / 大底板',status:'已到店'},
      {date:'2025/07/24',time:'14:00–16:00',name:'棉花糖',seat:'02',note:'双人 / 新手',status:'已到店'},
      {date:'2025/07/19',time:'19:00–21:00',name:'唐梨',seat:'03',note:'单人 / 旧图续拼',status:'已到店'},
      {date:'2025/07/18',time:'13:00–15:00',name:'木木',seat:'01',note:'单人 / 小底板',status:'已到店'},
      {date:'2025/07/12',time:'15:00–18:00',name:'薄荷',seat:'04',note:'双人 / 大底板',status:'已到店'},
      {date:'2025/07/08',time:'18:30–21:30',name:'唐梨',seat:'03',note:'单人 / 大底板',status:'已到店'},
      {date:'2025/06/16',time:'14:00–17:00',name:'唐梨',seat:'03',note:'单人 / 旧图续拼',status:'已到店'},
      {date:'2025/05/22',time:'19:00–21:00',name:'木木',seat:'02',note:'单人 / 配色',status:'已到店'},
      {date:'2025/04/11',time:'19:30–22:00',name:'唐梨',seat:'03',note:'单人 / 杯垫',status:'已到店'}
    ],
    materials: [
      {code:'M01',name:'奶白',stock:'停业前 2246',note:'常用底色'},
      {code:'M16',name:'奶黄',stock:'停业前 831',note:'低饱和黄色'},
      {code:'M26',name:'莓红',stock:'停业前 612',note:'旧版 R4'},
      {code:'M31',name:'灰蓝（旧）',stock:'停用',note:'2025/07/18 起由兼容表映射至 M42'},
      {code:'M34',name:'鼠尾草',stock:'停业前 506',note:'低饱和绿色'},
      {code:'M40',name:'雾蓝',stock:'停业前 291',note:'比 M42 更浅，熨后偏青'},
      {code:'M42',name:'灰蓝',stock:'停业前 374',note:'M31 兼容替代'},
      {code:'M51',name:'粉紫',stock:'停业前 428',note:'旧版 P7'},
      {code:'M73',name:'深灰',stock:'停业前 1180',note:'描边常用'},
      {code:'M00',name:'系统占位',stock:'—',note:'不对应实体豆色，仅用于旧版数据迁移'}
    ],
    deviceLog: [
      {time:'2025/07/26 18:41',device:'门店工作台 03',project:'IMG_0726',action:'保存 v17',detail:'豆数 72'},
      {time:'2025/08/03 22:17',device:'门店工作台 03',project:'IMG_0726',action:'保存 v18',detail:'豆数 95'},
      {time:'2025/08/12 03:00',device:'系统迁移任务',project:'IMG_0726',action:'生成兼容索引',detail:'不修改图纸'},
      {time:'2025/08/12 03:00',device:'系统迁移任务',project:'便利店门口',action:'生成兼容索引',detail:'不修改图纸'}
    ],
    materialsUsage: [
      {project:'IMG_0726',theory:96,used:97,source:'门店材料核销记录',note:'含 1 颗未映射旧色号'},
      {project:'便利店门口',theory:182,used:182,source:'门店材料核销记录',note:'正常'},
      {project:'公交站牌',theory:74,used:74,source:'历史预览修复',note:'按修复完成后的网格统计；旧图未形成单独核销单'},
      {project:'蓝色小雨伞',theory:58,used:58,source:'历史订单',note:'正常'}
    ],
    accountEvents: [
      {date:'2025/07/28 09:12',name:'唐梨',type:'协作者账户状态',text:'共同项目协作者账户转为冻结只读。旧项目仍保留原创建人与授权关系。'},
      {date:'2026/08/12 03:00',name:'林未',type:'迁移索引',text:'旧作品与寄存授权已写入最终迁移索引。'}
    ],
    faq: [
      {q:'共同创作人联系不上怎么办？',a:'共同项目默认由双方共同保留。若一方超过 90 日无法完成迁移确认，剩余协作者可根据创建时授权申请导出、转交或删除云端副本。'},
      {q:'旧版 M31 为什么打不开？',a:'M31 为旧版灰蓝。2025/07/18 起，新版兼容表映射至 M42。兼容处理只影响当前预览，不会改写历史版本。'},
      {q:'为什么作品显示的“索引时间”会变？',a:'系统迁移可能重新生成索引时间，但不会生成新的作品版本。判断是否真的编辑过，请查看版本号、豆数和设备日志。'},
      {q:'M00 是什么颜色？',a:'M00 不是实体颜色，是旧版数据迁移使用的系统占位符。正常会员图纸中不应出现实体 M00 豆。'},
      {q:'作品寄存超过 30 天怎么办？',a:'寄存到期后可继续寄存、邮寄、转交共同创作者或销毁。若会员已设置预授权，则按预授权处理。'},
      {q:'失败的作品可以重新熨吗？',a:'轻微翘边可以补熨；严重熨糊不建议二次加热，可能进一步变形。'},
      {q:'手机上可以编辑图纸吗？',a:'可以。支持画布内双指缩放、按钮缩放、拖动连续放豆、撤销和长按擦除。小屏设备会默认放大单格，画布区域可以横向滚动。'},
      {q:'门店工作台编号怎么看？',a:'店内共 4 台平板，编号 01–04，与座位号一致，例如 03 号座位对应“门店工作台 03”。历史项目的设备日志会保留对应编号。'},
      {q:'停业后还有人能登录门店工作台吗？',a:'线下停业后门店设备不再对会员开放。系统迁移任务使用独立服务账号，不会以“门店工作台 01–04”记录。'},
      {q:'可以自带豆子吗？',a:'可以，但店员无法保证不同品牌豆子的熔点一致。混用时建议先做小范围熨烫测试。'},
      {q:'预约迟到会保留多久？',a:'原线下门店默认保留 20 分钟；周末满场时超过 20 分钟可能释放座位。'},
      {q:'如何导出全部数据？',a:'进入“我的工作台 → 账号与迁移”，可导出图纸 PNG、编辑历史 JSON 与寄存记录 PDF。未映射色号需要先生成兼容预览。'},
      {q:'自由拼豆有哪些底板尺寸？',a:'自由拼豆提供 16×16、24×24、32×32 和 40×40 四种空白底板。每种尺寸独立保存本机草稿，可在图纸工具或自由画布顶部用左右箭头切换；手机也支持横向滑动选择。'}
    ],
    timeline: { deathDate:'2025/07/27', frozenDate:'2025/07/28', closedDate:'2025/07/29', strangeEdit:'2025/08/03 22:17' }
  };
})();

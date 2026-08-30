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
      {id:'p26',date:'2025/07/28 16:40',author:'小满豆作',title:'本周寄存柜暂缓清理',tags:['寄存','门店'],text:'因门店设备维护，本周原定清理的长期寄存作品顺延。需要邮寄的会员可以先在线登记。',comments:['橘子：那我下周再来拿。']},
      {id:'p02',date:'2025/07/24 14:12',author:'小满豆作',title:'新手第一次来，选多大底板比较合适？',tags:['新手','FAQ'],text:'第一次建议 15×15 或 20×20。图案越大不一定越好，能在两小时内收尾更有成就感。',comments:['橙子汽水：真的，第一次做 30×30 做到怀疑人生。']},
      {id:'p03',date:'2025/07/21 17:44',author:'棉花糖',title:'小猫杯垫翻车但意外能用',tags:['返图','杯垫'],visual:'assets/img/coaster-drawer.jpg',text:'耳朵熨歪了，不过正好拿来压便签。老板说失败品不要急着扔。',comments:[]},
      {id:'p04',date:'2025/07/19 19:36',author:'唐梨',title:'还是蓝色好看',tags:['返图','灰蓝'],visual:'assets/img/bead-bins.jpg',text:'纠结了半小时，最后还是把边框换回灰蓝。M31 快没了，店员说新版色号已经到了。',comments:['阿闻：你已经连续三次选蓝色了😂','唐梨：因为某人以前说蓝色耐看。']},
      {id:'p05',date:'2025/07/18 12:09',author:'小满豆作',title:'M42 灰蓝到货',tags:['材料','补货'],text:'M42 与旧版 M31 视觉接近，但熨烫后饱和度略低。旧图纸迁移可在图纸工具里做色号兼容。',comments:['唐梨：终于。']},
      {id:'p06',date:'2025/07/12 16:20',author:'薄荷',title:'周末人好多',tags:['闲聊'],visual:'assets/img/store-photo.jpg',text:'四张桌子全满，隔壁姐妹拼一只超级大的柴犬，围观了半小时。',comments:['椒盐：我也看到了！']},
      {id:'p07',date:'2025/06/29 18:02',author:'阿闻',title:'谁又把镊子放进绿色豆盒了',tags:['店员日常'],visual:'assets/img/bead-bins.jpg',text:'今天第三次从绿色豆盒里捞出镊子。以后每桌我都要贴一张“镊子有自己的家”。',comments:['西瓜泡泡：哈哈哈哈哈']},
      {id:'p08',date:'2025/06/16 13:55',author:'唐梨',title:'独自拼豆效率竟然更高',tags:['返图','日常'],text:'原本约的人又加班。一个人坐了三小时，居然比以前两个人一起快。',comments:['阿闻：但你还是拿了两杯饮料。','唐梨：顺手。']},
      {id:'p09',date:'2025/05/22 20:18',author:'木木',title:'像素花束求配色建议',tags:['求助','配色'],text:'想做毕业礼物，黄色感觉有点刺眼，有没有更柔和的替代色？',comments:['阿闻：可以试试 M16 奶黄。']},
      {id:'p10',date:'2025/05/03 15:01',author:'小满豆作',title:'五一预约已满',tags:['预约'],text:'5 月 3 日至 5 日所有时段已满，现场候位时间约 40–80 分钟。',comments:[]},
      {id:'p11',date:'2025/04/11 22:09',author:'阿闻',title:'今天有人把坏掉的作品留给我当杯垫',tags:['店员日常'],text:'边缘彻底熨糊，但当杯垫居然很稳。她说下次再做一个正常的。',comments:['唐梨：不许丢。']},
      {id:'p12',date:'2025/03/07 11:40',author:'春卷',title:'第一次做像素雨伞',tags:['返图','雨伞'],text:'蓝色比想象中更显灰，放在包上很好看。',comments:[]},
      {id:'p29',date:'2025/06/02 20:41',author:'唐梨',title:'今天只想做不用改第七版的东西',tags:['日常','返图'],text:'白天的展板又改了一轮，下班后坐窗边拼了一个小时。小东西有个好处：哪里不对，自己拿起来改就行。',comments:['小严：你明天还是要改第八版。','唐梨：别提醒我。']},
      {id:'p30',date:'2025/02/14 19:17',author:'唐梨',title:'试着做了一套摆摊价签',tags:['返图','日常'],visual:'assets/img/price-tags.jpg',text:'本来只是想做两个色号牌，最后顺手拼了一整套。真摆摊的话大概会先被自己收纳豆子的速度劝退。',comments:['小严：先把你答应我的工位门牌做完。','唐梨：排队。']},
      {id:'p31',date:'2024/09/03 21:28',author:'唐梨',title:'如果周末真的去摆摊',tags:['闲聊','日常'],text:'想过做一些很小的挂件，不接复杂定制，只摆自己喜欢的颜色。想法目前停留在“买了一个收纳箱”。',comments:['青提：这已经是第一步了。','唐梨：第一步放了两个月。']},
      {id:'p32',date:'2024/04/14 15:32',author:'唐梨',title:'同事的工位门牌终于交货',tags:['返图','日常'],visual:'assets/img/desk-sign.jpg',text:'小严催了三周。字比图难拼，最后一排拆了四次才顺眼。',comments:['小严：本人验收通过。','阿闻：你俩下班以后还在验收😂']},
      {id:'p35',date:'2025/01/08 22:36',author:'阿闻',title:'考完一门来值晚班',tags:['店员日常','闲聊'],visual:'assets/img/awen-study.jpg',text:'脑子里全是选择题，今晚谁来都不要问我“这个蓝和那个蓝哪个好看”。我会让你两个都买。',comments:['木木：店员开始报复社会。']},
      {id:'p36',date:'2024/03/30 18:43',author:'阿闻',title:'我把自己的第一块熨坏了',tags:['店员日常','返图'],text:'每天帮别人熨，轮到自己反而压太久。现在它是前台最丑但最牢的杯垫。',comments:['唐梨：所以你不能再笑我的。','阿闻：你的还是更丑一点。']},
      {id:'p19',date:'2025/07/30 10:26',author:'阿闻',title:'柜台抽屉先别清',tags:['店员日常'],visual:'assets/img/coaster-drawer.jpg',text:'柜台里那只熨坏的杯垫先不清了。昨天从共同朋友那里才知道，唐梨以后不会再来拿了。',comments:['纸飞机：她是 27 号走的，之前一直没敢跟你说。','阿闻：知道了。先放着吧。']},
      {id:'p01',date:'2025/07/26 21:08',author:'阿闻',title:'今天最后一位客人拼到打烊',tags:['店员日常','晚场'],visual:'assets/img/melted-drinks.jpg',text:'灰蓝豆又快见底了。最后一位客人说剩下那一点下次再来补。桌上两杯饮料最后都化得差不多。',comments:['@九格：你们几点打烊？','阿闻：平时十点，今天拖到十点半。']},
      {id:'p27',date:'2025/07/08 21:46',author:'阿闻',title:'03号桌今天又拼公交站',tags:['店员日常','大底板'],visual:'assets/img/bus-stop.jpg',text:'旧图断色三次，最后还是拿历史预览一点点补。那个人说“反正站牌歪一点也看得出来”。',comments:['青提：03号桌是不是窗边那个？','阿闻：对，雨天最容易被窗户反光照到。']},
      {id:'p13',date:'2024/12/24 18:22',author:'小满豆作',title:'圣诞夜提前闭店',tags:['营业'],text:'今晚 20:00 闭店，预约用户请留意短信。',comments:[]},
      {id:'p14',date:'2024/11/02 16:33',author:'可乐加冰',title:'两个人拼同一张图真的会吵架',tags:['搭子项目'],text:'一个嫌颜色不对，一个嫌强迫症。最后还是一起拼完了。',comments:['唐梨：太真实了。']},
      {id:'p15',date:'2024/08/17 19:05',author:'阿闻',title:'今天的公交站牌好难熨',tags:['店员日常','大底板'],text:'边缘太细，来回补了三次。下次做同款我一定先拍照留底。',comments:[]},
      {id:'p16',date:'2024/07/19 17:19',author:'林未',title:'下雨也要来拼',tags:['返图','雨天'],visual:'thumb:umbrella',text:'躲雨躲进店里，最后干脆坐了一下午。',comments:['唐梨：你还把伞忘在店里。','林未：你不是拿了吗。']},
      {id:'p33',date:'2024/02/18 16:08',author:'林未',title:'今天终于承认自己会为了歪一颗全部重排',tags:['闲聊','搭子项目'],text:'本来只是边框有一颗偏了，拆着拆着半圈都没了。有人坐对面笑了十分钟。',comments:['唐梨：差一颗也看得出来是什么。','林未：看得出来和看着难受是两件事。']},
      {id:'p34',date:'2023/09/17 19:26',author:'林未',title:'加班后只适合做十五格以内',tags:['闲聊','新手'],text:'超过十五格我会开始计算明天几点能睡。唐梨说我来这里还在算工时。',comments:['唐梨：所以今天我负责挑色，你负责别催。','林未：你挑色比我加班还久。']},
      {id:'p28',date:'2024/07/19 19:02',author:'阿闻',title:'雨天关店前的桌面',tags:['店员日常','雨天'],visual:'assets/img/rain-day.jpg',text:'今天雨大，窗边桌全是水印。有人走的时候忘了一把蓝色折叠伞，已经挂前台了。',comments:[]},
      {id:'p20',date:'2024/06/08 16:11',author:'海盐',title:'第一次做手机挂件',tags:['返图','新手'],text:'小图真的很适合新手，两小时内能做完，回家一路都在看。',comments:['阿闻：记得别暴晒，会有一点点翘。']},
      {id:'p21',date:'2024/05/20 19:48',author:'青提',title:'情侣款最后做成了姐妹款',tags:['返图','搭子项目'],text:'朋友临时来救场，最后把原本的情侣配色改掉了，意外更好看。',comments:[]},
      {id:'p22',date:'2024/03/02 14:06',author:'小满豆作',title:'周末加开午后场',tags:['预约'],text:'3 月起周六、周日增加 12:30 入场时段。大底板建议至少预留三小时。',comments:[]},
      {id:'p17',date:'2023/10/09 12:26',author:'小满豆作',title:'搭子项目上线',tags:['系统','搭子项目'],text:'同一作品可添加 1 名共同编辑人，支持两端自动同步。',comments:[]},
      {id:'p24',date:'2023/08/05 17:36',author:'橘子',title:'空调下面真的不要熨',tags:['闲聊'],text:'刚压好的板子吹冷风太快，差点裂开。店员帮我重新固定住了。',comments:[]},
      {id:'p23',date:'2023/12/31 18:50',author:'阿闻',title:'今年最后一桌收工',tags:['店员日常'],text:'地上捡了四十多颗豆，最大的愿望是明年大家都把豆倒进盘子里再选。',comments:['九九：不可能。']},
      {id:'p25',date:'2022/11/19 13:17',author:'小满豆作',title:'作品寄存标签改版',tags:['寄存'],text:'寄存标签新增共同创作者栏，双人项目可以提前设置代取与转交授权。',comments:[]},
      {id:'p18',date:'2022/06/01 09:20',author:'小满豆作',title:'欢迎来到小满豆作',tags:['门店'],text:'把喜欢的东西，一颗一颗留下来。',comments:[]}
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
        id:'umbrella', referenceImage:'assets/img/reference-umbrella.svg', title:'蓝色小雨伞', subtitle:'旧设备草稿 · 补全', size:15, pattern:patterns.umbrella,
        palette:{B:{code:'M42',name:'灰蓝',hex:'#6d8396'},W:{code:'M01',name:'奶白',hex:'#e8e4d8'}},
        missingRate:0.46, notes:'2024/07/19 · 雨天。旧设备里还有一份没来得及同步的草稿。',
        completeText:'草稿已补全。熨烫预览里，那把伞和作品广场旧返图中的颜色几乎一样。'
      },
      store: {
        id:'store', referenceImage:'assets/img/reference-store.svg', title:'便利店门口', subtitle:'共同项目 · 继续编辑', size:20, pattern:patterns.store,
        palette:{Y:{code:'M16',name:'奶黄',hex:'#d7b968'},W:{code:'M01',name:'奶白',hex:'#e8e4d8'},R:{code:'M26',name:'莓红',hex:'#a86468'},B:{code:'M42',name:'灰蓝',hex:'#6d8396'},S:{code:'M73',name:'深灰',hex:'#565b60'},P:{code:'M51',name:'粉紫',hex:'#ad899a'},G:{code:'M34',name:'鼠尾草',hex:'#84957f'}},
        missingRate:0.46, notes:'2024/08/17 · 两杯饮料、站牌和一个没收好的雨伞。',
        completeText:'共同草稿已补全。右下角那块灰蓝没有被系统强调，但你知道它在画什么。'
      },
      station: {
        id:'station', referenceImage:'assets/img/reference-station.svg', title:'公交站牌', subtitle:'旧图修复 · 历史预览', size:18, pattern:patterns.station,
        palette:{S:{code:'M73',name:'深灰',hex:'#565b60'},W:{code:'M01',name:'奶白',hex:'#e8e4d8'},B:{code:'M42',name:'灰蓝',hex:'#6d8396'},Y:{code:'M16',name:'奶黄',hex:'#d7b968'}},
        missingRate:0.48, notes:'2024/08/17 · 旧图纸曾出现断色。阿闻说当时是照着历史预览一点点补回来的。',
        completeText:'修复完成。预览右侧那块灰蓝和“便利店门口”的雨伞用了同一个色号。'
      },
      free16: {
        id:'free16', free:true, freeLabel:'小底板', freeUse:'头像、挂件、简易图案', title:'自由拼豆 · 16×16', subtitle:'小底板 · 自由创作', size:16, pattern:Array(16).fill('*'.repeat(16)),
        palette:{B:{code:'M42',name:'灰蓝',hex:'#6d8396'},W:{code:'M01',name:'奶白',hex:'#e8e4d8'},Y:{code:'M16',name:'奶黄',hex:'#d7b968'},R:{code:'M26',name:'莓红',hex:'#a86468'},S:{code:'M73',name:'深灰',hex:'#565b60'},P:{code:'M51',name:'粉紫',hex:'#ad899a'},G:{code:'M34',name:'鼠尾草',hex:'#84957f'},O:{code:'M22',name:'杏橙',hex:'#c88c61'},C:{code:'M58',name:'雾青',hex:'#91aaa6'},K:{code:'M80',name:'墨黑',hex:'#353738'}},
        missingRate:1, notes:'适合第一次自由创作；格子少，比较容易在短时间内完成。 自由画布只保存在当前浏览器，不会进入旧作品档案，也不会影响主线迁移。', completeText:''
      },
      free24: {
        id:'free24', free:true, freeLabel:'标准底板', freeUse:'杯垫、小场景、常规图案', title:'自由拼豆 · 24×24', subtitle:'标准底板 · 自由创作', size:24, pattern:Array(24).fill('*'.repeat(24)),
        palette:{B:{code:'M42',name:'灰蓝',hex:'#6d8396'},W:{code:'M01',name:'奶白',hex:'#e8e4d8'},Y:{code:'M16',name:'奶黄',hex:'#d7b968'},R:{code:'M26',name:'莓红',hex:'#a86468'},S:{code:'M73',name:'深灰',hex:'#565b60'},P:{code:'M51',name:'粉紫',hex:'#ad899a'},G:{code:'M34',name:'鼠尾草',hex:'#84957f'},O:{code:'M22',name:'杏橙',hex:'#c88c61'},C:{code:'M58',name:'雾青',hex:'#91aaa6'},K:{code:'M80',name:'墨黑',hex:'#353738'}},
        missingRate:1, notes:'兼顾细节和完成时间，是最通用的自由底板。 自由画布只保存在当前浏览器，不会进入旧作品档案，也不会影响主线迁移。', completeText:''
      },
      free32: {
        id:'free32', free:true, freeLabel:'大底板', freeUse:'角色立绘、复杂图案', title:'自由拼豆 · 32×32', subtitle:'大底板 · 自由创作', size:32, pattern:Array(32).fill('*'.repeat(32)),
        palette:{B:{code:'M42',name:'灰蓝',hex:'#6d8396'},W:{code:'M01',name:'奶白',hex:'#e8e4d8'},Y:{code:'M16',name:'奶黄',hex:'#d7b968'},R:{code:'M26',name:'莓红',hex:'#a86468'},S:{code:'M73',name:'深灰',hex:'#565b60'},P:{code:'M51',name:'粉紫',hex:'#ad899a'},G:{code:'M34',name:'鼠尾草',hex:'#84957f'},O:{code:'M22',name:'杏橙',hex:'#c88c61'},C:{code:'M58',name:'雾青',hex:'#91aaa6'},K:{code:'M80',name:'墨黑',hex:'#353738'}},
        missingRate:1, notes:'有更多空间处理轮廓与阴影，适合愿意慢慢拼的玩家。 自由画布只保存在当前浏览器，不会进入旧作品档案，也不会影响主线迁移。', completeText:''
      },
      free40: {
        id:'free40', free:true, freeLabel:'超大底板', freeUse:'大场景、高细节作品', title:'自由拼豆 · 40×40', subtitle:'超大底板 · 自由创作', size:40, pattern:Array(40).fill('*'.repeat(40)),
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
      {project:'公交站牌',theory:null,used:null,source:'历史预览修复',note:'旧图未形成单独核销单'},
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

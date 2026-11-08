export interface AirportData {
  name: string
  path: string
  image: string
  price: number
  priceText: string
  // Normal cycle reference when the entry price is an introductory offer.
  // This is not a claim that every provider's eventual renewal quote is verified.
  regularPrice?: number
  traffic: string
  // null means current free-trial availability has not been verified.
  trial: boolean | null
  // null means the advertised no-expiry package has conflicting validity terms.
  noExpiry: boolean | null
  dedicatedClient: boolean
  // null means the current subscription method or conditions are not verified.
  universalSubscription: boolean | null
  scenarios: string[]
  status: string
  risk: string
  summary: string
  subscriptionClients?: string[]
  informationSources?: { name: string; url: string; checkedAt: string; link?: boolean }[]
  performance?: AirportPerformanceSnapshot
  salesSample?: number
}

export interface AirportMetrics {
  count: number
  trialCount: number
  noExpiryCount: number
  noExpiryUnverifiedCount: number
  dedicatedClientCount: number
  universalSubscriptionCount: number
  cheapUnderTenCount: number
  averagePrice: number
  regularCheapUnderTenCount: number
  regularAveragePrice: number
  performanceCount: number
  salesSampleCount: number
}

export interface AirportSalesSampleMeta {
  observedAt: string
  source: string
  caveat: string
}

export interface AirportPerformanceSnapshot {
  // A missing grade means ungraded evidence, not a claim of superior performance.
  evidenceLevel: 'A' | 'B' | 'C' | null
  lastTestedAt: string
  testWindow: string
  testRegion: string
  testNetwork: string
  testDevice: string
  // null means no single, traceable latency figure is available.
  latencyMs: number | null
  downloadMbpsRange: string
  chatgptResult: string
  youtube4kResult: string
  stability: string
  evidenceSummary: string
  evidenceSources?: { name: string; url: string }[]
}

export const testingPolicyEffectiveDate = '2026-08-18'
export const historicalTestingNotice = '旧测速截图、性能数值与结论已从公开资料移除；现有资料仅用于套餐、客户端与风险核对'
export const mainRecommendationNames = ['神行加速', '大佬云', '榴莲云', '云界线', '闪电鼠', '环球梯', '光速云'] as const

export const airportData: AirportData[] = [
  {
    "name": "神行加速",
    "path": "/posts/shenxingjiasu-review-2026/",
    "image": "/shouye.png",
    "price": 13.92,
    "priceText": "13.92元/月",
    "traffic": "100GB/月",
    "trial": false,
    "noExpiry": true,
    "dedicatedClient": true,
    "universalSubscription": true,
    "scenarios": [
      "clash",
      "chatgpt",
      "streaming",
      "newbie"
    ],
    "status": "资料已核对",
    "risk": "不支持退款；不支持免费试用；通用订阅需购买订阅后联系客服领取",
    "summary": "新客使用优惠券sx0077立享7折：折后月付13.92元100GB（年付148.4元）、17.42元150GB、27.22元300GB、48.22元666GB；96元年付特惠60GB/月（不享折扣，折约8元/月）。另有100GB 99元、333GB 298元不限时流量包（不享折扣）。Windows账号登录专属客户端，iOS Nextin专属码sxjs。不支持免费试用，通用订阅需购买后联系客服领取，不接受退款。",
    "informationSources": [
      {
        "name": "神行加速套餐页",
        "url": "https://www1.shenxingjstt.xyz/#/plans",
        "checkedAt": "2026-11-07",
        "link": false
      },
      {
        "name": "神行加速客户端教程",
        "url": "https://www1.shenxingjstt.xyz/#/knowledge",
        "checkedAt": "2026-11-07",
        "link": false
      },
      {
        "name": "神行加速优惠公告",
        "url": "https://www1.shenxingjstt.xyz/#/dashboard",
        "checkedAt": "2026-11-07",
        "link": false
      },
      {
        "name": "神行加速官网邀请入口",
        "url": "https://wuhan01.shenxingaff.com/#/?code=WUQMrgI8",
        "checkedAt": "2026-11-07"
      },
      {
        "name": "神行加速试用与订阅规则（人工补充）",
        "url": "/posts/shenxingjiasu-review-2026/",
        "checkedAt": "2026-11-07",
        "link": false
      }
    ]
  },
  {
    "name": "榴莲云",
    "path": "/posts/liulianyun-review-2026/",
    "image": "/shouye.png",
    "price": 16.8,
    "priceText": "16.80元/月",
    "traffic": "140GB/月",
    "trial": false,
    "noExpiry": false,
    "dedicatedClient": true,
    "universalSubscription": true,
    "scenarios": [
      "chatgpt",
      "streaming",
      "newbie",
      "clash"
    ],
    "status": "资料已核对",
    "risk": "不支持免费试用；通用订阅需购买后向客服领取；退款待核实；优惠码ll88不适用年付特惠版与防腐不限时包",
    "summary": "新客使用优惠码ll88立享7折：折后小榴莲月付16.80元140GB（年付230.4元）、好榴莲28.00元260GB、猫山王42.00元420GB、大黑刺70.00元750GB；96元年付金枕特惠包60GB/月（不享折扣，折约8元/月）。另有99元100GB、498元500GB防腐不限时流量包（不享折扣）。四端账号登录客户端，iOS Nextin专属码lly。通用订阅需向客服领取，不支持免费试用，退款待核实。",
    "informationSources": [
      {
        "name": "榴莲云试用与订阅规则（人工补充）",
        "url": "/posts/liulianyun-review-2026/",
        "checkedAt": "2026-11-07",
        "link": false
      },
      {
        "name": "榴莲云套餐页",
        "url": "https://www2.liulianyuntt.xyz/#/plans",
        "checkedAt": "2026-11-07",
        "link": false
      },
      {
        "name": "榴莲云客户端教程",
        "url": "https://www2.liulianyuntt.xyz/#/knowledge",
        "checkedAt": "2026-11-07",
        "link": false
      },
      {
        "name": "榴莲云官网邀请入口",
        "url": "https://fugui007.liulianyunaff.com/#/?code=Y6A1M1MN",
        "checkedAt": "2026-11-07"
      }
    ]
  },
  {
    "name": "云界线",
    "path": "/posts/yunjiexian-review-2026/",
    "image": "/shouye.png",
    "price": 13.92,
    "priceText": "13.92元/月",
    "traffic": "100GB/月",
    "trial": false,
    "noExpiry": true,
    "dedicatedClient": true,
    "universalSubscription": true,
    "scenarios": [
      "newbie"
    ],
    "status": "资料已核对",
    "risk": "不支持免费试用；通用订阅需购买后向客服领取；退款待核实；优惠码yjx888不适用年付特惠版与不限时包",
    "summary": "新客使用优惠码yjx888立享7折：折后云界线·性价包月付13.92元100GB（年付212元）、基础包17.42元150GB、进阶包27.22元300GB；96元年付特惠版60GB/月（不享折扣，折约8元/月）。另有99元80GB与199元200GB不限时包（不享折扣）。Windows账号登录自有客户端，iOS用Nextin识别码yjx，另有Android与Mac教程。支持通用订阅需联系客服领取。全光纤物理专线互联，不支持退款与试用。",
    "informationSources": [
      {
        "name": "云界线试用与订阅规则（人工补充）",
        "url": "/posts/yunjiexian-review-2026/",
        "checkedAt": "2026-11-07",
        "link": false
      },
      {
        "name": "云界线套餐页",
        "url": "https://www1.yunjiexiant.xyz/#/plans",
        "checkedAt": "2026-11-07",
        "link": false
      },
      {
        "name": "云界线客户端知识库",
        "url": "https://www1.yunjiexiant.xyz/#/knowledge",
        "checkedAt": "2026-11-07",
        "link": false
      },
      {
        "name": "云界线仪表盘与优惠公告",
        "url": "https://www1.yunjiexiant.xyz/#/dashboard",
        "checkedAt": "2026-11-07",
        "link": false
      },
      {
        "name": "云界线官网邀请入口",
        "url": "https://fugui0077.yunjiexianaff.com/#/?code=FVkiFyAx",
        "checkedAt": "2026-11-08"
      }
    ]
  },
  {
    "name": "闪电鼠",
    "path": "/posts/shandianshu-review-2026/",
    "image": "/shouye.png",
    "price": 13.92,
    "priceText": "13.92元/月",
    "traffic": "100GB/月",
    "trial": false,
    "noExpiry": false,
    "dedicatedClient": true,
    "universalSubscription": false,
    "scenarios": [
      "newbie",
      "chatgpt",
      "streaming"
    ],
    "status": "资料已核对",
    "risk": "不支持免费试用和通用订阅；退款待核实；优惠码sd88不适用年付特惠版与不限时包",
    "summary": "新客使用优惠码sd88立享7折：折后闪电鼠·性价版月付13.92元100GB（年付188元）、进阶版17.42元150GB、疾速版27.22元250GB、雷霆版48.22元500GB；96元年付钜惠小包60GB/月（不享折扣，折约8元/月）。另有200GB 268元、500GB 498元不限时流量包（不享折扣）。提供四平台客户端教程，iOS使用Nextin识别码sd88。不支持免费试用和通用订阅，退款待核实。",
    "informationSources": [
      {
        "name": "闪电鼠试用与订阅规则（人工补充）",
        "url": "/posts/shandianshu-review-2026/",
        "checkedAt": "2026-11-07",
        "link": false
      },
      {
        "name": "闪电鼠套餐页",
        "url": "https://www2.shandiantt.xyz/#/plans",
        "checkedAt": "2026-11-07",
        "link": false
      },
      {
        "name": "闪电鼠使用教程",
        "url": "https://www2.shandiantt.xyz/#/knowledge",
        "checkedAt": "2026-11-07",
        "link": false
      },
      {
        "name": "闪电鼠下载中心",
        "url": "https://www2.shandiantt.xyz/#/downloads",
        "checkedAt": "2026-11-07",
        "link": false
      },
      {
        "name": "闪电鼠新人优惠公告",
        "url": "https://www2.shandiantt.xyz/#/dashboard",
        "checkedAt": "2026-11-07",
        "link": false
      }
    ]
  },
  {
    "name": "环球梯",
    "path": "/posts/huanqiuti-review-2026/",
    "image": "/shouye.png",
    "price": 15,
    "priceText": "15元/月",
    "traffic": "60GB/月",
    "trial": false,
    "noExpiry": false,
    "dedicatedClient": true,
    "universalSubscription": false,
    "scenarios": [
      "newbie",
      "chatgpt",
      "streaming"
    ],
    "status": "资料已核对",
    "risk": "按量包详情限365天，与卡片终身标签不同；不支持免费试用和通用订阅，退款待核实；微享最低套餐不享受折扣",
    "summary": "环球梯最低套餐环球微享为15元/月60GB（不享受折扣），另有轻享19元110GB、畅享29元200GB等；96元年付学生套餐60GB/月（不享折扣，折约8元/月）。另有按量买断包39元30GB起。提供四平台客户端教程，iOS使用Nextin识别码hqt。不支持免费试用和通用订阅，退款待核实。",
    "informationSources": [
      {
        "name": "环球梯试用与订阅规则（人工补充）",
        "url": "/posts/huanqiuti-review-2026/",
        "checkedAt": "2026-11-07",
        "link": false
      },
      {
        "name": "环球梯套餐页",
        "url": "https://www2.huanqiutitt.xyz/#/plans",
        "checkedAt": "2026-11-07",
        "link": false
      },
      {
        "name": "环球梯客户端教程",
        "url": "https://www2.huanqiutitt.xyz/#/knowledge",
        "checkedAt": "2026-11-07",
        "link": false
      },
      {
        "name": "环球梯客户端下载与优惠公告",
        "url": "https://www2.huanqiutitt.xyz/#/dashboard",
        "checkedAt": "2026-11-07",
        "link": false
      }
    ]
  },
  {
    "name": "拼好连",
    "path": "/posts/pinghaolian-review-2026/",
    "image": "/shouye.png",
    "price": 0,
    "priceText": "0元起/免费试用",
    "traffic": "免费/按量",
    "trial": true,
    "noExpiry": false,
    "dedicatedClient": true,
    "universalSubscription": false,
    "scenarios": [
      "free",
      "cheap",
      "newbie"
    ],
    "status": "新收录观察",
    "risk": "免费APP节点存在严重超售、高峰卡顿、IP风控严格及公用网络隐私风险；仅适合临时测通与应急，不建议登录重要敏感账号",
    "summary": "拼好连提供免费APP节点，无通用订阅链接导入，需下载其专属APP使用。针对免费APP节点的带宽成本与商业模式进行客观分析，提示公用网络安全性、节点拥挤丢包、风控拦截以及随时失效跑路风险。",
    "informationSources": [
      {
        "name": "拼好连免费试用规则与套餐文案（经核验）",
        "url": "/posts/pinghaolian-review-2026/",
        "checkedAt": "2026-11-07",
        "link": false
      },
      {
        "name": "拼好连提供免费APP节点（经核验）",
        "url": "/posts/pinghaolian-review-2026/",
        "checkedAt": "2026-11-07",
        "link": false
      },
      {
        "name": "拼好连官网入口",
        "url": "https://pinghaolian.cc",
        "checkedAt": "2026-11-07"
      }
    ]
  },
  {
    "name": "大佬云",
    "path": "/posts/dalaoyun-review-2026/",
    "image": "/shouye.png",
    "price": 13.99,
    "priceText": "13.99元/月",
    "traffic": "100GB/月",
    "trial": false,
    "noExpiry": true,
    "dedicatedClient": true,
    "universalSubscription": true,
    "scenarios": [
      "newbie",
      "clash",
      "chatgpt",
      "streaming"
    ],
    "status": "资料已核对",
    "risk": "不支持直接免费试用（入群领体验包）；退款条款待核实；换购套餐覆盖余量不退款；7折码dly88不适用年付与不限时包",
    "summary": "新客使用优惠码dly88立享7折：折后财云·福利版月付13.99元100GB（年付188.99元）、初云·进阶版17.50元150GB、凌云·基础版30.10元300GB、御云·高级版51.10元600GB；96元年付活动包60GB/月（不享折扣，折约8元/月）。另有200GB 268元、500GB 498元不限时流量包（不享折扣）。Windows、macOS与Android提供自研客户端，iOS使用Nextin专属码dly，支持通用订阅。换购套餐覆盖余量且不退款，退款政策待核实。",
    "informationSources": [
      {
        "name": "大佬云试用与订阅规则（人工补充）",
        "url": "/posts/dalaoyun-review-2026/",
        "checkedAt": "2026-11-07",
        "link": false
      },
      {
        "name": "大佬云套餐页",
        "url": "https://www1.dalaoyuntt.xyz/#/plans",
        "checkedAt": "2026-11-07",
        "link": false
      },
      {
        "name": "大佬云客户端教程",
        "url": "https://www1.dalaoyuntt.xyz/#/download",
        "checkedAt": "2026-11-07",
        "link": false
      },
      {
        "name": "大佬云优惠公告",
        "url": "https://www1.dalaoyuntt.xyz/#/dashboard",
        "checkedAt": "2026-11-07",
        "link": false
      },
      {
        "name": "大佬云官网邀请入口",
        "url": "https://fugui0077.dalaoyunaff.com/#/?code=Wpfk4XD5",
        "checkedAt": "2026-11-07"
      }
    ]
  },
  {
    "name": "边缘节点",
    "path": "/posts/bianyuan-review-2026/",
    "image": "/shouye.png",
    "price": 15,
    "priceText": "15元/月",
    "traffic": "50GB/月",
    "trial": false,
    "noExpiry": true,
    "dedicatedClient": true,
    "universalSubscription": false,
    "scenarios": [
      "streaming",
      "chatgpt",
      "newbie"
    ],
    "status": "资料已核对",
    "risk": "15元体验小包不参加优惠；全系不支持免费试用与通用订阅；退款条款待核实；依赖专属客户端生态",
    "summary": "限时体验15元/月50GB，标准22元/月120GB；98元年付每月45GB，不限时100元100GB或399元450GB。常规套餐展示xk808八折码，体验月付不参加。提供四端客户端，iOS使用Nextin识别码edgenova0526；不支持免费试用和通用订阅。",
    "informationSources": [
      {
        "name": "边缘节点试用与订阅规则（人工补充）",
        "url": "/posts/bianyuan-review-2026/",
        "checkedAt": "2026-11-07",
        "link": false
      },
      {
        "name": "边缘节点套餐页",
        "url": "https://fvfetg.ztymforedge.lol/#/plans",
        "checkedAt": "2026-11-07",
        "link": false
      },
      {
        "name": "边缘节点客户端下载",
        "url": "https://fvfetg.ztymforedge.lol/#/dashboard",
        "checkedAt": "2026-11-07",
        "link": false
      },
      {
        "name": "边缘节点优惠公告",
        "url": "https://fvfetg.ztymforedge.lol/#/dashboard",
        "checkedAt": "2026-11-07",
        "link": false
      },
      {
        "name": "边缘节点官网邀请入口",
        "url": "https://wep.edgenovaaff.com/#/?code=q1BOP7EV",
        "checkedAt": "2026-11-07"
      }
    ]
  },
  {
    "name": "快狸",
    "path": "/posts/kuaili-review-2026/",
    "image": "/shouye.png",
    "price": 15,
    "priceText": "15元/月",
    "traffic": "50GB/月",
    "trial": false,
    "noExpiry": false,
    "dedicatedClient": true,
    "universalSubscription": true,
    "scenarios": [
      "newbie",
      "chatgpt",
      "clash",
      "streaming"
    ],
    "status": "资料已核对",
    "risk": "官方公告遇恶意攻击抢修；不支持免费试用；夜狸季付高于连续月付；退款待核实",
    "summary": "15元月付50GB起，120元年付30GB/月；22元100GB、35元250GB、95元500GB、180元1000GB月付，周期流量每30天刷新。提供四平台客户端，iOS使用Nextin识别码kuaili0421，并有Clash Mi订阅导入教程。夜狸季付290元高于三个月月付285元，年付并非统一8折；官方公告遇恶意攻击抢修中；IEPL、解锁与不限设备为商家说明。",
    "informationSources": [
      {
        "name": "快狸试用规则（人工补充）",
        "url": "/posts/kuaili-review-2026/",
        "checkedAt": "2026-11-07",
        "link": false
      },
      {
        "name": "快狸套餐页",
        "url": "https://iasfa.kuailitztz2.sbs/#/plans",
        "checkedAt": "2026-11-07",
        "link": false
      },
      {
        "name": "快狸客户端下载与公告",
        "url": "https://iasfa.kuailitztz2.sbs/#/dashboard",
        "checkedAt": "2026-11-07",
        "link": false
      },
      {
        "name": "快狸官网邀请入口",
        "url": "https://fanxiaobin.kuailiaff.com/#/?code=K0WKmH8h",
        "checkedAt": "2026-11-07"
      }
    ]
  },
  {
    "name": "飞V",
    "path": "/posts/feiv-review-2026/",
    "image": "/covers/posts-feiv-review-2026.png",
    "price": 22,
    "priceText": "22元/月",
    "traffic": "150GB/月",
    "trial": false,
    "noExpiry": true,
    "dedicatedClient": true,
    "universalSubscription": false,
    "scenarios": [
      "newbie",
      "chatgpt",
      "streaming"
    ],
    "status": "资料已核对",
    "risk": "不支持免费试用与通用订阅；全套餐不接受退款；新客8折码fly20不适用买断包",
    "summary": "月付22元150GB起（年付224.4元），另有99元年付轻量版65GB/月（折约8.25元/月）。提供三档终身不限时流量包：189元130GB、479元380GB、799元600GB。提供Windows、macOS、Android自研客户端及iOS Nextin支持。新客享8折优惠码fly20（买断包除外）。不支持免费试用和通用订阅，不接受退款。",
    "informationSources": [
      {
        "name": "飞V试用与订阅规则（人工补充）",
        "url": "/posts/feiv-review-2026/",
        "checkedAt": "2026-11-07",
        "link": false
      },
      {
        "name": "飞V套餐页",
        "url": "https://ehju.flyvastt.lol/#/plans",
        "checkedAt": "2026-11-07",
        "link": false
      },
      {
        "name": "飞V客户端下载",
        "url": "https://ehju.flyvastt.lol/#/dashboard",
        "checkedAt": "2026-11-07",
        "link": false
      },
      {
        "name": "飞V优惠公告",
        "url": "https://ehju.flyvastt.lol/#/dashboard",
        "checkedAt": "2026-11-07",
        "link": false
      },
      {
        "name": "飞V官网邀请入口",
        "url": "https://fugui.flyvaff.com/#/?code=gxmUajhy",
        "checkedAt": "2026-11-07"
      }
    ]
  },
  {
    "name": "灵动云",
    "path": "/posts/lingdongyun-review-2026/",
    "image": "/covers/posts-lingdongyun-review-2026.png",
    "price": 20,
    "priceText": "20元/月",
    "traffic": "100GB/月",
    "trial": false,
    "noExpiry": true,
    "dedicatedClient": true,
    "universalSubscription": false,
    "scenarios": [
      "newbie",
      "chatgpt",
      "streaming"
    ],
    "status": "资料已核对",
    "risk": "不支持免费试用与通用订阅；全套餐不接受退款；优惠码需加入官方Telegram群获取",
    "summary": "月付20元100GB起（年付204元），另有99元年付穿云版70GB/月（折约8.25元/月）。提供三档永久有效不限时流量包：199元150GB、499元400GB、899元800GB。提供Windows、macOS、Android自研客户端及iOS Nextin支持。官方设Telegram交流群发布最新福利。不支持免费试用和通用订阅，不接受退款。",
    "informationSources": [
      {
        "name": "灵动云试用与订阅规则（人工补充）",
        "url": "/posts/lingdongyun-review-2026/",
        "checkedAt": "2026-11-07",
        "link": false
      },
      {
        "name": "灵动云套餐页",
        "url": "https://nbqmhk.lingdongttt.sbs/#/plans",
        "checkedAt": "2026-11-07",
        "link": false
      },
      {
        "name": "灵动云客户端下载",
        "url": "https://nbqmhk.lingdongttt.sbs/#/dashboard",
        "checkedAt": "2026-11-07",
        "link": false
      },
      {
        "name": "灵动云官方交流群公告",
        "url": "https://nbqmhk.lingdongttt.sbs/#/dashboard",
        "checkedAt": "2026-11-07",
        "link": false
      },
      {
        "name": "灵动云官网邀请入口",
        "url": "https://fugui.lingdongaff.com/#/?code=lyfEXnqR",
        "checkedAt": "2026-11-07"
      }
    ]
  },
  {
    "name": "光速云",
    "path": "/posts/guangsuyun-review-2026/",
    "image": "/shouye.png",
    "price": 25,
    "priceText": "25元/月",
    "traffic": "168GB/月",
    "trial": false,
    "noExpiry": true,
    "dedicatedClient": true,
    "universalSubscription": false,
    "scenarios": [
      "newbie"
    ],
    "status": "资料已核对",
    "risk": "不支持免费试用；严禁私自拉取订阅导入第三方客户端（违者封号）；退款待核实；年付轻量B版与永久C套餐不享额外折扣",
    "summary": "光速云主打全IPLC/IEPL物理专线与单节点最高2.5Gbps峰值速率，晚高峰全节点x1倍率且不限并发设备。极速A版月付25元168GB（年付179元折合14.92元/月），另有99元/年69GB/月轻量B版专属年付包。此外配备致敬斯诺克147元247GB永久不过期不限时包。全平台提供Windows、Android、Mac专属自研客户端与iOS Nextin（识别码gsy）。官方公告严禁拉取订阅导入第三方客户端，违者封号；不支持免费试用与退款。",
    "informationSources": [
      {
        "name": "光速云试用与订阅规则（人工补充）",
        "url": "/posts/guangsuyun-review-2026/",
        "checkedAt": "2026-11-08",
        "link": false
      },
      {
        "name": "光速云官网套餐页",
        "url": "https://aoprh.gasyuztt.xyz/#/plans",
        "checkedAt": "2026-11-08",
        "link": false
      },
      {
        "name": "光速云自研客户端知识库",
        "url": "https://aoprh.gasyuztt.xyz/#/knowledge",
        "checkedAt": "2026-11-08",
        "link": false
      },
      {
        "name": "光速云仪表盘公告",
        "url": "https://aoprh.gasyuztt.xyz/#/dashboard",
        "checkedAt": "2026-11-08",
        "link": false
      },
      {
        "name": "光速云官网邀请入口",
        "url": "https://j98j.gsyvipaff.com/#/?code=9506F5Sq",
        "checkedAt": "2026-11-08"
      }
    ]
  }
] as unknown as AirportData[]

export const hiddenAirportStatuses = new Set(['已淘汰', '停止推荐', '下架'])

export const isVisibleAirport = (airport: AirportData) => !hiddenAirportStatuses.has(airport.status)

export const visibleAirportData = airportData.filter(isVisibleAirport)

// Date of the last full review; partial updates retain their per-source checkedAt dates.
export const airportDataLastReviewed = '2026-08-19'
// Advance for actual changes to current data or its classification, not historical test dates.
export const airportDataLastModified = '2026-11-08'

export const getAirportPriceMetrics = (airports: readonly AirportData[]) => {
  const visible = airports.filter(isVisibleAirport)
  const average = (prices: number[]) => prices.length
    ? Number((prices.reduce((total, price) => total + price, 0) / prices.length).toFixed(1)) : 0
  const entryPrices = visible.map((airport) => airport.price)
  const regularPrices = visible.map((airport) => airport.regularPrice ?? airport.price)
  return {
    cheapUnderTenCount: entryPrices.filter((price) => price < 10).length,
    averagePrice: average(entryPrices),
    regularCheapUnderTenCount: regularPrices.filter((price) => price < 10).length,
    regularAveragePrice: average(regularPrices),
  }
}

export const airportMetrics: AirportMetrics = {
  count: visibleAirportData.length,
  trialCount: visibleAirportData.filter((airport) => airport.trial === true).length,
  noExpiryCount: visibleAirportData.filter((airport) => airport.noExpiry === true).length,
  noExpiryUnverifiedCount: visibleAirportData.filter((airport) => airport.noExpiry === null).length,
  dedicatedClientCount: visibleAirportData.filter((airport) => airport.dedicatedClient).length,
  universalSubscriptionCount: visibleAirportData.filter((airport) => airport.universalSubscription === true).length,
  ...getAirportPriceMetrics(visibleAirportData),
  performanceCount: visibleAirportData.filter((airport) => airport.performance).length,
  salesSampleCount: visibleAirportData.filter((airport) => typeof airport.salesSample === 'number').length,
}

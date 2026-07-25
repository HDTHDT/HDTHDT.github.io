const PROJECTS = [
  {
    id: "outrun", index: "01", title: "OUTRUN", type: "3D STEALTH / SURVEILLANCE",
    status: "VIDEO ONLINE", layout: "wide", tone: "dark",
    image: "assets/works/outrun-scene.jpg", secondary: "assets/works/outrun-map.jpg",
    alt: "OUTRUN 废弃街机厅场景", secondaryAlt: "OUTRUN 关卡空间结构",
    lead: "你只能从监控死角里拼出猎手的路线，再决定何时穿过它的视野。",
    description: "固定机位将场景拆成彼此断开的片段。玩家通过切换监控、比对敌人动线和短暂暴露的位置，逐步拼出一条可行的撤离路线。",
    tags: ["UNREAL ENGINE 5.5", "SCENE CAPTURE", "AI PERCEPTION", "BEHAVIOR TREE", "SPATIAL INFO"],
    video: "assets/video/outrun-demo.mp4"
  },
  {
    id: "canary", index: "02", title: "CANARY", type: "STEALTH ACTION / WESTERN",
    status: "IN DEVELOPMENT", layout: "standard", tone: "light",
    image: "assets/works/canary-stealth.jpg", secondary: "assets/works/canary-duel.jpg",
    alt: "CANARY 西部潜行场景", secondaryAlt: "CANARY 快枪手战斗画面",
    lead: "潜行负责制造机会，拔枪负责结束僵局。",
    description: "玩家需要利用视线死角接近目标，并在警戒升级前完成行动。暴露后，关卡不会简单重置，而是转入短促、致命的拔枪对决。",
    tags: ["PROTOTYPE", "AWARENESS", "STEALTH KILL", "QUICK DRAW", "MISSION FLOW"]
  },
  {
    id: "twins", index: "03", title: "LIGHT × DARK", type: "LOCAL CO-OP / ROGUELIKE",
    status: "WINDOWS BUILD", layout: "tall", tone: "acid",
    image: "assets/works/twins-combat.jpg", secondary: "assets/works/twins-barrage.jpg",
    alt: "光暗双生合作战斗画面", secondaryAlt: "光暗双生弹幕战斗画面",
    lead: "共享的不只是战场，还有相依为命的羁绊。",
    description: "光与暗拥有不同的攻防能力，并通过距离、能量与复活机制相互牵制。反射弹幕、掩护走位和救援时机共同决定每一轮战斗的节奏。",
    tags: ["GODOT", "DUAL STATE", "REVIVE LINK", "PROJECTILE REFLECT", "SHOP LOOP"],
    action: { label: "GET WINDOWS DEMO ↓", href: "https://github.com/HDTHDT/HDTHDT.github.io/releases/download/v1.0.0/light-dark-twins-win.zip" }
  },
  {
    id: "limitless", index: "04", title: "LIMITLESS / 界", type: "2D PHYSICS / LEVEL PUZZLE",
    status: "DEMO ONLINE", layout: "wide", tone: "dark",
    image: "assets/works/limitless-level.jpg", secondary: "assets/works/limitless-laser.jpg",
    alt: "界的传送带物理关卡", secondaryAlt: "界的激光障碍关卡",
    lead: "前进的关键不是绕过障碍，而是改变自身遵守的规则。",
    description: "有限状态受碰撞与重力约束，无限状态则可以穿过边界。玩家需要在两种状态之间切换，借助局部引力、传送带和激光完成路径解题。",
    tags: ["GODOT", "STATE SWITCH", "RANGE GRAVITY", "COLLISION", "PHYSICS TUNING"],
    action: { label: "GET WINDOWS DEMO ↓", href: "https://github.com/HDTHDT/HDTHDT.github.io/releases/download/v1.0.0/limitless-win.zip" }
  },
  {
    id: "nightshift", index: "05", title: "NIGHT SHIFT", type: "NARRATIVE PUZZLE / STATE UI",
    status: "DEMO DOWNLOAD", layout: "standard", tone: "light",
    image: "assets/works/nightshift-office.jpg", secondary: "assets/works/nightshift-museum.jpg",
    alt: "夜班办公室调查场景", secondaryAlt: "夜班恐龙馆调查场景",
    lead: "每一次调查都会留下状态，并改变之后能够看到的世界。",
    description: "对话选择、能力检定、物品和场景热点使用同一组调查状态。已获得的线索会改变后续对话与可交互内容，让办公室和博物馆成为一条连续的调查路径。",
    tags: ["UNITY", "DIALOGUE", "CHECK ROLL", "INVENTORY", "STATE TRIGGER"],
    action: { label: "GET WINDOWS DEMO ↓", href: "https://github.com/HDTHDT/HDTHDT.github.io/releases/download/v1.0.0/nightshift-demo-win.zip" }
  },
  {
    id: "wok", index: "06", title: "BUBBLING WOK", type: "CARD GAME / SOCIAL BLUFFING",
    status: "GGJ 2025", layout: "small", tone: "yellow",
    image: "assets/works/wok-cover.jpg", secondary: "assets/works/wok-cards.jpg",
    alt: "冒泡的锅封面插画", secondaryAlt: "冒泡的锅实体卡牌",
    lead: "每次加料，都是一次糊锅的试探。",
    description: "玩家轮流向锅中加料，也可以检查、转移或放大风险。角色能力和特殊泡泡不断改变局势，胜负取决于读牌、试探与及时收手。",
    tags: ["BOARD GAME", "HIDDEN INFO", "TURN PHASE", "ROLE SKILL", "RISK CONTROL"]
  },
  {
    id: "vr", index: "07", title: "VR MUSEUM", type: "XR EXHIBITION / AI GUIDE",
    status: "HEADSET REQUIRED", layout: "standard", tone: "lab",
    image: "assets/works/vr-entry.jpg", secondary: "assets/works/vr-guide.jpg", secondaryPair: "assets/works/vr-museum-scene.png",
    alt: "VR 博物馆入口空间", secondaryAlt: "VR 博物馆 AI 数字讲解员", secondaryPairAlt: "VR 博物馆展厅场景",
    lead: "信息不再附着于展板，而是分布在参观者的行走路径上。",
    description: "文物节点、空间导览和数字人对话共同组织参观动线。界面与提示依据头显中的观看距离重新排布，保证移动和驻足时都能清楚读取。",
    tags: ["UNREAL ENGINE 5.5", "OPENXR", "CONVAI", "SPATIAL UI", "VR PERFORMANCE"]
  }
];

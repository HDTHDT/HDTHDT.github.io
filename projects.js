const PROJECTS = [
  {
    id: "outrun", index: "01", title: "OUTRUN", type: "3D STEALTH / SURVEILLANCE",
    status: "VIDEO ONLINE", engine: "UNREAL ENGINE", layout: "wide", tone: "dark",
    image: "assets/works/outrun-scene.jpg", secondary: "assets/works/outrun-map.jpg",
    alt: "OUTRUN 废弃街机厅场景", secondaryAlt: "OUTRUN 关卡空间结构",
    lead: "被切碎的视野迫使玩家重建空间。",
    description: "固定监控只提供局部信息。玩家需要切换视角、追踪敌人动线，在空间信息不完整时规划逃脱路线。",
    tags: ["SCENE CAPTURE", "AI PERCEPTION", "BEHAVIOR TREE", "SPATIAL INFO"],
    video: "assets/video/outrun-demo.mp4"
  },
  {
    id: "canary", index: "02", title: "CANARY", type: "STEALTH ACTION / WESTERN",
    status: "IN DEVELOPMENT", engine: "ACTION PROTOTYPE", layout: "standard", tone: "light",
    image: "assets/works/canary-stealth.jpg", secondary: "assets/works/canary-duel.jpg",
    alt: "CANARY 西部潜行场景", secondaryAlt: "CANARY 快枪手战斗画面",
    lead: "潜行的耐心与快枪的爆发被压进同一条节奏曲线。",
    description: "观察敌人、压低警戒、规划接近路线；一旦暴露，体验立即切换为短促而高压的快枪战斗。",
    tags: ["AWARENESS", "STEALTH KILL", "QUICK DRAW", "MISSION FLOW"]
  },
  {
    id: "twins", index: "03", title: "LIGHT × DARK", type: "LOCAL CO-OP / ROGUELIKE",
    status: "WINDOWS BUILD", engine: "GODOT", layout: "tall", tone: "acid",
    image: "assets/works/twins-combat.jpg", secondary: "assets/works/twins-barrage.jpg",
    alt: "光暗双生合作战斗画面", secondaryAlt: "光暗双生弹幕战斗画面",
    lead: "合作不是并排输出，而是持续共享风险。",
    description: "能量、距离与复活窗口把两名玩家绑定在同一个战斗系统中。弹幕反射与救援时机共同决定节奏。",
    tags: ["DUAL STATE", "REVIVE LINK", "PROJECTILE REFLECT", "SHOP LOOP"]
  },
  {
    id: "limitless", index: "04", title: "LIMITLESS / 界", type: "2D PHYSICS / LEVEL PUZZLE",
    status: "DEMO ONLINE", engine: "GODOT / GGJ 2024", layout: "wide", tone: "dark",
    image: "assets/works/limitless-level.jpg", secondary: "assets/works/limitless-laser.jpg",
    alt: "界的传送带物理关卡", secondaryAlt: "界的激光障碍关卡",
    lead: "每次推进，都是对世界规则本身的切换。",
    description: "有限状态遵守碰撞与重力；无限状态能够越过边界。引力范围、传送带与激光共同构成关卡语言。",
    tags: ["STATE SWITCH", "RANGE GRAVITY", "COLLISION", "PHYSICS TUNING"],
    action: { label: "WATCH DEMO ↗", href: "https://www.bilibili.com/video/BV1LRhSeMEkb", external: true }
  },
  {
    id: "nightshift", index: "05", title: "NIGHT SHIFT", type: "NARRATIVE PUZZLE / STATE UI",
    status: "DEMO DOWNLOAD", engine: "UNITY", layout: "standard", tone: "light",
    image: "assets/works/nightshift-office.jpg", secondary: "assets/works/nightshift-museum.jpg",
    alt: "夜班办公室调查场景", secondaryAlt: "夜班恐龙馆调查场景",
    lead: "调查结果持续改变下一步可见的信息。",
    description: "对话、检定、物品栏与场景热点共享同一套状态记录，在办公室和博物馆中形成连续的调查路径。",
    tags: ["DIALOGUE", "CHECK ROLL", "INVENTORY", "STATE TRIGGER"],
    action: { label: "GET WINDOWS DEMO ↓", href: "https://github.com/HDTHDT/HDTHDT.github.io/releases/download/v1.0.0/nightshift-demo-win.zip" }
  },
  {
    id: "wok", index: "06", title: "BUBBLING WOK", type: "CARD GAME / SOCIAL BLUFFING",
    status: "GGJ 2025", engine: "TABLETOP", layout: "small", tone: "yellow",
    image: "assets/works/wok-cover.jpg", secondary: "assets/works/wok-cards.jpg",
    alt: "冒泡的锅封面插画", secondaryAlt: "冒泡的锅实体卡牌",
    lead: "每次加料，都是一次带有隐藏信息的试探。",
    description: "出牌、检查和结算被包装成逐渐失控的烹饪流程。角色技能与特殊泡泡持续改变桌面风险。",
    tags: ["HIDDEN INFO", "TURN PHASE", "ROLE SKILL", "RISK CONTROL"]
  },
  {
    id: "vr", index: "07", title: "VR MUSEUM", type: "XR EXHIBITION / AI GUIDE",
    status: "HEADSET REQUIRED", engine: "UNREAL ENGINE 5.5", layout: "standard", tone: "lab",
    image: "assets/works/vr-entry.jpg", secondary: "assets/works/vr-guide.jpg",
    alt: "VR 博物馆入口空间", secondaryAlt: "VR 博物馆 AI 数字讲解员",
    lead: "展陈动线被转化为可行走的信息空间。",
    description: "文物节点、空间导览与数字人语音交互共同组织参观路径，所有提示都围绕头显视野保持可读。",
    tags: ["OPENXR", "CONVAI", "SPATIAL UI", "VR PERFORMANCE"]
  }
];
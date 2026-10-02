# 象形运动图形（Pictogram Motion）— 风格提示词

> 一部卡在节拍上的闪卡影片，只用三样东西构成：由圆形、半圆和微小纹样单元组成、整行互相错滑的**方格"核心图形"**；由圆头短棒和圆盘头构成的**几何象形运动员**；以及从遮罩里上滑而出的**粗壮双语字体**。每一次剪辑都踩在鼓点上。
> 演示片：*Aichi-Nagoya 2026 — All 43 Sports*（爱知-名古屋 2026——全部 43 个项目，英日版，163.6 s，1920×1080 @ 60 fps，150 BPM，70 张项目卡，无旁白）· `pictogram-motion.mp4` · 源码在 `demo/` · 引擎：Canvas2D（`engine.js` + `scenes.js` + `poses/*.js`）、无头 Chrome 逐帧捕获、numpy 合成配乐。
> 参考（仅参考其语法）：Otl Aicher 的 1972 慕尼黑象形图（几何运动员）；多项目运动会的"赛事视觉识别"系统（一套模块化纹样 + 一组颜色用于一切）；瑞士体育转播图形（等宽元信息文字、刻度条进度）。学习其语法；绝不照抄任何真实赛事的象形图、会徽、口号或纹样美术。

> **版权说明。** 演示片是为真实赛事——第 20 届亚洲运动会爱知-名古屋 2026——制作的粉丝宣传片。赛事名称（AICHI-NAGOYA 2026 / THE 20TH ASIAN GAMES）、口号（IMAGINE ONE ASIA / ここで、ひとつに。）、代码绘出的红日加五环类会徽标记、五色调色板及其颜色名、以及网格纹样语言，均遵循主办方的视觉识别。它们属于主办方（爱知-名古屋亚运会组委会 / 亚奥理事会）。`demo/ref/` 存有从赛事官网下载的官方图片，仅供参考。它们从不被画进影片，也不得再分发。**这个风格的每一部新影片都必须替换所有赛事专属元素**（见 §10.6）。

你正在以**象形运动图形（Pictogram Motion）**风格导演一部影片。用户给你一个主题。其余一切（条目清单、章节、颜色、节奏、音乐）由你决定，并交付一部完成的影片。遵循本指南。

---

## 1. 这个风格是什么

一部**目录式影片**：一组 N 个条目（体育项目、产品、功能、菜品、步骤）一次一张卡、快速地、踩着节拍展示。每张卡 = **一个象形图做一个动作 + 一个巨大标题 + 一行第二语言 + 一个等宽序号 "07 / 43"**。卡片分组为章节。每章占五色调色板中的一色。每章以一张满幅纹样章卡开场。

可识别的构成要素：
1. **网格纹样**（"核心图形"）：180 px 方格。大圆盘和半圆盘横跨单元。约一半单元带一个小母题（鱼鳞浪、点鳞、三角鳞、条纹落日、齿轮/日轮、月牙、同心弧、棋盘、渐变四分之一圆盘……）。纹样使用**同一色相的 5 个明度**，并且**整行整行被切开横向错位**。行错位是签名：它驱动背景、章节节拍和主要转场。
2. **象形运动员**：平面、无脸、由圆头短棒加圆盘头构成。近侧肢体用前景色绘制，远侧肢体用在背景色方向混合 42 % 的颜色绘制。道具同样几何：圆盘、圆环、胶囊、直线。
3. **字体即建筑**：900 字重的格罗特斯克标题（Inter Tight）设 150–330 px 高，下面一行重磅 CJK（Noto Sans JP）。角落里是小的 DM Mono 元信息文字，像转播 HUD。

基调是高级的体育转播识别系统：平涂色、除一次柔和的光扫外无渐变、无描边、除极轻的胶片颗粒外无纹理。

## 2. 故事：什么适合这个风格

| 天生优势 | 故事用法 |
|---|---|
| **一卡一条目** | 任何 20–80 样东西的清单：运动会的每个项目、一套工具的每件、一道流程的每站。数量本身就是钩子（"ALL 43 SPORTS"）。 |
| **章节 = 颜色** | 把清单分成 5–7 个家族。每个家族拿一种调色板色相，观众永远知道自己身在何处。 |
| **象形动作** | 每个条目需要一个 1.6 s 内读得出的*动词*（投、跳、挥、蹬）。如果条目没有身体动作，给一个道具动作（齿轮转动、杯子倾倒）。 |
| **节奏阶梯** | 普通卡 4 拍（1.6 s）。子家族变成 2 拍连珠炮连发（4 种泳姿、4 个自行车分项、球拍类），在不改 BPM 的情况下给影片第二档节奏。 |
| **长镜头** | 第一个也是最大的章节是一次沿轨道的横向镜头：14 个站点各隔一屏，每次剪辑换拍配一次甩镜。用在"主角"家族上。 |
| **大终章网格** | 所有条目以 9×5 图标墙回归、翻入、统一成一色、坍缩成一颗太阳，然后是口号和片尾卡。 |

**故事形态（演示）：** 心跳冷开场（墨色上一颗搏动的红点、周围画出圆环）→ 五色满幅纹样上的标题砸入 → 三次计数（43 SPORTS / 469 EVENTS / 16 DAYS）→ "ON YOUR MARKS… SET…" 配半拍静默 → 7 章 70 卡 → 图标墙终章 → 口号 → 片尾卡 → 随音乐的延音淡黑。

改编一个主题：列出条目；分成 5–7 章；给每个条目一个一拍动词；选一章做长镜头；选哪些连发走 2 拍；给终章写一句两行口号。

## 3. 视觉语言

**画布**：1920×1080，网格 `G.CELL = 180`（10.7 列 × 6 行）。一切对齐网格：章带 2 行高、转场按 180 px 行或 240 px 列切、终章墙 9×5。

**调色板**（`engine.js` → `G.PAL`；每个色相有五个明度 `t[0]` 最深 → `t[4]` 最浅；`t[2]` 为基准）。演示取值采样自官方核心图形：

| key | 演示名 | t[0] | t[1] | **t[2] 基准** | t[3] | t[4] | fg（字体与人形） |
|---|---|---|---|---|---|---|---|
| red | Jonetsu Red 情热红 | `#c21d15` | `#d22419` | **`#e83220`** | `#ec5a26` | `#f07a45` | 奶油 `#fbf6ec` |
| purple | Kakitsubata Purple 杜若紫 | `#231a6e` | `#2c2084` | **`#4e3a93`** | `#644d9d` | `#7a62a9` | 奶油 |
| green | Shinrin Green 森林绿 | `#006d35` | `#008440` | **`#079a3e`** | `#2da547` | `#68b15d` | 奶油 |
| gold | Kinshachi Gold 金鯱金 | `#b48900` | `#c69b00` | **`#d5b102`** | `#debc2f` | `#e7d16c` | 深 `#211904` |
| ochre | Dento Ocher 传统赭 | `#946a2e` | `#ac7d38` | **`#c18e46`** | `#d2a55c` | `#e0bf84` | 深 `#1e1409` |
| ink | Sumi 墨 | `#0f0c15` | `#16121d` | **`#1e1a27`** | `#2a2535` | `#3a3447` | 奶油，强调 = 金 |

奶油 `G.CREAM = #fbf6ec`、墨 `G.INK = #15111c`。**金色和赭色用深色字体与深色人形**；其余用奶油色。`G.CYCLE = ['red','purple','green','gold','ochre']` 是多色章节和开场纹样的轮换顺序。普通卡上纹样以 `spread 0.42` 绘制（低对比，字体才读得出），章卡上 `spread 0.95`（全对比）。

**纹样**（`G.pattern(palKey, seed, {spread, density})`）：用 `t[1]` 填底。每个网格节点上，34 % 的概率放一个随机明度的半径 `CELL` 圆盘，16 % 的概率放一个 `t[3]` 圆盘内嵌 `t[0]` 半径圆盘。然后 `density` 比例的单元拿到 14 种母题之一（`G.motif` 种类 0–13）：四分之一圆盘、半圆盘、圆盘 + 点、条纹落日、*青海波*鱼鳞浪、点鳞圆盘、三角鳞、同心弧、日轮/齿轮、棋盘、月牙、S 波、渐变四分之一圆盘、渐隐条。每个母题旋转随机的 90° 倍数。画布比屏幕宽 3 个单元，任何一行都能错位 ±1 单元。**所有母题都是通用几何。**不要把赛事吉祥物、地标或产品画进单元。

**象形人形**（`G.joints` + `G.drawFigure`）：单位为身高 = 1，原点在髋。段长：躯干 0.30、颈 0.045、头半径 0.082、上臂 0.16、前臂 0.15、大腿与小腿 0.225。宽度：躯干 0.145、臂 0.076、腿 0.094，全部圆头端点。绘制顺序：远腿、远臂（颜色 `far` = fg 向背景混合 42 %）、然后躯干、近腿、近臂、头（fg）。第二个人（对手或搭档）以 `far2`（60 % 混合）画在后面。卡片中人形站在一颗**太阳圆盘**上（r 360–380 px，浅 fg 色相用 `t[1]`、金/赭用 `t[4]`、墨用 `t[3]`），盘上有一道缓慢的 9 % 白光扫过。

**卡片版式**（`layoutOf(s)`，每章按序串如 `ball: 'ACBAB'` 轮换）：
- **A**：文字块居左（x 130，基线 610）；圆盘和人形居右（中心 1290，横向泳姿用 1370）；右下一个 300 px 描边序号，20 % 不透明度。
- **M**：A 的镜像（人形居左 640，文字右对齐到 1800）。
- **B**：标题**撑满画面**（330 px、颜色 `t[1]`/`t[4]`"幽灵"明度、单行适配 1760 px）。圆盘和人形压*在*标题上。底部信息条有 80 px 的日文名、44 px 的英文名和右对齐的等宽元信息。2 拍球拍连发始终用 B。
- **C**：左侧一块实心 820 px 面板（`t[0]` 或 `t[4]`）擦入，带 10 % 的 90 px 发丝网格和文字块；纹样、圆盘和人形在右侧（1370）。

**字体**（`demo/fonts/`，全部 OFL）：
- 标题：Inter Tight 900，170 px（C 版 150，轨道上 160），字距 −0.02 em，用 `G.fitFont` 自动适配 820 px。
- 第二语言：Noto Sans JP 900 @ 92 px（英日版）或 Noto Sans SC 900（中文版，附一行 28 px/500 的日文）。
- 元信息：DM Mono 500 22 px，字距 3 px，如 `ATHLETICS   01 / 43`。标签：等宽小片（`5×5 · 3×3`、红色的 `NEW`）。
- HUD（每张卡和章卡）：四角 DM Mono 17 px（左上赛事行、右上章节）和底部一条 **43 格刻度进度条**。当前条目是 4 px 高刻度；已完成 75 %，其余 28 %。

**颗粒**：只在封装时加（`noise=c0s=4:c0f=t+u`）。画布本身干净。

## 4. 动效

- **时间网格**：150 BPM，1 拍 = 0.4 s，1 小节 = 1.6 s。每个镜头从拍上开始（`edl.js`），姿势中每个关键动作都落在整数拍 `u` 上（出手、触球、落地）。
- **缓动**：几乎每个入场都用 `E.oExp`（指数缓出）；甩镜和擦除用 `E.ioExp`；面板和圆盘用 `E.o5`/`E.o3`；`E.oBack` 只用于开场第一个点。
- **字体入场**：`G.maskText` 让每行从裁剪矩形下方上滑（标题 0–0.5 s、日文行 +0.08 s、标签 +0.2 s）。元信息逐字打出（`G.typeText`，无光标）。2 拍卡把所有时间压缩为 0.7 倍。
- **人形拼装**：前 0.42 s（2 拍卡 0.28 s）内人形层被切成 54 px 水平条带，起始左右交替偏移 90–250 px，滑入对齐（`stageFigure(..., asm)`）。呼应纹样的行错位。
- **背景呼吸**：奇数行向右、偶数行向左以 26 px/s 漂移，外加每行固定的正弦偏移。章卡上每一行**在第二节拍的每拍上跳四分之一单元**（第 4–7 拍），与鼓同步。
- **章卡**：一条 2 行实心带从中心生长（`E.o5`）。一个 330 px 描边章号升入其中，标题和日文行上滑。带的上下有发丝线。
- **转场**（`transType`，窗口为剪辑前 0.12 s 到后 0.26 s）：`rows`（6 行交替方向滑入，进入每章和走出开场用）、`cols`（8 列下落或升起，章卡后和 2 拍连发用）、`slide`（球拍连发：一次带细阴影边的推挤）、`quarter`（四分之一盘从单元角生长，进终章用）、`iris`（一个圆从上一卡的人形中心张开，带收缩的环）、`flip`（11×6 的瓷砖网格翻面）。普通卡轮换 `['quarter','rows','iris','flip','cols'][ci % 5]`。田径长镜头内部**没有**转场：改为甩镜。
- **只在运动处做运动模糊**：转场窗口内 `isFast(t)` 为真，此时 `G.renderFrame` 对 0.5/60 s 快门平均 5 个子帧。静止卡帧只渲染一次。

## 5. 镜头

镜头只存在于**长镜头**（`trackScene`）中。那里有 14 个站点，各隔一屏宽。镜头以 42 px/s 漂移，每次剪辑从拍前 0.14 s 到拍后 0.24 s 用 `E.ioExp` 甩过整整一屏。两排 360 px 母题单元的背景以视差 0.28 和 0.42 滚动。深红跑道（y 780）有奶油色泳道线，跑步类项目（`RUNNING` 速度）的虚线滚动更快。项目规格（`100M`、`4×100M`、`7.26 KG`…）以 −0.35 斜切、12 % 奶油色印在跑道上。其余一切画面锁定且平面；能量来自行错位、转场和人形动作。

开场和终章的"镜头"：终章墙缩放到 0.9 带 10 px 缝隙，然后每块瓷砖向中心坍缩、一颗红太阳从中长出。片尾卡的太阳和圆环从中心升到 y 330，同时缩到 0.62×。

## 6. 声音

- **没有旁白。** 影片由字体和音乐承载。字幕文件只是标题卡轨道（见 §7）。
- **配乐**：原创，完全在 `demo/music/music.py` 中合成（numpy + scipy；无采样）。"和太鼓 × 电子"，150 BPM 4/4 拍，D *都节音阶*（D Eb G A Bb）叠 D 小调和声，101 小节 = 161.6 s 加 2 s 延音。乐器均合成：大太鼓/长胴/締太鼓、*ka* 鼓边click、底鼓、拍手、军鼓、踩镲、沙锤、crash，外加拟音式打击（splash、drop、pok、clank、crack）。三味线和筝是 Karplus-Strong 拨弦（`ks_render`，筝带弯音）；另有合成贝斯、pad、失谐锯齿和弦刺、riser 和 drone。
- **数据锁画**：`music.py` 读 `music/timeline.json`（由 `edl.js` 导出）。每个镜头起点按章选一个重音（`card_accent`：水上项目 splash、球拍 pok、格斗大太鼓 + 刺、力量 clank……）。章与终章起点配 `big_hit`，**前面垫半拍静默**（鼓和贝斯静音）。报告检查全部 79 个镜头起音在 ±15 ms 内（演示：79/79 通过，偏差 ≤ 0.2 ms）。
- **母带**：分轨 `music_bed.wav` + `sfx.wav`、一个 2:1 胶水压缩器和限幅器，综合 −14 LUFS 且 ≤ −1 dBTP（演示：−14.11 LUFS、−1.12 dBTP）。`music/report.txt` 存响度、频带能量、起音和间隙检查。渲染约 30 s。
- **段落布局硬编码**在 `compose()`（以小节计的 `EXPECTED = dict(intro=0, ath=12, …, finale=89)`）。EDL 变了 assert 就触发。新影片要为新章节小节重写 `compose()`（连同 `timeline.json` 和这一节交给一个音乐子代理），并原样保留 `card_accent`、`big_hit` 和报告。

## 7. 字幕与标题

- 卡片上的字体*就是*文字层；不再额外烧录。`pictogram-motion.srt` 列出标题卡（开场行、章题、每张卡的 "01/43  ATHLETICS — SPRINT / 短距離"、口号、片尾卡），由 EDL 经 `demo/srt.cjs` 生成。
- **双语规则**：英语永远是大标题。第二语言由 `?lang=` 决定：`ej` 把日文放进大的第二行（`s.jpBig || s.jp`）并去掉小日文行；默认（中文版）中文大、日文小。
- **结尾序列（演示）**：奶油色片尾卡、红日 + 五色圆环 → **IMAGINE ONE ASIA / ここで、ひとつに。**（官方口号）→ **AICHI-NAGOYA 2026**、日期、五色条和署名行 → 淡黑（最后 1.3 s）→ 2 s 黑尾垫在音乐的延音上。
- **署名行**：每部 Lemo-Opuscar 影片以 "LemoLab × Claude Opus 5.5" 结尾。演示中位于片尾卡上、五色条正下方居中：`G.maskText(ctx, 'LemoLab × Claude Opus 5.5', W / 2, 1000, F.mono(24), rgba(G.INK, 0.6), inv(0.6, 1.2, l), { ls: '4px', align: 'center' })`，在 `finaleScene` 里（紧随色条循环之后）。它在片尾卡落定后 0.6 s 上滑（紧跟色条之后），保持约 3.5 s 并随卡淡出。它比日期行更安静，从不与标题争夺。新影片照做。

## 8. 我们踩过的坑

- **人形环境吞掉字体。** 水面、坡道、围栏和球网属于人形层，会蔓延进文字栏。修法：`stageFigure` 渲染进自己的缓冲并用 `destination-in` 渐变遮罩（`{x0|x1|y1, f}`）在距文字区 90–120 px 前把该层淡到零。
- **金色和赭色需要深色字体与深色人形**（`fg #211904 / #1e1409`），它们的圆盘用*更浅*的 `t[4]`。奶油压金对比度不够。
- **墨色章的圆盘消失**在 `t[1]` 上。墨色的太阳盘用 `t[3]`。
- **纹样画布很大**（2520×1260，每张卡新种子）。缓存它们，但要设上限：`G.pattern` 保留约 10 条的 LRU。12 个浏览器同时渲染时，无上限缓存很快吃光内存。
- **zsh 循环**：`while read line` 循环里变量不做分词。给 `node shot.mjs` 传时间列表时用 `${=line}`。
- **横向姿势**（游泳）需要舞台右移（`wide`：盘在 1370、文字最宽 700），否则手臂穿过标题。
- **官方识别**：演示非常贴近地模仿了真实赛事的识别系统。粉丝作品可以，风格库不行；见 §10.6。

## 9. 制作配方（本仓库）

```
styles/pictogram-motion/demo/
  index.html      loads fonts + edl.js + engine.js + poses/*.js + scenes.js; exposes window.render(t), DUR, READY
  edl.js          edit decision list: every intro/chapter/card/finale shot with beats, names (EN/ZH/JP), pose, flags
  engine.js       G: easing, rng, palette, grid pattern + motifs, pictogram skeleton, text helpers
  poses/          base.js (pose API + props G.P) + one file per chapter: ath aqua ball combat power nature asia (70 poses)
  scenes.js       intro, chapter card, card layouts A/B/C/M, athletics long take, finale, HUD, transitions, motion blur
  render.mjs      headless-Chrome frame renderer (stills / video, N workers → seg_*.mp4 + list.txt)
  shot.mjs        quick JPEG stills (+ --sheet contact sheet via sheet.py)
  lab.mjs lab.html   pose check sheets; lab.mjs also screenshots cover.html / cover34.html (4:3 and 3:4 posters)
  mux.sh          concat segments → 2 s tail → grain → + music.wav → mp4
  srt.cjs         title-card .srt from the EDL
  music/          music.py (score), export_timeline.cjs (EDL → timeline.json), timeline.json, report.txt
  fonts/          Inter Tight, Noto Sans SC, Noto Sans JP, DM Mono (OFL)
  ref/            official reference images (NOT used by the film, do not publish)
```

所有命令在 `styles/pictogram-motion/demo/` 里跑。Node 用仓库的 `node_modules/playwright-core`，Chrome 由 `core/render/browser.mjs` 找到（playwright headless shell 或 `PLAYWRIGHT_CHROME`）。**语言默认英日。**

```sh
cd styles/pictogram-motion/demo

# 1. Edit → timeline for the music (re-run after every change to edl.js)
node music/export_timeline.cjs                       # → music/timeline.json

# 2. Score (≈30 s; writes music/music_bed.wav, sfx.wav, music.wav, report.txt)
../../../.venv/bin/python music/music.py
grep "shots pass" music/report.txt                  # expect 79/79

# 3. Pose check sheets and stills while working
node lab.mjs stills/lab_ath.png "p=sprint,hurdles,relay&n=8&beats=4"
node shot.mjs 24.8 63.2 104.9 153 --sheet            # EN-JP stills → stills/t_*.jpg + stills/sheet.jpg
LANGQ=zh node shot.mjs 63.2                          # Chinese version still

# 4a. Render — EN-JP (default): 9696 frames → out_ej/seg_*.mp4
node render.mjs video 12                             # 12 workers ≈ 2 min on an M-series Mac; use 2–3 when sharing the machine
./mux.sh                                             # → ../pictogram-motion.mp4 (163.6 s, 9816 frames)

# 4b. Render — Chinese version
LANGQ=zh node render.mjs video 12                    # → out/seg_*.mp4
OUTDIR=out ./mux.sh                                  # → out/pictogram-motion_zh.mp4

# Partial re-render (e.g. only the ending): START/END in seconds, into a separate folder
START=148.1333 END=161.6 OUTDIR=out_tail node render.mjs video 2

# 5. Subtitles and posters
node srt.cjs                                         # → ../pictogram-motion.srt
node lab.mjs stills/cover_ej.png "lang=ej" cover.html      # 2880×2160 poster
node lab.mjs stills/cover34_ej.png "lang=ej" cover34.html  # 2160×2880 poster
```

两个语言版本的差别：唯一的开关是 URL 查询 `?lang=ej`。`render.mjs` 和 `shot.mjs` 从 `LANGQ`（默认 `ej`）取得它；`scenes.js` 把它读进 `G.EJ` 并改变第二语言行（开场标题、计数标签、ON YOUR MARKS、卡片、章卡、片尾卡）。`render.mjs` 把英日分段写进 `out_ej/`、中文写进 `out/`；`mux.sh` 读 `OUTDIR`（默认 `out_ej`）。画面时序和音乐完全相同。

`render.mjs` 把 JPEG-100 截图按 worker 管道送进 ffmpeg（`libx264 -crf 12`）；`mux.sh` 以 `-preset slow -crf 14`、60 fps、GOP 120、AAC 320k 重编码拼接后的影片，并克隆 2 s 尾帧，让音乐的延音在黑场上播完。

## 10. 引擎用法

### 10.1 `engine.js`（window.G）

| API | 作用 |
|---|---|
| `G.E.{lin,io,o2,o3,i3,io3,oExp,iExp,ioExp,oBack,o5}` | 缓动（输入钳制 0..1） |
| `G.clamp, G.lerp, G.inv(a,b,x)` | `inv` = x 在 a、b 之间的归一化进度，钳制；用于一切计时 |
| `G.rng(seed)` | 确定性 mulberry 式 RNG |
| `G.PAL[key]`, `G.CYCLE`, `G.CREAM`, `G.INK`, `G.mix(a,b,t)`, `G.rgba(hex,a)` | 调色板与颜色助手 |
| `G.pattern(pk, seed, {spread=1, density=0.5, cell=180})` | 返回缓存的纹样画布（比屏幕宽 3 个单元） |
| `G.drawPattern(ctx, pat, offs(row)→px, {oy})` | 带每行水平偏移地绘制纹样（钳制 ±1 单元） |
| `G.motif(ctx, kind 0–13, x, y, size, [bg, main, sub, accent], rng)` | 一个纹样单元 |
| `G.joints(pose)` → `{hip, neck, sho, head, up, aL, aR, lL, lR}` | 从姿势对象得出骨架 |
| `G.drawFigure(ctx, J, nearCol, farCol)` | 画象形人形（单位 = 身高） |
| `G.keyPose(keys, u, loop?)`, `G.lerpPose(a,b,t)` | 以拍计的关键帧姿势；每个关键 `{b, ...angles, e:'easing'}` |
| `G.runCycle(phase, k, {lean})`, `G.walkCycle(phase, k)` | 程序化步态（phase 以周期计） |
| `G.fitFont(ctx, text, 'en'/'zh'/'jp', weight, px, maxW, ls)` | 缩小字号以适配 |
| `G.maskText(ctx, text, x, y, font, col, p, {align, ls, dir})` | 遮罩上滑入场，p 0→1 |
| `G.typeText(ctx, text, x, y, font, col, p, {align, ls, caret})` | 打字机 |
| `G.hair(ctx, x, y, w, col, p, lw)` | 发丝线擦除 |

**姿势角度约定**：`rot` = 全身（正值 = 前倾）；`torso` = 上身倾角；`head` = 点头。肢体从"垂直向下 = 0°"起量，向前 = 90°、过头 = 180°、向后为负。臂在躯干空间、腿在身体空间。`aR2` 和 `lR2`（前臂、小腿）在同一坐标系里是绝对角，不相对上一段。R = 近侧（亮）、L = 远侧（暗）。`x, y` 平移髋部。

### 10.2 姿势定义（`poses/*.js`，契约在 `poses/base.js`）

```js
POSES.name = {
  pose: (u) => ({...}),            // or keys: [...] + loop: beats   (u = beats since the card started)
  back:  (ctx, J, u, C) => {},      // props/environment behind the figure (unit = body height, origin = hip)
  front: (ctx, J, u, C) => {},      // props in front (ball, racket, bow)
  second: (u) => ({...}), secondX: [dx, dy], secondFace: -1,   // opponent / partner, drawn in C.far2
  fig: { s, x, y },                 // scale/offset inside the stage
  iconU: 0.6,                       // which beat to freeze for the finale icon wall
};
// C = { fg, far, far2, acc, bg, line } from G.colorsFor(pk, discColour)
// props: G.P.ball, G.P.racket, G.P.stick, G.P.ground, G.P.speed (speed lines), G.P.arc (flight arc)
```
用 `node lab.mjs out.png "p=a,b,c&n=8&beats=4&pal=red"` 检查姿势：每行是一个姿势在 `beats` 上采样的 n 个瞬间。

### 10.3 `edl.js`

`chapter(id, no, en, zh, jp, palKey)` 加一张 8 拍章卡。`card(n, en, zh, jp, pose, {beats=4, sub, fam, jpBig, track, water, racket, family})` 加一个条目。`fam: true` 表示大标题用 `sub`、`en` 变成小号家族行。`track: true` 把卡片放进长镜头（所有径赛卡必须连续）。`racket: true` 给出带 slide 转场的 2 拍 B 版式卡。`palKey 'multi'` 按卡轮换 `G.CYCLE`。开场和终章是 `{kind:'intro'|'finale', beats: 48}`。脚本算出 `b0, t0, dur`，然后 `EDL.DUR` = 总拍数 × 0.4 s。

### 10.4 `scenes.js`

`G.renderFrame(ctx, t)` → `frame()` 二分查找镜头、判断 t 是否在转场窗口内、把 A 和 B 渲染进离屏缓冲并合成、然后画 HUD。关键函数：`cardScene`（经 `layoutOf` 的版式）、`chapterScene`、`trackScene`（`trackCam`、`stationX`、`SPEC`、`RUNNING`）、`introScene`、`finaleScene`（`GRID 9×5`、`rings()`）、`hud`、`transType` / `composite`、`stageFigure(ctx, poseName, u, C, x, y, scalePx, asm, mask)`、`patBg`、`multiBg`、`textBlock`、`sun`、`bigNumber`。

### 10.5 最小示例 — 一张新卡和一个新姿势

```js
// poses/nature.js (or a new poses/xxx.js added to index.html)
POSES.kite = {
  iconU: 1,
  keys: [
    { b: 0, torso: -6, aR1: 150, aR2: 160, aL1: 20, aL2: 40, lR1: 10, lL1: -12 },
    { b: 1, torso: -12, aR1: 170, aR2: 175, aL1: 30, aL2: 60, lR1: 18, lL1: -20, e: 'oExp' }, // tug on the beat
  ],
  loop: 2,
  front: (ctx, J, u, C) => {                     // string + diamond kite, all geometry
    const h = J.aR[2], k = [h[0] + 0.55, h[1] - 0.75 + 0.04 * Math.sin(u * Math.PI)];
    G.seg(ctx, h, k, 0.01, C.line);
    G.poly(ctx, [[k[0], k[1] - 0.12], [k[0] + 0.08, k[1]], [k[0], k[1] + 0.12], [k[0] - 0.08, k[1]]], C.acc);
  },
};
// edl.js, inside a chapter
card(44, 'KITE FLYING', '放风筝', '凧揚げ', 'kite', { sub: 'NEW' });   // n = index shown as "44 / N"; update the total (§10.6)
```
然后：`node lab.mjs stills/lab_kite.png "p=kite&n=8&beats=4"` → `node music/export_timeline.cjs` →（章节动了就更新 `compose()`）→ `node shot.mjs <t>` → 渲染。

### 10.6 制作新影片：替换每一项赛事专属元素

| 内容 | 位置 | 替换为 |
|---|---|---|
| 赛事名称、届次、主办城市、日期 | `scenes.js` 372–373、398–407、417、539–541、562–566；`cover.html` 94–114；`cover34.html` 90–113 | 你自己的标题和日期行 |
| 口号 "IMAGINE ONE ASIA / ここで、ひとつに。/ 在这里，合而为一" | `scenes.js` 534–536；两份封面 | 你自己的两行口号 |
| 类会徽标记（红日 + 五环，`rings()`、`RINGS`） | `scenes.js` 341–352、intro 356–375、finale 509–531 | 一个原创标记，比如用网格母题构建你自己的形状 |
| 调色板名称（Jonetsu Red、Kakitsubata Purple、Shinrin Green、Kinshachi Gold、Dento Ocher）及色值 | `engine.js` `PAL`（45–51 行）；名称印在章卡上（`scenes.js` 246） | 自定五色相、每相 5 明度的组合；浅色相保留深色 fg 规则 |
| 条目清单、计数 "/ 43"、43 格 HUD、"469 EVENTS / 16 DAYS"、终章 "2026" 瓷砖 | `edl.js`；`scenes.js` 118、184、414–418、512、570 | 你的清单和数字（从 `CARDS` 推导，不要硬编码 43） |
| 配乐中的段落布局 | `music/music.py` `EXPECTED` + `compose()` | 重新作曲的分段 |
| 官方参考图 | `demo/ref/` | 永不随片发布；收集你自己的参考 |

保留语法：带行错位的网格纹样、象形运动员、双语遮罩上滑字体、带序号和进度的 HUD、踩拍带节奏阶梯的卡片、一次长镜头、以及图标墙终章。

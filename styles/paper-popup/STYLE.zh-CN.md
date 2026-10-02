# 纸片立体书（Paper Pop-up Book）— 风格提示词

> 一本故事书在真实的木桌上翻开，变成一座舞台：带白色描边的平面剪纸角色在从书页里弹起的立体布景前表演，结尾主角跳出书页、落进真实的房间。
> 演示片：*The Little Sprite's Adventure*（小精灵冒险记，*Pip's Paper Adventure*）（133.0 s，1920×1080，60 fps）· `paper-popup.mp4` · 源码在 `demo/` · 引擎：three.js r170（WebGL2），无头 Chrome 逐帧渲染，所有纸艺用 Canvas2D 绘制，Python 用于配乐剪辑和混音。
> 参考（仅参考其语法）：*Paper Mario* 系列（3D 场景中带白边的平面剪纸演员、哔哔声打出的气泡对话、"NICE!/GREAT!" 动作评级）；Robert Sabuda / Matthew Reinhart 的立体书（纸艺工程：分层 V 形折、由后往前升起的部件、拉杆机构）；"真实桌面上的微缩世界"微距摄影。绝不照抄其角色、logo、UI 或音乐。

你正在以**纸片立体书（Paper Pop-up Book）**风格导演一部影片。用户给你一个主题。其余一切（故事、对页、角色、镜头、节奏、声音）由你决定，并交付一部完成的影片。遵循本指南。

---

## 1. 这个风格是什么

一帧里的两个世界：

1. **真实世界**：人体尺度下照片级的桌面，由 HDRI 房间照明，有胡桃木桌、台灯、茶杯、闹钟、铅笔和一盆绿植（Poly Haven CC0）。镜头像一支微距镜头：浅景深、暖色灯光、柔和的接触阴影。
2. **纸世界**：一本 44 × 30 cm 的精装书，摊在桌上。书脊在远端。封面翻开时向上摆到 90°，**在书页后方立起成为背景幕**（一片画好的天空）。下页是地面。每个布景件都是**平面剪纸卡**，平贴在书页上，绕其底边**弹起**。角色也是剪纸：3.6 cm 高、平面、带厚米白描边、灰纸板侧边和纸纹。

它成立的关键是**尺度和材质的错配**：真实物理光下的平面、饱和、带描边的纸卡通。它们投下真实（剪纸形状）的影子、被真实台灯照亮、在真实的镜头虚化中变柔。让纸保持平面和图形感，让光和镜头赋予它真实感。

## 2. 故事：什么适合这个风格

| 天生优势 | 故事用法 |
|---|---|
| **书翻开** | 开场是一个物理仪式：一本合着的书、一声吱呀、封面掀起、世界逐件伴随闪光弹起。这就是"很久很久以前"。 |
| **翻页 = 换景** | 每一章是一个对页。转场是真实的翻页：一张弯曲的纸，正面是旧地面、背面是新天空，旧的立体件折下、新的弹起。书内不需要剪辑。 |
| **纸质机构** | 拉杆戏法就是故事节拍：一根签子上的太阳从山后升起又在黄昏落下、一扇铰链门、一条由三条波浪带滑动的河、一片**由四根翻板组成、昼翻夜变**像三面翻牌广告一样的天空、用线吊下的月亮和星星。 |
| **纸即角色** | 角色由纸*构成*，所以纸的行为就是他们的戏剧：一个被揉皱的坏脾气（皱纸团 Crumple）被**抚平**，噗地变成一架折纸飞机（折纸 Fold），成为朋友、后来又成为载具。 |
| **书页的边缘** | 最大的转折是从纸跨进现实。最后一页没画完（铅笔草稿、地上印着 "The End"）；主角望向页缘之外，一跃，落在真实台灯下的真实桌面上。 |
| **真实的光一直都在** | 在故事里埋下真实世界：黄昏"另一盏灯亮了"其实就是照在书页上的台灯变亮。回报揭示它的来历："一盏读书灯……还有一个人，陪着一页页读。" |

**故事形态（已在演示片中验证）：** 真实桌面定场（10 s）→ 书翻开 → 第一章家园世界和主角的愿望（页外的光）→ 第二章一个障碍角色，先被踩扁打败、随后又被*帮助*（抚平），变成同伴 → 第三章一段带笑料的旅程（鲸鱼喷出彩带纸屑）和一次昼转夜翻板 → 终章：空白的最后一页、恐惧、"Here goes!"（豁出去了！）→ 同伴接住主角，一起飞出书页、掠过桌面 → 落地、揭示、"Hello, big world!"（你好，大世界！）→ 桌面上的片尾标题和 "The End?"。

改编任何主题：把主题的世界做成书的对页（3–4 章，每章一个纸质机构），给主角一个指向书*外*的愿望，以跨进真实房间收尾。产品故事：产品就是桌上读者的台灯/马克杯；一段历史：每个时代是一个对页；儿童教益：障碍角色被帮助而不是被打败。

## 3. 视觉语言

**尺度（米，真实单位）：** 书页 0.44 × 0.30（`BW`、`BD`），页垛高 `PG` = 0.0175。Pip 高 `H = 0.036`，皱纸团 0.042，纸飞机长 0.052，鲸鱼宽 0.10，小船 0.062。山丘宽 0.2–0.26，树高 0.05–0.16。镜头近裁剪面 0.004 m。用真实单位让 HDRI、阴影和景深表现得像真实的微距拍摄。

**剪纸质感**（`paper.js finishCut(art, border, o)`）：先用 Canvas2D 墨线画出美术，再把剪影以 16+ 个角度画在三圈（r、.66r、.33r）上做膨胀，并用 `source-in` 重新着色：
- 灰纸板侧边 `#b9ad9c`，描边 + 2.5 px，向下偏移 1.5 px（纸的厚度）
- 米白纸边 `#fffdf7`，12–16 px（静态道具用 14 px @ 5200 px/m，角色 16 px）
- 美术在最上面，再叠共享的 512 px **纸纹**贴图（随机纤维 + 斑点），`source-atop`，alpha .5–.85。

**绘制规则**（`art.js`）：墨色 `#3a2a24`，主轮廓 9 px（`LW`）、细节线 5 px（`LW2`）、圆角连接。阴影是单一硬边**月牙**（`crescent(x, path, shade, dx, dy, base)`：用阴影色填满形状，再以基色偏移 (−dx, −dy) 重填）。形状"歪歪扭扭"（`blob`、带 3 次谐波噪声的 `smoothClosed`），没有完美的几何。脸是大黑椭圆眼加两个白高光、一条弯嘴、粉腮红。

**调色板**（饱和、儿童绘本感，绝不用霓虹色）：
| 用途 | 颜色 |
|---|---|
| 家园山谷 | 草地 `#86c763`→`#9fd57a`，山丘 `#b5e39a` `#a9dd8c` `#8fd06e`（阴影 `#6fb553`），小径 `#ecd49a`，天空 `#7cc6ef`→`#c9ecf7` |
| 森林 | 地面 `#4f8f46`→`#62a653`，远松 `#8cc9a0`，近松 `#3f9a5c`，天空 `#a8e0cf` 带光柱 |
| 海 | 波浪浅→深 `#9ad8f5` `#79c3ee` `#58ade3` `#3f95d6` `#2f7fc4`，天空白天 `#4fb3ea`，夜 `#131d44`→`#4a5a94` |
| 最后页 | 奶油纸 `#f5eedc`，石墨铅笔线 `rgba(70,72,82,.45)`，IM Fell English 的 "The End" |
| 主角 Pip | 皮肤 `#ffe2bd`（阴影 `#f3c393`）、叶帽 `#62c24c`/`#3e9a34`、罩衫 `#3fa1de`/`#2a78b3`、靴子 `#8a5530`、翅膀 `#d4f3ff` |
| 强调色 | 蘑菇屋红 `#e8413a`，太阳 `#ffd766`，招牌/横幅金 `#ffcf3f`，丝带红 `#d8423a` |
| 书 | 布面 `#1f5566`，烫金 `#e0b456`（metalness 贴图），页缘 `#efe6d2` 带细线 |

**弹起件**（`cutmesh.js cutMesh`）：一个贴剪纸纹理的平面；**正面**用美术，**背面**用同一 alpha 但纯纸色（`#efe8da`，门用 `#8a5a34`），经 `onBeforeCompile` 实现；`alphaTest .5` + `alphaToCoverage` 得到干净的 MSAA 边缘；配同 alpha 贴图的 `customDepthMaterial`，使**影子是剪纸剪影**而非矩形。任何要显得立体的东西都由几张平面卡构成（小船 = 后面的帆卡 + 前面的船体卡；Fold = 铰接在龙骨上的四个三角）。

**真实世界：** `lythwood_lounge_2k.hdr` 作环境和背景（模糊度 .22、偏航 2.3），胡桃木贴皮桌（`#c9a88a` 染色、env .8），Poly Haven glTF 道具、一支程序化铅笔。色调映射 **Neutral**（ACES 会去饱和并偏移纸的颜色）。输出 sRGB。

**字体：** Fredoka 500/600/700（字幕、气泡、招牌），Lilita One（封面、章节横幅、动作词、片尾标题），IM Fell English（故事书衬线体：封面副题、"The End"、"The End?"），站酷快乐体 ZCOOL KuaiLe（中文）。全部 OFL，由 `fetch_fonts.mjs` 下载到 `demo/fonts/`（中文子集 = 只含源文件中出现的字）。

## 4. 动效语言

- **一切以 60 fps 逐帧（on ones）运行**，且是 `t` 的纯函数（`window.render(t)`）。纸件动作僵硬；生命力来自缓动：弹起用 `back()` 过冲（`back(seg(t, t0, t0+.55), 1.7)`）、线上坠物用 `spring()`（云、月、星）、角色用挤压拉伸（`pipState` 里的 `land`、`crouch`）。
- **弹起由后到前**：每件的延迟为其对页 `RISE` 时刻后 `(.3 − z) × 1.2` s，于是远山先立起、前景花朵最后（布景"朝你展开"）。靠后的件向后躺（`dir −1`），其余向前扑倒（`dir +1`）。翻页时再按 z 顺序折下。
- **纸的摇摆**：树、蕨和花绕根部 `sin(1.6t + phase) × sway` 摇动（0.01–0.08 rad）。
- **角色是每个姿势都重绘的平面卡**：当（量化的）姿势变化时重新生成 Canvas2D 绘制：走路相位、手臂角度、翅膀拍动、眼睛（`open/happy/wide/closed/dizzy`）、嘴（`smile/open/o/grin/worried/determined`）、朝向、每 3.7 s 眨眼。走路 = 腿按 `sin(phase)` 摆动、`|sin(phase)| × 1.2 mm` 的弹跳、手臂反摆；相位按走过的距离推进（每半步 1.8 cm），脚不滑步。
- **转身 = `scale.x` 翻转**，绝不用 `rotation.y`：卡片有正面绘制（FrontSide）和后脑勺绘制（BackSide）；负 `scale.x` 翻转哪个面朝向镜头（`S.face = cos(...)` 让它像翻牌一样动）。
- **跳跃**是抛物线弧（`arc(t, t0, t1, a, b, h)`），起跳和落地各一次挤压，落地时喷出一团纸尘云。
- **翻页**（`book.setLeaf(u)`）：一条 40 段的纸带，沿弧长积分角度弯曲（`φ = θ·(1 − L·(s − ½))`，弯曲 `L = .55·sin(πu)`），使纸张像真纸一样卷曲而不是像板一样旋转；用 `eio` 缓动 2.3 s。
- **机构**：昼转夜天空是依次翻动（间隔 0.28 s）的四根翻板；门用 `back()` 绕铰链摆动；河的三条波浪带在旁白每次"哗啦"时滑动 ±12 mm。

## 5. 镜头语言

一支虚拟微距镜头，fov 30（反打镜头 56），以 `[t, pos xyz, target xyz, fov, aperture, focus]` 在 `main.js SH` 中打关键帧，用单调三次插值（`track`）。每个内层列表是一个连续镜头；新列表 = 硬切。

| 节拍 | 镜头 |
|---|---|
| 定场 | 桌面上方高处（1.1 m 远），缓慢下降推轨逼近合着的书；灯光光柱里的浮尘。 |
| 书翻开 | 封面立起时在书页前低机位、正面向下稳定驻留；闪光升起。 |
| 书内 | 与纸演员平视：镜头在页面上方 5–10 cm、后方 30–45 cm，对焦演员（光圈 2.2–2.5，很浅）。跟随行走的缓慢横移。 |
| 翻页 | 上抬后退到整个对页的 3/4 视角（光圈 1.8–2，更深）使翻页读得清，然后降入新世界。 |
| 情感特写 | 推近到面部 28 cm（光圈 2.5）。 |
| 书页边缘 | **反打镜头**：镜头在 Pip 身后（fov 56，对焦 11 cm），越过页缘望向真实的、虚化的房间和巨大的台灯。全片唯一一次看到"外面"。 |
| 飞出 | 切到桌面正面全景（1 m，fov 32）；镜头跟纸飞机横越桌面，然后降到木面上 Pip 的高度停驻（光圈 4，对焦 ~0.52 m）。 |
| 结尾 | 缓慢拉高后退，揭示整个桌面和后面摊开的书，出片尾标题。 |

景深是手写的（`post.js`）：CoC = 光圈 × (1/焦距 − 1/z)，以像素计（最大 14），再做一个 64 采样的黄金角螺旋 gather，阻止远处采样渗到清晰的前景上。这胜过 three.js 的 BokehPass——后者在这个尺度下很假。

## 6. 声音

- **旁白**：一位温暖的讲述者，Kokoro `af_bella`，语速 0.9，en-us；15 句短台词（2–9 s）。写得像绘本（"纸板做的山丘。木签上的纸太阳。"）。读法与显示不同的句子放在 `tts/lines.json`（例如 "Swish Swash Sea" 去掉连字符；用 "..." 而非 "…""）；显示文本放在 `story.js VO`。按峰值 1 % 修剪静音（+10 ms 头、+100 ms 尾）。每句都用 whisper 检查（`asr.py`；`words.py` 出词时间用于笑料对齐）。
- **角色声音 = 打字哔声**（不用 TTS）：每个对话气泡以 30 字符/秒打出，每隔一个字母放一声哔；Pip = 方波、明亮音高（C6 附近），皱纸团 = 低 180–240 Hz，折纸 = 三角波。
- **音乐**：三首 Kevin MacLeod 曲（CC BY 4.0），在 `music/edit.py` 里剪辑：*Dreamy Flashback*（0–16.2 s，1.6 s 淡出）给真实桌面；*Jaunty Gumption* 从 15.4 s 起覆盖整个纸世界，含**一次对齐小节的内部跳切**（73.21 s → 曲目 102.79 s，0.42 s 交叉淡化），由 `music/jump.py`/`jump2.py` 选出（节拍同步色度 + MFCC 自相似度、切长为 4 拍的倍数），使歌曲真正的结尾正好落在 104.22 s——Pip 跳出书页的那一刻；*Heartwarming* 从其 39.38 s 处在 104.8 s 起（×1.15）给真实世界和片尾卡。
- **音效全部合成**于 `mix.py`，从页面的事件列表（`events.json`，由 `render.mjs events` 导出 250 个事件）：书的吱呀 + 闷响、弹起的弹出（正弦扫频 + 纸脆响）、翻页嗖声、门吱声、boing、蹦跳、脚步（每个走路半周期一声轻嗒 + 脆响）、纸卷、"!" 重击、跺脚、NICE/GREAT 琶音、闪亮（铃）、噗、折纸声、呼啸、水花、鲸喷、翻板咔嗒、星星叮、台灯开关 + 暖和弦、落地滑擦。各类增益在 `G` 表里。
- **环境底**按对页：桌面房间底噪 + 闹钟嘀嗒、山谷鸟鸣 + 河流、黄昏蟋蟀、森林鸟鸣 + 叶沙、海上波浪、最后页和真实世界的房间底噪。
- **混音**：人声 90 Hz 高通、压缩（−24 dB，3:1）、限幅，并在语音区高于音乐 8.5 dB；音乐在语音下压 40 %（300 ms 平滑）；人声 7 % 混响；SFX 逐通道限到 0.5；环境 ×2。归一到 0.89 峰值，再由 `mux.sh` 施加 `loudnorm I=−14 TP=−1.2 LRA=11`。

## 7. 字幕与标题

- **旁白字幕**（`hud.js drawSubs`）：底部居中，英语 Fredoka 500 40 px，奶油色 `#fffaf0` 带 8 px 深棕描边和软影，1720 px 折行；下方中文行用站酷快乐体 32 px。台词前 0.3 s 淡入，音频后保持到 0.25 s，0.3 s 淡出。
- **对话气泡**（`drawBubbles`）：圆角白卡（圆角 44、6 px 墨描边、软投影），尾巴指向说话者头部（每帧从 3D 投影），以 `back()` 弹入，英语以 30 字符/秒打出（Fredoka 600 46 px），然后淡入中文（站酷快乐体 32 px，`#7a5e4c`）和一个上下跳动的红色"下一个"三角。
- **章节横幅**（`drawChapter`）：两根线吊着的纸板招牌，带过冲落下并摇摆：红丝带 "Chapter N"，标题 Lilita One 84 px 金色 `#ffcf3f` 带 12 px 墨描边，下面中文。
- **动作词**（`drawAction`、`drawBang`）："NICE!" / "GREAT!" 用斜体 Lilita One 120 px、渐变填充、白 + 墨双重描边加放射线；受惊的主角头顶一个红色 "!"。
- **标题**：书的封面本身（布纹 + 烫金 "The Little Sprite's Adventure ~ a paper tale ~" 带粗糙度/金属度贴图，以及圆形 Pip 插画）。
- **片尾卡**（`drawEnd`，自 123.4 s）叠在实时桌面画面上：Lilita One 96 px 金色标题（y 170）、中文标题（y 262）、弹入的斜体 "The End?"（y 350），然后自 127.6 s 起落款和素材署名（22 px，y 960/998/1036；中文行用 `'"ZCOOL KuaiLe", Fredoka'`）一起淡入；最后 1.5 s 淡黑。
- **落款（必需）**：每部影片以 **"LemoLab × Claude Opus 5.5"** 结尾（× = U+00D7）。演示中居中位于 "The End?" 下方 y 430：Fredoka 600 36 px，奶油色 `#fffaf0` 填充带 7 px `rgba(30,20,14,.75)` 描边（它压在奶油色扉页上，描边是它可读的原因），随素材署名于 127.6 s 淡入。保留标题和素材署名；落款绝不能盖住角色。
- 双语 `.srt` 由 `story.js` 生成（`make_srt.mjs`）：旁白 + 气泡，英语行后跟中文行。

## 8. 我们踩过的坑

- **无头 WebGL 速度**：默认 Chrome 用 SwiftShader（约 620 ms/帧）。加 `--use-angle=gl --enable-gpu --ignore-gpu-blocklist` 启动（Apple Silicon 上每帧几十 ms）。
- **ES 模块无法经 `file://` 加载**：务必经 HTTP 提供 demo（`serve.mjs`，在 `render.mjs` 内启动）。
- **用 `rotation.y` 转角色**会侧视卡片的边缘、再露出纸色背面。改翻 `scale.x`（正/背面绘制自动交换）。
- **负缩放会翻转剪纸卡的正背面材质**：绝不用 `flip` / `scale.x = −1` 镜像道具；画一个镜像版本。
- **单平面小船挡住了坐在里面的角色**：拆成帆（后，z −3 mm）和船体（前，z +2 mm），把 Pip 放在中间。任何"在里面"的物件同此规则。
- **镜头附近的前景弹起件用虚化糊满画面**（森林蕨、20.9 s 的一丛灌木）。让前景件避开镜头路径，或该镜头调低光圈。
- **混音器 bug**：把立体声（N×2）数组传给一维限幅器，会把所有 SFX 静默压到 −96 dB。逐通道分别限幅。
- **阴影**：矩形影子毁掉纸的幻觉；每个剪纸网格都要带 alpha 贴图的 `customDepthMaterial`。聚光阴影贴图 4096²、bias −6e-5、normalBias 4e-4，否则薄卡出现阴影痘。
- **翻过去的页面变黑**当它背对灯光：给纸页材质一张与颜色贴图相同的自发光贴图（emissive .42）。
- **色调映射**：ACES 偏移了纸的绿和红；`NeutralToneMapping` 保住它们。
- **Poly Haven API**：Python `urllib` 得到 403；用 `curl` 下载。
- **中文字体子集**：`fetch_fonts.mjs` 下载时只包含 `story.js/hud.js/main.js/art.js` 中出现的字。改过任何中文后重跑，否则新字符渲染成豆腐块。
- **混排字体栈**：站酷快乐体子集没有拉丁字形，中文行里的拉丁词会回退到系统衬线体（演示中文署名行可见）。用 `'"ZCOOL KuaiLe", Fredoka'`。
- **重绘开销**：Pip 的画布只在姿势（量化到 1/40）变化时重绘；否则纹理上传主导帧时间。

## 9. 制作配方（本仓库）

```
styles/paper-popup/demo/
  index.html  importmap (three from demo/node_modules) + fonts.css + main.js
  main.js     scene: renderer, HDRI, desk & props, book, particles, choreography (pipState/crumpleState/foldState),
              camera keys SH, lightsAt(t), sound-event list EV, window.render(t)
  story.js    timeline (single source of truth): DUR, VO narration, BUB bubbles, CHAPTERS, CREDITS, OPEN, TURNS
  book.js     the book (cover, spine, page blocks, ground/back pages, curling leaf), texOf()
  sets.js     page art per spread (pages()), pop-up pieces (buildSets), sky slats, updatePops/riseOf, RISE/FOLD
  art.js      all Canvas2D drawings: drawPip/drawPipBack, drawCrumple, drawWhale, props (hill, pine, mushHouse, …)
  paper.js    canvas helpers: finishCut (white border + card edge + grain), paperFill, crescent, blob, sh
  cutmesh.js  cutMesh (front art / back paper / cut-out shadow), blobShadow, thread, particles (InstancedMesh)
  actors.js   makePip, makeCrumple, makeFold (foldable paper plane), makeWhale, makeBoat
  post.js     DOF pass (CoC + 64-tap gather) → bloom → vignette/warmth → output
  hud.js      2D overlay: subtitles, bubbles, chapter banners, NICE/GREAT, "!", end card, blip times
  render.mjs  stills / events / video (N workers → out/seg_*.mp4)    serve.mjs  static server
  tts/        lines.json + gen.py (all lines) / gen1.py (selected lines) → voices/*.wav + dur.json
  asr.py words.py   whisper check / word timestamps      music/edit.py  score.wav    mix.py  mix.wav
  mux.sh      segments + mix → ../paper-popup.mp4        make_srt.mjs  → ../paper-popup.srt
```

所有命令都可在仓库根运行。Python = 仓库 `.venv`（numpy、scipy、soundfile、librosa、kokoro-onnx、faster-whisper 装在那里）。

```sh
D=styles/paper-popup/demo; PY=.venv/bin/python
# 0. once: fonts (re-run after changing Chinese text) and music
(cd $D && node fetch_fonts.mjs)
#    download the three MP3s from incompetech.com into $D/music/, then convert to 48 kHz WAV:
for f in Dreamy_Flashback Jaunty_Gumption Heartwarming; do ffmpeg -y -i $D/music/$f.mp3 -ar 48000 -ac 2 $D/music/$f.wav; done
# 1. voice (Kokoro model is shared from core/tts/): all lines, or only some
$PY $D/tts/gen.py af_bella            # → voices/v01..v15.wav + voices/dur.json
$PY $D/tts/gen1.py v04 v07            # regenerate selected lines
# 2. proof-listen
$PY $D/asr.py; $PY $D/words.py        # whisper transcript / word timestamps for gag sync
# 3. timeline: edit story.js (VO start times use voices/dur.json), then check stills
node $D/render.mjs stills 6.5 30 61.8 82.6 118     # → demo/stills/t_*.jpg (STILLS_DIR=out/x to redirect)
# 4. score (only when the edit points change)
$PY $D/music/edit.py                  # → music/score.wav (jump-cut search: music/jump.py, jump2.py)
# 5. sound events + mix
node $D/render.mjs events             # → events.json (250 events)
$PY $D/mix.py                         # → mix.wav (argument = other output path)
# 6. video: 7980 frames, N workers (8 used for the demo ≈ 2.5 min; use 2 when other jobs share the GPU)
node $D/render.mjs video 8            # → out/seg_0..7.mp4 + out/list.txt
# 7. mux (+ film grain noise=c0s=2, loudnorm −14 LUFS) and subtitles
zsh $D/mux.sh                         # → styles/paper-popup/paper-popup.mp4 (OUT=... to write elsewhere)
node $D/make_srt.mjs                  # → styles/paper-popup/paper-popup.srt
```
助手：`shot.mjs page.html out.png`（截任意页面，如 `sheet.html` = 角色与道具模型表）、`probe.mjs '<js expr>'`（在已加载场景内求值；`window.DBG` 暴露 pip/boat/fold/whale/book/cam）、`gltest.mjs`（GPU 标志基准）、`tile.py`（静帧拼贴）、`music/survey.py`（候选曲目节拍/响度调查）。通用的 `node core/render/still.mjs styles/paper-popup/demo 30` 也可用（页面只用相对 URL）。

## 10. 引擎用法

**坐标系。** 世界 = 米，y 向上；桌面在相对页面的 y = −PG 处。`book.stage` 是书页坐标系：x ∈ [−0.22, 0.22] 从左到右，z ∈ [0, 0.30] 从书脊（远）到读者（近），y 自页面向上。`book.sky` 是立起的背景幕坐标系（封面打开后）：x 同上，y ∈ [0, 0.30] 沿幕向上，小的 +z = 幕前。角色放 `book.stage`；悬吊的云/月/星放 `book.sky`。

| 模块 | 关键 API | 说明 |
|---|---|---|
| `lib.js` | `seg(t,a,b)`、`ss`、`eio`、`eo`、`ei`、`back(t,s)`、`spring(t,k,z)`、`env(t,a,b,fi,fo)`、`mulberry(seed)`、`track([[t,[…]],…])` | 一切动画都是 `f(t)`；`track` = 单调三次关键帧（镜头、飞行路径） |
| `paper.js` | `cv(w,h)`、`finishCut(art, border=14, {paper, edge, grain, grainA})`、`paperFill(x,w,h,col,seed,mott)`、`crescent(x,pathFn,shade,dx,dy,base)`、`blob(x,cx,cy,rx,ry,wob,seed)`、`sh(x,fill,lw,stroke)`、`smoothClosed/smoothOpen`、`GRAIN`、`INK` | 一切纸艺的 Canvas2D 工具箱 |
| `art.js` | `cut(wm,hm,draw,{pad,border,ax,ay,raw})` → `{c,w,h,ax,ay}`，`PPM`=5200 px/m；道具 `hill(w,h,col,shade,seed,{bumps,dots})`、`lolliTree(h,col,shade,seed)`、`pine`、`bush`、`flower(h,petal,seed)`、`mushHouse(h)`、`door`、`windowGlow`、`sunOnStick(r,stick)`、`cloud(w,seed)`、`sign(w,text)`、`fence(w,h)`、`waveStrip(w,h,col,dark,seed,n)`、`boat(w,'sail'|'hull')`、`moon`、`star`、`island`、`mushroom`、`log`、`fern`、`sketchTree`、`sketchHouse`、`leafBit`、`bang`；角色 `drawPip(x,pose)`、`drawPipBack`、`drawCrumple(x,{mood,blink,mouthOpen})`、`drawWhale(x,{happy})` | 每个道具返回一个供 `cutMesh` 用的 item；锚点 (ax, ay) 默认为底部中央 |
| `cutmesh.js` | `cutMesh(item,{s,backCol,shadow,tex})` → Group（原点 = 锚点）、`blobShadow(r,a)`、`thread(len)`、`particles(geo,mat,n,(i,t)=>({x,y,z,rx,ry,rz,s,col})|null)` → 带 `.userData.update(t)` 的 InstancedMesh | 剪影影子、纸色背面 |
| `book.js` | `coverCanvases(drawIcon)` → `{c,m}`；`makeBook(cover)` → `{root, stage, sky, groundMat, backMat, leafFront, leafBack, setOpen(θ), setLeaf(u), coverMat}`；`texOf(canvas,{linear})`；`BW BD PG` | `setOpen(π/2)` = 全开；每个对页设 `groundMat.map`/`backMat.map`；`setLeaf(0..1)` = 翻页（0/1 隐藏纸页） |
| `sets.js` | `pages()` → 画布 `sky0 ground0 sky1 ground1 sky2day sky2night ground2 sky3 ground3`（2048 × 1396，`gx(x)`/`gz(z)` 把米映射到像素）；`buildSets(book)` → `{L, ex}`；`updatePops(L,t)`；`RISE[spread]`、`FOLD[spread]`；内部 `popper(list, spread, parent, item, x, y, z, {d, dir, sway, ph, pop, ry})` | 加一个对页 = 页面美术 + 一段带新 spread 序号的 `popper` 调用，并扩展 `RISE/FOLD/TURNS` |
| `actors.js` | `makePip(H)` → `{root, body, shadow, pose(p), head()}`；`makeCrumple(D)`；`makeFold(L,S,KD)` → `{fold(f 0..1), drawFace(mood,blink)}`；`makeWhale(w)` → `{setHappy}`；`makeBoat(w)` | 姿势 `p` = `{walk, stride, armL, armR, flap, eyes, mouth, look:[x,y], blink, lean}` |
| `post.js` | `makePost(renderer, scene, cam, w, h)` → `{composer, dof:{focus, aper, maxCoc}, bloom, vig:{uniforms:{amt,fade,warm}}}` | 调 `post.composer.render()` 代替 `renderer.render` |
| `hud.js` | `drawSubs(ctx,t,dur)`、`drawBubbles(ctx,t,{who:[sx,sy]})`、`drawChapter`、`drawAction(ctx,t,[{t0,text,p,col}])`、`drawBang`、`drawEnd`、`blipTimes()` | 全部读 `story.js`；画在 1920×1080 的 `#ov` 画布上 |

**页面契约**（`render.mjs` 需要）：资源加载后 `window.READY = true`；`window.render(t)` 确定性地画出第 t 秒；`window.DUR`；`window.EV = [{t, type, …}]` 给 `mix.py`（类型见 §6；新类型要在 `mix.py` 里加一个分支）。

**最小示例** — 一个新的对页：一座弹起的山丘、一个在上面行走的主角和一次翻页镜头，写在 `main.js` 风格的代码里：

```js
import * as THREE from 'three';
import { makeBook, coverCanvases, texOf, BW, BD } from './book.js';
import { cutMesh } from './cutmesh.js';
import { makePip } from './actors.js';
import { makePost } from './post.js';
import * as A from './art.js';
import { cv, paperFill } from './paper.js';
import { seg, back, eio, track } from './lib.js';

const renderer = new THREE.WebGLRenderer({ antialias: false, preserveDrawingBuffer: true });
renderer.setSize(1920, 1080); renderer.shadowMap.enabled = true; renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.toneMapping = THREE.NeutralToneMapping; renderer.outputColorSpace = THREE.SRGBColorSpace;
document.getElementById('stage').appendChild(renderer.domElement);
const scene = new THREE.Scene(), cam = new THREE.PerspectiveCamera(30, 16 / 9, .004, 30);
const post = makePost(renderer, scene, cam, 1920, 1080);
// (load the HDRI + desk exactly as main.js lines 34–43)

const book = makeBook(coverCanvases((x, px, py, w, h) => { /* draw the cover medallion */ }));
scene.add(book.root);
const ground = cv(2048, 1396); paperFill(ground.getContext('2d'), 2048, 1396, '#9fd57a', 2);
book.groundMat.map = texOf(ground);

// a pop-up hill: lies flat (rotation.x = −π/2 · (1−k)) and springs up around its bottom edge
const hill = new THREE.Group(); hill.add(cutMesh(A.hill(.24, .075, '#b5e39a', '#93cc78', 11)));
hill.position.set(0, 0, .04); book.stage.add(hill);

const pip = makePip(); book.stage.add(pip.root, pip.shadow);
const camKeys = track([[0, [.0, .27, .78, 0, .1, .1]], [4, [0, .06, .38, 0, .04, .13]]]);
const sun = new THREE.DirectionalLight('#fff3e0', 2.6); sun.position.set(-.35, .55, .75); sun.castShadow = true;
Object.assign(sun.shadow.camera, { left: -.3, right: .3, top: .3, bottom: -.3 }); scene.add(sun);

window.render = t => {
  book.setOpen(Math.PI / 2 * eio(seg(t, .5, 3.1)));                     // cover swings up into the backdrop
  const k = back(seg(t, 3.0, 3.55), 1.7);                               // pop-up with overshoot
  hill.visible = k > .002; hill.rotation.x = -(Math.PI / 2) * (1 - k);
  const w = seg(t, 4, 7), ph = w * .15 / .018 * Math.PI * 2;            // walk 15 cm, phase from distance
  pip.pose({ walk: ph, stride: w > 0 && w < 1 ? 1 : 0, armL: .25 + Math.sin(ph) * .5, armR: .25 - Math.sin(ph) * .5 });
  pip.root.position.set(-.1 + .15 * w, Math.abs(Math.sin(ph)) * .0012, .15);
  pip.shadow.position.set(pip.root.position.x, .0004, .15);
  const c = camKeys(t); cam.position.set(c[0], c[1], c[2]); cam.lookAt(c[3], c[4], c[5]); cam.updateProjectionMatrix();
  post.dof.focus = cam.position.distanceTo(new THREE.Vector3(c[3], c[4], c[5])); post.dof.aper = 2.3;
  scene.updateMatrixWorld(true); post.composer.render();
};
window.DUR = 8; window.EV = [{ t: .5, type: 'creak' }, { t: 3.1, type: 'pop' }];
window.READY = true;
```

做一部完整的影片：复制 demo，重写 `story.js`（台词、气泡、章节、`OPEN`、`TURNS`、`DUR`），替换 `sets.js` 里的对页（`pages()` + `buildSets`），在 `art.js` 里重画角色，然后在 `main.js` 里重打 `pipState`、镜头表 `SH` 和 `lightsAt` 的关键帧。book/paper/cutmesh/post/render/mix 保持不变。

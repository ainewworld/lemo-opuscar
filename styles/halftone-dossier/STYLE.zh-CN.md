# 复古半调案卷(Halftone Dossier)— 风格提示词

> 一份复古印刷案卷:奶油档案纸、四种专色油墨叠印的半调网点、带套印偏差阴影的巨大粗标题、重重盖下的橡皮图章,还有一个胖乎乎粗轮廓吉祥物当"嫌疑人"。每部影片都是一场戏仿调查,一页证物一页证物地读出来。
> Demo:*胖橘案卷 Case File: Chubby*(30.0 秒)· `halftone-dossier.mp4` · 源码在 `demo/` · 引擎:一个自包含的 `demo/index.html`(SVG 场景图 + 两层 Canvas 2D 覆盖),由 Playwright 无头 Chromium 逐帧渲染于 1920×1080 / 30 fps;配乐和 SFX 在 `demo/music.py` 中合成。
> 参考(仅语法,绝不照抄):Ben-Day 圆点波普印刷(Roy Lichtenstein 时代漫画)——以网点密度作明暗;riso/胶印叠印 zine——正片叠底层与套印偏差;警察嫌犯照身高表和案卷夹——取景装置;日本综艺字卡——关键词高亮的字幕条。
> **demo 的屏幕文字是中文**(标题卡、字幕、图章)。没有旁白。做英文版要改什么见 §7。

你正在以**复古半调案卷(Halftone Dossier)**风格执导一部影片。用户给你一个主题。其余一切——案子、罪状、证物、节奏、声音——由你决定,并交付一部完成的影片。遵循本指南。

---

## 1. 这个风格是什么

一份自己翻开的漫画印刷**案卷**。整部影片都是纸:一张温暖奶油色纸(`#F4ECDD`),带低频斑驳、细颗粒、暗角和一道中缝折痕。纸上的一切用寥寥几种专色油墨印出——藏青、钴蓝、玫粉、黄、橙、红——而**明暗从来不是渐变:它是尺寸随密度场变化的半调网点**。两三层不同网角的点叠印(正片叠底),"印刷感"正来自于此。

结构是案卷:**标题 → 指控 → 嫌疑人档案(嫌犯照)→ 罪状 01 / 02 / 03 → "综上" → 判决图章 → 理由 → 结案**。角落的案号 HUD 和章节贴片("罪状 01 · 测试重力")让观众始终有方位。笑点在于官僚式的严肃(案号、身高表、图章、"罪状 01")与一个琐碎又可爱的主题之间的落差。

它响亮但可读:每张 2–4 秒的卡一个观点、一个大标题、一个视觉包袱、一行字幕。

## 2. 故事:什么适合这个风格

| 原生能力 | 故事用法 |
|---|---|
| **指控框架** | 任何主题都能变成"对 X 的案子"。一个产品、一个习惯、一只宠物、一位同事、一个历史人物——列出它的"罪状"。 |
| **编号罪状** | 每个节拍是罪状 01/02/03,背后一个巨大的半调数字。30 秒三宗罪最合适;60 秒五宗。 |
| **图章** | 每个判决都是一次实体盖章:惯犯、无罪释放、结案。图章是影片的标点。 |
| **嫌犯照** | 身高表前正面站立的对象,带名牌和闪光。非常适合介绍任何"嫌疑人"。 |
| **证物卡** | "综上"节拍:罪状以三张钉住的证据卡(带图标)回归,然后抖动。 |
| **点密度 = 情绪** | 点在主角周围肿成光环,在画框边缘堆积制造紧张,为喜悦径向绽放。 |

适配主题:挑一个**可爱的犯事者**和三件**具体的、可视的**坏事(一个落下的物体、一个钟点、一份被垃圾填满的文档)。转折永远是与证据相悖的判决("罪罪成立 → 无罪:太可爱")。

**弧线(30 秒,120 BPM,一小节 = 2 秒)**:标题(1 小节)→ 指控 + 第一枚章(1 小节)→ 嫌犯照(2 小节)→ 罪状 01(2)→ 罪状 02(2,"夜晚"换色)→ 罪状 03(2)→ 综述 + 铺垫(1)→ drop 上的判决章(1)→ 理由(1)→ 结案 + 片尾(2)。60 秒影片把小节 ×2;每次剪辑都落有小节线上。

## 3. 视觉语言

**调色板**(`index.html` 56–60 行的 `C`)——只用这些:

| 令牌 | Hex | 用途 |
|---|---|---|
| `paper` | `#F4ECDD` | 亮场背景 |
| `navy` | `#1D2340` | 所有轮廓、正文、字幕条、淡出颜色 |
| `blue` | `#2E55D6` | 标题背景、光环点、表格、一层油墨 |
| `pink` | `#FF5A87` | 点缀、套印偏差阴影、字幕偏移、判决图章 |
| `yellow` | `#FFC628` | 高亮词、数字、星芒、文件夹 |
| `orange` / `ored` | `#F58A34` / `#D9621E` | 吉祥物的毛 / 条纹 |
| `cream` | `#FFF4E2` | 肚皮、爪子、深色上的文字 |
| `red` | `#E8384F` | 图章、"17"、REC 圆点 |
| `night` / `night2` | `#18203F` / `#2A3568` | 夜景背景 / 点 |
| `mint`、`skin` | `#56C29E`、`#F7C9A1` | 只作微小点缀 |

**半调**(`halftone()`):一个旋转网格的圆,合成单条 SVG 路径。`step` 20–26 px,每层网 `angle` 不同(15°/20°/25°/30°/45°/60°/70°),点半径 = `density × step × maxK`,`maxK` 0.6–0.72(约 0.7 时满密度处点并成实墨)。密度场:`radial(cx, cy, R, pw)` 用于光环/绽放/角落辉光,`edge(R, pw)` 用于点挤向画框边缘的暗角,或线性斜坡 `(x,y) => 0.25 + 0.75*clamp((y-250)/650)` 做"从上方打光"的填充。第二层放进 `class="mul"`(mix-blend multiply)让油墨叠印。

**半调填充的数字**:巨大的 Bagel Fat One 数字(700–760 px)出血出右缘,先平涂(`yellow` / `#FFD3DF`),再叠印一层裁剪到字形内的更深半调(`<clipPath>` 用同一 `<text>`)。513–518 行和 709–714 行。

**纸**(`buildPaper()`,`#paper` 画布,正片叠底于一切之上,构建一次):96×54 随机块放大(242–255 灰)做斑驳 + 逐像素噪声 ±13 带一个 −4 蓝偏(暖)+ 径向暗角 `rgba(120,100,80,.35)` + x = 960 处一道浅折痕。暗场景同样被叠底,让它们保持"印刷"而不是发光。

**颗粒**(`drawFx(frame)`,`#fx` 画布,逐帧):520 颗奶油斑点(r 0.6–2.4,α .75)+ 90 颗藏青斑点,每 2 帧换种子——是印刷上的尘,不是胶片颗粒。

**线条沸腾**(`#boil` SVG 滤镜):`feTurbulence` 0.022 → `feDisplacementMap` scale 5,每 0.1 秒重播种(`render()` 设 `boilT` 种子,40 种子循环),外加一个细墨粒蒙版(频率 0.75)啃掉每块填充的一点。只用于角色和手绘道具——绝不用于文字、半调、HUD 或字幕。

**角色**:圆滚滚的可爱造型,**7 px 藏青轮廓**(`LW`),平涂填充,奶油肚皮/爪子,粉色耳内和腮,更深的橙色条纹画成圆端帽描边。大而亮的眼睛(藏青椭圆 + 两个奶油高光),能眯眼、闭成开心弧线(`happy`)或眨眼。一个头部(`catHead`)被所有身体姿势共用。

**字体**(`F`,61–64 行;全部 Google Fonts,OFL):
- 大标题:**Noto Serif SC 900**,100–230 px,左对齐于 x ≈ 120–170,带**套印偏差阴影**(`chars(..., {shadow:{fill: pink|yellow, dx: 8, dy: 8}})`,以正片叠底绘制)。
- 展示 / 数字:**Bagel Fat One**(CHUBBY 330 px,01/03 700+ px,99+、17、18:00、Zz)。
- 可爱叹词:**ZCOOL KuaiLe**(喵。 呼噜～ 啪! 太可爱了)。"太可爱了"用奶油填充 + 16 px 藏青描边 + 蓝色偏移阴影。
- 数据 / HUD:**JetBrains Mono 800**(案号、"PANG JU, O."、时钟 04:00、cm 标尺、文件名)。
- 字幕与图章:**Noto Sans SC 900**。

**图章**(`stampEl`):双层圆角矩形(外框 10–14 px,内框 0.35×)+ 120–210 px 文字,全部过 `#stampInk`(位移 7 + 粗墨粒蒙版),让油墨斑驳、边缘粗糙。不透明度 0.93,倾斜 −10° … +12°。

**道具与包袱**:星芒(24 角星,黄 + 藏青描边,红色"啪!")、对话气泡(奶油,藏青 6 px 描边,尾巴补块)、心(`heartPath`)、彩纸(5 色矩形翻转 `scaleY`)、放射光线(28 个交替楔形,12°/s 旋转)、爪印、便利贴、打出一堆垃圾的笔记本电脑、数字时钟。全部平涂 + 藏青轮廓。

## 4. 动效语言

- **一切带过冲进入**:`E.back`(过冲 1.9),历时 0.3–0.45 秒。物体从画面下方升起(`lerp(1200, 470, E.back(...))`)或从 0 缩放(`pop()`)。
- **逐字弹出**(`charsPop`):每个字形落下 30–100 px 并带压扁拉伸缩放登场,错开 0.05–0.08 秒(小副标题 0.02 秒)。大标题永远这样构建;绝不淡入文字。
- **标题字母坠落压扁**:CHUBBY 字母各在 0.2 秒内落 700 px,彼此间隔 0.25 秒(每个一拍三连音),落地后带阻尼 `cos` 摆动压扁。
- **盖章重击**(`stampAnim`):0.09 秒从 2.6× 到 1×(`E.in`),随后 5 % 阻尼弹跳;同一瞬间镜头震动(`SHAKES`)、白闪(23.0 秒)和图章 SFX。
- **压扁落地**:落地的角色(17.45 的 loaf、26.6 的 curl)用 `sq = 1 − k·e^(−a·7)·cos(a·20…22)` 加 `scale(1/sq, sq)` 保持体积。
- **待机生命**:呼吸(±2 % y 缩放)、尾巴摆动、耳朵抽动、按剧本时间眨眼(`blinkAt`)、心/Zz 循环、星星闪烁、REC 圆点 1 Hz 闪烁、时钟冒号闪烁。
- **奔跑循环**(`runCycle`):4 条胶囊腿以 30 rad/s 摆动 ±50°,身体起伏 `|sin(28t)|·12`,加拉伸 `scaleX 1 + 0.35·speed` 和身后 4 条速度线。
- **角色线条以 10 fps 沸腾**,变换却以 30 fps 移动——手绘感而位置不抖。
- **转场是圆点擦除**(`wipeUpdate`):80 px 网格的圆长到 r = 62(全覆盖)再缩回,历时 0.44 秒,以每次剪辑为中心,带对角延迟;每次剪辑有自己的擦除色(`WIPES`)。场景切换发生在画面被完全覆盖之时。个别剪辑(22、24)在 drop 上用硬切做对比。

## 5. 镜头

相机是一个 2D 组(`#cam`);没有 3D。

| 节拍 | 镜头 |
|---|---|
| 标题 / 指控 | 锁定,正面,每拍 0.6 % **节拍脉冲**(`pulse`,仅"律动"段落)。 |
| 嫌犯照、综述 | 对场景组缓慢推近:4 秒内 1 → 1.05(嫌犯照),2 秒缓入 1 → 1.08(综述,紧张上升)。 |
| 冲击 | `SHAKES = [t0, 振幅 px, 时长]`:第一枚章 16 px,杯子撞碎 14 px,判决 26 px / 0.45 s,小落地 5–7 px;二次衰减,x/y 用不同 sin/cos 频率。 |
| 嫌犯照闪光 | 两帧相机闪光(白色覆盖 0.95 → 0,历时 0.3 秒),吉祥物同时眯眼。 |
| 结尾 | 29.25–29.95 秒淡入藏青 `#1D2340`。 |

像一页印刷品那样扁平正面构图:标题左上、主角右中、字幕条底部居中(y = 980)、HUD 在角落。

## 6. 声音

- **无人声。**影片由卡和音乐承载;若主题需要旁白可以加,但字幕保持主通道。
- **配乐**(`music.py`,44.1 kHz 立体声,全合成,种子 RNG → 位相同输出):120 BPM,小节 = 2 秒,C 大调每小节一和弦(`PLAN`,15 小节)。乐器:合成 kick/snare/clap/hat、八分音符模式的类方波贝斯、三角波 pad、**类马林巴 `pluck`** 旋律(基音 + 3.99× 分音)带轻八度回声、潜行夜段落(6–7 小节 = 罪状 02)用 `pizz` 拨弦和响指、**铺垫**(第 10 小节 = "综上")用军鼓滚奏 + 上行正弦扫频、**drop** 让第 11 小节前半空掉,让判决章在 23.0 独自落下,然后八音盒 `bell` 尾声和一串终止铃琶音。
- **SFX 跟随画面**(`music.py` 末尾的 SFX 表,时间从 `index.html` 拷来):每个标题字母一声 pop、探头一声 boing、每枚章 `stamp()`(音高下坠的 boom + 咔;`big=True` 加噼啪)、嫌犯照闪光 `shutter()`、合成的 `meow()`(共振峰扫 /i/→/a/→/u/)、碰杯 `clink`、摔碎 `crash_glass()`、每次擦除前 whoosh、猫趴键盘 `plop` + 一串 `key_click`、"太可爱了" `sparkle`。
- **Master**:峰值归一 ×1.6 → `tanh` 软削 ×0.9 → 1.2 秒淡出。mux 时 −1.6 dB、AAC 256 k / 48 kHz → demo 实测 −14.5 LUFS integrated、−1.2 dBTP。
- 新影片:保留小节网格,重写 `PLAN`(哪小节是 intro/full/sneak/build/drop/outro/end),把 SFX 清单重新对时到你的新场景时间。保留一个"盖章前的声音静默"。

## 7. 字幕与标题

- **卡就是字幕。**每个节拍有一个大标题(衬线 900,逐字弹出),罪状另有一条**字幕条**(`caption`):藏青圆角药丸(r 14)带玫粉偏移阴影(+8/+8,叠底),Noto Sans SC 900 46 px 奶油色,**关键词用黄或玫粉**的 tspan 高亮。它在标题后约 1 秒弹出(0.4 秒,微 −1.2° 倾斜),留到场景结束(≥ 1.8 秒)。
- **HUD**(`hudUpdate`):左上案号(`案卷 No.2026-CAT-001`,JetBrains Mono 22),下方章节 + 标题贴片(`罪状 01 | 测试重力`);右上 REC 圆点 + 日期。暗场景反色。标题卡上隐藏,它有自己的角落标签。
- **标题卡**:蓝底,大大的 Bagel Fat One 词(主题外号)奶油色带藏青偏移阴影,下方一行副标题,吉祥物从字母后探出头,爪子搭在上面。
- **片尾卡**:案卷夹带档案标签、睡着的吉祥物、结案章,和一个收尾笑点的对话气泡(「本片由 Claude 用代码一帧一帧画完。胖橘表示:全程没有配合。」)。**库规:本仓库每部影片以 "LemoLab × Claude Opus 5.5" 结尾**(× = U+00D7)。demo 中它是片尾卡底部单独一行居中(2026-09-26 添加,`index.html` S10):`txt(g, 'LemoLab × Claude Opus 5.5', {x: 960, y: 1040, 'font-size': 30, 'font-family': F.mono, 'font-weight': 800, fill: C.navy, 'text-anchor': 'middle', 'letter-spacing': 3})`,在 27.6–27.9 秒随 12 px 上浮淡入(气泡弹出后 0.3 秒),一直保留到藏青淡出。放在文件夹下方的空带里;绝不盖住吉祥物或图章。字符串在源码中字面书写,让 `init()` 预载其字形。
- `halftone-dossier.srt` 列出各卡(中文 + 英文对照);没有语音需要转写。
- **做英文版**(全在 `index.html`):替换各 `scene()` 中的字符串字面量(`chars()` 的大标题、`caption()` 各部分、`stampEl()` 的字、名牌/档案/文件夹文字、905–907 行的结尾气泡)、HUD 的 `chips` 数组(948–951 行)和 `txt(... 'CASE FILE · 2026')`;把 `F.serif`/`F.cute`/`F.sans` 换成拉丁展示字体(比如大标题用粗 slab 或 Bagel Fat One,叹词用圆体展示字),把它们加进 `fetch_fonts.mjs` 的 `fams` 和 `init()`(1069 行)的预载清单;设 `lang="en"`。宽度在构建时测量(`measure()`),所以条和章会自己调整大小,但英文比中文长 2–3 倍:缩小标题字号(230 px → 约 130 px)、图章缩到 1–2 个词(GUILTY、ACQUITTED、CLOSED)、用更小的 `charsPop` 错开(0.02–0.03 秒)。

## 8. 我们踩过的坑

- **字体必须在 `buildAll()` 之前加载**:排版用 canvas `measureText`;若 Google Fonts 的某个 unicode-range 切片尚未加载,逐字位置会用后备字体计算,字形重叠。`init()` 对**整个页面源码**预载每个字族(`documentElement.innerHTML` 包含脚本,所以代码里每个字符串字面量都被覆盖),再对已构建的 SVG 文字预载一遍。你在运行时生成的任何字符串只能包含文件中某处字面出现过的字符(或 ASCII)。
- 用 `font-display: block`(已在 `fonts.css` 中)——`swap` 会在最先渲染的几帧显示后备字形。
- `<clipPath>` id 是全局的:每个被裁剪的数字/表格都要唯一 id(`num01`、`num03`、`tclip`)。
- 沸腾滤镜别碰文字和半调:20 px 的点被位移后会变成糊,文字也会抖得没法读。
- 场景按时间窗显示/隐藏;某场景的 update 只在其亮着时运行,所以任何在提示点前必须隐形的元素都要显式 `op(…, 0)` 处理 `t < t0`(见 `charsPop`、`stampAnim`)。
- 圆点擦除必须在剪辑时刻达到全覆盖(80 px 网格上 r 62),否则硬切场景会露出来。
- 100 % 白闪看起来像掉帧;判决闪光上限 0.5。
- 原项目的 `demo/stills/t_*.png` 一部分早于纸张纹理(0.5–7.1 秒显得平);影片和重新渲染的结果一致,而不是那些早期静帧。
- `index.html` 里的未用遗留:`#ink` 滤镜、`charsIdle()`、`E.elastic`——有定义,从未调用。

## 9. 制作配方(本仓库)

```
styles/halftone-dossier/demo/
  index.html        the whole film: helpers, halftone, paper, cat rig, 10 scenes, HUD, wipes, render(t)
  render.mjs        Playwright renderer: stills | video [workers] | mux [out.mp4]
  music.py          score + SFX + master → music.wav (seeded, deterministic)
  fetch_fonts.mjs   downloads the 5 Google Fonts families → fonts/*.woff2 + fonts.css
  fonts/ fonts.css  local font slices (OFL)       CREDITS   licences
  stills/           review stills + styleframe.jpg   out/     intermediates (gitignored)
```
在仓库根(`Lemo-Opuscar/`)运行;脚本内所有路径相对于 `demo/`。

1. (仅换字体时)`cd styles/halftone-dossier/demo && node fetch_fonts.mjs`——需要网络;重写 `fonts/` + `fonts.css`。
2. 人声/TTS:本风格没有(跳过)。若加旁白,先按它定场景时间。
3. 音乐:`.venv/bin/python styles/halftone-dossier/demo/music.py` → `demo/music.wav`(约 1 秒)。传路径可写到别处。
4. 审查:在 Chrome 打开 `demo/index.html?t=11.2`,或 `node styles/halftone-dossier/demo/render.mjs stills 3.3 7.2 11.25 23.3 27.8 --dir out/review`(每帧约 0.25 秒)→ `demo/out/review/t_*.png`。
5. 渲染:`node styles/halftone-dossier/demo/render.mjs video 2` → `demo/out/seg_*.mp4` + `demo/out/video_noaudio.mp4`(CRF 12 母版)。900 帧约 0.24 秒/帧/worker → 空闲机器上 2 个 worker 约 2 分钟(实测在其他六个渲染共享 CPU 时 5.6 分钟)。
6. Mux:`node styles/halftone-dossier/demo/render.mjs mux` → `styles/halftone-dossier/halftone-dossier.mp4`(x264 CRF 16 + 音乐 −1.6 dB,AAC 256 k/48 kHz;约 15 秒;从同一母版逐位复现已发布视频流)。传别的路径以免覆盖已发布影片。

## 10. 引擎用法

一切都在 `demo/index.html` 里。单文件是设计使然;开新影片时,**把 `demo/` 拷到新文件夹并重写 `buildAll()`**。可复用部分按行区间:

| 行 | 区块 | 复用什么 |
|---|---|---|
| 8–13、16–49 | 页面 + SVG 骨架 | 1920×1080 body;带滤镜 `boil`、`stampInk` 的 `<svg id="stage">`;层序 `#cam > #world`(场景)、`#hud`、`#wipe`、`#flash`、`#fade`;然后 `<canvas id="paper">`(叠底)和 `<canvas id="fx">`。逐字照抄。 |
| 55–94 | 核心辅助 | `C` 调色板、`F` 字体、`el(tag, attrs, parent)`、`txt`、`tf(e, x, y, s, rot, sy)`、`op`、`show`、`clamp`、`seg(t,a,b)`(0..1 进度)、`lerp`、缓动 `E.out/in/io/back`、`pop(t, t0, d)`、种子 `rng(seed)`、`measure(str, size, family, weight)`。 |
| 97–132 | 逐字文字 | `chars(parent, str, {x, y, size, family, weight, fill, anchor, ls, shadow:{fill,dx,dy}, stroke, sw})` → `{g, items}`;用 `charsPop(c, t, t0, stagger, d, from)` 动画。 |
| 135–150 | **半调** | `halftone(parent, {x0, y0, w, h, step, angle, color, f, maxK})` 返回一条 `<path>`;密度场 `radial(cx, cy, R, pw)`、`edge(R, pw)`;加 `.setAttribute('class','mul')` 叠印。 |
| 152–171 | 背景 + 字幕条 | `bg(parent, color)`;`caption(parent, [[text, colour?], …], {x, y, size})` + `captionAnim(c, t, t0)`。 |
| 174–190 | **图章** | `stampEl(parent, str, {size, color, family, padX, padY, border})` + `stampAnim(s, t, t0, x, y, rot)`。搭配 `SHAKES` 一项和 `t0` 处的 `stamp()` SFX。 |
| 192–194 | 心 | `heartPath(scale)` → path d 字符串。 |
| 199–337 | **吉祥物骨架** | `catHead`(耳、条纹、眼、嘴、须)+ `setFace(cat, {open, lookX, lookY, mouthOpen, earL, earR, happy})` + `blinkAt(t, [times])`;身体 `catSit`(正面)、`catRun`(侧面,+ `runCycle(c, t, speed, amp)`)、`catLoaf`(趴)、`catCurl`(睡);`tailEl(parent, d, width)` = 带条纹虚线的轮廓尾巴。做不同吉祥物时保留配方(7 px 藏青轮廓、平涂、奶油肚皮、`boil` 滤镜)重画路径;保留 `setFace` 接口。 |
| 349–355 | 时间线 | `scene(t0, t1, build)`:`build(g, s)` 一次性创建场景元素并返回 `update(t)`;`render()` 只在 `t0 ≤ t < t1` 显示场景并以**绝对**时间调用 `update`。 |
| 358–935 | 十个场景 | 完整示例:落字标题(359–403)、大标题 + 图章 + 爪印(406–435)、带身高表、名牌、闪光、心和气泡的嫌犯照(438–508)、半调数字 + 杯子物理 + 星芒(511–625)、带月亮、星星、床、速度线的夜奔(628–704)、笔记本电脑打字包袱 + loaf(707–782)、证物卡 + 抖动(785–819)、判决光线 + 彩纸(822–849)、理由特写 + 心形爆发(852–882)、文件夹 + curl + 结尾气泡 + 署名行(885–935)。 |
| 937–967 | HUD | 来自 `chips` 表 `[t0, t1, section, title]` 的案号 + 章节贴片;自动宽度;暗场景反色(编辑 `dark` 判断)。 |
| 969–988 | 圆点擦除 | `WIPES = [[cutTime, colour], …]`,80 px 网格,0.44 秒窗口。 |
| 995–1032 | 纸 + 颗粒 | `buildPaper()` 一次;`drawFx(frame)` 每帧。 |
| 1037–1064 | `render(t)` | 沸腾重播种、场景切换、`SHAKES` + 节拍脉冲(`inGroove` 窗口)、闪光时刻、最终淡出窗口、HUD、擦除、颗粒。 |
| 1066–1084 | `init()` | 字体预载(两遍)→ `buildPaper()` → `buildAll()` → `window.READY = true`;`?t=` 查询参数在普通浏览器渲染给定时间。 |

与 `render.mjs` 的契约只有 `window.READY` 和 `window.render(t)`;改时长需在两个文件里改 `FPS`/`DUR`。

**最小新场景**(粘贴在 `buildAll()` 内,然后把它的剪辑加进 `WIPES`、一行 `chips`、图章的 `SHAKES`,以及 `music.py` 里的 SFX 时间):

```js
scene(8, 12, (g) => {
  bg(g, C.paper);
  halftone(g, { color: C.yellow, step: 22, angle: 15, f: radial(1500, 520, 700, 1.0), maxK: 0.68 });
  halftone(g, { color: C.pink, step: 22, angle: 70, f: radial(0, 1080, 520, 1.2), maxK: 0.6 }).setAttribute('class', 'mul');
  const h1 = chars(g, '罪状 01', { x: 120, y: 330, size: 150, family: F.serif, fill: C.navy, shadow: { fill: C.yellow, dx: 8, dy: 8 } });
  const catG = el('g', {}, g); const cat = catSit(catG);
  const st = stampEl(g, '属实', { size: 160, color: C.red });
  const cap = caption(g, [['证据确凿,'], ['当场抓获', C.yellow], ['。']]);
  return (t) => {
    charsPop(h1, t, 8.05, 0.06);
    tf(catG, 960, lerp(1200, 470, E.back(seg(t, 8.2, 8.6))), 1.1);
    setFace(cat.head, { open: blinkAt(t, [9.4, 11.2]), lookX: Math.sin(t) * 4 });
    cat.tail.setAttribute('transform', `translate(90 285) rotate(${Math.sin(t * 2.4) * 10})`);
    stampAnim(st, t, 10.0, 1450, 640, -8);
    captionAnim(cap, t, 9.0);
  };
});
```

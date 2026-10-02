# 纸雕灯影（Paper-cut Lightbox）— 风格提示词

> 一只背后照明的层叠纸雕投影盒（纸雕灯）：6–9 张裁好的卡纸叠放在浅木盒里，暖色 LED 透过纸面发光，窗户和月亮从孔洞中透亮，每一层向下一层投下柔和阴影。影片从桌上真实的纸雕灯开始，并推进到它的内部。
> 演示片：*一个月饼的相思 · A Mooncake's Longing*（121.8 s）· `paper-lantern.mp4` · 源码在 `demo/` · 引擎：three.js 0.170（WebGL、SSAA 2×、VSM 软阴影、自定义景深 + 辉光合成器）、Canvas2D 绘制纸层、无头 Chrome 逐帧捕获。
> **演示片旁白是普通话**（edge-tts `zh-CN-XiaoxiaoNeural`）配中文字幕。库的默认是英语配 Kokoro（`core/tts/`）——§6 和 §10 说明如何切换。
> 参考（仅参考其语法）：商用纸雕灯（纸雕灯 / "shadow box lightbox"）、Lotte Reiniger 的剪影电影（剪纸人物语言）、中国剪纸母题（祥云、江南民居、喀斯特山）。不要照抄任何具体的灯款设计、电影画面或角色。

你正在以**纸雕灯影（Paper-cut Lightbox）**风格导演一部影片。用户给你一个主题。其余一切——故事、镜头、节奏、声音——由你决定，并交付一部完成的影片。演示片长 2 分钟；45–120 s 都适合这个风格。遵循本指南。

---

## 1. 这个风格是什么

每个镜头都是**一个实体物件**：一只浅盒（内腔 **0.56 × 0.33 m、深 0.16 m**），装着平行放置、裁成剪影的纸张。你看到的一切必是三样东西之一：

1. **纸层** — 一张平裁的纸，每层一种平涂色（加少量细节），带纤维纹理、上缘一道细窄的暖色**亮边**和下缘一条细**暗带**。越靠后的层越浅越蓝；最前面的层几乎全黑。这个明度阶梯*就是*纵深。
2. **透纸的光** — 背光透过每张纸，成为温暖的、云雾状的半透（纸浆斑驳），在光源（月亮、灯）附近最强，向远处衰减。窗户、灯笼、月迹是**孔洞/自发光窗**，烧得明亮并泛出辉光。
3. **阴影** — 顶部 LED 聚光把每层的 **VSM 软阴影**投到后面的层上。这是"真纸真盒"质感的来源；永远不要关掉它。

画框就是盒子。镜头运动很小（灯内一支真实微距镜头）：缓慢推进、层间轻微视差、在层之间拉焦的浅景深。影片首尾由**真实世界**包夹：暗房里的胡桃木桌、木框中亮着的纸雕灯、一套茶具和一盘被盒子的溢光照亮的真实月饼。第一个镜头从房间推进盒内；最后一个拉回到盒外。

## 2. 故事：什么适合这个风格

| 天生优势 | 故事用法 |
|---|---|
| **灯亮起** | 开场就是字面上打开灯：先是月亮，再是远处的层，然后窗户逐一点亮。"灯亮" = 一个故事开始、一个家、有人在等。 |
| **纵深 = 距离** | 山、河、城市的层叠使*距离*可见。旅程、思念、"远方"的故事是原生的。 |
| **剪影** | 人物是黑色剪纸，带少量关节件（一条手臂、一片衣袖）。无脸的人读作每一个人——适合民间故事、家庭、节庆。 |
| **窗户** | 一扇亮着的窗、窗里一个剪影，是这个风格最强的画面。两扇亮窗共享同一轮明月是演示片的题眼镜头。 |
| **纸即文字** | 标题、书信和诗也是纸：裁好的纸条上的竖排毛笔字，逐列揭示，配一枚红印。 |
| **盒子本身** | 结尾拉出到真实桌面，意味着"这是一件珍藏 / 一个在家里讲的故事"。 |

**故事形态（已在演示片中验证）：** 房间 → 灯亮 → 推进盒内，出标题 → 由来（外婆的厨房，月饼被压模）→ 一点文化（一句明代书卷引文）→ 缺席（一把空椅子）→ 旅程（火车穿越层叠的群山，途中讲一个神话，一只盒子反向经过）→ 抵达远方的城市 → 那封信 → **转折：另一只盒子正走向反方向**（互相思念——两扇窗，一轮月）→ 一首古诗 → 拉出盒子，"中秋快乐"。

改编任何主题：找到**两个地方**和它们共享的**那一盏光**（月亮、灯塔、窗）。把每个地方做成一组层叠；在两地之间做一段旅程；结尾两地同时亮起。

## 3. 视觉语言

**单位与布局。** 一切以米为单位，y 向上。盒腔 `BOX = { w: .56, h: .33, d: .16 }`（`src/room.js`）。层的 z 从约 **−0.14（天空）到 0（前）**；盒内镜头在 z ≈ 0.3–0.56，fov 26°。盒内的满幅层是 `.558 × .328` — **绝不能大于盒腔**，否则在房间镜头里会戳出木框。

**夜景外景的层叠（S01）：**
| z | 层 | 颜色 | 背光 `trans` |
|---|---|---|---|
| −.135 | 天空渐变（无光照，`skyPanel`）+ 星星 | `#0a1330 → #172a58 → #2e4478 → #43598a` | — |
| −.125 | 月亮圆盘 + 加色光晕 | `#fffaf0 / #fff0cf / #f7dca4` | — |
| −.112 | 祥云 | `#c3cbe8` | .9 |
| −.098 | 远处喀斯特山，刻出等高缝 | `#6a86c2` | .7 |
| −.080 | 中景山 | `#3f5a92` | .45 |
| −.062 | 村落（江南民居）+ 自发光窗 | 墙 `#5a70a6` / 顶 `#1b284f`，光 `#ffb862` | .25 |
| −.046 | 河 + 月迹（自发光） | `#22325e`，迹 `#e9cf96` | .3 |
| −.030 | 桂花树 + 桥，自发光花 | `#17224a`，花 `#d9a24a` | .12 |
| −.014 | 前景岸 + 芦苇 | `#0e1532` | .05 |
| +.004 | 悬挂的灯笼（自发光） | `#0d1328`，光 `#ff8a48` | .05 |

规则：**后层明亮 + 半透，前层深暗 + 不透**。室内用同一阶梯的暖棕色系（厨房墙 `#b08058`、道具 `#6e3b1f`、人物 `#2e170d`、灯光 `#ffc878`）；远方的城市用紫色系（`#2a2456`，窗 `#e8cc90`）。

**强调色：** 印泥红 `#b3302a`、金色题纸 `#f1dbac` / `#f3d998`、盒红 `#9e2a20`、孙女回信用一只蓝色盒 `#2a4f7a`。

**纸面质感**（`src/paper.js` 的 `finish()`）：平铺纤维纹（`GRAIN`，512²，α .9，`source-atop`）、上缘亮带 `rgba(255,236,200,.35)` 偏移 3 px、下部暗带 `rgba(0,0,0,.28)` 偏移 3 px。画布分辨率 `PPM = 5200` px/m。

**背光着色器**（`paperMat()`）：`emissive += albedo × lightCol × trans × uLit × fall × (.35 + 1.3·cloud)`，`fall = mix(.22, 1, exp(−d²/R²))`，围绕每镜头的光点 `uLight`（通常是月亮）。`cloud` 是平铺的纸浆斑驳纹理（`CLOUD()`）。自发光窗来自第二块 Canvas（`glowDraw`，白 = 光），按 `glow` 缩放并由 `uGlowLit` 门控（0→1 即"点亮"）。

**字体**（`demo/fonts/`，OFL）：马善政 Ma Shan Zheng `FONT.brush` 用于标题/诗词，志莽行 Zhi Mang Xing `FONT.xing` 用于行草，龙藏 Long Cang `FONT.hand` 用于孩子的手写，思源宋体 Noto Serif SC `FONT.song` 用于字幕和署名。

**真实场景**（`src/room.js` 的 `lightbox()`）：挤出胡桃木框（Poly Haven `american_walnut_veneer`，染色 `#8a6a52`）、盒内黑纸衬、胡桃木桌、暗色放射墙 `#2a2018 → #0a0806`、盒口一盏 `RectAreaLight` 溢光 `#ffc98a`（强度 6–7）、半球补光 `.25`、Poly Haven `tea_set_01`（茶壶、杯、碟、盘）和两只程序化 3D 月饼（圆柱体 + `cakeFace` 凹凸贴图面）。

## 4. 动效

- **一切都像粘在签子上的纸那样动**：层平移（x/y）、绕轴点旋转（`ax/ay` 锚 = 关节）、沿一根轴从 0 缩放长出（"写出来"）、或点亮。没有挤压拉伸，没有变形。
- **关节人物**：一片身体纸 + 一片在肩部锚定的独立手臂纸（`people.js` 的 `GRAN_SHOULDER`、`GIRL_SHOULDER`、`SUSHI_SHOULDER`）；只动 `rotation.z`。
- **灯光提示是大动作**：S01 的开灯序列——月亮（0.5–3.2 s）→ 天空 → 各层半透按 0.42 s 错开 → 主光 → 窗 → 灯笼闪烁（`1 + .06·sin(7.3t)·sin(3.1t)`）。
- **文字揭示**：纸条从锚定边长出（`s13_note.js` 的 `reveal()` 同时缩放网格*和*纹理平铺，使字形不被压扁），对齐到被念出的字。
- **硬动作节拍落在 whisper 词时间上**：木模在「啪」上砸下（`E.word('L04', 13)`）、「圆」字在它的字上闪亮、光弧从「互」开始生长。
- **转场**：镜头间 0.5–1.2 s 溶解（`in: { type: 'dissolve', dur }`），另有 `iris` 模式（从 `center` 起的圆形划像）。标志性转场是**近裁剪面的祥云幕帘**（`s17_sushi.js` 的 `cloudCurtain()`），在镜头最后 1.2 s 合拢、在下一镜头打开——两半必须在前缘精确相接。

## 5. 镜头

| 节拍 | 镜头 |
|---|---|
| 开场 | 房间全景（z 1.45）对着暗盒 → 灯亮 → 7 s ease-in-out 推进穿过框到 z ≈ 0.56，之后继续缓进。焦点从前层拉到村落。 |
| 盒内镜头 | 近乎正面，缓慢推轨进出（`aim(cam, [px,py,pz, tx,ty,tz], t)`）、手持微漂 `hand ≈ .0006 m`。光圈 12–26（在 `post()` 里），对焦故事层，使前景芦苇和远山柔化。 |
| 俯拍插入 | 月饼压模和打开的礼盒作为平面俯拍层叠拍摄（同一引擎，不同布景）。 |
| 火车 | 横向行进：各层按深度成比例滚动（视差）。 |
| 结尾 | 推进盒内，再拉出到桌面（z 0.5 → 1.08），茶具入画，标题「中秋快乐」在盒内淡入、下面是署名，1.2 s 淡黑。 |

## 6. 声音

**人声（演示片，普通话）：** `edge-tts`，音色 `zh-CN-XiaoxiaoNeural`，语速 `+10%`，音调 `-2Hz`（`demo/tts.py`）；`script.json` 里逐行 `rate` 覆盖（L01 `+5%`、引文信 `+2%`、诗 L23 **`-12%`**、收尾行 `-6%`）。输出按峰值 2 % 修剪（20 ms 预留、120 ms 尾）→ 48 kHz 单声道 `vo/<id>.wav` + `vo/dur.json`。
- **多音字**：通过 `say` 字段给 TTS 喂同音写法，字幕保留真实文本：「相思的"相"」→ `say: 原来，相思的香，是互相的香。`（否则 TTS 读 xiàng）。
- **校对**：`demo/asr.py`（faster-whisper **medium**，zh）逐行打印 OK/DIFF；同音字或数字的 DIFF（八月十五 → 8月15、她 → 他）可以接受——其余的要听。
- **词级时间**：`demo/words.py <ids…>` → `vo/words.json`（whisper 词时间戳）。镜头经 `E.word(id, k)` 读取；**k 是 whisper 的 token 序号，不是字符序号**（whisper 把「我们」算作一个 token）——打印列表并数一数。

**人声（英语，库默认）：** 写 `lines.json`（`{id, text, voice, speed}`），运行 `core/tts/tts.py`（Kokoro，如 `bf_emma` / `af_heart`，语速 ≈ .9）输出到 `demo/vo/`，再运行 `core/tts/asr_check.py`，它会写出 `vo/dur.json` 和兼容的 `vo/words.json`（英语词序号）。把同样的 id/文本放进 `script.json`。字幕拆分的改动见 §10。

**音乐：** Kevin MacLeod — **"Ripples"**（古筝，0 → ~37 s）交棒给 **"Nu Flute"**（笛子 + 弦乐），4.5 s 交叉淡化；均为 CC BY 4.0（incompetech.com）。交棒时刻反向求解，使 Nu Flute 自带的 70 s 渐强正好落在诗上：`T_FLU = C.L23.at − 70 + .3`。Nu Flute 相对 −3.3 dB。2 s 淡入、3 s 淡出。为什么选它们：五声性、无鼓（脉冲能量 < 0.02）——librosa 分析和被否的候选见 `demo/music/MUSIC.md`。

**混音（`demo/mix.py`）：** 人声 → 降采样包络压缩器（−22 dB，3:1）→ 70 Hz 高通 → RMS −18 dB；音乐 RMS −27.5 dB，语音下 **5.5 dB ducking**（0.25 s 平滑包络）；程序化拟音 −24…−34 dB：开关咔哒 + 上行闪烁（开灯）、木模闷响 + 噗、揭示时的风铃、纸窸窣、盖子闷响、火车底噪（轰鸣 + 0.62 s "哐当-哐当"）、火车驶过和云幕的呼啸、城市嗡鸣、一口咬下的酥脆。一切从 `out/timeline.json`（台词起点）和 `vo/words.json` 摆位。峰值限制到 −1 dBFS；最终封装归一到 **−14 LUFS**（`core/render/mux.sh` 两遍 loudnorm）。

## 7. 字幕与标题

- 内烧 DOM 字幕（`index.html` 的 `#sub`）：Noto Serif SC 500，40 px，`#fbf3e4`，字距 .06em，距底 74 px，柔和黑影；台词前 0.15 s 淡入、后 0.3 s 淡出。超过 21 字的行在最靠近中间的逗号处拆分；行尾标点去掉，句内 `，。：` 变全角空格。
- **画面中以纸出现的台词不加字幕**（`script.json` 里 `"sub": false`）：外婆的信（L17）和诗（L23）。同样的字不要显示两遍。
- 标题：盒内纸条上的竖排马善政（「一个月饼 / 的相思」）配红印「中秋」，在第二行之后淡入。
- 片尾卡：盒内「中秋快乐」纸质标题 + 红印「团圆」；署名块（`#credit`，19 px，两行：音乐 / 素材 / 字体）在最后一句之后 0.6 s 淡入。
- **落款（库规则）：** 片尾卡上的 **"LemoLab × Claude Opus 5.5"** 作为**纸雕灯内的一条剪纸纸条**呈现，而非叠加文字：`src/shots/s18_finale.js` 的 `sign` 纸层 — `w .26, h .02`，居中于暗色前景岸上 `y −.1515`，`z −.024`（在岸层之前、靠近最终焦平面），`text(…, .0115, FONT.song, { fill: '#f3d998', weight: 600 })`，`trans .3`，`shadow/recv: false`。它在 `tT + 1.0 → tT + 2.0` 淡入（「中秋快乐」开始后 1 s，≈116.6–117.6 s）并保持到结尾，读作灯的一部分，而署名块位于下方桌面。新影片保留此摆位；若结尾画面盒底没有暗带，就把纸条放在最暗的前层上。
- `paper-lantern.srt` 含全部 25 行（包括两行画面内文字），打在其被念出的时间。

## 8. 我们踩过的坑

- **`destination-out` 挖孔需要不透明 fillStyle**：打孔前设 `x.fillStyle = '#000'`（或任意不透明色）；透明或发光白的填充会让孔半开。`props.js` 的 `cut(x, fn)` 替你做了。
- **VSM 阴影漏光 / 自阴影晕圈**：不参与阴影的层（标题、前方的灯笼、光弧、幕帘）需要*同时*设 `shadow: false` **和** `recv: false`。
- **加色辉光**：透明径向渐变 `CanvasTexture` 会露出方形边缘。溢出盒外的光用解析式 `ShaderMaterial` 衰减（`paper.js` 的 `burst()`）。
- **近裁剪面云幕**：计算合拢位置，使两幅幕帘的**前缘**相触（`s16_mutual.js` 里偏移 `±.035`），否则旧镜头会从缝里漏出来。
- **大于盒腔的层**在房间镜头里戳出木框——满幅纸保持 ≤ `.558 × .328`。
- **调色 uniform 曾有粘滞（2026-09-26 修复）**：v1 的 `Pipe.final()` 只在镜头的 `grade()` 返回时写入 `lift`/`gain`，于是缺省的镜头继承上一个镜头的值，结果取决于渲染 worker 从哪帧开始——首个发布版（`paper-lantern_v1.mp4`）在 worker 边界 60.9 s（S09）和 101.5 s（S16）有可见的调色跳变。现在每个缺失的调色键都回落到 `GRADE0`（`post.js`：lift `[0, .005, .018]` 冷夜默认，gain `[1.03, 1, .95]`），任意 worker 数渲染结果一致。夜景外景依赖默认值；室内必须显式返回其暖色 `lift`（S08 就是这样修的）。
- Whisper medium 会听错中文同音字（八月 → 8月、她 → 他、婵娟 → 禅绢）；DIFF 用耳朵判断，不要靠字符串匹配。
- 无头 Chrome 必须带 GPU 标志运行（`--use-angle=gl --enable-gpu --ignore-gpu-blocklist`，`render/browser.mjs`）；SwiftShader 慢约 6 倍。

## 9. 制作配方（本仓库）

```
styles/paper-lantern/demo/
  index.html        page: canvas + #sub + #credit, importmap → /node_modules/three (repo root is the static server root)
  script.json       lines: {id, text, rate?, say?, sub?}
  tts.py asr.py words.py   edge-tts → vo/*.wav + dur.json; whisper proof; word timings → vo/words.json
  src/main.js       timeline (GAP table), shot scheduler (lazy build / dispose), dissolves, subtitles, credits, window.render(t)
  src/shots/index.js   shot list, each start anchored to a line: start: L('L06') - .5
  src/shots/sNN_*.js   one module per shot: build(E) → { S, update(t), post(t), grade(t) }
  src/paper.js stage.js post.js room.js art.js people.js props.js lib.js   engine (see §10)
  render/still.mjs video.mjs cues.mjs   stills, parallel video render, export out/timeline.json
  mix.py            voice + music + foley → out/mix.wav
  music/            candidate tracks + MUSIC.md (only km_Ripples.mp3 and km_Nu_Flute.mp3 are used)
```

所有命令在仓库根（`Lemo-Opuscar/`）运行。Python = `.venv/bin/python`；`edge-tts` 必须在 `PATH` 上（用户级 `pip install edge-tts`；不在 `.venv` 里）。

```sh
D=styles/paper-lantern/demo
# 1. voice (Mandarin demo) — delete vo/<id>.mp3 or set "redo": true to regenerate a line
python3 $D/tts.py                          # → $D/vo/<id>.wav, $D/vo/dur.json
.venv/bin/python $D/asr.py                 # OK / DIFF per line (≈1.5 min, whisper medium, CPU)
.venv/bin/python $D/words.py L01 L02 … L25 # → $D/vo/words.json (pass ALL ids: it rewrites the file)
#    English instead: .venv/bin/python core/tts/tts.py $D/lines_en.json $D/vo && .venv/bin/python core/tts/asr_check.py $D/lines_en.json $D/vo

# 2. timeline + review stills (any number of times, seconds)
node $D/render/cues.mjs                    # → $D/out/timeline.json (DUR, line cues C, shot plan P)
node $D/render/still.mjs 5 12.5 62.5 116 --out $D/out/review          # add --q '?ssaa=1' for fast previews
#    core renderer works too: node core/render/still.mjs $D 12.5 --out $D/out/review
#    debug: ?sheet (character sheet), ?nolit=1 (backlight off), ?hide=clouds,far (S01 layers)

# 3. mix
.venv/bin/python $D/mix.py                 # → $D/out/mix.wav   (optional arg: other output path)

# 4. render video (≈90 s for 3653 frames with 6 workers on an M-series Mac; ≈3 min with 2)
node $D/render/video.mjs --workers 6       # → $D/out/video.mp4 (segments written next to the output; any worker count gives the same frames)

# 5. mux: two-pass loudnorm −14 LUFS, 30 fps, no grain
sh core/render/mux.sh $D/out/video.mp4 $D/out/mix.wav styles/paper-lantern/paper-lantern.mp4 30 0
```

审查循环：每个镜头在其关键词时刻出静帧 → 拼贴（`ffmpeg … tile=6x5`）→ 修 → 然后才全片渲染。全 SSAA 检查房间镜头（前 10 s、后 8 s）；它们承载着"这是一件实物"的幻觉。

## 10. 引擎用法

**页面契约**（`src/main.js`）：暴露 `window.READY`、`window.DUR`、`window.render(t)`（逐帧确定性）、`window.CUES`（台词提示）、`window.PLAN`（镜头表）。查询 `?ssaa=N`（默认 2）。

**时间线**：台词从 2.6 s 开始；每行持续其 `dur.json` 时长，后跟 `GAP[id]` 秒（`main.js` 的 `GAP` 表，如 `L02: 4.2` 给标题节拍、`L25: 5.0` 给结尾）。镜头在 `src/shots/index.js` 里锚定到台词；改一句配音会自动重排一切。

**镜头上下文 `E`**（传给 `build`）：`dur`、`T0`、`C`（所有提示）、`env`（PMREM 房间环境贴图）、`W`（词）、`cue(id)` / `cueEnd(id)`（镜头内秒的台词起/止）、`word(id, k)`（whisper token k 的镜头内开始时刻）。

| 模块 | 关键 API | 说明 |
|---|---|---|
| `paper.js` | `sheet({ U, w, h, draw, glowDraw?, glow, glowCol, trans, z, x, y, ax, ay, shadow, recv, finish, ppm, bumpDraw? })` | 一层纸。`draw(x, k)` 以米作画（原点居中，y 向上）。`glowDraw` 画自发光贴图（白 = 光，黑 = 遮罩）。`trans` = 背光半透度。`ax/ay` = 轴点。返回 Mesh；`m.material.userData.u` 含 `uTrans`、`uGlowLit`、`uClip`（圆形裁剪 `[cx, cy, r, inside?]`）。 |
| | `skyPanel({ w, h, z, stops, stars, starMinY, gain })` | 无光照渐变背板。 |
| | `moon({ x, y, z, r, gain, halo, haloGain, art? })`、`setMoon(m, k)` | 圆盘 + 加色光晕；`k` = 亮度 0…1+。 |
| | `text(x, s, px, py, size, font, o)`、`vtext(…)` | 米空间文字（`vtext` 为竖排）。 |
| | `burst(w, h, col)` → `m.userData.set(k)` | 解析式加色辉光。 |
| | `paint(w, h, draw, ppm)`、`finish(c, o)`、`tex(c)`、`PPM`、`GRAIN`、`CLOUD()` | 底层 canvas 助手。 |
| `stage.js` | `stage({ light, lightR, lightCol, key, keyCol, keyPos, keyTarget, keyAngle, amb, ambCol, shadowR, fov, bg })` → `{ scene, U, cam, key, amb, add(...) }` | 场景 + 顶部 LED 聚光（VSM，2048²，radius 10）+ 环境光 + 背光 uniform `U`。 |
| | `aim(cam, [px,py,pz, tx,ty,tz], t, { hand, handF, roll, fov })` | 带手持漂移的镜头。 |
| | `dispose(scene)` | 镜头离场时由调度器调用。 |
| `post.js` | `Pipe.shot(scene, cam, { focus, aper, maxCoc, bloom: { strength, radius, threshold } }, target)` | MSAA4 半浮点 → CoC → 96 采样 gather 景深 → UnrealBloom。`focus` = 以来计的距离。 |
| | `Pipe.final({ mixB, mode, center, expo, fade, vig, sat, contrast, lift, gain })` | 溶解 / 光圈、调色、暗角、中性色调映射、sRGB。镜头省略的键每帧回落到 `GRADE0`。 |
| `room.js` | `await lightbox(S, E, { spill, spillCol })` → `{ g, frame, spill, table, props }`、`BOX` | 真实盒子、桌子、茶具、月饼。纹理从 `/core/assets/polyhaven/` 加载。 |
| `art.js` | `karst`、`ridge`、`xiangyun`、`waves`、`waterTop`、`osmanthus`、`pine`、`willow`、`reeds`、`jiangnanHouse(x, o, g)`、`pavilion`、`lantern(x, o, g)`、`mooncake`、`FONT` | 剪纸母题；带 `g` 的函数把它们的窗画进发光画布。 |
| `people.js` | `grannyStand/Sit`、`girlStand/Sit`、`childStand`、`sushi`、`change`（嫦娥）、`rabbit`、`arm(x, s, a, b)`、`spline`、`ribbon`、`*_SHOULDER` | 剪影人物，比例 `s` = 以米计的身高。 |
| `props.js` | `cut(x, fn)`、`roundWindow`、`steamers`、`stove`、`jar`、`bowl`、`teapot`、`pendant`、`calendar`、`table`、`chair`、`boxFront`、`label`、`cake3q` | 室内道具。 |
| `lib.js` | `ss`、`seg`、`eio`、`eo`、`ei`、`back`、`spring`、`lerp`、`clamp`、`mulberry`、`vnoise`、`track`、`env` | 确定性助手。 |

**最小镜头**（一座月光小山加一扇亮窗；作为 `{ id: 'S99', start: L('L05') - .3, in: { type: 'dissolve', dur: .8 }, build: s99.build }` 加入 `SHOTS()`）：

```js
import { sheet, skyPanel, moon, setMoon } from '../paper.js';
import { karst, jiangnanHouse } from '../art.js';
import { stage, aim } from '../stage.js';
import { seg, ss, eio, lerp } from '../lib.js';

export function build(E) {
  const MN = [.08, .07, -.13];
  const S = stage({ light: MN, lightR: .15, lightCol: '#ffe2ae', key: 1.0, amb: .3, ambCol: '#7d90c8', keyCol: '#d6dcff' });
  const { U } = S;
  S.add(skyPanel({ w: .56, h: .33, z: -.14, stops: [[0, '#0a1330'], [1, '#43598a']], stars: 200 }));
  const mn = S.add(moon({ x: MN[0], y: MN[1], z: MN[2], r: .035 }));
  S.add(sheet({ U, w: .558, h: .328, z: -.1, trans: .7, draw: x => { x.fillStyle = '#6a86c2';
    karst(x, { x0: -.28, x1: .28, base: -.03, peaks: [[-.15, .06, .03], [.1, .05, .025]], carve: .0005 }); } }));
  const house = { cx: -.05, by: -.09, w: .06, h: .03, windows: [[.012, .01, .01, .01]], wall: '#5a70a6', tile: '#1b284f' };
  const town = S.add(sheet({ U, w: .558, h: .328, z: -.06, trans: .25, glow: 2.2, glowCol: '#ffb862',
    draw: x => jiangnanHouse(x, house), glowDraw: g => jiangnanHouse(null, house, g) }));
  S.add(sheet({ U, w: .558, h: .328, z: -.02, trans: .05, draw: x => { x.fillStyle = '#0e1532'; x.fillRect(-.28, -.165, .56, .075); } }));
  const tOn = E.word('L05', 2);                        // light the window on the 3rd spoken token
  return {
    S,
    update(t) {
      setMoon(mn, ss(seg(t, 0, 1.5)));
      town.material.userData.u.uGlowLit.value = ss(seg(t, tOn, tOn + .6));
      aim(S.cam, [0, 0, lerp(.56, .48, eio(t / E.dur)), 0, 0, -.07], t);
    },
    post() { return { focus: S.cam.position.z + .06, aper: 14, maxCoc: 14, bloom: { strength: .35, radius: .6, threshold: 1.15 } }; },
    grade() { return { expo: 1.05, vig: .42, sat: 1.05, contrast: .1 }; },   // missing lift/gain → GRADE0 (cool night); interiors add lift: [.012, .006, 0]
  };
}
```

**切换到英语**：`main.js` 的字幕拆分器假设中文（`st.length > 21`，按 `[，。：]` 拆，标点 → 全角空格）。英语改为超过 ~42 字符时在最靠近中间的 `, ` 处拆分并保留标点；把 `#sub` 设为一款拉丁衬线体（比如往 `fonts/` 加一款 OFL 字体如 Cormorant）约 38 px。此时 `E.word(id, k)` 数英语单词。其余一切（时间线、混音、渲染）与语言无关。

# 水彩笔刷(Watercolor Brush)— 风格提示词

> 一本会自己作画的博物学者野外手记:半透明的笔触在温暖的棉质水彩纸上带着干笔飞白,沿着一段风景完成一次漫长的横向行走,配上手写笔记和安静的数据仪表,最后拉出到一幅绘制而成的地图。
> 演示片:*Follow the Rain*(113.6 s,1920×1080,60 fps)· `watercolor.mp4` · 源码在 `demo/` · 引擎:Canvas2D 笔触引擎(`engine.js` 的 `mk`/`drawS`,变宽度飘带 + 断续的鬃毛笔痕)、程序化植物生成器、逐植物精灵缓存、headless Chrome 逐帧截取。
> 参考(仅借鉴语法):博物学者野外手记与植物图版水彩;长卷式横向全景;生态学教材里的"样带"(transect)示意图(一条梯度,从左走到右)。借鉴其语法,绝不复制任何具体作品、角色或版式。

你正在以**水彩笔刷(Watercolor Brush)**风格执导一部影片。用户提供主题,其余一切由你决定 —— 要走的梯度、分区、标本、地图、节奏、配音与配乐 —— 并交付一部完成的影片。遵循本指南。

---

## 1. 这是什么风格

一部看起来像在你面前被现场绘制出来的手绘画野手记的影片。所有内容都铺在一张温暖的纤维质纸张(`#f1e9da`)上。每个物体 —— 一丛三齿稃、一棵桉树、一只袋鼠、一朵云、地平线、一段海岸线 —— 都由**一根根独立的笔触**构成:一条以部分不透明度落下的变宽度飘带,外加 3–9 条细的**鬃毛笔痕**,它们断成虚线(干笔"飞白")。笔触交叉处相互叠加并加深,就像真实的透明颜料。没有任何东西有矢量轮廓;树干上那条较深的边缘笔触(`edgeOf`)是唯一的"线"。

物体进入画面时**逐笔画出自己**:一笔接一笔,先树干,再枝条,后叶片。完成后,植物被缓存为精灵(sprite),只做摆动。整片风景是一个长长的绘制世界,镜头在其间横向行走,分为四层视差的水洗与植物,同时一个**标注层**(Caveat 手写标签配钢笔引线、等宽字体的降雨仪表、Cormorant Garamond 的生物群系标题)解释我们看到的一切。影片结尾用纸色薄雾把风景洗去,并把整块大陆绘制成一幅地图。

基调:平静、好奇、精确。这是一部纪录片,不是童话:数字是真实的,标签是拉丁学名,色板跟随数据。

## 2. 故事:什么适合这个风格

| 天然优势 | 故事用法 |
|---|---|
| **沿一条梯度行走** | 把一个可测量的量映射为水平距离并走完它:降雨(demo)、上山的海拔、沿礁壁向下的深度、离市中心的距离、从赤道到极地的纬度、沿一条河流的时间。镜头运动本身就是论证。 |
| **以画入来揭示** | 每个新分区到达时就是被画出来的 —— 观众看着一种新的生命一笔一笔浮现。用 `burst` 让高潮分区(雨林)整片瞬间涌现。 |
| **分区色板** | 颜色承载数据:红赭色沙漠 → 鼠尾草绿的金合欢灌丛 → 麦秆色林地 → 蓝灰色湿润森林 → 深绿雨林。天空、地面、山丘与远树都按分区混合。 |
| **标本 + 笔记** | 每个分区一件主角标本,用引线手写标注(`spinifex · Triodia`、`mountain ash · Eucalyptus regnans`)。每个分区一只小动物赋予生气与比例(袋鼠、虎皮鹦鹉、考拉、食火鸡,以及一个示意人形比例的小人)。 |
| **每区一事** | 每个分区安排一个小小的演示性事件:雨水沿金合欢枝条流下渗入根部、一道火线与树皮下的萌条再生、一次仰摄测量 100 m 高的树、一张雨林分层示意图。 |
| **拉出到地图** | 走完之后,把风景洗去并绘出地图;在上面画出"我们的行走路线"。随后地图可以在**时间**中移动(5000 万年前 → 今天),把一次空间行走变成一次历史行走。 |

**故事形状(demo 中已验证):** 冷白纸张 → 地平线刷入 → 朱红太阳像印章一样"盖"下 → 标题 → 风景以笔刷边缘擦除式揭示 → 5 个分区(每区约 10–18 s)配上升高的仪表 → 薄雾把一切洗回纸色 → 海岸线画入 → 地图填满 → "我们的行走路线"箭头 → 回溯到 5000 万年前(全绿) → 漂移并干化回今天(干的核心、绿的边缘) → 淡出的地图上出现结尾标题 + 致谢。

改编一个主题:选定梯度;列出 4–6 个分区并在每个边界给出真实数值;给每个分区配一套色板、一件主角标本、一只小动物和一个事件;以一幅地图或图解收尾,重新框定这次行走(先在空间,后在时间)。

## 3. 视觉语言

**纸张**:`demo/paper.jpg`,由 `paper.py` 生成 —— 底色 `#f1e9da`,三个八度的平滑噪声(±3.5 %),2,600 根短的弯曲纤维(明暗 ±3.5 %),细颗粒,5 % 晕影。每帧最先绘制它,它同时是擦除风景的薄雾(`drawMist` 用波浪状上升边缘裁剪 `PAPER_IMG`)。

**墨色**:`INK #2b2520`(线条、文字、树干边缘),`INK2 #3d3129`(枝条、茎干)。强调色:朱红太阳 `#cf4f2c` 带 7 道 `#b8401f` 水平干笔横杠(读起来像一枚印章);雨蓝 `#3f7fa8`(雨滴、仪表填充)。

**分区色板**(`scene.js` `ZCOL`,由镜头位置通过 `mixZone`/`zoneGrad` 混合):

| 分区 | 天空 | 远山 | 中景 | 主地面 |
|---|---|---|---|---|
| desert | `#f0d6b8` | `#dcae8e` | `#dba47e` | `#dda27a` |
| mulga | `#efdcc6` | `#c89b8c` | `#d0ae80` | `#dbb584` |
| wood | `#ece2cd` | `#bdb99c` | `#cbc28f` | `#dccb92` |
| wet | `#dfe3dc` | `#9fb1b8` | `#98aa8a` | `#a7b48e` |
| rain | `#dbe3d8` | `#9ab19f` | `#6f8d6d` | `#6e8b69` |

植物颜色组在 `plants.js` 的 `COL` 中(straw、mulga、salt、gum、gold、ash、fern、rain、rainLite、palm、wattle)。地图降雨色带(`main.js` `MSTOP`):150 mm `#cf7c4f` → 300 `#cda35f` → 650 `#b3b07a` → 1150 `#7f9a6c` → 2000 `#46705a` → 4000 `#2f5a45`,在地图上量化为 5 档。

**笔触材质**(`engine.js`):一条宽度沿轮廓(`brush`、`leaf`、`even`、`tip`、`trunk`)变化的飘带,带 ±22 % 的值噪声粗糙度,以 `a × rib`(有鬃毛时 ≈ 0.57,因此笔身是一层薄水洗)填充,外加 `nb` 条 30–85 % 不透明度的鬃毛笔痕,每条带随机虚线图案(18–90 px 的长实段、最大 w/2 的间隙)和随机的提前收笔 —— 这就是飞白。水洗(`washPoly`)是对同一多边形做 3 遍顶点抖动的绘制,透明度 `a/3 × 1.6`,因此各遍不一致处边缘加深,像积水的 水彩边缘。

**图层**(`LAY`):远景(视差 0.25,地面 y 640,缩放 0.38,透明度 0.5)· 中景(0.55,690,0.62,0.78)· 主景(1.0,745,1.0,1.0)· 前景(1.55,1115,1.75,0.95)。距离越远 = 更小、更浅、更不饱和;湿润分区的图层之间夹两条雾带(`mistBand`)。

**字体**:Cormorant Garamond(生物群系标题 500 52 px,副标题斜体 500 36 px,片名斜体 124 px,地图年份 150 px / "today" 斜体 104 px),Caveat 500/600(手写笔记,26–42 px,在 12 px 纸色阴影晕上绘制两遍),IBM Plex Mono 400(如 `ANNUAL RAINFALL`、`01 / 05` 等标签,字距 3 px),Noto Serif SC 400(中文字幕行)。通过 `fetch_fonts.mjs` 自托管于 `demo/fonts/`;Noto Serif SC **已子集化为 `scene.js` + `main.js` 中出现的 CJK 字符**。

## 4. 运动

- **画入**:`plantP` —— 一株植物的进度为 `(REV(t) − screenX) / (span × max(.55, parallax))`。揭示期间(10.2–13.4 s)`REV` 从 −300 扫到 1650 px;此后一切从右侧进入的物体在约 380 px 的行程内画完。`drawList` 按顺序画 N 笔,每笔占进度的 `clamp(4/N, .12, .5)`,因此先树干、后叶簇。
- **摆动**:水平剪切 `sway × (sin(1.15t+φ) + .4 sin(2.7t+2φ))`,树木 0.006,草与蕨类 0.01–0.03。
- **笔刷边缘擦除**:整个风景由一条竖直波浪裁剪揭示(`drawStripAt(..., reveal)`),地平线由左到右的 `drawS` 进度画出,海岸线分段画出,标签由一个从左向右打开的矩形裁剪(`hand`)揭示,引线以递增的点数生长(`leader`)。
- **音乐锁定动画**:袋鼠跳跃的相位对齐配乐的节拍网格(`BEAT0 = 11.865`,`BEAT = .5805` s,每 2 拍一跳),使每次落地都踩在节拍上。
- **事件**:雨滴落在金合欢枝尖并沿茎下滑(14 滴,间隔 0.36 s),同时一块湿渍和一条虚线主根扩散;火线在 3 s 内扫过世界坐标 5650→6900 px,树木交叉淡入 `#2a2320` 的焦黑精灵,一条灰烬带使地面变暗,随后绿色萌条用 `drawList` 重新画回;雨林的 `burst` 在 0.9 s 内画完所有可见的雨林植物。
- **地图**:降雨场每帧从站点值加时间乘数(`mapTau`)重算,因此 5000 万年前 → 今天是一次连续的"干化",配径向填充揭示;干化时火点在 500–900 mm 色带内闪烁。
- 缓动函数:`engine.js` 中的 `ss`、`eio`、`eo`、`ei`;一切都是 t 的纯函数。

## 5. 镜头

| 节拍 | 镜头 |
|---|---|
| 标题(0–10.9 s) | 静止于空白纸张;地平线刷过,太阳盖下(1.6 s),标题擦入。 |
| 行走(10.3–73 s) | 一次连续的横向移动:`camXf = monotone([[0,700],[10.3,700],[16,1400],…,[66,9300],[73,9800]])`,单位为世界像素;分区之间加速,事件处减速(火、灰烬之树)。四层视差 + 0.2 的云。 |
| 高树 | 一次竖直仰俯 `camYf`:54.2–57.8 s 沿着山地桉上仰 980 px,同时画出"≈ 100 m"的尺寸标注线,58.4–60.9 s 再俯回。 |
| 薄雾 | 70.3–73.6 s:两层波浪状纸色层从底部升起并擦除世界(无剪辑)。 |
| 地图 | 静止,居中的大陆(等距圆柱投影,cos 26° 校正,24 px/°),时间回溯时轻微的 90 px 竖直沉降。 |
| 结尾 | 地图淡至 30 %,标题块回到其上。 |

全片没有任何剪辑:整部影片就是一张画纸。

## 6. 声音

- **配音**:Kokoro(`kokoro-onnx`,模型 `core/tts/kokoro-v1.0.onnx`),音色 **`af_heart`**,**语速 0.93**,`lang en-us` —— 温暖、不疾不徐的纪录片播读。按峰值 1 % 修剪,10 ms 头 / 100 ms 尾。数字在 TTS 文本中拼写成词("two hundred and fifty millimetres"),在字幕中写作数字。13 句,对应故事的每个节拍,每句 1.7–7.4 s。
- **校验**:`asr.py` 用 faster-whisper `base.en` 逐句转写;13 句全部正确读回(仅拼写变体:"millimeters"、"Red Center"、"1%")。
- **音乐**:Scott Buckley — *Wildflowers*(CC BY 4.0)。322 s 的曲目被剪到 117.8 s,只做**一次对齐节拍的跳接**:`analyze.py`(librosa 节拍跟踪,103.4 BPM,502 拍;chroma + MFCC 节拍同步自相似度)→ `jump.py` 对跳接组合排序,筛选结果落在 100–128 s 的组合 → 选定第 85 拍(61.23 s)→ 第 437 拍(265.61 s),chroma 相似度 0.915,4 拍相位对齐,在拍点前 60 ms 开始 0.18 s 等功率交叉淡化(`edit.py`)。画面的节拍常数来自同一份 `wf_beats.json`。
- **音效**:全部由 `mix.py` 合成(numpy/scipy):纸笔沙沙声(带通噪声,9 Hz 颤音,声像扫动)、太阳盖印的一声闷响、沙漠风、46 声虎皮鹦鹉啁啾、14 声与金合欢雨滴同步的水滴声、火焰轰鸣 + 噼啪、渐强的雨声、两声澳洲鞭鸟鸣叫、一声薄雾涌起和轻微的地图火点噼啪。来自滤波噪声 IR 的短卷积混响。
- **混音**(`mix.py`):人声 → 48 kHz,90 Hz 高通,RMS 压缩器(−24 dB,3:1)。**Kokoro 的峰均比约 17 dB**,因此一个 **5 ms 前瞻峰值限制器**(上限 = 语音 RMS + 11 dB)在电平匹配*之前*运行;随后语音 RMS = 音乐 RMS + 8 dB(说话期间);音乐在语音下 duck ×0.62(≈ −4 dB),包络 0.3 s 平滑;混音归一化到 0.89 峰值。最终响度在 `mux.sh` 中:单遍 `loudnorm=I=-14:TP=-1` → −14.2 LUFS,峰值 −1.0 dBFS。

## 7. 字幕与标题

- **内嵌、双语**,居中于底部:英文斜体 Cormorant Garamond 36 px(在 1400 px 处自动折为 2 行均衡行,基线 1000 或 962/1000)+ 中文 Noto Serif SC 24 px 位于 1042,`INK` 78 %,两者都套 18 px 纸色阴影晕,绘制两遍以增加浓度。可见区间为 `start − .15` 到 `start + dur + .45`,淡入淡出 0.25/0.35 s。同一张表(`scene.js` 的 `VO`)驱动混音和 `watercolor.srt`。
- **生物群系卡**(左上):一小块绘制的色样,等宽字 `01 / 05`,Cormorant 52 px 的名称,斜体副标题。**仪表**(右上):`ANNUAL RAINFALL`,Cormorant 54 px 的数值(`< 250 mm`、`≈ 1,600 mm`),100–4,000 mm 对数刻度条带蓝色水滴标记。
- **标题**:"Follow the Rain" 斜体 Cormorant 124 px 擦入,随后是加宽字距的大写副标题和中文行。
- **结尾卡**:淡出的地图上的标题块 + IBM Plex Mono 15 px 的致谢(音乐及许可证、配音、海岸线来源、"rainfall bands are schematic"),其下是署名 **"LemoLab × Claude Opus 5.5"**,斜体 Cormorant Garamond 30 px,`INK` 85 %,居中于 y 1010,随致谢淡入(105–106.2 s)—— 一行衬线斜体,读起来是影片的签名,而不是又一条素材致谢。此风格的每个结尾卡都必须带这一行;让它避开地图(塔斯马尼亚位于 y ≈ 845–915)。

## 8. 我们踩过的坑

- **条带画布太短会把山压平**:远/中景水洗被预先绘制到很长的离屏条带里。如果条带的 `yTop` 太低,高耸的山脊和雨林冠层墙会被切成平顶,而 980 px 的仰俯会暴露切口。远条带覆盖 y 150–1500、起始于世界 x −6000;中条带覆盖 200–1500。
- **半透明条带底部会露出硬边**:停在自己画布底部的水洗,被半透明图层盖住时会留下可见的水平接缝。把每条条带延伸到画面之下(到 1500 px),并用竖直渐变把主地面淡入纸色,而不是让它戛然而止。
- **顶层 `const` 顺序 → `READY` 永不置位**:五个脚本共享同一个全局作用域。如果初始化在声明之前触碰某个 `const`(如 `CLOUDS`、`PAPER_IMG`),异步初始化会抛错,`window.READY` 保持 false,每次截图都在 60 s 后超时。所有构建都放进 `main.js` 的异步 init 里,并阅读渲染日志中的 `[pageerror]` 行。
- **确定性**:`mk()` 消耗全局 RNG。任何在 `render(t)` 内部创建的笔触都必须包在 `withSeed(seed, …)` 里(太阳、HUD 色样、动物、火焰、图例行)或在 `build()` 中预先构建;否则帧会依赖渲染历史,并行 worker 会互不一致。
- **性能**:每帧画数千笔太慢。把完成的植物缓存为精灵(`sprite()`);只有进度 < 1(正在画)或燃烧中的植物才逐笔绘制。
- **Kokoro 声音峰值很强**(峰均比约 17 dB):只做 RMS 匹配要么压住人声要么削波 —— 先限幅,再匹配。
- **节拍锁定动画**:把配乐的节拍网格(`wf_beats.json`)作为 `BEAT0`/`BEAT` 的唯一来源;如果音乐剪辑变了,重新推导它们。
- **CJK 子集**:新增的中文字幕字符会以回退字体渲染,直到重新运行 `node fetch_fonts.mjs`(它会把 Noto Serif SC 子集化为 `scene.js` + `main.js` 中的字符)。
- **`mix.py` 用正则 `\['(v\d\d)', ([\d.]+),` 解析 `scene.js`** 来放置人声句 —— 保持 `VO` 行完全是这个格式。
- (导入)原项目有一个指向另一个项目的 `node_modules` 符号链接;已移除 —— `playwright-core` 从仓库根解析。zsh 不对 `$TS` 分词;传多个时间戳时用 `${=TS}`。

## 9. 制作配方(本仓库)

```
styles/watercolor/demo/
  index.html      loads fonts.css + aus.js, engine.js, plants.js, scene.js, main.js (classic scripts, one global scope)
  engine.js       RNG/easing/noise, monotone spline, colours, the stroke engine (mk, drawS, drawList, sprite, clump, edgeOf)
  plants.js       plant & prop generators (spinifex, desertOak, mulga, saltbush, wattle, tussock, gum, ash, treeFern,
                  groundFern, rfTree, fanPalm, vine, farTree, uluru, cloud, shrub)
  scene.js        VO table, layers, zones, camera, world build, wash strips, landscape drawing, animals, fire, rain, notes
  main.js         canvas, map (deep time), mist, HUD, subtitles, title/end card, render(t), async init → READY
  aus.js          coastline rings (from extract_aus.mjs + vendor/)   paper.jpg (paper.py)   fonts/ + fonts.css (fetch_fonts.mjs)
  tts/lines.json  voice script   tts/gen.py  Kokoro   asr.py  whisper check   voices/  v01–v13.wav + dur.json
  music/          prep.sh (source files) · analyze.py · lag.py · jump.py · edit.py → score.wav
  mix.py          SFX + voice + music → mix.wav      render.mjs  stills / video / part    mux.sh  → ../watercolor.mp4
```

所有命令在仓库根执行,Python = `.venv/bin/python`:

```sh
D=styles/watercolor/demo
# 1. voice (13 lines, ~10 s) and whisper check
.venv/bin/python $D/tts/gen.py                 # → $D/voices/v01..v13.wav + dur.json  (OUT=dir to write elsewhere)
.venv/bin/python $D/asr.py                     # prints each transcript; compare with tts/lines.json
#    copy the durations into the VO table in scene.js (id, start, dur, en, zh) and set the start times
# 2. music
sh $D/music/prep.sh                            # Wildflowers.mp3 → Wildflowers.wav (22.05k mono) + wf48.wav (48k)
.venv/bin/python $D/music/analyze.py           # → wf_beats.json (plot skipped: no matplotlib in .venv)
.venv/bin/python $D/music/jump.py              # ranked jump candidates; pick one, put its beat indices in edit.py
.venv/bin/python $D/music/edit.py              # → score.wav, score_beats.json
# 3. look at frames while building (≈0.35 s/frame as PNG)
OUT=$D/out/review node $D/render.mjs stills 5 20 43 66 90 106
.venv/bin/python core/render/sheet.py $D/out/review/sheet.jpg $D/out/review/t_*.png --cols 3 --w 640
# 4. mix (4 s) — writes $D/mix.wav, or pass a path
.venv/bin/python $D/mix.py
# 5. video: 6816 frames at 60 fps, ~50 ms/frame/worker (8 workers ≈ 2 min; keep 2–3 when other jobs run)
node $D/render.mjs video 8                     # → $D/out/seg_0..7.mp4 + out/list.txt  (x264 crf 12 intermediates)
# 6. mux (≈70 s): concat + x264 slow crf 16 g 120 + loudnorm −14 → styles/watercolor/watercolor.mp4
sh $D/mux.sh                                   # or: sh $D/mux.sh path/to/test.mp4
# 7. subtitles: VO table → srt
#    ($D/out/srt_cues.json = VO rows as {t0: s-.15, t1: s+dur+.45, text: "en\nzh"}, dumped from scene.js with a 5-line node script)
.venv/bin/python core/render/srt.py $D/out/srt_cues.json styles/watercolor/watercolor.srt
```

局部重渲染(用于结尾卡署名):`node $D/render.mjs part 99.4 113.6 $D/out/seg_7.mp4` 精确重生成最后一个 8-worker 分段(帧 5964–6815),然后 `sh $D/mux.sh`。
一次性资产脚本(已运行):`node $D/extract_aus.mjs`(海岸线)、`cd $D && ../../../.venv/bin/python paper.py`(纸张)、`node $D/fetch_fonts.mjs`(字体,需联网)。

## 10. 引擎用法

**页面契约**(`render.mjs` 依赖它):`window.DUR`(秒)、`window.render(t)`(t 的纯函数,画出整帧)、字体/纸张/`build()` 完成后 `window.READY = true`。画布 1920×1080,`ctx` 是 `main.js` 的全局变量。

**笔触引擎 —— `engine.js`**

| 函数 | 用途 / 参数 |
|---|---|
| `mk(pts, w, col, o)` | 从中心线 `[[x,y],…]`、基准宽度 `w` px、十六进制颜色构建一笔。`o.prof`:`'brush'`(默认:起笔粗、渐细)、`'leaf'`(正弦鼓起)、`'even'`(平直、短渐变)、`'tip'`(粗根 → 细尖)、`'trunk'`(底部展开、向顶部 −62 %)。`o.nb`:鬃毛笔痕数(`w ≥ 6` 时默认 `clamp(round(w/3.2), 3, 9)`,否则 0)。`o.a`:不透明度(0.92)。`o.rib`:笔身不透明度系数(有鬃毛 0.62,无鬃毛 0.92)。`o.rough`:宽度噪声(0.22)。消耗 RNG。 |
| `drawS(c, s, p=1, col, am=1)` | 在上下文 `c` 上把笔触 `s` 画到其长度的 `p` 比例(一个移动的笔尖),可选颜色覆盖和透明度乘数。 |
| `drawList(c, L, p)` | 按顺序画一组笔触;`p ∈ [0,1]` 作用于整组。 |
| `sprite(L, col)` | 把一组笔触栅格化到离屏画布 → `{cv, x0, y0, x1, y1}`(在局部坐标 `x0,y0` 处绘制)。`col` 用单一颜色重绘所有笔触(焦黑剪影)。 |
| `qcurve(x0,y0,x1,y1,bend,n)`、`qctrl(...)`、`polar(x,y,ang,len,bend,n)` | 中心线辅助函数(二次曲线;`bend` 是控制点的侧向偏移)。 |
| `clump(S, cx, cy, r, n, cols, o)` | 在椭圆内推入 `n` 个叶点(`o.sx`、`o.sy`),可选方向 `o.dir ± o.spread`,长度 `o.l0–l1`,宽度 `o.w0–w1`,透明度 `o.a0–a1`。 |
| `edgeOf(s, side, w, col, a)` | 沿笔触一侧的阴影/墨线边缘(树干、四肢)。 |
| `withSeed(seed, fn)` | 以固定 RNG 运行 `fn` —— 对在 `render` 内构建的一切**是必需的**。 |
| `monotone([[t,v],…])` | 单调三次关键帧轨道(镜头路径)。 |
| `ss eio eo ei seg clamp lerp vnoise fbm hash mixc rgba` | 缓动、区间、噪声、颜色辅助函数。 |

**植物 —— `plants.js`**:每个生成器接受一个缩放 `sc`(及可选参数),在根位于 (0,0)、y 向上为负的局部坐标中工作,返回 `{ S: strokes, … }`(`gum` 还返回 `woody`、`leaves`、`shoots`、`fork`;`mulga` 返回 `stems`;`ash`/`rfTree` 返回 `top`)。

**世界 —— `scene.js`**:`add(layer, worldX, generator, scale, {dy, span, sway, args, extra})` 把一株植物放入 `PL[layer]` 并缓存其精灵;`build()` 以 `zoneJit` 沿世界 x 走完各分区;`buildStrips()` 用 `washPoly(c, pts, fill, alpha, passes, jitter)` 预先绘制山丘/地面水洗;`drawLandscape(t)` 依次绘制 天空 → 远条带/植物 → 雾 → 中景 → 地面 → 地平线 → 主景植物(带主角事件钩子)→ 动物 → 火 → 前景 → 雨。标注:`hand(txt, x, y, p, {size, w, align, col})`、`leader(x0,y0,x1,y1,p,bend)`、`note(t, t0, t1, anchorX, anchorY, labelX, labelY, txt, o)`;`scr(plant, dx, dy, t)` 把植物局部点转换为标签用的屏幕坐标。

**最小示例** —— 用以下内容替换 `scene.js` + `main.js`,即可看到一棵桉树在纸上画出自己(保留 `index.html`、`engine.js`、`plants.js`、`paper.jpg`、字体):

```js
const cv = document.getElementById('c'), ctx = cv.getContext('2d');
window.DUR = 6; let PAPER_IMG, tree, horizon;
function render(t) {
  ctx.setTransform(1, 0, 0, 1, 0, 0); ctx.globalAlpha = 1; ctx.drawImage(PAPER_IMG, 0, 0);
  drawS(ctx, horizon, seg(t, .2, 1.6));                                   // horizon brushed across
  const p = seg(t, 1, 4.5), sk = .006 * Math.sin(t * 1.15);                // paint-in progress + sway
  ctx.setTransform(1, 0, sk, 1, 960, 820);
  if (p < 1) drawList(ctx, tree.S, p); else ctx.drawImage(tree.spr.cv, tree.spr.x0, tree.spr.y0);
  ctx.setTransform(1, 0, 0, 1, 0, 0);
  withSeed(7, () => drawS(ctx, mk(qcurve(80, 90, 120, 90, 0, 5), 9, '#b3b07a', { prof: 'even', nb: 3 }), seg(t, 4.5, 5)));
  ctx.font = '500 52px "Cormorant Garamond"'; ctx.fillStyle = rgba(INK, ss(seg(t, 4.6, 5.2))); ctx.fillText('Eucalypt woodland', 76, 150);
}
window.render = render;
(async () => {
  PAPER_IMG = new Image(); PAPER_IMG.src = 'paper.jpg'; await PAPER_IMG.decode();
  await document.fonts.load('500 52px "Cormorant Garamond"');
  tree = withSeed(1, () => gum(1.2)); tree.spr = sprite(tree.S);
  horizon = withSeed(2, () => mk(qcurve(120, 822, 1800, 822, -4, 40), 5.2, INK2, { prof: 'even', nb: 5, a: .88, rough: .3 }));
  window.READY = true;
})();
```

做一整部影片:保留 `engine.js`/`plants.js`(以同样风格为你的标本添加生成器),改写 `scene.js` 中的 `VO`、`LAY`、`ZONES`、`RAINK` 式数值表、`camXf`、`ZCOL` 和 `build()`,以及 `main.js` 中的地图 / HUD / 标题。

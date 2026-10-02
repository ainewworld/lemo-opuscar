# 综艺节奏扁平(Game Show Flat)— 风格提示词

> 扁平矢量风格的节奏游戏综艺:糖果色条纹和太阳光芒上、8 px 墨线轮廓的豆形吉祥物,每次命中都落在 150 BPM 网格上,每一关都有呼应对答,结尾一个"Perfect!"。
> Demo:*AI进化节拍 · Rhythm of AI 1997 → 2026*(v3,148.8 s,1920×1080,30 fps)· `game-show.mp4` · 源码在 `demo/` · 引擎:纯 SVG DOM 加纯函数 `render(t)`,由 Playwright + Chrome Headless Shell 截图;原创配乐由 numpy 从画面自己的 `events.json` 合成。
> 参考(仅语法):Rhythm Heaven 模式的节奏动作派对游戏(提示 → 应答、关卡卡、判定词)、日本综艺字卡(粗轮廓字幕、条纹和太阳光芒布景)、WarioWare 式关卡卡。绝不使用它们的名字、角色、UI、关卡或音乐。

你正在以**综艺节奏扁平(Game Show Flat)**风格执导一部影片。用户给你一个主题。其余一切(故事、关卡、角色、节奏、音乐、喊话)由你决定,并交付一部完成的影片。遵循本指南。demo 约 2.5 分钟;该格式从 45 秒(3 关)到 3 分钟(8 关)都成立。

**语言说明。**demo 的所有屏幕文字是**中文**(关卡名、年份横幅、标签、成绩单、片尾卡)。仅有的语音词是简短的**英文喊话**("Checkmate."、"Hey!"、"Question!")。**没有旁白**。要做英文版,见 §7"把文字换成英文"。

---

## 1. 这个风格是什么

一个主题被编排成**由节奏关卡组成的综艺游戏**。影片在标题布景上开场,全体角色踩着节拍落下并数"One! Two! Three! Four!"。然后是一连串**关卡**。每一关是**一小节的关卡卡**(GAME N + 名称 + 年份,铜管 jingle 飞入)加**八小节的游玩**:前半设置一个模式,后半应答或升级,最后一拍(第 7 小节第 3 拍)是**重击 + "Perfect!"**判定。接近结尾的**混编(remix)**关把最近的所有事件堆上同一布景,顶部一条月份时间线,底部停着每个完成片段的缩小缩略图。结尾从蛋中孵出新角色,打字机式打出**成绩单**("AI 进化史 · 成绩单")带一个 Superb! 星,并以**片尾卡**收尾。

它成立的原因:
- **一切都在网格上。**150 BPM 下一拍是 0.4 秒,一小节是 1.6 秒。每个弹出、落下、锤击、盖章、打出的字符和镜头重击都用 `at(bar, beat)` 定位,而且每一个也注册为声音事件。画面和声音不会漂移,因为配乐是从画面的时间线生成的。
- **一种外观,多个布景。**每关用同一套绘制工具(平涂填充、8 px `#1B1B1B` 轮廓、圆端帽、硬偏移阴影),但换新的背景色和图案。关卡卡换色匹配其布景。
- **角色是玩具。**每个"选手"都是同一个豆身,靠颜色、肚皮补丁、一个头部配件和名牌区分。他们每拍跳一下,每次命中压扁,每次"Hey!"举起双臂。

## 2. 故事:什么适合这个风格

| 原生能力 | 故事用法 |
|---|---|
| **带年份的关卡** | 任何历史或进程分成 5–8 关,每关是卡片上带年份区间的一个阶段。demo:国际象棋和围棋(1997–2016)、问答赛(2011)、注意力工厂(2017–2020)、AI 画室(2021–2024)、聊天合唱(2022–2023)、思考 + 价格战(2024–2025)、智能体流水线(2025),然后是 2026 混编。 |
| **呼应对答** | 任何有"回合"的东西都变成节奏模式:人走 / 机器走(棋)、提问 / 蜂鸣(问答)、领唱 "Hey!" / 众合 "Hey!"(合唱)、任务落下 / 盖章 DONE(智能体)。模式加速*就是*剧情:棋在四分音符后,围棋子落在八分音符上。 |
| **判定词** | "Perfect!"、"第 37 手!"、"首超!"、被锤的价格标签、"9.9 ✓"想法气泡。每关以一个观众一眼能读懂的胜利结束。 |
| **统计即游戏 UI** | 数字变成记分牌和计数器:领奖台美元分数、冲向 1,000,000 的用户计数器、参数量、价格标签($60 → $2.19)、按拍生长的条形图。 |
| **混编 / 缩略图** | 表现"然后一切同时发生":一个布景、一条月份缎带,每个条目占 2 小节中心舞台,然后缩小(×0.27)进底部槽位。终曲中所有缩略图在巨大年份下一起弹跳。 |
| **蛋 → 成绩单 → 片尾** | 结尾是"下一关"预告(NEXT 蛋孵出"???"机器人宝宝),然后打字机式回顾三行,然后片尾卡。 |

**故事形状(已在 demo 中验证):**全体角色冷开场 + 报数(4 小节)→ 7 关各 9 小节(卡 + 8)→ 1 小节 REMIX 卡 → 16 小节混编(7 条目 × 2 小节 + 2 小节终曲)→ 9 小节结尾(蛋 2 小节,"Hi!" 1 小节,成绩单 3 小节,片尾 3 小节含 0.8 s 淡出)。共 93 小节 = 148.8 秒。

**适配任何主题:**列出 6–8 个阶段,给每个阶段*一个能在拍上重复的动词*(放、鸣、泵、拍、唱、锤、盖)、一个年份区间和一个布景色。每关挑一个"Perfect!"时刻。如果主题有一大群(许多公司、产品、人),让他们做戴名牌的豆形选手,一拍一个落下。

## 3. 视觉语言

**画布与线条:**1920×1080 SVG。轮廓 `K.ol = #1B1B1B`,宽 `OW = 8` px(`SO` 外扩:描边,8 px,圆角连接和端帽);小部件 5–7 px。无渐变、无模糊、无纹理。深度来自**硬偏移阴影**:同一形状以 `#1B1B1B` 偏移 +10 px(横幅)或 +14 px(关卡卡)画一遍,彩色形状画在上面。

**调色板(`main_v1.js`/`main.js` 中的 `K`):**
| 角色 | 颜色 |
|---|---|
| 墨 / 纸 | `ol #1B1B1B`、`white #FFFFFF`、`cream #FFF6E5`(卡片、成绩单) |
| 糖果原色 | `yellow #FFD23F`、`orange #FF8C42`、`red #FF5A5F`、`pink #FF8FB1`、`green #5BD68A`、`lime #C6F16D`、`sky #8ED1FC`、`blue #4D7CFE` |
| 深色布景 | `purple #6B4FBB` / `purpleD #46318F`、`teal #3FB8AF` / `tealD #2B8F88`、`navy #26264A`(结尾) |
| 道具 | `wood #C98A52` / `woodD #8E5530`、`gray #C3CAD9`、`chalk #2F5D50`、`skin #FFD1A8` |
| 角色色相 | `gpt #19B388`、`claude #D97757`、`gem1 #4E7CF6` / `gem2 #9B6CF0`、`llama #F4E9D8`、`whale #4D6BFE`、`dblue #2B59C3` |

每个布景是一种饱和背景色加同色相亮一档的图案:`stripes()`(斜条带,常缓慢滚动)、`dots()`(18–25 % 白的错位波点)或 `raysEl()`(旋转太阳光芒)。y = 860–900 处一条更暗的地板带,顶上一条 8 px 墨线,让角色落地。

**字体:**中文 = **Noto Sans SC 900**(`F.sans`)通吃;拉丁展示体 = **Fredoka 700**(`F.round`:GAME N、年份、"Perfect!"、名牌、数字);**ZCOOL KuaiLe**(`F.cute`)只用于手写道具。大字用 `gtext()`:白或黄填充,墨描边约为字号的 14 %,画在填充*之下*(`paint-order: stroke`)。标题文字用 `chars()` 让每个字形能单独弹入。

**角色(`main_b.js` 中的 `bean()`):**圆润豆身(缩放 1 时宽 160 px、高 172 px),两只短臂带白色连指手,两个脚椭圆,椭圆眼带白色高光,粉腮红,一条小弯嘴可换成张开的红嘴。身份 = 身体色 + 肚皮补丁 + **一个**头部记号(天线球、心、"?"、月、闪电、云、新芽、刷子、贝雷帽、船长帽、羊驼毛、鲸喷水)+ 脚下一个墨色名牌药丸。Gemini 是两只半尺寸豆(`twins()`)。人类(`human()`)是同构造加衬衫、圆头、发帽、可选眼镜和一滴汗。1990 年代–2010 年代的机器是更方正的机器人(`robotDB`、`robotAG`、`robotT`、`robotW`),让年代从剪影可读。

**常驻 UI:**
- **关卡卡**(`card()`):满幅布景色 + 滚动条纹,一块奶油面板(1240×460,r 50,10 px 轮廓,14 px 阴影),药丸标签 "GAME N",自适应缩到 720 px 的关卡名,布景色的年份,左侧一个跳动图标。
- **年份横幅**(`banner()`):左上贴纸:Fredoka 年份 + 名称 + 一行副标题,从左侧带回弹滑入、向上抬起离开。
- **判定**(`judge()`):120 px Fredoka 词,粉/黄,18 px 墨描边,以 −6° 弹出。
- **爆裂**(`burst()`):8 角星 + 扩张白环 + 8 条墨色速度线,0.3 s。

## 4. 动效语言

- **速度**:`BPM = 150`,`B = 0.4 s`,`BARL = 1.6 s`。时间永远写作 `at(bar, beat)`(拍可为小数:`at(5, 2.5)`)。
- **待机 = 按拍跳**:`hopY(t, h)` 是每拍一条抛物线(h 8–30 px)。邻居在反拍跳(`t + B/2`),一群人便起涟漪。
- **命中 = 压扁**:`hitSq(t, t0, amt)` 在命中后给 0.35 秒 30 rad/s 的阻尼摆动;喂给 `pose({ sq })`。每次落地也在每个重拍上轻压:`1 - 0.1*exp(-frac(t)*16)`。
- **入场从天而降**:`dropY(t, t0, y, h, d)` 缓入落下 500–900 px,正落在 `t0`(声音随它落地)。
- **弹出用回弹缓动**:任何出现的东西(卡片、贴纸、图章、判定词)用 `E.back`;退场用 `E.in`。没有缓慢淡入;东西要么在、要么弹。
- **Hey = 举臂 + 张嘴** 0.24 秒(`heyAt(times, t)`)。
- **打字机**:成绩单的行每 1/8 拍揭示一个字符,每 2 个字符一声键击。
- **场景切换是小节线上的硬切**(关卡卡小节、混编、结尾),加 0.08 s 50 % 白闪。全片唯一的淡出是最后 0.8 s 到藏青。

## 5. 镜头

没有镜头移动。舞台永远是正面对称的镜框式台口。唯一的镜头动作是**节拍重击**:`punch(t, a)` 在画面中心加一个 `a` 的变焦(小滴答 0.008,普通命中 0.02,重击 0.03–0.05),0.16 秒内衰减。一小节里多次重击让画面随音乐呼吸。总和保持在 ~0.06 以下,画面边缘绝不出框。

## 6. 声音

**一切为合成**;没有采样、没有旁白。

- **配乐(`music.py` + `synth_lib.py`)**:150 BPM,四和弦循环 F–G–Em–Am(J-pop"王道进行",每小节一和弦,`CH`),两条 8 音旋律 `MA` / `MB`。乐器:tanh 成形正弦底鼓、带通噪声军鼓和拍手、镲、slap 贝斯(`slap`,patterns funk/drive/pump/soft)、失谐锯齿**铜管刺音**带闭合滤波、带颤波的方波主奏、拨弦(马林巴)、铃(八音盒)、三角波 pad、方波琶音、牛铃。每小节在 `PLAN` 里拿一个模式(`main`、`count`、`funk`、`quiz`、`electro`、`dream`、`film`、`pop`、`popBig`、`think`、`heavy`、`agent`、`agentFast`、`fill`、`future`、`futureBig`、`egg`、`calm`、`fanfare`、`end`),每关一种口味。关卡卡配 **jingle**(镲 + 底鼓 + 上行铜管琶音 + 进关军鼓滚奏)。2026 混编上移 2 个半音。
- **事件驱动 SFX**:`node render.mjs events` 把画面里每个 `ev()` 导出为 `events.json`(demo 474 个事件)。`music.py` 把每个事件名映射为声音:`tock`/`bleep`(棋)、`stone`(围棋)、`ding`/`boop`/`buzz`(问答)、`land`(噗通 + 回弹)、`pip`(带音高的弹出,用 `f`)、`slam`/`bigslam`、`stamp`、`type`、`crack`/`hatch`、`servo`、`liftoff`、`swish`、`clap`、`drop`、`blip`、`kickhit`、`splat`、`denoise`、`cheer`。未知名称静默忽略。
- **喊话**:`v:<name>` 事件播放 `voices/<name>.wav`。人声是 macOS `say` 系统语音(Samantha、Fred、Zarvox、Junior、Kathy、Ralph、Superstar),速率 170–220,升调 ×1.0–1.35 且不改时长(`asetrate` + `atempo`,见 `make_voices.sh`)。Zarvox(机器人)说机器台词("Checkmate."、"Move thirty seven."、"Attention!");Samantha/Fred 当主持。人群 "Hey!" 是六个不同人声叠开 5–6 ms、声像 −0.6…+0.6(`v:crowd`、`v:heyAll`、`v:heyBig`);`v:heyVar` 为每个选手挑一条声。喊话放在拍*前* 20–30 ms,让辅音正落在拍上。
- **混音**:人声 + SFX 走自己的总线;音乐被该总线 12 Hz 包络最多闪避 40 %;最后 0.8 s 淡出;峰值归一到 1.5 后 `tanh` 软削 ×0.9 → `music.wav`(44.1 kHz)。`finish.sh` 再做两遍 loudnorm 到 **−14 LUFS / TP −1.2**,重采样到 48 kHz AAC 256k。

## 7. 字幕与标题

- **无烧录字幕。**屏幕上的字就是字卡本身:关卡卡、年份横幅、混编标签和字板、道具文字、判定词。保持简短(横幅副标题 ≤ 20 个 CJK 字符,字板 ≤ 12)。
- `game-show.srt`(由 `make_srt.py` 从 `events.json` + `voices/lines*.txt` 生成)只列英文喊话,一喊一条,重复的人群 "Hey!" 合并。
- **标题**:"AI 进化节拍" 200 px,白字 26 px 墨描边,字形间隔 0.06 s 依次弹出;副标题 "RHYTHM OF AI · 1997 → 2026" 用 Fredoka。全体角色在其后落下,每半拍一个,各带一声有音高的 pip。
- **片尾(库规):**最后一张卡必须带 **"LemoLab × Claude Opus 5.5"**(× 是 U+00D7)。demo 中它是片尾卡在第 90 小节(144.0 s)弹出的第一行:一张奶油 1440×360 卡(r 40,8 px 墨轮廓,−1.5° 倾斜,0.3 s 回弹弹出)内三行居中:`LemoLab × Claude Opus 5.5` 用 Fredoka 700 66 px 墨色(y −80),`本片由 Claude Opus 5.5 全程代码生成` 用 Noto Sans SC 900 60 px(y 30),`下一关:正在训练中……` 50 px 用 `K.claude`(y 118)。停留 4 秒后随影片淡入藏青。代码:`main_b.js` 结尾场景的 `credit` 块。新影片保留 LemoLab 行,可在其下加自己的署名行。

**把文字换成英文:**所有字符串是 `main_b.js` 里的字面量(`main_v1.js` 里有三个):
1. 关卡卡:`card(SECT.gN, 'GAME N', '<name>', '<years>', …)`;名称自动缩到 720 px。
2. 年份横幅:`banner(g, '<year>', '<name>', '<subtitle>', col)`;宽度自动测量。
3. 混编:`item(i, m0, m1, '<label>', …)`、`plate(p, '<text>')`、月份缎带 `` `${m}月` `` 和终曲标签 `'2026 · 未完待续'`、`'还没唱完 →'`。
4. 道具:问答 `QA` 对、Watson 招牌、"9.11 和 9.9"黑板、任务便签、用户计数器标签 `'用户'`、成绩单标题 + `lines`、片尾文字、标题 `chars()` 字符串。`main_v1.js` 里:机器人胸口标签 `'注意力'`(`robotT`)和 G3 的句子词元。
5. 拉丁标题优先 `F.round`(Fredoka),正文保持 `F.sans`;`init()` 从页面自身文字预载字体,无需改字体列表。英文比中文宽约 1.6 倍:用静帧检查横幅和字板。
6. 喊话变了就重跑 `make_srt.py`;喊话本来就是英文。

## 8. 我们踩过的坑

- **`render(t)` 必须是 t 的纯函数。**混编缩略图只在 `t < t1 + 0.01` 时更新,导致其最终姿势依赖是否渲染过之前的帧。6-worker 渲染让 worker 5 在 124.0 s 冷启动,已发布的 v3 影片中底部缩略图(机械臂堆、跳舞机器人、条形图、Gemini 卡)从 124.0 s 到 131.2 s 显示的是*初始*状态。在 `main_b.js` 导入期间修复(缩略图每帧在 `t1 − 0.001` 重算),影片最后一段(124.0–148.8 s)已用修复重新渲染。任何改动都用静帧(静帧永远是冷启动)对顺序渲染做测试。
- **`main.js` 和 `index.html` 是生成的。**改 `main_v1.js`(调色板、节拍辅助、banner/judge/burst、1990 年代机器人)或 `main_b.js`(v2 角色、舞台、全部场景、render/init),然后跑 `assemble.py` → `build.py`。直接改 `main.js` 会被覆盖。
- **`BPM` 和 `END_BAR` 由字符串替换打补丁**,在 `assemble.py` 里(`'const BPM = 140,'` → 150、`'const END_BAR = 61;'` → 93)。如果你在 `main_v1.js` 里改了这些行,替换会静默失配。改替换目标而不是那些行。
- **每个新喊话要在三处添加**:`voices/` 里的 `.wav`、`voices/lines*.txt` 里的一行(便于再生成)、`music.py` 顶部的 `VO` 列表(否则 `KeyError`)。
- **关卡卡小节也必须列入** `CUTS`(`main_b.js` 的 `init()`:白闪)和 `music.py` 的 `jingle()` 循环 + `PLAN` 区间。它们是三份独立的列表。
- `synth_lib.py` 分配固定的 `DUR = 150.0` 秒缓冲。更长的影片需要更大的 `DUR`,否则尾部被切。
- 字体:`measure()` 用 canvas,webfont 加载完成前字形宽度是错的。`init()` 在 `buildAll()` 前为页面文字加载每个字族,再为已建舞台文字加载一遍。加文字时保留这个。
- `say` 发音:写 "A. I."、"G P T one"、"Nine point eleven"、"Move thirty seven"——拼出来的形式。符号和数字读法不可预测。
- **macOS 系统语音按 macOS 许可仅限个人非商业使用**。商业或公开发布,用 Kokoro(`core/tts/`)或其他已清权的 TTS 重新录制喊话。
- **真实品牌:**选手代表真实 AI 产品(GPT、Claude、Gemini、DeepSeek、Kimi、Grok、Midjourney……)。名牌**只用名字**、原创吉祥物、宽松的配色致意;绝不用官方 logo、字标或产品 UI。保持善意的语气,不嘲讽。真人(Kasparov、Lee Sedol、KEN / BRAD 领奖台)只以事实横幅中的通用卡通替身出现。
- **事实很快过时。**2026 混编(Sonnet 5 为默认、WAIC 2026、DeepSeek V4-Pro、"GPT-6 Astra"、token 量数据)在制作时是当作时事写的。复用前重查每个数字和名字。
- 屏幕上的 G7 任务便签字面写着"做一个节奏天国风格的视频"(点名了真实游戏系列)。新影片描述类型,不点名。
- 帧模板(`frame_head.html`,继承自更早的影片)仍声明 `#paper`/`#fx` 画布和墨线/沸腾滤镜;`init()` 隐藏了画布,风格也不用这些滤镜。别动它们,或一起删掉。
- zsh 不对 `$TS` 分词;把时间戳作为数组传递(`TS=(1 2 3); … $TS`)或逐个写。

## 9. 制作配方(本仓库)

```
styles/game-show/demo/
  main_v1.js     v1 source: palette K, tempo (at/ev/punch), hop/squash helpers, stripes/dots/rays, burst, judge, banner, 1990s robots, chess board
  main_b.js      v2/v3 source: bean characters + CAST, human, podium, stage (scene/card), props, ALL scenes (buildAll), render(t), init()
  assemble.py    main_v1.js[0:109] (BPM→150, END_BAR→93) + main_v1 robotDB…stage + main_b.js  →  main.js
  frame_head.html  HTML/SVG frame + base helpers (el, txt, tf, op, E, chars, charsPop, measure, bg …)
  build.py       frame_head.html + main.js  →  index.html
  render.mjs     events | stills | video (Playwright + Chrome Headless Shell, PNG → ffmpeg x264 crf 12 per worker)
  music.py       score + events.json → SFX + shouts → ducked mix → music.wav      synth_lib.py  instruments & SFX
  voices/        40 shout wavs + lines*.txt (name|voice|rate|pitch|text)          make_voices.sh  regenerate them (macOS)
  finish.sh      concat segments + loudnorm −14 LUFS + mux → ../game-show.mp4       make_srt.py  → ../game-show.srt
  fonts/ fonts.css   Noto Sans SC, Fredoka, ZCOOL KuaiLe (woff2 subsets)
  historical: main.js (generated), remix2026.js (draft of the remix section, superseded by main_b.js)
```

所有命令在 `styles/game-show/demo/` 下执行(脚本也会自行 `chdir` 到那里)。`PY=../../../.venv/bin/python`。

1. **在网格上规划。**在 `main_b.js` 里填 `SECT`(每张关卡卡的首小节),通过 `assemble.py` 的替换设置 `END_BAR`,把关卡卡小节加进 `CUTS`,写一份提示清单:哪些拍上放哪个 `ev()`。
2. **喊话:**往 `voices/lines3.txt` 加行,然后 `sh make_voices.sh out/voices_new`(macOS `say` + ffmpeg),试听,把保留的拷进 `voices/`,把名字加进 `music.py` 的 `VO`。
3. **构建页面:**`$PY assemble.py && $PY build.py`。
4. **看看它:**`STILLS_DIR=out/check node render.mjs stills 5.5 20.4 45 78.3 116.5 145`(六帧约 1 秒)。或在浏览器打开 `index.html?t=78.3`。
5. **事件:**`node render.mjs events` → `events.json`(demo:474 个事件,`dur 148.80`)。
6. **配乐 + 混音:**`$PY music.py` → `music.wav`(约 2 秒;确定性,种子 7)。`$PY music.py out/test.wav` 写到别处。
7. **渲染:**`node render.mjs video 2` → `out/seg_0..1.mp4` + `out/list.txt`。demo 用了 6 个 worker(共 120 秒);共享机器上保持 2 个(约 3–4 分钟)。`SEGS=5 node render.mjs video 6` 只重渲染 6 等分段中的一段。
8. **收尾:**`sh finish.sh out/test.mp4`(拼接 → loudnorm → x264 slow crf 16 + AAC 256k 48 kHz)。无参数时写 `../game-show.mp4` 并**覆盖库中影片**(先备份)。`AUDIO_FROM=old.mp4 sh finish.sh …` 跳过混编、原样拷贝旧影片的音轨(用于签字版重渲染)。
9. **字幕:**`$PY make_srt.py` → `../game-show.srt`。
10. **审查:**`ffmpeg -i out/test.mp4 -vf fps=1/4,scale=384:-1,tile=6x7 -frames:v 1 out/sheet.jpg`,加每次重击附近的静帧。

## 10. 引擎用法

**契约。**`buildAll()` 对每个布景调用一次 `scene(t0, t1, build)`。`build(g, s)` 在组 `g` 内一次性创建所有 SVG 节点并返回 `update(t)`,后者只设置属性。`render(t)` 显示满足 `t0 ≤ t < t1` 的场景,调用其 `update(t)`,再施加镜头重击、切镜闪光和最终淡出。`update(t)` 必须只依赖 `t`(见 §8)。

| 模块 | 函数 | 作用 / 关键参数 |
|---|---|---|
| frame_head | `el(tag, attrs, parent)`、`txt(parent, str, attrs)` | 创建 SVG 节点 |
| | `tf(e, x, y, s=1, r=0, sy)` · `op(e, o)` · `show(e, bool)` | 变换 / 透明度 / 显示 |
| | `seg(t, a, b)` · `lerp` · `clamp` · `E.out/in/io/back/elastic` · `rng(seed)` | 时间 + 缓动、种子随机 |
| | `chars(parent, str, {x, y, size, family, weight, fill, anchor, ls, stroke, sw})` + `charsPop(c, t, t0, stagger, d, from)` | 逐字形弹入的标题 |
| | `measure(str, size, family, weight)` · `bg(parent, color)` | 文字宽度、满幅矩形 |
| main_v1 | `at(bar, beat)` · `B` · `BARL` · `frac(t)` | 节拍网格(150 BPM) |
| | `ev(t, name, {f, i})` · `punch(t, amount)` | 注册声音事件 / 镜头重击 |
| | `hopY(t, h)` · `hitSq(t, t0, amt)` · `near(t, t0)` | 节拍跳、命中压扁 |
| | `gtext(parent, s, x, y, size, {family, weight, fill, stroke, sw, anchor})` | 带轮廓的字卡文字 |
| | `stripes(p, col, w, angle)` · `dots(p, col, step, r)` · `raysEl(p, n, col)` · `starPath(n, r1, r2)` | 布景图案(在 `update` 里旋转光芒) |
| | `burst(p, x, y, t0, col, size)` · `judge(p, word, x, y, t0, col, dur)` | 返回 `f(t)`;推进 `s.fx` 并每帧调用 |
| | `banner(p, year, name, sub, col)` + `bannerAnim(b, t, t0, t1, x=56, y=44)` | 年份贴纸 |
| | `robotDB/robotAG/robotT(p)` · `quad(u, v)` · `pawn(p, col, king)` | 年代机器人、透视棋盘 |
| main_b | `bean(p, {color, belly, antenna, name, kind, eyeFill, acc, ant, tagCol})` | 一位选手;`kind` bot/llama/whale;`acc` noise/mask/beret/captain/mustache;`ant` q/bolt/moon/heart/cloud/sprout/brush |
| | `pose(c, {hey 0..1, open, sq, lean, face 'x'/'up', blink, armsL, armsR})` · `poseAny(c, o)` | 给任意豆或双人组摆姿势 |
| | `CAST.<key>(p, name?)` · `ALL` | 16 位现成选手(gpt, claude, gemini, llama, deepseek, ernie, qwen, mistral, kimi, grok, bert, dalle, mj, sd, sora, baby) |
| | `human(p, shirt, glasses, hair)` + `humanFace(h, open, sweat)` + `setArm(arm, x1, y1, x2, y2)` | 卡通人类 |
| | `podium(p, col, label)` · `taskIcon(p, kind)` · `smallBot(p, col)` | 道具 |
| | `dropY(t, t0, y, h, d)` · `heyAt(times, t, w)` · `nearestIn(times, t)` | 入场、"Hey!" 窗口 |
| | `scene(t0, t1, build)` · `card(bar0, num, name, years, col, col2, icon)` | 一个布景、一张 1 小节关卡卡 |
| music.py | `PLAN[bar] = mode`、`span(a, b, mode)`、`jingle(at(bar))` | 逐小节编配 |
| | 事件循环 `if s == '<name>': addv(sound, t, gain, pan)` | 把画面事件映射为声音 |

**最小新关卡**(在 `main_b.js` 的 `buildAll()` 内;`SECT` 加 `g8: 67` 并后移后续段,`CUTS` 加小节 67,`music.py` 里 `jingle(at(67))` + `span(68, 75, 'funk')`,并调大 `END_BAR`):

```js
{ const b0 = SECT.g8 + 1, T = (bar, bt = 0) => at(b0 + bar, bt);
  card(SECT.g8, 'GAME 8', '开源接力', '2026', K.orange, '#FF9E5E',
       (p) => { const w = el('g', { transform: 'scale(2)' }, p); pawn(w, K.white); });
  scene(T(0), T(8), (g, s) => {
    bg(g, '#FFB870'); stripes(g, '#FFA85A', 50, -20);
    el('rect', { x: 0, y: 880, width: 1920, height: 200, fill: '#E08A4A' }, g);
    const w = el('g', {}, g); const c = CAST.claude(w);
    const calls = [T(0, 0), T(0, 1), T(1, 0), T(1, 1)], answers = [T(0, 2), T(0, 3), T(1, 2), T(1, 3)];
    calls.forEach(t0 => { ev(t0, 'v:hey'); punch(t0, 0.015); });
    answers.forEach(t0 => { ev(t0, 'pop', { f: 900 }); s.fx.push(burst(g, 960, 420, t0, K.yellow, 0.8)); });
    const b1 = banner(g, '2026', '开源接力', '一拍一棒,接住就赢', K.orange);
    s.fx.push(judge(g, 'Perfect!', 960, 300, T(7, 3), K.pink, 0.8));
    ev(T(7, 3), 'slam'); punch(T(7, 3), 0.05);
    return (t) => {
      tf(w, 960, 880 + hopY(t, 20), 1);
      poseAny(c, { hey: heyAt(answers, t) ? 1 : 0, open: heyAt(calls, t), sq: hitSq(t, nearestIn(answers, t) ?? -9) });
      bannerAnim(b1, t, T(0), T(8));
      s.fx.forEach(f => f(t));
    };
  });
}
```

然后 `assemble.py → build.py → stills → events → music.py → video → finish.sh`。

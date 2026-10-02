# 1920s 默片(1920s Silent Film)— 风格提示词

> 一部在影院放映的雕版插画风无声喜剧:墨线与银灰晕染、在天鹅绒帷幕之间闪烁晃动的 4:3 拷贝、代替人声的字幕卡(intertitle),以及一位为每个包袱伴奏的影院琴师。
> 演示:*The Runaway Loaf*(54.2 秒)· `silent-film.mp4` · 源码在 `demo/`
> 参考(只学语法):**Buster Keaton**,*将军号*(1926)与 *Sherlock Jr.*(1924)——一个锁定大远景装下整个包袱、一张面瘫脸、一个永不停步的主角;**Harold Lloyd**,*Safety Last!*(1923)——险之又险;**Georges Méliès**——光圈(iris);**《艺术家》*(2011)——现代观众需要多么少的字幕卡;**1920s 影院钢琴提示单(photoplay piano cue sheets)**——按段落配乐(Maestoso / Andante / Hurry / Misterioso / Agitato / Tenderly),钢琴兼任音效。绝不用流浪汉造型(圆顶帽、牙刷胡、手杖)、任何真实影片的包袱或任何已发表旋律。

你正在执导一部 **1920s Silent Film** 风格的 40–60 秒短片。用户给你一个主题。其余一切(故事、包袱、镜头、配乐、字幕卡)由你决定,并交付一部完成的影片。遵循本指南。

---

## 1. 这个风格是什么

一部像*放映中*那样呈现的单本喜剧:画面是片窗中的 4:3 拷贝,两侧是剧场帷幕;图像是带灰色晕染和排线的墨线画,印在会闪烁、晃动、划伤、边缘烧焦的银盐胶片上。没有人说话。故事节拍由**大远景中的动作**和**字幕卡**讲述。唯一的声音是影院钢琴(以及放映室里的放映机)。

喜剧引擎是 Keaton 式的:一个只有一个小目标的普通人、一个不听话的物理世界、一张不作反应的脸——以及一个由因果链条构成的包袱,观众在同一个画框里看着它发生。

## 2. 故事:什么适合这个风格

| 原生能力 | 故事用途 |
|---|---|
| **锁定大远景** | 机械式包袱:A 触发 B,B 离开画面,观众等待,B 回来击中 C。等待本身就是笑点。 |
| **字幕卡** | 三到五张卡承担动作无法表达的部分:前提反转("The loaf had other plans.")、一声大喊("STOP THAT BAKER!")、一句对白("Is it yours, mister?")。每张卡只写几个词。 |
| **放映速度** | 追逐段欠曲柄(运动按 18 fps 采样,1.3× 速度,闪烁更快);温柔段落回到 16 fps 和更平静的拷贝。速度即情绪。 |
| **光圈(iris)** | 在故事物件上开启,在最后一瞥上关闭。停在半途的光圈让角色看向观众(眨一只眼)。 |
| **老化即情绪** | 事情变糟时损伤更多;影片变温柔时棕调更暖、拷贝更干净。 |

**故事形状(已在演示中验证):** 骄傲(面包师把他完美的圆面包高高举起)→ 物件逃走(面包在窗台上摇晃、滚落、顺坡逃走——是*圆*面包,所以真的能滚)→ 带一次险之又险的追逐(他抓,面包跳过他的手,他盯着空拳头看)→ 一个长镜头里的链条包袱(跷跷板 → 一颗甜瓜飞出画面 → 警察踱进来 → 甜瓜落在他头盔上)→ 面包停在更需要它的人脚边(一个饥饿的女孩)→ 沉默 → 一个小小的善举(他把面包掰成两半)→ 回声(她像他一样把她的那一半高高举起)→ 光圈收在她眨眼上。**宁可剪掉也不要加**:带电车、雾中追逐、屋顶悬挂和八步市场链条的早期版本在缩略图里完全读不清。一条读得懂的链条胜过三条热闹的。

改编任何主题:找到逃走的物件、它最终该归属的人、一条能在单个大画框里发生的机械链条,以及一个结尾能以新含义重复的手势。

## 3. 视觉语言

- **本家风格 = 色调绘画 + Redraw。** 场景只用灰值绘制(印刷密度:墨 0.07、深布 0.15–0.3、中等木头 0.45–0.6、皮肤 0.8、衬衫围裙 0.9–0.95),带柔和光照渐变和一条细分隔线。然后 **Redraw**(WebGL2)把整帧"上墨":每条边缘暗侧的高斯差轮廓、亮度分层成五个柔和晕染级、暗部 45° 排线(再交叉),并且每两帧重画一次,像手绘重描。真实视频帧也过同一道工序("redraw 模式",见 `stills/redraw_v1.jpg`),实拍与手绘出自同一只手。
- **拷贝**(`FilmPost`):银调带 0.10–0.36 棕调、印黑 0.055 / 白 0.93、S 曲线、高光溢光、密度不匀、闪烁、片门晃动加偶发齿孔跳动、断续竖划痕(白 = 刮伤药膜,深 = 底片污损)、从边缘爬进的棕色烧灼、暗角、两个八度的银盐颗粒。然后 `damage()` 加灰尘、片门里的一根毛发和偶发斑块。
- **画幅**:1440×1080 居中于 1920×1080,22 px 圆角片窗配柔和深色边缘;两侧是剧场——被银幕溢光和脚灯照亮的天鹅绒帷幕。开场帷幕拉开,结尾合拢。
- **角色**:写实的 7.5 头身成人和 5 头身儿童,基于 2.5D 骨架(关节在 3D 中解算,带偏航角投影),默片时代妆容(苍白皮肤、深色眼睑和嘴唇)。演示主角的剪影标记:一顶褶皱面包师帽、白衬衫外的深色马甲、一条长白围裙。
- **字幕卡**:黑色绘制卡,装饰艺术边框随情绪变化——大喊用一道粗线(文字发抖)、叙述用带阶梯角和扇形的双线、温柔用藤蔓小花。标题与喊叫用 Playfair Display SC,叙述和对白用 Old Standard TT Italic。

## 4. 运动语言

- **手摇曲柄采样**:角色与相机运动按 16 fps 采样(追逐段 18 fps);拷贝的闪烁、晃动、颗粒和划痕每个输出帧(24 fps)都变。正是这种混合让它看起来像"放映中",而不是单纯的低帧率。
- **面瘫式表演**:主角的脸几乎不变;身体负责表演——举起前的下蹲、骄傲保持的举起、两次回头时带小跳的两帧猛 snap、弯腰一捞、边跑边看空拳头、双手扶膝、跪下。
- **物件也表演**:面包走之前在窗台上摇晃、在最不该的时刻跳过一块鹅卵石、随音乐渐慢(ritardando)减速、靠在一只鞋上摇曳停下。
- **手臂要离开脸举起。** 在这套骨架上,前向屈曲会把举起的手臂带到脸前;庆祝性的举手用外展(侧向,跳跃运动式)或先把角色转向相机。

## 5. 镜头语言

| 节拍 | 镜头 |
|---|---|
| 开场 | 放映机起转时帷幕在暗幕上拉开;标题卡;光圈在举起的面包上**开启**。 |
| 铺垫 | 锁定全景:整个前提(骄傲 → 窗台 → 滚落 → 两次回头)在一个画框里演完。 |
| 追逐 | **跟踪镜头**:小镇以 0.8 滚动,灯柱以 1.35 在前景扫过,主角和物件保持在画内。 |
| 链条包袱(招牌) | 锁定大远景,**不剪辑**:跷跷板 → 甜瓜飞出画面顶部 → 2.5 秒等待 → 警察走进来停在他的位上 → 甜瓜落下。 |
| 换气 | 锁定全景,然后真正的静默。 |
| 温柔 | 有动机的缓**推入**:主角跪下时,相机降到孩子的高度(变焦 1.6 → 2.1)。 |
| 结尾 | 光圈收到孩子身上、停住,她向观众眨眼,光圈合上;"The End";帷幕合拢。 |

## 6. 声音

- **没有拟音,没有人声。** 钢琴*就是*声音设计,正如 1920s 影院:面包摇晃用不安的颤音、坠落用下行滑奏、弹跳用低音 "boing"、两次回头用减音突强、抓取用高音刺击加上行琶音、空拳头用 "plink … plonk"、跷跷板用前臂音簇、甜瓜用上行滑奏、等待用渐强的减音颤音、落地用坠入撞击和弦的下滑奏、面包掰开用清脆的小二度、眨眼用倚音。
- **配乐**:为时代的**立式钢琴**(VSCO 2 CE,CC0)写的原创 photoplay 音乐,跨弹左手,按提示单进行:Maestoso 标题 → Andante "面包主题"(F 大调)→ 喜剧 "uh-oh" + 加速琶音 → Hurry(A 小调,16 分音符跑动,144 BPM)→ 停拍悬念 + Misterioso 行进 → Agitato 颤音 → 渐慢(88)→ 静默 → **簧风琴**(FreePats accordion,CC0)弱起 → Tenderly(72 BPM 的面包主题)→ 终曲。主题在开头骄傲、在结尾温柔。
- **放映机即环境声**:帷幕拉开前一声灯咔哒和马达起转、整卷之下柔和的抓片-马达呜噜、在静默中被推前为*唯一*的声音、结尾收片盘上片尾拍打声。
- **静默**:(1) 链条包袱的停拍,甜瓜在画外时(只有一丝渐强颤音);(2) 面包停下,只剩放映机两秒——下一个声音是簧风琴。
- 响度归一(−14 LUFS)之前用轻压缩驯服钢琴锤瞬态。颗粒放画面里;封装颗粒 1。

## 7. 字幕与标题

- 字幕卡*就是*字幕;`.srt` 列出它们的文字。每张卡停留 2.5–3.75 秒。
- 标题:THE RUNAWAY LOAF / *a photoplay in one reel*(单本影戏)。
- 片尾卡(温柔边框):The End · 标题与风格名 · LEMO-OPUSCAR · LemoLab × Claude Opus 5.5 · 素材致谢;帷幕在它上面合拢。

## 8. 我们踩过的坑

- **木偶手臂**(第一版):每条手臂是带完整轮廓罩在衬衫上的独立圆管,肩枢轴从不移动,且外展在屈曲之后施加——于是"张开"的举臂实际向内摆,举臂变成了 X。修复在 `engine/figure.js`:先外展再屈曲;手臂抬起时肩关节上升并向前摆(锁骨);抬臂侧的躯干肩角收窄;手臂带三角肌和肱二头肌/前臂剖面;手臂压在躯干上的那一段轮廓被遮挡。
- **姿势跳变**:在 `if` 分支里切换姿势让人偶蹦跳。每个角色由关键帧列表驱动(`shots.js` 的 `poseAt`、`numAt`),姿势、位置和朝向始终缓动;只有刻意的包袱(两次回头)才 snap。
- **悬浮道具**:画在一切之上、固定在"双手平均位置"的道具会悬浮。把道具握在双掌*之间*、两臂深度之间(`props.between`),尺寸贴合双掌间距,通过在给予者和接受者掌位之间插值完成交接(`palmsAt`)。长条面包无法沿长边滚动——用圆的,并把旋转绑定到距离(角度 = 距离 / 半径)。

- **内容太多会毁掉默片。** 每头 64 px 的八步链条包袱在缩略图里是噪声;第一版从未到达第一次评审。一条链条,中间带一个停顿,才读得懂。
- 骨架的脸在特大特写里像人偶:保持中远景(这本就是 Keaton 的语法),唯一的特写放在光圈内。
- 举起的手臂挡住了女孩的脸和眨眼:让她转向相机,用手臂外展举起。
- 眉角随朝向翻转:"担心"(内眉抬高)在朝左的女孩脸上读成生气;以最终尺寸在裁剪里检查表情。
- 光圈中心必须在相机变焦后的*胶片*坐标里追踪脸(`girlFace()` 做世界 → 胶片映射)。
- 追逐段主角一开始总够不到面包,抓取读不出来:在节拍上把手精确放到物件位置、身体弯下去、把跳做大(210 px)。
- 只被暗幕照亮的合拢帷幕是纯黑(blackdetect):加脚灯。
- 重颗粒造成大文件(CRF 19 下 170 MB);用 `-tune grain -crf 25` 重编码(≈ 77 MB)。

## 9. 制作配方(本仓库)

```
styles/silent-film/demo/
  timeline.js    cue-sheet sections (bpm, beats) + named hits — the single source of truth → tools/dump_timeline.mjs → timeline.json
  engine/        ink.js (tonal forms, ink line, wash, hatch, drawShape) · redraw.js (Redraw: frame → ink drawing, WebGL2)
                 film.js (FilmPost print + damage) · cards.js (intertitles, deco borders, iris, theatre) · figure.js + heads.js (2.5D rig)
  chars.js poses.js sets.js   the cast, key poses, town set pieces
  shots.js       one function per section: bakery · chase · market · roll · sil · tender · irisShot (tonal paintings)
  film.js        assembly: shot → Redraw → iris → FilmPost → gate + curtains; per-section look (damage, sepia, sampling fps, crank)
  cardspecs.js   the intertitles        frames.js   model sheet, card sheet, redraw sample, one-colour example
  music/score.py  photoplay score from timeline.json      mix.py   score + projector
  tools/         cuecheck.py · subs.py · dump_timeline.mjs
```
1. 先写提示单(`timeline.js`):段落、速度,以及每个包袱节拍作为命名重音。配乐从同一文件生成,所以每个重音都踩准(0 ms)。
2. 每个镜头先用灰值画(`?scene=` 出静帧供审),再过整条流水线看——Redraw 会改变什么可读。
3. `sh demo/build.sh`:时间轴 → 配乐 → 重音检查 → 混音 → srt → 渲染(2 个 worker 渲染 1301 帧约 55 秒)→ 封装(−14 LUFS)→ 颗粒重编码 → 静帧。约 2.5 分钟。
4. 以每秒 1 帧审查,然后每个包袱按 0.1–0.2 秒做帧条。

## 10. 引擎用法

四个模块,可独立使用:

| 模块 | 主要 API |
|---|---|
| `engine/ink.js`(色调绘制)| `setFrame(t, {boil})` · `form(g, pts, {v, line, grad, shade, cyl})`(一个以灰值 `v` 填充、带明暗和轮廓的形状)· `stroke(g, pts, w)` · `drawShape(g, shape, style)`(**本风格下的任意路径**;`style.color` 以某个色相画出,用于颜色遮罩)· `sparkPts(cx, cy, r, tail)` · `catmull`、`ellipsePts`、`rectPts`、`mottle`、`shade`、`grey(v)` |
| `engine/redraw.js` | `new Redraw(w, h).render(canvasOrImageOrVideo, {frame, lines, tone, hatch, levels, gap, sigma, p, eps, phi, bilateral, src})` → canvas。把色调绘画*或真实视频帧*变成墨线画(redraw 模式:照片用 `bilateral: 3, p: 34, eps: .24`)。 |
| `engine/film.js` | `new FilmPost(w, h).render(src, {frame, strength, sepia, crank, grain, flicker, weave, scratches, burn, vignette, halation, exposure, jump}, colorMask?)` → canvas · `damage(g, x, y, w, h, frame, strength)`(灰尘、毛发、斑块)。可叠在**任何** 2D 画布上。 |
| `engine/cards.js` | `intertitle(g, W, H, {level, lines:[{text, font, size, italic, weight, spacing}], shake}, t)` · `decoBorder(g, x, y, w, h, level)` · `iris(g, W, H, cx, cy, r)` · `theatre(g, W, H, gate, spill, curtainOpen)` |
| `engine/figure.js` + `heads.js` | `drawFigure(g, character, {x, ground, scale, yaw, pose, t, props})` · `P0()`、`mixPose`、`runPose(ph)`、`walkPose(ph)`、`runBob` · 角色在 `chars.js`,姿势在 `poses.js` |

**那唯一的颜色。** 拷贝是单色的;要让某个元素保持自己的色相,把它画进单独的遮罩画布(颜色 + alpha)并传给 `FilmPost.render`:遮罩有 alpha 处保留色相,但仍然接受颗粒、闪烁和暗角。

```js
import { drawShape, sparkPts, grey, setFrame } from './engine/ink.js';
import { Redraw } from './engine/redraw.js';
import { FilmPost, damage } from './engine/film.js';

setFrame(t);
const W = 1440, H = 1080, mk = () => Object.assign(document.createElement('canvas'), { width: W, height: H });
const frame = mk(), f = frame.getContext('2d'), mask = mk(), m = mask.getContext('2d');
f.fillStyle = grey(.9); f.fillRect(0, 0, W, H);
const sp = sparkPts(720, 460, 220, 260);                 // a four-point light with a short tail
drawShape(f, sp.star, { v: .6, shade: 12 });            // tonal version (gets inked + hatched)
drawShape(f, { pts: sp.tail, closed: false }, { line: 10 });
drawShape(m, sp.star, { color: '#D97757' });            // the one colour
const inked = new Redraw(W, H).render(frame, { frame: Math.round(t * 24) });
const print = new FilmPost(W, H).render(inked, { frame: Math.round(t * 24), strength: .6, sepia: .15 }, mask);
g.drawImage(print, 240, 0); damage(g, 240, 0, W, H, Math.round(t * 24), .6);
```
(`?scene=frames.oneColour` 渲染此示例。)

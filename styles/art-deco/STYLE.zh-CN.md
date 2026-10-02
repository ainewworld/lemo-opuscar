# 装饰艺术(Art Deco)— 风格提示词

> 黑色亮漆、镌刻金线与喷笔几何:一张会动的 1930 年代大饭店海报。每个构图都有一条中轴,每次转场都沿中轴开启或闭合,光线以灯泡逐个点亮的方式到来。
> Demo:*Midnight at the Starlight Hotel*(58.4 s)· `art-deco.mp4` · 源码在 `demo/`
> 参考(仅取语法):**A. M. Cassandre** 海报(巨大几何、陡峭透视、硬边内的喷笔渐变、速度线);**克莱斯勒大厦 / 洛克菲勒中心装饰**(金字塔式退台、旭日形、山形纹、鱼鳞纹、扇形);**Busby Berkeley** 1930 年代俯拍群舞(机械对称、人形万花筒);**《了不起的盖茨比》(2013)片头**(黑底上自行绘制的金线、光泽扫过);**格什温时代的交响爵士**(单簧管滑音开场、钢琴领奏、弱音小号插话)。绝不抄袭任何海报版式、真实建筑、角色、字体设计或旋律。

你正在以**装饰艺术(Art Deco)**风格执导一部 40–60 秒的影片。用户给你一个主题。其余一切(故事、镜头、配乐、音效、字幕)由你决定,并交付一部完成的影片。遵循本指南。

---

## 1. 这个风格是什么

一个由**暖黑底上的金色轮廓线**构成的世界,填充以**喷笔硬边体积**(Cassandre、Lempicka),围绕**一根垂直中轴**组织。纹样不是画面之上的装饰,它*就是*画面:旭日纹是背景,阶梯拱是画框,楼层指示盘是进度条,灯泡招牌是高潮。运动是**机械而对称的**:物体从中轴展开,门沿接缝对开,灯光按可数的顺序点亮。

情绪基调是带着滴答作响时钟的魅力:一个夜晚、一场活动、一个期限、一次揭晓。

## 2. 故事:什么适合这个风格

| 天生优势 | 故事用法 |
|---|---|
| **中轴** | 每次转场都是一扇门:标题拱门对开、楼梯门迸开、厨房双向门砰响、电梯门闭合进入片尾卡。有"门槛"的故事(一栋楼、一段向上的旅程、后台 → 舞台)天然契合。 |
| **可数的光** | 灯泡招牌逐字点亮,观众可以*数*。把它与同样可数的东西绑定:午夜十二响 = THE STARLIGHT 的十二个字母。 |
| **机器对称** | Busby Berkeley 式俯拍把人变成图案:在八分音符上打开的扇子变成旭日,再锁定成钟面。用作高潮之后的释放。 |
| **表盘与数字** | 楼层指示器、钟面、楼层徽章、年份牌:数字承载剧情(30 层、11:55、1930)而无需旁白。 |
| **时代广播** | 播音员是天然的叙事者。让他在声学空间中移动(街头号角 → 桌上收音机 → 楼梯间 PA → 现场话筒),让观众*听*到主角离声源越来越近。 |

**故事形状(demo 中验证过):**一个小人物在宏伟场所中有一件紧急小事(行李员必须在午夜前把一封封缄的信送到屋顶)。一个机械障碍(电梯 OUT OF ORDER)把慌乱变成决心。加速的中段带一次速度变化(楼梯 = 查尔斯顿)。高潮前一次真正的静默(钟敲 XII,乐队停下,信件坠落)。高潮就是可数的光。**音乐即剧情:**信里装着乐队的新歌;主题此前只以碎片被听到,直到指挥打开它,第 13 拍才是第一次完整陈述。结尾的呼应:曾仰望熄灭招牌的主角如今站在点亮的招牌之内;一个按钮笑点闭环(电梯叮一声 IN SERVICE —— 太迟了)。

改编任何主题:找到门槛(门)、期限(一座钟)、可数的揭晓(招牌、记分牌、楼层数字),以及终场解锁的东西(一首歌、一次祝酒、一次发射)。

## 3. 视觉语言

- **底色**:暖黑 `#0d0b09`,亮漆 `#060504`;夜空 `#0a0e16` → 地平线翡翠 `#10231f`。
- **金色**:`#6F5220`(暗)→ `#C9A24B`(基色)→ `#F3D98B`(亮)→ `#FFF4D2`(高光)。金色是**带状金属渐变**(暗–亮–热–亮–暗),其 `sheen` 偏移可动画为扫过标题的一道光泽。
- **签名笔触**(`gline`):一条比线宽 1.6 px 的暗色镌刻下衬线、金色渐变线、顶部一根发丝高光线。可选发光与平行双线(`double`)。任何东西都不加黑色卡通描边。
- **体积**:硬边 + 喷笔(`airbrush`):形状内部从暗到亮的方向渐变,光来自左上,受光侧一道细金边。
- **点缀色**,克制使用:酒红 `#8E1B2E`(主角制服 —— 唯一的大面积高饱和区域,视线总能找到他)、翡翠 `#1D6B57`(扇子、门板、夜色)、象牙 `#F2E8D5`(信、手套、地毯)。
- **纹样库**:旭日(线或楔)、阶梯拱 / 金字塔退台、鱼鳞、山形纹、扇形、四角星芒、速度线、钟面、半圆楼层盘。
- **透视**:场景以真正的单点透视(带 mode-7 地面的大堂)和两点透视(仰视屋顶招牌)绘制,使用极小针孔相机,因此推拉/俯仰/摇移是真实的透视变化,而非缩放的纸片。
- **字体(OFL)**:Limelight(标题)、Poiret One(数字、招牌骨架、铭牌)、Josefin Sans(字幕、标签)、Italiana(罗马数字)。
- **角色**:7 头身、流线收窄的身体、棱角亮漆平面(Lempicka)、杏仁眼或弧形眼、一笔画鼻子。demo 主角的剪影标志:歪戴的筒状帽 + 帽带、铜扣组成的 V 形、始终在手的封缄信。

## 4. 运动语言

- **角色按二帧一拍(12 fps)迈步**;相机、灯光、灯泡、金线绘出与光泽扫过按一帧一拍(24 fps)运行。相机二帧一拍会读作卡顿。
- **一切从中轴展开**:标题条是一个点 → 发丝线 → 两条对称展开 → 文字升起 → 翼饰与星芒。字幕卡与片尾铭牌用同一语法,因此标题、字幕与转场是一个系统。
- **绘出跟随音高**:开场金线以单簧管滑音的速度生长(慢 → 快),落在大拍重音上。
- **灯泡有点燃过冲**(1.6× 闪光,0.18 s 内稳定)加继电器"咔哒";所有字母点亮后,一个十六分音符追逐跑遍整块招牌。
- **表演节拍有预备动作**:按钮被按三次(一下、两下、狂按);投掷有挥臂、出手和几乎翻过栏杆的失手;被托盘碰掉的帽子在一小节后落回头顶而他不屑一顾(从容 = 角色成长)。

## 5. 镜头语言

| 节拍 | 镜头 |
|---|---|
| 开场(3 秒钩子) | 一个金点爆开成光线与阶梯拱;缓慢 6% 推近。乐队重音上标题条绽放。 |
| 转场语法 | **对称分屏**:上一帧变成两扇铰接在边缘的门扇,沿接缝向外开启(拱门、楼梯门、厨房门)。旋转门是它的旋转表亲(玻璃翼擦除)。影片以电梯门滑向合拢盖住实拍画面收尾。 |
| 建置 | 极低角度 Cassandre 式俯摇,从塔顶熄灭的招牌摇到街上渺小的主角:目标、难度与熄灭的招牌(结尾的铺垫)一气呵成。 |
| 障碍 | 中景拍铭牌落下;静默中对脸的缓慢推近,同时他扶正帽子。 |
| 签名镜头 1 | 楼梯间作为**建筑剖面**:随他上升,拉远直到整座塔成为剖面图而他只是带速度线的红点,推回"30"楼层徽章,匹配剪辑到厨房中旋转的银托盘。 |
| 静默 | 插入镜头:塔楼时钟分针咔哒到 XII;信件以慢动作坠过熄灭的字母。 |
| 高潮 | 十二响钟:接住(ECU 手套)→ 指挥(撕开封缄、乐谱插入、指挥棒举起)→ 招牌低斜角、每响点亮一个字母 → 最后一个 T 在主角身后点亮时给特写,金光掠过他的脸。 |
| 签名镜头 2 | **Busby Berkeley**:斜高角度,8 名舞者每个八分音符打开一把扇子,然后正俯视、8 路镜像缓慢旋转,扇子锁定成钟面,两根金针指向 XII。 |
| 尺度揭晓 | 从招牌拉回到整座塔、城市与烟花(呼应开场俯摇)。 |

## 6. 声音

- **配乐先行**:`timeline.js` 是唯一事实来源(116 BPM 狐步 → 16 拍加速到 138 BPM 查尔斯顿 → 停 → 116 网格上 12 响钟 → D♭ 调的歌曲)。`tools/cuecheck.py` 将 53 个画面对同步点对照 `music/score.json` 检查(最大偏差 0.5 ms)。
- **配器**:交响爵士,不是 60 年代大乐队。钢琴领奏(Salamander)、单簧管(低音颤音 + 两八度滑音,由长音的时变重采样构建)、弦乐(颤音铺底、上行冲刺)、弱音小号插话(铭牌上的"哇哇"声)、查尔斯顿段由刷鼓变鼓棒、行走拨弦贝斯、午夜用的管钟(B♭)、每把扇子配竖琴/钢琴滑奏、终场合唱用长号 + 萨克斯。
- **埋主题**:标题 = 钢琴第 1 小节;街头 = 弱音小号试奏两小节被打断;厨房 = 主角口哨吹出前四个音;终场 = 完整歌曲。观众在它最终到来时会认出它。
- **距离自动化**:乐队在 30 层演奏,因此街头低通 2.5 kHz,大堂(穿过地板)1.2 kHz,随他攀登逐渐打开,屋顶全频段且干。
- **五个空间中的播音员**(Kokoro `bm_fable`):街头号角(带通 320–3.8 kHz、轻驱动、拍击回声)→ 桌上收音机 → 楼梯间 PA(长混响)→ 厨房收音机 → 现场话筒(全频段)。驱动保持温和:过重的号角失真曾让"five minutes to midnight"在混音中无法听清。
- **按材质拟音**:铜扣咔哒、青铜铭牌铿锵 + 链条哗啦、八分音符上的铁梯踏步、大理石鞋跟、银托盘、木制双向门 + 弹簧颤音、纸张翻飞、手套拍击、每字母的闸刀"咔哒"+ 灯丝嗡鸣、追逐的继电器滴答、烟花啸声。
- **静默**:"Out of order?!"之后只有大堂时钟滴答两声(下一个声音:查尔斯顿军鼓);塔楼时钟咔哒到 XII 后只有风与翻飞的信(下一个声音:第一响钟,全片最重要的声音);第 12 响后屏息一拍(接下来:全奏)。
- **J/L 剪辑**:拱门开启前有收音机调谐噪声;"Out of order?!"的回声滚上楼梯间;厨房收音机在楼梯间时就已开始;屋顶风在厨房门前一拍进入;第 12 响钟的尾音延续进全奏。
- 人声下方压乐 ≈ −9 dB(现场播音员 −6 dB),铺底 −6 dB。混至 −14 LUFS,grain 3。

## 7. 字幕与标题

- **字幕卡**(`subtitleCard`):亮漆条(88% 黑)两端如标题条般阶梯收进,双金线,Josefin Sans SemiBold 40–42 px 象牙色。说话人图标:播音员为金色缎带话筒,主角为酒红筒状帽。像所有标题一样从中轴展开。停留 ≥ max(1.8 s, 语音 + 0.6 s)。
- **标题**:MIDNIGHT / AT THE STARLIGHT HOTEL 置于阶梯拱上的金色标题条中,1930 菱形年份牌,NEW YEAR'S EVE 标签。
- **片尾卡**:合拢的电梯门上的亮漆铭牌:标题、ART DECO、LEMO-OPUSCAR、LemoLab × Claude Opus 5.5、素材致谢。

## 8. 我们踩过的坑

- 由字形骨架生成的灯泡招牌在弯折处(G、S、R)碎裂:Zhang–Suen 的阶梯像素会骗过邻居数目的交叉点检测。用**交叉数**判断端点/交叉点,并在 14 px 内焊接链端。
- 通用卡通主角放进 deco 世界会像贴上去的。主角本身必须是 deco 的:7 头身、收窄平面、喷笔 + 金边、一笔画五官。
- 鱼鳞纹第一眼像砖墙:逐行绘制下半圆、每行压住上一行,并加一条内弧。
- 三位十六进制(`#fff`)会破坏颜色混合、把扇子变成蓝紫色:始终展开 hex。
- 第一次转场到片尾卡时门扇滑过扁平棕色"内部",被读作空帧。只画门扇,让它们合拢盖住实拍画面。
- 开场(黑底一个金点)会触发 `blackdetect`;把背景旭日楔形与光晕略微提亮,使首帧不是死黑。
- 钟声镜头中 ¼ 画面高的 Pip 对情绪峰值来说太小 —— 给最后一响钟一个特写。
- 播音员的扬声器重失真符合时代但在音乐下听不清;用 whisper 在最终混音上检查每一句,而不只是干 TTS。

## 9. 制作配方(本仓库)

```
styles/art-deco/demo/
  timeline.js      tempo grid + all sync points (single source of truth) → tools/dump_timeline.mjs → timeline.json
  engine/          deco.js (palette, gold, gline, airbrush, motifs, drawShape) · type.js (title bar, digits, badges, dial, clock, subtitle card)
                   bulbs.js (any text → bulb sign, lighting patterns) · cam.js (pinhole camera + card transforms)
  chars.js         Pip (FK rig, 4 views, 8 faces, pose library, run cycles), conductor, waiters, dancers, the letter
  scenes/          lobby.js (one-point + mode-7 floor, doors, plaque) · roof.js (two-point sign) · tower.js · stairs.js
  shots_*.js       one function per shot: shot(g, t)       film.js   shot list, transitions (split / revolve / close), subtitles
  frames.js        model sheet, component kit, style frames, ?scene=frames.shotTest&shot=<name>
  music/score.py   original score → score.wav + stems + score.json      mix.py   voices in 5 spaces + foley + beds + ducking
  tools/           cuecheck.py · subs.py · pitch.py · dump_timeline.mjs
```
1. 先写速度网格和提示表;交给音乐子代理并行作曲、并行作画。
2. 构建引擎和主角模型图,然后每个场景一地,再每镜头一函数。用 `?scene=frames.shotTest&shot=<name>` 审查单镜头。
3. `sh demo/build.sh` 重建一切:timeline → TTS → pitch → whisper → score → cue check → mix → srt → render(1401 帧 4 worker 约 15 s)→ mux(−14 LUFS,grain 3)→ stills。
4. 用 `still.mjs --range 0:58:1` + `sheet.py` 按 1 s 间隔审查,再对每个关键动作按 0.15–0.2 s 出帧条。

## 10. 引擎用法

所有绘制为 Canvas2D,对 `t` 确定。从 `demo/engine/` 导入。

**deco.js**
| 函数 | 用途 |
|---|---|
| `C` | 调色板(`ink black night gold0 gold1 gold2 goldHi ivory emerald burg plum skin bulb…`) |
| `goldGrad(g, x0,y0,x1,y1, {sheen, hot, tint})` | 带状金属渐变;动画 `sheen` −0.2→1.2 得到光泽扫过 |
| `gline(g, pts, {w, part, closed, glow, double, sheen, alpha, color})` | 镌刻金色轮廓线;`part` 0→1 绘出;`color` = 任意 hex 用于单色例外 |
| `airbrush(g, pts|Path2D, {base, dark, light, dir, rim})` | 硬边喷笔填充 |
| `sunburst(g, cx, cy, {rays, r0, r1, mode:'lines'|'wedges', a0, a1, rot, part})` | 放射背景 |
| `stepArchPts(cx, base, w, h, {steps, crown})` / `archFrame(g, cx, base, w, h, {rings, gap, fill, burst, part})` | 金字塔拱与拱门画框 |
| `fan`, `fishScale`, `chevrons`, `sparkle`, `speedLines`, `glow`, `beam`, `vignette` | 纹样库 |
| `drawShape(g, pts, {color, halo, trail, glints, part})` | **以 deco 方式绘制任意路径**:喷笔金(或 `color`)填充 + 金色轮廓线 + 可选旭日光晕、速度线尾迹与星芒 |
| `starPts(cx, cy, r, k, rot, n)` | 四角星路径 |

**type.js**:`goldText(g, text, x, y, {size, font, track, sheen})` · `titleBar(g, text, cx, cy, {p, out, size, sub, wings})`(进出动画)· `decoDigits(g, '11:59', x, y, size)` · `yearBadge(g, '1930', cx, cy, r, {p})` · `floorMedallion(g, '30', cx, cy, r, {sub})` · `dial(g, cx, cy, r, value, {labels})`(半圆楼层指示器,value 0..1)· `clockFace(g, cx, cy, r, {h, m, s, roman})` · `subtitleCard(g, text, {p, out, speaker:'radio'|'boy'})`。

**bulbs.js**:`buildSign(text, {font, size, spacing})`(任意文本 → 字形骨架 → 均匀分布灯泡,带缓存)· `drawSign(g, sign, x, y, scale, {lit, channel, color})` · `litAll(v)` · `litSequence(t, times[], {flash, chaseFrom, chaseSpeed})`(字母 i 在 `times[i]` 点亮,然后追逐)。

**cam.js**:`makeCam({x, y, z, f, yaw, pitch, roll})` → `{P(X,Y,Z), scaleAt(X,Y,Z)}` · `cardTransform(g, cam, TL, TR, BL, w, h)`(把平面卡片映射到 3D 四边形)。

**chars.js**(demo 角色):`drawFigure(g, {x, y, s, view:'side'|'q'|'front'|'back', face, ...pose})` · `POSES`、`FRONT_POSES`、`lerpPose`、`runCycle(phase)`、`runFront(phase)` · `drawDancer`、`drawDancerTop`、`envelope`、`clef`。

**那唯一的颜色。** 调色板是金/黑/象牙,酒红留给主角。要让某个元素保持自己的颜色,传入 `color` —— 它用于填充、轮廓线与光晕,其余一切保持金色:

```js
import * as D from './engine/deco.js';
import * as B from './engine/bulbs.js';

// a warm-orange four-point light with a short cursor tail, drawn the Art Deco way
D.sunburst(g, 960, 540, { rays: 72, r1: 1400, mode: 'wedges' });
D.drawShape(g, D.starPts(960, 540, 120, .22), { color: '#D97757', halo: 1, trail: { ang: Math.PI, len: 420, n: 4 } });

// a bulb sign that lights letter by letter, in the same orange
const sign = B.buildSign('LEMO', { size: 260, spacing: 20 });
B.drawSign(g, sign, 560, 700, 1, { lit: B.litSequence(t, [0, .5, 1, 1.5], { chaseFrom: 2.5 }), color: '#D97757' });
```

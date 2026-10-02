# HD-2D — 风格提示词

> 手工制作的像素 sprite 如纸片般立在一个有光照、有雾气的全 3D 立体微缩景观(diorama)中,通过移轴镜头(tilt-shift)从高处 3/4 视角拍摄:一个夜晚的玩具世界,每一盏灯都投下真实的阴影。
> 演示片:*The Lampbearer*(76.5 s,1920×1080,60 fps)· `hd-2d.mp4`(**移轴剪辑版**)· 源码在 `demo/` · 引擎:three.js r170 场景 + 程序化像素纹理 + 自定义物理 DOF / 移轴后期(`demo/post_ts.js`)+ Canvas2D 叠加层 UI,由 `core/render/video.mjs` 逐帧渲染。
> 参考(仅借鉴语法):*Octopath Traveler*(Square Enix × Acquire,2018)及其续作(2023),定义了 HD-2D 观感的游戏。学习其语法:sprite 置于立体布景中、高 3/4 机位、移轴焦点带、带阴影的点光源、浓重的 bloom 与暗角、金边对话框。绝不使用其角色、地点、logo、UI 饰物或音乐。

你要以 **HD-2D** 风格执导一部影片。用户给你一个主题。其余一切(故事、场景、角色、镜头、节奏、声音)由你决定,并交付一部完成的影片。遵循本指南。

---

## 1. 这个风格是什么

一个由简单的盒体和圆柱搭建的 **3D 微缩布景**,贴上**像素画纹理**(最近邻采样,每米 24 px,Bayer 抖动色阶),再放进 **2D 像素 sprite**(每帧 34×50 px)——它们是平面公告板(billboard),却像真实物体一样**接受光照并投射阴影**。相机架得又高又远,用较长焦距的镜头(fov 30–42°),**移轴模糊**让只有一条水平窄带保持清晰,于是整个世界看起来像桌上的模型。

光才是真正的主角:灯笼、火盆、窗户和灯塔都是点光源,把 sprite 的影子投在木板地上;月光以体积光柱的形式洒下;雾、尘埃、萤火虫和雨悬浮在空气中。调色是**冷蓝夜色对暖琥珀火光**,配以强烈 bloom 和浓重暗角。其上叠加一个小巧优雅的 **RPG UI**:章节卡、带名牌和打字机式文字的对话框、衬线体字幕。

让它成为 HD-2D 而非"贴像素纹理的 3D"的关键:角色保持**平面、低分辨率和步进感**(6–10 fps 姿态),而相机、光、粒子和焦点每帧平滑移动。保持这一对比。

## 2. 故事:什么适合这个风格

| 天生优势 | 故事用法 |
|---|---|
| **英雄随身携带的一盏灯** | 灯笼既是主光(keylight)又是情节。无论主题是什么,给英雄一盏小小的光(提灯、火种、蜡烛、屏幕),它必须被带到某处。它的亮度就是情绪计量表:明亮 → 摇曳 → 几乎熄灭 → 重新点燃。 |
| **桌上游世界** | 地点读起来像*地图*:港口小镇、森林小径、崖壁石阶、塔顶。每章一个地点,各有自己的光调。结尾复用开场的布景以展现变化(演示片的港口:灯塔熄灭 → 点亮,船灯亮起)。 |
| **RPG 语法** | "第一章"卡片、一个在对话框里交付任务的具名 NPC、穿越 2–3 个群落的旅程、在地标处的高潮、片名卡。观众瞬间就能解读。 |
| **Sprite 阴影** | 点亮一盏光时影子随之伸展,是这个风格的招牌特效。把第一次点灯放在屏幕上、放在两个人物身边。 |
| **移轴** | 让宏大时刻显得珍贵而微小。用焦点带对准单一微小主体(灯塔、小船)的超广定场镜头。 |

**故事形状(在演示片中验证过):** 冷色章节卡 → 地标之光**熄灭**的超广定场镜头 → 对话框中交付任务(光被传递)→ 穿过更暗的群落(森林)→ 磨难(风暴;光几乎熄灭;音乐抽空)→ 光幸存 → 地标重新点亮(高潮落在音乐强拍上)→ 开场布景,已然改变 → 片名与标语。

改编任何主题:在其中找到"一盏小光"(第一次提交、一粒种子、一封信、一个信号)、它必须抵达的地标、以及两者之间的磨难。保持 6–8 个镜头,每 1–2 个镜头一个布景,7–8 句旁白。

## 3. 视觉语言

**分辨率与像素。** 场景纹理在小画布上逐像素绘制(`PX` 类,`px.js`),以 `NearestFilter` 上传;世界空间 UV(`worldUV`,`kit.js`)保证每个表面都是 **24 px/m**。角色是 34×50 px 帧,`SPX = 1/30` m 每像素(≈1.67 m 高)。颜色来自按亮度选取的**色阶**(ramp,3–6 个色板)并做 4×4 Bayer 抖动;抖动带 `dz` 必须窄:**角色 .22,纹理 .45**(更宽 = 满屏棋盘噪点)。Sprite 自动获得 1 px 的 **selout** 描边(`PX.outline(.3)`:紧邻 sprite 的透明像素变为向 `#16 0e 1e` 压暗的相邻色)。

**调色板(夜景)。** 天空 `#050818 → #101d3e → #2c4262`(地平线),雾 `#16223a`(港口)/ `#152a48`(森林)/ `#1c2334`(风暴),月光 `#8fa8e0`,半球光 `#3a4c7a / #0a0a12`。火光与窗户 `#ff9d4a`、`#ffae55`、`#ff8c3a`,灯笼 `#ffb050`,灯塔 `#fff0c8`。角色冷色补光 `#9fb2e8`。英雄披风色阶 `#2e0b14 … #c9503f`(绯红),围巾金色 `#b08424`;守塔人外套藏青 `#10131f … #5a6c98`,胡须灰。墨色 `#1a1016`。

**材质。** 只用盒体和圆柱:灰泥+木梁的房子(`plaster`)、木瓦屋顶(`shingles`)、带钉点的木板(`woodPlanks`)、Worley 卵石(`cobbles`)、分层岩石(`rock`)、树皮/树冠/蕨草/草丛/蘑菇 sprite(`forest_art.js`)。枝叶、草、蕨、蘑菇、远处的船和山脊都是**公告板**(数量多时用实例化)。窗户是自发光像素窗格(`windowMat`,emissive 2.2)。火是 10 fps 的 6 帧像素图集公告板(`fire`)。海是自定义 shader:量化的像素波纹、浪脊条带、朝相机拉伸的光反射柱、闪光亮点。

**每套布景的光照方案。** 一盏昏暗的投影月光(DirectionalLight 1.1–1.2,2048 map)+ 半球补光 + **实景实用点光源**(窗户 8,路灯 12–14,火盆 16 带阴影,灯笼 2.6–14 带阴影)+ 一盏放在英雄前方约 2 m 处的**冷色正面补光**(`#9fb2e8`/`#8fa6e0`,1.2–1.8,范围 6–8 m)。每个光源上放一个加法混合的 `glow` sprite,让 bloom 有东西可抓。

**后期链**(`post_ts.js`,`makePost(renderer, scene, camera, 1920, 1080, { ssaa: 2 })`):以 2×(内部 3840×2160)渲染并 MSAA → 物理 DOF(CoC = `aper × (1/focus − 1/z)` px,96 采样螺旋收集,远处采样不得渗入清晰的前景)**+ 移轴** → UnrealBloom(strength .55,radius .75,threshold .85)→ 暗角/调色(amt .62,warm .1,contrast .2,sat 1.05)→ ACES filmic,曝光 1.15。移轴剪辑版追加:`tiltAmt 17`,焦带半宽 `tiltW .075`,羽化 `tiltF .3`(屏幕高度的比例),`maxCoc ≥ 24`,饱和度 ×1.16,对比度 .28。

**字体。** Cinzel 500/700(章节标签、片名),Cormorant Garamond italic 500(字幕、标语),Cormorant 500/600(对话框文字、名牌)。金色 `#d8c28e / #e2c989 / #c9a863`,羊皮纸白 `#f3ead6 / #f6f0e2`。

## 4. 运动语言

- **Sprite 步进,其余一切滑行。** 行走循环用 4 帧以 6–10 fps(`['w0','w1','w2','w3'][Math.floor(t*9)%4]`),待机以 ~1.4 Hz 交替两帧,每隔几秒眨眼,姿态瞬间切换(`upE → up → idle`)。相机、灯光、粒子、光柱和焦点每帧以 60 fps 更新。
- **姿态即数据**:一帧就是一个参数对象(`{ step, arm:'low'|'fwd'|'up'|'hug'|'pour', kneel, lit, bob, hem, scarf, blink, closed, look }`),由 `drawWren` / `drawKeeper` 绘制。加一个姿态只需加一条表项(或向 `makeChar` 传 `extra`)。
- **光会呼吸**:每个火苗上用 `flick(t, seed)`(三条正弦求和,±20 %);灯笼的 `lit` 值(0–1)既重绘 sprite 中的火苗大小,*又*驱动点光源(`intensity ∝ lit^1.3`)、光晕透明度和缩放。
- **事件就是时间戳**,在 `story.js` 的 `T` 中(灯塔闪烁 11.5 → 熄灭 12.35,引火 16.2,狂风 40.6,变暗 41.3,黑暗 42.0,重新点亮 45.6,起身 47.6,倾倒 52.6,点燃 53.5,光束 54.4,船灯 59.2)。场景用 `ss(seg(t,a,b))` 混合。
- **招牌节拍:** 灯塔闪两下熄灭;火盆的引火点燃灯笼,两个 sprite 的影子同时跳上木板;狂风把火苗缩成一点余烬(sprite `lit .27`),世界几乎全黑,随后火苗重新变大;透镜伴随一次曝光爆发点燃(`exp(-(t-53.5)/.22)`),两道光束卡开始扫射;船灯每 0.7 s 亮起一盏,朝港口漂来。
- **天气是程序化的**:雨 = 被风吹斜的线段(`rain`),闪电 = 一条脚本化的闪光曲线(`flash(t)`:150 ms 击发、低谷、60 ms 再击发、指数衰减),同时抬升半球光、一盏 "bolt" 灯、天空、云、海和曝光。

## 5. 镜头语言

| 镜头 | 相机 |
|---|---|
| 定场(港口全景,5.5–15) | 极高极远(`[-17,15,38] → [-13,12,31]`,fov 36),缓慢推进。焦点 44 m,光圈 520;移轴带固定在屏幕高度 34 % 处(没有角色可跟踪)。 |
| 对话(码头,15–25.5) | 中高 3/4(≈高 5 m,远 8–10 m,fov 30),近乎静止的漂移。每帧焦点对准英雄,光圈 300。 |
| 旅途(森林,25.5–35.5) | **横向跟移**,相机稍稍领先行走者(`monotone` 前瞻),fov 30,高 6.3 m;镜头前的近处蕨草虚化成黑色剪影;结尾她从一根前景树干后走过。光圈 380。 |
| 磨难(风暴石阶,35.5–49.5) | 从悬崖的宏大定场视角开始,缓入跟随机位(37–39 s),在她跪下时**俯冲到低而近**(相机升至约 2.2 m 高,6 m 远),她继续攀登时再拉开。光圈 140–170(越近 = 越少虚化)。 |
| 高潮(灯室,49.5–58) | 中景对准英雄与透镜;点燃后,上升拉回到塔的远景(fov 30 → 40,光圈 150 → 320),焦点从英雄切到透镜。 |
| 收束(港口结尾 + 片名,58–76.5) | 开场的镜像,但更宽更高(`[-22,26,44] → [-27,33,55]`,fov 42),焦点 70,光圈 380,移轴带在 36 %。 |

规则:永远俯视这个世界(绝不用平视);每条相机路径都是 2–7 个关键帧的 `track()`(单调三次插值,无过冲);焦点距离每帧由相机到英雄重新计算(`post.dof.focus = cam.position.distanceTo(hero + (0,.7,0))`);移轴剪辑版中清晰带跟随英雄的投影屏幕高度(`tiltCenter`,钳制在 .2–.8)。

## 6. 声音

- **配音(Kokoro,经 `core/tts/tts.py`)**:旁白 `af_heart`,语速 .82–.90(缓慢,如讲故事);任务交付者 `bm_george`,语速 .84,混音中 7 kHz 低通,让他"置身世界之中"。7 句旁白 + 1 句对白,每句 1–5.4 s。用 `core/tts/asr_check.py` 检查;把自造的名字放进 `asr` 字段(`Graywater`、`Ren`、`whisper would`),否则 whisper 会标记它们。
- **音乐**:一首授权曲目,按画面剪辑:Scott Buckley,*Precipice*(CC BY 4.0),由 `music/edit.py` 剪成五段(引入 pad → **灯塔熄灭时 0.8 s 呼吸停顿** → 穿越森林与风暴的持续增强 → **42.0 火苗几近熄灭时硬停进入混响尾音**,其下只剩引入 pad → 作曲家自己的 build → **把 D→G♭ 转调强拍放在 53.500 s = 点燃时刻**,由最陡的 < 250 Hz 起音自动定位(误差 < 5 ms)→ 跳至最终的 E♭ 到达段用于片名)。所有剪切点在 `music/CUES.md`。选一首自身弧线与故事匹配的曲子;在曲子内部剪辑,而不是拼接多首。
- **环境与拟音(`mix.py`,用 `core/audio/sfx.py` 合成)**:每套布景的底噪用增益曲线交叉渐变(港口海浪 + 绳索吱呀、火盆噼啪、森林蟋蟀 + 落叶、风暴雨声 + 带阵风涌起的风),以及事件:12.3 灯灭"fwoomp",16.15 划火柴,17.3 对话框 UI 提示音,来自 `sfx_events.json` 的脚步(木 / 泥土 / 石头),每次闪电后 0.25 s 的雷声,阵风时的风啸,寂静中的两次心跳,53.5 的点燃轰鸣(42 Hz 下落 + 空气 + 高频微光),船亮灯时的六声小铃。
- **混音**:每句配音压缩并 RMS 匹配;各总线对齐到配音 −17、音乐 −21、环境 −30、拟音 −27 dB RMS;配音下音乐压低 ~2.2 dB,然后**逐句自动闪避**把音乐 + 环境压到每句下方 ≈10 dB(只降不升;脚本会打印每句实际达到的间隙,演示片中为 7–14 dB);`tanh` 软限幅;最终响度由 `core/render/mux.sh` 处理(两遍 loudnorm −14 LUFS,TP −1.2)。

## 7. 字幕与片名

- **旁白字幕**:Cormorant Garamond italic 500,50 px,`#f6f0e2`,居中于 y = H − 88,置于柔和的横向暗带上(渐变,最高 .38 alpha),投影 10 px。在配音前 .35 s 淡入,结束后 0.45–0.8 s 淡出。每段配音一行。
- **对话框**(用于角色在屏幕上说话时,替代字幕):1180×210 px,底部居中,藏青渐变 `rgba(14,18,34,.86) → rgba(6,8,18,.9)`,2 px 金边 `rgba(214,190,130,.9)` + 内侧 1 px 线,金色菱形四角;名牌(Cormorant 600 34 px)压在左上边缘;正文 Cormorant 500 44 px,**在配音时长的 92 % 内逐字打出**;完毕时闪烁金色 ▌光标;入场时上滑 14 px。一声轻柔提示音伴随它。
- **章节卡**(0–5.5 s):放射状藏青背景 `#11172a → #020308`,`CHAPTER  I`(Cinzel 500 34 px,字距 10 px,`#d8c28e`)在一条带菱形的金色饰线上方,接着是 Cormorant italic 78 px 的章节名,带暖色光晕;一粒像素余烬飘过。
- **片名**(67.4–76.4 s):屏幕压暗 50 %,`THE LAMPBEARER` 用 Cinzel 700 118 px,字距 14 px,垂直金色渐变 `#fff3cf → #e2c27c → #a8803e` 加光晕;饰线;标语用 Cormorant italic 50 px;底部音乐/配音署名(24 px,75 % alpha)。
- **片尾署名行(库规则)**:每部影片以 **"LemoLab × Claude Opus 5.5"** 结尾。在演示片中它是片名卡的一部分(`ui.js` `title()`,默认开启):Cinzel 500 30 px,`#d8c28e` 85 % alpha,字距 4 px,居中于 y = 668,在 70.6–71.6 s 淡入,位于标语与音乐署名之间,不取代后者。`?nocredit=1` 隐藏它(复现签署前的 `hd-2d_v1.mp4`)。新片中以同样方式绘制。
- 场景切换是短暂的黑场淡入淡出(`ui.js` 中的 `FADES`:出 .25–.5 s,入 .35–.7 s),外加最后 0.9 s 淡出。
- 从同一份数据导出 `.srt`(`tools/srt.py`:story.js 的 `VO` + `voices/dur.json`,+0.5 s 保持,对白加 `OLD KEEPER:` 前缀)。

## 8. 我们踩过的坑

- **满屏棋盘格**:色阶上的抖动带过宽。sprite 上保持 `dz` ≈ .22,纹理上 ≈ .45。
- **灯笼把 sprite 打爆**:点光源贴在公告板平面上会使其饱和。把灯放在**离灯笼 0.42–0.45 m、朝相机方向**(`lp + toCam * .45`),并在森林里于 shader 中限制 sprite 照度(`outgoingLight = min(outgoingLight, diffuseColor.rgb * 1.35 + emissive)`,经 `onBeforeCompile`)。
- **公告板背后的光照不亮它**(它只有正面法线)。永远在英雄前方约 2 m 处加一盏冷色正面补光。
- **朝向相机的圆柱光束产生 NaN**;bloom 把它们扩散成大块黑斑。改用 `beamCard`(一条转向相机时淡出的轴对齐公告板条带),让光晕 sprite 接手(`face` 因子放大灯塔光晕)。
- **海面反射柱除以零**:用 `max(.35, …)` 钳制宽度。
- **第一版风暴暗到看不清**。在故事性黑暗节拍之外加一盏"可读性"补光:半球 +1.0,太阳 +1.3,天空 +.35(`cliff.js` 中的 `ext` 项),即环境中调大致 ×2–2.5,只在火苗将熄节拍中让它降为零。
- **远处船的光晕被雾/几何体遮住**:在这些光晕 sprite 上 `depthTest = false` + `renderOrder 5`。
- **无角色镜头上的移轴**:跟踪器没有目标可跟;每个镜头用固定焦带高度(`TILT_C`)。
- **移轴与遮挡**:移轴模糊折入与景深 DOF 相同的带符号 CoC(焦带上方 = 远,下方 = 近),使收集保持"远不渗入清晰近景"的规则;不要把它加成单独的模糊 pass。
- **近同帧在闪光附近发散**:点燃爆发的衰减时间常数为 0.22 s,因此 53.8 s 的静帧与相邻的 60 fps 帧明显不同。这是预期行为,不是 bug。
- **Node 渲染脚本在 `done` 之后可能不退出**,因为静态服务器保持连接存活(`demo/tools/render_range.mjs` 因此以 `process.exit(0)` 结尾)。打印 `done` 后输出文件即已完整。

## 9. 制作配方(本仓库)

```
styles/hd-2d/demo/
  index.html  main.js     页面、渲染器(ACES、PCF 软阴影)、镜头 → 布景路由、移轴驱动(?tilt=1)
  story.js                DUR、SHOTS、事件时刻 T、VO 台词(唯一事实来源)
  px.js                   PX 像素画布、色阶 + Bayer、表面纹理、公告板 / 光晕 / 色斑
  kit.js                  worldUV、mat/mesh/box、缓存材质、房子、板条箱、木桶、像素火、窗、山脊
  fx.js                   天空、星星、像素海洋 shader、粒子、雨、光柱、beamCard、flick
  chars.js                程序化像素角色(Wren、Old Keeper)、姿态表、图集、makeChar
  harbor.js forest.js(+forest_art.js) cliff.js   三套布景;各导出 build*() → { scene, update }
  ui.js                   Canvas2D 叠加层:章节卡、对话框、字幕、片名、淡入淡出、署名
  post_ts.js              makePost:DOF + 移轴 + bloom + 调色(core/three/post.js 的本地副本)
  lines.json vo_times.json sfx_events.json   TTS 台词、配音起始时刻、拟音时间戳
  music/edit.py src/      "Precipice" 的配乐剪辑 → music/score.wav、CUES.md、measure.json
  mix.py                  环境 + 拟音 + 配音 + 闪避 → mix.wav
  tools/srt.py  tools/render_range.mjs  tools/sheet/index.html   srt 导出、局部重渲染、sprite 表页面
```

所有命令在仓库根目录执行。`.venv` 是共享的 Python 环境(kokoro-onnx、faster-whisper、librosa)。

```sh
PY=.venv/bin/python; D=styles/hd-2d/demo

# 0. 全新克隆:voices/*.wav、music/score.wav 和 mix.wav 被 git 忽略(下方重建);若 music/src/ 为空,下载源文件
curl -L -o $D/music/src/sb_precipice.mp3 https://www.scottbuckley.com.au/library/wp-content/uploads/2021/01/sb_precipice.mp3

# 1. 配音(Kokoro)+ whisper 检查 → voices/*.wav、dur.json、words.json
$PY core/tts/tts.py $D/lines.json $D/voices
$PY core/tts/asr_check.py $D/lines.json $D/voices      # 演示片:1 个预期 DIFF(n1 "Graywater" → "gray water")

# 2. 配乐剪辑 → music/score.wav(+ CUES.md、measure.json);设 OUT_DIR=... 可写到别处
(cd $D/music && ../../../../.venv/bin/python edit.py)

# 3. 混音 → demo/mix.wav(可选参数:其他输出路径)
$PY $D/mix.py

# 4. 字幕 → styles/hd-2d/hd-2d.srt
$PY $D/tools/srt.py

# 5. 检查移轴剪辑版的静帧(每帧 ≈0.1–0.2 s)
node core/render/still.mjs $D 8 16.9 30.5 42.8 53.8 62 71 --q tilt=1 --out $D/out/review

# 6. 渲染移轴剪辑版(库中的版本):60 fps 共 4590 帧
#    实测 2 个 worker 时 26–37 fps(≈2.5 分钟);成片用了 6 个 worker
node core/render/video.mjs $D --fps 60 --workers 2 --q tilt=1 --out $D/out/video_tilt.mp4

# 7. 封装:loudnorm −14 LUFS,颗粒 0(像素画:不加胶片颗粒)
sh core/render/mux.sh $D/out/video_tilt.mp4 $D/mix.wav styles/hd-2d/hd-2d.mp4 60 0
```

`?tilt=1` 就是移轴剪辑版的来源:它是 `post_ts.js` 内部的**渲染时后期效果**(不是对成片的二次处理)。不加它就得到普通 DOF 版本。其他页面开关:`ss=1`(无超采样,预览更快)、`only=harbor|forest|cliff`(只建一套布景)、`nobloom`、`nodof`、`noglow`、`nocredit=1`(隐藏片尾署名行)。

**局部重渲染**(例如改了片名卡之后;成片的片尾署名就是这样加的):只渲染结尾并拼接到已有的 `out/video_tilt.mp4` 上(帧 0–4019 不受片名卡改动影响),然后重新封装。先备份当前影片(`hd-2d_v1.mp4`)。音频不动(同一 `mix.wav` → 解码音频逐位一致)。
```sh
node $D/tools/render_range.mjs 67 76.5 --workers 2 --q tilt=1 --out $D/out/tail.mp4          # 570 帧 ≈ 15 s
ffmpeg -y -i $D/out/video_tilt.mp4 -i $D/out/tail.mp4 -filter_complex \
  "[0:v]trim=end_frame=4020,setpts=PTS-STARTPTS[a];[1:v]setpts=PTS-STARTPTS[b];[a][b]concat=n=2:v=1:a=0[v]" \
  -map "[v]" -c:v libx264 -preset medium -crf 14 -pix_fmt yuv420p $D/out/video_tilt_new.mp4   # 25–150 s(CPU 密集,其他渲染运行时更慢)
sh core/render/mux.sh $D/out/video_tilt_new.mp4 $D/mix.wav styles/hd-2d/hd-2d.mp4 60 0          # 35–245 s,同上注意事项
```

改动故事时:先改 `story.js`,再把配音起始时刻复制进 `vo_times.json`(mix.py 读的是那个文件,不是 story.js),让 `sfx_events.json` 的脚步与各布景的行走帧保持同步,并移动 `music/edit.py` 顶部的提示常量(`T_CAESURA`、`T_SILENCE`、`T_HIT`、`NARRATION`)。

## 10. 引擎用法

### 页面契约(`main.js`)
`window.render(t)` 选取镜头(`shotAt(t)`),映射到布景(`SET_OF`),把 DOF pass 指向该布景的场景,重置后期默认值(bloom .55/.85,曝光 1.15,warm .1,sat 1.05,暗角 .62),调用 `set.update(t, shot, camera, post, renderer)`,若有 `?tilt` 则应用移轴,渲染 composer,再绘制叠加层(`drawOverlay(t, shot)`)。一个 `PerspectiveCamera(32, 16/9, .3, 2000)` 被所有布景共享;每套布景每帧设置 fov/position/lookAt。

### 模块与关键函数
| 模块 | 函数 | 作用 / 关键参数 |
|---|---|---|
| `px.js` | `new PX(w,h)` | `.set/.get/.rect/.fill(f)/.ellipse/.poly/.line/.outline(k,tint)/.done()` → canvas |
| | `ramp(cols, dz=.45)` | `(v,x,y) → rgb`,带 Bayer 抖动;`dz` = 抖动带宽度 |
| | `texOf(canvas, {repeat, mip, linear})` | NearestFilter 纹理 |
| | `woodPlanks / cobbles / rock / plaster / shingles / ground(w,h,o)` | 程序化表面画布(`seed`、`cols`、`pw`、`len`、`cell`、`beams`、`snow`) |
| | `billboard(tex, wM, hM, {ax, ay, em, emCol, emI, shadow, receive})` | 直立受光 sprite 平面(Lambert + alphaTest .5),带自定义深度/距离材质以投出剪影阴影 |
| | `glow(col, size, i)` · `blob(r, a)` · `radialTex` | 加法光晕 sprite · 地面接触阴影 |
| `kit.js` | `worldUV(geo, tile)` · `mat(canvas, o)` · `mesh(geo, m)` · `box(w,h,d,m)` | 按法线的平面 UV,保证纹素密度恒定(`tile = canvas.width / 24` m) |
| | `mats()` | 缓存的 `plank, plankDark, beam, wall, wall2, wall3, roof, roof2, roof3` |
| | `house({x,z,w,d,h,wall,roof,door,windows,upper,side,chimney,ry})` | 带自发光窗户的木骨房子(`g.userData.windows`) |
| | `crate(s)` · `barrel(r,h)` · `fire(size,{seed,i})` · `windowQuad` · `ridge(wM,hM,col,seed)` | 道具;`fire.userData.update(t, cam, scale)` |
| `fx.js` | `sky({top,mid,hor,moonDir,moonCol})` → `{mesh,u}` | 渐变穹顶 + 月亮光晕;`u.k` = 亮度 |
| | `stars(n, seed)` · `sea(size,{ppm,deep,shallow,crest})` → `{mesh,u,setLights([{p,c,i}])}` | 每帧设 `u.t`、`u.camPos`、雾 uniforms、`u.bright`、`u.calm` |
| | `particles(n, fn(i,t,o), {soft, blend})` | 确定性 CPU 粒子;`fn` 填充 `o.x,y,z,a,s,r,g,b`;调用 `.userData.update(t)` |
| | `rain(n, box, {speed,len,opacity})` · `.userData.update(t, [windX,0])` | 倾斜雨丝 |
| | `beamCard(len, w0, w1, col, {k, fall})` · `.userData.aim(origin, dir, cam)` → 侧面因子 | 永不露出侧边的光束 |
| | `flick(t, seed)` | 火焰闪烁乘数 ≈ 1 ± .2 |
| `chars.js` | `makeChar('wren'|'keeper', extraPoses)` → `{root, mesh, frame(name), face(cam, flip), lanternPos(name, flip)}` | 34×50 px 图集 + 自发光图集(灯笼玻璃);`root.userData.char` 是移轴跟踪器寻找的目标 |
| `post_ts.js` | `makePost(renderer, scene, cam, w, h, {ssaa, ao})` → `{composer, dof, bloom, vig}` | `dof.focus`(m)、`dof.aper`(px·m)、`dof.maxCoc`(px)、`dof.tiltAmt/tiltC/tiltW/tiltF`;`vig.uniforms.amt/warm/sat/contrast/fade` |
| `ui.js` | `drawOverlay(t, shot)` · `overlayReady()` | 读取 `story.js` 的 `VO` 和 `voices/dur.json` |
| `/core/lib.js` | `track(keys)` · `monotone` · `seg` · `ss` · `eio` · `eo` · `lerp` · `clamp` | 相机路径与缓动 |

### 最小的新布景
```js
// myset.js — 一条灯笼照亮的小巷;在 main.js 注册:sets.alley = buildAlley(); SET_OF.alley = 'alley'; 向 story.js 的 SHOTS 加 { id:'alley', a, b }
import * as THREE from 'three';
import { cobbles, glow } from './px.js';
import { mat, mesh, house } from './kit.js';
import { sky, particles, flick } from './fx.js';
import { makeChar } from './chars.js';
import { track, seg, ss } from '/core/lib.js';

export function buildAlley() {
  const scene = new THREE.Scene(); scene.fog = new THREE.FogExp2('#16223a', .03);
  const SK = sky(); scene.add(SK.mesh);
  const moon = new THREE.DirectionalLight('#8fa8e0', 1.1); moon.position.set(-20, 30, -20); moon.castShadow = true; moon.shadow.mapSize.set(2048, 2048);
  scene.add(moon, new THREE.HemisphereLight('#3a4c7a', '#0a0a12', .9));
  scene.add(mesh(new THREE.BoxGeometry(30, .4, 12).translate(0, -.2, 0), mat(cobbles(96, 96))));
  scene.add(house({ x: -4, z: -5, w: 6, d: 5, h: 4.5, door: 1.2 }), house({ x: 4, z: -5, w: 5, d: 5, h: 5, wall: 'wall3', roof: 'roof2' }));
  const hero = makeChar('wren'); scene.add(hero.root);
  const lamp = new THREE.PointLight('#ffb050', 3, 10, 2); lamp.castShadow = true; lamp.shadow.bias = -.004; scene.add(lamp);
  const halo = glow('#ffc070', 1.1, 1.2); scene.add(halo);
  const fill = new THREE.PointLight('#9fb2e8', 1.5, 7, 2); scene.add(fill);                 // 冷色正面补光:绝不省略
  const dust = particles(80, (i, t, o) => { o.x = (i * 7.3 % 20) - 10 + t * .1; o.y = (i * 3.1 % 4); o.z = (i * 5.7 % 6) - 3; o.a = .3; o.s = .05; o.r = .7; o.g = .8; o.b = 1; }, { soft: 1 });
  scene.add(dust);
  const camP = track([[0, [-2, 5.5, 10]], [8, [2, 5, 9]]]), camL = track([[0, [-1, .8, 0]], [8, [2, .8, 0]]]);

  function update(t, shot, cam, post) {
    const lt = t - shot.a;
    cam.position.set(...camP(lt)); cam.fov = 30; cam.updateProjectionMatrix(); cam.lookAt(...camL(lt));
    const x = -3 + ss(seg(lt, .5, 7.5)) * 6, walking = lt > .5 && lt < 7.5;
    hero.root.position.set(x, 0, 0); hero.frame(walking ? ['w0', 'w1', 'w2', 'w3'][Math.floor(t * 9) % 4] : 'idle0'); hero.face(cam);
    const lp = hero.lanternPos('w0'), toCam = cam.position.clone().sub(lp).setY(0).normalize();
    lamp.position.copy(lp).addScaledVector(toCam, .45); lamp.intensity = 2.6 * flick(t, 3); halo.position.copy(lp);   // 灯朝镜头方向偏移 0.45 m
    fill.position.set(x + .4, 1.6, 2.2);
    dust.userData.update(t);
    post.dof.focus = cam.position.distanceTo(hero.root.position.clone().setY(.7)); post.dof.aper = 350; post.dof.maxCoc = 22;
  }
  return { scene, update };
}
```
然后用 `node core/render/still.mjs styles/hd-2d/demo <t> --q 'tilt=1&only=alley'` 检查(在 `main.js` 的 `ONLY` 开关中加入 `alley`)。

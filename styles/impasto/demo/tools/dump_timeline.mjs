// export the music grid for the Python score/mix
import fs from 'fs';
const m = await import('../timeline.js');
const out = new URL('../out/timeline.json', import.meta.url);
fs.mkdirSync(new URL('../out/', import.meta.url), { recursive: true });
fs.writeFileSync(out, JSON.stringify({ T: m.T, A: m.A, B: m.B, BEAT_A: m.BEAT_A, BEAT_B: m.BEAT_B, NA: m.NA, NB: m.NB, POPS: m.POPS, CHORDS_B: m.CHORDS_B, DUR: m.DUR, TB: Array.from({ length: 17 }, (_, i) => m.TB(i)) }, null, 1));
console.log('ok');

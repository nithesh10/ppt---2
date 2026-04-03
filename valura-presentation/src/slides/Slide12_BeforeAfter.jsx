import { motion } from 'framer-motion';
import { useEffect } from 'react';
// Standalone pie for this slide — pre-computed slices
function SplitPie({ slices, size = 110, delay = 0 }) {
  const cx = 50, cy = 50, r = 42;
  let angle = 0;
  const paths = slices.map((s) => {
    const startAngle = angle;
    const sweep = (s.percent / 100) * 360;
    angle += sweep;
    const endAngle = angle;
    const rad1 = ((startAngle - 90) * Math.PI) / 180;
    const rad2 = ((endAngle - 90) * Math.PI) / 180;
    const x1 = cx + r * Math.cos(rad2);
    const y1 = cy + r * Math.sin(rad2);
    const x2 = cx + r * Math.cos(rad1);
    const y2 = cy + r * Math.sin(rad1);
    const large = sweep > 180 ? 1 : 0;
    return { ...s, d: `M ${cx} ${cy} L ${x1} ${y1} A ${r} ${r} 0 ${large} 0 ${x2} ${y2} Z` };
  });

  return (
    <svg width={size} height={size} viewBox="0 0 100 100">
      {paths.map((p, i) => (
        <motion.path
          key={i}
          d={p.d}
          fill={p.color}
          stroke="#060d08"
          strokeWidth="0.8"
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 0.9, scale: 1 }}
          transition={{ delay: delay + i * 0.08, duration: 0.4 }}
          style={{ transformOrigin: '50% 50%' }}
        />
      ))}
      <circle cx={cx} cy={cy} r={14} fill="#060d08" />
    </svg>
  );
}

export default function Slide12_BeforeAfter({ phase, registerPhases, slideIndex }) {
  useEffect(() => { registerPhases(slideIndex, 1); }, [registerPhases, slideIndex]);

  const beforeSlices = [{ percent: 100, color: '#5a7d66' }];
  const afterSlices = [
    { percent: 25, color: '#2ba84a' },
    { percent: 20, color: '#3ec95e' },
    { percent: 18, color: '#c9a84c' },
    { percent: 17, color: '#8b5cf6' },
    { percent: 12, color: '#ec4899' },
    { percent: 8, color: '#06b6d4' },
  ];

  return (
    <div className="w-full h-full flex items-center justify-center px-16">
      <div className="max-w-5xl w-full">
        <motion.h2
          className="text-2xl md:text-3xl font-bold text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Same Client. <span className="text-primary">Completely Different</span> Outcome.
        </motion.h2>

        <div className="grid grid-cols-2 gap-8">
          {/* BEFORE */}
          <motion.div
            className="bg-bg-card rounded-2xl border border-danger/20 p-8 relative overflow-hidden"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <div className="absolute top-0 left-0 w-1 h-full bg-danger/50 rounded-l-2xl" />
            <div className="text-xs font-bold uppercase tracking-[0.2em] text-danger mb-5">BEFORE</div>

            <div className="flex justify-center mb-4">
              <SplitPie slices={beforeSlices} size={100} delay={0.4} />
            </div>
            <div className="text-center text-sm text-text-muted mb-5">100% US Equities</div>

            <div className="space-y-3">
              {['No expert guidance', 'Only US equities', '~10% per annum', 'High concentration risk'].map((t, i) => (
                <motion.div key={i} className="flex items-center gap-2"
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 + i * 0.08 }}>
                  <span className="text-danger text-sm">✕</span>
                  <span className="text-text-muted text-sm">{t}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* AFTER */}
          {phase >= 1 ? (
            <motion.div
              className="bg-bg-card rounded-2xl border border-primary/30 p-8 relative overflow-hidden"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-primary rounded-l-2xl" />
              <div className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-5">AFTER — WITH VALURA</div>

              <div className="flex justify-center mb-4">
                <SplitPie slices={afterSlices} size={100} />
              </div>
              <div className="text-center text-sm text-primary mb-5">6 Asset Classes</div>

              <div className="space-y-3">
                {['Full global diversification', 'Expert research & guidance', 'Better risk-adjusted returns', 'True wealth building'].map((t, i) => (
                  <motion.div key={i} className="flex items-center gap-2"
                    initial={{ opacity: 0, x: 15 }} animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.15 + i * 0.1 }}>
                    <span className="text-primary text-sm">✓</span>
                    <span className="text-text-primary text-sm font-medium">{t}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ) : (
            <div className="flex items-center justify-center">
              <motion.div className="text-text-muted text-lg"
                animate={{ opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 2, repeat: Infinity }}>
                Click to reveal...
              </motion.div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

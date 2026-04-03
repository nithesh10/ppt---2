import { motion } from 'framer-motion';
import { useEffect } from 'react';
import MiniPieChart from '../components/MiniPieChart';

const features = [
  { icon: '⚙️', title: 'Sophisticated Design', desc: 'Customized investment vehicles' },
  { icon: '🛡️', title: 'Risk Management', desc: 'Built-in downside protection' },
  { icon: '📈', title: 'Enhanced Returns', desc: 'Optimized return profiles' },
];

export default function Slide10_Structured({ phase, registerPhases, slideIndex }) {
  useEffect(() => { registerPhases(slideIndex, 2); }, [registerPhases, slideIndex]);

  return (
    <div className="w-full h-full flex items-center justify-center px-16">
      <div className="max-w-5xl w-full">
        <div className="flex items-start justify-between gap-10">
          <div className="flex-1">
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              Global <span style={{ color: '#06b6d4' }}>Structured Products</span>
            </motion.h2>

            <div className="space-y-3 mb-6">
              {features.map((f, i) => (
                <motion.div
                  key={f.title}
                  className="bg-bg-card border border-border rounded-xl px-5 py-4 flex items-center gap-4"
                  initial={{ opacity: 0, x: -25 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + i * 0.12, type: 'spring' }}
                >
                  <span className="text-2xl">{f.icon}</span>
                  <div>
                    <div className="text-base font-semibold text-text-primary">{f.title}</div>
                    <div className="text-xs text-text-muted">{f.desc}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            {phase >= 1 && (
              <div className="space-y-2">
                {['Completely integrated into the platform', 'From basic stocks to complex products — all in one place'].map((pt, i) => (
                  <motion.div key={i} className="flex items-center gap-3"
                    initial={{ opacity: 0, x: -15 }} animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.12 }}>
                    <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: '#06b6d4' }} />
                    <span className="text-text-secondary text-sm">{pt}</span>
                  </motion.div>
                ))}
              </div>
            )}

            {phase >= 2 && (
              <motion.div
                className="mt-6 border-l-2 border-[#c9a84c]/50 bg-[#c9a84c]/5 rounded-r-xl px-6 py-4"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1, duration: 0.5 }}
              >
                <p className="text-[#c9a84c]/90 italic text-base leading-relaxed">
                  &ldquo;Ek hi platform pe aapko basic stocks se lekar complex structured products tak sab milta hai. Kuch bhi bahar dhoondne ki zaroorat nahi.&rdquo;
                </p>
              </motion.div>
            )}
          </div>

          <motion.div className="flex-shrink-0" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3 }}>
            <MiniPieChart highlightIndex={5} size={130} />
            <p className="text-center text-xs mt-2 font-medium" style={{ color: '#06b6d4' }}>Structured</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

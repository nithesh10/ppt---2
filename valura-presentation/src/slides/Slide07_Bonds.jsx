import { motion } from 'framer-motion';
import { useEffect } from 'react';
import MiniPieChart from '../components/MiniPieChart';

export default function Slide07_Bonds({ phase, registerPhases, slideIndex }) {
  useEffect(() => { registerPhases(slideIndex, 2); }, [registerPhases, slideIndex]);

  const fractions = ['$100', '$500', '$1K', '$250'];

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
              Global Bonds & <span className="text-accent">Fixed Income</span>
            </motion.h2>

            {/* Fractional bond visual */}
            <motion.div
              className="bg-bg-card border border-border rounded-xl p-6 mb-6"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div className="flex items-center gap-6">
                {/* Big bond */}
                <motion.div
                  className="w-24 h-24 rounded-lg border-2 border-accent/40 bg-accent/5 flex flex-col items-center justify-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 0.4, scale: 1 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                >
                  <span className="text-accent font-bold text-sm">$100K</span>
                  <span className="text-accent/60 text-xs">BOND</span>
                </motion.div>

                {/* Arrow */}
                <motion.div
                  className="text-accent/50 text-2xl"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                >
                  →
                </motion.div>

                {/* Fractional pieces */}
                <div className="grid grid-cols-2 gap-2">
                  {fractions.map((f, i) => (
                    <motion.div
                      key={f}
                      className="w-16 h-12 rounded-md border border-accent/30 bg-accent/10 flex items-center justify-center"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 1 + i * 0.12, type: 'spring' }}
                    >
                      <span className="text-accent font-bold text-xs">{f}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
              <motion.p
                className="text-xs text-text-muted mt-3 text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
              >
                Premium bonds, fractioned for everyone
              </motion.p>
            </motion.div>

            {/* Phase 1 */}
            {phase >= 1 && (
              <div className="space-y-2">
                {['Fractional global bonds — no massive minimum', 'Premium corporate bonds accessible at a fraction', 'Previously institutional-only — now retail'].map((pt, i) => (
                  <motion.div key={i} className="flex items-center gap-3"
                    initial={{ opacity: 0, x: -15 }} animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.12 }}>
                    <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                    <span className="text-text-secondary text-sm">{pt}</span>
                  </motion.div>
                ))}
              </div>
            )}

            {/* Phase 2 */}
            {phase >= 2 && (
              <motion.div
                className="mt-6 border-l-2 border-[#c9a84c]/50 bg-[#c9a84c]/5 rounded-r-xl px-6 py-4"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1, duration: 0.5 }}
              >
                <p className="text-[#c9a84c]/90 italic text-base leading-relaxed">
                  &ldquo;Yeh pehle sirf bade institutions ke liye tha. Ab aapke retail client ke liye bhi available hai! Unhe ab hedge fund hone ki zaroorat nahi hai.&rdquo;
                </p>
              </motion.div>
            )}
          </div>

          <motion.div className="flex-shrink-0" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3 }}>
            <MiniPieChart highlightIndex={2} size={130} />
            <p className="text-center text-xs text-accent mt-2 font-medium">Bonds</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

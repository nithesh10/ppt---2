import { motion } from 'framer-motion';
import { useEffect } from 'react';
import MiniPieChart from '../components/MiniPieChart';

const baskets = [
  { name: 'AI Portfolio', icon: '🤖', desc: 'Top AI & tech companies globally' },
  { name: 'S&P 500 Tracker', icon: '📈', desc: 'The benchmark US market index' },
  { name: 'Clean Energy', icon: '🌱', desc: 'Sustainable stocks across 15 countries' },
];

export default function Slide06_ETFs({ phase, registerPhases, slideIndex }) {
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
              Global <span className="text-primary-light">ETFs</span>
            </motion.h2>

            {/* Thematic basket cards */}
            <div className="space-y-3 mb-6">
              {baskets.map((b, i) => (
                <motion.div
                  key={b.name}
                  className="bg-bg-card border border-border rounded-xl px-5 py-4 flex items-center gap-4"
                  initial={{ opacity: 0, x: -25 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + i * 0.12, type: 'spring' }}
                >
                  <span className="text-2xl">{b.icon}</span>
                  <div>
                    <div className="text-base font-semibold text-text-primary">{b.name}</div>
                    <div className="text-xs text-text-muted">{b.desc}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Phase 1 */}
            {phase >= 1 && (
              <div className="space-y-2">
                {['One-click thematic portfolios', 'Custom baskets & model portfolios', 'Any theme, any geography — one click'].map((pt, i) => (
                  <motion.div key={i} className="flex items-center gap-3"
                    initial={{ opacity: 0, x: -15 }} animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.12 }}>
                    <div className="w-1.5 h-1.5 rounded-full bg-primary-light" />
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
                  &ldquo;Aapko jo theme chahiye, uski basket ready hai. Aap apne client ke liye minute mein thematic portfolio bana sakte hain.&rdquo;
                </p>
              </motion.div>
            )}
          </div>

          <motion.div className="flex-shrink-0" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3 }}>
            <MiniPieChart highlightIndex={1} size={130} />
            <p className="text-center text-xs text-primary-light mt-2 font-medium">ETFs</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

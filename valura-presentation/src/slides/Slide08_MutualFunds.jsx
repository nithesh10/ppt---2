import { motion } from 'framer-motion';
import { useEffect } from 'react';
import MiniPieChart from '../components/MiniPieChart';

export default function Slide08_MutualFunds({ phase, registerPhases, slideIndex }) {
  useEffect(() => { registerPhases(slideIndex, 2); }, [registerPhases, slideIndex]);

  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];

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
              International <span style={{ color: '#8b5cf6' }}>Mutual Funds</span>
            </motion.h2>

            {/* SIP visual */}
            <motion.div
              className="bg-bg-card border border-border rounded-xl p-5 mb-6"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div className="text-xs text-text-muted uppercase tracking-wider mb-3">Monthly SIP — Automated Global Investing</div>
              <div className="flex items-end gap-2">
                {months.map((m, i) => (
                  <motion.div
                    key={m}
                    className="flex-1 flex flex-col items-center"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + i * 0.08 }}
                  >
                    <motion.div
                      className="w-full rounded-md flex items-center justify-center text-xs font-medium"
                      style={{
                        backgroundColor: '#8b5cf620',
                        color: '#8b5cf6',
                        height: `${24 + i * 6}px`,
                      }}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: `${24 + i * 6}px`, opacity: 1 }}
                      transition={{ delay: 0.5 + i * 0.1, duration: 0.4 }}
                    >
                      {m}
                    </motion.div>
                  </motion.div>
                ))}
                <motion.span className="text-text-muted text-sm ml-1"
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}>
                  ...
                </motion.span>
              </div>
              <motion.p className="mt-3 text-center text-sm font-medium" style={{ color: '#8b5cf6' }}
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}>
                Recurring &bull; Automated &bull; Simple
              </motion.p>
            </motion.div>

            {/* Phase 1 */}
            {phase >= 1 && (
              <div className="space-y-2">
                {['Monthly SIP into global mutual funds', 'Recurring, automated, and simple', 'No one else in India offers this'].map((pt, i) => (
                  <motion.div key={i} className="flex items-center gap-3"
                    initial={{ opacity: 0, x: -15 }} animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.12 }}>
                    <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: '#8b5cf6' }} />
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
                  &ldquo;Aap soch rahe honge — yeh toh koi nahi de raha? Bilkul sahi, Valura ke alawa market mein koi nahi de raha.&rdquo;
                </p>
              </motion.div>
            )}
          </div>

          <motion.div className="flex-shrink-0" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3 }}>
            <MiniPieChart highlightIndex={3} size={130} />
            <p className="text-center text-xs mt-2 font-medium" style={{ color: '#8b5cf6' }}>Mutual Funds</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

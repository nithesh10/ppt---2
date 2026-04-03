import { motion } from 'framer-motion';
import { useEffect } from 'react';
import MiniPieChart from '../components/MiniPieChart';

const companies = [
  { name: 'Apple', ticker: 'AAPL', initial: 'A' },
  { name: 'Google', ticker: 'GOOGL', initial: 'G' },
  { name: 'Nvidia', ticker: 'NVDA', initial: 'N' },
  { name: 'Tesla', ticker: 'TSLA', initial: 'T' },
];

const points = [
  '90+ markets — US, Europe, Asia',
  'Fractional shares — start from $10',
  'Custody sits in India',
];

export default function Slide05_Equities({ phase, registerPhases, slideIndex }) {
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
              Global <span className="text-primary">Equities</span>
            </motion.h2>

            {/* Company cards */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              {companies.map((c, i) => (
                <motion.div
                  key={c.name}
                  className="bg-bg-card border border-border rounded-lg px-4 py-3 flex items-center gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + i * 0.1, type: 'spring' }}
                >
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center text-sm font-bold bg-primary/15 text-primary">
                    {c.initial}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-text-primary">{c.name}</div>
                    <div className="text-xs text-text-muted">{c.ticker}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Phase 1: Key points */}
            {phase >= 1 && (
              <div className="space-y-2">
                {points.map((pt, i) => (
                  <motion.div
                    key={i}
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: -15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.12 }}
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
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
                  &ldquo;Fractional shares ka matlab hai aap dus dollar se shuru kar sakte hain. ₹1000 mein Berkshire Hathaway ka shareholder banna ab reality hai!&rdquo;
                </p>
              </motion.div>
            )}
          </div>

          {/* Mini pie highlight */}
          <motion.div
            className="flex-shrink-0"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
          >
            <MiniPieChart highlightIndex={0} size={130} />
            <p className="text-center text-xs text-primary mt-2 font-medium">Equities</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

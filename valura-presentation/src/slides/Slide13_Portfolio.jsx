import { motion } from 'framer-motion';
import { useEffect } from 'react';

const allocations = [
  { label: '3 US Stocks — Apple, Nvidia, Microsoft', amount: '₹1.5L', percent: 30, color: '#2ba84a' },
  { label: 'Fractional Global Corporate Bond', amount: '₹1L', percent: 20, color: '#c9a84c' },
  { label: 'S&P 500 ETF', amount: '₹1L', percent: 20, color: '#3ec95e' },
  { label: 'International Mutual Fund SIP', amount: '₹1L', percent: 20, color: '#8b5cf6' },
  { label: 'Pre-IPO Allocation', amount: '₹50K', percent: 10, color: '#ec4899' },
];

export default function Slide13_Portfolio({ phase, registerPhases, slideIndex }) {
  useEffect(() => { registerPhases(slideIndex, 2); }, [registerPhases, slideIndex]);

  return (
    <div className="w-full h-full flex items-center justify-center px-16">
      <div className="max-w-4xl w-full">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <span className="text-accent">₹5 Lakhs.</span> Fully Diversified. <span className="text-primary">Done.</span>
        </motion.h2>

        <motion.p className="text-text-secondary text-center mb-8"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
          Watch what we can build right now.
        </motion.p>

        {/* Portfolio allocation bars */}
        <div className="space-y-3 mb-6">
          {allocations.map((a, i) => (
            <motion.div
              key={a.label}
              className="flex items-center gap-4"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 + i * 0.15 }}
            >
              <div className="w-14 text-right shrink-0">
                <span className="text-sm font-bold" style={{ color: a.color }}>{a.amount}</span>
              </div>
              <div className="flex-1 h-11 rounded-lg bg-bg-card border border-border overflow-hidden relative">
                {/* Animated fill bar */}
                <motion.div
                  className="absolute top-0 left-0 h-full rounded-lg"
                  style={{ backgroundColor: a.color + '25' }}
                  initial={{ width: '0%' }}
                  animate={{ width: `${a.percent}%` }}
                  transition={{ delay: 0.6 + i * 0.15, duration: 0.8, ease: 'easeOut' }}
                />
                {/* Left accent stripe */}
                <div className="absolute top-0 left-0 w-1 h-full rounded-l-lg" style={{ backgroundColor: a.color }} />
                {/* Label text */}
                <div className="absolute inset-0 flex items-center pl-4">
                  <motion.span className="text-xs text-text-secondary font-medium"
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 + i * 0.15 }}>
                    {a.label}
                  </motion.span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Phase 1: Total */}
        {phase >= 1 && (
          <motion.div
            className="bg-bg-card border border-primary/30 rounded-xl p-5 text-center"
            initial={{ opacity: 0, y: 15, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ type: 'spring' }}
          >
            <div className="text-xs text-text-muted uppercase tracking-wider mb-1">Total Investment</div>
            <div className="text-3xl font-bold text-primary">₹5,00,000</div>
            <div className="w-full h-1.5 rounded-full bg-border mt-3 overflow-hidden">
              <motion.div
                className="h-full rounded-full"
                style={{ background: 'linear-gradient(90deg, #2ba84a, #c9a84c, #3ec95e, #8b5cf6, #ec4899)' }}
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ delay: 0.3, duration: 1.2 }}
              />
            </div>
            <p className="text-sm text-primary mt-3 font-medium">5 asset classes. One platform. Live today.</p>
          </motion.div>
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
              &ldquo;Aur yeh sirf theory nahi hai. Aaj ke aaj, abhi ke abhi aap unka yeh portfolio live kar sakte hain.&rdquo;
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
}

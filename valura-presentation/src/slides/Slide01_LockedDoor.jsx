import { motion } from 'framer-motion';
import { useEffect } from 'react';

export default function Slide01_LockedDoor({ phase, registerPhases, slideIndex }) {
  useEffect(() => { registerPhases(slideIndex, 2); }, [registerPhases, slideIndex]);

  const markets = ['Wall Street', 'European Bonds', 'Private Markets', 'Pre-IPO Deals'];

  return (
    <div className="w-full h-full flex items-center justify-center px-20">
      <div className="flex flex-col items-center max-w-4xl">
        {/* Door SVG with lock */}
        <motion.div
          className="relative mb-10"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, type: 'spring' }}
        >
          <svg width="160" height="240" viewBox="0 0 160 240">
            {/* Door frame */}
            <rect x="8" y="8" width="144" height="224" rx="10" fill="#0c1a0f" stroke="#1a3322" strokeWidth="2" />
            {/* Door surface */}
            <rect x="16" y="16" width="128" height="208" rx="6" fill="#0f1810" stroke="#1a3322" strokeWidth="1" />
            {/* Door panels */}
            <rect x="28" y="32" width="104" height="80" rx="4" fill="none" stroke="#1a3322" strokeWidth="1" />
            <rect x="28" y="128" width="104" height="80" rx="4" fill="none" stroke="#1a3322" strokeWidth="1" />
            {/* Lock body */}
            <rect x="120" y="120" width="20" height="24" rx="4" fill="#ef444430" stroke="#ef4444" strokeWidth="1.5" />
            {/* Lock shackle */}
            <path d="M124 120 V112 A6 6 0 0 1 136 112 V120" fill="none" stroke="#ef4444" strokeWidth="1.5" />
            {/* Keyhole glow */}
            <motion.circle
              cx="130" cy="130" r="3"
              fill="#ef4444"
              animate={{ opacity: [0.4, 1, 0.4], filter: ['blur(0px)', 'blur(2px)', 'blur(0px)'] }}
              transition={{ duration: 2.5, repeat: Infinity }}
            />
            {/* Red X overlay */}
            <motion.g
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.15 }}
              transition={{ delay: 1 }}
            >
              <line x1="40" y1="40" x2="120" y2="200" stroke="#ef4444" strokeWidth="3" />
              <line x1="120" y1="40" x2="40" y2="200" stroke="#ef4444" strokeWidth="3" />
            </motion.g>
          </svg>
        </motion.div>

        {/* Markets appearing one by one */}
        <div className="flex flex-wrap gap-3 justify-center mb-8">
          {markets.map((market, i) => (
            <motion.span
              key={market}
              className="text-lg md:text-xl font-light tracking-wide"
              style={{ color: '#94b8a3' }}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 0.7, y: 0 }}
              transition={{ delay: 0.4 + i * 0.25, duration: 0.5 }}
            >
              {market}.
            </motion.span>
          ))}
        </div>

        {/* Phase 1 */}
        {phase >= 1 && (
          <motion.p
            className="text-2xl md:text-3xl font-bold text-text-primary text-center leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            All of it existed. <span className="text-danger">None of it was accessible.</span>
          </motion.p>
        )}

        {/* Phase 2 */}
        {phase >= 2 && (
          <motion.p
            className="text-xl text-text-muted mt-6 text-center"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            For decades, the door to global investing was completely
            <span className="text-danger font-semibold"> locked </span>
            for Indian investors.
          </motion.p>
        )}
      </div>
    </div>
  );
}

import { motion } from 'framer-motion';
import { useEffect } from 'react';

export default function Slide02_Keyhole({ phase, registerPhases, slideIndex }) {
  useEffect(() => { registerPhases(slideIndex, 2); }, [registerPhases, slideIndex]);

  return (
    <div className="w-full h-full flex items-center justify-center px-20">
      <div className="flex flex-col items-center max-w-4xl">
        {/* Keyhole with glow */}
        <motion.div
          className="relative mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <svg width="180" height="180" viewBox="0 0 180 180">
            {/* Door panel */}
            <rect x="20" y="10" width="140" height="160" rx="10" fill="#0f1810" stroke="#1a3322" strokeWidth="1.5" />
            {/* Keyhole outer glow */}
            <motion.circle
              cx="90" cy="85" r="30"
              fill="none" stroke="#2ba84a"
              strokeWidth="0.5"
              animate={{ opacity: [0.1, 0.4, 0.1], r: [28, 32, 28] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            {/* Keyhole shape */}
            <circle cx="90" cy="75" r="14" fill="#060d08" />
            <path d="M82 85 L90 125 L98 85 Z" fill="#060d08" />
            {/* Glow inside keyhole */}
            <motion.circle
              cx="90" cy="75" r="10"
              fill="#2ba84a"
              opacity={0.15}
              animate={{ opacity: [0.1, 0.3, 0.1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            {/* What you can see: tiny US flag + ETF text */}
            {phase >= 1 && (
              <motion.g initial={{ opacity: 0 }} animate={{ opacity: 0.7 }} transition={{ duration: 0.5 }}>
                <text x="84" y="78" fontSize="7" fill="#2ba84a" fontWeight="bold">US</text>
                <text x="84" y="88" fontSize="5" fill="#5a7d66">ETF</text>
              </motion.g>
            )}
          </svg>
        </motion.div>

        {/* Opening text */}
        <motion.p
          className="text-xl md:text-2xl text-text-secondary text-center mb-6 leading-relaxed"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          Then some apps arrived. And everyone got excited.
          <br />
          <motion.span
            className="text-text-muted"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            But what they actually gave you...
          </motion.span>
          <br />
          <motion.span
            className="text-text-primary font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            was a peep through the keyhole.
          </motion.span>
        </motion.p>

        {/* Phase 1 */}
        {phase >= 1 && (
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <p className="text-lg text-text-muted">
              US stocks. Maybe a couple of ETFs. <span className="text-text-secondary">That's it.</span>
            </p>
          </motion.div>
        )}

        {/* Phase 2 */}
        {phase >= 2 && (
          <motion.p
            className="text-2xl md:text-3xl font-bold text-text-primary text-center mt-8"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            They called it global investing.
            <br />
            <span className="text-danger">It was one asset class.</span>
          </motion.p>
        )}
      </div>
    </div>
  );
}

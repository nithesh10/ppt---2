import { motion } from 'framer-motion';
import { useEffect } from 'react';

const assetClasses = [
  { name: 'Global Equities', icon: '📈', color: '#2ba84a' },
  { name: 'Global ETFs', icon: '📊', color: '#3ec95e' },
  { name: 'Bonds & Fixed Income', icon: '🏦', color: '#c9a84c' },
  { name: 'Mutual Funds', icon: '💰', color: '#8b5cf6' },
  { name: 'Pre-IPO', icon: '🚀', color: '#ec4899' },
  { name: 'Structured Products', icon: '⚙️', color: '#06b6d4' },
];

export default function Slide03_DoorOpens({ phase, registerPhases, slideIndex }) {
  useEffect(() => { registerPhases(slideIndex, 2); }, [registerPhases, slideIndex]);

  return (
    <div className="w-full h-full flex items-center justify-center px-20">
      <div className="flex flex-col items-center max-w-5xl w-full">
        {/* Door opening animation */}
        <motion.div className="relative mb-6">
          <svg width="220" height="160" viewBox="0 0 220 160">
            {/* Door frame */}
            <rect x="50" y="5" width="120" height="150" rx="8" fill="none" stroke="#2ba84a" strokeWidth="2" />
            {/* Left door swinging open */}
            <motion.rect
              x="50" y="5" width="60" height="150" rx="4"
              fill="#0f1810" stroke="#1a332240"
              initial={{ scaleX: 1 }}
              animate={{ scaleX: 0.1 }}
              style={{ transformOrigin: '50px 80px' }}
              transition={{ duration: 1.2, ease: 'easeOut' }}
            />
            {/* Right door swinging open */}
            <motion.rect
              x="110" y="5" width="60" height="150" rx="4"
              fill="#0f1810" stroke="#1a332240"
              initial={{ scaleX: 1 }}
              animate={{ scaleX: 0.1 }}
              style={{ transformOrigin: '170px 80px' }}
              transition={{ duration: 1.2, ease: 'easeOut' }}
            />
            {/* Light burst */}
            <motion.ellipse
              cx="110" cy="80" rx="45" ry="65"
              fill="url(#doorGlow)"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 0.9, 0.6] }}
              transition={{ duration: 1.5, delay: 0.4 }}
            />
            <defs>
              <radialGradient id="doorGlow">
                <stop offset="0%" stopColor="#2ba84a" stopOpacity="0.5" />
                <stop offset="50%" stopColor="#c9a84c" stopOpacity="0.2" />
                <stop offset="100%" stopColor="transparent" stopOpacity="0" />
              </radialGradient>
            </defs>
          </svg>
        </motion.div>

        {/* Killer one-liner */}
        <motion.h1
          className="text-3xl md:text-5xl font-bold text-center mb-4 leading-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.7 }}
        >
          Others showed you the keyhole.
          <br />
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Valura opens the door.
          </span>
        </motion.h1>

        {/* Phase 1: All 6 asset classes */}
        {phase >= 1 && (
          <motion.div
            className="grid grid-cols-3 md:grid-cols-6 gap-4 mt-8 w-full max-w-4xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            {assetClasses.map((ac, i) => (
              <motion.div
                key={ac.name}
                className="flex flex-col items-center gap-2 p-4 rounded-xl border"
                style={{ backgroundColor: ac.color + '08', borderColor: ac.color + '25' }}
                initial={{ opacity: 0, y: 25, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: i * 0.12, duration: 0.4, type: 'spring' }}
              >
                <span className="text-2xl">{ac.icon}</span>
                <span className="text-xs text-center font-medium" style={{ color: ac.color }}>
                  {ac.name}
                </span>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Phase 2: Full platform message */}
        {phase >= 2 && (
          <motion.div
            className="mt-8 text-center"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <p className="text-lg text-text-secondary">
              Not a keyhole. Not a crack. The <span className="text-primary font-semibold">whole door</span>. Wide open.
            </p>
            <motion.div
              className="mt-4 inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-6 py-3"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
            >
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-primary font-medium text-sm">Every Asset Class. Every Market.</span>
            </motion.div>
          </motion.div>
        )}
      </div>
    </div>
  );
}

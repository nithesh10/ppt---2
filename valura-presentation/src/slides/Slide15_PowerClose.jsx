import { motion } from 'framer-motion';
import { useEffect } from 'react';

const assetClasses = [
  { name: 'Global Equities', icon: '📈', color: '#2ba84a' },
  { name: 'ETFs', icon: '📊', color: '#3ec95e' },
  { name: 'Bonds', icon: '🏦', color: '#c9a84c' },
  { name: 'Mutual Funds', icon: '💰', color: '#8b5cf6' },
  { name: 'Pre-IPO', icon: '🚀', color: '#ec4899' },
  { name: 'Structured Products', icon: '⚙️', color: '#06b6d4' },
];

export default function Slide15_PowerClose({ phase, registerPhases, slideIndex }) {
  useEffect(() => { registerPhases(slideIndex, 2); }, [registerPhases, slideIndex]);

  return (
    <div className="w-full h-full flex items-center justify-center px-16">
      <div className="max-w-4xl w-full text-center">
        {/* Logo */}
        <motion.div
          className="mb-6"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <img src="/Valura_Logo_Green.png" alt="Valura" className="w-16 h-16 mx-auto rounded-xl" />
        </motion.div>

        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          One Platform. <span className="text-primary">Everything.</span>
        </motion.h2>

        {/* Asset class grid converging */}
        <div className="grid grid-cols-3 md:grid-cols-6 gap-4 mb-8">
          {assetClasses.map((ac, i) => (
            <motion.div
              key={ac.name}
              className="flex flex-col items-center gap-2"
              initial={{
                opacity: 0,
                x: (i % 2 === 0 ? -1 : 1) * 50,
                y: (i < 3 ? -1 : 1) * 30,
                scale: 0.5,
              }}
              animate={{ opacity: 1, x: 0, y: 0, scale: 1 }}
              transition={{ delay: 0.3 + i * 0.1, type: 'spring', stiffness: 120 }}
            >
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl border"
                style={{ backgroundColor: ac.color + '12', borderColor: ac.color + '30' }}
              >
                {ac.icon}
              </div>
              <div className="flex items-center gap-1">
                <motion.span className="text-sm" style={{ color: ac.color }}
                  initial={{ scale: 0 }} animate={{ scale: [0, 1.2, 1] }}
                  transition={{ delay: 0.6 + i * 0.1, duration: 0.3 }}>
                  ✓
                </motion.span>
                <span className="text-xs text-text-secondary">{ac.name}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Phase 1: Tagline */}
        {phase >= 1 && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <motion.div
              className="mx-auto h-px mb-6"
              style={{ background: 'linear-gradient(90deg, transparent, #2ba84a, #c9a84c, #2ba84a, transparent)' }}
              initial={{ width: 0 }} animate={{ width: 350 }} transition={{ duration: 0.8 }}
            />
            <p className="text-lg text-text-secondary mb-4">
              One Dashboard. One Experience. Everything in one place.
            </p>
            <motion.h1
              className="text-4xl md:text-6xl font-bold"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                This is Valura.
              </span>
            </motion.h1>
            <motion.p className="text-base text-text-muted mt-3"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}>
              A complete global investment ecosystem
            </motion.p>
          </motion.div>
        )}

        {/* Phase 2: Hindi closing quote */}
        {phase >= 2 && (
          <motion.div className="mt-5" initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }}>
            <motion.div
              className="mt-6 border-l-2 border-[#c9a84c]/50 bg-[#c9a84c]/5 rounded-r-xl px-6 py-4"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
            >
              <p className="text-[#c9a84c]/90 italic text-base leading-relaxed">
                &ldquo;No multiple apps. No multiple logins. Ek dashboard. Ek experience. Sab kuch ek hi jagah.&rdquo;
              </p>
            </motion.div>
          </motion.div>
        )}
      </div>
    </div>
  );
}

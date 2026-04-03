import { motion } from 'framer-motion';

export default function SpeakerTag({ speaker, delay = 0 }) {
  const isNithesh = speaker === 'Nithesh';
  return (
    <motion.div
      className="flex items-center gap-2 mb-4"
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay, duration: 0.4 }}
    >
      <div
        className="w-2 h-2 rounded-full"
        style={{ backgroundColor: isNithesh ? '#2ba84a' : '#c9a84c' }}
      />
      <span
        className="text-xs font-bold uppercase tracking-[0.2em]"
        style={{ color: isNithesh ? '#2ba84a' : '#c9a84c' }}
      >
        {isNithesh ? 'NITHESH — CIO' : 'APEKSHA — Head of Design'}
      </span>
    </motion.div>
  );
}

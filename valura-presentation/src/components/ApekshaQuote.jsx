import { motion } from 'framer-motion';
import SpeakerTag from './SpeakerTag';

export default function ApekshaQuote({ text, delay = 0 }) {
  return (
    <motion.div
      className="mt-6 border-l-2 border-accent/50 bg-accent/5 rounded-r-xl px-6 py-4"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay, duration: 0.5 }}
    >
      <SpeakerTag speaker="Apeksha" delay={delay} />
      <p className="text-accent/90 italic text-base leading-relaxed">
        &ldquo;{text}&rdquo;
      </p>
    </motion.div>
  );
}

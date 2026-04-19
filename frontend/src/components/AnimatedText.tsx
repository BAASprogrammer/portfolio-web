import { motion } from "framer-motion"

export default function AnimatedText({ text }: { text: string }) {
  return (
    <div className="flex">
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.1,
            delay: i * 0.05,
            ease: "easeOut"
          }}
          className={char === " " ? "mr-2" : ""}
        >
          {char}
        </motion.span>
      ))}
    </div>
  )
}
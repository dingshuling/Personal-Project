"use client"

import { motion } from "framer-motion"

export default function AboutSection() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          variants={fadeInUp}
          className="text-center"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">About Me</h2>
          <div className="w-20 h-1 bg-emerald-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            With over 15 years of experience in data, I scaled Tubi’s team from 2 to 17 during 10x growth, helping drive $1B in revenue through insights, experimentation, and personalization.
            I believe that in today’s AI-first world, data strategy is product strategy. It’s not just about building AI-powered apps—it’s about designing intelligent data flows from day one.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

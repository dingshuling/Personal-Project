"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function BlogHeader() {
  return (
    <section className="bg-gradient-to-b from-emerald-50 to-white dark:from-gray-900 dark:to-gray-950 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto"
        >
          <Link
            href="/"
            className="inline-flex items-center text-emerald-600 hover:text-emerald-700 dark:text-emerald-400 dark:hover:text-emerald-300 mb-4"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Health Tech <span className="text-emerald-600 dark:text-emerald-400">Insights</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Thoughts, strategies, and analysis on AI, data science, and the future of health technology from my Medium
            blog.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

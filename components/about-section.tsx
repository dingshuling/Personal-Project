"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Brain, Database, LineChart, Lightbulb, Users, Award } from "lucide-react"

export default function AboutSection() {
  const skills = [
    { name: "Python", category: "Programming" },
    { name: "SQL", category: "Programming" },
    { name: "R", category: "Programming" },
    { name: "Classification", category: "Machine Learning" },
    { name: "Regression", category: "Machine Learning" },
    { name: "Forecasting", category: "Machine Learning" },
    { name: "Causal Inference", category: "Machine Learning" },
    { name: "CNNs", category: "AI & Deep Learning" },
    { name: "RNNs", category: "AI & Deep Learning" },
    { name: "Transformers", category: "AI & Deep Learning" },
    { name: "Generative AI", category: "AI & Deep Learning" },
    { name: "LLMs", category: "AI & Deep Learning" },
    { name: "Data Pipelines", category: "Data Engineering" },
    { name: "ETL", category: "Data Engineering" },
    { name: "Data Governance", category: "Data Engineering" },
    { name: "Data Strategy", category: "Leadership" },
    { name: "Roadmap Planning", category: "Leadership" },
    { name: "Cross-Functional Collaboration", category: "Leadership" },
  ]

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
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">About Me</h2>
          <div className="w-20 h-1 bg-emerald-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            With over 15 years of hands-on experience building and scaling high-performing data science teams, I'm now
            focused on applying my expertise to drive impactful data strategies and accelerate growth at ambitious
            health-tech startups.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            variants={fadeInUp}
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">My Expertise</h3>
            <div className="space-y-6">
              {[
                {
                  icon: <Brain className="h-6 w-6 text-emerald-500" />,
                  title: "AI Strategy & Implementation",
                  description:
                    "Developing and executing AI strategies that align with business goals and drive measurable outcomes.",
                },
                {
                  icon: <Database className="h-6 w-6 text-emerald-500" />,
                  title: "Data Democratization",
                  description:
                    "Creating frameworks and tools that make data accessible, accurate, and usable across organizations.",
                },
                {
                  icon: <LineChart className="h-6 w-6 text-emerald-500" />,
                  title: "Predictive Analytics",
                  description:
                    "Building models to forecast customer behaviors, identify key drivers, and optimize product performance.",
                },
                {
                  icon: <Lightbulb className="h-6 w-6 text-emerald-500" />,
                  title: "Product Vision",
                  description:
                    "Translating data insights into product strategies that enhance user experience and drive growth.",
                },
                {
                  icon: <Users className="h-6 w-6 text-emerald-500" />,
                  title: "Team Building",
                  description:
                    "Scaling high-performing data teams and fostering cultures of cross-functional collaboration.",
                },
              ].map((item, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">{item.icon}</div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">{item.title}</h4>
                    <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            variants={fadeInUp}
          >
            <Card className="border-0 shadow-lg dark:bg-gray-800">
              <CardContent className="p-6">
                <div className="flex items-center mb-6">
                  <Award className="h-8 w-8 text-emerald-500 mr-3" />
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Skills & Expertise</h3>
                </div>

                <div className="space-y-4">
                  {["Programming", "Machine Learning", "AI & Deep Learning", "Data Engineering", "Leadership"].map(
                    (category) => (
                      <div key={category}>
                        <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">{category}</h4>
                        <div className="flex flex-wrap gap-2">
                          {skills
                            .filter((skill) => skill.category === category)
                            .map((skill, index) => (
                              <Badge
                                key={index}
                                variant="secondary"
                                className="bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200"
                              >
                                {skill.name}
                              </Badge>
                            ))}
                        </div>
                      </div>
                    ),
                  )}
                </div>

                <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                  <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">Education</h4>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                    <li>Master in Operations Research, University of Texas at Austin</li>
                    <li>Master in Industrial Engineering, Tsinghua University</li>
                    <li>Bachelor in Electronics Information Science and Technology, China University of Geosciences</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

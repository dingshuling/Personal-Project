"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, Briefcase } from "lucide-react"

export default function ExperienceSection() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

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

  const experiences = [
    {
      title: "Data Leader, Self Employed",
      subtitle: "AI & Personal Health Focus",
      period: "Jan 2025 - Present",
      description:
        "Partnering with pre-seed startups to develop data integration frameworks and AI roadmaps. Focusing on consumer wellness applications and AI-driven health optimization.",
      borderColor: "border-l-blue-400",
    },
    {
      title: "Senior Director of Data Science, Tubi",
      subtitle: "Hypergrowth Data Leadership",
      period: "Aug 2017 - Aug 2024",
      description:
        "Led data team growth from 2 to 17 members during Tubi's 10x expansion. Established scalable A/B testing framework generating $30-40M additional revenue through experimentation. Built ML models for customer behavior prediction and content optimization.",
      borderColor: "border-l-blue-500",
    },
    {
      title: "Senior Data Scientist, Chegg",
      subtitle: "AI-Powered Education Platform",
      period: "Aug 2015 - Jul 2017",
      description:
        "Developed customer lifetime value models driving 5-10% increase in product cross-sell and marketing efficiency across all business segments.",
      borderColor: "border-l-blue-600",
    },
    {
      title: "Manager, Pricing & Marketing Analytics, Expedia/Hotwire",
      subtitle: "Travel Industry Analytics",
      period: "Apr 2011 - Mar 2015",
      description:
        "Managed team of 3 analysts creating pricing A/B tests that drove 10% year-over-year revenue increase. Enhanced search click-through rate by 5% through systematic experimentation.",
      borderColor: "border-l-blue-700",
    },
  ]

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Experience Highlights Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          variants={fadeInUp}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Experience Highlights</h2>
          <div className="w-20 h-1 bg-emerald-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Over 14 years of experience building and leading data teams across health tech, media, education, and travel
            industries.
          </p>
        </motion.div>

        <div className="space-y-6 mb-20">
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              variants={fadeInUp}
            >
              <Card className="overflow-hidden border-0 shadow-md dark:bg-gray-800">
                <CardContent className={`p-6 border-l-4 ${experience.borderColor}`}>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">{experience.title}</h3>
                      <p className="text-emerald-600 dark:text-emerald-400 font-medium">{experience.subtitle}</p>
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400 mt-2 md:mt-0">
                      <Briefcase className="inline-block h-4 w-4 mr-1" />
                      {experience.period}
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">{experience.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Skills Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          variants={fadeInUp}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Skills & Expertise</h2>
          <div className="w-20 h-1 bg-emerald-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Technical and leadership skills developed across multiple industries and roles.
          </p>
        </motion.div>

        <Card className="border-0 shadow-lg dark:bg-gray-800">
          <CardContent className="p-6">
            <div className="flex items-center mb-6">
              <Award className="h-8 w-8 text-emerald-500 mr-3" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Technical & Leadership Skills</h3>
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
      </div>
    </section>
  )
}

"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, Briefcase, Code, Users, TrendingUp, Target } from "lucide-react"

export default function ExperienceSection() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  const highlights = [
    {
      icon: <Users className="h-6 w-6 text-emerald-500" />,
      title: "Team Leadership",
      description:
        "Expanded global data team from 2 to 17 members, fostering cross-functional collaboration and continuous learning culture",
    },
    {
      icon: <TrendingUp className="h-6 w-6 text-emerald-500" />,
      title: "Revenue Impact",
      description:
        "Generated $30-$40M additional revenue in 2023 through switchback experimentation and contributed to Tubi's 10x growth",
    },
    {
      icon: <Target className="h-6 w-6 text-emerald-500" />,
      title: "A/B Testing Framework",
      description:
        "Established scalable testing framework resulting in hundreds of experiments per quarter, driving product development",
    },
    {
      icon: <Code className="h-6 w-6 text-emerald-500" />,
      title: "Data Democratization",
      description:
        "Implemented AI-driven automation tools like Text-to-SQL for broader data access and improved usability organization-wide",
    },
  ]

  const technologies = [
    { name: "Python", category: "Programming" },
    { name: "SQL", category: "Programming" },
    { name: "TensorFlow", category: "AI/ML" },
    { name: "ChatGPT", category: "AI/ML" },
    { name: "MLlib", category: "AI/ML" },
    { name: "Scikit-Learn", category: "AI/ML" },
    { name: "AWS", category: "Cloud/Infrastructure" },
    { name: "Redshift", category: "Cloud/Infrastructure" },
    { name: "Airflow", category: "Cloud/Infrastructure" },
    { name: "Tableau", category: "Analytics" },
    { name: "Pandas", category: "Analytics" },
    { name: "dbt", category: "Analytics" },
    { name: "Flask", category: "Development" },
  ]

  const experiences = [
    {
      title: "Data Leader",
      company: "Self Employed",
      period: "Jan 2025 - Present",
      focus: "Personal Health • Artificial Intelligence",
      description: "Partnering with pre-seed startups to develop data integration frameworks and AI roadmaps.",
      borderColor: "border-l-emerald-500",
    },
    {
      title: "Senior Director of Data Science",
      company: "Tubi",
      period: "Aug 2017 - Aug 2024",
      focus: "B2C • Content • Digital Media",
      description:
        "Led machine learning models for customer behavior prediction, content performance, and revenue growth. Collaborated with top management on data strategy and company roadmap.",
      borderColor: "border-l-blue-500",
    },
    {
      title: "Senior Data Scientist",
      company: "Chegg",
      period: "Aug 2015 - Jul 2017",
      focus: "AI-Powered Education Platform",
      description:
        "Developed customer lifetime value models driving 5-10% increase in product cross-sell and marketing efficiency across all business segments.",
      borderColor: "border-l-purple-500",
    },
    {
      title: "Manager, Pricing & Marketing Analytics",
      company: "Expedia/Hotwire",
      period: "Apr 2011 - Mar 2015",
      focus: "Travel Industry",
      description:
        "Managed team of 3 analysts creating pricing A/B tests that drove 10% year-over-year revenue increase. Enhanced search click-through rate by 5%.",
      borderColor: "border-l-orange-500",
    },
  ]

  const strengths = [
    "Prototype ideas and align data strategy with business goals",
    "Drive cross-functional collaboration across teams",
    "Champion best practices and support teammates with thoughtful guidance",
    "Build AI products and data-intensive applications",
    "Focus on product roadmaps and strategy",
  ]

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Experience Highlights and Skills</h2>
          <div className="w-20 h-1 bg-emerald-500 mx-auto mb-8"></div>
        </motion.div>

        {/* Key Highlights */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          variants={fadeInUp}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">Key Achievements</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {highlights.map((highlight, index) => (
              <Card key={index} className="border-0 shadow-md dark:bg-gray-800">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 p-2 bg-emerald-100 dark:bg-emerald-900 rounded-lg">
                      {highlight.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{highlight.title}</h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">{highlight.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* Work Experience */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          variants={fadeInUp}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">Professional Experience</h3>
          <div className="space-y-6">
            {experiences.map((experience, index) => (
              <Card key={index} className="overflow-hidden border-0 shadow-md dark:bg-gray-800">
                <CardContent className={`p-6 border-l-4 ${experience.borderColor}`}>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 dark:text-white">{experience.title}</h4>
                      <p className="text-emerald-600 dark:text-emerald-400 font-medium">{experience.company}</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{experience.focus}</p>
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400 mt-2 md:mt-0 flex items-center">
                      <Briefcase className="inline-block h-4 w-4 mr-1" />
                      {experience.period}
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">{experience.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* Technical Skills */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          variants={fadeInUp}
          className="mb-16"
        >
          <Card className="border-0 shadow-lg dark:bg-gray-800">
            <CardContent className="p-6">
              <div className="flex items-center mb-6">
                <Award className="h-8 w-8 text-emerald-500 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Technical Skills</h3>
              </div>

              <div className="space-y-4">
                {["Programming", "AI/ML", "Cloud/Infrastructure", "Analytics", "Development"].map((category) => (
                  <div key={category}>
                    <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">{category}</h4>
                    <div className="flex flex-wrap gap-2">
                      {technologies
                        .filter((tech) => tech.category === category)
                        .map((tech, index) => (
                          <Badge
                            key={index}
                            variant="secondary"
                            className="bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200"
                          >
                            {tech.name}
                          </Badge>
                        ))}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Core Strengths */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          variants={fadeInUp}
        >
          <Card className="border-0 shadow-lg dark:bg-gray-800">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">Core Strengths</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {strengths.map((strength, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3 flex-shrink-0"></div>
                    <p className="text-gray-600 dark:text-gray-300">{strength}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Education */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          variants={fadeInUp}
          className="mt-16"
        >
          <Card className="border-0 shadow-lg dark:bg-gray-800">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">Education</h3>
              <div className="space-y-4">
                <div className="text-center">
                  <p className="font-semibold text-gray-900 dark:text-white">Master in Operations Research</p>
                  <p className="text-gray-600 dark:text-gray-300">University of Texas at Austin</p>
                </div>
                <div className="text-center">
                  <p className="font-semibold text-gray-900 dark:text-white">Master in Industrial Engineering</p>
                  <p className="text-gray-600 dark:text-gray-300">Tsinghua University</p>
                </div>
                <div className="text-center">
                  <p className="font-semibold text-gray-900 dark:text-white">
                    Bachelor in Electronics Information Science and Technology
                  </p>
                  <p className="text-gray-600 dark:text-gray-300">China University of Geosciences</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

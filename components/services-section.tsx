"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Brain, LineChart, Database, Lightbulb, Users, Target } from "lucide-react"

export default function ServicesSection() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  const services = [
    {
      icon: <Brain className="h-12 w-12 text-emerald-500" />,
      title: "AI Strategy Development",
      description:
        "Crafting comprehensive AI strategies tailored to your health tech startup's unique needs, goals, and growth stage.",
      benefits: [
        "Identify high-impact AI opportunities",
        "Develop implementation roadmaps",
        "Align AI initiatives with business goals",
        "Prioritize initiatives for maximum ROI",
      ],
    },
    {
      icon: <Database className="h-12 w-12 text-emerald-500" />,
      title: "Data Infrastructure & Governance",
      description:
        "Building robust data foundations that enable scalable growth and ensure data quality, accessibility, and compliance.",
      benefits: [
        "Design scalable data architectures",
        "Implement data quality frameworks",
        "Create data governance policies",
        "Enable self-service analytics",
      ],
    },
    {
      icon: <LineChart className="h-12 w-12 text-emerald-500" />,
      title: "Predictive Analytics & Insights",
      description:
        "Leveraging advanced analytics to uncover actionable insights and predict user behaviors, trends, and outcomes.",
      benefits: [
        "Develop customer behavior models",
        "Create predictive health insights",
        "Optimize user engagement",
        "Identify growth opportunities",
      ],
    },
    {
      icon: <Target className="h-12 w-12 text-emerald-500" />,
      title: "Experimentation & Optimization",
      description:
        "Designing and implementing robust experimentation frameworks to accelerate product development and optimize outcomes.",
      benefits: [
        "Build A/B testing frameworks",
        "Design causal inference models",
        "Optimize user experiences",
        "Measure intervention effectiveness",
      ],
    },
    {
      icon: <Lightbulb className="h-12 w-12 text-emerald-500" />,
      title: "Product Strategy & Innovation",
      description:
        "Translating data insights into innovative product strategies that enhance user experience and drive growth.",
      benefits: [
        "Identify product opportunities",
        "Develop data-driven roadmaps",
        "Prioritize feature development",
        "Measure product performance",
      ],
    },
    {
      icon: <Users className="h-12 w-12 text-emerald-500" />,
      title: "Team Building & Mentorship",
      description:
        "Helping you build and scale high-performing data and AI teams through recruitment, training, and mentorship.",
      benefits: [
        "Develop hiring strategies",
        "Create training programs",
        "Establish best practices",
        "Foster data-driven culture",
      ],
    },
  ]

  return (
    <section id="services" className="py-20 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">How I Can Help</h2>
          <div className="w-20 h-1 bg-emerald-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            I offer specialized services to help health and wellness startups leverage AI and data to accelerate growth,
            optimize operations, and create impactful solutions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              variants={fadeInUp}
            >
              <Card className="h-full border-0 shadow-md hover:shadow-lg transition-shadow duration-300 dark:bg-gray-800">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white text-center mb-4">{service.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">{service.description}</p>
                  <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                    <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">Key Benefits:</h4>
                    <ul className="space-y-1">
                      {service.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-center text-gray-600 dark:text-gray-300">
                          <div className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></div>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          variants={fadeInUp}
          className="mt-16 text-center"
        >
          <Button
            size="lg"
            className="bg-emerald-600 hover:bg-emerald-700 text-white"
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            Let's Discuss Your Needs
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Brain, Zap, Target, SnowflakeIcon as Crystal, BarChart3, Handshake } from "lucide-react"

export default function AccomplishmentsSection() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  const expertise = [
    {
      category: "strategy",
      title: "AI-First Data Strategy",
      description:
        "Design intelligent data flows from day one that power personalization, prediction, and product intelligence. I architect data foundations that make AI products successful, not just functional.",
      icon: <Brain className="h-10 w-10 text-emerald-500" />,
    },
    {
      category: "scaling",
      title: "Hypergrowth Scaling",
      description:
        "Proven experience scaling data systems and teams through 10x growth. I know what breaks at different scales and how to build infrastructure that evolves with your startup.",
      icon: <Zap className="h-10 w-10 text-emerald-500" />,
    },
    {
      category: "experimentation",
      title: "Experimentation Frameworks",
      description:
        "Build systematic A/B testing capabilities that drive hundreds of experiments per quarter. I focus on frameworks that actually influence product decisions and business outcomes.",
      icon: <Target className="h-10 w-10 text-emerald-500" />,
    },
    {
      category: "analytics",
      title: "Predictive Analytics",
      description:
        "Develop machine learning models that anticipate user behavior, predict customer lifetime value, and identify growth opportunities. Turn historical data into forward-looking business intelligence.",
      icon: <Crystal className="h-10 w-10 text-emerald-500" />,
    },
    {
      category: "democratization",
      title: "Data Democratization",
      description:
        "Create self-service analytics tools and automated reporting that empower entire teams to make data-driven decisions. Transform complex data into accessible insights that drive real business value.",
      icon: <BarChart3 className="h-10 w-10 text-emerald-500" />,
    },
    {
      category: "leadership",
      title: "Cross-Functional Leadership",
      description:
        "Bridge the gap between technical data capabilities and business strategy. I translate complex data insights into actionable strategies for product, marketing, and executive teams.",
      icon: <Handshake className="h-10 w-10 text-emerald-500" />,
    },
  ]

  return (
    <section id="accomplishments" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Core Expertise</h2>
          <div className="w-20 h-1 bg-emerald-500 mx-auto mb-8"></div>
        </motion.div>

        <Tabs defaultValue="all" className="w-full">
          <div className="flex justify-center mb-12">
            <TabsList className="bg-white dark:bg-gray-800 shadow-md">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="strategy">Strategy</TabsTrigger>
              <TabsTrigger value="scaling">Scaling</TabsTrigger>
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="all" className="mt-0">
            <div className="max-w-5xl mx-auto">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {expertise.map((item, index) => (
                  <ExpertiseCard key={index} item={item} index={index} />
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="strategy" className="mt-0">
            <div className="max-w-5xl mx-auto">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {expertise
                  .filter((item) => ["strategy", "leadership"].includes(item.category))
                  .map((item, index) => (
                    <ExpertiseCard key={index} item={item} index={index} />
                  ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="scaling" className="mt-0">
            <div className="max-w-5xl mx-auto">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {expertise
                  .filter((item) => ["scaling", "democratization"].includes(item.category))
                  .map((item, index) => (
                    <ExpertiseCard key={index} item={item} index={index} />
                  ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="analytics" className="mt-0">
            <div className="max-w-5xl mx-auto">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {expertise
                  .filter((item) => ["analytics", "experimentation"].includes(item.category))
                  .map((item, index) => (
                    <ExpertiseCard key={index} item={item} index={index} />
                  ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}

function ExpertiseCard({ item, index }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
      }}
    >
      <Card className="h-full overflow-hidden hover:shadow-lg transition-all duration-300 border-0 shadow-md dark:bg-gray-800 hover:scale-105">
        <CardContent className="p-6 text-center">
          <div className="flex justify-center mb-4">{item.icon}</div>
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 leading-tight">{item.title}</h3>
          <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{item.description}</p>
        </CardContent>
      </Card>
    </motion.div>
  )
}

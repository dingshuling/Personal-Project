"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { TrendingUp, Target, Lightbulb, Users, BarChart } from "lucide-react"

export default function AccomplishmentsSection() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  const accomplishments = [
    {
      category: "growth",
      title: "10x Growth Contribution",
      description:
        "Contributed to Tubi's 10x growth by designing, building, and deploying machine learning models to forecast customer behaviors and identify key drivers in product engagement, content performance, and revenue growth.",
      icon: <TrendingUp className="h-10 w-10 text-emerald-500" />,
      metrics: ["10x company growth", "17-member global data team", "$30-40M additional revenue"],
    },
    {
      category: "growth",
      title: "Revenue Optimization",
      description:
        "Led a team of analysts to design and execute pricing A/B tests at Hotwire, driving 10% YOY revenue growth and increasing hotel bookings by 15% through partnership pricing strategies.",
      icon: <BarChart className="h-10 w-10 text-emerald-500" />,
      metrics: ["10% YOY revenue growth", "15% increase in hotel bookings"],
    },
    {
      category: "innovation",
      title: "Scalable A/B Experimentation Framework",
      description:
        "Developed a framework enabling hundreds of experiments per quarter, accelerating product development and generating $30-40M in additional revenue in 2023 through the switchback experimentation framework.",
      icon: <Target className="h-10 w-10 text-emerald-500" />,
      metrics: ["Hundreds of experiments per quarter", "$30-40M additional revenue"],
    },
    {
      category: "innovation",
      title: "AI-Powered Automation Tools",
      description:
        "Developed and deployed AI-powered automation tools to improve efficiency and enhance data democratization, including streamlining customer support workflows, building Text-to-SQL tools, creating metrics alert systems, and automating planning tools.",
      icon: <Lightbulb className="h-10 w-10 text-emerald-500" />,
      metrics: ["Streamlined support workflows", "Enhanced data accessibility", "Automated planning tools"],
    },
    {
      category: "leadership",
      title: "Data Team Scaling",
      description:
        "Scaled a global data team from 2 to 17 members at Tubi, nurturing a culture of cross-functional collaboration and continuous learning while working closely with executive leadership to build data strategy and company roadmap.",
      icon: <Users className="h-10 w-10 text-emerald-500" />,
      metrics: [
        "Scaled from 2 to 17 team members",
        "Cross-functional collaboration",
        "Executive leadership partnership",
      ],
    },
    {
      category: "leadership",
      title: "Data Democratization",
      description:
        "Facilitated data democratization by streamlining data structure and creating self-service tools to enhance data accessibility, accuracy, and usability across the organization.",
      icon: <Users className="h-10 w-10 text-emerald-500" />,
      metrics: ["Enhanced data accessibility", "Improved data accuracy", "Organization-wide usability"],
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
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Key Accomplishments</h2>
          <div className="w-20 h-1 bg-emerald-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Throughout my career, I've delivered measurable results and innovative solutions that drive growth,
            efficiency, and data-driven decision making.
          </p>
        </motion.div>

        <Tabs defaultValue="all" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="bg-white dark:bg-gray-800">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="growth">Growth</TabsTrigger>
              <TabsTrigger value="innovation">Innovation</TabsTrigger>
              <TabsTrigger value="leadership">Leadership</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="all" className="mt-0">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {accomplishments.map((item, index) => (
                <AccomplishmentCard key={index} item={item} index={index} />
              ))}
            </div>
          </TabsContent>

          {["growth", "innovation", "leadership"].map((category) => (
            <TabsContent key={category} value={category} className="mt-0">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {accomplishments
                  .filter((item) => item.category === category)
                  .map((item, index) => (
                    <AccomplishmentCard key={index} item={item} index={index} />
                  ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}

function AccomplishmentCard({ item, index }) {
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
      <Card className="h-full overflow-hidden hover:shadow-lg transition-shadow duration-300 border-0 shadow-md dark:bg-gray-800">
        <CardContent className="p-6">
          <div className="flex justify-center mb-4">{item.icon}</div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white text-center mb-4">{item.title}</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6">{item.description}</p>
          <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
            <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">Key Metrics:</h4>
            <ul className="space-y-1">
              {item.metrics.map((metric, i) => (
                <li key={i} className="flex items-center text-gray-600 dark:text-gray-300">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></div>
                  {metric}
                </li>
              ))}
            </ul>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

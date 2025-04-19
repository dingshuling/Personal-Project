"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, ArrowRight, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { getBlogPosts } from "@/lib/blog"
import { useEffect, useState } from "react"

export default function FeaturedPosts() {
  const [posts, setPosts] = useState(getBlogPosts().slice(0, 3))

  useEffect(() => {
    // Fetch Medium posts on the client side
    async function fetchMediumPosts() {
      try {
        // Use a simple fetch with error handling
        const response = await fetch("/api/medium-posts")
        if (!response.ok) {
          throw new Error(`Failed to fetch Medium posts: ${response.status}`)
        }

        const mediumPosts = await response.json()

        // Combine local and Medium posts, sort by date, and take the 3 most recent
        const allPosts = [...getBlogPosts(), ...mediumPosts]
          .sort((a, b) => {
            const dateA = new Date(a.date)
            const dateB = new Date(b.date)
            return dateB.getTime() - dateA.getTime()
          })
          .slice(0, 3)

        setPosts(allPosts)
      } catch (error) {
        console.error("Error fetching Medium posts:", error)
        // Fallback to local posts only if there's an error
        setPosts(getBlogPosts().slice(0, 3))
      }
    }

    fetchMediumPosts()
  }, [])

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Latest Insights</h2>
          <div className="w-20 h-1 bg-emerald-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Explore my thoughts on AI, data science, and the future of health technology
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.div
              key={post.slug}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              variants={fadeInUp}
            >
              <Card className="h-full overflow-hidden hover:shadow-lg transition-shadow duration-300 border-0 shadow-md dark:bg-gray-800">
                <div className="relative h-48 bg-emerald-100 dark:bg-emerald-900">
                  {post.coverImage && (
                    <img
                      src={post.coverImage || "/placeholder.svg"}
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                  )}
                  {post.isExternal && (
                    <div className="absolute top-2 right-2">
                      <Badge
                        variant="secondary"
                        className="bg-white text-emerald-800 dark:bg-gray-800 dark:text-emerald-200"
                      >
                        <ExternalLink className="h-3 w-3 mr-1" />
                        Medium
                      </Badge>
                    </div>
                  )}
                </div>
                <CardContent className="p-6">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {post.categories.map((category) => (
                      <Badge
                        key={category}
                        variant="secondary"
                        className="capitalize bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200"
                      >
                        {category}
                      </Badge>
                    ))}
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    {post.isExternal ? (
                      <a
                        href={post.externalUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                      >
                        {post.title}
                      </a>
                    ) : (
                      <Link
                        href={`/blog/${post.slug}`}
                        className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                      >
                        {post.title}
                      </Link>
                    )}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">{post.excerpt}</p>

                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>{post.date}</span>
                    </div>
                  </div>

                  {post.isExternal ? (
                    <a
                      href={post.externalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-emerald-600 hover:text-emerald-700 dark:text-emerald-400 dark:hover:text-emerald-300"
                    >
                      Read on Medium <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  ) : (
                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center text-emerald-600 hover:text-emerald-700 dark:text-emerald-400 dark:hover:text-emerald-300"
                    >
                      Read More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  )}
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
          className="mt-12 text-center"
        >
          <Link href="/blog">
            <Button variant="outline" size="lg">
              View All Articles
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, ArrowRight, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export default function BlogList({ posts }) {
  const [selectedCategory, setSelectedCategory] = useState("all")

  // Get unique categories
  const categories = ["all", ...new Set(posts.flatMap((post) => post.categories))]

  // Filter posts by selected category
  const filteredPosts =
    selectedCategory === "all" ? posts : posts.filter((post) => post.categories.includes(selectedCategory))

  return (
    <section className="py-16 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex flex-wrap justify-center gap-2">
          {categories.map((category) => (
            <Badge
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              className={`text-sm cursor-pointer capitalize ${
                selectedCategory === category
                  ? "bg-emerald-600 hover:bg-emerald-700"
                  : "hover:bg-emerald-100 dark:hover:bg-emerald-900"
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Badge>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post, index) => (
            <BlogCard key={post.slug} post={post} index={index} />
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 dark:text-gray-400">No posts found in this category.</p>
          </div>
        )}
      </div>
    </section>
  )
}

function BlogCard({ post, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="h-full overflow-hidden hover:shadow-lg transition-shadow duration-300 border-0 shadow-md dark:bg-gray-800 flex flex-col">
        <div className="relative h-48 bg-emerald-100 dark:bg-emerald-900">
          {post.coverImage && (
            <img src={post.coverImage || "/placeholder.svg"} alt={post.title} className="w-full h-full object-cover" />
          )}
          {post.isExternal && (
            <div className="absolute top-2 right-2">
              <Badge variant="secondary" className="bg-white text-emerald-800 dark:bg-gray-800 dark:text-emerald-200">
                <ExternalLink className="h-3 w-3 mr-1" />
                Medium
              </Badge>
            </div>
          )}
        </div>
        <CardContent className="p-6 flex-grow flex flex-col">
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

          <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">{post.excerpt}</p>

          <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
            <div className="flex items-center mr-4">
              <Calendar className="h-4 w-4 mr-1" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-1" />
              <span>{post.readingTime} min read</span>
            </div>
          </div>

          {post.isExternal ? (
            <a href={post.externalUrl} target="_blank" rel="noopener noreferrer" className="mt-auto">
              <Button variant="outline" className="w-full">
                Read on Medium <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </a>
          ) : (
            <Link href={`/blog/${post.slug}`} className="mt-auto">
              <Button variant="outline" className="w-full">
                Read More <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          )}
        </CardContent>
      </Card>
    </motion.div>
  )
}

"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, ArrowLeft, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import RelatedPosts from "./related-posts"
import { getBlogPosts } from "@/lib/blog"

export default function BlogPost({ post }) {
  const allPosts = getBlogPosts()

  return (
    <div className="pt-16">
      <div className="bg-gradient-to-b from-emerald-50 to-white dark:from-gray-900 dark:to-gray-950 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <Link href="/blog">
              <Button variant="ghost" className="mb-6">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Blog
              </Button>
            </Link>

            <div className="flex flex-wrap gap-2 mb-4">
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

            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">{post.title}</h1>

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

            {post.author && (
              <div className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                By <span className="font-medium">{post.author}</span>
              </div>
            )}

            {post.isExternal && (
              <div className="mb-8">
                <a
                  href={post.externalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-emerald-600 hover:text-emerald-700 dark:text-emerald-400 dark:hover:text-emerald-300"
                >
                  Read the full article on Medium
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </div>
            )}
          </motion.div>
        </div>
      </div>

      {post.coverImage && (
        <div className="relative h-96 w-full max-w-5xl mx-auto -mt-8 mb-12 px-4">
          <img
            src={post.coverImage || "/placeholder.svg"}
            alt={post.title}
            className="w-full h-full object-cover rounded-xl shadow-xl"
          />
        </div>
      )}

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="prose prose-emerald dark:prose-invert max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {post.isExternal && (
          <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800">
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              This is a preview of the article. To read the full article, please visit:
            </p>
            <a
              href={post.externalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
            >
              Read Full Article on Medium
              <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </div>
        )}

        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Share this article</h3>
          <div className="flex space-x-4">
            <Button variant="outline" size="sm">
              Twitter
            </Button>
            <Button variant="outline" size="sm">
              LinkedIn
            </Button>
            <Button variant="outline" size="sm">
              Facebook
            </Button>
          </div>
        </div>

        <RelatedPosts currentPost={post} posts={allPosts} />
      </div>
    </div>
  )
}

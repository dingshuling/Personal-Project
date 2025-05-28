import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, ExternalLink } from "lucide-react"

export default function RelatedPosts({ currentPost, posts }) {
  // Filter out the current post and get up to 3 related posts
  // First try to match by category, then just get the most recent
  const relatedPosts = posts
    .filter((post) => post.slug !== currentPost.slug)
    .filter((post) => post.categories.some((category) => currentPost.categories.includes(category)))
    .slice(0, 3)

  // If we don't have 3 related posts by category, add some recent posts
  const recentPosts = posts
    .filter((post) => post.slug !== currentPost.slug)
    .filter((post) => !relatedPosts.some((relatedPost) => relatedPost.slug === post.slug))
    .slice(0, 3 - relatedPosts.length)

  const allRelatedPosts = [...relatedPosts, ...recentPosts]

  if (allRelatedPosts.length === 0) return null

  return (
    <div className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-800">
      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Related Articles</h3>
      <div className="grid md:grid-cols-3 gap-6">
        {allRelatedPosts.map((post) => (
          <Card key={post.slug} className="hover:shadow-md transition-shadow duration-300">
            <CardContent className="p-4">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
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
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2 mb-3">{post.excerpt}</p>
              {post.isExternal ? (
                <a
                  href={post.externalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm inline-flex items-center text-emerald-600 hover:text-emerald-700 dark:text-emerald-400 dark:hover:text-emerald-300"
                >
                  Read on Medium <ExternalLink className="ml-1 h-3 w-3" />
                </a>
              ) : (
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-sm inline-flex items-center text-emerald-600 hover:text-emerald-700 dark:text-emerald-400 dark:hover:text-emerald-300"
                >
                  Read More <ArrowRight className="ml-1 h-3 w-3" />
                </Link>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

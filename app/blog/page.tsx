import BlogHeader from "@/components/blog/blog-header"
import BlogList from "@/components/blog/blog-list"
import { getBlogPosts } from "@/lib/blog"
import { getMediumPosts } from "@/lib/medium"

export const metadata = {
  title: "Blog | Shuling Ding - AI & Data Strategy for Health Tech",
  description: "Insights on AI, data science, and product strategy for health and wellness startups",
}

export const revalidate = 3600 // Revalidate hourly

export default async function BlogPage() {
  // Get local posts
  const localPosts = getBlogPosts()

  // Try to get Medium posts, but handle errors gracefully
  let mediumPosts = []
  try {
    mediumPosts = await getMediumPosts()
  } catch (error) {
    console.error("Error fetching Medium posts:", error)
    // Continue with just local posts if there's an error
  }

  // Combine and sort by date (newest first)
  const allPosts = [...localPosts, ...mediumPosts].sort((a, b) => {
    const dateA = new Date(a.date)
    const dateB = new Date(b.date)
    return dateB.getTime() - dateA.getTime()
  })

  return (
    <div className="pt-16">
      <BlogHeader />
      <BlogList posts={allPosts} />
    </div>
  )
}

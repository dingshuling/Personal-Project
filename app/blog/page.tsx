import BlogHeader from "@/components/blog/blog-header"
import BlogList from "@/components/blog/blog-list"

export const metadata = {
  title: "Blog | Shuling Ding - AI & Data Strategy for Health Tech",
  description: "Insights on AI, data science, and product strategy for health and wellness startups",
}

export const revalidate = 3600 // Revalidate hourly

export default async function BlogPage() {
  // We'll fetch posts client-side in the BlogList component
  return (
    <div className="pt-16">
      <BlogHeader />
      <BlogList posts={[]} />
    </div>
  )
}

import { getBlogPosts, getBlogPost } from "@/lib/blog"
import BlogPost from "@/components/blog/blog-post"
import { notFound } from "next/navigation"

export async function generateMetadata({ params }) {
  const post = getBlogPost(params.slug)

  if (!post) {
    return {
      title: "Post Not Found | Shuling Ding",
    }
  }

  return {
    title: `${post.title} | Shuling Ding`,
    description: post.excerpt,
  }
}

export async function generateStaticParams() {
  const posts = getBlogPosts()

  return posts
    .filter((post) => !post.isExternal) // Only generate static params for internal posts
    .map((post) => ({
      slug: post.slug,
    }))
}

export default function BlogPostPage({ params }) {
  const post = getBlogPost(params.slug)

  if (!post) {
    notFound()
  }

  // If it's an external post, redirect to the external URL
  if (post.isExternal && post.externalUrl) {
    // In a real app, you might want to track this redirect
    // For now, we'll just render the post preview
    return <BlogPost post={post} />
  }

  return <BlogPost post={post} />
}

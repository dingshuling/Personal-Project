// Updated blog lib to fetch from API
export async function getBlogPosts() {
  try {
    // Fetch posts from our API route
    const response = await fetch("/api/medium-posts", { next: { revalidate: 3600 } })

    if (!response.ok) {
      throw new Error(`Failed to fetch posts: ${response.status}`)
    }

    const posts = await response.json()
    return posts
  } catch (error) {
    console.error("Error fetching blog posts:", error)
    return []
  }
}

export function getBlogPost(slug: string) {
  // For Medium posts, redirect to external URL
  return null
}

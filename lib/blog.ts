// Blog posts data - now only serves as fallback, Medium posts are primary
const blogPosts = []

export function getBlogPosts() {
  return blogPosts
}

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug)
}

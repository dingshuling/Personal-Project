// Fetch Medium posts dynamically from RSS feed
export async function getMediumPosts() {
  try {
    // Get Medium username from environment variable or use default
    const mediumUsername = process.env.MEDIUM_USERNAME || "dingshuling"

    // Fetch the RSS feed
    const response = await fetch(`https://medium.com/feed/@${mediumUsername}`, {
      next: { revalidate: 3600 }, // Revalidate hourly
    })

    if (!response.ok) {
      throw new Error(`Failed to fetch Medium posts: ${response.status}`)
    }

    const xml = await response.text()

    // Parse the XML feed
    const posts = await parseRssFeed(xml)
    return posts
  } catch (error) {
    console.error("Error fetching Medium posts:", error)
    // Return empty array on error instead of hardcoded fallbacks
    return []
  }
}

// Parse the RSS feed XML
async function parseRssFeed(xml) {
  try {
    // Use DOMParser in browser or a server-side XML parser
    const parser = new DOMParser()
    const doc = parser.parseFromString(xml, "text/xml")

    const items = doc.querySelectorAll("item")
    const posts = []

    items.forEach((item, index) => {
      // Extract content from RSS item
      const title = item.querySelector("title")?.textContent || ""
      const link = item.querySelector("link")?.textContent || ""
      const pubDate = item.querySelector("pubDate")?.textContent || ""
      const description = item.querySelector("description")?.textContent || ""

      // Extract categories
      const categories = []
      item.querySelectorAll("category").forEach((category) => {
        if (category.textContent) categories.push(category.textContent)
      })

      // Create a slug from the title
      const slug = title
        .toLowerCase()
        .replace(/[^\w\s]/gi, "")
        .replace(/\s+/g, "-")

      // Parse date
      const date = new Date(pubDate)
      const formattedDate = date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })

      // Extract reading time (estimate based on content length)
      const contentText = stripHtml(description)
      const wordCount = contentText.split(/\s+/).length
      const readingTime = Math.max(1, Math.ceil(wordCount / 200)) // Assume 200 words per minute

      // Extract first image as cover or use placeholder
      const coverImage = extractFirstImage(description) || `/placeholder.svg?height=200&width=400&text=Medium+Article`

      posts.push({
        slug,
        title,
        excerpt: truncateText(stripHtml(description), 150),
        date: formattedDate,
        readingTime,
        categories: categories.length > 0 ? categories : ["article"],
        coverImage,
        author: "Shuling Ding",
        isExternal: true,
        externalUrl: link,
      })
    })

    return posts
  } catch (error) {
    console.error("Error parsing RSS feed:", error)
    return []
  }
}

// Helper function to strip HTML tags
function stripHtml(html) {
  const tmp = document.createElement("DIV")
  tmp.innerHTML = html
  return tmp.textContent || tmp.innerText || ""
}

// Helper function to truncate text
function truncateText(text, maxLength) {
  if (text.length <= maxLength) return text
  return text.substr(0, maxLength) + "..."
}

// Helper function to extract the first image from HTML content
function extractFirstImage(html) {
  const match = html.match(/<img[^>]+src="([^">]+)"/)
  return match ? match[1] : null
}

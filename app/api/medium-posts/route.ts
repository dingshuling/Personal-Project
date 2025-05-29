import { NextResponse } from "next/server"
import { XMLParser } from "fast-xml-parser"

// Helper function to strip HTML tags
function stripHtml(html) {
  // Simple regex to remove HTML tags
  return html.replace(/<[^>]*>?/gm, "")
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

export async function GET() {
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

    // Parse the XML feed using fast-xml-parser
    const parser = new XMLParser({
      ignoreAttributes: false,
      attributeNamePrefix: "@_",
    })

    const result = parser.parse(xml)
    const items = result.rss.channel.item || []

    // Ensure items is an array
    const itemsArray = Array.isArray(items) ? items : [items]

    const posts = itemsArray.map((item) => {
      // Extract content from RSS item
      const title = item.title || ""
      const link = item.link || ""
      const pubDate = item.pubDate || ""
      const description = item.description || item["content:encoded"] || ""

      // Extract categories
      const categories = item.category ? (Array.isArray(item.category) ? item.category : [item.category]) : ["article"]

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

      return {
        slug,
        title,
        excerpt: truncateText(stripHtml(description), 150),
        date: formattedDate,
        readingTime,
        categories,
        coverImage,
        author: "Shuling Ding",
        isExternal: true,
        externalUrl: link,
      }
    })

    return NextResponse.json(posts)
  } catch (error) {
    console.error("Error in medium-posts API route:", error)
    return NextResponse.json({ error: "Failed to fetch Medium posts" }, { status: 500 })
  }
}

export const revalidate = 3600 // Revalidate hourly

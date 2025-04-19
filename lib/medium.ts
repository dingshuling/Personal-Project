// Replace the entire file with this updated implementation

export async function getMediumPosts() {
  try {
    // Use a CORS proxy for client-side requests
    const username = "dingshuling" // Replace with your Medium username
    const corsProxy = "https://api.allorigins.win/raw?url="
    const mediumRssUrl = `https://medium.com/feed/@${username}`
    const url = `${corsProxy}${encodeURIComponent(mediumRssUrl)}`

    const response = await fetch(url, { next: { revalidate: 3600 } }) // Revalidate every hour

    if (!response.ok) {
      throw new Error(`Failed to fetch Medium RSS feed: ${response.status}`)
    }

    const xml = await response.text()

    // Simple XML parsing for Medium RSS feed
    const posts = parseRssFeed(xml)
    return posts
  } catch (error) {
    console.error("Error fetching Medium posts:", error)
    return []
  }
}

function parseRssFeed(xml) {
  // Extract items from RSS feed
  const itemRegex = /<item>([\s\S]*?)<\/item>/g
  const items = []
  let match

  while ((match = itemRegex.exec(xml)) !== null) {
    const itemXml = match[1]

    // Extract key elements
    const title = extractTag(itemXml, "title")
    const link = extractTag(itemXml, "link")
    const pubDate = extractTag(itemXml, "pubDate")
    const content = extractTag(itemXml, "content:encoded") || extractTag(itemXml, "description")

    // Extract and clean categories
    const rawCategories = extractAllTags(itemXml, "category")
    const categories = rawCategories.map(cleanCategory).filter(Boolean)

    // Use default categories if none are found or if they're all filtered out
    const finalCategories = categories.length > 0 ? categories : ["health tech"]

    // Extract image from content
    const imageUrl = extractImageFromContent(content)

    // Create excerpt from content
    const excerpt = createExcerpt(content)

    // Format date
    const date = formatDate(pubDate)

    // Calculate reading time (rough estimate)
    const readingTime = Math.ceil(stripHtml(content).length / 1000) || 5

    // Extract guid for slug
    const guid = extractTag(itemXml, "guid")
    const slug = guid.split("/").pop() || `medium-${Date.now()}`

    items.push({
      slug,
      title,
      excerpt,
      date,
      readingTime,
      categories: finalCategories,
      coverImage: imageUrl,
      author: "Shuling Ding",
      isExternal: true,
      externalUrl: link,
    })
  }

  return items
}

function extractTag(xml, tagName) {
  const regex = new RegExp(`<${tagName}[^>]*>(.*?)<\/${tagName}>`, "s")
  const match = xml.match(regex)
  return match ? cleanCdata(match[1].trim()) : ""
}

function extractAllTags(xml, tagName) {
  const regex = new RegExp(`<${tagName}[^>]*>(.*?)<\/${tagName}>`, "g")
  const results = []
  let match

  while ((match = regex.exec(xml)) !== null) {
    results.push(match[1].trim())
  }

  return results
}

function cleanCdata(text) {
  // Remove CDATA wrapper if present
  if (text.startsWith("<![CDATA[") && text.endsWith("]]>")) {
    return text.substring(9, text.length - 3)
  }
  return text
}

function cleanCategory(category) {
  // Clean up CDATA sections in categories
  const cleaned = cleanCdata(category)

  // Skip empty categories or those with special characters
  if (!cleaned || cleaned.includes("<") || cleaned.includes(">")) {
    return null
  }

  return cleaned.toLowerCase()
}

function extractImageFromContent(content) {
  // Try to find the first image in the content
  const imgRegex = /<img[^>]+src="([^">]+)"/
  const match = content.match(imgRegex)
  return match ? match[1] : "/connected-health.png"
}

function createExcerpt(content) {
  // Remove HTML tags and create a short excerpt
  const text = stripHtml(content)
  return text.length > 200 ? text.substring(0, 200) + "..." : text
}

function stripHtml(html) {
  return html
    .replace(/<[^>]*>/g, " ")
    .replace(/\s{2,}/g, " ")
    .trim()
}

function formatDate(dateStr) {
  try {
    const date = new Date(dateStr)
    return date.toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    })
  } catch (e) {
    return dateStr
  }
}

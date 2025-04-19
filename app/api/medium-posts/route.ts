import { NextResponse } from "next/server"
import { getMediumPosts } from "@/lib/medium"

export async function GET() {
  try {
    const posts = await getMediumPosts()
    return NextResponse.json(posts)
  } catch (error) {
    console.error("Error in medium-posts API route:", error)
    return NextResponse.json({ error: "Failed to fetch Medium posts" }, { status: 500 })
  }
}

export const revalidate = 3600 // Revalidate hourly

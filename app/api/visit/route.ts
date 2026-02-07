import { Redis } from '@upstash/redis'
import { NextResponse } from 'next/server'

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL!,
  token: process.env.UPSTASH_REDIS_REST_TOKEN!,
})

/**
 * POST → increment only if increment === true
 */
export async function POST(req: Request) {
  const { increment } = await req.json()

  let count: number

  if (increment) {
    count = await redis.incr('site_visits')
  } else {
    count = (await redis.get<number>('site_visits')) ?? 0
  }

  return NextResponse.json({ count })
}

/**
 * OPTIONAL: GET → just read (no increment)
 */
export async function GET() {
  const count = await redis.incr('site_visits')
  return NextResponse.json({ count })
}

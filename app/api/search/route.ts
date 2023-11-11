import { type NextRequest } from 'next/server'

// GET /api/search?query=hello
export function GET(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams
    const query = searchParams.get('query') || 'World'

    return new Response(`Hello ${query}!`, {
        headers: { 'content-type': 'text/plain' },
    })
}
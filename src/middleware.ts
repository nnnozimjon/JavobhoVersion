import { NextRequest, NextResponse } from 'next/server'

import jwtDecode from 'jwt-decode'
import { getUnixTime } from 'date-fns'

export async function middleware(req: NextRequest) {
  const { nextUrl, cookies } = req
  const newUrl = nextUrl.clone()
  const token = cookies.get('access_token')?.value || ''

  const checkToken = (token: string) => {
    try {
      const decode: any = jwtDecode(token || '')
      const exp = decode?.exp
      return getUnixTime(new Date()) < exp!
    } catch (error) {
      return false
    }
  }

  const tokenValid = checkToken(token)

  if (
    !tokenValid &&
    [
      '/',
      '/explore',
      '/notifications',
      '/messages',
      '/bookmarks',
      '/lists',
      '/profile',
    ].includes(nextUrl.pathname)
  ) {
    newUrl.pathname = '/login'
    return NextResponse.redirect(newUrl)
  } else if (tokenValid && ['/login'].includes(nextUrl.pathname)) {
    newUrl.pathname = '/'
    return NextResponse.redirect(newUrl)
  }
  return NextResponse.next()
}

export const config = {
  api: {
    bodyParser: false,
  },
  middleware: async (req: NextRequest) => {
    await middleware(req)
  },
  // Add any additional routes to be handled by the middleware matcher
  // Example: matcher: ['/login', '/explore', '/profile']
  matcher: [],
}

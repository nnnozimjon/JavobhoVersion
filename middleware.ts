import { NextRequest, NextResponse } from 'next/server'
import { appRoutes } from '@constants'

import jwtDecode, { JwtPayload } from 'jwt-decode'
import { getUnixTime } from 'date-fns'
import { RequestCookie } from 'next/dist/compiled/@edge-runtime/cookies'
const authRoutes = Object.values(appRoutes.auth)

export async function middleware(req: NextRequest) {
  const { cookies, nextUrl } = req
  const token: RequestCookie = cookies.get('token') || ''
  const newUrl = nextUrl.clone()

  const checkToken = (token: string) => {
    try {
      const { exp } = jwtDecode(token) as JwtPayload
      return getUnixTime(new Date()) < exp!
    } catch (error) {
      return false
    }
  }

  const tokenValid = checkToken(token)
  if (!tokenValid && !authRoutes.includes(nextUrl.pathname)) {
    newUrl.pathname = '/login'
    return NextResponse.redirect(newUrl)
  } else if (tokenValid && authRoutes.includes(nextUrl.pathname)) {
    newUrl.pathname = '/orders'
    return NextResponse.redirect(newUrl)
  }
  return NextResponse.next()
}

export const config = {
  matcher: [],
}

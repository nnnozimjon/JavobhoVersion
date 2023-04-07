import { NextRequest, NextResponse } from 'next/server'
// import apiPaths from '@/constants/apiRoutes'

import jwtDecode, { JwtPayload } from 'jwt-decode'
import { getUnixTime } from 'date-fns'
// const authRoutes = Object.values(appRoutes.auth)

export async function middleware(req: NextRequest) {
  const { cookies, nextUrl } = req
  const token = cookies.get('access_token') || ''
  const newUrl = nextUrl.clone()
  console.log('here')

  const checkToken = (token: string) => {
    try {
      const { exp } = jwtDecode(token) as JwtPayload
      return getUnixTime(new Date()) < exp!
    } catch (error) {
      return false
    }
  }

  const tokenValid = checkToken(token)
  if (!tokenValid && ['/explore'].includes(nextUrl.pathname)) {
    newUrl.pathname = '/login'
    return NextResponse.redirect(newUrl)
  } else if (tokenValid && ['/login'].includes(nextUrl.pathname)) {
    newUrl.pathname = '/'
    return NextResponse.redirect(newUrl)
  }
  return NextResponse.next()
}

export const config = {
  matcher: [],
}

import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers'
export function middleware(request: NextRequest) {
    const absoluteURL = new URL("action/auth/login", request.nextUrl.origin);

    if (request.nextUrl.pathname.includes('/dashboard')) {
        const validToken = cookies().get('user_token')
        if (validToken) {
            return NextResponse.next()
        }
        return NextResponse.redirect(absoluteURL.toString())
    }

    return NextResponse.next()
}



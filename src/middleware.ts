import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  // Protect /admin routes
  if (pathname.startsWith('/admin') && !pathname.includes('/admin/login')) {
    const adminSession = request.cookies.get('admin_session');
    
    // Very simple check: In a real app, use a proper session/JWT
    if (!adminSession || adminSession.value !== process.env.ADMIN_PASSWORD) {
      const loginUrl = new URL('/admin/login', request.url);
      return NextResponse.redirect(loginUrl);
    }
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*'],
};

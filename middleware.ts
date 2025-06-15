// middleware.ts
import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  const token = await getToken({ req: request });

  // Giriş yapılmamışsa login sayfasına yönlendir
  if (!token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  const role = token.role;
  const path = request.nextUrl.pathname;

  // Admin sayfasına sadece admin erişebilir
  if (
    path.startsWith("/admin") &&
    (typeof role !== "string" || role !== "admin")
  ) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // Dashboard sayfasına sadece admin veya user erişebilir
  if (
    path.startsWith("/dashboard") &&
    (typeof role !== "string" || !["admin", "user"].includes(role))
  ) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // Diğer tüm durumlarda devam et
  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*", "/dashboard/:path*"],
};

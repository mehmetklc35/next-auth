import { auth } from "@/lib/auth";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  const session = await auth();
  const pathname = request.nextUrl.pathname;

  // Eğer kullanıcı giriş yapmamışsa, tüm korunan sayfalar için /login'e yönlendir
  if (!session) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // /admin sayfasıysa, sadece admin rolüne izin ver
  if (pathname.startsWith("/admin") && session.user?.role !== "admin") {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard", "/admin"],
};

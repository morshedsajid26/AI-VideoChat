import { NextResponse } from "next/server";

export default function proxy(req) {
  console.log("🔥 PROXY RUNNING → ", req.nextUrl.pathname);

  const token = req.cookies.get("admin_token")?.value;

  if (req.nextUrl.pathname.startsWith("/dashboard") && !token) {
    console.log("🚫 REDIRECTING → No token found");
    return NextResponse.redirect(new URL("/signin", req.url));
  }

  console.log("✅ ALLOW → token:", token);
  return NextResponse.next();
}

export const config = {
  matcher: ["/protected/:path*"],
};

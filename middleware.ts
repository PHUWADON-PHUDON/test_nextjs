export { default } from "next-auth/middleware"

export const config = { matcher: ['/favorits/:path*','/camp/:path*'] }

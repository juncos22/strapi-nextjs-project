import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { STRAPI_BASE_URL } from "./lib/strapi";

const protectedRoutes = ["/dashboard"];

function checkIsProtectedRoute(path: string) {
  return protectedRoutes.includes(path);
}
export async function proxy(request: NextRequest) {
  const currentPath = request.nextUrl.pathname;
  const isProtectedRoute = checkIsProtectedRoute(currentPath);
  try {
    if (isProtectedRoute) {
      const cookieStore = await cookies();
      const authToken = cookieStore.get("auth-token")?.value;
      if (!authToken) {
        return NextResponse.redirect(new URL("/signin", request.url));
      }
      const response = await fetch(`${STRAPI_BASE_URL}/api/users/me`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${authToken}`,
        },
      });
      const userResponse = await response.json();
      console.log("User Response:", userResponse);
      if (!userResponse) {
        return NextResponse.redirect(new URL("/signin", request.url));
      }
    }
    return NextResponse.next();
  } catch (error) {
    return NextResponse.redirect(new URL("/signin", request.url));
  }
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
    "/dashboard",
    "/dashboard/:path*",
  ],
};

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { isAuthenticated } from "./app/utils/isAuthenticated";

export async function middleware(request: NextRequest) {
  const status = await isAuthenticated();
  console.log("2", status);

  console.log(request);

  if (request.nextUrl.pathname === "/my-courses") {
    const absURL = new URL("/", request.nextUrl.origin);
    return NextResponse.redirect(absURL.toString());
  }

  // if (request.nextUrl.pathname === "/login") {
  //   return NextResponse.rewrite(new URL("/dashboard", request.url));
  // }
}

// export { default } from "next-auth/middleware";

// export const config = { matcher: ["/dashboard"] };

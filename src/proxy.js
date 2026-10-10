import { NextResponse } from "next/server";
import { auth } from "./lib/auth";
import { headers } from "next/headers";

export async function proxy(request) {
  const session = await auth.api.getSession({
    query: {
      disableCookieCache: true,
    },
    headers: await headers(),
  });

  console.log("PROXY SESSION:", session?.user);

  if (!session) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  if (session.user?.plan === "free") {
    return NextResponse.redirect(new URL("/pricing", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/products",
    "/dashbord/seller",
  ],
};
import { NextResponse, type NextRequest } from "next/server";
import { createClient } from "@/utils/supabase/middleware";

// export async function middleware(request: NextRequest) {
//   try {
//     // This `try/catch` block is only here for the interactive tutorial.
//     // Feel free to remove once you have Supabase connected.
//     const { supabase, response } = createClient(request);

//     // Refresh session if expired - required for Server Components
//     // https://supabase.com/docs/guides/auth/auth-helpers/nextjs#managing-session-with-middleware
//     await supabase.auth.getSession();

//     return response;
//   } catch (e) {
//     // If you are here, a Supabase client could not be created!
//     // This is likely because you have not set up environment variables.
//     // Check out http://localhost:3000 for Next Steps.

//     return NextResponse.next({
//       request: {
//         headers: request.headers,
//       },
//     });
//   }
// }
export async function middleware(req: NextRequest) {
  const res = NextResponse.next();
  const { supabase, response } = createClient(req);

  const {
    data: { user },
  } = await supabase.auth.getUser();

  // if user is signed in and the current path is / redirect the user to /account
  if (user && req.nextUrl.pathname === "/") {
    return NextResponse.redirect(new URL("/dashbord", req.url));
  }

  // if user is not signed in and the current path is not / redirect the user to /
  if (!user && req.nextUrl.pathname !== "/") {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return res;
}

export const config = {
  matcher: ["/", "/crm/:path*", "/dashbord/:path*"],
};

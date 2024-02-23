
//export { default } from "next-auth/middleware";
//export const config = { matcher: ["/dashboard/:path*"] };

import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";
// client and server side protection
export const config = {
    matcher: ["/dashboard/:path*", "/api/user/:path*", "/api/admin/:path*"],
};
export default withAuth(async function middleware(req) {
        // authorize roles
        const url = req.nextUrl.pathname;
        const userRoles = req?.nextauth?.token?.user?.role;
        if (
            url?.includes("/admin") &&
            (!userRoles || !userRoles?.includes("admin"))
        ){
            return NextResponse.redirect(new URL("/", req.url));
        }
    },
    {
        callbacks: {
            authorized: ({ token }) => {
                if (!token) {
                    return false;
                }
            },
        },
    }
);
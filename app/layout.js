"use client";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import TopNav from "@/components/nav/TopNav";
import { Toaster } from "react-hot-toast";
import { ThemeProvider } from "@/context/theme";
import { SessionProvider } from "next-auth/react";
export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <SessionProvider>
                    <ThemeProvider>
                        <TopNav />
                        <Toaster />
                        {/* children props/components can be server rendered */}
                        {children}
                    </ThemeProvider>
                </SessionProvider>
            </body>
        </html>
    );
}
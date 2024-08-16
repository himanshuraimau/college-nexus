import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"
import Navbar from "@/components/navBar";


export const metadata: Metadata = {
  title: "College Nexus",
  description: "A college portal for students to access study materials and resources.",
};

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">  
       <body
        className={cn(
          "min-h-screen bg-gray-200 font-sans antialiased",
          fontSans.variable
        )}
      > <Navbar/>
        {children}
        <Analytics/>
        <SpeedInsights/>
        </body>
    </html>
  );
}

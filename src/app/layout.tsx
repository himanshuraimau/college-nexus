import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"
import Navbar from "@/components/navBar";
import {
  ClerkProvider
} from '@clerk/nextjs'

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
    <ClerkProvider>
      <html lang="en">  
        <body className="bg-gradient-to-b from-green-100 to-transparent"> 
          <Navbar/>
          {children}
          <Analytics/>
          <SpeedInsights/>
        </body>
      </html>
    </ClerkProvider>
  );
}

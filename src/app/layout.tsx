import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"
import Navbar from "@/components/navBar";
import { BackgroundLayout } from "@/components/BackgroundLayout";


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
      <body>
        <BackgroundLayout>
          <Navbar/>
          {children}
          <Analytics/>
          <SpeedInsights/>
        </BackgroundLayout>
      </body>
    </html>
  )
}

import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import StellarWalletProvider from "./StellarWalletProvider"; 

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Stellar Onboarding Hub - Learn Web3 & Stellar",
  description:
    "Master Web3 and Stellar through gamified learning, interactive simulations, and engaging challenges. Start your blockchain journey today!",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans`}>
         <StellarWalletProvider>{children}</StellarWalletProvider>
        
        </body>
    </html>
  )
}

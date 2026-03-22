import type { Metadata } from 'next'
import { Geist, Geist_Mono, Inter, Montserrat } from 'next/font/google'
import './globals.css'
import { cn } from '@/lib/utils'
import { NavbarComponent } from '@/components/ui/navbar/navbar'
import { ThemeProvider } from '@/components/theme-provider'
import { Analytics } from "@vercel/analytics/next"

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' })

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})
const montserrat = Montserrat({
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: {
    default: "Muhammad Dustin | Fullstack Developer",
    template: "%s | Muhammad Dustin",
  },
  description: "Portfolio of Muhammad Dustin, a passionate Fullstack Developer specializing in React, Next.js, and modern web technologies. Explore my projects, skills, and photography.",
  keywords: ["Muhammad Dustin", "Portfolio", "Fullstack Developer", "Frontend Developer", "Next.js", "React", "Web Developer", "Software Engineer", "Tailwind CSS"],
  authors: [{ name: "Muhammad Dustin" }],
  creator: "Muhammad Dustin",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://portofolio-mugiwara.vercel.app",
    title: "Muhammad Dustin | Fullstack Developer",
    description: "Portfolio of Muhammad Dustin, a passionate Fullstack Developer specializing in modern web technologies.",
    siteName: "Muhammad Dustin Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Dustin | Fullstack Developer",
    description: "Portfolio of Muhammad Dustin, a passionate Fullstack Developer specializing in modern web technologies.",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn('font-sans', montserrat.className)}
    >
      <body className={`${montserrat.className}  antialiased`}>
        <ThemeProvider
          attribute={'class'}
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NavbarComponent>{children}</NavbarComponent>
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}

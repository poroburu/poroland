import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Poroburu',
  description: 'Poroburu Validator',
}
import { ThemeProvider } from "next-themes"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

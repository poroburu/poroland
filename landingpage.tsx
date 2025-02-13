"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Moon, Sun } from "lucide-react"
import Image from "next/image"

const BITCOIN_ORANGE = "#F7931A"

export default function LandingPage() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      const headerOffset = 56 // Adjust this value based on your header height
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
  }

  return (
    <div className="flex flex-col min-h-screen">
      <header className="fixed top-0 left-0 right-0 z-50 px-4 lg:px-6 h-14 flex items-center border-b bg-background">
        <Link className="flex items-center justify-center" href="#">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Poroburu_400x400.jpg-uFwXjc5eG7q90fqmkOyugMuuQ4FPT6.jpeg"
            alt="Poroburu Cat Logo"
            width={40}
            height={40}
            className="mr-2 rounded-full"
          />
          <span className="font-extrabold text-2xl" style={{ color: BITCOIN_ORANGE }}>
            Poroburu
          </span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6 items-center">
          <button
            className="text-sm font-medium hover:underline underline-offset-4"
            onClick={() => scrollToSection("about")}
          >
            About
          </button>
          <button
            className="text-sm font-medium hover:underline underline-offset-4"
            onClick={() => scrollToSection("services")}
          >
            Services
          </button>
          <Button
            variant="ghost"
            size="icon"
            aria-label="Toggle Theme"
            className="w-9 px-0"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </Button>
        </nav>
      </header>
      <main className="flex-grow flex flex-col mt-14">
        <section
          id="about"
          className="w-full flex-1 py-8 md:py-16 lg:py-24 flex items-center"
          style={{ backgroundColor: BITCOIN_ORANGE }}
        >
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center w-full">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
                  Empowering Decentralized Networks
                </h1>
              </div>
              <div className="flex space-x-4 mt-8">
                <svg className="h-16 w-16 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.638 14.904c-1.602 6.43-8.113 10.34-14.542 8.736C2.67 22.05-1.244 15.525.362 9.105 1.962 2.67 8.475-1.243 14.9.358c6.43 1.605 10.342 8.115 8.738 14.548v-.002zm-6.35-4.613c.24-1.597-.962-2.457-2.6-3.03l.53-2.128-1.29-.32-.517 2.075c-.34-.085-.69-.165-1.037-.245l.518-2.08-1.289-.32-.53 2.13c-.282-.065-.56-.128-.828-.196l.002-.007-1.78-.443-.343 1.38s.963.22.942.233c.525.13.62.478.603.754L8.91 11.63c.036.01.082.023.134.043l-.137-.034-.848 3.4c-.064.158-.227.398-.595.307.014.02-.94-.235-.94-.235L5.8 16.626l1.68.42c.31.08.62.162.918.238l-.537 2.154 1.29.32.53-2.13c.355.095.698.184 1.034.268l-.53 2.12 1.29.32.54-2.15c2.22.42 3.88.25 4.58-1.76.566-1.61-.03-2.54-1.22-3.14.854-.2 1.5-.76 1.68-1.93l.003.006zm-3.01 4.22c-.404 1.64-3.157.75-4.05.53l.72-2.9c.896.22 3.757.67 3.33 2.37zm.404-4.24c-.37 1.49-2.662.735-3.405.55l.654-2.63c.744.18 3.137.52 2.75 2.08z" />
                </svg>
                <svg className="h-16 w-16 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M11.944 17.97L4.58 13.62 11.943 24l7.37-10.38-7.372 4.35h.003zM12.056 0L4.69 12.223l7.365 4.354 7.365-4.35L12.056 0z" />
                </svg>
                <svg className="h-16 w-16 text-white" viewBox="0 0 200 200" fill="currentColor">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M100 6.9282L19.3975 53.4641V146.536L100 193.072L180.603 146.536V53.4641L100 6.9282ZM186.603 50L100 0L13.3975 50V150L100 200L186.603 150V50Z"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M100 86.5949L88.6795 93.1308V106.203L100 112.739L111.321 106.203V93.1308L100 86.5949ZM117.321 89.6667L100 79.6667L82.6795 89.6667V109.667L100 119.667L117.321 109.667V89.6667Z"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M119.333 120.262L108.013 126.798V139.869L119.333 146.405L130.654 139.869V126.798L119.333 120.262ZM136.654 123.333L119.333 113.333L102.013 123.333V143.333L119.333 153.333L136.654 143.333V123.333Z"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M138.667 86.5949L127.346 93.1308V106.203L138.667 112.739L149.987 106.203V93.1308L138.667 86.5949ZM155.987 89.6667L138.667 79.6667L121.346 89.6667V109.667L138.667 119.667L155.987 109.667V89.6667Z"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M61.3333 86.5949L50.0128 93.1308V106.203L61.3333 112.739L72.6538 106.203V93.1308L61.3333 86.5949ZM78.6538 89.6667L61.3333 79.6667L44.0128 89.6667V109.667L61.3333 119.667L78.6538 109.667V89.6667Z"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M80.6667 120.262L69.3462 126.798V139.869L80.6667 146.405L91.9872 139.869V126.798L80.6667 120.262ZM97.9872 123.333L80.6667 113.333L63.3462 123.333V143.333L80.6667 153.333L97.9872 143.333V123.333Z"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M119.333 53.595L108.013 60.1308V73.2026L119.333 79.7385L130.654 73.2026V60.1308L119.333 53.595ZM136.654 56.6667L119.333 46.6667L102.013 56.6667V76.6667L119.333 86.6667L136.654 76.6667V56.6667Z"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M80.6667 53.595L69.3462 60.1308V73.2026L80.6667 79.7385L91.9872 73.2026V60.1308L80.6667 53.595ZM97.9872 56.6667L80.6667 46.6667L63.3462 56.6667V76.6667L80.6667 86.6667L97.9872 76.6667V56.6667Z"
                  />
                </svg>
                <svg className="h-16 w-16 text-white" viewBox="0 0 576 272" fill="currentColor">
                  <path d="M576 136C576 61 513.1 0 436 0c-32.2 0-67.2 16.5-104.3 49-17.5 15.4-32.7 31.8-44.2 45-40-44.6-93.8-94-147.5-94C75.1 0 18.6 44.9 3.8 104.4c0-.1 0-.1.1-.2 0 .1 0 .1-.1.2C1.3 114.6 0 125.1 0 136c0 75 61.9 136 139 136 32.2 0 68.2-16.5 105.3-49 17.5-15.4 32.7-31.8 44.2-45 40.1 44.7 93.9 94 147.6 94 64.9 0 121.4-44.9 136.2-104.4 2.4-10.2 3.7-20.7 3.7-31.6zM298.3 93.9C311.4 79.1 324.4 66 337 55c35.6-31.2 68.9-47 99-47 72.8 0 132 57.4 132 128 0 9.9-1.2 19.8-3.6 29.4-.4 1.1-5.2 14.4-19 27.3-18 16.8-42.3 25.3-72.3 25.3 32.3-14 54.9-45.6 54.9-82 0-49.5-41.3-89.8-92-89.8-19.8 0-44 12.4-72 37-12.6 11-25.3 24-38.8 39.5l-5.3 6.1-27.1-28.9 5.5-6zm-47.8 43.4c-10.7 12.7-26.1 30-43.8 45.5-33 28.9-54.4 35-66.7 35-46.3 0-84-36.7-84-81.8 0-44.8 37.7-81.5 84-81.8 1.7 0 3.7.2 6.2.6 23.9 9.2 45.2 23.7 58 35.5 10.4 9.5 29.1 28.9 46.3 47zm27.2 40.8C264.6 192.9 251.6 206 239 217c-35.1 30.8-69.7 47-100 47-35.1 0-68.1-13.3-92.8-37.6C21.6 202.3 8 170.2 8 136c0-9.9 1.2-19.8 3.6-29.4.4-1.1 5.2-14.4 19-27.3C48.6 62.5 72.9 54 102.9 54 70.6 68 48 99.6 48 136c0 49.5 41.3 89.8 92 89.8 19.8 0 44-12.4 72-37 12.6-11 25.3-24 38.8-39.5l5.3-6.1s26.7 28.5 26.9 28.8l-5.3 6.1zm47.8-43.4c10.7-12.7 26.1-30 43.8-45.5 33-28.9 54.4-35 66.7-35 46.3 0 84 36.7 84 81.8 0 44.8-37.7 81.5-84 81.8-1.7 0-3.7-.2-6.2-.6h.1c-23.9-9.2-45.2-23.8-58.1-35.6-10.4-9.4-29.1-28.8-46.3-46.9zm246.6 33v-.1.1z" />
                </svg>
              </div>
              <p className="mx-auto max-w-[700px] text-white md:text-xl">
                Web3 solutions for the Cosmos ecosystem and beyond
              </p>
            </div>
          </div>
        </section>
        <section
          id="services"
          className="w-full flex-1 py-8 md:py-16 lg:py-24 bg-gray-100 dark:bg-gray-800 flex items-center"
        >
          <div className="container mx-auto px-4 md:px-6">
            <div className="w-full">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Our Services</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <svg className="w-8 h-8 mb-2" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clipPath="url(#clip0_425_5107)">
                        <path
                          d="M32.4545 0H9.54545C4.27365 0 0 4.27365 0 9.54545V32.4545C0 37.7264 4.27365 42 9.54545 42H32.4545C37.7264 42 42 37.7264 42 32.4545V9.54545C42 4.27365 37.7264 0 32.4545 0Z"
                          fill="url(#paint0_linear_425_5107)"
                        />
                        <path
                          d="M32.4545 0H9.54545C4.27365 0 0 4.27365 0 9.54545V32.4545C0 37.7264 4.27365 42 9.54545 42H32.4545C37.7264 42 42 37.7264 42 32.4545V9.54545C42 4.27365 37.7264 0 32.4545 0Z"
                          fill="url(#paint1_radial_425_5107)"
                        />
                        <path
                          d="M32.4545 0H9.54545C4.27365 0 0 4.27365 0 9.54545V32.4545C0 37.7264 4.27365 42 9.54545 42H32.4545C37.7264 42 42 37.7264 42 32.4545V9.54545C42 4.27365 37.7264 0 32.4545 0Z"
                          fill="url(#paint2_radial_425_5107)"
                        />
                        <path
                          d="M32.4545 0H9.54545C4.27365 0 0 4.27365 0 9.54545V32.4545C0 37.7264 4.27365 42 9.54545 42H32.4545C37.7264 42 42 37.7264 42 32.4545V9.54545C42 4.27365 37.7264 0 32.4545 0Z"
                          fill="url(#paint3_radial_425_5107)"
                        />
                        <path
                          d="M17.2526 32.2614V22.5192L26.7185 32.2614H31.9849V32.0079L21.0964 20.9122L31.1469 10.3857V10.2614H25.8464L17.2526 19.5635V10.2614H12.9849V32.2614H17.2526Z"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <linearGradient
                          id="paint0_linear_425_5107"
                          x1="21"
                          y1="0"
                          x2="21"
                          y2="42"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#1FD1FF" />
                          <stop offset="1" stopColor="#1BB8FF" />
                        </linearGradient>
                        <radialGradient
                          id="paint1_radial_425_5107"
                          cx="0"
                          cy="0"
                          r="1"
                          gradientUnits="userSpaceOnUse"
                          gradientTransform="translate(2.00623 40.4086) rotate(-45.1556) scale(67.3547 68.3624)"
                        >
                          <stop stopColor="#232DE3" />
                          <stop offset="1" stopColor="#232DE3" stopOpacity="0" />
                        </radialGradient>
                        <radialGradient
                          id="paint2_radial_425_5107"
                          cx="0"
                          cy="0"
                          r="1"
                          gradientUnits="userSpaceOnUse"
                          gradientTransform="translate(39.7379 41.7602) rotate(-138.45) scale(42.1137 64.2116)"
                        >
                          <stop stopColor="#8B4DFF" />
                          <stop offset="1" stopColor="#8B4DFF" stopOpacity="0" />
                        </radialGradient>
                        <radialGradient
                          id="paint3_radial_425_5107"
                          cx="0"
                          cy="0"
                          r="1"
                          gradientUnits="userSpaceOnUse"
                          gradientTransform="translate(20.6501 0.311498) rotate(90) scale(33.1135 80.3423)"
                        >
                          <stop stopColor="#24D5FF" />
                          <stop offset="1" stopColor="#1BB8FF" stopOpacity="0" />
                        </radialGradient>
                        <clipPath id="clip0_425_5107">
                          <rect width="42" height="42" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                    <CardTitle>Validator Nodes</CardTitle>
                    <CardDescription>Secure and reliable validator nodes for Cosmos ecosystem networks.</CardDescription>
                  </CardHeader>
                </Card>
                <Card>
                  <CardHeader>
                    <a href="https://x.com/poroburu" target="_blank" rel="noopener noreferrer">
                      <svg className="w-8 h-8 mb-2" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                      </svg>
                    </a>
                    <CardTitle>Community Engagement</CardTitle>
                    <CardDescription>Fostering vibrant and sustainable blockchain communities.</CardDescription>
                  </CardHeader>
                </Card>
                <Card>
                  <CardHeader>
                    <a href="https://github.com/poroburu" target="_blank" rel="noopener noreferrer">
                      <svg className="w-8 h-8 mb-2" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                      </svg>
                    </a>
                    <CardTitle>Blockchain Development</CardTitle>
                    <CardDescription>
                      Custom tools and solutions for blockchain interoperability and governance.
                    </CardDescription>
                  </CardHeader>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="z-50 flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-background">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 Poroburu.</p>
        <a
          href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-gray-500 dark:text-gray-400 ml-auto"
        >
          All rights reserved.
        </a>
      </footer>
    </div>
  )
}


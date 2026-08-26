import type { Metadata, Viewport } from "next"
import { Playfair_Display } from "next/font/google"
import "./tailwind.css"

import { ThemeProvider } from "./components/theme-provider"
import { Toaster } from "./components/ui/toaster"
import BioHeader from "./components/BioHeader/BioHeader"
import { ModeToggleSwitch } from "./components/mode-toggle-switch"

const playfair = Playfair_Display({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
})

export const metadata: Metadata = {
  title: "BinarySmile",
  description: "",
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    // suppressHydrationWarning: next-themes sets the theme class on <html> before hydration
    <html
      lang="en"
      className={`h-screen w-full ${playfair.variable}`}
      suppressHydrationWarning
    >
      <body className="bg-lightgray text-darkgray dark:bg-darkgray dark:text-lightgray">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="flex flex-col items-center py-5">
            <div className="absolute right-5 top-5">
              <ModeToggleSwitch />
            </div>
            <BioHeader />
          </div>
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}

"use client"

import { Button } from "@/components/ui/button"
import { Search, Github } from "lucide-react"
import { Input } from "@/components/ui/input"

export function SDKNavigation() {
  return (
    <nav className="fixed top-4 left-0 right-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-center">
          <div className="flex items-center justify-between gap-8 px-4 py-2 rounded-full border border-border/40 bg-background/80 backdrop-blur-lg shadow-sm">
          <div className="flex items-center gap-8">
            <a href="/" className="flex items-center gap-2">
              <svg
                width="14"
                height="26"
                viewBox="0 0 14 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.59383 18.0491C6.20706 18.4433 6.21313 19.0764 6.60738 19.4632C7.00163 19.85 7.63477 19.8439 8.02153 19.4497L7.30768 18.7494L6.59383 18.0491ZM13.7495 13.1926C13.7442 12.6403 13.2922 12.1969 12.74 12.2022L3.74038 12.2885C3.18812 12.2938 2.74472 12.7457 2.75001 13.298C2.7553 13.8503 3.20729 14.2937 3.75955 14.2884L11.7592 14.2117L11.8359 22.2113C11.8411 22.7636 12.2931 23.207 12.8454 23.2017C13.3977 23.1964 13.8411 22.7444 13.8358 22.1922L13.7495 13.1926ZM7.30768 18.7494L8.02153 19.4497L13.4634 13.9025L12.7496 13.2022L12.0357 12.5019L6.59383 18.0491L7.30768 18.7494Z"
                  fill="#866EFF"
                />
                <path
                  d="M7.89219 7.03615C7.49794 6.64939 6.86481 6.65545 6.47804 7.0497C6.09128 7.44395 6.09735 8.07709 6.4916 8.46385L7.19189 7.75L7.89219 7.03615ZM12.7592 14.2021C13.3114 14.1968 13.7548 13.7448 13.7495 13.1926L13.6633 4.19299C13.658 3.64073 13.206 3.19733 12.6537 3.20262C12.1015 3.20791 11.6581 3.6599 11.6634 4.21216L11.74 12.2118L3.74041 12.2885C3.18815 12.2938 2.74475 12.7457 2.75004 13.298C2.75533 13.8503 3.20732 14.2937 3.75958 14.2884L12.7592 14.2021ZM7.19189 7.75L6.4916 8.46385L12.0493 13.916L12.7496 13.2022L13.4499 12.4883L7.89219 7.03615L7.19189 7.75Z"
                  fill="#866EFF"
                />
                <path
                  d="M13.7501 25.25C6.57036 25.25 0.750061 19.8774 0.750061 13.25"
                  stroke="#866EFF"
                  strokeWidth="1.5"
                />
                <path
                  d="M0.749977 13.25C0.759466 6.3366 6.57977 0.740159 13.75 0.75"
                  stroke="#866EFF"
                  strokeWidth="1.5"
                />
              </svg>
              <span className="text-lg font-semibold">PrepSt SDK</span>
            </a>
            <div className="hidden md:flex items-center gap-6">
              <a href="#quickstart" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Quick Start
              </a>
              <a
                href="#authentication"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Authentication
              </a>
              <a href="#examples" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Examples
              </a>
              <a href="#api" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                API Reference
              </a>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-md border border-border/40 bg-muted/30">
              <Search className="h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search docs..."
                className="border-0 bg-transparent p-0 h-auto text-sm focus-visible:ring-0 w-32"
              />
              <kbd className="text-xs text-muted-foreground">⌘K</kbd>
            </div>
            <Button variant="ghost" size="sm" asChild>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4" />
              </a>
            </Button>
            <Button size="sm">Get API Key</Button>
          </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

"use client"

import { Button } from "@/components/ui/button"
import { Search, Github } from "lucide-react"
import Image from "next/image"
import { Input } from "@/components/ui/input"

export function SDKNavigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-center">
          <div className="flex items-center justify-between gap-8 px-4 py-2 rounded-full border border-border/40 bg-background/80 backdrop-blur-lg shadow-sm">
          <div className="flex items-center gap-8">
            <a href="/" className="flex items-center gap-2">
              <Image src="/icon.png" alt="PrepSt" width={24} height={24} className="h-6 w-6" />
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

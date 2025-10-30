"use client"

import { Button } from "@/components/ui/button"
import { Brain, Menu, X } from "lucide-react"
import { useState } from "react"
import Link from "next/link"

export function DocsNavigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Brain className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">Cognitive Engine</span>
          </Link>

          <div className="hidden md:flex items-center gap-6">
            <a href="#overview" className="text-sm font-medium hover:text-primary transition-colors">
              Overview
            </a>
            <a href="#how-it-works" className="text-sm font-medium hover:text-primary transition-colors">
              How It Works
            </a>
            <a href="#concepts" className="text-sm font-medium hover:text-primary transition-colors">
              Core Concepts
            </a>
            <a href="#implementation" className="text-sm font-medium hover:text-primary transition-colors">
              Implementation
            </a>
            <a href="#best-practices" className="text-sm font-medium hover:text-primary transition-colors">
              Best Practices
            </a>
            <a href="#faq" className="text-sm font-medium hover:text-primary transition-colors">
              FAQ
            </a>
            <Link href="/sdk">
              <Button variant="outline" size="sm">
                API Docs
              </Button>
            </Link>
          </div>

          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden py-4 space-y-4">
            <a href="#overview" className="block text-sm font-medium hover:text-primary transition-colors">
              Overview
            </a>
            <a href="#how-it-works" className="block text-sm font-medium hover:text-primary transition-colors">
              How It Works
            </a>
            <a href="#concepts" className="block text-sm font-medium hover:text-primary transition-colors">
              Core Concepts
            </a>
            <a href="#implementation" className="block text-sm font-medium hover:text-primary transition-colors">
              Implementation
            </a>
            <a href="#best-practices" className="block text-sm font-medium hover:text-primary transition-colors">
              Best Practices
            </a>
            <a href="#faq" className="block text-sm font-medium hover:text-primary transition-colors">
              FAQ
            </a>
            <Link href="/sdk">
              <Button variant="outline" size="sm" className="w-full bg-transparent">
                API Docs
              </Button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}

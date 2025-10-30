"use client"

import { Button } from "@/components/ui/button"
import { Brain, ArrowRight } from "lucide-react"
import Link from "next/link"

export function DocsFooter() {
  return (
    <footer className="py-16 px-4 sm:px-6 lg:px-8 border-t">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Brain className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold">PrepSt</span>
            </div>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Building the world's first cognitive learning engine that understands how humans learn.
            </p>
            <Button asChild>
              <a href="https://sat.prepst.com/dashboard" target="_blank" rel="noopener noreferrer">
                Try SAT Demo <ArrowRight className="h-4 w-4 ml-2" />
              </a>
            </Button>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold mb-4">Documentation</h4>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li>
                  <a href="#overview" className="hover:text-primary transition-colors">
                    Overview
                  </a>
                </li>
                <li>
                  <a href="#how-it-works" className="hover:text-primary transition-colors">
                    How It Works
                  </a>
                </li>
                <li>
                  <a href="#concepts" className="hover:text-primary transition-colors">
                    Core Concepts
                  </a>
                </li>
                <li>
                  <a href="#implementation" className="hover:text-primary transition-colors">
                    Implementation
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li>
                  <Link href="/sdk" className="hover:text-primary transition-colors">
                    SDK Documentation
                  </Link>
                </li>
                <li>
                  <Link href="/" className="hover:text-primary transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <a href="#best-practices" className="hover:text-primary transition-colors">
                    Best Practices
                  </a>
                </li>
                <li>
                  <a href="#faq" className="hover:text-primary transition-colors">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t text-center text-sm text-muted-foreground">
          <p>© 2025 PrepSt. Powered by Cognitive Intelligence.</p>
        </div>
      </div>
    </footer>
  )
}

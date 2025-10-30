import { Brain } from "lucide-react"
import { Button } from "@/components/ui/button"

export function SDKFooter() {
  return (
    <footer className="border-t border-border/40 py-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Brain className="h-6 w-6 text-primary" />
              <span className="text-lg font-semibold">PrepSt</span>
            </div>
            <p className="text-sm text-muted-foreground">
              The world's first cognitive learning engine powered by AI and cognitive science.
            </p>
          </div>

          <div className="space-y-3">
            <h4 className="font-semibold">Documentation</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#quickstart" className="hover:text-foreground transition-colors">
                  Quick Start
                </a>
              </li>
              <li>
                <a href="#authentication" className="hover:text-foreground transition-colors">
                  Authentication
                </a>
              </li>
              <li>
                <a href="#api" className="hover:text-foreground transition-colors">
                  API Reference
                </a>
              </li>
              <li>
                <a href="#examples" className="hover:text-foreground transition-colors">
                  Code Examples
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="font-semibold">Resources</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="/" className="hover:text-foreground transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a
                  href="https://satguide-demo-frontend.vercel.app/"
                  className="hover:text-foreground transition-colors"
                >
                  SAT Demo
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Support
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="font-semibold">Get Started</h4>
            <p className="text-sm text-muted-foreground">Ready to build intelligent learning experiences?</p>
            <Button size="sm" className="w-full">
              Get API Key
            </Button>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border/40 text-center text-sm text-muted-foreground">
          <p>&copy; 2025 PrepSt. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

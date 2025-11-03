import { Button } from "@/components/ui/button";
import { Brain } from "lucide-react";

export function Navigation() {
  return (
    <nav className="fixed top-4 left-0 right-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-center">
          <div className="flex items-center gap-6 px-4 py-2 rounded-full border border-border/30 bg-white/50 dark:bg-white/10 backdrop-blur-xl shadow-sm">
            <div className="flex items-center gap-2">
              <Brain className="h-6 w-6 text-primary" />
              <span className="text-lg font-semibold">PrepSt</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a
                href="https://satguide-demo-frontend.vercel.app/dashboard"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-primary hover:text-primary/80 transition-colors"
              >
                SAT Demo
              </a>
              <a
                href="/sdk"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                SDK
              </a>
              <a
                href="#solution"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Solution
              </a>
              <a
                href="#features"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Features
              </a>
              <a
                href="#business"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Business
              </a>
              <a
                href="#impact"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Impact
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Button size="sm" asChild>
                <a
                  href="https://satguide-demo-frontend.vercel.app/dashboard"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Try Demo
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

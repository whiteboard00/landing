import { Button } from "@/components/ui/button"
import { ArrowRight, Mail, GraduationCap } from "lucide-react"

export function CTA() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/10 via-background to-accent/10">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 text-balance tracking-tight">Ready to Transform Learning?</h2>
          <p className="text-lg text-muted-foreground mb-8 text-pretty leading-relaxed">
            Join the cognitive revolution. Start building personalized learning experiences powered by the world&apos;s
            first cognitive learning engine.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="gap-2" asChild>
              <a href="https://sat.prepst.com/dashboard" target="_blank" rel="noopener noreferrer">
                <GraduationCap className="h-5 w-5" />
                Try SAT Demo
              </a>
            </Button>
            <Button size="lg" variant="outline" className="gap-2 bg-transparent">
              Get API Access <ArrowRight className="h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="gap-2 bg-transparent">
              <Mail className="h-4 w-4" />
              Contact Sales
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

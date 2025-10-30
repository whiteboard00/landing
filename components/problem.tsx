import { Card } from "@/components/ui/card"
import { AlertCircle, TrendingDown, Users, Target } from "lucide-react"

export function Problem() {
  const problems = [
    {
      icon: Target,
      title: "Content-Focused",
      description: "Platforms deliver content but don't understand how students think",
    },
    {
      icon: Users,
      title: "One-Size-Fits-All",
      description: "Generic learning paths that ignore individual cognitive patterns",
    },
    {
      icon: AlertCircle,
      title: "Reactive",
      description: "Only respond after students fail, not before they struggle",
    },
    {
      icon: TrendingDown,
      title: "Surface-Level Metrics",
      description: "Track completion rates, not learning efficiency",
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-balance">The Cognitive Gap in Education</h2>
          <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
            Current education technology is stuck in the content business. We&apos;re building the cognition business.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {problems.map((problem, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
              <problem.icon className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">{problem.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{problem.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

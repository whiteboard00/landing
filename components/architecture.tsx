import { Card } from "@/components/ui/card"

export function Architecture() {
  const services = [
    { name: "BKT Service", description: "Bayesian Knowledge Tracing" },
    { name: "Velocity Service", description: "Learning Momentum" },
    { name: "Prediction Service", description: "Outcome Forecasting" },
    { name: "Analytics Service", description: "Performance Insights" },
    { name: "OpenAI Service", description: "AI-Powered Feedback" },
    { name: "Answer Validation", description: "Response Analysis" },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 text-balance tracking-tight">Cognitive Engine Architecture</h2>
          <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
            Built on cutting-edge cognitive science and machine learning principles
          </p>
        </div>

        <div className="max-w-4xl mx-auto">

          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <Card className="p-6 text-center">
              <div className="text-2xl font-bold text-primary mb-2">100K+</div>
              <div className="text-sm text-muted-foreground">Learning Interactions</div>
            </Card>
            <Card className="p-6 text-center">
              <div className="text-2xl font-bold text-primary mb-2">1000+</div>
              <div className="text-sm text-muted-foreground">Micro-Concepts</div>
            </Card>
            <Card className="p-6 text-center">
              <div className="text-2xl font-bold text-primary mb-2">99.9%</div>
              <div className="text-sm text-muted-foreground">Uptime</div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

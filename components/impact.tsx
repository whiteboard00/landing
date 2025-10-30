import { Card } from "@/components/ui/card"
import { TrendingUp, Users, DollarSign, Award } from "lucide-react"

export function Impact() {
  const metrics = [
    {
      icon: TrendingUp,
      value: "$50K+",
      label: "Monthly Recurring Revenue",
      timeframe: "Within 12 months",
    },
    {
      icon: Users,
      value: "1M+",
      label: "Students Impacted",
      timeframe: "Within 18 months",
    },
    {
      icon: DollarSign,
      value: "$340B",
      label: "Global EdTech Market",
      timeframe: "Total addressable market",
    },
    {
      icon: Award,
      value: "100+",
      label: "Platform Integrations",
      timeframe: "Within 18 months",
    },
  ]

  return (
    <section id="impact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-balance">Transforming Education at Scale</h2>
          <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
            Building the cognitive infrastructure for the future of personalized learning
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-16">
          {metrics.map((metric, index) => (
            <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="inline-flex p-3 rounded-lg bg-primary/10 mb-4">
                <metric.icon className="h-6 w-6 text-primary" />
              </div>
              <div className="text-3xl font-bold text-primary mb-2">{metric.value}</div>
              <div className="font-medium mb-1">{metric.label}</div>
              <div className="text-xs text-muted-foreground">{metric.timeframe}</div>
            </Card>
          ))}
        </div>

        <Card className="p-8 md:p-12 bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20 max-w-4xl mx-auto">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4 text-balance">The World&apos;s First Atlas of Human Learning</h3>
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto text-pretty leading-relaxed">
              Our data isn&apos;t about quadratic equations — it&apos;s about the 10,000 different ways a human mind can
              fail to grasp it, and the 100 different ways it can be taught so that it finally clicks.
            </p>
            <blockquote className="text-xl font-medium italic text-foreground">
              &quot;Because the human brain is capable of near-continuous improvement if given the right stimulus, at
              the right time, in the right way.&quot;
            </blockquote>
          </div>
        </Card>
      </div>
    </section>
  )
}

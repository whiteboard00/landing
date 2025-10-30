import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

export function BusinessModel() {
  const plans = [
    {
      name: "Starter",
      price: "$99",
      period: "/month",
      description: "Perfect for small platforms",
      features: ["100K API requests", "Basic cognitive analytics", "Email support", "Standard documentation"],
    },
    {
      name: "Professional",
      price: "$299",
      period: "/month",
      description: "For growing EdTech platforms",
      features: [
        "1M API requests",
        "Advanced cognitive analytics",
        "Priority support",
        "Custom integrations",
        "White-label options",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "$999",
      period: "/month",
      description: "For large organizations",
      features: [
        "Unlimited API requests",
        "Full cognitive engine access",
        "Dedicated support",
        "Custom algorithm development",
        "On-premise deployment",
        "SLA guarantee",
      ],
    },
  ]

  return (
    <section id="business" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-balance">The Cognition API Economy</h2>
          <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
            Integrate cognitive intelligence into any platform with our flexible API service
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16">
          {plans.map((plan, index) => (
            <Card key={index} className={`p-8 relative ${plan.popular ? "border-primary shadow-lg" : ""}`}>
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full">
                  Most Popular
                </div>
              )}
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{plan.description}</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
              </div>
              <ul className="space-y-3 mb-6">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm">
                    <Check className="h-5 w-5 text-primary shrink-0" />
                    <span className="leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button className="w-full" variant={plan.popular ? "default" : "outline"}>
                Get Started
              </Button>
            </Card>
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-8">Target Markets</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "K-12 EdTech Platforms",
              "Coding Bootcamps",
              "Corporate Training",
              "Tutoring Platforms",
              "Assessment Companies",
              "Language Learning Apps",
            ].map((market, index) => (
              <Card key={index} className="p-4 text-center hover:shadow-md transition-shadow">
                <div className="font-medium">{market}</div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

"use client"

import { Card } from "@/components/ui/card"
import { Brain, Target, Zap, TrendingUp } from "lucide-react"
import { motion } from "framer-motion"

export function HowItWorks() {
  const steps = [
    {
      icon: Brain,
      title: "Cognitive Modeling",
      description:
        "We build a probabilistic model of each learner's knowledge state using Bayesian Knowledge Tracing (BKT). This goes beyond simple right/wrong tracking to understand the underlying cognitive patterns.",
      details: [
        "Tracks mastery probability for each micro-concept",
        "Models learning rate and retention patterns",
        "Identifies cognitive strengths and weaknesses",
      ],
    },
    {
      icon: Target,
      title: "Adaptive Question Selection",
      description:
        "Our engine selects the optimal next question based on your current knowledge state, learning velocity, and cognitive load. Every interaction is personalized.",
      details: [
        "Item Response Theory (IRT) for difficulty calibration",
        "Cognitive load monitoring prevents overwhelm",
        "Spaced repetition for long-term retention",
      ],
    },
    {
      icon: Zap,
      title: "Real-Time Interventions",
      description:
        "The system detects learning plateaus, misconceptions, and optimal challenge points in real-time, triggering targeted interventions when needed.",
      details: ["Plateau detection algorithms", "Misconception identification", "Dynamic difficulty adjustment"],
    },
    {
      icon: TrendingUp,
      title: "Continuous Learning",
      description:
        "Every interaction feeds back into the model, creating a continuously improving understanding of how you learn best. The engine gets smarter with every question.",
      details: [
        "Pattern recognition across learners",
        "Predictive analytics for future performance",
        "Personalized learning path optimization",
      ],
    },
  ]

  return (
    <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Our four-phase approach to cognitive learning combines cutting-edge AI with proven educational science
          </p>
        </motion.div>

        <div className="space-y-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="p-8 hover:shadow-lg transition-shadow">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center">
                      <step.icon className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-sm font-bold text-primary">Phase {index + 1}</span>
                      <h3 className="text-2xl font-bold">{step.title}</h3>
                    </div>
                    <p className="text-muted-foreground mb-4 leading-relaxed">{step.description}</p>
                    <ul className="space-y-2">
                      {step.details.map((detail, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

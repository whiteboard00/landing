"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle2, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"

export function Implementation() {
  const phases = [
    {
      phase: "Phase 1: Foundation",
      status: "Live in SAT Prep",
      features: [
        "Bayesian Knowledge Tracing implementation",
        "Micro-concept decomposition (200+ concepts)",
        "Basic adaptive question selection",
        "Real-time mastery tracking",
      ],
    },
    {
      phase: "Phase 2: Intelligence",
      status: "In Development",
      features: [
        "Advanced IRT-based difficulty calibration",
        "Cognitive load monitoring",
        "Plateau detection algorithms",
        "Personalized intervention triggers",
      ],
    },
    {
      phase: "Phase 3: Optimization",
      status: "Planned",
      features: [
        "Multi-armed bandit for content selection",
        "Spaced repetition scheduling",
        "Learning velocity tracking",
        "Predictive performance analytics",
      ],
    },
    {
      phase: "Phase 4: NomaDB",
      status: "Research",
      features: [
        "Cross-learner pattern recognition",
        "Universal cognitive profile database",
        "Transfer learning across subjects",
        "Global learning optimization",
      ],
    },
  ]

  return (
    <section id="implementation" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Implementation Roadmap</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Our phased approach to building the world's first cognitive learning engine
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {phases.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="p-6 h-full">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold">{item.phase}</h3>
                  <span
                    className={`text-xs font-medium px-3 py-1 rounded-full ${
                      item.status === "Live in SAT Prep"
                        ? "bg-secondary/20 text-secondary"
                        : item.status === "In Development"
                          ? "bg-primary/20 text-primary"
                          : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {item.status}
                  </span>
                </div>
                <ul className="space-y-3">
                  {item.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <Card className="p-8 bg-primary/5 border-primary/20">
            <h3 className="text-2xl font-bold mb-4">Ready to integrate?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto leading-relaxed">
              Explore our SDK documentation to start building with the cognitive learning engine API
            </p>
            <Link href="/sdk">
              <Button size="lg" className="gap-2">
                View SDK Documentation <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

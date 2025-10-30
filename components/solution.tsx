"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Brain, Zap, Target, Activity, ExternalLink } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export function Solution() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const phases = [
    {
      phase: "Phase 1",
      status: "Live in SAT Prep",
      title: "Micro-Concept Mastery",
      icon: Brain,
      features: [
        "Bayesian Knowledge Tracing (BKT)",
        "Real-time mastery tracking",
        "Learning velocity analysis",
        "Cognitive efficiency scoring",
      ],
    },
    {
      phase: "Phase 2",
      status: "In Progress",
      title: "Advanced Cognitive Modeling",
      icon: Target,
      features: [
        "Micro-concept decomposition",
        "Item Response Theory (IRT)",
        "Adaptive question selection",
        "Cognitive bottleneck identification",
      ],
    },
    {
      phase: "Phase 3",
      status: "Planned",
      title: "Cognitive Energy Management",
      icon: Activity,
      features: [
        "Real-time cognitive load monitoring",
        "Hesitation pattern tracking",
        "Interleaving & spaced repetition",
        "Optimal study scheduling",
      ],
    },
    {
      phase: "Phase 4",
      status: "Planned",
      title: "The NomaDB",
      icon: Zap,
      features: [
        "10,000+ failure patterns",
        "100+ teaching strategies",
        "Pattern recognition at scale",
        "Predictive cognitive modeling",
      ],
    },
  ]

  return (
    <section id="solution" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-balance">The Cognitive Learning Engine</h2>
          <p className="text-lg text-muted-foreground text-pretty leading-relaxed mb-6">
            A revolutionary four-phase approach to understanding and optimizing how humans learn
          </p>
          <Button variant="outline" className="gap-2 bg-transparent hover:scale-105 transition-transform" asChild>
            <a href="https://satguide-demo-frontend.vercel.app/dashboard" target="_blank" rel="noopener noreferrer">
              See It In Action: SAT Test Prep <ExternalLink className="h-4 w-4" />
            </a>
          </Button>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {phases.map((phase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <Card className="p-8 hover:shadow-lg transition-all hover:scale-105 h-full">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <phase.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">{phase.phase}</div>
                      <h3 className="text-xl font-semibold">{phase.title}</h3>
                    </div>
                  </div>
                  <Badge
                    variant={phase.status === "Live in SAT Prep" ? "default" : "secondary"}
                    className={phase.status === "Live in SAT Prep" ? "bg-secondary text-secondary-foreground" : ""}
                  >
                    {phase.status}
                  </Badge>
                </div>
                <ul className="space-y-2">
                  {phase.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="text-primary mt-1">•</span>
                      <span className="leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

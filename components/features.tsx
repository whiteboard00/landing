"use client"

import { Card } from "@/components/ui/card"
import { Database, LineChart, Cpu, Sparkles, Users, TrendingUp } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export function Features() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const features = [
    {
      icon: Database,
      title: "Comprehensive Data Tracking",
      description:
        "Track answer correctness, confidence, time spent, hesitation patterns, and cognitive load indicators for every interaction.",
    },
    {
      icon: LineChart,
      title: "Bayesian Mastery Probability",
      description:
        "Real-time skill mastery tracking using Bayesian inference with learning velocity and acceleration metrics.",
    },
    {
      icon: Cpu,
      title: "Predictive Analytics",
      description:
        "Forecast learning outcomes with confidence intervals and detect plateaus before they impact progress.",
    },
    {
      icon: Sparkles,
      title: "AI-Powered Feedback",
      description:
        "OpenAI integration provides personalized explanations and interventions based on cognitive patterns.",
    },
    {
      icon: Users,
      title: "Individual Learning Paths",
      description:
        "Truly personalized education that adapts to each student's unique cognitive patterns and learning style.",
    },
    {
      icon: TrendingUp,
      title: "Learning Momentum Scoring",
      description: "Track cognitive efficiency, performance snapshots, and learning momentum to optimize study time.",
    },
  ]

  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-balance">Beyond Traditional Metrics</h2>
          <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
            We track what matters: how your brain learns, not just what you score
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="p-6 hover:shadow-lg transition-all hover:scale-105 h-full">
                <div className="p-3 rounded-lg bg-primary/10 w-fit mb-4">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

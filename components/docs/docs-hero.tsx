"use client"
import { BookOpen, Brain, Search } from "lucide-react"
import { motion } from "framer-motion"

export function DocsHero() {
  return (
    <section id="overview" className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 border-b">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <BookOpen className="h-4 w-4" />
            <span>Product Documentation</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-balance">
            Understanding the <span className="text-primary">Cognitive Learning Engine</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            Comprehensive guide to how our platform models human cognition, identifies learning patterns, and delivers
            personalized educational experiences.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto"
        >
          {[
            {
              icon: Brain,
              title: "Cognitive Science",
              description: "Built on proven theories of how humans learn and retain information",
            },
            {
              icon: Search,
              title: "Bayesian Modeling",
              description: "Advanced probabilistic models track knowledge state in real-time",
            },
            {
              icon: BookOpen,
              title: "Adaptive Learning",
              description: "Dynamic content selection optimized for each learner's cognitive profile",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="p-6 rounded-lg border bg-card hover:shadow-lg transition-shadow"
            >
              <item.icon className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

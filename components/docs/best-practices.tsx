"use client"

import { Card } from "@/components/ui/card"
import { AlertCircle, CheckCircle2, XCircle } from "lucide-react"
import { motion } from "framer-motion"

export function BestPractices() {
  const practices = [
    {
      category: "Data Collection",
      dos: [
        "Track every learner interaction with timestamps",
        "Record response time and confidence levels",
        "Capture partial credit and work shown",
        "Log context like time of day and session length",
      ],
      donts: [
        "Don't aggregate data before sending to the engine",
        "Don't filter out 'bad' sessions or outliers",
        "Don't delay data transmission",
        "Don't modify learner responses",
      ],
    },
    {
      category: "Question Selection",
      dos: [
        "Trust the engine's recommendations",
        "Provide diverse question types for each concept",
        "Include questions at multiple difficulty levels",
        "Tag questions with detailed metadata",
      ],
      donts: [
        "Don't override the engine with manual selection",
        "Don't limit question pool artificially",
        "Don't reuse questions too frequently",
        "Don't ignore cognitive load warnings",
      ],
    },
    {
      category: "Intervention Design",
      dos: [
        "Respond immediately to plateau signals",
        "Provide multiple intervention types",
        "Allow learners to opt-out of interventions",
        "Track intervention effectiveness",
      ],
      donts: [
        "Don't interrupt during active problem-solving",
        "Don't force interventions on resistant learners",
        "Don't use generic hints or explanations",
        "Don't ignore learner feedback on interventions",
      ],
    },
  ]

  return (
    <section id="best-practices" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Best Practices</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Guidelines for maximizing the effectiveness of the cognitive learning engine
          </p>
        </motion.div>

        <div className="space-y-8">
          {practices.map((practice, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="p-8">
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <AlertCircle className="h-6 w-6 text-primary" />
                  {practice.category}
                </h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <CheckCircle2 className="h-5 w-5 text-secondary" />
                      <h4 className="font-semibold text-secondary">Do</h4>
                    </div>
                    <ul className="space-y-3">
                      {practice.dos.map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <XCircle className="h-5 w-5 text-destructive" />
                      <h4 className="font-semibold text-destructive">Don't</h4>
                    </div>
                    <ul className="space-y-3">
                      {practice.donts.map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-destructive mt-2 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{item}</span>
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

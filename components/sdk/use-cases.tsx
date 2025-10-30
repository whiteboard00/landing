"use client"

import { Card } from "@/components/ui/card"
import { GraduationCap, Building2, BookOpen, Users } from "lucide-react"
import { motion } from "framer-motion"

export function UseCases() {
  const useCases = [
    {
      icon: GraduationCap,
      title: "EdTech Platforms",
      description: "Build adaptive learning experiences for K-12, higher education, and test prep platforms",
      features: ["Personalized learning paths", "Real-time mastery tracking", "Predictive analytics"],
    },
    {
      icon: Building2,
      title: "Corporate Training",
      description: "Create intelligent training programs that adapt to employee skill levels and learning pace",
      features: ["Skill gap analysis", "Compliance tracking", "ROI measurement"],
    },
    {
      icon: BookOpen,
      title: "Online Courses",
      description: "Enhance MOOCs and online courses with cognitive intelligence and adaptive content",
      features: ["Dynamic difficulty adjustment", "Engagement optimization", "Completion prediction"],
    },
    {
      icon: Users,
      title: "Tutoring Services",
      description: "Power tutoring platforms with AI-driven insights and personalized recommendations",
      features: ["Student profiling", "Intervention triggers", "Progress reporting"],
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">Use Cases</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              See how leading organizations use our SDK to transform learning experiences
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {useCases.map((useCase, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <Card className="p-6 space-y-4 border-border/40 bg-card/50 backdrop-blur h-full hover:border-primary/40 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                      <useCase.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold">{useCase.title}</h3>
                  </div>
                  <p className="text-muted-foreground">{useCase.description}</p>
                  <ul className="space-y-2">
                    {useCase.features.map((feature, j) => (
                      <li key={j} className="flex items-center gap-2 text-sm">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

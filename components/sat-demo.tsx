"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Brain, TrendingUp, Target, ExternalLink } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export function SATDemo() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/5 via-background to-secondary/5"
      ref={ref}
    >
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.6 }}
            >
              <Badge className="mb-4 bg-secondary text-secondary-foreground">Live Demo Available</Badge>
              <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 text-balance tracking-tight">
                See Our Engine in Action: <span className="text-primary">SAT Test Prep</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                We&apos;ve built the world&apos;s first cognitive-powered SAT prep platform. Experience how our engine
                understands your unique learning patterns and adapts in real-time to maximize your score improvement.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  {
                    icon: Brain,
                    title: "Real-Time Cognitive Tracking",
                    description:
                      "Watch as the system tracks your mastery probability for every SAT concept using Bayesian Knowledge Tracing",
                    color: "primary",
                  },
                  {
                    icon: TrendingUp,
                    title: "Adaptive Question Selection",
                    description:
                      "Questions adapt to your cognitive patterns, focusing on concepts where you need the most growth",
                    color: "secondary",
                  },
                  {
                    icon: Target,
                    title: "Personalized Learning Velocity",
                    description:
                      "Track your learning momentum and see predictions for your score improvement over time",
                    color: "accent",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <div
                      className={`p-2 rounded-lg ${
                        item.color === "primary"
                          ? "bg-primary/10"
                          : item.color === "secondary"
                            ? "bg-secondary/20"
                            : "bg-accent/20"
                      } mt-1`}
                    >
                      <item.icon
                        className={`h-5 w-5 ${
                          item.color === "primary"
                            ? "text-primary"
                            : item.color === "secondary"
                              ? "text-secondary-foreground"
                              : "text-accent-foreground"
                        }`}
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{item.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="space-y-4"
              >
                <Button size="lg" className="gap-2 hover:scale-105 transition-transform" asChild>
                  <a
                    href="https://sat.prepst.com/dashboard"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <GraduationCap className="h-5 w-5" />
                    Try SAT Demo Now <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <Card className="p-8 bg-card/50 backdrop-blur hover:shadow-xl transition-shadow">
                <div className="space-y-6">
                  <div>
                    <div className="text-sm text-muted-foreground mb-2">Current Implementation</div>
                    <h3 className="text-2xl font-bold mb-4">SAT Prep Platform</h3>
                  </div>

                  <div className="space-y-4">
                    {[
                      { label: "Math Concepts", value: "350+ Tracked", color: "primary" },
                      { label: "Reading & Writing", value: "280+ Tracked", color: "secondary" },
                      { label: "Practice Questions", value: "2,000+", color: "accent" },
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                        className={`flex items-center justify-between p-4 rounded-lg ${
                          item.color === "primary"
                            ? "bg-primary/5 border border-primary/20"
                            : item.color === "secondary"
                              ? "bg-secondary/10 border border-secondary/30"
                              : "bg-accent/10 border border-accent/30"
                        } hover:scale-105 transition-transform`}
                      >
                        <span className="font-medium">{item.label}</span>
                        <Badge
                          variant={item.color === "secondary" ? "default" : "secondary"}
                          className={
                            item.color === "secondary"
                              ? "bg-secondary text-secondary-foreground"
                              : item.color === "accent"
                                ? "bg-accent text-accent-foreground"
                                : ""
                          }
                        >
                          {item.value}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-border">
                    <div className="text-sm text-muted-foreground mb-3">Powered By</div>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "Bayesian Knowledge Tracing",
                        "OpenAI Integration",
                        "Real-time Analytics",
                        "Velocity Engine",
                      ].map((tech, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                          transition={{ duration: 0.3, delay: 0.7 + index * 0.05 }}
                        >
                          <Badge variant="outline">{tech}</Badge>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-secondary/10 rounded-full blur-2xl" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

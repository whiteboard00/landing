"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"

export type ApiEndpoint = {
  method: string
  path: string
  description?: string
  params?: string[]
}

type APIReferenceProps = {
  endpoints?: ApiEndpoint[]
}

export function APIReference({ endpoints }: APIReferenceProps) {
  const fallbackEndpoints: ApiEndpoint[] = [
    {
      method: "POST",
      path: "/v2/track",
      description: "Track a learning event and update knowledge state",
      params: ["userId", "conceptId", "correct", "timeSpent", "difficulty"],
    },
    {
      method: "GET",
      path: "/v2/predict",
      description: "Get mastery predictions for concepts",
      params: ["userId", "concepts[]"],
    },
    {
      method: "GET",
      path: "/v2/questions/adaptive",
      description: "Get adaptive question recommendations",
      params: ["userId", "conceptId", "count", "targetDifficulty"],
    },
    {
      method: "GET",
      path: "/v2/analytics",
      description: "Retrieve learning analytics and insights",
      params: ["userId", "timeRange", "includeInsights"],
    },
    {
      method: "POST",
      path: "/v2/concepts",
      description: "Create or update concept definitions",
      params: ["name", "prerequisites[]", "difficulty", "metadata"],
    },
    {
      method: "GET",
      path: "/v2/knowledge-graph",
      description: "Get the knowledge graph for a user",
      params: ["userId", "depth"],
    },
  ]

  return (
    <section id="api" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">API Reference</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Complete reference for all available endpoints and methods
            </p>
          </div>

          <div className="space-y-4">
            {(endpoints && endpoints.length > 0 ? endpoints : fallbackEndpoints).map((endpoint, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
              >
                <Card className="p-6 border-border/40 bg-card/50 backdrop-blur hover:border-primary/40 transition-colors">
                  <div className="space-y-3">
                    <div className="flex items-start justify-between gap-4">
                      <div className="space-y-2 flex-1">
                        <div className="flex items-center gap-3">
                          <Badge
                            variant={endpoint.method === "GET" ? "secondary" : "default"}
                            className="font-mono text-xs"
                          >
                            {endpoint.method}
                          </Badge>
                          <code className="text-sm font-mono text-foreground">{endpoint.path}</code>
                        </div>
                        {endpoint.description ? (
                          <p className="text-sm text-muted-foreground">{endpoint.description}</p>
                        ) : null}
                      </div>
                    </div>
                    {endpoint.params && endpoint.params.length > 0 ? (
                      <div className="flex flex-wrap gap-2 pt-2">
                        {endpoint.params.map((param, j) => (
                          <Badge key={j} variant="outline" className="text-xs font-mono">
                            {param}
                          </Badge>
                        ))}
                      </div>
                    ) : null}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          <Card className="p-6 border-primary/40 bg-primary/5">
            <p className="text-sm text-center">
              <strong>Base URL:</strong>{" "}
              <code className="text-primary font-mono">https://api.cognitive-engine.com</code>
            </p>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

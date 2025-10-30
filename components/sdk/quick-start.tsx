"use client"

import { Card } from "@/components/ui/card"
import { CodeTabs } from "@/components/ui/shadcn-io/code-tabs"
import { motion } from "framer-motion"

export function QuickStart() {
  return (
    <section id="quickstart" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">Quick Start Guide</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Get up and running with the PrepSt SDK in under 5 minutes
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { step: "1", title: "Install SDK", desc: "Add the package to your project" },
              { step: "2", title: "Initialize", desc: "Configure with your API key" },
              { step: "3", title: "Start Building", desc: "Use our powerful APIs" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <Card className="p-6 space-y-3 border-border/40 bg-card/50 backdrop-blur">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">
                      {item.step}
                    </div>
                    <h3 className="text-xl font-semibold">{item.title}</h3>
                  </div>
                  <p className="text-muted-foreground">{item.desc}</p>
                </Card>
              </motion.div>
            ))}
          </div>

          <Card className="p-0 border-border/40 bg-card/50 backdrop-blur overflow-hidden">
            <CodeTabs
              lang="bash"
              defaultValue="npm"
              codes={{
                npm: `# Install the SDK\nnpm install @prepst/sdk\n\n# Initialize in your project\nimport { PrepSt } from '@prepst/sdk'\n\nconst engine = new PrepSt({\n  apiKey: process.env.PREPST_API_KEY\n})\n\n# Start tracking learning\nconst result = await engine.track({\n  userId: 'user_123',\n  conceptId: 'algebra_basics',\n  correct: true,\n  timeSpent: 45\n})`,
                yarn: `# Install the SDK\nyarn add @prepst/sdk\n\n# Initialize in your project\nimport { PrepSt } from '@prepst/sdk'\n\nconst engine = new PrepSt({\n  apiKey: process.env.PREPST_API_KEY\n})\n\n# Start tracking learning\nconst result = await engine.track({\n  userId: 'user_123',\n  conceptId: 'algebra_basics',\n  correct: true,\n  timeSpent: 45\n})`,
                pnpm: `# Install the SDK\npnpm add @prepst/sdk\n\n# Initialize in your project\nimport { PrepSt } from '@prepst/sdk'\n\nconst engine = new PrepSt({\n  apiKey: process.env.PREPST_API_KEY\n})\n\n# Start tracking learning\nconst result = await engine.track({\n  userId: 'user_123',\n  conceptId: 'algebra_basics',\n  correct: true,\n  timeSpent: 45\n})`,
              }}
            />
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

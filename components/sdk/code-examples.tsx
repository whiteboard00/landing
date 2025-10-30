"use client"

import { Card } from "@/components/ui/card"
import { CodeTabs } from "@/components/ui/shadcn-io/code-tabs"
import { Code2 } from "lucide-react"
import { motion } from "framer-motion"

export function CodeExamples() {
  return (
    <section id="examples" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center gap-2">
              <Code2 className="h-8 w-8 text-primary" />
              <h2 className="text-4xl md:text-5xl font-bold">Code Examples</h2>
            </div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real-world examples to help you integrate cognitive learning into your application
            </p>
          </div>

          <Card className="p-0 border-border/40 bg-card/50 backdrop-blur overflow-hidden">
            <CodeTabs
              lang="typescript"
              defaultValue="Track"
              codes={{
                Track: `import { PrepSt } from '@prepst/sdk'

const engine = new PrepSt({
  apiKey: process.env.PREPST_API_KEY
})

// Track a learning event
const result = await engine.track({
  userId: 'student_123',
  conceptId: 'quadratic_equations',
  questionId: 'q_456',
  correct: true,
  timeSpent: 120, // seconds
  difficulty: 0.65,
  metadata: {
    source: 'practice_quiz',
    attemptNumber: 2
  }
})`,
                Predict: `import { PrepSt } from '@prepst/sdk'

const engine = new PrepSt({
  apiKey: process.env.PREPST_API_KEY
})

// Get mastery predictions for a student
const predictions = await engine.predict({
  userId: 'student_123',
  concepts: ['algebra_basics', 'geometry', 'trigonometry']
})`,
                Adaptive: `import { PrepSt } from '@prepst/sdk'

const engine = new PrepSt({
  apiKey: process.env.PREPST_API_KEY
})

// Get adaptive question recommendations
const questions = await engine.getAdaptiveQuestions({
  userId: 'student_123',
  conceptId: 'linear_equations',
  count: 5,
  targetDifficulty: 'optimal', // 'easy', 'medium', 'hard', 'optimal'
  cognitiveLoadLimit: 0.7
})`,
                Analytics: `import { PrepSt } from '@prepst/sdk'

const engine = new PrepSt({
  apiKey: process.env.PREPST_API_KEY
})

// Get detailed analytics for a student
const analytics = await engine.getAnalytics({
  userId: 'student_123',
  timeRange: 'last_30_days',
  includeInsights: true
})`,
              }}
            />
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

"use client"

import { Card } from "@/components/ui/card"
import { motion } from "framer-motion"

export function CoreConcepts() {
  const concepts = [
    {
      term: "Bayesian Knowledge Tracing (BKT)",
      definition:
        "A probabilistic model that estimates a learner's mastery of a skill based on their performance history. Unlike simple scoring, BKT accounts for guessing, slipping, and learning rate.",
      example:
        "If a student answers correctly, BKT updates the probability they've mastered the concept, considering they might have guessed.",
    },
    {
      term: "Micro-Concept Mastery",
      definition:
        "Breaking down subjects into the smallest possible learning units. Instead of 'Algebra', we track mastery of 'solving linear equations with one variable' separately from 'factoring quadratics'.",
      example: "SAT Math is decomposed into 200+ micro-concepts, each tracked independently.",
    },
    {
      term: "Item Response Theory (IRT)",
      definition:
        "A framework for measuring question difficulty and learner ability on the same scale. Helps select questions at the optimal difficulty level for each learner.",
      example: "A question with difficulty 0.7 is ideal for a learner with ability 0.7, maximizing information gain.",
    },
    {
      term: "Cognitive Load",
      definition:
        "The mental effort required to process information. Our engine monitors cognitive load to prevent overwhelm and optimize learning efficiency.",
      example:
        "After three difficult questions, the system may present an easier review question to reduce cognitive strain.",
    },
    {
      term: "Spaced Repetition",
      definition:
        "A learning technique that increases intervals between reviews of material. Our engine automatically schedules reviews at optimal times for long-term retention.",
      example: "A mastered concept is reviewed after 1 day, then 3 days, then 7 days, then 14 days.",
    },
    {
      term: "Learning Velocity",
      definition:
        "The rate at which a learner acquires new knowledge. Our engine tracks velocity to predict future performance and adjust pacing.",
      example: "A learner with high velocity in geometry but low velocity in algebra receives more geometry content.",
    },
  ]

  return (
    <section id="concepts" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Core Concepts</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Key terminology and principles that power the cognitive learning engine
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {concepts.map((concept, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="p-6 h-full hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold mb-3 text-primary">{concept.term}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">{concept.definition}</p>
                <div className="p-4 rounded-lg bg-muted/50 border-l-4 border-primary">
                  <p className="text-sm font-medium mb-1">Example:</p>
                  <p className="text-sm text-muted-foreground">{concept.example}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

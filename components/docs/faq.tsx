"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { motion } from "framer-motion"

export function FAQ() {
  const faqs = [
    {
      question: "How is this different from traditional adaptive learning?",
      answer:
        "Traditional adaptive learning adjusts difficulty based on right/wrong answers. Our cognitive engine models the underlying knowledge state using Bayesian probability, tracks learning velocity, monitors cognitive load, and identifies specific misconceptions. It's the difference between adjusting a thermostat and understanding the entire climate system.",
    },
    {
      question: "How much data is needed before the engine becomes effective?",
      answer:
        "The engine starts making personalized recommendations after just 5-10 interactions per micro-concept. However, accuracy improves significantly with more data. After 50+ interactions, the engine can predict performance with 85%+ accuracy.",
    },
    {
      question: "Can learners game the system?",
      answer:
        "The Bayesian model accounts for guessing and slipping. If a learner consistently answers correctly but with patterns suggesting guessing (e.g., very fast responses, inconsistent performance on related concepts), the model adjusts accordingly. Gaming the system actually hurts the learner by preventing proper difficulty calibration.",
    },
    {
      question: "What subjects does the engine support?",
      answer:
        "Currently live with SAT prep (Math and English). We're expanding to ACT, GRE, GMAT, and eventually all standardized tests and academic subjects. The engine is subject-agnostic - it works with any content that can be decomposed into micro-concepts.",
    },
    {
      question: "How does the engine handle learning disabilities or neurodivergence?",
      answer:
        "The engine is inherently personalized and doesn't assume a 'normal' learning pattern. It adapts to each individual's cognitive profile, whether neurotypical or neurodivergent. We're actively researching specific interventions for ADHD, dyslexia, and other learning differences.",
    },
    {
      question: "What's the difference between the SDK and the full platform?",
      answer:
        "The SDK provides API access to our cognitive engine for integration into your own platform. The full platform (like our SAT prep) includes the engine plus a complete learning interface, content library, and analytics dashboard. Most EdTech companies use the SDK to enhance their existing products.",
    },
    {
      question: "How do you ensure data privacy and security?",
      answer:
        "All learner data is encrypted at rest and in transit. We're FERPA and COPPA compliant. Data is anonymized for research purposes. Learners and institutions maintain full ownership of their data and can request deletion at any time. We never sell or share learner data with third parties.",
    },
    {
      question: "What's NomaDB and when will it be available?",
      answer:
        "NomaDB is our vision for a universal database of learning patterns - a 'cognitive genome' that enables transfer learning across subjects and learners. It's currently in research phase. Early experiments show promising results in predicting learning patterns for new subjects based on existing cognitive profiles.",
    },
  ]

  return (
    <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Common questions about the cognitive learning engine
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-6 bg-card">
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <span className="font-semibold pr-4">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}

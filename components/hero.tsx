"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Brain, GraduationCap } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export function Hero() {
  return (
    <section
      className="relative pt-40 pb-32 px-4 sm:px-6 lg:px-8 overflow-hidden bg-cover bg-bottom bg-no-repeat min-h-[80vh] md:min-h-[85vh]"
      style={{ backgroundImage: "url(/background.png)" }}
    >
      {/* Background gradient removed to avoid white glow on text */}

      <div className="container mx-auto relative">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 mb-8"
          >
            <GraduationCap className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">
              Powered by Cognitive Intelligence • Now Live with SAT Prep
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6 text-balance"
          >
            We don&apos;t just track scores,{" "}
            <span className="text-primary">we understand your brain</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto text-pretty leading-relaxed"
          >
            Revolutionary platform that models how the human brain learns,
            identifies unique cognitive patterns, and optimizes learning through
            personalized interventions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button
              size="lg"
              className="gap-2 hover:scale-105 transition-transform"
              asChild
            >
              <a
                href="https://sat.prepst.com/dashboard"
                target="_blank"
                rel="noopener noreferrer"
              >
                Try SAT Demo <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="gap-2 bg-transparent hover:bg-transparent hover:scale-105 transition-transform hover:text-[#8679fc]"
              asChild
            >
              <Link href="/sdk" className="hover:text-[#8679fc]">
                <Brain className="h-4 w-4" />
                Try our SDK
              </Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto"
          >
            {[
              { value: "40%", label: "Faster Mastery" },
              { value: "60%", label: "Fewer Plateaus" },
              { value: "90%", label: "Better Engagement" },
              { value: "3x", label: "Retention Rate" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              >
                <div className="text-3xl font-bold text-primary mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

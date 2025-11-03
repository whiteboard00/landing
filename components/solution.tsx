"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Brain, Zap, Target, Activity, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const titleVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export function Solution() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const titleRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true, margin: "-50px" });
  const phases = [
    {
      phase: "Phase 1",
      status: "Live in SAT Prep",
      title: "Micro-Concept Mastery",
      icon: Brain,
      features: [
        "Bayesian Knowledge Tracing (BKT)",
        "Real-time mastery tracking",
        "Learning velocity analysis",
        "Cognitive efficiency scoring",
      ],
    },
    {
      phase: "Phase 2",
      status: "In Progress",
      title: "Advanced Cognitive Modeling",
      icon: Target,
      features: [
        "Micro-concept decomposition",
        "Item Response Theory (IRT)",
        "Adaptive question selection",
        "Cognitive bottleneck identification",
      ],
    },
    {
      phase: "Phase 3",
      status: "Planned",
      title: "Cognitive Energy Management",
      icon: Activity,
      features: [
        "Real-time cognitive load monitoring",
        "Hesitation pattern tracking",
        "Interleaving & spaced repetition",
        "Optimal study scheduling",
      ],
    },
    {
      phase: "Phase 4",
      status: "Planned",
      title: "The NomaDB",
      icon: Zap,
      features: [
        "10,000+ failure patterns",
        "100+ teaching strategies",
        "Pattern recognition at scale",
        "Predictive cognitive modeling",
      ],
    },
  ];

  return (
    <section
      id="solution"
      className="py-32 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden"
    >
      <div className="container mx-auto">
        <motion.div
          ref={titleRef}
          initial="hidden"
          animate={titleInView ? "visible" : "hidden"}
          variants={titleVariants}
          className="max-w-3xl mx-auto text-center mb-20"
        >
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 text-balance tracking-tight">
            The Cognitive Learning Engine
          </h2>
          <motion.p
            className="text-base text-gray-600 leading-relaxed mb-8"
            initial={{ opacity: 0 }}
            animate={titleInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            A revolutionary four-phase approach to understanding and optimizing
            how humans learn
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={titleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <Button
              variant="outline"
              className="gap-2 bg-transparent border-gray-300 text-black hover:bg-gray-50 transition-all"
              asChild
            >
              <a
                href="https://satguide-demo-frontend.vercel.app/dashboard"
                target="_blank"
                rel="noopener noreferrer"
              >
                See It In Action: SAT Test Prep{" "}
                <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto"
        >
          {phases.map((phase, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              <Card className="p-8 bg-white shadow-sm hover:shadow-md transition-shadow duration-300 h-full">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <motion.div
                      className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <phase.icon
                        className="h-5 w-5 text-black"
                        strokeWidth={1.5}
                      />
                    </motion.div>
                    <div>
                      <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">
                        {phase.phase}
                      </div>
                      <h3 className="text-xl font-bold text-black">
                        {phase.title}
                      </h3>
                    </div>
                  </div>
                  <Badge
                    variant="outline"
                    className="text-xs border-gray-300 text-gray-600 bg-white"
                  >
                    {phase.status}
                  </Badge>
                </div>
                <ul className="space-y-3">
                  {phase.features.map((feature, idx) => (
                    <motion.li
                      key={idx}
                      className="flex items-start gap-3 text-sm text-gray-600"
                      initial={{ opacity: 0, x: -10 }}
                      animate={
                        isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }
                      }
                      transition={{
                        delay: 0.4 + index * 0.15 + idx * 0.05,
                        duration: 0.4,
                      }}
                    >
                      <span className="text-black mt-1">•</span>
                      <span className="leading-relaxed">{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

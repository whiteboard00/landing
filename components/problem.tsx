"use client";

import { Card } from "@/components/ui/card";
import { AlertCircle, TrendingDown, Users, Target } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
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
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export function Problem() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const titleRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true, margin: "-50px" });
  const problems = [
    {
      icon: Target,
      title: "Content-Focused",
      description:
        "Platforms deliver content but don't understand how students think",
    },
    {
      icon: Users,
      title: "One-Size-Fits-All",
      description:
        "Generic learning paths that ignore individual cognitive patterns",
    },
    {
      icon: AlertCircle,
      title: "Reactive",
      description: "Only respond after students fail, not before they struggle",
    },
    {
      icon: TrendingDown,
      title: "Surface-Level Metrics",
      description: "Track completion rates, not learning efficiency",
    },
  ];

  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
      <div className="container mx-auto">
        <motion.div
          ref={titleRef}
          initial="hidden"
          animate={titleInView ? "visible" : "hidden"}
          variants={titleVariants}
          className="max-w-3xl mx-auto text-center mb-20"
        >
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 text-balance tracking-tight">
            The Cognitive Gap in Education
          </h2>
          <motion.p
            className="text-base text-gray-600 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={titleInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Current education technology is stuck in the content business.
            We&apos;re building the cognition business.
          </motion.p>
        </motion.div>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto"
        >
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
            >
              <Card className="p-6 bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
                <motion.div
                  className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mb-4"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <problem.icon
                    className="h-5 w-5 text-black"
                    strokeWidth={1.5}
                  />
                </motion.div>
                <h3 className="text-lg font-bold mb-2 text-black">
                  {problem.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {problem.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

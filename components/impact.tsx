"use client";

import { Card } from "@/components/ui/card";
import { TrendingUp, Users, DollarSign, Award } from "lucide-react";
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

const metricVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1] as const,
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
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const quoteVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export function Impact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const titleRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true, margin: "-50px" });
  const quoteRef = useRef(null);
  const quoteInView = useInView(quoteRef, { once: true, margin: "-50px" });
  const metrics = [
    {
      icon: TrendingUp,
      value: "$50K+",
      label: "Monthly Recurring Revenue",
      timeframe: "Within 12 months",
    },
    {
      icon: Users,
      value: "1M+",
      label: "Students Impacted",
      timeframe: "Within 18 months",
    },
    {
      icon: DollarSign,
      value: "$340B",
      label: "Global EdTech Market",
      timeframe: "Total addressable market",
    },
    {
      icon: Award,
      value: "100+",
      label: "Platform Integrations",
      timeframe: "Within 18 months",
    },
  ];

  return (
    <section
      id="impact"
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
            Transforming Education at Scale
          </h2>
          <motion.p
            className="text-base text-gray-600 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={titleInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Building the cognitive infrastructure for the future of personalized
            learning
          </motion.p>
        </motion.div>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto mb-20"
        >
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              variants={metricVariants}
              whileHover={{ y: -6, scale: 1.02, transition: { duration: 0.3 } }}
            >
              <Card className="p-6 text-center bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
                <motion.div
                  className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-4"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <metric.icon
                    className="h-5 w-5 text-black"
                    strokeWidth={1.5}
                  />
                </motion.div>
                <motion.div
                  className="text-3xl font-bold text-black mb-2"
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : { scale: 0 }}
                  transition={{
                    delay: 0.3 + index * 0.1,
                    type: "spring",
                    stiffness: 200,
                  }}
                >
                  {metric.value}
                </motion.div>
                <div className="font-medium mb-1 text-black">
                  {metric.label}
                </div>
                <div className="text-xs text-gray-500">{metric.timeframe}</div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          ref={quoteRef}
          initial="hidden"
          animate={quoteInView ? "visible" : "hidden"}
          variants={quoteVariants}
        >
          <Card className="p-12 bg-white shadow-sm max-w-4xl mx-auto">
            <div className="text-center">
              <h3 className="text-3xl font-bold mb-6 text-balance tracking-tight">
                The World&apos;s First Atlas of Human Learning
              </h3>
              <p className="text-base text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
                Our data isn&apos;t about quadratic equations — it&apos;s about
                the 10,000 different ways a human mind can fail to grasp it, and
                the 100 different ways it can be taught so that it finally
                clicks.
              </p>
              <motion.blockquote
                className="text-lg font-medium italic text-black"
                initial={{ opacity: 0 }}
                animate={quoteInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                &quot;Because the human brain is capable of near-continuous
                improvement if given the right stimulus, at the right time, in
                the right way.&quot;
              </motion.blockquote>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { Card } from "@/components/ui/card";
import { Share2, Users, GitMerge, PenTool } from "lucide-react";
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

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
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

export function Features() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const titleRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true, margin: "-50px" });

  const features = [
    {
      icon: Share2,
      title: "build faster, think clearer.",
      description:
        "Streamline your workflow with intelligent tools that adapt to how you work, reducing cognitive load and boosting productivity.",
    },
    {
      icon: Users,
      title: "collaborate seamlessly.",
      description:
        "Real-time collaboration that feels natural, with context-aware suggestions and shared understanding built into every interaction.",
    },
    {
      icon: GitMerge,
      title: "integrate effortlessly.",
      description:
        "Connect with your existing tools and workflows through powerful APIs and flexible integrations that work the way you do.",
    },
    {
      icon: PenTool,
      title: "create without limits.",
      description:
        "Unleash your creativity with tools that understand your intent, helping you bring ideas to life faster and more effectively.",
    },
  ];

  return (
    <section
      id="features"
      className="py-32 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden"
    >
      <div className="container mx-auto max-w-6xl">
        <motion.div
          ref={titleRef}
          initial="hidden"
          animate={titleInView ? "visible" : "hidden"}
          variants={titleVariants}
          className="max-w-4xl mx-auto text-center mb-20"
        >
          <motion.h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 text-balance tracking-tight">
            one workspace, endless ways to{" "}
            <motion.span
              className="text-[#2563eb] inline-block"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={
                titleInView
                  ? { opacity: 1, scale: 1 }
                  : { opacity: 0, scale: 0.8 }
              }
              transition={{
                delay: 0.4,
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              focus.
            </motion.span>
          </motion.h2>
          <motion.p
            className="text-sm text-gray-500 uppercase tracking-wider"
            initial={{ opacity: 0 }}
            animate={titleInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            lorel lorem
          </motion.p>
        </motion.div>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              <Card className="p-8 bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
                <motion.div
                  className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mb-6"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <feature.icon
                    className="h-5 w-5 text-black"
                    strokeWidth={1.5}
                  />
                </motion.div>
                <h3 className="text-2xl font-bold mb-4 text-black tracking-tight">
                  {feature.title}
                </h3>
                <p className="text-base text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

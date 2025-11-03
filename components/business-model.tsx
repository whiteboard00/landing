"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { motion, Variants } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  },
};

const titleVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  },
};

const marketVariants: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  },
};

export function BusinessModel() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const titleRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true, margin: "-50px" });
  const marketsRef = useRef(null);
  const marketsInView = useInView(marketsRef, { once: true, margin: "-50px" });
  const plans = [
    {
      name: "Starter",
      price: "$99",
      period: "/month",
      description: "Perfect for small platforms",
      features: [
        "100K API requests",
        "Basic cognitive analytics",
        "Email support",
        "Standard documentation",
      ],
    },
    {
      name: "Professional",
      price: "$299",
      period: "/month",
      description: "For growing EdTech platforms",
      features: [
        "1M API requests",
        "Advanced cognitive analytics",
        "Priority support",
        "Custom integrations",
        "White-label options",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "$999",
      period: "/month",
      description: "For large organizations",
      features: [
        "Unlimited API requests",
        "Full cognitive engine access",
        "Dedicated support",
        "Custom algorithm development",
        "On-premise deployment",
        "SLA guarantee",
      ],
    },
  ];

  return (
    <section
      id="business"
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
            The Cognition API Economy
          </h2>
          <motion.p
            className="text-base text-gray-600 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={titleInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Integrate cognitive intelligence into any platform with our flexible
            API service
          </motion.p>
        </motion.div>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20"
        >
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="h-full"
            >
              <Card
                className={`p-8 relative bg-white shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col h-full ${
                  plan.popular ? "border-gray-300" : ""
                }`}
              >
                {plan.popular && (
                  <motion.div
                    className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-black text-white text-xs font-semibold rounded-full"
                    initial={{ scale: 0, rotate: -180 }}
                    animate={
                      isInView
                        ? { scale: 1, rotate: 0 }
                        : { scale: 0, rotate: -180 }
                    }
                    transition={{
                      delay: 0.4 + index * 0.15,
                      type: "spring",
                      stiffness: 200,
                    }}
                  >
                    Most Popular
                  </motion.div>
                )}
                <div className="mb-6">
                  <h3 className="text-xl font-bold mb-2 text-black">
                    {plan.name}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    {plan.description}
                  </p>
                  <motion.div
                    className="flex items-baseline gap-1"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={
                      isInView
                        ? { opacity: 1, scale: 1 }
                        : { opacity: 0, scale: 0.8 }
                    }
                    transition={{ delay: 0.3 + index * 0.15, duration: 0.5 }}
                  >
                    <span className="text-4xl font-bold text-black">
                      {plan.price}
                    </span>
                    <span className="text-gray-500">{plan.period}</span>
                  </motion.div>
                </div>
                <ul className="space-y-3 mb-6 flex-1">
                  {plan.features.map((feature, idx) => (
                    <motion.li
                      key={idx}
                      className="flex items-start gap-2 text-sm text-gray-600"
                      initial={{ opacity: 0, x: -10 }}
                      animate={
                        isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }
                      }
                      transition={{
                        delay: 0.5 + index * 0.15 + idx * 0.05,
                        duration: 0.4,
                      }}
                    >
                      <Check
                        className="h-5 w-5 text-black shrink-0"
                        strokeWidth={1.5}
                      />
                      <span className="leading-relaxed">{feature}</span>
                    </motion.li>
                  ))}
                </ul>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    className="w-full bg-black text-white hover:bg-gray-800 border-0 transition-all"
                    variant={plan.popular ? "default" : "outline"}
                  >
                    Get Started
                  </Button>
                </motion.div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          ref={marketsRef}
          initial="hidden"
          animate={marketsInView ? "visible" : "hidden"}
          variants={titleVariants}
          className="max-w-4xl mx-auto"
        >
          <h3 className="text-2xl font-bold text-center mb-12 text-black">
            Target Markets
          </h3>
          <motion.div
            initial="hidden"
            animate={marketsInView ? "visible" : "hidden"}
            variants={containerVariants}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {[
              "K-12 EdTech Platforms",
              "Coding Bootcamps",
              "Corporate Training",
              "Tutoring Platforms",
              "Assessment Companies",
              "Language Learning Apps",
            ].map((market, index) => (
              <motion.div
                key={index}
                variants={marketVariants}
                whileHover={{
                  y: -4,
                  scale: 1.02,
                  transition: { duration: 0.2 },
                }}
              >
                <Card className="p-4 text-center bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="font-medium text-black">{market}</div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

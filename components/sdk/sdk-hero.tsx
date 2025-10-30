"use client";

import { Button } from "@/components/ui/button";
import { Code2, BookOpen, Zap } from "lucide-react";
import { motion } from "framer-motion";
import {
  CodeBlock,
  CodeBlockHeader,
  CodeBlockFiles,
  CodeBlockFilename,
  CodeBlockSelect,
  CodeBlockSelectTrigger,
  CodeBlockSelectValue,
  CodeBlockSelectContent,
  CodeBlockSelectItem,
  CodeBlockCopyButton,
  CodeBlockBody,
  CodeBlockItem,
  CodeBlockContent,
} from "@/components/ui/shadcn-io/code-block";

export function SDKHero() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-6 w-fit mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5">
            <Code2 className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">
              SDK v0.1 Now Available
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-balance">
            The Cognitive Learning
            <br />
            <span className="text-primary">API for Developers</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
            Build intelligent learning experiences with our powerful SDK.
            Integrate Bayesian Knowledge Tracing, adaptive learning, and
            cognitive analytics in minutes.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button size="lg" className="gap-2" asChild>
              <a href="https://docs.prepst.com/" target="_blank" rel="noopener noreferrer">
                <Zap className="h-4 w-4" />
                Get Started
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="gap-2 bg-transparent"
              asChild
            >
              <a
                href="https://docs.prepst.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BookOpen className="h-4 w-4" />
                Try our SDK
              </a>
            </Button>
          </div>
          <div className="pt-8">
            <div className="relative group w-fit mx-auto">
              <div className="absolute -inset-[1px] rounded-lg bg-gradient-to-r from-primary/60 via-secondary/60 to-primary/60 opacity-50 blur group-hover:opacity-80 transition" />
              <CodeBlock
                defaultValue="bash"
                className="relative rounded-lg border bg-background/60 backdrop-blur"
                data={[
                  {
                    language: "bash",
                    filename: "terminal",
                    code: "npm install @cognitive-engine/sdk",
                  },
                ]}
              >
                <CodeBlockHeader className="bg-muted text-black border-border rounded-t-md">
                  <CodeBlockFiles>
                    {(item) => (
                      <CodeBlockFilename className="bg-transparent" value={item.language}>
                        {item.filename}
                      </CodeBlockFilename>
                    )}
                  </CodeBlockFiles>
                  <div className="ml-auto flex items-center gap-1 text-neutral-800">
                    <CodeBlockSelect>
                      <CodeBlockSelectTrigger className="text-black">
                        <CodeBlockSelectValue />
                      </CodeBlockSelectTrigger>
                      <CodeBlockSelectContent>
                        {(item) => (
                          <CodeBlockSelectItem value={item.language}>{item.language}</CodeBlockSelectItem>
                        )}
                      </CodeBlockSelectContent>
                    </CodeBlockSelect>
                    <CodeBlockCopyButton />
                  </div>
                </CodeBlockHeader>
                <CodeBlockBody>
                  {(item) => (
                    <CodeBlockItem value={item.language}>
                      <CodeBlockContent language={item.language as any}>{item.code}</CodeBlockContent>
                    </CodeBlockItem>
                  )}
                </CodeBlockBody>
              </CodeBlock>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

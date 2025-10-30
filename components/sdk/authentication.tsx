"use client"

import { Card } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Key, Shield, AlertTriangle } from "lucide-react"
import { motion } from "framer-motion"

export function Authentication() {
  return (
    <section id="authentication" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">Authentication</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Secure your API requests with API keys and environment variables
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6 space-y-4 border-border/40 bg-card/50 backdrop-blur">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <Key className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">API Keys</h3>
              </div>
              <p className="text-muted-foreground">
                Generate API keys from your dashboard. Keep them secure and never commit them to version control.
              </p>
              <pre className="bg-muted/50 border border-border/40 rounded-lg p-4 text-sm overflow-x-auto">
                <code>{`# .env.local
PREPST_API_KEY=ps_live_abc123...
PREPST_SECRET_KEY=ps_secret_xyz789...`}</code>
              </pre>
            </Card>

            <Card className="p-6 space-y-4 border-border/40 bg-card/50 backdrop-blur">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <Shield className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Server-Side Only</h3>
              </div>
              <p className="text-muted-foreground">
                Always use API keys on the server side. Never expose them in client-side code or public repositories.
              </p>
              <pre className="bg-muted/50 border border-border/40 rounded-lg p-4 text-sm overflow-x-auto">
                <code>{`// server.ts
import { PrepSt } from '@prepst/sdk'

const engine = new PrepSt({
  apiKey: process.env.PREPST_API_KEY
})`}</code>
              </pre>
            </Card>
          </div>

          <Alert className="border-accent/40 bg-accent/5">
            <AlertTriangle className="h-4 w-4 text-accent" />
            <AlertDescription className="text-sm">
              <strong>Security Best Practice:</strong> Use environment variables for API keys and rotate them regularly.
              Enable IP whitelisting in your dashboard for additional security.
            </AlertDescription>
          </Alert>
        </motion.div>
      </div>
    </section>
  )
}

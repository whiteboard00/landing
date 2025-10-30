import { SDKHero } from "@/components/sdk/sdk-hero"
import { SDKNavigation } from "@/components/sdk/sdk-navigation"
import { QuickStart } from "@/components/sdk/quick-start"
import { Authentication } from "@/components/sdk/authentication"
import { APIReference, type ApiEndpoint } from "@/components/sdk/api-reference"
import { CodeExamples } from "@/components/sdk/code-examples"
import { UseCases } from "@/components/sdk/use-cases"
import { SDKFooter } from "@/components/sdk/sdk-footer"
import { HowItWorks } from "@/components/docs/how-it-works"
import { CoreConcepts } from "@/components/docs/core-concepts"
import { Implementation } from "@/components/docs/implementation"
import { BestPractices } from "@/components/docs/best-practices"
import { FAQ } from "@/components/docs/faq"

import fs from "fs"
import path from "path"

function loadEndpointsFromOpenAPI(): ApiEndpoint[] {
  try {
    const openApiPath = path.resolve(
      process.cwd(),
      "..",
      "docs-repo",
      "api-reference",
      "openapi.json"
    )
    const fileContent = fs.readFileSync(openApiPath, "utf8")
    const openapi = JSON.parse(fileContent) as any

    const pathsObj = openapi.paths ?? {}
    const endpoints: ApiEndpoint[] = []

    for (const routePath of Object.keys(pathsObj)) {
      const methodsObj = pathsObj[routePath]
      for (const method of Object.keys(methodsObj)) {
        const op = methodsObj[method]
        const summary: string | undefined = op.summary || op.description

        const params: string[] = []
        const parameters = Array.isArray(op.parameters) ? op.parameters : []
        for (const p of parameters) {
          if (p && p.name) params.push(p.name)
        }
        // Add requestBody keys if present (JSON schema)
        if (op.requestBody?.content?.["application/json"]?.schema?.properties) {
          const bodyProps = Object.keys(op.requestBody.content["application/json"].schema.properties)
          params.push(...bodyProps)
        }

        endpoints.push({
          method: method.toUpperCase(),
          path: routePath,
          description: summary,
          params,
        })
      }
    }

    // Stable ordering: by path then method
    endpoints.sort((a, b) => (a.path + a.method).localeCompare(b.path + b.method))
    return endpoints
  } catch {
    return []
  }
}

export default function SDKPage() {
  const endpoints = loadEndpointsFromOpenAPI()
  return (
    <div className="min-h-screen bg-background">
      <SDKNavigation />
      <SDKHero />
      <QuickStart />
      <Authentication />
      <CodeExamples />
      <HowItWorks />
      <CoreConcepts />
      <Implementation />
      <BestPractices />
      <FAQ />
      <APIReference endpoints={endpoints} />
      <UseCases />
      <SDKFooter />
    </div>
  )
}

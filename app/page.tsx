import { Hero } from "@/components/hero"
// import { Problem } from "@/components/problem"
import { SATDemo } from "@/components/sat-demo"
// import { Solution } from "@/components/solution"
// import { Features } from "@/components/features"
// import { Architecture } from "@/components/architecture"
// import { BusinessModel } from "@/components/business-model"
// import { Impact } from "@/components/impact"
import { CTA } from "@/components/cta"
import { Navigation } from "@/components/navigation"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      {/* <Problem /> */}
      <SATDemo />
      {/* <Solution /> */}
      {/* <Features /> */}
      {/* <Architecture /> */}
      {/* <BusinessModel /> */}
      {/* <Impact /> */}
      <CTA />
    </div>
  )
}

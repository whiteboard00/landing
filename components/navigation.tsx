"use client";

import { Button } from "@/components/ui/button";

export function Navigation() {
  return (
    <nav className="fixed top-4 left-0 right-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-center">
          <div className="flex items-center gap-6 px-4 py-2 rounded-full border border-border/30 bg-white/50 dark:bg-white/10 backdrop-blur-xl shadow-sm">
            <a href="/" className="flex items-center gap-2">
              <svg
                width="14"
                height="26"
                viewBox="0 0 14 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.34383 17.7991C5.95706 18.1933 5.96313 18.8264 6.35738 19.2132C6.75163 19.6 7.38477 19.5939 7.77153 19.1997L7.05768 18.4994L6.34383 17.7991ZM13.4995 12.9426C13.4942 12.3903 13.0422 11.9469 12.49 11.9522L3.49038 12.0385C2.93812 12.0438 2.49472 12.4957 2.50001 13.048C2.5053 13.6003 2.95729 14.0437 3.50955 14.0384L11.5092 13.9617L11.5859 21.9613C11.5911 22.5136 12.0431 22.957 12.5954 22.9517C13.1477 22.9464 13.5911 22.4944 13.5858 21.9422L13.4995 12.9426ZM7.05768 18.4994L7.77153 19.1997L13.2134 13.6525L12.4996 12.9522L11.7857 12.2519L6.34383 17.7991L7.05768 18.4994Z"
                  fill="#866EFF"
                />
                <path
                  d="M7.64219 6.78615C7.24794 6.39939 6.61481 6.40545 6.22804 6.7997C5.84128 7.19395 5.84735 7.82709 6.2416 8.21385L6.94189 7.5L7.64219 6.78615ZM12.5092 13.9521C13.0614 13.9468 13.5048 13.4948 13.4995 12.9426L13.4133 3.94299C13.408 3.39073 12.956 2.94733 12.4037 2.95262C11.8515 2.95791 11.4081 3.4099 11.4134 3.96216L11.49 11.9618L3.49041 12.0385C2.93815 12.0438 2.49475 12.4957 2.50004 13.048C2.50533 13.6003 2.95732 14.0437 3.50958 14.0384L12.5092 13.9521ZM6.94189 7.5L6.2416 8.21385L11.7993 13.666L12.4996 12.9522L13.1999 12.2383L7.64219 6.78615L6.94189 7.5Z"
                  fill="#866EFF"
                />
                <path
                  d="M13.5001 25C6.32036 25 0.500061 19.6274 0.500061 13"
                  stroke="#866EFF"
                />
                <path
                  d="M0.499977 13C0.509466 6.0866 6.32977 0.490159 13.5 0.5"
                  stroke="#866EFF"
                />
              </svg>
              <span className="text-lg font-semibold">Prep St.</span>
            </a>
            <div className="hidden md:flex items-center gap-8">
              <a
                href="#sat-demo"
                className="text-sm font-medium text-primary hover:text-primary/80 transition-colors"
              >
                SAT Demo
              </a>
              <a
                href="/sdk"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                SDK
              </a>
            </div>
            <div className="flex items-center gap-3">
              <a
                href="https://satguide-demo-frontend.vercel.app/dashboard"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium h-8 px-3 text-white transition-all"
                style={
                  {
                    backgroundColor: "oklch(0.65 0.18 285)",
                    "--hover-bg": "oklch(0.58 0.18 285)",
                  } as React.CSSProperties & { "--hover-bg": string }
                }
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "var(--hover-bg)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor =
                    "oklch(0.65 0.18 285)";
                }}
              >
                Try for Free
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

"use client"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useState } from "react"

interface WaitlistSignupProps {
  className?: string
}

export function WaitlistSignup({ className }: WaitlistSignupProps) {
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Add API call to handle waitlist signup
    console.log("Waitlist signup:", email)
    setEmail("")
  }

  return (
    <form onSubmit={handleSubmit} className={`flex gap-2 items-center justify-center ${className || ""}`}>
      <Input
        type="email"
        placeholder="Your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-48 max-w-[200px] rounded-2xl border-gray-300 bg-white h-9"
        required
      />
      <Button
        type="submit"
        variant="outline"
        className="rounded-2xl border border-black bg-white text-black hover:bg-gray-50 hover:border-black hover:text-[#8679fc] whitespace-nowrap h-9"
      >
        Join waitlist
      </Button>
    </form>
  )
}


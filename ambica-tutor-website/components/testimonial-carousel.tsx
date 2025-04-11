"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    id: 1,
    content:
      "My daughter's math grades improved from C to A within just 3 months of tutoring with Ambica. Her patient approach and clear explanations made all the difference.",
    author: "Priya Sharma",
    role: "Parent of 8th Grade Student",
  },
  {
    id: 2,
    content:
      "Ambica has a unique ability to make complex science concepts easy to understand. My son now looks forward to his science classes and homework!",
    author: "Rajesh Kumar",
    role: "Parent of 6th Grade Student",
  },
  {
    id: 3,
    content:
      "I was struggling with English literature, but after just a few sessions with Ambica, I started understanding the texts much better. My confidence has grown tremendously.",
    author: "Ananya Patel",
    role: "10th Grade Student",
  },
]

export default function TestimonialCarousel() {
  const [current, setCurrent] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  const next = () => {
    setCurrent((current + 1) % testimonials.length)
  }

  const prev = () => {
    setCurrent((current - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(() => {
      next()
    }, 5000)

    return () => clearInterval(interval)
  }, [current, autoplay])

  return (
    <div className="relative">
      <Card className="border-none shadow-lg">
        <CardContent className="p-6 sm:p-10">
          <Quote className="h-12 w-12 text-primary/20 mb-4" />
          <div className="space-y-4">
            <p className="text-lg sm:text-xl italic">"{testimonials[current].content}"</p>
            <div className="flex flex-col">
              <span className="font-semibold">{testimonials[current].author}</span>
              <span className="text-sm text-gray-500">{testimonials[current].role}</span>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="flex justify-center mt-6 gap-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`h-2 w-2 rounded-full ${index === current ? "bg-primary" : "bg-gray-300"}`}
            onClick={() => {
              setCurrent(index)
              setAutoplay(false)
            }}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>

      <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 hidden md:block">
        <Button
          variant="outline"
          size="icon"
          className="rounded-full bg-background/80 backdrop-blur"
          onClick={() => {
            prev()
            setAutoplay(false)
          }}
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
      </div>

      <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 hidden md:block">
        <Button
          variant="outline"
          size="icon"
          className="rounded-full bg-background/80 backdrop-blur"
          onClick={() => {
            next()
            setAutoplay(false)
          }}
          aria-label="Next testimonial"
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}


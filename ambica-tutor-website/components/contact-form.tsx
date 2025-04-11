"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { toast } from "@/hooks/use-toast"
import { Send } from "lucide-react"

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    grade: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("https://formspree.io/f/mblgakva", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        toast({
          title: "Message sent successfully!",
          description: "I'll get back to you as soon as possible.",
        })

        setFormData({
          name: "",
          email: "",
          phone: "",
          grade: "",
          subject: "",
          message: "",
        })
      } else {
        throw new Error("Failed to submit form")
      }
    } catch (error) {
      toast({
        title: "Something went wrong.",
        description: "Please try again later.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="name" className="text-tea-green-900">
            Full Name
          </Label>
          <Input
            id="name"
            name="name"
            placeholder="Your name"
            required
            value={formData.name}
            onChange={handleChange}
            className="bg-black/30 border-tea-green-100/10 focus:border-persian-red/50 focus:ring-persian-red/10"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email" className="text-tea-green-900">
            Email
          </Label>
          <Input
            id="email"
            name="email"
            placeholder="your.email@example.com"
            required
            type="email"
            value={formData.email}
            onChange={handleChange}
            className="bg-black/30 border-tea-green-100/10 focus:border-persian-red/50 focus:ring-persian-red/10"
          />
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="phone" className="text-tea-green-900">
              Phone Number (Optional)
            </Label>
            <Input
              id="phone"
              name="phone"
              placeholder="Your phone number"
              value={formData.phone}
              onChange={handleChange}
              className="bg-black/30 border-tea-green-100/10 focus:border-persian-red/50 focus:ring-persian-red/10"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="grade" className="text-tea-green-900">
              Student's Grade
            </Label>
            <Select value={formData.grade} onValueChange={(value) => handleSelectChange("grade", value)}>
              <SelectTrigger id="grade" className="bg-black/30 border-tea-green-100/10 focus:ring-persian-red/10">
                <SelectValue placeholder="Select Grade" />
              </SelectTrigger>
              <SelectContent className="bg-black border-tea-green-100/10">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((grade) => (
                  <SelectItem
                    key={grade}
                    value={grade.toString()}
                    className="focus:bg-persian-red/10 focus:text-tea-green-900"
                  >
                    Class {grade}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="subject" className="text-tea-green-900">
            Subject(s) Needed
          </Label>
          <Select value={formData.subject} onValueChange={(value) => handleSelectChange("subject", value)}>
            <SelectTrigger id="subject" className="bg-black/30 border-tea-green-100/10 focus:ring-persian-red/10">
              <SelectValue placeholder="Select Subject" />
            </SelectTrigger>
            <SelectContent className="bg-black border-tea-green-100/10">
              <SelectItem value="mathematics" className="focus:bg-persian-red/10 focus:text-tea-green-900">
                Mathematics
              </SelectItem>
              <SelectItem value="science" className="focus:bg-persian-red/10 focus:text-tea-green-900">
                Science
              </SelectItem>
              <SelectItem value="english" className="focus:bg-persian-red/10 focus:text-tea-green-900">
                English
              </SelectItem>
              <SelectItem value="social_studies" className="focus:bg-persian-red/10 focus:text-tea-green-900">
                Social Studies
              </SelectItem>
              <SelectItem value="programming" className="focus:bg-persian-red/10 focus:text-tea-green-900">
                Programming
              </SelectItem>
              <SelectItem value="languages" className="focus:bg-persian-red/10 focus:text-tea-green-900">
                Languages
              </SelectItem>
              <SelectItem value="all" className="focus:bg-persian-red/10 focus:text-tea-green-900">
                All Subjects
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="message" className="text-tea-green-900">
            Message
          </Label>
          <Textarea
            id="message"
            name="message"
            placeholder="Tell me about your requirements..."
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className="bg-black/30 border-tea-green-100/10 focus:border-persian-red/50 focus:ring-persian-red/10"
          />
        </div>
      </div>
      <Button
        type="submit"
        className="w-full bg-persian-red hover:bg-persian-red-400 text-tea-green-900 font-medium"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Sending..." : "Send Message"}
        <Send className="ml-2 h-4 w-4" />
      </Button>
    </form>
  )
}


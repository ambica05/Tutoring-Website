import type { Metadata } from "next"
import Link from "next/link"
import { BookOpen, GraduationCap, Mail, ArrowRight, Brain, Lightbulb, Rocket, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import ContactForm from "@/components/contact-form"
import AnimatedSection from "@/components/animated-section"
import SubjectCard from "@/components/subject-card"

export const metadata: Metadata = {
  title: "Ambica Ujjaini | Online Tutor",
  description:
    "Professional online tutoring for classes 1-10 covering all academic subjects and beginner-level programming.",
}

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-tea-green-900">
      {/* Navigation */}
      <header className="fixed top-0 z-50 w-full border-b border-tea-green-100/10 bg-black/80 backdrop-blur-md">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <BookOpen className="h-6 w-6 text-persian-red" />
            <span className="font-bold text-xl">Ambica Ujjaini</span>
          </Link>
          <nav className="hidden md:flex gap-8">
            <Link href="#about" className="text-sm font-medium hover:text-persian-red transition-colors duration-300">
              About
            </Link>
            <Link
              href="#education"
              className="text-sm font-medium hover:text-persian-red transition-colors duration-300"
            >
              Education
            </Link>
            <Link
              href="#approach"
              className="text-sm font-medium hover:text-persian-red transition-colors duration-300"
            >
              Approach
            </Link>
            <Link
              href="#subjects"
              className="text-sm font-medium hover:text-persian-red transition-colors duration-300"
            >
              Subjects
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-persian-red transition-colors duration-300">
              Contact
            </Link>
          </nav>
          <Button
            asChild
            variant="outline"
            size="sm"
            className="hidden md:flex border-persian-red text-persian-red hover:bg-persian-red/10 hover:text-tea-green-900"
          >
            <Link href="#contact">Contact Me</Link>
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden text-tea-green-900">
            <span className="sr-only">Toggle menu</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </Button>
        </div>
      </header>

      <main className="flex-1 pt-16">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 md:py-32">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black"></div>
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-tea-green-300/20 to-transparent"></div>
          </div>

          <div className="container relative z-10">
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
              <AnimatedSection className="space-y-6" direction="left">
                <div className="inline-flex items-center rounded-full border border-tea-green-300/20 bg-tea-green-100/5 px-3 py-1 text-sm text-tea-green-300">
                  <span>Online Tutor</span>
                  <div className="ml-2 h-1.5 w-1.5 rounded-full bg-persian-red"></div>
                </div>
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                  Guiding <span className="text-persian-red">Minds</span>,<br />
                  Shaping <span className="text-glaucous">Futures</span>
                </h1>
                <p className="max-w-[600px] text-tea-green-800 md:text-lg">
                  Professional online tutoring for classes 1-10, covering all academic subjects and beginner-level
                  programming with a personalized approach.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild className="bg-persian-red hover:bg-persian-red-400 text-tea-green-900 font-medium">
                    <Link href="#contact" className="group">
                      Contact Me
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </div>
              </AnimatedSection>

              <AnimatedSection className="flex justify-center lg:justify-end" direction="right">
                <div className="relative">
                  <div className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-persian-red to-glaucous opacity-70 blur-sm"></div>
                  <div className="relative h-64 w-64 sm:h-80 sm:w-80 overflow-hidden rounded-full border-2 border-tea-green-100/10">
                    <img src="/profile-photo.jpg" alt="Ambica Ujjaini" className="h-full w-full object-cover" />
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 relative">
          <div className="absolute inset-0 z-0">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-tea-green-300/20 to-transparent"></div>
          </div>

          <div className="container relative z-10">
            <AnimatedSection className="max-w-3xl mx-auto text-center space-y-6" direction="up">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                About <span className="text-persian-red">Me</span>
              </h2>
              <p className="text-tea-green-800 md:text-lg">
                I'm Ambica Ujjaini, a passionate educator dedicated to helping students master academic subjects and
                develop a love for learning. With a strong educational background and a patient teaching approach, I
                create personalized learning experiences that adapt to each student's unique needs and learning style.
              </p>
              <p className="text-tea-green-800 md:text-lg">
                I believe in building strong foundations and making learning enjoyable. My teaching goes beyond
                textbooks – I focus on real-world applications and developing critical thinking skills that will benefit
                students throughout their academic journey and beyond.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="py-20 bg-tea-green-100/5 relative">
          <div className="absolute inset-0 z-0">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-tea-green-300/20 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-tea-green-300/20 to-transparent"></div>
          </div>

          <div className="container relative z-10">
            <AnimatedSection className="text-center mb-12" direction="up">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                My <span className="text-glaucous">Education</span>
              </h2>
            </AnimatedSection>

            <div className="grid gap-8 md:grid-cols-3">
              <AnimatedSection
                className="bg-black/50 border border-tea-green-100/10 rounded-xl p-6 backdrop-blur-sm transition-all duration-300 hover:border-persian-red/30 hover:shadow-md hover:shadow-persian-red/5"
                direction="up"
                delay={0.1}
              >
                <div className="flex flex-col h-full">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-tea-green-100/5">
                    <GraduationCap className="h-6 w-6 text-persian-red" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">School Education</h3>
                  <p className="text-tea-green-800 mb-4">Blooming Dales High School</p>
                  <div className="mt-auto pt-4 border-t border-tea-green-100/10">
                    <p className="text-persian-red font-medium">10.0 CGPA in Class 10</p>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection
                className="bg-black/50 border border-tea-green-100/10 rounded-xl p-6 backdrop-blur-sm transition-all duration-300 hover:border-glaucous/30 hover:shadow-md hover:shadow-glaucous/5"
                direction="up"
                delay={0.2}
              >
                <div className="flex flex-col h-full">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-tea-green-100/5">
                    <GraduationCap className="h-6 w-6 text-glaucous" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Intermediate</h3>
                  <p className="text-tea-green-800 mb-4">Sri Chaitanya Jr Kalasala</p>
                  <div className="mt-auto pt-4 border-t border-tea-green-100/10">
                    <p className="text-glaucous font-medium">947/1000 in Class 12</p>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection
                className="bg-black/50 border border-tea-green-100/10 rounded-xl p-6 backdrop-blur-sm transition-all duration-300 hover:border-madder/30 hover:shadow-md hover:shadow-madder/5"
                direction="up"
                delay={0.3}
              >
                <div className="flex flex-col h-full">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-tea-green-100/5">
                    <GraduationCap className="h-6 w-6 text-madder" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Bachelor's Degree</h3>
                  <p className="text-tea-green-800 mb-4">CMR Technical Campus</p>
                  <div className="mt-auto pt-4 border-t border-tea-green-100/10">
                    <p className="text-madder font-medium">Pursuing graduation 7.71 CGPA</p>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Teaching Approach Section */}
        <section id="approach" className="py-20 relative">
          <div className="container">
            <AnimatedSection className="text-center mb-12" direction="up">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                My Teaching <span className="text-madder">Approach</span>
              </h2>
            </AnimatedSection>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              <AnimatedSection
                className="bg-black/50 border border-tea-green-100/10 rounded-xl p-6 backdrop-blur-sm transition-all duration-300 hover:border-tea-green-300/30 hover:shadow-md hover:shadow-tea-green-300/5"
                direction="up"
                delay={0.1}
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-tea-green-100/5">
                  <Brain className="h-6 w-6 text-tea-green-300" />
                </div>
                <h3 className="text-xl font-bold mb-2">Patient & Adaptable</h3>
                <p className="text-tea-green-800">
                  I mold my teaching style to match each student's unique learning pace and preferences.
                </p>
              </AnimatedSection>

              <AnimatedSection
                className="bg-black/50 border border-tea-green-100/10 rounded-xl p-6 backdrop-blur-sm transition-all duration-300 hover:border-persian-red/30 hover:shadow-md hover:shadow-persian-red/5"
                direction="up"
                delay={0.2}
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-tea-green-100/5">
                  <Lightbulb className="h-6 w-6 text-persian-red" />
                </div>
                <h3 className="text-xl font-bold mb-2">Deep Understanding</h3>
                <p className="text-tea-green-800">
                  I focus on building strong conceptual foundations rather than mere memorization of facts.
                </p>
              </AnimatedSection>

              <AnimatedSection
                className="bg-black/50 border border-tea-green-100/10 rounded-xl p-6 backdrop-blur-sm transition-all duration-300 hover:border-glaucous/30 hover:shadow-md hover:shadow-glaucous/5"
                direction="up"
                delay={0.3}
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-tea-green-100/5">
                  <Rocket className="h-6 w-6 text-glaucous" />
                </div>
                <h3 className="text-xl font-bold mb-2">Real-World Application</h3>
                <p className="text-tea-green-800">
                  I connect academic concepts to practical, everyday scenarios to enhance relevance and retention.
                </p>
              </AnimatedSection>

              <AnimatedSection
                className="bg-black/50 border border-tea-green-100/10 rounded-xl p-6 backdrop-blur-sm transition-all duration-300 hover:border-madder/30 hover:shadow-md hover:shadow-madder/5"
                direction="up"
                delay={0.4}
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-tea-green-100/5">
                  <CheckCircle className="h-6 w-6 text-madder" />
                </div>
                <h3 className="text-xl font-bold mb-2">Results-Oriented</h3>
                <p className="text-tea-green-800">
                  I emphasize regular revision and practice to ensure good academic performance and marks.
                </p>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Subjects Section */}
        <section id="subjects" className="py-20 bg-tea-green-100/5 relative">
          <div className="absolute inset-0 z-0">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-tea-green-300/20 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-tea-green-300/20 to-transparent"></div>
          </div>

          <div className="container relative z-10">
            <AnimatedSection className="text-center mb-12" direction="up">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Subjects <span className="text-tea-green-300">Offered</span>
              </h2>
              <p className="mt-4 max-w-2xl mx-auto text-tea-green-800">
                Comprehensive tutoring across all major subjects for students in classes 1-10, with a focus on building
                strong foundations.
              </p>
            </AnimatedSection>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <SubjectCard
                title="Mathematics"
                description="From basic arithmetic to algebra and geometry for all grades."
                icon="Calculator"
                color="persian-red"
                delay={0.1}
              />
              <SubjectCard
                title="Science"
                description="Physics, Chemistry, and Biology with practical examples."
                icon="Flask"
                color="glaucous"
                delay={0.2}
              />
              <SubjectCard
                title="English"
                description="Grammar, comprehension, writing skills, and literature analysis."
                icon="BookText"
                color="madder"
                delay={0.3}
              />
              <SubjectCard
                title="Social Studies"
                description="History, Geography, Civics, and Economics with engaging approach."
                icon="Globe"
                color="tea-green-300"
                delay={0.4}
              />
              <SubjectCard
                title="Programming"
                description="Beginner-level programming concepts and practical coding skills."
                icon="Code"
                color="persian-red"
                delay={0.5}
              />
              <SubjectCard
                title="Languages"
                description="Hindi, English, and Telugu with focus on reading and writing skills."
                icon="Languages"
                color="glaucous"
                delay={0.6}
              />
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 relative">
          <div className="container">
            <div className="grid gap-8 lg:grid-cols-2">
              <AnimatedSection className="space-y-6" direction="left">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                  Get in <span className="text-persian-red">Touch</span>
                </h2>
                <p className="text-tea-green-800 max-w-md">
                  Have questions or ready to start? Fill out the form and I'll get back to you as soon as possible.
                  Pricing will be discussed based on your specific requirements.
                </p>
                <div className="space-y-4 pt-4">
                  <div className="flex items-start space-x-4">
                    <Mail className="h-6 w-6 text-persian-red mt-0.5" />
                    <div>
                      <h3 className="font-bold">Email</h3>
                      <p className="text-tea-green-800">ambica3007@gmail.com</p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection direction="right">
                <div className="rounded-xl border border-tea-green-100/10 bg-black/50 backdrop-blur-sm p-6">
                  <ContactForm />
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-tea-green-100/10 py-6">
        <div className="container flex flex-col items-center justify-center gap-4 md:flex-row md:justify-between">
          <p className="text-center text-sm text-tea-green-800 md:text-left">
            © {new Date().getFullYear()} Ambica Ujjaini. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="#" className="text-tea-green-800 hover:text-persian-red transition-colors duration-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
              <span className="sr-only">Facebook</span>
            </Link>
            <Link href="#" className="text-tea-green-800 hover:text-glaucous transition-colors duration-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
              <span className="sr-only">Instagram</span>
            </Link>
            <Link href="#" className="text-tea-green-800 hover:text-madder transition-colors duration-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
              </svg>
              <span className="sr-only">Twitter</span>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}


import { Calculator, FlaskRoundIcon as Flask, BookText, Globe, Code, Languages } from "lucide-react"
import AnimatedSection from "./animated-section"

interface SubjectCardProps {
  title: string
  description: string
  icon: string
  color: string
  delay?: number
}

export default function SubjectCard({ title, description, icon, color, delay = 0 }: SubjectCardProps) {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Calculator":
        return <Calculator className={`h-6 w-6 text-${color}`} />
      case "Flask":
        return <Flask className={`h-6 w-6 text-${color}`} />
      case "BookText":
        return <BookText className={`h-6 w-6 text-${color}`} />
      case "Globe":
        return <Globe className={`h-6 w-6 text-${color}`} />
      case "Code":
        return <Code className={`h-6 w-6 text-${color}`} />
      case "Languages":
        return <Languages className={`h-6 w-6 text-${color}`} />
      default:
        return <BookText className={`h-6 w-6 text-${color}`} />
    }
  }

  const getColorClass = (colorName: string) => {
    return `hover:border-${colorName}/30 hover:shadow-${colorName}/5`
  }

  return (
    <AnimatedSection
      className={`bg-black/50 border border-tea-green-100/10 rounded-xl p-6 backdrop-blur-sm transition-all duration-300 ${getColorClass(color)} hover:shadow-md`}
      direction="up"
      delay={delay}
    >
      <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-tea-green-100/5">
        {getIcon(icon)}
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-tea-green-800">{description}</p>
    </AnimatedSection>
  )
}


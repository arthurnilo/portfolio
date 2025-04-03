"use client"

import { useEffect, useState } from "react"
import { ArrowDown } from "lucide-react"

export default function HeroSection() {
  const [typedText, setTypedText] = useState("")
  const fullText = "Full Stack Developer"

  useEffect(() => {
    if (typedText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText(fullText.slice(0, typedText.length + 1))
      }, 100)

      return () => clearTimeout(timeout)
    }
  }, [typedText])

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black opacity-70"></div>
        <div className="absolute inset-0 bg-gradient-radial from-blue-900/20 to-transparent"></div>
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-6">Arthur Nilo</h1>
        <div className="h-8 mb-8">
          <p className="text-xl sm:text-2xl md:text-3xl text-blue-400 font-medium">
            {typedText}
            <span className="animate-pulse">|</span>
          </p>
        </div>
        <p className="text-lg sm:text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
          Transforming ideas into elegant, functional digital experiences through clean code and creative solutions.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="/portfolio"
            className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition-colors duration-300 w-full sm:w-auto"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-8 py-3 bg-transparent border border-white hover:border-blue-400 hover:text-blue-400 text-white font-medium rounded-md transition-colors duration-300 w-full sm:w-auto"
          >
            Contact Me
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#contact" className="text-white hover:text-blue-400 transition-colors duration-300">
          <ArrowDown size={24} />
        </a>
      </div>
    </section>
  )
}


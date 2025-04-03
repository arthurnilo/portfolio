import type React from "react"
import { Github, Linkedin, Mail, Phone } from "lucide-react"

export default function ContactLinks() {
  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-blue-400 mb-4">Get In Touch</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Feel free to reach out through any of these platforms. I'm always open to discussing new projects, creative
            ideas, or opportunities to be part of your vision.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          <ContactCard
            icon={<Github className="h-8 w-8" />}
            title="GitHub"
            description="Check out my code"
            link="https://github.com/arthurnilo"
            linkText="github.com/arthurnilo"
          />

          <ContactCard
            icon={<Linkedin className="h-8 w-8" />}
            title="LinkedIn"
            description="Let's connect"
            link="https://www.linkedin.com/in/arthur-nilo-4ab3a5304/"
            linkText="linkedin.com/in/arthurnilo"
            truncate={true}
          />

          <ContactCard
            icon={<Phone className="h-8 w-8" />}
            title="WhatsApp"
            description="Direct message"
            link="https://wa.me/5527999195885"
            linkText="+55 (27) 99919-5885"
          />

          <ContactCard
            icon={<Mail className="h-8 w-8" />}
            title="Email"
            description="Send me an email"
            link="mailto:tassis.arthur@gmail.com"
            linkText="tassis.arthur@gmail.com"
            truncate={true}
          />
        </div>
      </div>
    </section>
  )
}

interface ContactCardProps {
  icon: React.ReactNode
  title: string
  description: string
  link: string
  linkText: string
  truncate?: boolean
}

function ContactCard({ icon, title, description, link, linkText, truncate = false }: ContactCardProps) {
  return (
    <div className="bg-gray-800 rounded-lg p-6 text-center hover:bg-gray-700 transition-colors duration-300 group h-full flex flex-col">
      <div className="text-blue-400 mb-4 flex justify-center">{icon}</div>
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-gray-400 mb-4">{description}</p>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className={`text-blue-400 hover:text-blue-300 transition-colors duration-300 text-sm mt-auto ${truncate ? "truncate" : "break-all"}`}
        title={linkText}
      >
        {linkText}
      </a>
    </div>
  )
}


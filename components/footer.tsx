"use client"

import type React from "react"

import Link from "next/link"
import { Github, Linkedin, Mail, Phone, ArrowUp } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top section with columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-8 border-b border-gray-800">
          {/* About column */}
          <div>
            <h3 className="text-xl font-bold text-blue-400 mb-4">Arthur Nilo</h3>
            <p className="text-gray-300 mb-4">
              Full Stack Developer passionate about creating elegant, functional digital experiences through clean code
              and creative solutions.
            </p>
            <div className="flex space-x-4">
              <SocialLink href="https://github.com/arthurnilo" icon={<Github size={18} />} />
              <SocialLink href="https://www.linkedin.com/in/arthur-nilo-4ab3a5304/" icon={<Linkedin size={18} />} />
              <SocialLink href="mailto:tassis.arthur@gmail.com" icon={<Mail size={18} />} />
              <SocialLink href="https://wa.me/5527999195885" icon={<Phone size={18} />} />
            </div>
          </div>

          {/* Quick links column */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <FooterLink href="/" text="Home" />
              <FooterLink href="/portfolio" text="Portfolio" />
              <FooterLink href="#contact" text="Contact" />
              <FooterLink href="#" text="Resume" />
            </ul>
          </div>

          {/* Services column */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Services</h3>
            <ul className="space-y-2">
              <FooterLink href="#" text="Web Development" />
              <FooterLink href="#" text="Data Science" />
              <FooterLink href="#" text="Python" />
              <FooterLink href="#" text="C/C++" />
            </ul>
          </div>

          {/* Contact column */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
            <address className="not-italic text-gray-300 space-y-2">
              <p>Vila Velha - ES, Brazil</p>
              <p>
                <a href="mailto:tassis.arthur@gmail.com" className="text-blue-400 hover:text-blue-300 transition-colors">
                  tassis.arthur@gmail.com
                </a>
              </p>
              <p>
                <a href="https://wa.me/5527999195885" className="text-blue-400 hover:text-blue-300 transition-colors">
                  +55 (27) 99919-5885
                </a>
              </p>
            </address>
          </div>
        </div>

        {/* Bottom section with copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">© {currentYear} Arthur Nilo. All rights reserved.</p>
          <div className="flex items-center">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="flex items-center text-blue-400 hover:text-blue-300 transition-colors"
            >
              Back to top <ArrowUp size={16} className="ml-1" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}

interface SocialLinkProps {
  href: string
  icon: React.ReactNode
}

function SocialLink({ href, icon }: SocialLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-300 hover:text-blue-400 transition-colors duration-300"
    >
      {icon}
    </a>
  )
}

interface FooterLinkProps {
  href: string
  text: string
}

function FooterLink({ href, text }: FooterLinkProps) {
  return (
    <li>
      <Link href={href} className="text-gray-300 hover:text-blue-400 transition-colors duration-300">
        {text}
      </Link>
    </li>
  )
}


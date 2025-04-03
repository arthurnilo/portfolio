import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"


export default function Portfolio() {
  // Sample projects data - in a real app, this would come from a database or API
  const projects = [
    {
      id: 1,
      title: "Online Legal Assistance",
      description:
        "A full-stack legal assistence website that provides people to get fast contact with law professionals.",
      longDescription:
        "This project is a comprehensive e-commerce platform built to handle everything from product listings to checkout and payment processing. It features a responsive design, user authentication, shopping cart functionality, and an admin dashboard for managing products, orders, and customers.",
      technologies: ["HTML", "CSS", "JavaScript"],
      imageUrl: "/nexusPrint.png?height=300&width=600",
      demoUrl: "https://nexusjuridicos.netlify.app/",
      githubUrl: "https://github.com/arthurnilo/nexusAssistencia",
      featured: false,
    },
    {
      id: 2,
      title: "Simple Linktree",
      description: "A custom Linktree for seamless navigation to your links.",
      longDescription:
        "An optimized and personalized Linktree that makes it easy to access and share all your essential links in one place.",
      technologies: ["HTML", "CSS"],
      imageUrl: "/landingPrint.png?height=300&width=600",
      demoUrl: "https://arthurnilo.github.io/landing/",
      githubUrl: "https://github.com/arthurnilo/landing",
      featured: true,
    },
    {
      id: 3,
      title: "Online Temperature Search",
      description: "A website for fast temperature searchinig all over the world.",
      longDescription:
        "An intuitive and fast platform to check temperatures worldwide in just a few seconds.",
      technologies: ["HTML", "CSS", "JavaScript"],
      imageUrl: "/temperaturaPrint.png?height=300&width=600",
      demoUrl: "https://temperaturaonline.netlify.app/",
      githubUrl: "https://github.com/arthurnilo/temperaturaOnline",
      featured: true,
    },
    {
      id: 4,
      title: "Ping-Pong Game",
      description: "A ping-pong game vs computer.",
      longDescription:
        "This game it's just to test HTML and entertain you, because it's literally impossible to win haha.",
      technologies: ["HTML"],
      imageUrl: "/pingpongPrint.png?height=300&width=600",
      demoUrl: "https://pingpongvscomputer.netlify.app/",
      githubUrl: "https://github.com/arthurnilo/pingpong",
      featured: true,
    },
    
  ]

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
        <Link href="/" className="inline-flex items-center text-blue-400 hover:text-blue-300 mb-8">
          <ArrowLeft size={20} className="mr-2" />
          Back to Home
        </Link>

        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white mb-4">My Portfolio</h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            A collection of my projects showcasing my skills and experience in web development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>

      <Footer />
    </main>
  )
}

interface Project {
  id: number
  title: string
  description: string
  longDescription: string
  technologies: string[]
  imageUrl: string
  demoUrl: string
  githubUrl: string
  featured: boolean
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-blue-900/20 transition-all duration-300 hover:-translate-y-2">
      <div className="relative h-48 overflow-hidden">
        {project.featured && (
          <div className="absolute top-0 right-0 bg-blue-600 text-white text-xs font-bold px-3 py-1 z-10">Featured</div>
        )}
        <img
          src={project.imageUrl || "/placeholder.svg"}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
        <p className="text-gray-400 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech, index) => (
            <span key={index} className="px-2 py-1 bg-blue-900/30 text-blue-400 text-xs rounded-md">
              {tech}
            </span>
          ))}
        </div>
        <div className="flex flex-wrap gap-3">
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-md transition-colors duration-300"
          >
            Live Demo
          </a>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-transparent border border-white hover:border-blue-400 hover:text-blue-400 text-white text-sm font-medium rounded-md transition-colors duration-300"
          >
            View Code
          </a>
        </div>
      </div>
    </div>
  )
}


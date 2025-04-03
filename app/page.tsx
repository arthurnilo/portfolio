import HeroSection from "@/components/hero-section"
import ContactLinks from "@/components/contact-links"
import Navbar from "@/components/navbar"
import ProjectPreview from "@/components/project-preview"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <Navbar />
      <HeroSection />
      <ContactLinks />
      <section className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-blue-400 mb-4">Featured Projects</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            A preview of my recent work. Visit my portfolio to see more.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProjectPreview
            title="E-commerce Platform"
            description="A full-stack e-commerce solution with payment integration"
            technologies={["React", "Node.js", "MongoDB"]}
            imageUrl="/placeholder.svg?height=200&width=400"
          />
          <ProjectPreview
            title="Task Management App"
            description="A productivity app with real-time updates and collaboration features"
            technologies={["Next.js", "Firebase", "Tailwind CSS"]}
            imageUrl="/placeholder.svg?height=200&width=400"
          />
          <ProjectPreview
            title="Portfolio Website"
            description="A responsive portfolio website with modern design"
            technologies={["HTML", "CSS", "JavaScript"]}
            imageUrl="/placeholder.svg?height=200&width=400"
          />
        </div>
        <div className="text-center mt-12">
          <a
            href="/portfolio"
            className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition-colors duration-300"
          >
            View All Projects
          </a>
        </div>
      </section>
      <Footer />
    </main>
  )
}


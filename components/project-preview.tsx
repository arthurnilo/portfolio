interface ProjectPreviewProps {
  title: string
  description: string
  technologies: string[]
  imageUrl: string
}

export default function ProjectPreview({ title, description, technologies, imageUrl }: ProjectPreviewProps) {
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-blue-900/20 transition-all duration-300 hover:-translate-y-2">
      <div className="relative h-48 overflow-hidden">
        <img
          src={imageUrl || "/placeholder.svg"}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-400 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <span key={index} className="px-2 py-1 bg-blue-900/30 text-blue-400 text-xs rounded-md">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}


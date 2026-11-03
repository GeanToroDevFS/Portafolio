import { cn } from '@/utils/helpers'

interface ProjectCardProps {
  title: string
  description?: string
  badge?: string
  period?: string
  image?: string
  githubLink?: string
  siteLink?: string
  technologies?: readonly string[]
  highlights?: readonly string[]
  priority?: boolean
}

const ProjectCard = ({
  title,
  description,
  badge,
  period,
  image,
  githubLink,
  siteLink,
  technologies = [],
  highlights = [],
  priority = false,
}: ProjectCardProps) => {
  return (
    <article
      className={cn(
        'bg-zinc-950 border border-zinc-900 rounded-xl overflow-hidden flex flex-col h-full',
        'hover:border-zinc-700 transition-all duration-300'
      )}
    >
      {image && (
        <div className="w-full aspect-video bg-zinc-900">
          <img
            src={image}
            alt={`Captura del proyecto ${title}`}
            className="object-cover h-full w-full"
            loading={priority ? 'eager' : 'lazy'}
            decoding="async"
            fetchPriority={priority ? 'high' : 'auto'}
          />
        </div>
      )}

      <div className="flex flex-col flex-grow p-6 gap-4">
        <div>
          <div className="flex flex-wrap items-center gap-2 mb-3">
            {badge && (
              <span className="inline-block text-xs text-zinc-300 border border-zinc-800 px-2.5 py-1 rounded-full">
                {badge}
              </span>
            )}
            {period && <span className="text-xs text-zinc-400">{period}</span>}
          </div>
          <h3 className="text-2xl font-bold text-white tracking-tight">{title}</h3>
          {description && (
            <p className="mt-2 text-sm text-zinc-300 leading-relaxed">{description}</p>
          )}
        </div>

        {highlights.length > 0 && (
          <ul className="space-y-2">
            {highlights.map((highlight) => (
              <li key={highlight} className="text-sm text-zinc-400 leading-relaxed pl-4 relative">
                <span className="absolute left-0 top-2 w-1.5 h-1.5 rounded-full bg-zinc-600" aria-hidden="true" />
                {highlight}
              </li>
            ))}
          </ul>
        )}

        {technologies.length > 0 && (
          <ul className="flex flex-wrap gap-2 mt-auto" aria-label={`Tecnologías de ${title}`}>
            {technologies.map((tech) => (
              <li key={tech}>
                <span className="px-3 py-1 bg-zinc-900 border border-zinc-800 rounded-full text-xs text-zinc-300">
                  {tech}
                </span>
              </li>
            ))}
          </ul>
        )}

        {(githubLink || siteLink) && (
          <div className="flex flex-wrap gap-3 pt-2">
            {githubLink && (
              <a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-zinc-900 border border-zinc-800 rounded-lg text-sm text-zinc-300 hover:border-zinc-600 hover:text-white transition-all"
                aria-label={`Ver código de ${title} en GitHub`}
              >
                GitHub
              </a>
            )}
            {siteLink && (
              <a
                href={siteLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-white hover:bg-zinc-100 rounded-lg text-sm text-black font-medium transition-all"
                aria-label={`Ver sitio de ${title}`}
              >
                Ver sitio
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  )
}

export default ProjectCard

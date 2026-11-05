import { useState } from 'react'
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
  const [panel, setPanel] = useState<'description' | 'technologies'>('description')
  const showDescription = panel === 'description'
  const descriptionId = `descripcion-${title.replace(/\s+/g, '-')}`
  const technologiesId = `tecnologias-${title.replace(/\s+/g, '-')}`

  return (
    <article
      className={cn(
        'bg-zinc-950 border border-zinc-900 rounded-xl overflow-hidden flex flex-col h-full',
        'hover:border-zinc-700 transition-all duration-300'
      )}
    >
      <div className="w-full aspect-video bg-zinc-900 border-b border-zinc-800">
        {image ? (
          <img
            src={image}
            alt={`Captura del proyecto ${title}`}
            className="object-cover h-full w-full"
            loading={priority ? 'eager' : 'lazy'}
            decoding="async"
            fetchPriority={priority ? 'high' : 'auto'}
          />
        ) : (
          <div className="h-full w-full flex flex-col items-center justify-center gap-2 text-zinc-500">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span className="text-sm">Aquí va la foto</span>
          </div>
        )}
      </div>

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
        </div>

        <div className="flex items-center gap-8" role="tablist" aria-label={`Contenido de ${title}`}>
          <button
            type="button"
            role="tab"
            id={`${descriptionId}-tab`}
            className={cn(
              'relative inline-flex w-fit pb-3 text-base',
              showDescription ? 'text-white font-medium' : 'text-zinc-400 hover:text-white'
            )}
            aria-selected={showDescription}
            aria-controls={descriptionId}
            onClick={() => setPanel('description')}
          >
            Descripción
            {showDescription && (
              <span className="absolute bottom-0 left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-white" aria-hidden="true" />
            )}
          </button>
          <button
            type="button"
            role="tab"
            id={`${technologiesId}-tab`}
            className={cn(
              'relative inline-flex w-fit pb-3 text-base',
              !showDescription ? 'text-white font-medium' : 'text-zinc-400 hover:text-white'
            )}
            aria-selected={!showDescription}
            aria-controls={technologiesId}
            onClick={() => setPanel('technologies')}
          >
            Tecnologías
            {!showDescription && (
              <span className="absolute bottom-0 left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-white" aria-hidden="true" />
            )}
          </button>
        </div>

        {showDescription ? (
          <div role="tabpanel" id={descriptionId} aria-labelledby={`${descriptionId}-tab`}>
            {description && <p className="text-sm text-zinc-300 leading-relaxed text-justify hyphens-none">{description}</p>}
          </div>
        ) : (
          <div role="tabpanel" id={technologiesId} aria-labelledby={`${technologiesId}-tab`} className="space-y-4">
            {technologies.length > 0 && (
              <ul className="flex flex-wrap gap-2" aria-label={`Tecnologías de ${title}`}>
                {technologies.map((tech) => (
                  <li key={tech}>
                    <span className="inline-flex px-3 py-1 bg-zinc-900 border border-zinc-800 rounded-full text-xs text-zinc-300">
                      {tech}
                    </span>
                  </li>
                ))}
              </ul>
            )}
            {highlights.length > 0 && (
              <ul className="space-y-2">
                {highlights.map((highlight) => (
                  <li key={highlight} className="text-sm text-zinc-400 leading-relaxed text-justify hyphens-none pl-4 relative">
                    <span className="absolute left-0 top-2 w-1.5 h-1.5 rounded-full bg-zinc-600" aria-hidden="true" />
                    {highlight}
                  </li>
                ))}
              </ul>
            )}
          </div>
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

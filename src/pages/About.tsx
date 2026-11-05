import { motion, useReducedMotion } from 'framer-motion'
import FadeIn from '@/components/FadeIn'
import {
  PERSONAL_INFO,
  SKILL_GROUPS,
  TIMELINE,
} from '@/constants'
import { socialLinks } from '@/config/publicEnv'
import useSEO from '@/hooks/useSEO'
import GeanFoto from '@/assets/gean-foto.jpg'
import GithubIcon from '@/assets/github-icon.png'
import LinkedinIcon from '@/assets/linkedln-icon.png'
import UnivalleLogo from '@/assets/Univalle.svg.png'
import FextonLogo from '@/assets/fexton-logo.gif'

const LOGOS: Record<string, string> = {
  univalle: UnivalleLogo,
  fexton: FextonLogo,
}

const ColombiaFlag = () => (
  <svg width="22" height="15" viewBox="0 0 22 15" aria-label="Bandera de Colombia">
    <rect width="22" height="7.5" fill="#FCD116" />
    <rect y="7.5" width="22" height="3.75" fill="#003893" />
    <rect y="11.25" width="22" height="3.75" fill="#CE1126" />
  </svg>
)

const GraduationIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
  </svg>
)

const BriefcaseIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
)

const About = () => {
  const reduceMotion = useReducedMotion()
  useSEO({
    title: `Sobre mí — ${PERSONAL_INFO.name}`,
    description: PERSONAL_INFO.description,
  })

  return (
    <div className="min-h-screen px-6 py-24">
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <div className="flex flex-col md:flex-row items-center gap-12 mb-24">
            <div className="flex-shrink-0 w-48 md:w-64">
              <img
                src={GeanFoto}
                alt={`Foto de ${PERSONAL_INFO.name}`}
                className="w-full aspect-square rounded-full object-cover object-top border border-zinc-800 bg-white"
              />
            </div>

            <div className="text-center md:text-left min-w-0">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
              <ColombiaFlag />
              <p className="text-zinc-400 text-xs tracking-widest uppercase">
                {PERSONAL_INFO.location}
              </p>
            </div>
            <h2 className="text-sm text-zinc-400 mb-1">Hola, soy</h2>
            <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-3">
              {PERSONAL_INFO.name}
            </h1>
            <p className="text-xl md:text-2xl text-zinc-300 font-light mb-2">
              {PERSONAL_INFO.role}
            </p>
            <p className="text-sm md:text-base text-zinc-400 mb-6">
              {PERSONAL_INFO.headline}
            </p>
            <p className="text-zinc-300 leading-relaxed text-justify hyphens-none mb-4">
              {PERSONAL_INFO.description}
            </p>
            <p className="text-zinc-400 leading-relaxed text-justify hyphens-none">
              {PERSONAL_INFO.approach}
            </p>

            <nav className="flex flex-wrap items-center justify-center md:justify-start gap-3 mt-8" aria-label="Redes sociales">
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-zinc-900 border border-zinc-800 rounded-xl hover:border-zinc-600 hover:bg-zinc-800 transition-all"
                aria-label="GitHub — abre en nueva pestaña"
              >
                <img src={GithubIcon} alt="" className="w-5 h-5 invert" />
              </a>
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-zinc-900 border border-zinc-800 rounded-xl hover:border-zinc-600 hover:bg-zinc-800 transition-all"
                aria-label="LinkedIn — abre en nueva pestaña"
              >
                <img src={LinkedinIcon} alt="" className="w-5 h-5" />
              </a>
              <a
                href={PERSONAL_INFO.cvPath}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 bg-zinc-900 border border-zinc-800 rounded-xl text-sm text-zinc-300 hover:border-zinc-600 hover:text-white hover:bg-zinc-800 transition-all"
                aria-label="Descargar CV"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                CV
              </a>
            </nav>
            </div>
          </div>
        </FadeIn>

        <FadeIn>
          <section aria-labelledby="skills-title" className="mb-20">
            <p className="text-zinc-400 text-xs tracking-widest uppercase mb-2">Conocimientos</p>
            <h2 id="skills-title" className="text-2xl font-bold text-white tracking-tight mb-8">
              Habilidades técnicas
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {SKILL_GROUPS.map((group) => (
                <article key={group.title} className="border border-zinc-800 rounded-xl p-5 bg-zinc-950/60">
                  <h3 className="text-white font-medium mb-3">{group.title}</h3>
                  <ul className="flex flex-wrap gap-2" aria-label={group.title}>
                    {group.items.map((item) => (
                      <li key={item}>
                        <span className="text-xs text-zinc-300 border border-zinc-800 bg-zinc-900 px-2.5 py-1 rounded-full">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section aria-labelledby="experience-title" className="mb-20">
            <p className="text-zinc-600 text-xs tracking-widest uppercase mb-2">Recorrido</p>
            <h2 id="experience-title" className="text-2xl font-bold text-white tracking-tight mb-10">
              Experiencia
            </h2>

            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-px bg-zinc-800" aria-hidden="true" />
              <ol className="space-y-10">
                {TIMELINE.map((item) => (
                  <motion.li
                    key={item.id}
                    className="relative pl-12"
                    initial={reduceMotion ? false : { opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <div className="absolute left-0 top-1 w-8 h-8 rounded-full flex items-center justify-center border bg-zinc-900 text-zinc-300 border-zinc-800">
                      {item.type === 'education' ? <GraduationIcon /> : <BriefcaseIcon />}
                    </div>

                    <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
                      {'logo' in item && LOGOS[item.logo] ? (
                        <div className="inline-flex items-center gap-2.5">
                          <div className="bg-white rounded-lg px-2.5 py-1.5 inline-flex items-center h-10">
                            <img
                              src={LOGOS[item.logo]}
                              alt={`Logo de ${item.company}`}
                              className={item.logo === 'fexton' ? 'h-7 w-auto object-contain' : 'h-6 w-auto object-contain'}
                            />
                          </div>
                          <span className="text-sm font-medium text-zinc-300">{item.company}</span>
                        </div>
                      ) : (
                        <div className="bg-zinc-900 border border-zinc-800 rounded-lg px-3 py-1.5 inline-flex items-center h-10">
                          <span className="text-sm text-zinc-300 font-medium">{item.company}</span>
                        </div>
                      )}

                      <div className="flex items-center gap-2">
                        <span className="text-xs text-zinc-400">{item.duration}</span>
                        {item.type === 'education' && (
                          <span className="text-xs text-zinc-400 border border-zinc-800 px-2 py-0.5 rounded-full">
                            Educación
                          </span>
                        )}
                      </div>
                    </div>

                    <h3 className="text-white font-semibold text-lg leading-tight">{item.role}</h3>
                    <p className="text-zinc-400 text-sm mb-2">{item.location}</p>
                    <p className="text-zinc-300 text-sm leading-relaxed text-justify hyphens-none mb-3">{item.description}</p>

                    <ul className="flex flex-wrap gap-2" aria-label="Tecnologías usadas">
                      {item.tags.map((tag) => (
                        <li key={tag}>
                          <span className="text-xs text-zinc-300 border border-zinc-800 bg-zinc-900 px-2.5 py-1 rounded-full">
                            {tag}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </motion.li>
                ))}
              </ol>
            </div>
          </section>
        </FadeIn>
      </div>
    </div>
  )
}

export default About

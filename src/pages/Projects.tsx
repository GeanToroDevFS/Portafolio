import FadeIn from '@/components/FadeIn'
import ProjectCard from '@/components/Projectcard'
import { EXPERIENCE, PERSONAL_INFO, PROJECTS_DATA } from '@/constants'
import useSEO from '@/hooks/useSEO'
import biocontrolFoto from '@/assets/biocontrol-dashboard.png'
import empaqueFoto from '@/assets/fexton-empaque.png'
import botFoto from '@/assets/bot-atencion.png'
import wooFoto from '@/assets/woocommerce-plugin.png'
import infraFoto from '@/assets/infraestructura.png'
import produccionFoto from '@/assets/control-produccion.png'

const PROJECT_PHOTOS: Record<string, string> = {
  'Fexton Biocontrol': biocontrolFoto,
  'Fexton Empaque': empaqueFoto,
  'Bot de atención al cliente con IA': botFoto,
  'Integración Symfony–WooCommerce': wooFoto,
  'Infraestructura, redes y soporte técnico': infraFoto,
  'Control de Producción': produccionFoto,
}

const fexton = EXPERIENCE[0]

const Projects = () => {
  useSEO({
    title: `Proyectos — ${PERSONAL_INFO.name}`,
    description: 'Proyectos de Fexton S.A.S. y proyectos académicos de la Universidad del Valle.',
  })

  return (
    <section className="min-h-screen flex flex-col items-center py-24 px-6" aria-labelledby="projects-title">
      <div className="max-w-5xl w-full">
        <FadeIn>
          <p className="text-zinc-400 text-xs tracking-widest uppercase mb-3">Fexton S.A.S.</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4" id="projects-title">
            Proyectos
          </h2>
          <p className="text-zinc-400 mb-16 max-w-2xl leading-relaxed text-justify hyphens-none">
            {fexton.role}. {fexton.description}
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {fexton.areas.map((area, i) => (
            <FadeIn key={area.title} delay={i * 0.08}>
              <ProjectCard
                title={area.title}
                badge={area.subtitle}
                description={area.points[0]}
                highlights={area.points.slice(1)}
                technologies={area.technologies}
                image={PROJECT_PHOTOS[area.title]}
                priority={i === 0}
              />
            </FadeIn>
          ))}
        </div>

        <FadeIn>
          <p className="text-zinc-400 text-xs tracking-widest uppercase mb-3 mt-20">Universidad del Valle</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">
            Proyectos académicos
          </h2>
          <p className="text-zinc-400 mb-10 max-w-2xl leading-relaxed text-justify hyphens-none">
            Trabajos de formación, separados de la experiencia profesional.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PROJECTS_DATA.map((project, i) => (
            <FadeIn key={project.id} delay={i * 0.08}>
              <ProjectCard
                title={project.title}
                description={project.description}
                badge={project.badge}
                period={project.period}
                githubLink={project.githubLink}
                siteLink={project.siteLink}
                technologies={project.technologies}
                highlights={project.highlights}
              />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects

import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'
import { PERSONAL_INFO } from '@/constants'
import { socialLinks } from '@/config/publicEnv'
import useSEO from '@/hooks/useSEO'

const ease = [0.22, 1, 0.36, 1] as const

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
}

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
}

const Hero = () => {
  const reduceMotion = useReducedMotion()
  useSEO({
    title: `${PERSONAL_INFO.name} — ${PERSONAL_INFO.role}`,
    description: PERSONAL_INFO.description,
  })

  return (
    <section className="min-h-screen flex flex-col justify-center px-6 pt-24 pb-16" aria-label="Presentación">
      <motion.div
        className="max-w-4xl mx-auto w-full text-center"
        variants={container}
        initial={reduceMotion ? false : 'hidden'}
        animate="show"
      >
        <motion.p variants={item} className="text-zinc-400 text-xs tracking-widest uppercase mb-8">
          {PERSONAL_INFO.role}
        </motion.p>

        <motion.h1
          variants={item}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight leading-[0.95] mb-6"
        >
          <span className="block">{PERSONAL_INFO.givenName}</span>
          <span className="block">{PERSONAL_INFO.familyName}</span>
        </motion.h1>

        <motion.p variants={item} className="text-base md:text-lg text-zinc-300 font-medium max-w-2xl mx-auto mb-12 text-balance">
          {PERSONAL_INFO.headline}
        </motion.p>

        <motion.div variants={item} className="flex flex-wrap gap-4 justify-center">
          <Link
            to="/projects"
            className="flex items-center gap-2 px-6 py-3 bg-white hover:bg-zinc-100 text-black font-medium rounded-lg transition-all text-sm"
          >
            Ver proyectos
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
          <a
            href={socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-transparent border border-zinc-800 hover:border-zinc-600 text-zinc-300 hover:text-white rounded-lg transition-all text-sm"
          >
            GitHub
            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
            </svg>
          </a>
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-transparent border border-zinc-800 hover:border-zinc-600 text-zinc-300 hover:text-white rounded-lg transition-all text-sm"
            >
            LinkedIn
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero

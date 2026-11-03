export interface Project {
  id: string
  title: string
  description?: string
  badge?: string
  period?: string
  image?: string
  githubLink?: string
  siteLink?: string
  technologies: readonly string[]
  highlights?: readonly string[]
}

export interface ExperienceArea {
  title: string
  subtitle: string
  points: readonly string[]
  technologies: readonly string[]
}

export interface ExperienceItem {
  id: string
  role: string
  company: string
  location?: string
  description: string
  areas: readonly ExperienceArea[]
}

export interface EducationItem {
  id: string
  title: string
  institution: string
  period: string
  location: string
  logo?: string
}

export interface SkillGroup {
  title: string
  items: readonly string[]
}

export interface FormData {
  name: string
  email: string
  message: string
}

export interface FormErrors {
  name?: string
  email?: string
  message?: string
  submit?: string
}

export interface NavItem {
  label: string
  href: string
}

export interface TechItem {
  name: string
  icon?: string
}

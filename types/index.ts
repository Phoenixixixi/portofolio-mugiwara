export interface Project {
  header: string
  description: string
  image: string
  github?: string
  link: string
  colSpan: {
    default: number
    md: number
  }
  className?: string
  stack: string[]
}

export interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  points: string[];
}

export interface WorkItem {
  company: string;
  role: string;
  period: string;
  description: string;
}

export interface NavItem {
  name: string;
  link: string;
}

export type State = {
  errors?: {
    name?: string[]
    email?: string[]
    message?: string[]
  }
  message?: string | null
}

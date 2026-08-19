import { Project } from '@/types'

export const projects: Project[] = [
  {
    header: 'MindsetNgedit',
    description:
      'A creative digital community platform focusing on education, collaboration, and empowering the next generation of Indonesian designers and creators.',
    image: '/images/mindsetngedit.png',
    link: 'https://mindsetngedit.com',
    colSpan: { default: 'col-span-2', md: 'col-span-1' },
    className: 'bg-pink-800',
    stack: ['React', 'Node.js', 'Express', 'MySQL', 'Tailwind CSS'],
  },
  {
    header: 'Acme Admin Dashboard',
    description:
      'A robust financial management dashboard built with Next.js, featuring real-time invoice tracking, customer management, and insightful data visualizations.',
    image: '/images/next-learn.png',
    link: 'https://next-js-dashboard-ten-pink.vercel.app',
    colSpan: { default: 'col-span-1', md: 'col-span-1' },
    className: 'bg-purple-800',
    stack: ['Next.js', 'PostgreSQL', 'Tailwind CSS'],
  },
  {
    header: 'Mugiwara Portfolio',
    description:
      'A modern, highly interactive personal portfolio showcasing fullstack development skills with a focus on creative design and performance.',
    image: '/images/porto-react.png',
    link: 'https://portofolio-mugiwara.vercel.app',
    colSpan: { default: 'col-span-1', md: 'col-span-1' },
    className: 'bg-blue-800',
    stack: ['React', 'Node.js', 'Express', 'MySQL', 'Tailwind CSS'],
  },
  {
    header: 'Varnell Collection',
    description:
      'A modern website for varnellcollection. varnell is a brand from bandung that sell and create a leather shoes.',
    image: '/images/varnell.webp',
    link: 'https://varnellcollection.com',
    colSpan: { default: 'col-span-1', md: 'col-span-1' },
    className: 'bg-green-800',
    stack: ['React', 'Laravel', 'MySQL', 'Tailwind CSS'],
  },
  {
    header: 'KCIC IT Reporting System',
    description:
      'An efficent system workflow for reporting device issues within KCIC, using waha for receive a message from whatsap and automate the reporting process using n8n with gemini model',
    image: '/images/reporting.webp',
    link: 'https://kcic.kamargelap.online',
    colSpan: { default: 'col-span-2', md: 'col-span-2' },
    className: 'bg-red-800 col-span-2',
    stack: ['React', 'Laravel', 'MySQL', 'Tailwind CSS'],
  },
]

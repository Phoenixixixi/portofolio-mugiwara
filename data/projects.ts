import { Project } from "@/types"

export const projects: Project[] = [
    {
        header: "MindsetNgedit",
        description: "A creative digital community platform focusing on education, collaboration, and empowering the next generation of Indonesian designers and creators.",
        image: "/images/mindsetngedit.png",
        link: "https://mindsetngedit.com",
        colSpan: { default: 1, md: 2 },
        className: 'bg-pink-800',
        stack: ["React", "Node.js", "Express", "MySQL", "Tailwind CSS"]
    },
    {
        header: "Acme Admin Dashboard",
        description: "A robust financial management dashboard built with Next.js, featuring real-time invoice tracking, customer management, and insightful data visualizations.",
        image: "/images/next-learn.png",
        link: "https://nextjs.org/learn",
        colSpan: { default: 1, md: 1 },
        className: 'bg-purple-800',
        stack: ["Next.js", "PostgreSQL", "Tailwind CSS"]
    },
    {
        header: "Mugiwara Portfolio",
        description: "A modern, highly interactive personal portfolio showcasing fullstack development skills with a focus on creative design and performance.",
        image: "/images/porto-react.png",
        link: "#",
        colSpan: { default: 1, md: 1 },
        className: 'bg-blue-800',
        stack: ["React", "Node.js", "Express", "MySQL", "Tailwind CSS"]
    }
]

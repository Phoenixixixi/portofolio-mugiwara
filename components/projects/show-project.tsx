'use client'

import { WobbleCard } from "../ui/wobble-card"
import Image from "next/image"
import { Project } from "@/types"
import { projects } from "@/data/projects"
import { useRouter } from "next/navigation"

const TechIcon = ({ name }: { name: string }) => {
    // Simple SVG icons for tech stack
    switch (name) {
        case "React":
            return (
                <Image src={'/svgs/react.svg'} alt="react logo " width={24} height={24} />
            )
        case "Next.js":
            return (
                <Image src={'/svgs/next.svg'} alt="next logo " width={24} height={24} />
            )
        case "Node.js":
            return (
                <Image src={'/svgs/node.svg'} alt="node logo " width={24} height={24} />
            )
        case "Tailwind CSS":
            return (
                <Image src={'/svgs/tailwind.svg'} alt="tailwind logo " width={24} height={24} />
            )
        case "MySQL":
            return (
                <Image src={'/svgs/mysql.svg'} alt="mysql logo " width={24} height={24} />
            )
        case "PostgreSQL":
            return (
                <Image src={'/svgs/postgresql.svg'} alt="postgresql logo " width={24} height={24} />
            )
        case "Express":
            return (
                <Image src={'/svgs/express.svg'} alt="express logo " width={24} height={24} />
            )
        default:
            return null
    }
}

export default function ShowProject() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-7xl mx-auto w-full">
            {projects.map((project, index) => (
                <CardProject
                    key={index}
                    project={project}
                    className={project.className}
                />
            ))}
        </div>
    )
}

function CardProject({ project, className }: { project: Project, className?: string }) {
    const router = useRouter()

    const handleClick = () => {
        if (project.link !== "#") {
            router.push(project.link)
        }
    }

    return (
        <WobbleCard
            containerClassName={`col-span-${project.colSpan.default} md:col-span-${project.colSpan.md} h-full bg-zinc-900 min-h-[500px] lg:min-h-[300px] cursor-pointer ${className}`}
        >
            <div onClick={handleClick} className="relative h-full">
                <div className="max-w-xs relative z-10">
                    <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                        {project.header}
                    </h2>
                    <p className="mt-4 text-left text-base/6 text-neutral-200">
                        {project.description}
                    </p>

                    {/* Tech Stack Icons */}
                    <div className="flex flex-wrap gap-3 mt-6">
                        {project.stack.map((tech) => (
                            <div key={tech} className="flex items-center gap-1.5" title={tech}>
                                <div className="bg-white p-1 rounded-full">

                                    <TechIcon name={tech} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <Image
                    src={project.image}
                    width={500}
                    height={500}
                    unoptimized
                    alt={project.header}
                    className={`absolute -right-60 md:-right-[20%] ${project.colSpan.md === 1 ? 'lg:-right-[35%]' : 'lg:-right-[10%]'} top-[50%] md:top-[10%] -bottom-10 object-contain rounded-2xl opacity-50 hover:opacity-100 transition-opacity duration-500`}
                />
            </div>
        </WobbleCard>
    )
}
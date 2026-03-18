"use client";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";
import {
  FileCode2,
  Globe,
  Layers,
  Layout,
  Wind,
  Code2,
  Server,
  Database,
  FileJson,
  Palette,
  FileType2,
  Cpu
} from "lucide-react";

export function Stack() {
  return (
    <div className="h-[20rem] rounded-md flex flex-col antialiased bg-transparent dark:bg-grid-white/[0.05] relative overflow-hidden items-center justify-center">
      <InfiniteMovingCards
        items={techStack}
        direction="right"
        speed="normal"
      />
      <InfiniteMovingCards
        items={techStack}
        direction="left"
        speed="normal"
      />
    </div>
  );
}

const techStack = [
  {
    name: "Next.js",
    icon: <Globe className="h-6 w-6 text-blue-500" />,
    link: "https://nextjs.org/docs",
  },
  {
    name: "React.js",
    icon: <Code2 className="h-6 w-6 text-cyan-400" />,
    link: "https://react.dev",
  },
  {
    name: "Tailwind CSS",
    icon: <Wind className="h-6 w-6 text-sky-400" />,
    link: "https://tailwindcss.com/docs",
  },
  {
    name: "Node.js",
    icon: <Server className="h-6 w-6 text-green-500" />,
    link: "https://nodejs.org/en/docs",
  },
  {
    name: "PostgreSQL",
    icon: <Database className="h-6 w-6 text-indigo-400" />,
    link: "https://www.postgresql.org/docs/",
  },
  {
    name: "MySQL",
    icon: <Database className="h-6 w-6 text-blue-600" />,
    link: "https://dev.mysql.com/doc/",
  },
  {
    name: "Express.js",
    icon: <FileJson className="h-6 w-6 text-zinc-400" />,
    link: "https://expressjs.com/",
  },
  {
    name: "Shadcn UI",
    icon: <Layout className="h-6 w-6 text-zinc-900 dark:text-zinc-100" />,
    link: "https://ui.shadcn.com/",
  },
  {
    name: "Aceternity UI",
    icon: <Layers className="h-6 w-6 text-purple-500" />,
    link: "https://ui.aceternity.com/",
  },
  {
    name: "HTML5",
    icon: <FileType2 className="h-6 w-6 text-orange-500" />,
    link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },
  {
    name: "CSS3",
    icon: <Palette className="h-6 w-6 text-blue-500" />,
    link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
  {
    name: "JavaScript",
    icon: <FileCode2 className="h-6 w-6 text-yellow-400" />,
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
];

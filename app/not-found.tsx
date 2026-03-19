'use client'

import { CircleX, Construction } from "lucide-react"
import { usePathname } from "next/navigation"

export default function NotFound() {
    const pathname = usePathname()


    const comingSoonPaths = ["/projects", "/skills", "/contact", "/contacts"]
    const isComingSoon = comingSoonPaths.includes(pathname)

    return (
        <div className="h-[70vh] w-full flex justify-center items-center">
            <div className="flex flex-col items-center gap-8">
                {isComingSoon ? (
                    <Construction className="h-24 w-24 text-zinc-400" strokeWidth={0.5} />
                ) : (
                    <CircleX className="h-24 w-24 text-zinc-400" strokeWidth={0.5} />
                )}

                <div className="flex flex-row items-center gap-8">
                    <h1 className="text-6xl font-extralight tracking-tighter">
                        {isComingSoon ? "503" : "404"}
                    </h1>
                    <div className="h-12 w-[1px] bg-zinc-300 dark:bg-zinc-700" />
                    <div className="flex flex-col">
                        <h2 className="text-xl font-medium uppercase tracking-widest">
                            {isComingSoon ? "Coming Soon" : "Not Found"}
                        </h2>
                        <p className="text-sm text-zinc-500 dark:text-zinc-400">
                            {isComingSoon
                                ? `The page ${pathname} is under construction.`
                                : "The page you are looking for does not exist."}
                        </p>
                    </div>
                </div>

                <a
                    href="/"
                    className="mt-4 px-6 py-2 rounded-full border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors text-sm font-medium"
                >
                    Back to Home
                </a>
            </div>
        </div>
    )
}
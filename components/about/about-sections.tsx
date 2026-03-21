import React from "react"
import { CardProfile } from "./card-profile"
import { Separator } from "@/components/ui/separator"

export function Profile({ children }: { children: React.ReactNode }) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <CardProfile />
            <div>
                <h1 className="font-bold md:text-3xl">About Me</h1>
                <Separator className="my-2" />
                <p className="text-sm font-medium text-zinc-600 dark:text-zinc-400 mt-4 leading-relaxed text-justify">
                    {children}
                </p>
            </div>
        </div>
    )
}

export function EduWorkSection({ children }: { children: React.ReactNode }) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {children}
        </div>
    )
}

export function TechStackSection({ children }: { children: React.ReactNode }) {
    return (
        <div className="w-full mt-12">
            <div className="flex flex-col items-center mb-8">
                <h2 className="font-bold text-2xl md:text-3xl">My Tech Stack</h2>
                <div className="h-1 w-20 bg-zinc-200 dark:bg-zinc-800 rounded-full mt-2" />
                <p className="text-sm text-zinc-500 mt-2">The tools and technologies I use to bring ideas to life.</p>
            </div>
            {children}
        </div>
    )
}

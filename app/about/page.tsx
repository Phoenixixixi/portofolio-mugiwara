import { CardProfile } from "@/components/about/card-profile"
import { Separator } from "@/components/ui/separator"
import { EducationList } from "@/components/about/education-list"
import { WorkExperience } from "@/components/about/work-experience"
import { Stack } from "@/components/home/stack"

export default function Page() {

    return (
        <div className="flex flex-col py-10 gap-16">
            {/* Top Section: Profile & About Me */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <CardProfile />
                <div>
                    <h1 className="font-bold md:text-3xl">About Me</h1>
                    <Separator className="my-2" />
                    <p className="text-sm font-medium text-zinc-600 dark:text-zinc-400 mt-4 leading-relaxed text-justify">
                        I'm a full-stack developer with a passion for building scalable, performant, and high-quality web applications. My expertise lies in the MERN stack, Next.js, and modern UI/UX design. I enjoy solving complex problems through clean architecture and efficient code.
                    </p>
                </div>
            </div>

            {/* Middle Section: Education & Work Experience */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                <div>
                    <h2 className="font-bold md:text-2xl">Education</h2>
                    <Separator className="my-2" />
                    <EducationList />
                </div>
                <div>
                    <h2 className="font-bold md:text-2xl">Work Experience</h2>
                    <Separator className="my-2" />
                    <WorkExperience />
                </div>
            </div>

            {/* Bottom Section: Tech Stack */}
            <div className="w-full mt-12">
                <div className="flex flex-col items-center mb-8">
                    <h2 className="font-bold text-2xl md:text-3xl">My Tech Stack</h2>
                    <div className="h-1 w-20 bg-zinc-200 dark:bg-zinc-800 rounded-full mt-2" />
                    <p className="text-sm text-zinc-500 mt-2">The tools and technologies I use to bring ideas to life.</p>
                </div>
                <Stack />
            </div>
        </div>
    )
}
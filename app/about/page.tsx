import { Separator } from "@/components/ui/separator"
import { EducationList } from "@/components/about/education-list"
import { WorkExperience } from "@/components/about/work-experience"
import { Stack } from "@/components/home/stack"
import FotoArea from "@/components/about/foto-show"
import { Profile, EduWorkSection, TechStackSection } from "@/components/about/about-sections"
import { bio } from "@/data/about"

export default function Page() {

    return (
        <div className="flex flex-col py-10 gap-16">
            {/* Top Section: Profile & About Me */}
            <Profile>
                {bio}
            </Profile>

            {/* Middle Section: Education & Work Experience */}
            <EduWorkSection>
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
            </EduWorkSection>


            {/* Bottom Section: Tech Stack */}
            <TechStackSection>
                <Stack />
            </TechStackSection>

            <div className="w-full mt-12">
                <FotoArea />
            </div>
        </div>
    )
}
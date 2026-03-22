"use client";

import { TextHoverEffect } from "@/components/ui/text-hover-effect";
import ShowProject from "@/components/projects/show-project";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Spotlight } from "@/components/ui/spotlight";

export default function Page() {
    const containerRef = useRef<HTMLDivElement>(null);

    // Use global scroll tracking for better reliability across layouts
    const { scrollYProgress } = useScroll();

    // Scale and move the title as we scroll the initial section
    const scale = useTransform(scrollYProgress, [0, 0.1], [1, 0.25]);
    const y = useTransform(scrollYProgress, [0, 0.1], ["0%", "-40%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.08, 0.1], [1, 1, 0]);

    return (
        <div className="w-full relative flex flex-col">
            <div className="relative w-full">
                {/* Fixed Title behind projects - z-0 */}
                <motion.div
                    style={{ scale, y, opacity }}
                    className="fixed inset-0 h-screen flex items-center justify-center z-0 pointer-events-none "
                >
                    <div className="w-full pointer-events-auto hidden md:block">
                        <TextHoverEffect text="Projects" duration={1} />
                    </div>
                    <div className="w-full md:hidden">
                        <Spotlight
                            className="-top-40 left-0 md:-top-20 md:left-60"
                            fill="white"
                        />
                        <div className="w-full z-10 mx-auto max-w-7xl p-4 flex flex-col items-center justify-center h-full -rotate-90">
                            <h1 className="bg-opacity-50 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-center text-7xl font-bold text-transparent md:text-7xl">
                                Project <br />
                            </h1>

                        </div>
                    </div>
                </motion.div>


                {/* Projects List - Higher z-index and solid background to mask the title */}
                <div className="relative z-10 flex flex-col gap-y-24 pb-24 px-4 md:px-8 mt-[87vh]">

                    <ShowProject />

                </div>
            </div>
        </div>
    );
}




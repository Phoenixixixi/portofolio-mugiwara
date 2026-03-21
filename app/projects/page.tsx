"use client";

import { TextHoverEffect } from "@/components/ui/text-hover-effect";
import ShowProject from "@/components/projects/show-project";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";


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
                    className="fixed inset-0 h-screen flex items-center justify-center z-0 pointer-events-none"
                >
                    <div className="w-full pointer-events-auto">
                        <TextHoverEffect text="Projects" duration={1} />
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




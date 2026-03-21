"use client";

import React from "react";
import { WobbleCard } from "@/components/ui/wobble-card";
import { ContactForm } from "@/components/contact/contact-form";
import { IconBrandGithub, IconBrandInstagram } from "@tabler/icons-react";
import Link from "next/link";

export default function ContactPage() {
    return (
        <div className="min-h-screen  px-4 py-24 md:py-32">
            <div className="max-w-7xl mx-auto space-y-24">
                {/* Header Section */}
                <div className="text-center space-y-4">
                    <h1 className="text-4xl md:text-6xl font-black  tracking-tighter">
                        Get in Touch
                    </h1>
                    <p className="light:text-neutral-400 dark:text-neutral-400 text-lg md:text-xl max-w-2xl mx-auto">
                        Have a project in mind or just want to chat? Feel free to reach out via social media or send me a message through the form below.
                    </p>
                </div>

                {/* Social Cards Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <WobbleCard containerClassName="bg-blue-800 cursor-pointer" link="https://github.com/Phoenixixixi">
                        <Link
                            href="https://github.com/Phoenixixixi"
                            target="_blank"
                            className="flex flex-col h-full justify-between cursor-pointer"
                        >
                            <div className="space-y-4">
                                <IconBrandGithub className="w-12 h-12 text-white" />
                                <h3 className="text-2xl font-bold text-white">GitHub</h3>
                                <p className="text-neutral-400">
                                    Check out my open-source projects, contributions, and coding activity.
                                </p>
                            </div>
                            <span className="mt-8 text-indigo-400 font-semibold flex items-center gap-2 group-hover:translate-x-1 transition-transform">
                                Follow on GitHub →
                            </span>
                        </Link>
                    </WobbleCard>

                    <WobbleCard containerClassName="bg-fuchsia-800 cursor-pointer" link="https://www.instagram.com/daastin.m/">
                        <Link
                            href="https://www.instagram.com/daastin.m/"
                            target="_blank"
                            className="flex flex-col h-full justify-between cursor-pointer"
                        >
                            <div className="space-y-4">
                                <IconBrandInstagram className="w-12 h-12 text-white" />
                                <h3 className="text-2xl font-bold text-white">Instagram</h3>
                                <p className="text-neutral-400">
                                    Follow me for updates, photography, and snippets of my daily life as a developer.
                                </p>
                            </div>
                            <span className="mt-8 text-pink-400 font-semibold flex items-center gap-2 group-hover:translate-x-1 transition-transform">
                                Follow on Instagram →
                            </span>
                        </Link>
                    </WobbleCard>
                </div>

                {/* Form Section */}
                <div className="pt-12">
                    <ContactForm />
                </div>
            </div>
        </div>
    );
}

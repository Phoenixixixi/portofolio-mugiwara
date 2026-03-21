"use client";

import React from "react";
import Link from "next/link";
import { Github, Linkedin, Twitter, Mail, ExternalLink, Instagram } from "lucide-react";

interface FooterLink {
  name: string;
  href: string;
  icon?: React.ReactNode;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerSections: FooterSection[] = [
    {
      title: "Navigation",
      links: [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Projects", href: "/projects" },
        { name: "Skills", href: "/skills" },
      ],
    },
    {
      title: "Socials",
      links: [
        { name: "GitHub", href: "https://github.com/Phoenixixixi", icon: <Github className="h-4 w-4" /> },
        { name: "LinkedIn", href: "https://linkedin.com/in/muhammad-dustin", icon: <Linkedin className="h-4 w-4" /> },
        { name: "Instagram", href: "https://www.instagram.com/daastin.m/", icon: <Instagram className="h-4 w-4" /> },
      ],
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy Policy", href: "/privacy" },
        { name: "Terms of Service", href: "/terms" },
      ],
    },
  ];

  return (
    <footer className="w-full border-t border-zinc-200 bg-transparent pt-16 pb-8 dark:border-zinc-800">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4 lg:gap-16">
          {/* Brand Section */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-white">
              Muhammad Dustin
            </Link>
            <p className="max-w-xs text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
              Building scalable, performant, and high-quality web applications with modern tech stacks.
            </p>
            <div className="mt-4 flex items-center gap-4">
              <a
                href="mailto:dustin.muhammad@example.com"
                className="flex items-center gap-2 text-sm font-medium text-zinc-900 transition-colors hover:text-blue-500 dark:text-zinc-100 dark:hover:text-blue-400"
              >
                <Mail className="h-4 w-4" />
                Let&apos;s talk
              </a>
            </div>
          </div>

          {/* Link Sections */}
          {footerSections.map((section) => (
            <div key={section.title} className="flex flex-col gap-4">
              <h3 className="text-sm font-bold uppercase tracking-wider text-zinc-900 dark:text-white">
                {section.title}
              </h3>
              <ul className="flex flex-col gap-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="group flex items-center gap-2 text-sm text-zinc-500 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
                    >
                      {link.icon && <span className="text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-zinc-100">{link.icon}</span>}
                      {link.name}
                      {link.href.startsWith("http") && <ExternalLink className="h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100" />}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="mt-16 flex flex-col items-center justify-between gap-6 border-t border-zinc-100 pt-8 md:flex-row dark:border-zinc-900">
          <p className="text-xs text-zinc-500 dark:text-zinc-500">
            © {currentYear} Muhammad Dustin. All rights reserved. Built with Next.js & Aceternity UI.
          </p>
          <div className="flex items-center gap-4">
            <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-xs font-medium text-zinc-500">Available for new opportunities</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

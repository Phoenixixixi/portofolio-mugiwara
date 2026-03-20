"use client";

import React from "react";

interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  points: string[];
}

const educationData: EducationItem[] = [
  {
    institution: "BINUS University",
    degree: "Undergraduate in Information Technology",
    period: "2025 - Present",
    points: [
      "Focus on Calculus, C languages, and Software Design",
      "Self-taught modern web technologies like Next.js (not taught in campus curriculum)",
      "Building projects with full-stack integration"
    ]
  },
  {
    institution: "Dicoding Academy",
    degree: "Introduction To Web Developer",
    period: "2023 - 2024",
    points: [
      "Learned fundamentals of HTML, CSS, and JavaScript",
      "Built responsive web pages and basic web applications",
      "Practiced problem-solving through hands-on projects"
    ]
  },
  {
    institution: "Telkom University",
    degree: "Diploma in Computer Technology",
    period: "2022 - 2025",
    points: [
      "Explored Internet of Things (IoT) and Hardware development",
      "Built websites using HTML, CSS, and JavaScript",
      "Studied programming fundamentals and data structures"
    ]
  },
];

export function EducationList() {
  return (
    <div className="mt-8 relative pl-10 h-full">
      {/* Vertical line connecting the circles */}
      <div className="absolute left-4 top-2 bottom-6 w-0.5 bg-zinc-200 dark:bg-zinc-800" />


      <div className="space-y-12">
        {educationData.map((edu, index) => (
          <div key={index} className="relative">
            {/* Numbered Circle marker */}
            <div className="absolute -left-10 top-0 h-8 w-8 rounded-full border-2 border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950 flex items-center justify-center text-xs font-bold text-zinc-800 dark:text-zinc-200 z-10">
              {index + 1}
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex justify-between items-baseline">
                <h3 className="font-bold text-lg text-zinc-800 dark:text-zinc-200">
                  {edu.institution}
                </h3>
                <span className="text-xs font-semibold text-zinc-500 font-mono tracking-tighter">
                  {edu.period}
                </span>
              </div>
              <p className="text-sm font-semibold text-zinc-600 dark:text-zinc-400 mb-2">
                {edu.degree}
              </p>
              <ul className="list-disc list-inside space-y-1">
                {edu.points.map((point, idx) => (
                  <li key={idx} className="text-sm font-medium text-zinc-500 dark:text-zinc-400 leading-relaxed pl-1 marker:text-zinc-300 dark:marker:text-zinc-700">
                    <span className="relative -left-1 text-zinc-600 dark:text-zinc-400">{point}</span>
                  </li>
                ))}

              </ul>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

"use client";

import React from "react";

interface WorkItem {
  company: string;
  role: string;
  period: string;
  description: string;
}

const workData: WorkItem[] = [
  {
    company: "PT Nutech Integrasi",
    role: "Technician",
    period: "2025 - Present",
    description: "Maintaining technical systems and ensuring seamless integration of infrastructure components.",
  },
  {
    company: "Freelance Web Dev",
    role: "Web Developer",
    period: "2024 - Present",
    description: "Built and launched various web platforms, including projects like mindsetngedit.com, specializing in modern tech stacks.",
  },
  {
    company: "KCIC",
    role: "IT Technician & Front End Web Dev Intern",
    period: "2024 - 2025",
    description: "Supported IT infrastructure operations and contributed to front-end development of internal dashboard systems.",
  },
];

export function WorkExperience() {
  return (
    <div className="mt-8 relative pl-10 h-full">
      {/* Vertical line connecting the circles */}
      <div className="absolute left-4 top-2 bottom-6 w-0.5 bg-blue-200 dark:bg-blue-900/30" />

      <div className="space-y-12">
        {workData.map((work, index) => (
          <div key={index} className="relative">
            {/* Circle marker */}
            <div className="absolute -left-10 top-0 h-8 w-8 rounded-full border-2 border-blue-200 bg-white dark:border-blue-900/50 dark:bg-zinc-950 flex items-center justify-center text-xs font-bold text-blue-600 dark:text-blue-400 z-10">
              {index + 1}
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-baseline">
                <h3 className="font-bold text-lg text-zinc-800 dark:text-zinc-200">
                  {work.company}
                </h3>
                <span className="text-xs font-semibold text-zinc-500 italic">
                  {work.period}
                </span>
              </div>
              <h4 className="text-sm font-semibold text-blue-600 dark:text-blue-400 -mt-1">
                {work.role}
              </h4>
              <p className="text-xs font-medium text-zinc-500 dark:text-zinc-400 leading-relaxed text-justify">
                {work.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

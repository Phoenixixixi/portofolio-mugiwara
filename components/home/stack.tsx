"use client";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";
import { techStack } from "../../data/skills";

export function Stack() {
  return (
    <div className="h-[20rem] rounded-md flex flex-col antialiased bg-transparent dark:bg-grid-white/[0.05] relative overflow-hidden items-center justify-center">
      <InfiniteMovingCards
        items={techStack}
        direction="right"
        speed="normal"
      />
      <InfiniteMovingCards
        items={techStack}
        direction="left"
        speed="normal"
      />
    </div>
  );
}


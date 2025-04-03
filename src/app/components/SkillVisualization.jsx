"use client";
import { IconCloud } from "./ui/IconCloud";

const slugs = [
  "typescript",
  "javascript",
  "java",
  "react",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "postgresql",
  "vercel",
  "jest",
  "docker",
  "git",
  "github",
  "visualstudiocode",
  "figma",
  "mongodb",
  "python",
];

function SkillVisualization() {
  return (
    <section className="py-16 px-4">
      <h2 className="text-4xl font-bold text-white mb-8 text-center">
        Skills &amp; <span className="text-primary-500">Technologies</span>
      </h2>
      <div className="max-w-5xl mx-auto">
        <IconCloud iconSlugs={slugs} />
      </div>
    </section>
  );
}

export default SkillVisualization; 
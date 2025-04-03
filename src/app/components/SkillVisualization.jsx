"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const skills = {
  Python: {
    category: "Backend",
    connections: ["Flask", "Django", "Pandas", "REST API"],
    proficiency: 90,
  },
  Flask: {
    category: "Backend",
    connections: ["Python", "REST API"],
    proficiency: 85,
  },
  Django: {
    category: "Backend",
    connections: ["Python", "PostgreSQL"],
    proficiency: 80,
  },
  "Node.js": {
    category: "Backend",
    connections: ["Express", "MongoDB", "REST API"],
    proficiency: 85,
  },
  Express: {
    category: "Backend",
    connections: ["Node.js", "MongoDB"],
    proficiency: 85,
  },
  React: {
    category: "Frontend",
    connections: ["JavaScript", "TypeScript", "Next.js"],
    proficiency: 90,
  },
  "Next.js": {
    category: "Frontend",
    connections: ["React", "TypeScript"],
    proficiency: 85,
  },
  TypeScript: {
    category: "Frontend",
    connections: ["JavaScript", "React", "Next.js"],
    proficiency: 80,
  },
  JavaScript: {
    category: "Frontend",
    connections: ["React", "TypeScript", "Node.js"],
    proficiency: 90,
  },
  MongoDB: {
    category: "Database",
    connections: ["Node.js", "Express"],
    proficiency: 85,
  },
  PostgreSQL: {
    category: "Database",
    connections: ["Django", "Python"],
    proficiency: 80,
  },
  "REST API": {
    category: "Backend",
    connections: ["Flask", "Express", "Node.js"],
    proficiency: 90,
  },
  Pandas: {
    category: "Data Science",
    connections: ["Python", "Data Analysis"],
    proficiency: 75,
  },
  "Data Analysis": {
    category: "Data Science",
    connections: ["Pandas", "Python"],
    proficiency: 75,
  },
};

const categories = ["All", "Frontend", "Backend", "Database", "Data Science"];

const SkillVisualization = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedSkill, setSelectedSkill] = useState(null);
  const containerRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        setDimensions({
          width: containerRef.current.offsetWidth,
          height: Math.max(600, window.innerHeight * 0.6),
        });
      }
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  const getSkillPosition = (skillName, index, total) => {
    const radius = Math.min(dimensions.width, dimensions.height) * 0.35;
    const angle = (index * 2 * Math.PI) / total;
    return {
      x: dimensions.width / 2 + radius * Math.cos(angle),
      y: dimensions.height / 2 + radius * Math.sin(angle),
    };
  };

  const filteredSkills = Object.entries(skills).filter(
    ([_, skill]) => selectedCategory === "All" || skill.category === selectedCategory
  );

  const skillPositions = Object.fromEntries(
    filteredSkills.map(([name], index) => [
      name,
      getSkillPosition(name, index, filteredSkills.length),
    ])
  );

  const handleSkillClick = (skillName) => {
    setSelectedSkill(selectedSkill === skillName ? null : skillName);
  };

  return (
    <section className="py-16 px-4">
      <motion.h2
        className="text-4xl font-bold text-white mb-8 text-center"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        Skills Visualization
      </motion.h2>

      <div className="flex justify-center gap-4 mb-12 flex-wrap">
        {categories.map((category) => (
          <motion.button
            key={category}
            className={`px-4 py-2 rounded-full ${
              selectedCategory === category
                ? "bg-primary-500 text-white"
                : "bg-[#181818] text-[#ADB7BE]"
            }`}
            onClick={() => {
              setSelectedCategory(category);
              setSelectedSkill(null);
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {category}
          </motion.button>
        ))}
      </div>

      <div
        ref={containerRef}
        className="relative w-full"
        style={{ height: dimensions.height }}
      >
        <svg
          className="absolute inset-0 w-full h-full"
          style={{ pointerEvents: "none" }}
        >
          {filteredSkills.map(([skillName, skill]) => {
            const pos = skillPositions[skillName];
            const isSelected = selectedSkill === skillName;
            const isConnected =
              selectedSkill && skills[selectedSkill]?.connections.includes(skillName);

            return skill.connections
              .filter(
                (connectedSkill) =>
                  skillPositions[connectedSkill] &&
                  (!selectedSkill || isSelected || isConnected)
              )
              .map((connectedSkill, index) => {
                const connectedPos = skillPositions[connectedSkill];
                return (
                  <motion.line
                    key={`${skillName}-${connectedSkill}-${index}`}
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    x1={pos.x}
                    y1={pos.y}
                    x2={connectedPos.x}
                    y2={connectedPos.y}
                    stroke={
                      selectedSkill
                        ? isSelected || isConnected
                          ? "#9333ea"
                          : "#1f2937"
                        : "#4b5563"
                    }
                    strokeWidth={selectedSkill ? (isSelected || isConnected ? 2 : 1) : 1}
                    strokeOpacity={selectedSkill ? (isSelected || isConnected ? 0.8 : 0.2) : 0.4}
                  />
                );
              });
          })}
        </svg>

        {filteredSkills.map(([skillName, skill]) => {
          const pos = skillPositions[skillName];
          const isSelected = selectedSkill === skillName;
          const isConnected =
            selectedSkill && skills[selectedSkill]?.connections.includes(skillName);

          return (
            <motion.div
              key={skillName}
              className={`absolute cursor-pointer transform -translate-x-1/2 -translate-y-1/2`}
              style={{ left: pos.x, top: pos.y }}
              onClick={() => handleSkillClick(skillName)}
              whileHover={{ scale: 1.1 }}
            >
              <motion.div
                className={`px-4 py-2 rounded-full ${
                  isSelected
                    ? "bg-primary-500 text-white"
                    : isConnected
                    ? "bg-primary-500/20 text-primary-500"
                    : "bg-[#181818] text-[#ADB7BE]"
                }`}
                animate={{
                  scale: isSelected ? 1.1 : 1,
                  backgroundColor: isSelected
                    ? "#9333ea"
                    : isConnected
                    ? "rgba(147, 51, 234, 0.2)"
                    : "#181818",
                }}
              >
                {skillName}
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default SkillVisualization; 
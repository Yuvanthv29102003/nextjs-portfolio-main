"use client";
import React from "react";
import { motion } from "framer-motion";

const skills = [
  "JavaScript",
  "React",
  "Node.js",
  "Python",
  "SQL",
  "Git",
  "HTML/CSS",
  "TypeScript",
  "MongoDB",
  "Express.js",
];

const education = [
  {
    degree: "Bachelor of Technology",
    school: "Your University Name",
    year: "2019-2023",
    description: "Computer Science and Engineering",
  },
];

const experience = [
  {
    company: "Tech Company Name",
    position: "Full Stack Developer",
    year: "2023-Present",
    description: "Working on web applications using React and Node.js",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
    },
  },
};

const skillVariants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 10,
    },
  },
  hover: {
    scale: 1.1,
    backgroundColor: "rgba(147, 51, 234, 0.3)",
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10,
    },
  },
};

const cardHoverVariants = {
  hover: {
    scale: 1.02,
    boxShadow: "0 10px 30px -10px rgba(147, 51, 234, 0.3)",
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20,
    },
  },
};

const textHoverVariants = {
  hover: {
    color: "#9333EA",
    transition: {
      duration: 0.2,
    },
  },
};

const SkillsEducationSection = () => {
  return (
    <section className="py-16 px-4">
      <motion.div 
        className="max-w-6xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <motion.h2 
          className="text-4xl font-bold text-white mb-12 text-center"
          variants={itemVariants}
        >
          Skills & Experience
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Skills Section */}
          <motion.div
            variants={itemVariants}
            whileHover="hover"
            variants={cardHoverVariants}
            className="bg-[#181818] p-6 rounded-lg"
          >
            <motion.h3 
              className="text-2xl font-bold text-white mb-4"
              variants={textHoverVariants}
            >
              Skills
            </motion.h3>
            <motion.div 
              className="flex flex-wrap gap-2"
              variants={containerVariants}
            >
              {skills.map((skill, index) => (
                <motion.span
                  key={index}
                  variants={skillVariants}
                  whileHover="hover"
                  className="bg-primary-500/20 text-primary-500 px-4 py-2 rounded-full text-sm cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>

          {/* Education Section */}
          <motion.div
            variants={itemVariants}
            whileHover="hover"
            variants={cardHoverVariants}
            className="bg-[#181818] p-6 rounded-lg"
          >
            <motion.h3 
              className="text-2xl font-bold text-white mb-4"
              variants={textHoverVariants}
            >
              Education
            </motion.h3>
            {education.map((edu, index) => (
              <motion.div 
                key={index} 
                className="mb-4"
                variants={itemVariants}
                whileHover="hover"
              >
                <motion.h4 
                  className="text-xl font-semibold text-white"
                  variants={textHoverVariants}
                >
                  {edu.degree}
                </motion.h4>
                <p className="text-[#ADB7BE]">{edu.school}</p>
                <p className="text-primary-500">{edu.year}</p>
                <p className="text-[#ADB7BE] mt-2">{edu.description}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Experience Section */}
          <motion.div
            variants={itemVariants}
            whileHover="hover"
            variants={cardHoverVariants}
            className="bg-[#181818] p-6 rounded-lg md:col-span-2"
          >
            <motion.h3 
              className="text-2xl font-bold text-white mb-4"
              variants={textHoverVariants}
            >
              Experience
            </motion.h3>
            {experience.map((exp, index) => (
              <motion.div 
                key={index} 
                className="mb-4"
                variants={itemVariants}
                whileHover="hover"
              >
                <motion.h4 
                  className="text-xl font-semibold text-white"
                  variants={textHoverVariants}
                >
                  {exp.position}
                </motion.h4>
                <p className="text-[#ADB7BE]">{exp.company}</p>
                <p className="text-primary-500">{exp.year}</p>
                <p className="text-[#ADB7BE] mt-2">{exp.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default SkillsEducationSection; 
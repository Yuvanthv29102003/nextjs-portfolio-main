"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { CodeBracketIcon, EyeIcon, XMarkIcon } from "@heroicons/react/24/outline";

const projects = [
  {
    id: 1,
    title: "React Portfolio Website",
    description: "A modern portfolio website built with Next.js and Tailwind CSS",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
    technologies: ["React", "Next.js", "Tailwind CSS", "Framer Motion"],
  },
  {
    id: 2,
    title: "Photography Portfolio Website",
    description: "A responsive photography portfolio with gallery and lightbox",
    image: "/images/projects/2.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
    technologies: ["React", "CSS", "JavaScript"],
  },
  {
    id: 3,
    title: "E-commerce Application",
    description: "Full-stack e-commerce platform with payment integration",
    image: "/images/projects/3.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
    technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
  },
  {
    id: 4,
    title: "Food Ordering Application",
    description: "Mobile-first food ordering app with real-time tracking",
    image: "/images/projects/4.png",
    tag: ["All", "Mobile"],
    gitUrl: "/",
    previewUrl: "/",
    technologies: ["React Native", "Firebase", "Redux"],
  },
  {
    id: 5,
    title: "React Firebase Template",
    description: "Authentication and CRUD operations with Firebase",
    image: "/images/projects/5.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
    technologies: ["React", "Firebase", "Material UI"],
  },
  {
    id: 6,
    title: "Full-stack Roadmap",
    description: "Interactive learning platform for web development",
    image: "/images/projects/6.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
    technologies: ["React", "Node.js", "PostgreSQL", "GraphQL"],
  },
];

const ProjectShowcase = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState("All");

  const filteredProjects = projects.filter((project) =>
    project.tag.includes(filter)
  );

  return (
    <section id="projects" className="py-16">
      <motion.h2 
        className="text-center text-4xl font-bold text-white mb-8"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        My Projects
      </motion.h2>

      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {["All", "Web", "Mobile"].map((tag) => (
          <motion.button
            key={tag}
            className={`px-6 py-2 rounded-full ${
              filter === tag
                ? "bg-primary-500 text-white"
                : "bg-[#181818] text-[#ADB7BE] hover:bg-primary-500/20"
            }`}
            onClick={() => setFilter(tag)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {tag}
          </motion.button>
        ))}
      </div>

      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.1,
            },
          },
        }}
      >
        {filteredProjects.map((project, index) => (
          <motion.div
            key={project.id}
            className="bg-[#181818] rounded-xl overflow-hidden"
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { 
                opacity: 1, 
                y: 0,
                transition: {
                  type: "spring",
                  stiffness: 100,
                  damping: 15,
                }
              },
            }}
            whileHover={{ 
              scale: 1.03,
              boxShadow: "0 10px 30px -10px rgba(147, 51, 234, 0.3)",
              transition: { duration: 0.2 }
            }}
            onClick={() => setSelectedProject(project)}
          >
            <div
              className="h-52 relative group"
              style={{ background: `url(${project.image})`, backgroundSize: "cover" }}
            >
              <div className="absolute inset-0 bg-[#181818] bg-opacity-0 group-hover:bg-opacity-80 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                <span className="text-white text-lg font-medium">Click to view details</span>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
              <p className="text-[#ADB7BE] mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.slice(0, 3).map((tech, i) => (
                  <span
                    key={i}
                    className="bg-primary-500/20 text-primary-500 px-3 py-1 rounded-full text-xs"
                  >
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 3 && (
                  <span className="bg-primary-500/20 text-primary-500 px-3 py-1 rounded-full text-xs">
                    +{project.technologies.length - 3} more
                  </span>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="bg-[#181818] rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative h-64 md:h-96">
                <div
                  className="absolute inset-0"
                  style={{ background: `url(${selectedProject.image})`, backgroundSize: "cover" }}
                />
                <button
                  className="absolute top-4 right-4 bg-black/50 rounded-full p-2 text-white hover:bg-black/70 transition-colors"
                  onClick={() => setSelectedProject(null)}
                >
                  <XMarkIcon className="h-6 w-6" />
                </button>
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold text-white mb-2">{selectedProject.title}</h2>
                <p className="text-[#ADB7BE] mb-6">{selectedProject.description}</p>
                
                <h3 className="text-lg font-semibold text-white mb-3">Technologies Used</h3>
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedProject.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-primary-500/20 text-primary-500 px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <Link
                    href={selectedProject.gitUrl}
                    className="flex items-center gap-2 bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded-lg transition-colors"
                  >
                    <CodeBracketIcon className="h-5 w-5" />
                    <span>View Code</span>
                  </Link>
                  <Link
                    href={selectedProject.previewUrl}
                    className="flex items-center gap-2 bg-secondary-500 hover:bg-secondary-600 text-white px-4 py-2 rounded-lg transition-colors"
                  >
                    <EyeIcon className="h-5 w-5" />
                    <span>Live Demo</span>
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProjectShowcase; 
"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    id: 1,
    title: "Software Developer",
    company: "Verzeo",
    period: "April 2022 - May 2022",
    preview: "Developed a model that checks for the heart disease using the data set",
    description: "Implemented machine learning model that checks the heart disease for the patient.Handle the Dataset and created a python model using Python and ML.",
    skills: ["Python", "Machine Learning", "Data Analysis", "Data Visualization", "Data Cleaning", "Data Preprocessing"],
    location: "Remote",
  }
];

const education = [
  {
    id: 1,
    degree: "Bachelor of Technology",
    school: "RMD Engineering College, Kavaraipettai",
    period: "2021 - 2025",
    field: "Computer Science and Engineering",
    description: "Final year B.Tech student specializing in Computer Science. Strong focus on full-stack development and software engineering. Leading technical projects and actively contributing to coding initiatives.",
    achievements: [
      "CGPA: 7.1",
      "Final Year Project Lead",
      "Full Stack Development",
      "Tech Fest Coordinator"
    ],
    skills: [
      "Data Structures",
      "Algorithms",
      "Object-Oriented Programming",
      "Database Management",
      "Web Development"
    ]
  },
  {
    id: 2,
    degree: "Higher Secondary Education (12th)",
    school: "Velammal Bodhi Campus, Panjetti",
    period: "2019 - 2021",
    field: "Science Stream",
    description: "Completed higher secondary education with distinction in Mathematics, Physics, and Computer Science.",
    achievements: ["73% Overall Percentage"],
    skills: [
      "Computer Science",
      "Mathematics",
      "Physics"
    ]
  }
];

const ExperienceTimeline = () => {
  const [activeTab, setActiveTab] = useState("experience");
  const [expandedItem, setExpandedItem] = useState(null);
  const [lastInteractionType, setLastInteractionType] = useState(null);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e) => {
      // Switch tabs with left/right arrow keys
      if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
        setActiveTab(prev => prev === "experience" ? "education" : "experience");
        setLastInteractionType('keyboard');
      }
      // Close expanded item with Escape key
      if (e.key === 'Escape' && expandedItem !== null) {
        setExpandedItem(null);
      }
      // Navigate through items with up/down arrow keys
      if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
        const items = activeTab === 'experience' ? experiences : education;
        if (expandedItem === null) {
          setExpandedItem(items[0].id);
        } else {
          const currentIndex = items.findIndex(item => item.id === expandedItem);
          if (e.key === 'ArrowDown' && currentIndex < items.length - 1) {
            setExpandedItem(items[currentIndex + 1].id);
          } else if (e.key === 'ArrowUp' && currentIndex > 0) {
            setExpandedItem(items[currentIndex - 1].id);
          }
        }
        setLastInteractionType('keyboard');
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [activeTab, expandedItem]);

  const toggleExpand = (id) => {
    setExpandedItem(expandedItem === id ? null : id);
    setLastInteractionType('mouse');
  };

  return (
    <section className="py-16 px-4" role="region" aria-label="Experience and Education Timeline">
      <motion.h2 
        className="text-4xl font-bold text-white mb-8 text-center"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        Experience & Education
      </motion.h2>

      <div className="flex justify-center mb-12">
        <div className="bg-[#181818] p-1 rounded-full">
          <div className="flex">
            <motion.button
              className={`px-6 py-2 rounded-full ${
                activeTab === "experience" ? "bg-primary-500 text-white" : "text-[#ADB7BE]"
              }`}
              onClick={() => {
                setActiveTab("experience");
                setLastInteractionType('mouse');
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-pressed={activeTab === "experience"}
              role="tab"
            >
              Experience
            </motion.button>
            <motion.button
              className={`px-6 py-2 rounded-full ${
                activeTab === "education" ? "bg-primary-500 text-white" : "text-[#ADB7BE]"
              }`}
              onClick={() => {
                setActiveTab("education");
                setLastInteractionType('mouse');
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-pressed={activeTab === "education"}
              role="tab"
            >
              Education
            </motion.button>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto">
        {activeTab === "experience" ? (
          <div className="relative">
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary-500/30 transform -translate-x-1/2" />

            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                className={`relative mb-12 ${
                  index % 2 === 0 ? "md:pr-1/2 md:pl-8" : "md:pl-1/2 md:pr-8 md:text-right"
                }`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <div className={`absolute top-0 ${
                  index % 2 === 0 ? "md:right-0 md:translate-x-1/2" : "md:left-0 md:-translate-x-1/2"
                } w-4 h-4 rounded-full bg-primary-500 z-10`} />

                <motion.div
                  className="bg-[#181818] p-6 rounded-xl cursor-pointer"
                  whileHover={{ scale: 1.02, boxShadow: "0 10px 30px -10px rgba(147, 51, 234, 0.3)" }}
                  onClick={() => toggleExpand(exp.id)}
                >
                  <div className="flex flex-col md:flex-row md:justify-between mb-2">
                    <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                    <span className="text-primary-500">{exp.period}</span>
                  </div>
                  <div className="flex flex-col md:flex-row md:justify-between mb-2">
                    <p className="text-[#ADB7BE]">{exp.company}</p>
                    <p className="text-[#ADB7BE]">{exp.location}</p>
                  </div>
                  
                  <p className="text-[#ADB7BE] mb-4">
                    {expandedItem === exp.id ? exp.description : exp.preview}
                  </p>
                  
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ 
                      height: expandedItem === exp.id ? "auto" : 0, 
                      opacity: expandedItem === exp.id ? 1 : 0 
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, i) => (
                        <span
                          key={i}
                          className="bg-primary-500/20 text-primary-500 px-3 py-1 rounded-full text-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                  
                  <div className="mt-4 text-center md:text-right">
                    <button 
                      className="text-primary-500 text-sm font-medium"
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleExpand(exp.id);
                      }}
                      aria-label={expandedItem === exp.id ? "Show less details" : "Show more details"}
                    >
                      {expandedItem === exp.id ? "Show Less" : "Show More"}
                    </button>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="space-y-8">
            {education.map((edu, index) => (
              <motion.div
                key={edu.id}
                className="bg-[#181818] p-6 rounded-xl"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
                whileHover={{ scale: 1.02, boxShadow: "0 10px 30px -10px rgba(147, 51, 234, 0.3)" }}
                tabIndex={0}
                role="button"
                aria-expanded={expandedItem === edu.id}
                onClick={() => toggleExpand(edu.id)}
                onKeyPress={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    toggleExpand(edu.id);
                  }
                }}
              >
                <div className="flex flex-col md:flex-row md:justify-between mb-2">
                  <h3 className="text-xl font-bold text-white">{edu.degree}</h3>
                  <span className="text-primary-500">{edu.period}</span>
                </div>
                <p className="text-[#ADB7BE] mb-2">{edu.school}</p>
                <p className="text-white font-medium mb-2">{edu.field}</p>
                <p className="text-[#ADB7BE] mb-4">{edu.description}</p>
                
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {edu.achievements.map((achievement, i) => (
                      <span
                        key={i}
                        className="bg-secondary-500/20 text-secondary-500 px-3 py-1 rounded-full text-sm"
                      >
                        {achievement}
                      </span>
                    ))}
                  </div>
                  
                  {edu.skills && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ 
                        height: expandedItem === edu.id ? "auto" : 0, 
                        opacity: expandedItem === edu.id ? 1 : 0 
                      }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="text-[#ADB7BE] text-sm mb-2">Key Skills:</p>
                      <div className="flex flex-wrap gap-2">
                        {edu.skills.map((skill, i) => (
                          <span
                            key={i}
                            className="bg-primary-500/20 text-primary-500 px-3 py-1 rounded-full text-sm"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  )}
                  
                  <div className="mt-4 text-center md:text-right">
                    <button 
                      className="text-primary-500 text-sm font-medium"
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleExpand(edu.id);
                      }}
                      aria-label={expandedItem === edu.id ? "Show less details" : "Show more details"}
                    >
                      {expandedItem === edu.id ? "Show Less" : "Show More"}
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ExperienceTimeline; 
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import type { Skill, Tool } from "@/lib/types";

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);

  const technicalSkills: Skill[] = [
    { name: "JavaScript/TypeScript", percentage: 90 },
    { name: "React/Next.js", percentage: 85 },
    { name: "Node.js/Express", percentage: 80 },
    { name: "Python/Django", percentage: 75 },
    { name: "Database (MongoDB, PostgreSQL)", percentage: 82 },
  ];

  const tools: Tool[] = [
    { name: "Figma", icon: "🎨", color: "text-pink-500" },
    { name: "Git", icon: "🔧", color: "text-orange-500" },
    { name: "Docker", icon: "🐳", color: "text-blue-500" },
    { name: "AWS", icon: "☁️", color: "text-yellow-500" },
    { name: "Adobe CC", icon: "🎨", color: "text-red-500" },
    { name: "Responsive", icon: "📱", color: "text-green-500" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    const element = document.getElementById("skills");
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold mb-4"
          >
            Skills & Expertise
          </motion.h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Here are the technologies and tools I work with to bring ideas to life
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Technical Skills */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-8">Technical Skills</h3>

            {technicalSkills.map((skill, index) => (
              <div key={skill.name} className="mb-6">
                <div className="flex justify-between mb-2">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-muted-foreground">{skill.percentage}%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <motion.div
                    className="bg-primary h-2 rounded-full skill-bar"
                    initial={{ width: 0 }}
                    animate={isVisible ? { width: `${skill.percentage}%` } : { width: 0 }}
                    transition={{ duration: 2, delay: index * 0.2 }}
                  />
                </div>
              </div>
            ))}
          </motion.div>

          {/* Tools & Design */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-8">Tools & Design</h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
              {tools.map((tool, index) => (
                <motion.div
                  key={tool.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-4 bg-card rounded-xl shadow-sm hover:shadow-md transition-shadow border"
                >
                  <div className="text-3xl mb-3">{tool.icon}</div>
                  <div className="font-medium">{tool.name}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

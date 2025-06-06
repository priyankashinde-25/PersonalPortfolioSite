import { motion } from "framer-motion";
import { Calendar, MapPin, Building } from "lucide-react";

interface WorkExperience {
  id: string;
  company: string;
  position: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string[];
  technologies: string[];
}

const Experience = () => {
  const experiences: WorkExperience[] = [
    {
      id: "1",
      company: "TechCorp Solutions",
      position: "Senior Full-Stack Developer",
      location: "San Francisco, CA",
      startDate: "Jan 2022",
      endDate: "Present",
      description: [
        "Led development of a scalable e-commerce platform serving 100K+ users",
        "Implemented microservices architecture reducing system downtime by 40%",
        "Mentored 5 junior developers and established coding best practices",
        "Collaborated with product team to deliver features ahead of schedule"
      ],
      technologies: ["React", "Node.js", "AWS", "PostgreSQL", "Docker"]
    },
    {
      id: "2",
      company: "Digital Innovations Inc",
      position: "Full-Stack Developer",
      location: "San Jose, CA",
      startDate: "Mar 2020",
      endDate: "Dec 2021",
      description: [
        "Developed and maintained 8+ client applications using modern web technologies",
        "Optimized database queries improving application performance by 60%",
        "Integrated third-party APIs and payment processing systems",
        "Participated in agile development cycles and code reviews"
      ],
      technologies: ["Vue.js", "Python", "Django", "MongoDB", "Redis"]
    },
    {
      id: "3",
      company: "StartupLab",
      position: "Frontend Developer",
      location: "Remote",
      startDate: "Jun 2019",
      endDate: "Feb 2020",
      description: [
        "Built responsive web applications for early-stage startups",
        "Collaborated with designers to implement pixel-perfect UI components",
        "Established frontend development workflow and component library",
        "Delivered 5+ projects from concept to production"
      ],
      technologies: ["React", "TypeScript", "SASS", "Webpack", "Jest"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-muted/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold mb-4"
          >
            Work Experience
          </motion.h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My professional journey and the impact I've made at various organizations
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-primary/20"></div>

          {experiences.map((experience, index) => (
            <motion.div
              key={experience.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background z-10"></div>

              {/* Content card */}
              <div className={`flex-1 ml-16 md:ml-0 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                <div className="bg-card p-6 rounded-xl shadow-sm border hover:shadow-md transition-shadow">
                  <div className="flex flex-wrap items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-1">
                        {experience.position}
                      </h3>
                      <div className="flex items-center text-primary font-semibold mb-2">
                        <Building className="h-4 w-4 mr-2" />
                        {experience.company}
                      </div>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      <div className="flex items-center mb-1">
                        <Calendar className="h-4 w-4 mr-1" />
                        {experience.startDate} - {experience.endDate}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-1" />
                        {experience.location}
                      </div>
                    </div>
                  </div>

                  <ul className="space-y-2 mb-4">
                    {experience.description.map((item, idx) => (
                      <li key={idx} className="text-muted-foreground flex items-start">
                        <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {experience.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
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
      company: "Merkle inc",
      position: "Software Engineer",
      location: "Mumbai, India",
      startDate: "Jun 2022",
      endDate: "Aug 2023",
      description: [
        "Built scalable microservices using Java Spring Boot and Hibernate for high-performance distributed systems",
        "Optimized REST APIs with Redis caching, reducing response time by 40%",
        "Set up CI/CD pipelines with GitHub and Jenkins for streamlined deployments",
        "Collaborated with product team to deliver features ahead of schedule"
      ],
      technologies: ["Java", "Spring Boot", "Node.js", "AWS", "PostgreSQL", "Redis"]
    },
    {
      id: "2",
      company: "Merkle inc",
      position: "Summer Software Intern",
      location: "Mumbai, India",
      startDate: "May 2021",
      endDate: "Aug 2021",
      description: [
        "Developed and maintained client applications using modern web technologies",
        "Optimized database queries improving application performance by 60%",
        "Identified and resolved software defects to improve application stability",
        "Prepared technical documentation and performed research to facilitate continuous learning and process improvement"
      ],
      technologies: ["Angular", "Git", "Django", "MongoDB", "Jira"]
    },
    {
      id: "3",
      company: "The Sparks Foundation",
      position: "Python Developer Intern",
      location: "Remote",
      startDate: "Jun 2020",
      endDate: "Aug 2020",
      description: [
        "Developed a supervised ML model using Python, Pandas, and Scikit-learn",
        "Preprocessed data and optimized model to achieve 91.57% accuracy",
        "Conducted data analysis and visualization with Matplotlib and Seaborn",
        "Applied statistical techniques to enhance model performance"
      ],
      technologies: ["Python", "Pandas", "Visualization", "Scikit-learn", "Algorithms"]
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
              {/* <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background z-10"></div> */}

              {/* Content card */}
              
              {/* <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}> */}
              <div className={`flex-1`}>
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
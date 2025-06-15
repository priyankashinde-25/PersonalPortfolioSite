
// export default About;
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { motion } from "framer-motion";

const About = () => {
  // Function to handle resume download
  const handleDownloadResume = () => {
    // Method 1: Direct download from a URL (if your resume is hosted online)
    const resumeUrl = "/Priyanka_Shinde_SE.pdf"; // Replace with your actual resume URL
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'PriyankaShinde-Resume.pdf'; // Replace with your actual name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Method 2: Alternative approach using window.open (uncomment if needed)
    // window.open(resumeUrl, '_blank');
  };

  return (
    <section id="about" className="py-20 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold mb-4"
          >
            About Me
          </motion.h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <img
              // src="https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
              src="/profile.jpg"
              
              alt="Developer workspace with multiple monitors and modern setup"
              className="rounded-xl shadow-2xl"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6">
              Passionate Developer with 2+ Years Experience
            </h3>

            <div className="space-y-4 text-muted-foreground mb-8">
              <p>
                I'm a Full-Stack Developer with a strong foundation in computer science and a Master's degree in Information Systems from Northeastern University.
                My passion lies at the intersection of software engineering and AI. 
              </p>
              <p>
                I specialize in building modern, scalable applications using React, JavaScript, and well-structured APIs, with a growing focus on integrating AI-driven solutions. 
                I believe in writing clean, maintainable code and staying updated with the latest industry trends.
              </p>
              <p>
                Beyond coding, I’m an active learner and contributor in the tech community exploring the latest advancements in AI and sharing insights through writing and public speaking.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 mb-8">
              {/* <div className="text-center">
                <div className="text-3xl font-bold text-primary">20+</div>
                <div className="text-muted-foreground">Projects Completed</div>
              </div> */}
              {/* <div className="text-center">
                <div className="text-3xl font-bold text-primary">30+</div>
                <div className="text-muted-foreground">Happy Clients</div>
              </div> */}
            </div>

            <Button 
              size="lg" 
              className="px-6 py-3"
              onClick={handleDownloadResume}
            >
              <Download className="mr-2 h-4 w-4" />
              Download Resume
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
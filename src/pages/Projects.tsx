import { Navigation } from "@/components/Navigation";
import { GridBackground } from "@/components/GridBackground";
import { ProjectCard } from "@/components/ProjectCard";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Rocket } from "lucide-react";
import { companyProjects, personalProjects } from "@/Data/data";
import { Footer } from "@/components/Footer";

const Projects = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <GridBackground />
      <Navigation />

      <main className="container mx-auto px-6 pt-32 pb-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20 space-y-6"
        >
          <Badge className="px-4 py-2 bg-primary/10 border-primary/30 text-primary">
            <Rocket className="w-4 h-4 mr-2" />
            Project Portfolio
          </Badge>
          <h1 className="text-6xl lg:text-7xl font-bold">
            <span className="text-gradient-primary">Crafting</span> Digital
            <br />
            Excellence
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From enterprise-scale platforms to innovative personal projects,
            each solution is built with precision, performance, and user
            experience in mind.
          </p>
        </motion.div>

        {/* Company Projects */}
        <section className="mb-32">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="mb-12 space-y-3"
          >
            <Badge className="px-4 py-2 bg-secondary/10 border-secondary/30 text-secondary">
              Professional Work
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold">
              <span className="text-gradient-secondary">Enterprise</span>{" "}
              Solutions
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Production-grade applications serving thousands of users worldwide
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {companyProjects.map((project, index) => (
              <ProjectCard
                key={project.title}
                {...project}
                index={index}
                size="large"
              />
            ))}
          </div>
        </section>

        {/* Personal Projects */}
        <section>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="mb-12 space-y-3"
          >
            <Badge className="px-4 py-2 bg-accent/10 border-accent/30 text-accent">
              Side Projects
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold">
              <span className="text-gradient-accent">Experimental</span>{" "}
              Playground
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Personal projects exploring new technologies and creative ideas
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {personalProjects.map((project, index) => (
              <ProjectCard
                key={project.title}
                {...project}
                index={index}
                size="small"
              />
            ))}
          </div>
        </section>

        {/* Stats Section */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32 mb-20"
        >
          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="text-center space-y-2 p-6 glass-panel rounded-2xl hover-lift">
              <p className="text-5xl font-bold text-gradient-primary">10+</p>
              <p className="text-muted-foreground">Projects Delivered</p>
            </div>
            <div className="text-center space-y-2 p-6 glass-panel rounded-2xl hover-lift">
              <p className="text-5xl font-bold text-gradient-secondary">50%</p>
              <p className="text-muted-foreground">Time Reduction</p>
            </div>
            <div className="text-center space-y-2 p-6 glass-panel rounded-2xl hover-lift">
              <p className="text-5xl font-bold text-gradient-accent">10x</p>
              <p className="text-muted-foreground">Performance Boost</p>
            </div>
            <div className="text-center space-y-2 p-6 glass-panel rounded-2xl hover-lift">
              <p className="text-5xl font-bold text-gradient-primary">1000+</p>
              <p className="text-muted-foreground">Users Impacted</p>
            </div>
          </div>
        </motion.section>
      </main>
      <Footer />
    </div>
  );
};

export default Projects;

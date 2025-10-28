import { Navigation } from "@/components/Navigation";
import { ScrollReveal } from "@/components/ScrollReveal";
import { FloatingShape } from "@/components/FloatingShape";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

const companyProjects = [
  {
    title: "Zino Hybrid Editor",
    description: "Hybrid editor is a low code software development tool. User can use this to build the entire application very quickly. It provides full visibility and ease of usage. Hybrid Editor is a low-code software development tool designed to optimize the application-building process. With its user-friendly interface, users can rapidly create entire applications with minimal effort and time.",
    features: "Features include: creating pages, managing permissions, adding and editing themes, tables, and buttons, assigning jobs, drag-and-drop functionality, integrating charts and templates, and AI-supported page creation.",
    tech: ["React", "CSS", "Bitbucket"],
    link: "https://getzino.com/",
    gradient: "from-cyan-500 to-blue-500"
  },
  {
    title: "Axon Engineering Metrics",
    description: "Engineering Metrics is a software development analytics tool that integrates with repository providers, project management tools, and other systems to generate various metrics designed for engineering and business leaders. It provides full visibility into engineering efforts and supports data-driven decision-making. I developed a dashboard that intelligently highlights areas needing attention, allowing users to focus on what matters most.",
    features: "Features include: Cycle Time, Mean Time to Recovery, Deployment Frequency, Risky Pull Requests, Blocked Work, Team Wellbeing, Planning Effectiveness, Insights, and integrations with GitHub, Bitbucket, Jira, Slack, and Microsoft Teams.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "AWS", "GitHub Actions", "Docker", "Stripe", "Google Analytics"],
    link: "https://www.getaxon.io/",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    title: "Axon OKR",
    description: "OKR is a goal-setting framework used by organizations to align and track the progress of their objectives. It allows organizations to set goals (Objectives) and define measurable outcomes (Key Results) that indicate success. I designed and developed the OKR dashboard and integrated it with Jira for automatic tracking of progress.",
    features: "Features include: OKR CRUD operations, public and private OKRs, role-based permissions, automatic progress indicators, insights generation, team and member assignments, and Jira ticket linking.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "GitHub Actions", "Docker", "Jira"],
    link: "https://www.getaxon.io/",
    gradient: "from-orange-500 to-red-500"
  },
  {
    title: "Axon Developer Activity",
    description: "This project offers a comprehensive overview of the individual contributions and activities within an organization. By analyzing factors such as code commits, project involvement, task completion rates, and collaboration efforts, these metrics provide valuable insights into the productivity and performance of team members. I developed this feature by integrating various services of engineering metrics.",
    features: "Features include: Code activity, project activity and wellbeing.",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "GitHub Actions", "Docker", "Jira"],
    link: "https://www.getaxon.io/pricing",
    gradient: "from-green-500 to-teal-500"
  }
];

const personalProjects = [
  {
    title: "Weather Application",
    description: "A modern weather app with real-time data",
    tech: ["React", "API Integration"],
    gradient: "from-blue-400 to-cyan-400"
  },
  {
    title: "Todo Application",
    description: "Feature-rich todo app with local storage",
    tech: ["React", "LocalStorage"],
    gradient: "from-violet-400 to-purple-400"
  },
  {
    title: "Tic Tac Toe",
    description: "Interactive game with AI opponent",
    tech: ["React", "Game Logic"],
    gradient: "from-pink-400 to-rose-400"
  }
];

const Projects = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Floating Background Shapes */}
      <FloatingShape className="w-96 h-96 bg-secondary -top-48 right-1/4" delay={1} />
      <FloatingShape className="w-80 h-80 bg-accent bottom-1/4 -left-40" delay={3} />

      <Navigation />

      <main className="container mx-auto px-6 pt-32 pb-20">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <h1 className="text-5xl lg:text-6xl font-bold mb-4">
              My <span className="text-gradient-primary">Projects</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A showcase of my professional work and personal experiments
            </p>
          </div>
        </ScrollReveal>

        {/* Company Projects */}
        <section className="mb-20">
          <ScrollReveal>
            <h2 className="text-3xl font-bold mb-8">
              <span className="text-gradient-secondary">Company</span> Projects
            </h2>
          </ScrollReveal>

          <div className="space-y-8">
            {companyProjects.map((project, index) => (
              <ScrollReveal key={project.title} delay={index * 0.1}>
                <Card className="glass-panel p-8 hover-lift group">
                  <div className="space-y-6">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className={`text-2xl font-bold bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent`}>
                        {project.title}
                      </h3>
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:text-primary/80 transition-colors flex-shrink-0"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <Badge key={tech} variant="outline" className="border-primary/30">
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <p className="text-foreground/80 leading-relaxed">{project.description}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{project.features}</p>
                  </div>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* Personal Projects */}
        <section>
          <ScrollReveal>
            <h2 className="text-3xl font-bold mb-8">
              <span className="text-gradient-accent">Personal</span> Projects
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {personalProjects.map((project, index) => (
              <ScrollReveal key={project.title} delay={index * 0.1}>
                <Card className="glass-panel p-6 hover-lift group h-full">
                  <div className="space-y-4">
                    <h3 className={`text-xl font-bold bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent`}>
                      {project.title}
                    </h3>
                    <p className="text-foreground/70 text-sm">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs border-accent/30">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Projects;

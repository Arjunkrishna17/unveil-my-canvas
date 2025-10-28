import { Navigation } from "@/components/Navigation";
import { ScrollReveal } from "@/components/ScrollReveal";
import { FloatingShape } from "@/components/FloatingShape";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

const skills = [
  "HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", 
  "Tailwind CSS", "Redux", "Jest", "Material UI", "Figma",
  "Python", "Django", "Go", "Node.js", "Express.js", 
  "MongoDB", "PostgreSQL", "AWS", "Docker", "GitHub Actions",
  "ChatGPT API", "Git", "GitHub", "Bitbucket", "Jira", "Linux"
];

const experiences = [
  {
    company: "Zino Technologies",
    role: "Software Development Engineer",
    period: "April 2024 - Present",
    location: "Bangalore",
    description: "Zino is a low code Software development platform.",
    achievements: [
      "Reduced app development time by 50% by creating a live app editor, the Hybrid Editor.",
      "Optimized chat application performance using FCM notification service",
      "Mentored and trained 5+ interns"
    ]
  },
  {
    company: "Axon.ai",
    role: "Software Development Engineer",
    period: "Aug 2022 - April 2024",
    location: "Bangalore",
    description: "Axon is a SaaS Product for engineering analytics.",
    achievements: [
      "Engineered an intelligent Engineering Dashboard, enabling engineering leaders to quickly identify and address performance bottlenecks by highlighting top areas of concern and providing drill-down capabilities to uncover root causes.",
      "Designed, developed, and deployed an OKR dashboard that empowers organizations to set and track their objectives (goals) and measurable key results, facilitating effective progress monitoring and alignment across teams.",
      "Implemented a background service to automatically detect and send insights about engineering metrics to dashboards and messaging applications.",
      "Elevated page loading time 10x faster by identifying and addressing performance bottlenecks."
    ]
  },
  {
    company: "Qburst Technologies",
    role: "Software Engineer",
    period: "April 2021 - Aug 2022",
    location: "Trivandrum",
    description: "Qburst is a product and development company with offices in the US, UK, UAE, and India.",
    achievements: [
      "Delivered high-quality, robust production code for diverse array of projects",
      "Collaborated with agile development teams in US, UAE, UK and India",
      "Developed reusable components that reduced development time by 30%"
    ]
  }
];

const About = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Floating Background Shapes */}
      <FloatingShape className="w-96 h-96 bg-primary -top-48 -left-48" delay={0} />
      <FloatingShape className="w-80 h-80 bg-secondary top-1/4 -right-40" delay={2} />
      <FloatingShape className="w-72 h-72 bg-accent bottom-1/4 left-1/3" delay={4} />

      <Navigation />

      <main className="container mx-auto px-6 pt-32 pb-20">
        {/* Hero Section */}
        <section className="min-h-[70vh] flex items-center justify-center">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl">
            <ScrollReveal direction="left">
              <div className="space-y-6">
                <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                  Architecting the Digital Universe on{" "}
                  <span className="text-gradient-primary">First Principles</span>
                </h1>
                <p className="text-lg text-muted-foreground">
                  I'm <span className="text-foreground font-semibold">Krishnadas R</span>, 
                  a Fullstack Software Engineer based in Bangalore, India. I specialize in 
                  building web applications, DevOps and AI Integration.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.2}>
              <div className="relative">
                <div className="w-full aspect-square rounded-3xl glass-panel p-8 glow-cyan">
                  <div className="w-full h-full rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                    <span className="text-6xl lg:text-8xl">👨‍💻</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Skills Section */}
        <section className="py-20">
          <ScrollReveal>
            <h2 className="text-4xl font-bold mb-12">
              <span className="text-gradient-secondary">Skills</span> & Technologies
            </h2>
          </ScrollReveal>

          <div className="flex flex-wrap gap-3">
            {skills.map((skill, index) => (
              <ScrollReveal key={skill} delay={index * 0.05}>
                <Badge 
                  variant="outline" 
                  className="px-4 py-2 text-sm glass-panel hover-lift cursor-default border-primary/30 hover:border-primary"
                >
                  {skill}
                </Badge>
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section className="py-20">
          <ScrollReveal>
            <h2 className="text-4xl font-bold mb-12">
              Work <span className="text-gradient-accent">Experience</span>
            </h2>
          </ScrollReveal>

          <div className="space-y-8 relative">
            {/* Timeline Line */}
            <div className="hidden lg:block absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-accent" />

            {experiences.map((exp, index) => (
              <ScrollReveal key={exp.company} delay={index * 0.2}>
                <Card className="glass-panel p-8 hover-lift ml-0 lg:ml-8 relative">
                  {/* Timeline Dot */}
                  <div className="hidden lg:block absolute -left-10 top-8 w-4 h-4 rounded-full bg-primary glow-cyan" />
                  
                  <div className="space-y-4">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-2">
                      <div>
                        <h3 className="text-2xl font-bold text-foreground">{exp.role}</h3>
                        <p className="text-lg text-primary">{exp.company}</p>
                      </div>
                      <div className="text-muted-foreground text-sm">
                        <p>{exp.period}</p>
                        <p>{exp.location}</p>
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground">{exp.description}</p>
                    
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex gap-3 text-sm text-foreground/90">
                          <span className="text-primary mt-1.5">▹</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
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

export default About;

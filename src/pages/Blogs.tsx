import { Navigation } from "@/components/Navigation";
import { ScrollReveal } from "@/components/ScrollReveal";
import { FloatingShape } from "@/components/FloatingShape";
import { Card } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const blogs = [
  {
    title: "Customization of Font and its properties in React-Tailwind Project",
    description: "Learn how to effectively customize fonts in your React and Tailwind CSS projects with this comprehensive guide.",
    link: "https://medium.com/@krishna.arjun/customization-of-font-in-react-tailwind-project-9218096542ae",
    gradient: "from-cyan-500 to-blue-500",
    color: "cyan"
  },
  {
    title: "Dynamic color using Tailwind CSS",
    description: "Discover techniques for implementing dynamic color schemes in your Tailwind CSS applications.",
    link: "https://medium.com/@krishna.arjun/dynamic-color-using-tailwind-css-8229a1e05eae",
    gradient: "from-purple-500 to-pink-500",
    color: "purple"
  },
  {
    title: "How to use svg as react component?",
    description: "A practical guide to integrating SVG files as reusable React components in your projects.",
    link: "https://medium.com/@krishna.arjun/how-to-use-svg-as-react-component-2ec6364e6a64",
    gradient: "from-orange-500 to-red-500",
    color: "orange"
  },
  {
    title: "How to deploy your Node Js Server on AWS ECS?",
    description: "Step-by-step tutorial on deploying Node.js applications to AWS ECS for production environments.",
    link: "https://medium.com/@krishna.arjun/how-to-deploy-your-node-js-server-on-aws-ecs-eae44efcbfde",
    gradient: "from-green-500 to-teal-500",
    color: "green"
  }
];

const Blogs = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Floating Background Shapes */}
      <FloatingShape className="w-96 h-96 bg-accent top-1/4 -right-48" delay={0} />
      <FloatingShape className="w-80 h-80 bg-primary bottom-1/3 -left-40" delay={2} />

      <Navigation />

      <main className="container mx-auto px-6 pt-32 pb-20">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <h1 className="text-5xl lg:text-6xl font-bold mb-4">
              Tech <span className="text-gradient-secondary">Blogs</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Sharing knowledge and insights from my development journey
            </p>
          </div>
        </ScrollReveal>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {blogs.map((blog, index) => (
            <ScrollReveal key={blog.title} delay={index * 0.1}>
              <Card className="glass-panel p-8 hover-lift group h-full flex flex-col">
                <div className="space-y-6 flex-1">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${blog.gradient} flex items-center justify-center glow-${blog.color}`}>
                    <span className="text-2xl">📝</span>
                  </div>

                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {blog.title}
                  </h3>

                  <p className="text-foreground/70 leading-relaxed">
                    {blog.description}
                  </p>
                </div>

                <Button
                  asChild
                  variant="ghost"
                  className="mt-6 w-full justify-between group-hover:text-primary"
                >
                  <a
                    href={blog.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Read Article
                    <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </Card>
            </ScrollReveal>
          ))}
        </div>

        {/* Call to Action */}
        <ScrollReveal delay={0.4}>
          <div className="text-center mt-16">
            <p className="text-muted-foreground mb-6">
              Want to read more? Visit my Medium profile for all articles.
            </p>
            <Button
              asChild
              size="lg"
              className="glass-panel hover-lift"
            >
              <a
                href="https://medium.com/@krishna.arjun"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Medium Profile
                <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </Button>
          </div>
        </ScrollReveal>
      </main>
    </div>
  );
};

export default Blogs;

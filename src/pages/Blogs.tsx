import { Navigation } from "@/components/Navigation";
import { GridBackground } from "@/components/GridBackground";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, BookOpen } from "lucide-react";
import { motion } from "framer-motion";

const blogs = [
  {
    title: "Customization of Font and its properties in React-Tailwind Project",
    description: "Master the art of font customization in React and Tailwind CSS. Learn advanced techniques for typography management, custom font loading, and creating consistent design systems.",
    link: "https://medium.com/@krishna.arjun/customization-of-font-in-react-tailwind-project-9218096542ae",
    gradient: "from-cyan-500 via-blue-500 to-purple-500",
    icon: "🎨",
    category: "Design System"
  },
  {
    title: "Dynamic color using Tailwind CSS",
    description: "Unlock the power of dynamic theming with Tailwind CSS. Explore CSS variables, color manipulation, and runtime theme switching for modern web applications.",
    link: "https://medium.com/@krishna.arjun/dynamic-color-using-tailwind-css-8229a1e05eae",
    gradient: "from-purple-500 via-pink-500 to-rose-500",
    icon: "🌈",
    category: "Styling"
  },
  {
    title: "How to use svg as react component?",
    description: "Transform SVG files into powerful React components. Learn optimization techniques, prop handling, and best practices for scalable icon systems.",
    link: "https://medium.com/@krishna.arjun/how-to-use-svg-as-react-component-2ec6364e6a64",
    gradient: "from-orange-500 via-amber-500 to-yellow-500",
    icon: "🎭",
    category: "Components"
  },
  {
    title: "How to deploy your Node Js Server on AWS ECS?",
    description: "Complete guide to deploying Node.js applications on AWS ECS. Cover Docker containerization, CI/CD pipelines, and production-ready configurations.",
    link: "https://medium.com/@krishna.arjun/how-to-deploy-your-node-js-server-on-aws-ecs-eae44efcbfde",
    gradient: "from-green-500 via-emerald-500 to-teal-500",
    icon: "🚀",
    category: "DevOps"
  }
];

const Blogs = () => {
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
          <Badge className="px-4 py-2 bg-secondary/10 border-secondary/30 text-secondary">
            <BookOpen className="w-4 h-4 mr-2" />
            Technical Writing
          </Badge>
          <h1 className="text-6xl lg:text-7xl font-bold">
            <span className="text-gradient-secondary">Knowledge</span>
            <br />
            Sharing
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Documenting my development journey through in-depth technical articles, 
            tutorials, and insights from real-world projects.
          </p>
        </motion.div>

        {/* Blog Grid */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-20">
          {blogs.map((blog, index) => (
            <motion.div
              key={blog.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
            >
              <Card className="group relative overflow-hidden glass-panel border-0 h-full">
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${blog.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-500`} />
                
                {/* Animated Border */}
                <div className={`absolute inset-0 bg-gradient-to-r ${blog.gradient} opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500`} />
                
                <div className="relative p-8 space-y-6 flex flex-col h-full">
                  {/* Icon & Category */}
                  <div className="flex items-start justify-between">
                    <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${blog.gradient} flex items-center justify-center text-4xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      {blog.icon}
                    </div>
                    <Badge variant="outline" className="border-primary/30 bg-primary/5">
                      {blog.category}
                    </Badge>
                  </div>

                  {/* Content */}
                  <div className="flex-1 space-y-4">
                    <h3 className="text-2xl font-bold text-foreground group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-secondary group-hover:bg-clip-text transition-all duration-300 leading-tight">
                      {blog.title}
                    </h3>

                    <p className="text-foreground/70 leading-relaxed">
                      {blog.description}
                    </p>
                  </div>

                  {/* Read Button */}
                  <Button
                    asChild
                    className="w-full group/btn bg-gradient-to-r from-primary/10 to-secondary/10 hover:from-primary/20 hover:to-secondary/20 border border-primary/30"
                    size="lg"
                  >
                    <a href={blog.link} target="_blank" rel="noopener noreferrer">
                      <span className="mr-2">Read Article</span>
                      <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                    </a>
                  </Button>
                </div>

                {/* Shine Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-8"
        >
          <div className="glass-panel p-12 rounded-3xl max-w-3xl mx-auto border-0">
            <div className="space-y-6">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-4xl mx-auto shadow-lg">
                📚
              </div>
              <h3 className="text-3xl font-bold">
                More <span className="text-gradient-primary">Articles</span> Coming Soon
              </h3>
              <p className="text-muted-foreground text-lg">
                Follow me on Medium to stay updated with the latest technical insights, 
                tutorials, and development best practices.
              </p>
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-primary to-secondary hover:shadow-lg hover:shadow-primary/50 transition-all"
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
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default Blogs;

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";

interface ProjectCardProps {
  title: string;
  description: string;
  features?: string;
  tech: string[];
  link?: string;
  gradient: string;
  index: number;
  size?: "small" | "large";
}

export const ProjectCard = ({
  title,
  description,
  features,
  tech,
  link,
  gradient,
  index,
  size = "large"
}: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8, transition: { duration: 0.2 } }}
      className={size === "large" ? "col-span-1" : ""}
    >
      <Card className="group relative overflow-hidden glass-panel border-0 h-full">
        {/* Gradient Background */}
        <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-500`} />
        
        {/* Animated Border */}
        <div className={`absolute inset-0 bg-gradient-to-r ${gradient} opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500`} />
        
        <div className="relative p-8 space-y-6">
          {/* Icon */}
          <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
            <span className="text-3xl">🚀</span>
          </div>

          {/* Title */}
          <h3 className="text-2xl font-bold text-foreground group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-secondary group-hover:bg-clip-text transition-all duration-300">
            {title}
          </h3>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2">
            {tech.slice(0, size === "small" ? 3 : 6).map((item) => (
              <Badge
                key={item}
                variant="outline"
                className="border-primary/30 bg-primary/5 hover:bg-primary/10 transition-colors"
              >
                {item}
              </Badge>
            ))}
            {tech.length > (size === "small" ? 3 : 6) && (
              <Badge variant="outline" className="border-muted-foreground/30">
                +{tech.length - (size === "small" ? 3 : 6)}
              </Badge>
            )}
          </div>

          {/* Description */}
          <p className="text-foreground/80 leading-relaxed line-clamp-3">
            {description}
          </p>

          {features && size === "large" && (
            <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
              {features}
            </p>
          )}

          {/* Link */}
          {link && (
            <Button
              asChild
              className="w-full group/btn bg-gradient-to-r from-primary/10 to-secondary/10 hover:from-primary/20 hover:to-secondary/20 border border-primary/30"
              size="lg"
            >
              <a href={link} target="_blank" rel="noopener noreferrer">
                <span className="mr-2">View Project</span>
                <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
              </a>
            </Button>
          )}
        </div>

        {/* Shine Effect */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
        </div>
      </Card>
    </motion.div>
  );
};

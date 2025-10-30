import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

interface ProjectCardProps {
  title: string;
  description: string;
  features?: string;
  tech: string[];
  link?: string;
  gradient: string;
  imageSrc?: string;
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
  imageSrc,
  index,
  size = "large",
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
      <Card className="group relative overflow-hidden glass-panel border-0 h-full flex flex-col">
        {/* Gradient Background */}
        <div
          className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-500`}
        />

        {/* Animated Border */}
        <div
          className={`absolute inset-0 bg-gradient-to-r ${gradient} opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500`}
        />

        {/* Image Section */}
        {imageSrc && (
          <motion.div
            className="relative w-full h-40 rounded-t-2xl overflow-hidden shadow-md"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={imageSrc}
              alt={title}
              className="object-cover w-full h-full"
              loading="lazy"
              draggable={false}
            />
          </motion.div>
        )}

        {/* Content Section */}
        <div className="relative p-6 space-y-5 flex flex-col flex-grow">
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

          {/* Features */}
          {features && size === "large" && (
            <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
              {features}
            </p>
          )}

          {/* Link Button */}
          {link && (
            <Button
              asChild
              className="mt-auto bg-gradient-to-r from-primary/20 to-secondary/20 hover:from-primary/30 hover:to-secondary/30 border border-primary/40 w-full flex items-center justify-center gap-2"
              size="lg"
            >
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View project ${title}`}
              >
                View Project
                <ExternalLink className="w-4 h-4" />
              </a>
            </Button>
          )}
        </div>

        {/* Shine Effect */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
        </div>
      </Card>
    </motion.div>
  );
};

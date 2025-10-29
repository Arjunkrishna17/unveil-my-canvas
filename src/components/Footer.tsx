import {
  Github,
  Linkedin,
  Twitter,
  Mail,
  MapPin,
  Phone,
  ArrowUp,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-border/50">
      <div className="glass-panel">
        <div className="container mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand & Description */}
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="space-y-3"
              >
                <h3 className="text-2xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                  Krishnadas R
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Software Engineer crafting exceptional digital experiences
                  with modern technologies and innovative solutions.
                </p>
                <Badge className="bg-primary/10 border-primary/30 text-primary">
                  Open to opportunities
                </Badge>
              </motion.div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-foreground">
                Quick Links
              </h4>
              <ul className="space-y-3">
                <li>
                  <Link
                    to="/"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors inline-flex items-center group"
                  >
                    <span className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      →
                    </span>
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to="/projects"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors inline-flex items-center group"
                  >
                    <span className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      →
                    </span>
                    Projects
                  </Link>
                </li>
                <li>
                  <Link
                    to="/blogs"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors inline-flex items-center group"
                  >
                    <span className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      →
                    </span>
                    Blogs
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Information */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-foreground">Contact</h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="mailto:krishnaarjuntech@gmail.com"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group"
                  >
                    <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" />
                    krishnaarjuntech@gmail.com
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+919747975647"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group"
                  >
                    <Phone className="w-4 h-4 group-hover:scale-110 transition-transform" />
                    +91 6363253298
                  </a>
                </li>
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>
                    Bangalore, Karnataka
                    <br />
                    India
                  </span>
                </li>
              </ul>
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-foreground">Connect</h4>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://github.com/Arjunkrishna17"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <Button
                    variant="outline"
                    size="icon"
                    className="border-primary/30 hover:border-primary hover:bg-primary/10 transition-all"
                  >
                    <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  </Button>
                </a>
                <a
                  href="https://www.linkedin.com/in/krishnaarjuntech/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <Button
                    variant="outline"
                    size="icon"
                    className="border-primary/30 hover:border-primary hover:bg-primary/10 transition-all"
                  >
                    <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  </Button>
                </a>
                <a
                  href="https://twitter.com/KRISHNADAS9574"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <Button
                    variant="outline"
                    size="icon"
                    className="border-primary/30 hover:border-primary hover:bg-primary/10 transition-all"
                  >
                    <Twitter className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  </Button>
                </a>
              </div>

              {/* Back to Top Button */}
              <div className="pt-4">
                <Button
                  onClick={scrollToTop}
                  variant="outline"
                  size="sm"
                  className="border-secondary/30 hover:border-secondary hover:bg-secondary/10 transition-all group"
                >
                  <ArrowUp className="w-4 h-4 mr-2 group-hover:-translate-y-1 transition-transform" />
                  Back to Top
                </Button>
              </div>
            </div>
          </div>

          <p className="text-sm text-muted-foreground text-center md:text-left">
            © {currentYear} Krishnadas R.
          </p>
        </div>
      </div>
    </footer>
  );
};

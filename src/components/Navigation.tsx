import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Github, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-panel shadow-lg" : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-6 h-20 flex items-center justify-between">
        {/* Social Links */}
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/Arjunkrishna17"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/krishnaarjuntech/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="https://twitter.com/KRISHNADAS9574"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Twitter className="w-5 h-5" />
          </a>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex items-center gap-8">
          <li>
            <Link
              to="/"
              className={`text-sm font-medium transition-colors ${
                isActive("/") ? "text-primary" : "text-foreground hover:text-primary"
              }`}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/projects"
              className={`text-sm font-medium transition-colors ${
                isActive("/projects") ? "text-primary" : "text-foreground hover:text-primary"
              }`}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="/blogs"
              className={`text-sm font-medium transition-colors ${
                isActive("/blogs") ? "text-primary" : "text-foreground hover:text-primary"
              }`}
            >
              Blogs
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </Button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden glass-panel border-t border-border/50">
          <ul className="container mx-auto px-6 py-6 space-y-4">
            <li>
              <Link
                to="/"
                onClick={() => setIsOpen(false)}
                className={`block text-lg font-medium transition-colors ${
                  isActive("/") ? "text-primary" : "text-foreground hover:text-primary"
                }`}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/projects"
                onClick={() => setIsOpen(false)}
                className={`block text-lg font-medium transition-colors ${
                  isActive("/projects") ? "text-primary" : "text-foreground hover:text-primary"
                }`}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="/blogs"
                onClick={() => setIsOpen(false)}
                className={`block text-lg font-medium transition-colors ${
                  isActive("/blogs") ? "text-primary" : "text-foreground hover:text-primary"
                }`}
              >
                Blogs
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

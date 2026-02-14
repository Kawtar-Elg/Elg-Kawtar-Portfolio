import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Download } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "glass-card shadow-lg" : "bg-transparent"
        }`}
    >
      <div className="container-custom px-4 sm:px-6">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="text-xl sm:text-2xl font-bold gradient-text">
            Kawtar El Gaddi
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-foreground/80 hover:text-primary transition-colors duration-300 relative group"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Download CV Button */}
          <div className="hidden md:block">
            <a href="/CV_EL_GADDI_KAWTAR.pdf" download>
              <Button variant="hero" size="sm">
                <Download className="w-4 h-4" />
                Download CV
              </Button>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden glass-card rounded-lg mt-4 p-6 space-y-4 animate-fadeInUp">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block text-foreground/80 hover:text-primary transition-colors duration-300 py-2"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <a href="/CV_EL_GADDI_KAWTAR.pdf" download>
              <Button variant="hero" size="sm" className="w-full mt-4">
                <Download className="w-4 h-4" />
                Download CV
              </Button>
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
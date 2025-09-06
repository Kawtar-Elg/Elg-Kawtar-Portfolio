import { Heart, Code, Palette, Bot } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-gradient-to-r from-background to-secondary/20">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-accent to-primary"></div>
      <div className="absolute top-10 right-20 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 left-20 w-40 h-40 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

      <div className="relative z-10 section-padding">
        <div className="container-custom">
          <div className="text-center space-y-8">
            {/* Logo/Brand */}
            <div className="animate-fadeInUp">
              <h3 className="text-3xl font-bold gradient-text mb-4">Kawtar El Gaddi</h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Crafting digital experiences with passion, creativity, and innovation. 
                Let's build the future together, one project at a time.
              </p>
            </div>

            {/* Skills Icons */}
            <div className="flex justify-center space-x-6 animate-fadeInUp">
              <div className="w-12 h-12 glass-card rounded-xl flex items-center justify-center hover-glow group cursor-pointer">
                <Code className="w-6 h-6 text-primary group-hover:scale-110 transition-transform duration-300" />
              </div>
              <div className="w-12 h-12 glass-card rounded-xl flex items-center justify-center hover-glow group cursor-pointer">
                <Palette className="w-6 h-6 text-accent group-hover:scale-110 transition-transform duration-300" />
              </div>
              <div className="w-12 h-12 glass-card rounded-xl flex items-center justify-center hover-glow group cursor-pointer">
                <Bot className="w-6 h-6 text-primary group-hover:scale-110 transition-transform duration-300" />
              </div>
            </div>

            {/* Copyright */}
            <div className="pt-8 border-t border-border/20 animate-fadeInUp">
              <div className="flex items-center justify-center space-x-2 text-muted-foreground">
                <span>© {currentYear} Made with</span>
                <Heart className="w-4 h-4 text-primary animate-pulse" />
                <span>by Kawtar El Gaddi</span>
              </div>
              <p className="text-sm text-muted-foreground/60 mt-2">
                Powered by creativity, innovation, and endless curiosity
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
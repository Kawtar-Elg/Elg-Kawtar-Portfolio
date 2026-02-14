import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Code, Palette, Bot } from "lucide-react";
import kawtarProfile from "@/assets/kawtar-profile.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/20"></div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full animate-float blur-xl"></div>
      <div className="absolute top-40 right-20 w-32 h-32 bg-accent/20 rounded-full animate-float blur-xl" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-40 left-20 w-16 h-16 bg-primary/30 rounded-full animate-float blur-xl" style={{ animationDelay: '2s' }}></div>

      {/* Content */}
      <div className="relative z-10 section-padding flex items-center min-h-screen">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* Left Content */}
            <div className="space-y-8 animate-slideInLeft">
              {/* Floating Icons */}
              <div className="flex space-x-4 mb-6">
                <div className="w-12 h-12 glass-card rounded-lg flex items-center justify-center animate-float">
                  <Code className="w-6 h-6 text-primary" />
                </div>
                <div className="w-12 h-12 glass-card rounded-lg flex items-center justify-center animate-float" style={{ animationDelay: '0.5s' }}>
                  <Palette className="w-6 h-6 text-accent" />
                </div>
                <div className="w-12 h-12 glass-card rounded-lg flex items-center justify-center animate-float" style={{ animationDelay: '1s' }}>
                  <Bot className="w-6 h-6 text-primary" />
                </div>
              </div>

              <div className="space-y-4">
                <h2 className="text-base sm:text-lg text-primary font-medium">Hello, I'm</h2>
                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight">
                  <span className="gradient-text">Kawtar</span>
                  <br />
                  <span className="text-foreground">El Gaddi</span>
                </h1>
                <h3 className="text-xl sm:text-2xl lg:text-3xl text-foreground/80 font-light">
                  Tech Dreamer, Code Maker, Design Shaper
                </h3>
              </div>

              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-lg">
                I'm | Kawtar El Gaddi — the creative mind who blends web & mobile development, graphic design, and robotics passion into powerful solutions. I lead with vision, design with originality, and build with unstoppable energy.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a href="https://www.linkedin.com/in/kawtar-el-gaddi-5924402b9/">
                  <Button variant="hero" size="lg" className="group">
                    Let’s start the magic
                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                </a>

                <Button variant="glass" size="lg" className="group hidden sm:flex">
                  <Play className="w-5 h-5" />
                  Relax, your project is in safe and creative hands !
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 sm:flex sm:space-x-8 pt-8">
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold gradient-text">3+</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold gradient-text">50+</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">Projects Done</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold gradient-text">100%</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">Client Satisfaction</div>
                </div>
              </div>
            </div>

            {/* Right Content - Profile Image */}
            <div className="relative animate-fadeInUp">
              <div className="relative">
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-3xl blur-2xl opacity-30 animate-pulse"></div>

                {/* Profile Image */}
                <div className="relative glass-card rounded-3xl p-6 hover-glow">
                  <img
                    src={kawtarProfile}
                    alt="Kawtar El Gaddi - Developer & Designer"
                    className="w-full h-auto rounded-2xl object-cover"
                  />

                  {/* Experience Badge */}
                  <div className="absolute top-4 right-4 sm:top-8 sm:right-8 glass-card rounded-2xl p-3 sm:p-4 animate-float">
                    <div className="text-center">
                      <div className="text-xl sm:text-2xl font-bold gradient-text">3+</div>
                      <div className="text-xs sm:text-sm text-muted-foreground">Years</div>
                      <div className="text-xs sm:text-sm text-muted-foreground">Experience</div>
                    </div>
                  </div>

                  {/* Skills Indicator */}
                  <div className="absolute bottom-4 left-4 sm:bottom-8 sm:left-8 glass-card rounded-2xl p-2 sm:p-3 animate-float" style={{ animationDelay: '1s' }}>
                    <div className="flex items-center space-x-2">
                      <div className="flex -space-x-2">
                        <div className="w-6 h-6 sm:w-8 sm:h-8 bg-primary rounded-full border-2 border-background flex items-center justify-center">
                          <Code className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                        </div>
                        <div className="w-6 h-6 sm:w-8 sm:h-8 bg-accent rounded-full border-2 border-background flex items-center justify-center">
                          <Palette className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                        </div>
                        <div className="w-6 h-6 sm:w-8 sm:h-8 bg-primary rounded-full border-2 border-background flex items-center justify-center">
                          <Bot className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                        </div>
                      </div>
                      <span className="text-xs sm:text-sm text-muted-foreground">Multi-skilled</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
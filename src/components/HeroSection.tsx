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
                <h2 className="text-lg text-primary font-medium">Hello, I'm</h2>
                <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                  <span className="gradient-text">Kawtar</span>
                  <br />
                  <span className="text-foreground">El Gaddi</span>
                </h1>
                <h3 className="text-2xl lg:text-3xl text-foreground/80 font-light">
                  Creative Developer & Robotics Enthusiast
                </h3>
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
                Passionate about crafting innovative digital experiences through web development, 
                mobile apps, and creative design. With a deep love for robotics and emerging technologies, 
                I bring creativity, leadership, and technical excellence to every project.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="hero" size="lg" className="group">
                  Get Started
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button variant="glass" size="lg" className="group">
                  <Play className="w-5 h-5" />
                  Watch Intro
                </Button>
              </div>

              {/* Stats */}
              <div className="flex space-x-8 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold gradient-text">3+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold gradient-text">50+</div>
                  <div className="text-sm text-muted-foreground">Projects Done</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold gradient-text">100%</div>
                  <div className="text-sm text-muted-foreground">Client Satisfaction</div>
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
                  <div className="absolute top-8 right-8 glass-card rounded-2xl p-4 animate-float">
                    <div className="text-center">
                      <div className="text-2xl font-bold gradient-text">3+</div>
                      <div className="text-sm text-muted-foreground">Years</div>
                      <div className="text-sm text-muted-foreground">Experience</div>
                    </div>
                  </div>

                  {/* Skills Indicator */}
                  <div className="absolute bottom-8 left-8 glass-card rounded-2xl p-3 animate-float" style={{ animationDelay: '1s' }}>
                    <div className="flex items-center space-x-2">
                      <div className="flex -space-x-2">
                        <div className="w-8 h-8 bg-primary rounded-full border-2 border-background flex items-center justify-center">
                          <Code className="w-4 h-4 text-white" />
                        </div>
                        <div className="w-8 h-8 bg-accent rounded-full border-2 border-background flex items-center justify-center">
                          <Palette className="w-4 h-4 text-white" />
                        </div>
                        <div className="w-8 h-8 bg-primary rounded-full border-2 border-background flex items-center justify-center">
                          <Bot className="w-4 h-4 text-white" />
                        </div>
                      </div>
                      <span className="text-sm text-muted-foreground">Multi-skilled</span>
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
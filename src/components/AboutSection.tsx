import { GraduationCap, Trophy, Heart, Target } from "lucide-react";

const AboutSection = () => {
  const highlights = [
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: "Education",
      description: "Specialized in Web & Mobile Development with additional training in Graphic Design"
    },
    {
      icon: <Trophy className="w-6 h-6" />,
      title: "Achievement",
      description: "Successfully delivered 50+ projects with 100% client satisfaction rate"
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Passion",
      description: "Deep love for robotics and emerging technologies that shape the future"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Focus",
      description: "Committed to creating innovative solutions that make a real difference"
    }
  ];

  const timeline = [
    {
      year: "2025",
      title: "Junior Developer",
      description: "Leading innovative projects in web and mobile development"
    },
    {
      year: "2024-2025",
      title: "Robotics Explorer",
      description: "Expanded into robotics and AI-driven solutions"
    },
    {
      year: "2021-2025",
      title: "Creative Designer",
      description: "Mastered UI/UX and graphic design principles"
    },
    {
      year: "2021",
      title: "Journey Began",
      description: "Started professional development career"
    }
  ];

  return (
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 right-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 left-10 w-60 h-60 bg-primary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-12 sm:mb-16 animate-fadeInUp">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-base sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">
            A highly motivated developer with a passion for creating exceptional digital experiences.
            My journey combines technical expertise with creative vision to deliver solutions that truly matter.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-slideInLeft">
            <div className="space-y-6">
              <h3 className="text-xl sm:text-2xl font-bold text-foreground">My Story</h3>
              <div className="space-y-4 text-sm sm:text-base text-muted-foreground">
                <p>
                  As a passionate developer, I've dedicated myself to mastering the art of digital creation.
                  My journey began with a curiosity about how technology can solve real-world problems,
                  and has evolved into a deep expertise across multiple domains.
                </p>
                <p>
                  From web development to mobile applications, graphic design to robotics, I believe in
                  the power of interdisciplinary knowledge. This diverse skill set allows me to approach
                  challenges from unique angles and create truly innovative solutions.
                </p>

              </div>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {highlights.map((highlight, index) => (
                <div
                  key={index}
                  className="glass-card rounded-2xl p-4 sm:p-6 hover-glow group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-primary mb-3 group-hover:scale-110 transition-transform duration-300">
                    {highlight.icon}
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">{highlight.title}</h4>
                  <p className="text-sm text-muted-foreground">{highlight.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Timeline */}
          <div className="animate-fadeInUp">
            <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-6 sm:mb-8">My Journey</h3>
            <div className="space-y-6">
              {timeline.map((item, index) => (
                <div
                  key={index}
                  className="relative flex items-start space-x-6 group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Timeline Line */}
                  {index !== timeline.length - 1 && (
                    <div className="absolute left-6 top-12 w-0.5 h-16 bg-gradient-to-b from-primary to-transparent"></div>
                  )}

                  {/* Timeline Dot */}
                  <div className="relative">
                    <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center text-white font-bold group-hover:scale-110 transition-transform duration-300 hover-glow">
                      {item.year.slice(-2)}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 glass-card rounded-xl p-6 hover-glow group-hover:transform group-hover:-translate-y-1 transition-all duration-300">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-lg font-semibold text-foreground">{item.title}</h4>
                      <span className="text-sm text-primary font-medium">{item.year}</span>
                    </div>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
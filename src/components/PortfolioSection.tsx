import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Eye } from "lucide-react";

const PortfolioSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Web", "Mobile", "Design", "Robotics"];

  const projects = [
  
    {
      id: 1,
      title: "Fitness Tracking App",
      category: "Mobile",
      description: "Cross-platform mobile app for tracking workouts and health metrics.",
      technologies: ["React Native", "Firebase", "Redux", "Charts"],
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop",
      liveUrl: "#",
      githubUrl: "#"
    },
    
    {
      id: 2,
      title: "Smart Home Robot",
      category: "Robotics",
      description: "Autonomous robot for home automation and security monitoring.",
      technologies: ["Arduino", "Python", "IoT", "Computer Vision"],
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 3,
      title: "Alf-Layla ",
      category: "Web",
      description: "Responsive portfolio website with modern design and smooth animations.",
      technologies: ["React", "Tailwind", "Framer Motion", "TypeScript"],
      image: "src/assets/1.png",
      liveUrl: "alf-layla.great-site.net",
      githubUrl: "#"
    },
    {
      id: 4,
      title: "Portfolio Website",
      category: "Web",
      description: "Responsive portfolio website with modern design and smooth animations.",
      technologies: ["React", "Tailwind", "Framer Motion", "TypeScript"],
      image: "src/assets/portfoliopic.png",
      liveUrl: "#",
      githubUrl: "#"
    }
    ,
    {
      id: 5,
      title: "Task Management App",
      category: "Mobile",
      description: "Intuitive task management app with team collaboration features.",
      technologies: ["Flutter", "Dart", "SQLite", "Push Notifications"],
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
      liveUrl: "#",
      githubUrl: "#"
    }
  ];

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="portfolio" className="section-padding relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-10 left-20 w-32 h-32 bg-accent/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-20 w-48 h-48 bg-primary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            My <span className="gradient-text">Portfolio</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my latest projects demonstrating creativity, technical skills, 
            and passion for innovation across different domains.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex justify-center mb-12">
          <div className="glass-card rounded-2xl p-2">
            <div className="flex space-x-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-6 py-3 rounded-xl transition-all duration-300 font-medium ${
                    activeCategory === category
                      ? "bg-primary text-primary-foreground shadow-lg"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="group relative animate-fadeInUp"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="glass-card rounded-2xl overflow-hidden hover-glow transition-all duration-500 group-hover:scale-105">
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Project Actions */}
                  <div className="absolute inset-0 flex items-center justify-center space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                   <a
                      href="https://www.linkedin.com/posts/kawtar-elg-5924402b9_devweb-php-mysql-activity-7355033067910049792-DrEf?utm_source=share&utm_medium=member_desktop&rcm=ACoAAExqxz4Bf2G5wHituFJxh18P1Fz3w0omrR4"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button variant="hero" size="sm">
                        <Eye className="w-4 h-4" />
                        View
                      </Button>
                    </a>

                   <a
                    href="https://github.com/Kawtar-Elg/Alf-Laylaa.git"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="glass" size="sm">
                      <Github className="w-4 h-4" />
                      Code
                    </Button>
                  </a>

                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm text-primary font-medium bg-primary/10 px-3 py-1 rounded-full">
                      {project.category}
                    </span>
                    <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                  </div>

                  <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>

                  <p className="text-muted-foreground mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="text-xs bg-muted/50 text-muted-foreground px-2 py-1 rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Project Links */}
                  <div className="flex space-x-3">
                 <a href="https://alf-layla.great-site.net" target="_blank" rel="noopener noreferrer" className="flex-1">
                  <Button variant="outline" size="sm" className="flex-1">
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </Button>
                      </a>
                   <a
                        href="https://github.com/Kawtar-Elg/Alf-Laylaa.git"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1"
                    >
                      <Button variant="ghost" size="sm" className="flex-1">
                        <Github className="w-4 h-4" />
                        Source
                      </Button>
                    </a>

                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Section */}
        <div className="text-center mt-12">
          <Button variant="hero" size="lg">
            View All Projects
            <ExternalLink className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
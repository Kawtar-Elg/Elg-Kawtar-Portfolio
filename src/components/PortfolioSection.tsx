import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Eye, Import } from "lucide-react";

// Import all images
import rbtc from "@/assets/rbtc.png";
import project1 from "@/assets/1.png";
import portfoliopic from "@/assets/portfoliopic.png";
import appvers from "@/assets/appvers.png";
import appvers2 from "@/assets/appvers (2).png";
import management from "@/assets/management.png";
import bstamyImage from "@/assets/Bstamy+_Presentation.png";
import waterlyImage from "@/assets/Waterly Presentation.png";
import taxiHubImage from "@/assets/T°axi Hub Presentation.png"
import dashlyImage from "@assets/postlinkdin.png" ;
import autobrain from  "src/assets/autobrain.png" ;
import keycare from "src/assets/KEYCARE PPT.png" ;


const PortfolioSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Web", "Mobile", "Design", "Robotics"];

  const projects = [

    {
      id: 12,
      title: "KEYCARE",
      category: "App",
      description: "An AI-powered keyboard that helps people choose better words in real time.",
      technologies: ["kotlin", "java", "Finetech", "ML Kit" ],
      image: keycare,
      liveUrl: "https://key-care.app/",
      githubUrl: "https://github.com/Kawtar-Elg",
    
    
    },
    {
      id: 6,
      title: "AutoBrain",
      category: "App",
      description: "Application de Diagnostic Automobile par Intelligence Artificielle",
      technologies: ["kotlin", "jetpack compose", "FireBsae", "ML Kit", "TensorFlow Lite", "Gemini Api"],
      image: autobrain,
      githubUrl: "https://github.com/Kawtar-Elg",
      
    
    
    },
    {
      id: 7,
      title: "DASHLY",
      category: "App",
      description: " Record Your Journey Securely & Park with Confidence",
      technologies: ["kotlin", "jetpack compose", "FireBsae", "Room"],
      image: dashlyImage,
      liveUrl: "bstamy-web-site.vercel.app",
      githubUrl: "https://github.com/Kawtar-Elg/Dashly.git",
    
    },
     {
      id: 9,
      title: "BSTAMY+",
      category: "App",
      description: " Bstamy+ is a mobile banking app that helps users manage accounts and transactions, make transfers, track activity, and receive real-time notifications.",
      technologies: ["kotlin", "jetpack compose", "FireBsae", "Push Notifications"],
      image: bstamyImage,
      liveUrl: "bstamy-web-site.vercel.app",
      githubUrl: "https://github.com/Kawtar-Elg/BstamyPlus",
      viewUrl: "bstamy-web-site.vercel.app"
    },
    {
      id: 8,
      title: "WATERLY",
      category: "App",
      description: " Waterly helps users build better daily hydration habits by tracking water intake, setting personal goals, sending reminders, and showing progress through clear, intuitive charts.",
      technologies: ["kotlin", "jetpack compose", "FireBsae", "Push Notifications"],
      image: waterlyImage,
      liveUrl: "https://github.com/Kawtar-Elg/waterly",
      githubUrl: "https://github.com/Kawtar-Elg/waterly",
      viewUrl: "https://github.com/Kawtar-Elg/waterly"
    },
    {
      id: 9,
      title: "TaxiHub",
      category: "App",
      description: " Taxi Hub is an innovative mobile app that acts as a smart meter, allowing drivers to manage trips and estimate fares in real time based on time, distance, and cost, with a smooth and transparent experience for drivers and passengers.",
      technologies: ["kotlin", "FireBsae", "Push Notifications"],
      image: taxiHubImage,
      liveUrl: "https://github.com/Kawtar-Elg/Taxi-Hub",
      githubUrl: "https://github.com/Kawtar-Elg/Taxi-Hub",
      viewUrl: "https://github.com/Kawtar-Elg/Taxi-Hub"
    },
  
     {
      id: 4,
      title: "Managemt app",
      category: "Mobile",
      description: "Gérez votre hamam en toute simplicité !",
      technologies: ["Kotlin", "jetbrain", "flutter ", "react"],
      image: appvers,
      liveUrl: "https://github.com/Kawtar-Elg",
      githubUrl: "https://github.com/Kawtar-Elg",
      viewUrl: "https://github.com/Kawtar-Elg"
    } ,
    {
      id: 2,
      title: "Alf-Layla ",
      category: "Web",
      description: "Propose a simple, modern, and intuitive digital solution that allows users to book luxury accommodations in just a few clicks.",
      technologies: ["html", "css", "bootstrap ", "python"],
      image: project1,
      liveUrl: "https://alf-layla.great-site.net",
      githubUrl: "https://github.com/Kawtar-Elg/Alf-Laylaa.git",
      viewUrl: "https://www.linkedin.com/posts/kawtar-elg-5924402b9_devweb-php-mysql-activity-7355033067910049792-DrEf?utm_source=share&utm_medium=member_desktop&rcm=ACoAAExqxz4Bf2G5wHituFJxh18P1Fz3w0omrR4"
    },
     {
      id: 1,
      title: "Robotic_Club_CMC",
      category: "Robotics",
      description: "Robotics Club CMC – a student community passionate about robotics, AI, and innovation.",
      technologies: ["html", "css", "bootstrap", "java Script"],
      image: rbtc,
      liveUrl: "https://www.instagram.com/club_robotique_cmc_rabat?igsh=MWwzNnpldTV5OGp0",
      githubUrl: "https://www.instagram.com/club_robotique_cmc_rabat?igsh=MWwzNnpldTV5OGp0",
      viewUrl: "https://www.instagram.com/club_robotique_cmc_rabat?igsh=MWwzNnpldTV5OGp0"
    },  
    {
      id: 3,
      title: "Portfolio Website",
      category: "Web",
      description: "Responsive portfolio website with modern design and smooth animations.",
      technologies: ["React", "Tailwind", "Framer Motion", "TypeScript"],
      image: portfoliopic,
      liveUrl: "https://github.com/Kawtar-Elg/Elg-Kawtar-Portfolio",
      githubUrl: "https://github.com/Kawtar-Elg/Elg-Kawtar-Portfolio.git",
      viewUrl: "https://elg-kawtar-portfolio.vercel.app/"
    },
   
    {
      id: 5,
      title: "Managemt app",
      category: "descktop",
      description: "Gérez votre hamam en toute simplicité !",
      technologies: ["python", "flask", "tikinter"],
      image: appvers2,
      liveUrl: "https://github.com/Kawtar-Elg",
      githubUrl: "https://github.com/Kawtar-Elg",
      viewUrl: "https://github.com/Kawtar-Elg"
    },
    
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
                    {project.viewUrl && (
                      <a
                        href={project.viewUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button variant="hero" size="sm">
                          <Eye className="w-4 h-4" />
                          View
                        </Button>
                      </a>
                    )}
                    
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button variant="glass" size="sm">
                          <Github className="w-4 h-4" />
                          Code
                        </Button>
                      </a>
                    )}
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
                    {project.liveUrl && (
                      <a 
                        href={project.liveUrl} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="flex-1"
                      >
                        <Button variant="outline" size="sm" className="flex-1">
                          <ExternalLink className="w-4 h-4" />
                          Live Demo
                        </Button>
                      </a>
                    )}
                    
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1"
                      >
                        <Button variant="ghost" size="sm" className="flex-1">
                          <Github className="w-4 h-4" />
                          Source
                        </Button>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Section */}
        <div className="text-center mt-12">
          <a href="https://github.com/Kawtar-Elg" target="_blank" rel="noopener noreferrer" className="flex-1">
            <Button variant="hero" size="lg">
              View All Projects
              <ExternalLink className="w-5 h-5" />
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
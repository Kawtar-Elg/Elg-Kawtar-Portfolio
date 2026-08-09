import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "./SectionHeading";
import DeviceMockup from "./DeviceMockup";
import MockupCarousel from "./MockupCarousel";
import TechBadge from "./TechBadge";
import MagneticButton from "./MagneticButton";
import { projects, projectCategories } from "@/data/projects";
import { ExternalLink, Github, ChevronRight, Youtube, ShoppingBag } from "lucide-react";
import { Button } from "./ui/button";

const PortfolioSection = () => {
  const [activeCategory, setActiveCategory] = useState<string>("Mobile");

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="work" className="section-padding">
      <div className="container-custom">
        <SectionHeading 
          number="02" 
          title="Selected Work" 
          subtitle="Case studies showcasing end-to-end product development, from UI design to deployed applications." 
        />

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 mb-16">
          {projectCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === cat 
                  ? "bg-primary text-primary-foreground" 
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects List */}
        <div className="space-y-32">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => {
              const isEven = idx % 2 === 0;
              const isMobile = project.category === "Mobile";

              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{ duration: 0.6 }}
                  className={`flex flex-col gap-12 lg:gap-20 items-center ${
                    isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}
                >
                  {/* Visual Side */}
                  <div className={`w-full ${project.screens && project.screens.length > 0 ? "lg:w-3/5" : "lg:w-1/2"} flex justify-center`}>
                    {project.screens && project.screens.length > 0 ? (
                      <MockupCarousel screens={project.screens} />
                    ) : isMobile ? (
                      <DeviceMockup 
                        screen={project.image} 
                        size="lg" 
                        className="shadow-2xl shadow-primary/10"
                      />
                    ) : (
                      <div className="w-full rounded-2xl overflow-hidden border border-border shadow-2xl surface-card">
                        <img 
                          src={project.image} 
                          alt={project.title} 
                          className="w-full h-auto object-cover" 
                          loading="lazy"
                        />
                      </div>
                    )}
                  </div>

                  {/* Content Side */}
                  <div className={`w-full ${project.screens && project.screens.length > 0 ? "lg:w-2/5" : "lg:w-1/2"} space-y-8`}>
                    <div>
                      <div className="flex items-center gap-4 mb-2">
                        {project.logo && (
                          <img src={project.logo} alt={`${project.title} logo`} className="w-12 h-12 rounded-xl object-contain shadow-lg" />
                        )}
                        <h3 className="text-3xl lg:text-4xl font-bold text-foreground">
                          {project.title}
                        </h3>
                      </div>
                      <p className="text-xl text-primary font-medium mb-6">
                        {project.tagline}
                      </p>
                      <p className="body-lg mb-8">
                        {project.description}
                      </p>
                    </div>

                    {(project.problem || project.solution) && (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-6 rounded-2xl bg-secondary/50 border border-border">
                        {project.problem && (
                          <div>
                            <h4 className="text-sm font-semibold text-foreground mb-2">The Challenge</h4>
                            <p className="text-sm text-muted-foreground">{project.problem}</p>
                          </div>
                        )}
                        {project.solution && (
                          <div>
                            <h4 className="text-sm font-semibold text-foreground mb-2">The Solution</h4>
                            <p className="text-sm text-muted-foreground">{project.solution}</p>
                          </div>
                        )}
                      </div>
                    )}

                    <div>
                      <h4 className="text-sm font-semibold text-foreground mb-3">Technologies</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map(tech => (
                          <TechBadge key={tech} tech={tech} />
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-4 pt-4">
                      {project.storeUrl && (
                        <MagneticButton>
                          <a href={project.storeUrl} target="_blank" rel="noreferrer">
                            <Button variant="default" className="rounded-full bg-green-600 hover:bg-green-700 text-white border-0">
                              Google Play <ShoppingBag className="ml-2 w-4 h-4" />
                            </Button>
                          </a>
                        </MagneticButton>
                      )}
                      {project.liveUrl && (
                        <MagneticButton>
                          <a href={project.liveUrl} target="_blank" rel="noreferrer">
                            <Button variant="default" className="rounded-full">
                              Live Demo <ExternalLink className="ml-2 w-4 h-4" />
                            </Button>
                          </a>
                        </MagneticButton>
                      )}
                      {project.videoUrl && (
                        <MagneticButton>
                          <a href={project.videoUrl} target="_blank" rel="noreferrer">
                            <Button variant="outline" className="rounded-full border-red-500/50 text-red-500 hover:bg-red-500/10 hover:text-red-400">
                              Watch Demo <Youtube className="ml-2 w-4 h-4" />
                            </Button>
                          </a>
                        </MagneticButton>
                      )}
                      {project.githubUrl && (
                        <MagneticButton>
                          <a href={project.githubUrl} target="_blank" rel="noreferrer">
                            <Button variant="outline" className="rounded-full">
                              Source Code <Github className="ml-2 w-4 h-4" />
                            </Button>
                          </a>
                        </MagneticButton>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
        
        {/* View More */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-32 text-center"
        >
          <a href="https://github.com/Kawtar-Elg" target="_blank" rel="noreferrer" className="inline-flex items-center text-primary font-medium hover:text-primary/80 transition-colors group">
            <span className="mr-2">View more projects on GitHub</span>
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioSection;
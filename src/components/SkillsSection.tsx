import { useState } from "react";
import { 
  Code2, 
  Smartphone, 
  Palette, 
  Bot, 
  Database, 
  Globe, 
  Users, 
  Target, 
  Heart, 
  Zap 
} from "lucide-react";

const SkillsSection = () => {
  const [hoveredSkill, setHoveredSkill] = useState<number | null>(null);

  const technicalSkills = [
    { name: "Web Development", icon: <Globe className="w-8 h-8" />, level: 95, color: "from-blue-500 to-cyan-500" },
    { name: "Mobile Development", icon: <Smartphone className="w-8 h-8" />, level: 90, color: "from-green-500 to-emerald-500" },
    { name: "UI/UX Design", icon: <Palette className="w-8 h-8" />, level: 88, color: "from-purple-500 to-pink-500" },
    { name: "Robotics", icon: <Bot className="w-8 h-8" />, level: 85, color: "from-orange-500 to-red-500" },
    { name: "Programming", icon: <Code2 className="w-8 h-8" />, level: 92, color: "from-indigo-500 to-purple-500" },
    { name: "Database Design", icon: <Database className="w-8 h-8" />, level: 87, color: "from-teal-500 to-blue-500" }
  ];

  const softSkills = [
    { name: "Leadership", icon: <Users className="w-6 h-6" />, description: "Leading teams and driving innovation" },
    { name: "Problem Solving", icon: <Target className="w-6 h-6" />, description: "Creative solutions to complex challenges" },
    { name: "Adaptability", icon: <Zap className="w-6 h-6" />, description: "Quick to learn and adapt to new technologies" },
    { name: "Passion", icon: <Heart className="w-6 h-6" />, description: "Genuine love for technology and creativity" }
  ];

  return (
    <section id="skills" className="section-padding relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-10 left-20 w-32 h-32 bg-primary/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-20 w-48 h-48 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            My <span className="gradient-text">Skills</span> & Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive blend of technical proficiency and creative vision, 
            powered by passion for innovation and continuous learning.
          </p>
        </div>

        {/* Technical Skills */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-center mb-12 gradient-text">Technical Expertise</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technicalSkills.map((skill, index) => (
              <div
                key={index}
                className="relative group cursor-pointer"
                onMouseEnter={() => setHoveredSkill(index)}
                onMouseLeave={() => setHoveredSkill(null)}
              >
                <div className="glass-card rounded-2xl p-8 hover-glow transition-all duration-500 group-hover:scale-105">
                  {/* 3D Icon Container */}
                  <div className="relative mb-6">
                    <div className="skill-icon-3d w-20 h-20 mx-auto bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center text-white shadow-2xl">
                      {skill.icon}
                    </div>
                    
                    {/* Floating particles around icon */}
                    <div className="absolute -top-2 -right-2 w-4 h-4 bg-primary rounded-full animate-bounce opacity-60"></div>
                    <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-accent rounded-full animate-bounce opacity-60" style={{ animationDelay: '0.5s' }}></div>
                  </div>

                  <h4 className="text-xl font-semibold text-center mb-4 text-foreground">
                    {skill.name}
                  </h4>

                  {/* Skill Level Progress */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Proficiency</span>
                      <span className="text-primary font-semibold">{skill.level}%</span>
                    </div>
                    <div className="h-3 bg-muted rounded-full overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                        style={{
                          width: hoveredSkill === index ? `${skill.level}%` : '0%'
                        }}
                      ></div>
                    </div>
                  </div>

                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Soft Skills */}
        <div>
          <h3 className="text-2xl font-bold text-center mb-12 gradient-text">Soft Skills</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {softSkills.map((skill, index) => (
              <div
                key={index}
                className="glass-card rounded-xl p-6 text-center hover-glow group cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center text-white group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                  {skill.icon}
                </div>
                <h4 className="font-semibold text-foreground mb-2">{skill.name}</h4>
                <p className="text-sm text-muted-foreground">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Animated Background Elements */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-primary/10 rounded-full animate-spin opacity-20" style={{ animationDuration: '20s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 border border-accent/10 rounded-full animate-spin opacity-20" style={{ animationDuration: '25s', animationDirection: 'reverse' }}></div>
      </div>

    </section>
  );
};

export default SkillsSection;
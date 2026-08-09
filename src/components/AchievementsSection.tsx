import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { achievements } from "@/data/timeline";
import { Trophy, Calendar } from "lucide-react";

const AchievementsSection = () => {
  return (
    <section className="section-padding bg-secondary/30 relative">
      <div className="container-custom">
        <SectionHeading 
          number="05" 
          title="Milestones & Achievements" 
          subtitle="Key moments in my professional journey, hackathons, and community leadership." 
        />

        <div className="relative mt-12">
          {/* Vertical Timeline Line */}
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 bg-border/50"></div>

          <div className="space-y-12">
            {achievements.map((achievement, idx) => (
              <motion.div
                key={`${achievement.year}-${achievement.title}`}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="relative pl-12 md:pl-24"
              >
                {/* Timeline Dot */}
                <div className={`absolute left-[13px] md:left-[29px] top-1.5 w-3 h-3 rounded-full border-2 ${
                  achievement.highlight 
                    ? "bg-primary border-primary shadow-[0_0_12px_hsl(215_90%_58%/0.6)]" 
                    : "bg-background border-primary/50"
                }`}></div>

                <div className={`surface-card p-6 md:p-8 rounded-3xl ${
                  achievement.highlight ? "border-primary/30 bg-primary/5" : ""
                }`}>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-4">
                    <div className="flex items-center space-x-3 text-sm text-primary font-medium">
                      <Calendar className="w-4 h-4" />
                      <span>{achievement.year}</span>
                    </div>
                    {achievement.highlight && (
                      <div className="flex items-center space-x-2 text-xs font-semibold text-accent bg-accent/10 px-3 py-1 rounded-full">
                        <Trophy className="w-3 h-3" />
                        <span>Featured</span>
                      </div>
                    )}
                  </div>
                  
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {achievement.title}
                  </h3>
                  <p className="text-sm font-medium text-foreground/70 mb-4">
                    {achievement.event}
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    {achievement.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;

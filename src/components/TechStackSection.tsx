import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { skillDomains } from "@/data/skills";

const TechStackSection = () => {
  return (
    <section id="skills" className="section-padding bg-secondary/30 relative">
      <div className="container-custom">
        <SectionHeading 
          number="03" 
          title="Technical Arsenal" 
          subtitle="Advanced tools and frameworks I use to engineer robust, scalable mobile applications." 
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-12">
          {skillDomains.map((domain, idx) => (
            <motion.div
              key={domain.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-5%" }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="surface-card p-8 rounded-3xl"
            >
              <h3 className="text-xl font-semibold text-foreground mb-6">
                {domain.title}
              </h3>
              
              <div className="flex flex-wrap gap-2">
                {domain.items.map(item => (
                  <span 
                    key={item}
                    className="px-3 py-1.5 text-sm rounded-lg bg-background border border-border text-muted-foreground"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;

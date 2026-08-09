import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { processSteps, pipelineSteps } from "@/data/skills";
import { ArrowRight } from "lucide-react";

const ProcessSection = () => {
  return (
    <section id="process" className="section-padding bg-secondary/30 relative">
      <div className="container-custom">
        <SectionHeading 
          number="01" 
          title="What I Do" 
          subtitle="From understanding the core problem to deploying the final solution, I handle the complete mobile product lifecycle." 
        />

        {/* Process Pipeline - Desktop (Horizontal) & Mobile (Vertical) */}
        <div className="relative mt-16 lg:mt-24">
          <div className="hidden lg:block absolute top-12 left-0 right-0 h-[2px] pipeline-line z-0" />
          
          <div className="grid grid-cols-1 lg:grid-cols-6 gap-8 lg:gap-4 relative z-10">
            {processSteps.map((step, idx) => (
              <motion.div 
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="pipeline-step flex flex-row lg:flex-col items-start lg:items-center space-x-6 lg:space-x-0"
              >
                <div className="flex-shrink-0 lg:mb-6">
                  <div className="pipeline-icon w-12 h-12 lg:w-16 lg:h-16 rounded-full surface-card flex items-center justify-center font-bold text-lg lg:text-xl text-primary border-2 border-border">
                    {step.number}
                  </div>
                </div>
                
                <div className="lg:text-center mt-1 lg:mt-0">
                  <h3 className="text-lg font-semibold text-foreground mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Technical Pipeline Visualization */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="mt-24 lg:mt-32 p-8 lg:p-12 surface-card rounded-3xl relative overflow-hidden"
        >
          {/* Subtle bg glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-radial from-primary/10 to-transparent blur-3xl opacity-50"></div>
          
          <div className="relative z-10 text-center mb-10">
            <h3 className="text-xl lg:text-2xl font-bold text-foreground">From Figma to Production</h3>
            <p className="text-muted-foreground mt-2">I don't just design screens. I build complete products.</p>
          </div>

          <div className="relative z-10 flex flex-wrap justify-center items-center gap-4 lg:gap-6">
            {pipelineSteps.map((tech, idx) => (
              <React.Fragment key={tech}>
                <div className="px-4 py-2 rounded-xl bg-background/50 border border-primary/20 text-foreground font-medium text-sm lg:text-base backdrop-blur-sm whitespace-nowrap">
                  {tech}
                </div>
                {idx < pipelineSteps.length - 1 && (
                  <ArrowRight className="w-4 h-4 lg:w-5 lg:h-5 text-muted-foreground hidden sm:block" />
                )}
              </React.Fragment>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

import React from "react";
export default ProcessSection;

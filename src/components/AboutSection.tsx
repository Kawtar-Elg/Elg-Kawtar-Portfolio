import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import MagneticButton from "./MagneticButton";
import { Button } from "./ui/button";
import { Download } from "lucide-react";
import kawtarProfile from "@/assets/kawtar-profile.jpeg";

const AboutSection = () => {
  return (
    <section id="about" className="section-padding relative">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div className="order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.6 }}
              className="relative rounded-3xl overflow-hidden aspect-[4/5] max-w-md mx-auto"
            >
              <img 
                src={kawtarProfile} 
                alt="Kawtar El Gaddi" 
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent"></div>
            </motion.div>
          </div>

          <div className="order-1 lg:order-2 space-y-8">
            <SectionHeading 
              number="04" 
              title="About Me" 
              className="mb-8 md:mb-8"
            />
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="space-y-6 text-lg text-muted-foreground leading-relaxed"
            >
              <p>
                I am a passionate developer dedicated to mastering the art of digital creation. 
                My journey began with a deep curiosity about how technology can solve real-world problems, 
                and has evolved into comprehensive expertise across mobile development, UI/UX design, and AI.
              </p>
              <p>
                With a strong foundation in Flutter and Kotlin, I specialize in building apps that aren't just 
                functional, but visually captivating and structurally sound. I believe that exceptional products 
                require both rigorous engineering (Clean Architecture, robust testing) and thoughtful design.
              </p>
              <p>
                Beyond mobile screens, my fascination with emerging tech extends into robotics and AI, driving 
                me to integrate cutting-edge features like machine learning diagnostics into my applications.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="pt-6"
            >
              <MagneticButton>
                <a href="/CV_EL_GADDI__KAWTAR.pdf" download="CV_EL_GADDI_KAWTAR.pdf">
                  <Button variant="outline" size="lg" className="rounded-full">
                    <Download className="w-4 h-4 mr-2" />
                    Download Resume
                  </Button>
                </a>
              </MagneticButton>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
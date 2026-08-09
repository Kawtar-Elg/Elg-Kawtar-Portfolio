import { motion } from "framer-motion";
import DeviceMockup from "./DeviceMockup";

interface VerticalMockupCarouselProps {
  screens: string[];
}

const VerticalMockupCarousel = ({ screens }: VerticalMockupCarouselProps) => {
  // We duplicate the screens array to create a seamless loop
  const duplicatedScreens = [...screens, ...screens];

  return (
    <div className="relative h-[600px] w-full max-w-[300px] mx-auto overflow-hidden rounded-[2.5rem] mask-image-fade">
      <motion.div
        animate={{ y: ["0%", "-50%"] }}
        transition={{
          ease: "linear",
          duration: 20, // Adjust speed here
          repeat: Infinity,
        }}
        className="flex flex-col gap-8 pb-8"
      >
        {duplicatedScreens.map((screen, idx) => (
          <div key={idx} className="w-full flex justify-center">
            <DeviceMockup screen={screen} size="lg" className="shadow-xl" />
          </div>
        ))}
      </motion.div>

      {/* Fade masks for top and bottom to make the carousel look seamless */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10 pointer-events-none" />
    </div>
  );
};

export default VerticalMockupCarousel;

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import DeviceMockup from "./DeviceMockup";

interface MockupCarouselProps {
  screens: string[];
  deviceType?: "iphone" | "android";
}

export default function MockupCarousel({ screens, deviceType = "iphone" }: MockupCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const reduceMotion = useReducedMotion();
  const activeScreen = screens[activeIndex];

  if (!activeScreen) return null;

  const changeScreen = (nextIndex: number) => setActiveIndex((nextIndex + screens.length) % screens.length);

  return (
    <div className="workspace-carousel" aria-label="Project screenshots">
      <div className="workspace-carousel__stage">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div key={activeScreen} initial={reduceMotion ? false : { opacity: 0, x: 12 }} animate={{ opacity: 1, x: 0 }} exit={reduceMotion ? undefined : { opacity: 0, x: -12 }} transition={{ duration: 0.22 }}>
            <DeviceMockup screen={activeScreen} alt={`Application screen ${activeIndex + 1}`} size="md" deviceType={deviceType} />
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="workspace-carousel__controls">
        <button type="button" className="workspace-icon-button" onClick={() => changeScreen(activeIndex - 1)} aria-label="Previous screenshot"><ChevronLeft aria-hidden="true" /></button>
        <div className="workspace-carousel__dots" aria-label={`Screenshot ${activeIndex + 1} of ${screens.length}`}>
          {screens.map((screen, index) => <button type="button" key={screen} className={index === activeIndex ? "workspace-carousel__dot workspace-carousel__dot--active" : "workspace-carousel__dot"} onClick={() => setActiveIndex(index)} aria-label={`View screenshot ${index + 1}`} />)}
        </div>
        <button type="button" className="workspace-icon-button" onClick={() => changeScreen(activeIndex + 1)} aria-label="Next screenshot"><ChevronRight aria-hidden="true" /></button>
      </div>
    </div>
  );
}

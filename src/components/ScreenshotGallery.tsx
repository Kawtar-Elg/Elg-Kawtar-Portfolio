import { motion, useReducedMotion } from "framer-motion";

interface ScreenshotGalleryProps {
  screens: string[];
  projectTitle: string;
}

export default function ScreenshotGallery({ screens, projectTitle }: ScreenshotGalleryProps) {
  const reduceMotion = useReducedMotion();

  return (
    <div className="workspace-screenshot-gallery" aria-label={`${projectTitle} screenshots`}>
      {screens.map((screen, index) => (
        <motion.figure
          key={screen}
          className="workspace-screenshot-gallery__item"
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.12 }}
          transition={{ duration: 0.28, delay: Math.min(index * 0.04, 0.24) }}
        >
          <div className="workspace-screenshot-gallery__frame">
            <img
              className="workspace-screenshot-gallery__image"
              src={screen}
              alt={`${projectTitle} screen ${index + 1}`}
              loading={index < 3 ? "eager" : "lazy"}
            />
          </div>
          <figcaption className="workspace-screenshot-gallery__caption">
            <span>screen</span>
            <strong>{String(index + 1).padStart(2, "0")}</strong>
          </figcaption>
        </motion.figure>
      ))}
    </div>
  );
}

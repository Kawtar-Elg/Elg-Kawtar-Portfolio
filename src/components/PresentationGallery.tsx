import { motion, useReducedMotion } from "framer-motion";

interface PresentationGalleryProps {
  images: string[];
  projectTitle: string;
}

export default function PresentationGallery({ images, projectTitle }: PresentationGalleryProps) {
  const reduceMotion = useReducedMotion();

  return (
    <div className="workspace-presentation-gallery" aria-label={`${projectTitle} presentation visuals`}>
      {images.map((image, index) => (
        <motion.figure
          key={image}
          className="workspace-presentation-gallery__item"
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.12 }}
          transition={{ duration: 0.28, delay: Math.min(index * 0.05, 0.24) }}
        >
          <div className="workspace-presentation-gallery__frame">
            <img src={image} alt={`${projectTitle} presentation ${index + 1}`} loading={index === 0 ? "eager" : "lazy"} />
          </div>
          <figcaption><span>presentation</span><strong>{String(index + 1).padStart(2, "0")}</strong></figcaption>
        </motion.figure>
      ))}
    </div>
  );
}

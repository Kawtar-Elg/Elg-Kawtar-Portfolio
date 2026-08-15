import { useEffect, useState } from "react";

/**
 * Reports which section is currently in view.
 *
 * The rail and tabs cannot rely on `location.hash` alone: plain anchor
 * clicks do not update the router's location, and nothing updates it when
 * the visitor simply scrolls. Observing the sections keeps the active
 * entry correct in both cases.
 *
 * @param ids     Section element ids, in document order.
 * @param offset  Pixels of sticky chrome to discount at the top.
 */
export function useActiveSection(ids: string[], offset = 150) {
  const [active, setActive] = useState<string | null>(null);
  const key = ids.join(",");

  useEffect(() => {
    const list = key ? key.split(",") : [];
    if (!list.length || typeof IntersectionObserver === "undefined") return;

    const elements = list
      .map((id) => document.getElementById(id))
      .filter((element): element is HTMLElement => Boolean(element));

    if (!elements.length) return;

    const visible = new Set<string>();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) visible.add(entry.target.id);
          else visible.delete(entry.target.id);
        });

        // Highest section still on screen wins, so the highlight moves
        // forward as each new section reaches the top of the viewport.
        const next = list.find((id) => visible.has(id));
        if (next) setActive(next);
      },
      { rootMargin: `-${offset}px 0px -55% 0px`, threshold: 0 }
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [key, offset]);

  return active;
}

export default useActiveSection;

import { useRef } from "react";
import { useInView, motion } from "framer-motion";
// import "./sectionOne.css";

export function Section({ children }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  return (
    <section ref={ref}>
      <span
        style={{
          transform: isInView ? "translateX(200px)" : "translateX(-200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
        }}
      >
        {children}
      </span>
    </section>
  );
}

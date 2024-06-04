"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AOSComponent({
  children,
  delay = 0,
  dataAos = "fade-in",
}: {
  children: React.ReactNode;
  delay?: number;
  dataAos?: string;
}) {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <span data-aos={dataAos} data-aos-delay={delay}>
      {children}
    </span>
  );
}

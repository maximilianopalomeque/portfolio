"use client";
import { useTranslations } from "next-intl";
import LayoutContainer from "../LayoutContainer";
import AOSComponent from "../AOS";
import { motion } from "framer-motion";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiTailwindcss,
} from "react-icons/si";

export default function TechStack() {
  const translation = useTranslations("landing.tech");

  const technologies = [
    { name: "React", icon: SiReact },
    { name: "Next.js", icon: SiNextdotjs },
    { name: "TypeScript", icon: SiTypescript },
    { name: "Node.js", icon: SiNodedotjs },
    { name: "Express", icon: SiExpress },
    { name: "MongoDB", icon: SiMongodb },
    { name: "PostgreSQL", icon: SiPostgresql },
    { name: "Tailwind", icon: SiTailwindcss },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20, scale: 0.8 },
    show: { opacity: 1, y: 0, scale: 1 },
  };

  return (
    <div className="pt-20 bg-base-100">
      <LayoutContainer>
        <AOSComponent>
          <h2 className="text-2xl font-bold text-center mb-6">
            {translation("title")}
          </h2>
          <motion.div
            className="flex flex-wrap justify-center gap-2"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                variants={item}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="badge badge-md gap-2 p-4 bg-accent text-accent-content border-none cursor-pointer"
              >
                <tech.icon className="text-base" />
                {tech.name}
              </motion.div>
            ))}
          </motion.div>
        </AOSComponent>
      </LayoutContainer>
    </div>
  );
}

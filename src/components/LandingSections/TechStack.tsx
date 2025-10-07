"use client";
import { useTranslations } from "next-intl";
import LayoutContainer from "../LayoutContainer";
import AOSComponent from "../AOS";
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

  return (
    <div className="pt-20 bg-base-100">
      <LayoutContainer>
        <AOSComponent>
          <h2 className="text-2xl font-bold text-center mb-6">
            {translation("title")}
          </h2>
          <div className="flex flex-wrap justify-center gap-2">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="badge badge-md gap-2 p-4 bg-accent text-accent-content border-none"
              >
                <tech.icon className="text-base" />
                {tech.name}
              </div>
            ))}
          </div>
        </AOSComponent>
      </LayoutContainer>
    </div>
  );
}

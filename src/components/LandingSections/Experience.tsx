"use client";
import { useTranslations } from "next-intl";
import LayoutContainer from "../LayoutContainer";
import AOSComponent from "../AOS";
import { motion } from "framer-motion";
import { FaBriefcase } from "react-icons/fa";

export default function Experience() {
  const translation = useTranslations("landing.experience");

  const experiences = [
    {
      key: "silencio",
      company: translation("jobs.silencio.company"),
      title: translation("jobs.silencio.title"),
      period: translation("jobs.silencio.period"),
      description: translation("jobs.silencio.description"),
      techs: ["Express", "Sails.js", "PostgreSQL", "React"],
    },
    {
      key: "beyond",
      company: translation("jobs.beyond.company"),
      title: translation("jobs.beyond.title"),
      period: translation("jobs.beyond.period"),
      description: translation("jobs.beyond.description"),
      techs: ["React", "Next.js", "Express", "MongoDB"],
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0 },
  };

  return (
    <div className="pt-20 bg-base-100">
      <LayoutContainer>
        <AOSComponent>
          <h2 className="text-2xl font-bold text-center mb-12">
            {translation("title")}
          </h2>
          <motion.ul
            className="timeline timeline-snap-icon timeline-vertical"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {experiences.map((exp, index) => (
              <motion.li key={exp.key} variants={item}>
                {index > 0 && <hr className="bg-accent" />}
                <div className="timeline-middle">
                  <FaBriefcase className="text-accent w-5 h-5" />
                </div>
                <div
                  className={`${
                    index % 2 === 0
                      ? "timeline-start md:text-end"
                      : "timeline-end"
                  } mb-10 md:mb-10`}
                >
                  <time className="font-mono italic text-base-content/60">
                    {exp.period}
                  </time>
                  <div className="text-lg font-bold mt-1">{exp.company}</div>
                  <div className="font-semibold text-base-content/80 mb-2">
                    {exp.title}
                  </div>
                  <p className="text-sm mb-3">{exp.description}</p>
                  <div
                    className={`flex flex-wrap gap-2 ${
                      index % 2 === 0 ? "md:justify-end" : ""
                    }`}
                  >
                    {exp.techs.map((tech) => (
                      <span
                        key={tech}
                        className="badge badge-sm bg-accent/20 text-accent-content border-none"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <hr className="bg-accent" />
              </motion.li>
            ))}
          </motion.ul>
        </AOSComponent>
      </LayoutContainer>
    </div>
  );
}

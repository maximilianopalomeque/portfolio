"use client";
import AOSComponent from "./AOS";

import {
  FaLaptopCode,
  FaServer,
  FaGlobeAmericas,
  FaTools,
} from "react-icons/fa";
import ServiceCard from "./ServiceCard";

export default function ServicesMapper() {
  const services = [
    {
      key: 1,
      icon: <FaLaptopCode />,
      title: "Frontend",
      description:
        "Creación de interfaces de usuario interactivas y atractivas con HTML, CSS y JavaScript.",
    },
    {
      key: 2,
      icon: <FaServer />,
      title: "Backend",
      description:
        "Construcción de sólidas arquitecturas de servidor y bases de datos con Node.js y Express.",
    },
    {
      key: 3,
      icon: <FaGlobeAmericas />,
      title: "Aplicaciones Web",
      description:
        "Creación de aplicaciones web personalizadas y dinámicas utilizando las últimas tecnologías.",
    },
    {
      key: 4,
      icon: <FaTools />,
      title: "Mantenimiento y Optimización",
      description:
        "Servicios de mantenimiento continuo y optimización para sitios web eficientes y seguros.",
    },
  ];

  return services.map((service, index) => (
    <AOSComponent key={service.key} delay={index * 100}>
      <ServiceCard
        icon={service.icon}
        title={service.title}
        description={service.description}
      />
    </AOSComponent>
  ));
}

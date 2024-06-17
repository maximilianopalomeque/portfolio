"use client";
import AOSComponent from "./AOS";

import {
  FaLaptopCode,
  FaServer,
  FaGlobeAmericas,
  FaTools,
} from "react-icons/fa";
import ServiceCard from "./ServiceCard";
import { useTranslations } from "next-intl";

export default function ServicesMapper() {
  const translation = useTranslations("landing");

  const frontTitle = translation("services.frontend.title");
  const frontDescription = translation("services.frontend.text");
  const backTitle = translation("services.backend.title");
  const backDescription = translation("services.backend.text");
  const webTitle = translation("services.webapp.title");
  const webDescription = translation("services.webapp.text");
  const maintenanceTitle = translation("services.maintenance.title");
  const maintenanceDescription = translation("services.maintenance.text");

  const services = [
    {
      key: 1,
      icon: <FaLaptopCode />,
      title: frontTitle,
      description: frontDescription,
    },
    {
      key: 2,
      icon: <FaServer />,
      title: backTitle,
      description: backDescription,
    },
    {
      key: 3,
      icon: <FaGlobeAmericas />,
      title: webTitle,
      description: webDescription,
    },
    {
      key: 4,
      icon: <FaTools />,
      title: maintenanceTitle,
      description: maintenanceDescription,
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

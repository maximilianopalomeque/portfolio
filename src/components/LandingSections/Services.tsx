import LayoutContainer from "../LayoutContainer";
import {
  FaLaptopCode,
  FaServer,
  FaGlobeAmericas,
  FaTools,
} from "react-icons/fa";

import ServiceCard from "../ServiceCard";

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

const showServices = services.map((service: any) => (
  <ServiceCard
    key={service.key}
    icon={service.icon}
    title={service.title}
    description={service.description}
  />
));

export default function Services() {
  return (
    <div className="bg-accent py-20">
      <LayoutContainer>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 xl:gap-4">
          {showServices}
        </div>
      </LayoutContainer>
    </div>
  );
}

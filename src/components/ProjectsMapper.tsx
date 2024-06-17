import {
  BOLDER_IMAGES,
  BOLDER_ICONS,
  BOLDER_DASHBOARD_IMAGES,
  BOLDER_DASHBOARD_ICONS,
  PHYSIOCARE_LANDING_IMAGES,
  PHYSIOCARE_LANDING_ICONS,
} from "@/constants";
import ProjectGallery from "./ProjectGallery";
import AOSComponent from "./AOS";
import { useTranslations } from "next-intl";

export default function ProjectsMapper() {
  const translation = useTranslations("landing");

  const bolderLandingTitle = translation(
    "projects.project-list.the-bolder.title"
  );
  const bolderLandingDescription = translation(
    "projects.project-list.the-bolder.text"
  );
  const bolderDashboardTitle = translation(
    "projects.project-list.the-bolder-dashboard.title"
  );
  const bolderDashboardDescription = translation(
    "projects.project-list.the-bolder-dashboard.text"
  );
  const physiocareTitle = translation(
    "projects.project-list.physiocare-landing.title"
  );
  const physiocareDescription = translation(
    "projects.project-list.physiocare-landing.text"
  );

  const PROJECTS = [
    {
      id: 1,
      title: bolderLandingTitle,
      description: bolderLandingDescription,
      images: BOLDER_IMAGES,
      iconsData: BOLDER_ICONS,
    },
    {
      id: 2,
      title: bolderDashboardTitle,
      description: bolderDashboardDescription,
      images: BOLDER_DASHBOARD_IMAGES,
      iconsData: BOLDER_DASHBOARD_ICONS,
    },
    {
      id: 3,
      title: physiocareTitle,
      description: physiocareDescription,
      images: PHYSIOCARE_LANDING_IMAGES,
      iconsData: PHYSIOCARE_LANDING_ICONS,
    },
  ];

  return PROJECTS.map((project: any, index: number) => {
    return (
      <AOSComponent key={project.key} delay={index * 100}>
        <div key={project.id} className="grid grid-cols-1 xl:grid-cols-8 py-4">
          <div className="text-center md:text-start xl:pe-5 xl:col-span-2 flex flex-col justify-center">
            <h2 className="font-bold text-xl">{project.title}</h2>
            <p className="text-sm py-2">{project.description}</p>
            <div className="flex gap-2 pt-1 justify-center md:justify-start mb-4 xl:mb-0">
              {project?.iconsData?.map(({ text, icon: Icon }: any) => {
                return (
                  <div
                    key={text}
                    className="hover:text-accent transition-all xl:hover:cursor-pointer"
                  >
                    <div className="tooltip" data-tip={text}>
                      <Icon size={20} />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="xl:col-span-6">
            <ProjectGallery images={project.images} />
          </div>
        </div>
      </AOSComponent>
    );
  });
}

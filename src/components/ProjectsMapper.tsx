import { PROJECTS } from "@/constants";
import ProjectGallery from "./ProjectGallery";
import AOSComponent from "./AOS";

export default function ProjectsMapper() {
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

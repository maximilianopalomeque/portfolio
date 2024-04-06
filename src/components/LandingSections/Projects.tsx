import LayoutContainer from "../LayoutContainer";
import ProjectGallery from "../ProjectGallery";

import { PROJECTS } from "@/contants";

const showProjects = PROJECTS.map((project: any) => {
  return (
    <div key={project.id} className="grid grid-cols-1 xl:grid-cols-8 py-4">
      <div className="text-center md:text-start pe-5 xl:col-span-2 flex flex-col justify-center">
        <h2 className="font-bold text-xl">{project.title}</h2>
        <p className="text-sm py-2">{project.description}</p>
      </div>
      <div className="xl:col-span-6">
        <ProjectGallery images={project.images} />
      </div>
    </div>
  );
});

export default function Projects() {
  return (
    <div className="py-20">
      <LayoutContainer>
        <h2 className="text-center xl:text-left text-3xl">Proyectos</h2>

        <div className="mt-10">{showProjects}</div>
      </LayoutContainer>
    </div>
  );
}

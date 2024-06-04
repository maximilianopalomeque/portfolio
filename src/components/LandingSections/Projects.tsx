import LayoutContainer from "../LayoutContainer";
import ProjectsMapper from "../ProjectsMapper";

export default function Projects() {
  return (
    <div className="pt-20" id="projects">
      <LayoutContainer>
        <h2 className="text-center xl:text-left text-3xl">Trabajos</h2>
        <ProjectsMapper />
      </LayoutContainer>
    </div>
  );
}

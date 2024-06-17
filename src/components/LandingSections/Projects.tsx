import LayoutContainer from "../LayoutContainer";
import ProjectsMapper from "../ProjectsMapper";
import { useTranslations } from "next-intl";

export default function Projects() {
  const translation = useTranslations("landing");
  const sectionTitle = translation("projects.section-title");

  return (
    <div className="pt-20" id="projects">
      <LayoutContainer>
        <h2 className="text-center xl:text-left text-3xl">{sectionTitle}</h2>
        <ProjectsMapper />
      </LayoutContainer>
    </div>
  );
}

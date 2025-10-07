import LayoutContainer from "../LayoutContainer";
import ProjectsMapper from "../ProjectsMapper";
import { useTranslations } from "next-intl";

export default function Projects() {
  const translation = useTranslations("landing");
  const sectionTitle = translation("projects.section-title");

  return (
    <div className="py-12" id="projects">
      <LayoutContainer>
        <h2 className="text-2xl font-bold text-center mb-12">{sectionTitle}</h2>
        <ProjectsMapper />
      </LayoutContainer>
    </div>
  );
}

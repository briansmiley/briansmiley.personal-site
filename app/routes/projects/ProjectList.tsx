import { Project } from "~/lib/types";
import ProjectThumbnail from "./ProjectThumbnail";
import { useBreakpoint } from "use-breakpoint";
import { BREAKPOINTS } from "~/lib/data";

type ProjectListProps = {
  projects: Project[];
};
export default function ProjectList({ projects }: ProjectListProps) {
  const { breakpoint } = useBreakpoint(BREAKPOINTS);
  const basis = breakpoint === "mobile" ? 3 : 6;
  return (
    <div className="flex flex-row flex-wrap justify-start">
      {projects.map(project => (
        <ProjectThumbnail key={project.title} project={project} basis={basis} />
      ))}
    </div>
  );
}

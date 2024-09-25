import { Project } from "~/lib/types";
import ProjectThumbnail from "./ProjectThumbnail";

type ProjectListProps = {
  projects: Project[];
};
export default function ProjectList({ projects }: ProjectListProps) {
  return (
    <div className="flex flex-row flex-wrap justify-start gap-4">
      {projects.map(project => (
        <ProjectThumbnail key={project.title} project={project} />
      ))}
    </div>
  );
}

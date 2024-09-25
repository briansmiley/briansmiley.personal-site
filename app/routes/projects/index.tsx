import ProjectList from "./ProjectList";
import { offlineProjects, p5Projects, reactProjects } from "./projects";

export default function Projects() {
  const projects = [...reactProjects, ...p5Projects];
  const offProjects = [...offlineProjects];
  return (
    <div className="flex flex-col w-full h-full items-center mt-5">
      <div className="flex flex-col w-[90%] px-4 gap-5">
        <span className="flex flex-col gap-1">
          <span className="text-3xl underline font-semibold">Web</span>
          <ProjectList projects={projects} />
        </span>
        <span className="flex flex-col gap-1">
          <span className="text-3xl underline font-semibold">Other</span>
          <ProjectList projects={offProjects} />
        </span>
      </div>
    </div>
  );
}

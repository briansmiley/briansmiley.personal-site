import ProjectList from "./ProjectList";
import { offlineProjects, p5Projects, reactProjects } from "./projects";

export default function Projects() {
  const projects = [...reactProjects, ...p5Projects];
  const offProjects = [...offlineProjects];
  return (
    <div className="flex flex-col w-full h-full items-center py-5 overflow-y-auto">
      <div className="flex flex-col gap-5 px-2 md:px-10">
        <span className="flex flex-col gap-1">
          <span className=" text-xl md:text-2xl underline font-semibold">
            Web
          </span>
          <ProjectList projects={projects} />
        </span>
        <span className="flex flex-col gap-1">
          <span className=" text-xl md:text-2xl underline font-semibold">
            Other
          </span>
          <ProjectList projects={offProjects} />
        </span>
      </div>
    </div>
  );
}

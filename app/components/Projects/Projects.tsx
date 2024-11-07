import ProjectList from "./ProjectList";
import { offlineProjects, p5Projects, reactProjects } from "./projectsData";

export default function Projects() {
  const projects = [...reactProjects, ...p5Projects];
  const offProjects = [...offlineProjects];
  return (
    <div className="flex flex-col w-full h-full items-center py-5 overflow-y-auto">
      <div className="flex flex-col gap-5 px-2">
        <span className="flex flex-col">
          <span className=" text-xl md:text-2xl  font-semibold px-2">Web</span>
          <ProjectList projects={projects} />
        </span>
        <span className="flex flex-col">
          <span className=" text-xl md:text-2xl  font-semibold px-2">
            Other
          </span>
          <ProjectList projects={offProjects} />
        </span>
      </div>
    </div>
  );
}

import ProjectList from "./ProjectList";
import { p5Projects, reactProjects } from "./projects";

export default function Projects() {
  const projects = [...reactProjects, ...p5Projects];
  return (
    <div className="flex flex-col w-full h-full items-center mt-5">
      <div className="flex flex-col w-[90%] px-4 gap-5">
        <ProjectList projects={projects} />
      </div>
    </div>
  );
}

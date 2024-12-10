import ProjectList from "./ProjectList"
import {
  offlineProjects,
  otherWebProjects,
  p5Projects,
  reactProjects,
} from "./projectsData"

export default function Projects() {
  const projects = [...reactProjects, ...otherWebProjects, ...p5Projects]
  const offProjects = [...offlineProjects]
  return (
    <div className="flex h-full w-full flex-col items-center overflow-y-auto py-5">
      <div className="flex flex-col gap-5 px-2">
        <span className="flex flex-col">
          <span className="px-2 text-xl font-semibold md:text-2xl">Web</span>
          <ProjectList projects={projects} />
        </span>
        <span className="flex flex-col">
          <span className="px-2 text-xl font-semibold md:text-2xl">Other</span>
          <ProjectList projects={offProjects} />
        </span>
      </div>
    </div>
  )
}

import { Link } from "@remix-run/react"
import { ProjectType } from "~/lib/types"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"

type ProjectThumbnailProps = {
  project: ProjectType
  basis: number
}
export default function ProjectThumbnail({
  project,
  basis,
}: ProjectThumbnailProps) {
  return (
    <Link
      to={project.url}
      className="p-1"
      style={{ flexBasis: `calc(100% / ${basis})` }}
      rel="noopener noreferrer"
      target="_blank"
    >
      <div className="group relative aspect-square">
        <div className="invisible absolute inset-0 z-10 flex h-full w-full flex-col items-center justify-center gap-3 rounded-full bg-indigo-950 bg-opacity-70 text-center text-white opacity-0 transition-opacity duration-1000 @container group-hover:visible group-hover:opacity-100">
          <div>
            <p className="text-md font-semibold underline @[150px]:text-lg">
              {project.title}
            </p>
            <p className="text-xs @[150px]:text-sm">{project.blurb}</p>
          </div>
          <a
            className="text-slate-100 hover:text-slate-300"
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} className="h-6 w-6" />
          </a>
        </div>
        <img
          className="h-full w-full rounded-[0px] border-2 border-darkblue transition-all duration-1000 group-hover:scale-90 group-hover:rounded-[999px]"
          src={project.thumbnail}
          alt={project.title}
        ></img>
      </div>
    </Link>
  )
}

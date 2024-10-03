import { Link } from "@remix-run/react";
import { ProjectType } from "~/lib/types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import FrameworkIcon from "../FrameworkIcon/FrameworkIcon";

type ProjectThumbnail2Props = {
  project: ProjectType;
  basis: number;
};
export default function ProjectThumbnail2({
  project,
  basis
}: ProjectThumbnail2Props) {
  return (
    <div className="p-2" style={{ flexBasis: `calc(100% / ${basis})` }}>
      <Link
        to={project.url}
        className="p-1 grid grid-cols-2 gap-2 border-darkblue border-2 rounded-md"
        rel="noopener noreferrer"
        target="_blank"
      >
        <div className="flex items-center justify-center">
          <div className="relative aspect-square w-full max-w-full">
            <img
              className="absolute inset-0 w-full h-full object-cover border-2 border-darkblue"
              src={project.thumbnail}
              alt={project.title}
            />
          </div>
        </div>
        <div className="flex flex-col justify-between">
          <div className="flex flex-col gap-3">
            <div className="flex flex-row justify-between">
              <p className="underline text-lg lg:text-xl font-semibold">
                {project.title}
              </p>
              <a
                className="text-slate-700 hover:text-slate-900"
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faGithub} className="w-5 h-5" />
              </a>
            </div>
            <p className="text-sm line-clamp-3 md:line-clamp-none grow-0">
              {project.blurb}
            </p>
          </div>
          {project.icons && (
            <div className="flex flex-row">
              {project.icons.map(icon => (
                <FrameworkIcon icon={icon} key={icon} />
              ))}
            </div>
          )}
        </div>
      </Link>
    </div>
  );
}

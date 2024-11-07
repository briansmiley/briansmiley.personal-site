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
    <div
      className="p-2 h-[250px]"
      style={{ flexBasis: `calc(100% / ${basis})` }}
    >
      <div className="p-1 h-full grid grid-cols-2 gap-2 border-darkblue border-2 rounded-md">
        <div className="flex items-center justify-center">
          <Link
            to={project.url}
            className="relative h-full aspect-square overflow-hidden"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img
              className="absolute inset-0 h-full object-cover border-2 border-darkblue"
              src={project.thumbnail}
              alt={project.title}
            />
          </Link>
        </div>
        <div className="flex flex-col justify-between">
          <div className="flex flex-col gap-1">
            <div className="flex flex-row justify-between">
              <Link
                to={project.url}
                className="underline text-lg lg:text-xl font-semibold"
                rel="noopener noreferrer"
                target="_blank"
              >
                {project.title}
              </Link>
              <a
                className="text-slate-700 hover:text-slate-900"
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faGithub} className="w-5 h-5" />
              </a>
            </div>
            <p className="text-sm ">{project.blurb}</p>
          </div>
          {project.icons && (
            <div className="flex flex-row overflow-hidden">
              {project.icons.map(icon => (
                <FrameworkIcon
                  icon={icon}
                  key={icon}
                  className={icon === "openscad" ? "p-1" : ""}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

import { Link } from "@remix-run/react";
import { ProjectType } from "~/lib/types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

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
        className="p-1 flex flex-row gap-2 grow-0 border-darkblue border-2 rounded-md"
        rel="noopener noreferrer"
        target="_blank"
      >
        <img
          className=" w-[50%] aspect-square border-2 border-darkblue  "
          src={project.thumbnail}
          alt={project.title}
        />
        <div className="basis-1/2 flex flex-col gap-3">
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
          <p className="text-sm">{project.blurb}</p>
        </div>
      </Link>
    </div>
  );
}

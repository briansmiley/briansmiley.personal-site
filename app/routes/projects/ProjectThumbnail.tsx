import { Link } from "@remix-run/react";
import { Project } from "~/lib/types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

type ProjectThumbnailProps = {
  project: Project;
  basis: number;
};
export default function ProjectThumbnail({
  project,
  basis
}: ProjectThumbnailProps) {
  return (
    <Link
      to={project.url}
      className="basis-1/4 p-1"
      style={{ flexBasis: `calc(100% / ${basis})` }}
      rel="noopener noreferrer"
      target="_blank"
    >
      <div className="relative group aspect-square ">
        <div className="absolute @container z-10 inset-0 w-full h-full bg-indigo-950 rounded-full bg-opacity-70 flex flex-col gap-3 items-center justify-center text-white text-center opacity-0  group-hover:opacity-100 invisible group-hover:visible transition-opacity duration-1000">
          <div>
            <p className="underline text-md @[150px]:text-lg font-semibold">
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
            <FontAwesomeIcon icon={faGithub} className="w-6 h-6" />
          </a>
        </div>
        <img
          className="border-2 border-darkblue group-hover:scale-90 group-hover:rounded-[999px] h-full w-full rounded-[0px] transition-all duration-1000"
          src={project.thumbnail}
          alt={project.title}
        ></img>
      </div>
    </Link>
  );
}

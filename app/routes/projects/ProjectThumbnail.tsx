import { Link } from "@remix-run/react";
import { Project } from "~/lib/types";
type ProjectThumbnailProps = {
  project: Project;
  size?: number;
};
export default function ProjectThumbnail({
  project,
  size = 200
}: ProjectThumbnailProps) {
  return (
    <Link
      to={project.url}
      style={{ height: size, width: size }}
      rel="noopener noreferrer"
      target="_blank"
    >
      <div className="relative  group aspect-square">
        <div className="absolute @container z-10 inset-0 w-full h-full bg-indigo-950 rounded-full bg-opacity-70 flex flex-col items-center justify-center text-white text-center opacity-0  group-hover:opacity-100 invisible group-hover:visible transition-opacity duration-1000">
          <p className="underline text-md @[150px]:text-lg font-semibold">
            {project.title}
          </p>
          <p className="text-xs @[150px]:text-sm">{project.blurb}</p>
        </div>
        <img
          className="group-hover:scale-90 group-hover:rounded-[999px] h-full w-full rounded-[0px] transition-all duration-1000"
          src={project.thumbnail}
          alt={project.title}
        ></img>
      </div>
    </Link>
  );
}

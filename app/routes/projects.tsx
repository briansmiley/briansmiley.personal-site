import ProjectCarousel, { Project } from "~/components/ProjectCarousel";

const p5Projects: Project[] = [
  {
    title: "Ricochet Robots",
    thumbnail: "thumbnails/robots.png",
    url: "https://briansmiley.github.io/p5/ricochetrobots"
  },
  {
    title: "Binary Tree",
    thumbnail: "thumbnails/binarytree.png",
    url: "https://briansmiley.github.io/p5/binarytree"
  },
  {
    title: "Drops",
    thumbnail: "thumbnails/drops_color.png",
    url: "https://briansmiley.github.io/p5/drops"
  },
  {
    title: "Voronoi",
    thumbnail: "thumbnails/voronoi.png",
    url: "https://briansmiley.github.io/p5/voronoi"
  },
  {
    title: "Pong",
    thumbnail: "thumbnails/pong.png",
    url: "https://briansmiley.github.io/p5/pong"
  },
  {
    title: "BitMapper",
    thumbnail: "thumbnails/bitmapper.png",
    url: "https://briansmiley.github.io/p5/bitmapper"
  }
];

export default function Projects() {
  return (
    <div className="flex flex-col w-full h-full items-center mt-5">
      {/* p5 carousel */}
      <div className="relative flex flex-col items-center w-[90vw] h-full">
        <h1 className="font-bold absolute top-2 text-3xl z-10">
          <a href="https://p5js.org/" className=" text-red-600 underline">
            p5.js
          </a>
          <span className="text-black"> Sketches</span>
        </h1>
        <div className="relative flex flex-col items-center w-[90vw] h-full py-12 justify-center">
          <div className="h-full w-full absolute bg-slate-200 opacity-50 -z-10 rounded-[25px] sm:rounded-[50px] md:rounded-[100px] transition-all duration-300 hover:scale-110"></div>
          <ProjectCarousel className="" projects={p5Projects} />
        </div>
      </div>
    </div>
  );
}

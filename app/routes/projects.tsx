import { Project, EmblaProjectCarousel } from "~/components/ProjectCarousel";

const p5Projects: Project[] = [
  {
    title: "Ricochet Robots",
    thumbnail: "thumbnails/robots.png",
    blurb: "A multiplayer implementation of the boardgame Ricochet Robots",
    url: "https://briansmiley.github.io/p5/ricochetrobots"
  },
  {
    title: "Binary Tree",
    thumbnail: "thumbnails/binarytree.png",
    blurb: "Renders a parametric binary tree",
    url: "https://briansmiley.github.io/p5/binarytree"
  },
  {
    title: "Drops",
    thumbnail: "thumbnails/drops_color.png",
    blurb: "Spreading drop ripple animation",
    url: "https://briansmiley.github.io/p5/drops"
  },
  {
    title: "Voronoi",
    thumbnail: "thumbnails/voronoi.png",
    blurb: "Voronoi diagram animation",
    url: "https://briansmiley.github.io/p5/voronoi"
  },
  {
    title: "Pong",
    thumbnail: "thumbnails/pong.png",
    blurb: "A classic Pong game",
    url: "https://briansmiley.github.io/p5/pong"
  },
  {
    title: "BitMapper",
    thumbnail: "thumbnails/bitmapper.png",
    blurb: "Create pixel-wise characters to make your own font",
    url: "https://briansmiley.github.io/p5/bitmapper"
  }
];

export default function Projects() {
  return (
    <div className="flex flex-col w-full h-full items-center mt-5">
      {/* p5 carousel */}
      <div className="relative flex flex-col items-center w-[90%] h-[45%] p-4">
        <div className="h-full w-full absolute inset-0 bg-indigo-300 opacity-50 -z-10 rounded-[25px] sm:rounded-[50px] md:rounded-[100px] transition-all duration-300 hover:scale-110"></div>
        <h1 className="font-bold text-3xl basis-1/6">
          <a href="https://p5js.org/" className=" text-red-600 underline">
            p5.js
          </a>
          <span className="text-black"> Sketches</span>
        </h1>
        {/* <ProjectCarousel className="" projects={p5Projects} /> */}
        <EmblaProjectCarousel className="basis-4/6" projects={p5Projects} />
      </div>
    </div>
  );
}

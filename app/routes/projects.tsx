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
      <div className="relative flex flex-col items-center w-[90%] h-[45%] px-4">
        <div className="h-full w-full absolute inset-0 bg-indigo-300 opacity-50 -z-10 rounded-[25px] sm:rounded-[50px] md:rounded-[100px] transition-all duration-300 hover:scale-110"></div>
        <h1 className="flex items-center font-bold text-xl min-[300px]:text-4xl basis-1/6 transition-all duration-300">
          <div className="flex items-center">
            <a
              href="https://p5js.org/"
              className=" text-red-600 underline flex items-center"
            >
              <span>p5</span>
              <P5Logo className="self-end h-3 w-3 " />
              <span>js </span>
            </a>
            <span className="text-black ml-1">Sketches</span>
          </div>
        </h1>
        {/* <ProjectCarousel className="" projects={p5Projects} /> */}
        <EmblaProjectCarousel className="basis-4/6" projects={p5Projects} />
      </div>
    </div>
  );
}
const P5Logo = ({ className }: { className: string }) => {
  return (
    <svg
      viewBox="0 0 28 28"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      className={`animate-spin [animation-duration:5s] ${className}`}
    >
      <path
        d="M16.909,10.259l8.533-2.576l1.676,5.156l-8.498,2.899l5.275,7.48 l-4.447,3.225l-5.553-7.348L8.487,26.25l-4.318-3.289l5.275-7.223L0.88,12.647l1.678-5.16l8.598,2.771V1.364h5.754V10.259z"
        fill="currentColor"
      ></path>
    </svg>
  );
};

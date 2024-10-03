import { ProjectType } from "~/lib/types";

export const p5Projects: ProjectType[] = [
  {
    title: "Ricochet Robots",
    thumbnail: "thumbnails/robots.png",
    blurb: "A multiplayer implementation of the boardgame Ricochet Robots",
    url: "https://briansmiley.github.io/p5/ricochetrobots",
    github: "https://github.com/briansmiley/RicochetRobots",
    icons: ["p5"]
  },
  {
    title: "Binary Tree",
    thumbnail: "thumbnails/binarytree.png",
    blurb: "Renders a parametric binary tree",
    url: "https://briansmiley.github.io/p5/binarytree",
    github:
      "https://github.com/briansmiley/briansmiley.github.io/tree/main/p5/binarytree",
    icons: ["p5"]
  },
  {
    title: "Drops",
    thumbnail: "thumbnails/drops_color.png",
    blurb: "Spreading drop ripple animation",
    url: "https://briansmiley.github.io/p5/drops",
    github:
      "https://github.com/briansmiley/briansmiley.github.io/tree/main/p5/drops",
    icons: ["p5"]
  },
  {
    title: "Voronoi",
    thumbnail: "thumbnails/voronoi.png",
    blurb: "Voronoi diagram animation",
    url: "https://briansmiley.github.io/p5/voronoi",
    github:
      "https://github.com/briansmiley/briansmiley.github.io/tree/main/p5/voronoi",
    icons: ["p5"]
  },
  {
    title: "Pong",
    thumbnail: "thumbnails/pong.png",
    blurb: "Pong made in p5.js",
    url: "https://briansmiley.github.io/p5/pong",
    github:
      "https://github.com/briansmiley/briansmiley.github.io/tree/main/p5/pong",
    icons: ["p5"]
  },
  {
    title: "BitMapper",
    thumbnail: "thumbnails/bitmapper.png",
    blurb: "Create pixel-wise characters to make your own pixel font",
    url: "https://briansmiley.github.io/p5/bitmapper",
    github: "https://github.com/briansmiley/BitMapper/",
    icons: ["p5"]
  }
];

export const reactProjects: ProjectType[] = [
  {
    title: "Tetris",
    thumbnail: "thumbnails/tetris.png",
    blurb: "Tetris clone with logic built in TypeScript, and UI built in React",
    url: "https://tetris.binarysmile.com",
    github: "https://github.com/briansmiley/briansmiley.Tetris",
    icons: ["react", "typescript", "prisma"]
  },
  {
    title: "ArtGen Feed",
    thumbnail: "thumbnails/artgen.png",
    blurb:
      "Feed of parametric binary tree submitted by users made with React Konva canvas",
    url: "https://artgen.binarysmile.com",
    github: "https://github.com/briansmiley/ArtGen",
    icons: ["next", "react", "typescript", "prisma", "clerk"]
  },
  {
    title: "We Made A Budget",
    thumbnail: "thumbnails/wmab.png",
    blurb: "A budgeting app, clone of YNAB, built in NextJS",
    url: "https://wmab.app",
    github: "https://github.com/briansmiley/wemadeabudget",
    icons: ["next", "react", "typescript", "prisma", "clerk"]
  }
];

export const offlineProjects: ProjectType[] = [
  {
    title: "Terminal Life",
    thumbnail: "thumbnails/curses.png",
    blurb: "Python terminal script for an ASCII based Conway's Game of Life",
    url: "https://github.com/briansmiley/CursedLife",
    github: "https://github.com/briansmiley/CursedLife",
    icons: ["python"]
  },
  {
    title: "Fractal Models",
    thumbnail: "thumbnails/menger4.jpeg",
    blurb:
      "Menger sponges and related fractals drawn using Solidworks and OpenSCAD",
    url: "https://github.com/briansmiley/Fractal-Models",
    github: "https://github.com/briansmiley/Fractal-Models",
    icons: ["openscad", "solidworks"]
  }
];

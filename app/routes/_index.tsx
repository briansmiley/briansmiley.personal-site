import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

const Header = () => {
  return(
  <header>
    <nav>
      <ul className="font-semibold text-blue-400 underline">
        <li><a href="./about">About</a></li>
        <li><a href="https://briansmiley.github.io/p5">Portfolio</a></li>
        <li><a href="https://github.com/briansmiley">Github</a></li>
        <li><a href="https://www.linkedin.com/in/brian-smiley-1289a6121/">LinkedIn</a></li>
      </ul>
    </nav>
  </header>)}

export default function Index() {
  return (
    <Header/>
  );
}
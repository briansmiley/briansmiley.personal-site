import { Link } from "@remix-run/react";


export default function Navbar() {
    return(
    <header className="h-12 bg-fuchsia-500">
      <nav className="h-full">
        <ul className="font-semibold text-blue-200 underline flex justify-start h-full">
          <li className="flex items-center hover:bg-blue-500 w-fit h-full pr-2 pl-1"><Link to="/">
            Home</Link></li>
          <li className="flex items-center hover:bg-blue-500 w-fit h-full pr-2 pl-1"><Link to="/Linkbout">
            About</Link></li>
          <li className="flex items-center hover:bg-blue-500 w-fit h-full pr-2 pl-1"><Link to="https://briansmiley.github.io/p5">
            Portfolio</Link></li>
          <li className="flex items-center hover:bg-blue-500 w-fit h-full pr-2 pl-1"><Link to="https://github.com/briansmiley">
            Github</Link></li>
          <li className="flex items-center hover:bg-blue-500 w-fit h-full pr-2 pl-1"><Link to="https://www.linkedin.com/in/brian-smiley-1289a6121/">
            LinkedIn</Link></li>
        </ul>
      </nav>
    </header>)
    } 


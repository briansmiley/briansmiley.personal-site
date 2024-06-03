import { Link } from "@remix-run/react";


export default function Navbar() {
    return(
    <header className="h-12 bg-fuchsia-500">
      <nav className="h-full">
        <ul className="font-semibold text-blue-200 underline flex justify-start h-full">
          <li className="flex items-center hover:bg-blue-500 w-fit h-full pr-2 pl-1"><Link to="/">
            Home</Link></li>
          <li className="flex items-center hover:bg-blue-500 w-fit h-full pr-2 pl-1"><Link to="/about">
            About</Link></li>
          <li className="flex items-center hover:bg-blue-500 w-fit h-full pr-2 pl-1"><Link to="/projects">
            Portfolio</Link></li>
          <li className="flex items-center hover:bg-blue-500 w-fit h-full pr-2 pl-1"><a href="https://github.com/briansmiley">
            Github</a></li>
          <li className="flex items-center hover:bg-blue-500 w-fit h-full pr-2 pl-1"><a href="https://www.linkedin.com/in/brian-smiley-1289a6121/">
            LinkedIn</a></li>
        </ul>
      </nav>
    </header>)
    } 
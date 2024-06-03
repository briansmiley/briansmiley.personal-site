export default function Navbar() {
    return(
    <header className="h-12 bg-fuchsia-500">
      <nav className="h-full">
        <ul className="font-semibold text-blue-200 underline flex justify-start h-full">
          <a href="/">
            <li className="flex items-center hover:bg-blue-500 rounded w-fit h-full pr-2 pl-1">Home</li></a>
          <a href="./about">
            <li className="flex items-center hover:bg-blue-500 rounded w-fit h-full pr-2 pl-1">About</li></a>
          <a href="https://briansmiley.github.io/p5">
            <li className="flex items-center hover:bg-blue-500 rounded w-fit h-full pr-2 pl-1">Portfolio</li></a>
          <a href="https://github.com/briansmiley">
            <li className="flex items-center hover:bg-blue-500 rounded w-fit h-full pr-2 pl-1">Github</li></a>
          <a href="https://www.linkedin.com/in/brian-smiley-1289a6121/">
            <li className="flex items-center hover:bg-blue-500 rounded w-fit h-full pr-2 pl-1">LinkedIn</li></a>
        </ul>
      </nav>
    </header>)
    } 
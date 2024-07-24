import { Link } from "@remix-run/react";

type NavBarItemProps = {
  label: string;
  url: string;
  key: string;
  internal: boolean;
};
function NavBarLink({ label, url, key, internal = true }: NavBarItemProps) {
  return (
    <li
      key={key}
      className="flex items-center hover:bg-blue-500 rounded-xl  w-fit h-[70%] px-4 py-1 transition-all duration-300"
    >
      {internal ? (
        <Link to={url}>{label}</Link>
      ) : (
        <a href={url} rel="noopener noreferrer" target="_blank">
          {label}
        </a>
      )}
    </li>
  );
}
const links = [
  {
    label: "Home",
    url: "/",
    internal: true
  },
  {
    label: "About",
    url: "/about",
    internal: true
  },
  {
    label: "Portfolio",
    url: "/projects",
    internal: true
  },
  {
    label: "Github",
    url: "https://github.com/briansmiley",
    internal: false
  },
  {
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/brian-smiley-1289a6121/",
    internal: false
  }
];
export default function Navbar() {
  return (
    <header className="h-12 bg-indigo-500">
      <nav className="h-full flex justify-center ">
        <ul className="font-semibold text-blue-200 underline flex items-center justify-between gap-2 h-full">
          {links.map((link, idx) =>
            NavBarLink(Object.assign(link, { key: String(idx) }))
          )}
        </ul>
      </nav>
    </header>
  );
}

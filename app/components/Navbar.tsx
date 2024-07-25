import { Link } from "@remix-run/react";
import {
  faLinkedin,
  faGithub,
  IconDefinition,
  faXTwitter
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
type NavBarItemProps = {
  label: string;
  icon?: IconDefinition;
  url: string;
  key: string;
  internal: boolean;
};
function NavBarLink({
  label,
  url,
  icon,
  key,
  internal = true
}: NavBarItemProps) {
  const iconElement = icon ? (
    <FontAwesomeIcon icon={icon} className="h-4 w-4" />
  ) : null;
  return (
    <li
      key={key}
      className="flex items-center hover:bg-blue-500 rounded-xl  w-fit h-[70%] px-4 py-1 transition-all duration-300"
    >
      {internal ? (
        <Link to={url}>{label}</Link>
      ) : (
        <a href={url} rel="noopener noreferrer" target="_blank">
          {icon ? iconElement : label}
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
  }
];
const IconLinks = [
  {
    label: "X",
    icon: faXTwitter,
    url: "https://www.x.com/binarysmile",
    internal: false
  },
  {
    label: "GitHub",
    icon: faGithub,
    url: "https://github.com/briansmiley",
    internal: false
  },
  {
    label: "LinkedIn",
    icon: faLinkedin,
    url: "https://www.linkedin.com/in/brian-smiley-1289a6121/",
    internal: false
  }
];
export default function Navbar() {
  return (
    <header className="h-12 bg-indigo-500 ">
      <nav className="h-full flex justify-between ">
        <ul className="font-semibold text-blue-200 underline flex items-center justify-between overflow-x-auto h-full">
          {links.map((link, idx) => (
            <NavBarLink key={String(idx)} {...link} />
          ))}
        </ul>
        <ul className="flex items-center gap-2 h-full px-2 ">
          {IconLinks.map((link, idx) => (
            <a
              key={String(idx)}
              className="text-blue-200 hover:text-blue-300"
              href={link.url}
              rel="noopener noreferrer"
              target="_blank"
            >
              <FontAwesomeIcon icon={link.icon} className=" h-5 w-5" />
            </a>
          ))}
        </ul>
      </nav>
    </header>
  );
}

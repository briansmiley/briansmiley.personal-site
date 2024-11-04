import {
  faXTwitter,
  faGithub,
  faLinkedin
} from "@fortawesome/free-brands-svg-icons";
import IconLink from "./IconLink";
import { IconLinkType } from "../../lib/types";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { InfoIcon } from "lucide-react";
import Info from "./Info";
const IconLinks: IconLinkType[] = [
  {
    label: "GitHub",
    icon: faGithub,
    url: "https://github.com/briansmiley"
  },
  {
    label: "Twitter",
    icon: faXTwitter,
    url: "https://www.x.com/binarysmile"
  },
  {
    label: "LinkedIn",
    icon: faLinkedin,
    url: "https://www.linkedin.com/in/brian-smiley-1289a6121/"
  }
];
export default function BioHeader() {
  return (
    <div className="border-b-2 border-darkblue border-opacity-20 pb-5 w-[50%]">
      <div className="flex flex-col items-center gap-2">
        <h1 className="text-2xl font-bold">Brian Smiley</h1>
        <div className="flex gap-3 items-start">
          {IconLinks.map(iconLink => (
            <IconLink key={iconLink.url} iconLink={iconLink} size={24} />
          ))}
          <Popover>
            <PopoverTrigger>
              <InfoIcon className="size-6 text-midblue hover:text-darkblue" />
            </PopoverTrigger>
            <PopoverContent align="start">
              <Info />
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </div>
  );
}

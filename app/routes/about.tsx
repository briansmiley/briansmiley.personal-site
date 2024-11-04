import { Link } from "@remix-run/react";
import { CopyIcon, MailIcon } from "lucide-react";

export default function Info() {
  return (
    <div className="flex flex-col items-center justify-center">
      <Link to="/resume.pdf" target="_blank" rel="noopener noreferrer">
        Resumé
      </Link>
      <MailIcon className="w-4 h-4" /> briansmiley@proton.me{" "}
      <button
        onClick={() => navigator.clipboard.writeText("briansmiley@proton.me")}
      >
        <CopyIcon className="w-4 h-4" />
      </button>
    </div>
  );
}

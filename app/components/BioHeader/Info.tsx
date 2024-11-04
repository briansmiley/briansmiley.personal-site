import { Link } from "@remix-run/react";
import { CopyIcon, MailIcon } from "lucide-react";
import FrameworkIcon from "../FrameworkIcon/FrameworkIcon";
import { useToast } from "~/hooks/use-toast";

export default function Info() {
  const { toast } = useToast();
  return (
    <div className="flex flex-col items-start justify-center w-full">
      <Link
        className="flex items-center justify-start"
        to="/resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
      >
        Resumé <FrameworkIcon icon="pdf" />
      </Link>
      <div className="flex items-center justify-start gap-4 w-full">
        <span className="flex items-center gap-1">
          <MailIcon className="w-4 h-4" /> briansmiley@proton.me{" "}
        </span>
        <button
          className="flex items-center justify-start"
          onClick={() => {
            navigator.clipboard.writeText("briansmiley@proton.me");
            toast({
              title: "Copied email"
            });
          }}
        >
          <CopyIcon className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}

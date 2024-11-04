import { Link } from "@remix-run/react";
import { CopyIcon, MailIcon } from "lucide-react";
import FrameworkIcon from "../FrameworkIcon/FrameworkIcon";
import { useToast } from "~/hooks/use-toast";
import { Button } from "../ui/button";

export default function Info() {
  const { toast } = useToast();
  return (
    <div className="flex flex-col items-start justify-center w-full">
      <Link
        className="flex items-center justify-start hover:underline"
        to="/resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
      >
        Resumé <FrameworkIcon icon="pdf" />
      </Link>
      <div className="flex items-center justify-start gap-2 w-full">
        <a
          href="mailto:briansmiley@proton.me"
          className="flex items-center gap-1 hover:underline"
        >
          <MailIcon className="w-4 h-4" /> briansmiley@proton.me
        </a>
        <Button
          className="flex items-center justify-center"
          title="Copy"
          onClick={() => {
            navigator.clipboard.writeText("briansmiley@proton.me");
            toast({
              title: "Copied email"
            });
          }}
          variant="ghost"
          size="icon"
        >
          <CopyIcon className="" />
        </Button>
      </div>
    </div>
  );
}

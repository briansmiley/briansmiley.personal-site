import { Link } from "@remix-run/react"
import { CopyIcon, MailIcon } from "lucide-react"

export default function Info() {
  return (
    <div className="flex flex-col items-center justify-center">
      <Link to="/resume.pdf" target="_blank" rel="noopener noreferrer">
        Resumé
      </Link>
      <MailIcon className="h-4 w-4" /> briansmiley@proton.me{" "}
      <button
        onClick={() => navigator.clipboard.writeText("briansmiley@proton.me")}
      >
        <CopyIcon className="h-4 w-4" />
      </button>
    </div>
  )
}

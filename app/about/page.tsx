"use client"

import Link from "next/link"
import { LuCopy, LuMail } from "react-icons/lu"

export default function AboutPage() {
  return (
    <div className="flex flex-col items-center justify-center">
      <Link href="/resume.pdf" target="_blank" rel="noopener noreferrer">
        Resumé
      </Link>
      <LuMail className="h-4 w-4" /> briansmiley@proton.me{" "}
      <button
        onClick={() => navigator.clipboard.writeText("briansmiley@proton.me")}
      >
        <LuCopy className="h-4 w-4" />
      </button>
    </div>
  )
}

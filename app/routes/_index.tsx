import type { MetaFunction } from "@remix-run/node"
import Projects from "../components/Projects/Projects"
import BioHeader from "~/components/BioHeader/BioHeader"
import { ModeToggle } from "~/components/mode-toggle"
import { ModeToggleSwitch } from "~/components/mode-toggle-switch"
import { ThemeButton } from "~/components/ThemeButton"

export const meta: MetaFunction = () => {
  return [{ title: "BinarySmile" }, { name: "description", content: "" }]
}

export default function Index() {
  return (
    <div className="flex flex-col items-center py-5">
      {/* <div className="absolute right-5 top-5">
        <ModeToggleSwitch />
      </div>
      <BioHeader /> */}
      <Projects />
    </div>
  )
}

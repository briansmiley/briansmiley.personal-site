import type { MetaFunction } from "@remix-run/node";
import Projects from "../components/Projects/Projects";
import BioHeader from "~/components/BioHeader/BioHeader";

export const meta: MetaFunction = () => {
  return [{ title: "BinarySmile" }, { name: "description", content: "" }];
};

export default function Index() {
  return (
    <div className="flex flex-col items-center">
      <div className="border-b-2 border-darkblue border-opacity-20 pb-5 w-[50%]">
        <BioHeader />
      </div>
      <Projects />
    </div>
  );
}

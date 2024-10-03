import type { MetaFunction } from "@remix-run/node";
import Projects from "../components/Projects/Projects";
import BioHeader from "~/components/BioHeader/BioHeader";

export const meta: MetaFunction = () => {
  return [{ title: "BinarySmile" }, { name: "description", content: "" }];
};

export default function Index() {
  return (
    <div className="flex flex-col items-center py-5">
      <BioHeader />
      <Projects />
    </div>
  );
}

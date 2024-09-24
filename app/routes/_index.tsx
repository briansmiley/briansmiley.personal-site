import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [{ title: "BinarySmile" }, { name: "description", content: "" }];
};

export default function Index() {
  return (
    <div>
      <h1 className="font-bold text-5xl">Homepage</h1>
    </div>
  );
}

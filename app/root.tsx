import type { LinksFunction } from "@remix-run/node";
import Navbar from "~/components/Navbar";

import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from "@remix-run/react";

import stylesheet from "~/tailwind.css?url";
export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet }
];
export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="w-full h-screen bg-lightgray">
      <head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover"
        />
        <Meta />
        <Links />
      </head>
      <body>
        <Navbar />
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

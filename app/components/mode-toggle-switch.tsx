"use client"

import { useMounted } from "~/hooks/use-mounted"
import { LuMoon, LuSun } from "react-icons/lu"
import { useTheme } from "next-themes"
import { Switch } from "./ui/themeSwitch"

export function ModeToggleSwitch() {
  const { resolvedTheme, setTheme } = useTheme()
  // next-themes resolves the theme on the client only; render unchecked until mounted
  // so the server and first client render agree.
  const mounted = useMounted()

  return (
    <div className="flex items-center">
      <div className="relative">
        <Switch
          checked={mounted && resolvedTheme === "dark"}
          onCheckedChange={(checked) => setTheme(checked ? "dark" : "light")}
          aria-label="Toggle dark mode"
        />
        <LuSun className="pointer-events-none absolute left-[6px] top-[8px] h-4 w-4 text-foreground opacity-100 transition-opacity duration-300 dark:opacity-40" />
        <LuMoon className="pointer-events-none absolute right-[6px] top-[8px] h-4 w-4 text-foreground opacity-40 transition-opacity duration-300 dark:opacity-100" />
      </div>
    </div>
  )
}

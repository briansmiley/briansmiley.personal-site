import { Moon, Sun } from "lucide-react";
import { Theme, useTheme } from "remix-themes";
import { Button } from "./ui/button";

export function ThemeButton() {
  const [theme, setTheme] = useTheme();

  return (
    <Button
      variant="ghost"
      className="bg-transparent hover:bg-transparent"
      title="Toggle light/dark"
      size="icon"
      onClick={() => setTheme(theme === Theme.DARK ? Theme.LIGHT : Theme.DARK)}
    >
      {theme === Theme.LIGHT ? (
        <Sun className="h-[1.2rem] w-[1.2rem]" />
      ) : (
        <Moon className="h-[1.2rem] w-[1.2rem]" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}

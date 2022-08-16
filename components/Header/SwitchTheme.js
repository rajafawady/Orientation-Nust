import React, { useEffect, useState } from "react";
import { MoonIcon, SunIcon } from "@heroicons/react/solid";
import { useTheme } from "next-themes";

export default function SwitchTheme() {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  const currentTheme = theme === "system" ? systemTheme : theme;

  if (currentTheme === "dark") {
    return (
      <div
        className="bg-gray-200 dark:bg-prussian-blue p-2 rounded-md hover:ring-2 hover:ring-lapis-lazuli"
        onClick={() => setTheme("light")}
      >
        <SunIcon className="w-6 h-6 md:w-9 md:h-9" color="#f9d71c" />
      </div>
    );
  } else {
    return (
      <div
        className="bg-pale-pink p-2 rounded-md hover:ring-2 hover:ring-ultra-red"
        onClick={() => setTheme("dark")}
      >
        <MoonIcon className="w-6 h-6 md:w-9 md:h-9" color="#720240" />
      </div>
    );
  }
}

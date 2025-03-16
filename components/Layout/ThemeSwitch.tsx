"use client";

import { Switch } from "@/components/ui/switch"; // Adjust path as needed
import Typography from "../Shared/Typography";
import { useTheme } from "@/app/ThemeContext";

const ThemeSwitch = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="flex items-center gap-2 sm:fixed right-4">
      <Switch checked={theme === "dark"} onCheckedChange={toggleTheme} />
      <Typography variant="p" className="font-poppins text-primary">
        {theme === "dark" ? "Dark Mode" : "Light Mode"}
      </Typography>
    </div>
  );
};

export default ThemeSwitch;

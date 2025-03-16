"use client";

import { Switch } from "@/src/components/ui/switch"; // Adjust path as needed
import Typography from "../Shared/Typography";
import { useTheme } from "@/src/context/ThemeContext";
import { useTranslations } from "next-intl";

const ThemeSwitch = () => {
  const t = useTranslations("ThemeSwitch");
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="flex items-center gap-2 sm:fixed right-4">
      <Switch checked={theme === "dark"} onCheckedChange={toggleTheme} />
      <Typography variant="p" className="font-poppins text-primary">
        {theme === "dark" ? t("Dark Mode") : t("Light Mode")}
      </Typography>
    </div>
  );
};

export default ThemeSwitch;

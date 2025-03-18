"use client";

import { usePathname } from "next/navigation";
import { useLocale } from "next-intl";
import { Switch } from "@/src/components/ui/switch"; // Adjust path as needed
import Typography from "../Shared/Typography";

export default function ToggleLanguage() {
  const pathname = usePathname();
  const locale = useLocale();

  const toggleLocale = () => {
    const newLocale = locale === "en" ? "my" : "en";
    const pathWithoutLocale = pathname.replace(/^\/(en|my)/, "");

    // Set locale in cookie
    document.cookie = `NEXT_LOCALE=${newLocale}; path=/; max-age=31536000`;

    // Change the URL and reload instantly
    window.location.href = `/${newLocale}${pathWithoutLocale}`;
  };

  return (
    <div className="flex items-center gap-2 sm:fixed left-4">
      <Typography variant="p" className="font-poppins text-secondary">
        EN
      </Typography>
      <label className="cursor-pointer">
        <Switch checked={locale === "my"} onCheckedChange={toggleLocale} />
      </label>
      <Typography variant="p" className="font-poppins text-primary">
        MY
      </Typography>
    </div>
  );
}

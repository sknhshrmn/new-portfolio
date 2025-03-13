"use client";

import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { Switch } from "@/components/ui/switch"; // Adjust path if needed
import { useEffect, useState } from "react";

export default function ToggleLanguage() {
  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = pathname.split("/")[1]; // Extracts locale from URL
  const [isEnglish, setIsEnglish] = useState(currentLocale === "en");

  const toggleLanguage = () => {
    const newLocale = isEnglish ? "en" : "my";
    setIsEnglish(!isEnglish);

    // Update the URL with the new locale
    router.push(`/${newLocale}${pathname.substring(3)}`);
  };

  useEffect(() => {
    setIsEnglish(currentLocale === "en");
  }, [currentLocale]);

  return (
    <div className="flex items-center space-x-3">
      <Switch checked={isEnglish} onCheckedChange={toggleLanguage} />
    </div>
  );
}

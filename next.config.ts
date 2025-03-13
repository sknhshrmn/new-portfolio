import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  i18n: {
    locales: ["en", "my"],
    defaultLocale: "en",
    localeDetection: false,
  },
};

export default nextConfig;

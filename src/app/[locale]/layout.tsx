import type { Metadata } from "next";
import "./globals.css";
import { montserrat, poppins } from "./fonts";
import { ThemeProvider } from "../../context/ThemeContext";
import ThemeSwitch from "@/src/components/Layout/ThemeSwitch";
import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import Menu from "@/src/components/Layout/Menu";
import ToggleLanguage from "@/src/components/Layout/ToggleLanguage";

export const metadata: Metadata = {
  title: "Sakinah Shahriman",
  description: "Portfolio",
};

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  let messages;

  if (!["en", "my"].includes(locale)) {
    return notFound();
  }

  return (
    <html lang={locale}>
      <body
        className={`${montserrat.variable} ${poppins.variable} bg-background text-foreground`}
      >
        <NextIntlClientProvider locale={locale} messages={messages}>
          <ThemeProvider>
            <div className="relative grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen px-4 pt-20 pb-8 sm:pt-8 sm:pb-10 max-w-[1200px] mx-auto">
              <div className="w-full flex justify-between items-center ">
                <ToggleLanguage />
                <ThemeSwitch />
              </div>
              <Menu />
              {children}
            </div>
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
      <footer className="bg-gray-800 text-white py-6 mt-10">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Sakinah Shahriman. All Rights
            Reserved.
          </p>
        </div>
      </footer>
    </html>
  );
}

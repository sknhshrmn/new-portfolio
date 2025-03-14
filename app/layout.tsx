import type { Metadata } from "next";
import "./globals.css";
import { montserrat, poppins } from "./fonts";
import Typography from "@/components/Shared/Typography";
import ToggleLanguage from "@/components/Layout/ToggleLanguage";
import { Switch } from "@radix-ui/react-switch";
import Menu from "@/components/Layout/Menu";

export const metadata: Metadata = {
  title: "Sakinah Shahriman",
  description: "Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${poppins.variable} bg-background text-foreground`}
      >
        <div className="relative grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen px-4 pt-20 pb-8 sm:pt-8 sm:pb-10 max-w-[1200px] mx-auto">
          <div className="w-full flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Typography variant="p" className="font-poppins text-foreground">
                EN
              </Typography>
              <ToggleLanguage />
              <Typography variant="p" className="font-poppins text-primary">
                MY
              </Typography>
            </div>
            <div className="flex items-center gap-2">
              <Switch />
              <Typography variant="p" className="font-poppins text-primary">
                Switch Theme
              </Typography>
            </div>
          </div>
          <Menu />
          {children}
        </div>
      </body>
    </html>
  );
}

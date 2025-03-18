import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("Home");

  return (
    <footer className="bg-gray-800 text-white py-6 mt-10">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Sakinah Shahriman.{" "}
          {t("All Rights Reserved")}.
        </p>
      </div>
    </footer>
  );
}

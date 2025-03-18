import Link from "next/link";
import { CiLinkedin } from "react-icons/ci";
import { FaHome } from "react-icons/fa";
import { Button } from "../ui/button";
import { useTranslations } from "next-intl";

const Menu: React.FC = () => {
  const t = useTranslations("Menu");

  return (
    <nav
      className="menu font-poppins fixed top-3 z-50 rounded-full pr-2 pl-6 py-2 h-fit opacity-1 drop-shadow-xl z-50 
               hover:text-primary-dark dark:hover:text-primary-light transition-all"
    >
      <ul className="flex justify-around gap-1 sm:gap-3 pr-1 sm:pr-4 items-center">
        <li>
          <Button
            variant="secondary"
            className="px-1 text-white hover:text-primary dark:text-white dark:hover:text-primary"
          >
            <Link href="/">
              <FaHome className="!w-6 !h-6" />
            </Link>
          </Button>
        </li>
        <li>
          <Button
            variant="secondary"
            className="px-1 text-white hover:text-primary dark:text-white dark:hover:text-primary"
          >
            <Link href="/#about-me">{t("About Me")}</Link>
          </Button>
        </li>
        <li>
          <Button
            variant="secondary"
            className="px-1 text-white hover:text-primary dark:text-white dark:hover:text-primary"
          >
            <Link href="/#experiences">{t("Experiences")}</Link>
          </Button>
        </li>
        <li>
          <Button
            variant="secondary"
            className="px-1 text-white hover:text-primary dark:text-white dark:hover:text-primary"
          >
            <Link href="/#projects">{t("Projects")}</Link>
          </Button>
        </li>
        <li>
          <Button
            variant="secondary"
            className="px-1 text-white hover:text-primary dark:text-white dark:hover:text-primary"
          >
            <Link href="https://www.linkedin.com/in/siti-nursakinah-binti-shahriman-4746b6108/">
              <CiLinkedin className="!w-6 !h-6" />
            </Link>
          </Button>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;

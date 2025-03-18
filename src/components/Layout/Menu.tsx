"use client";

import Link from "next/link";
import { CiLinkedin } from "react-icons/ci";
import { FaHome } from "react-icons/fa";
import { Button } from "../ui/button";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";

const Menu: React.FC = () => {
  const t = useTranslations("Menu");

  const [menuPosition, setMenuPosition] = useState<"top" | "bottom">("top");
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrollDirection, setScrollDirection] = useState<"up" | "down" | null>(
    null
  );
  const [lockPosition, setLockPosition] = useState<number | null>(null); // Stores the scroll position where it moved down
  const scrollThreshold = 50; // Prevents unnecessary state updates

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const handleScroll = () => {
      clearTimeout(timeoutId);
      const currentScrollY = window.scrollY;

      timeoutId = setTimeout(() => {
        // Determine direction
        if (currentScrollY > lastScrollY + scrollThreshold) {
          setScrollDirection("down");
        } else if (currentScrollY < lastScrollY - scrollThreshold) {
          setScrollDirection("up");
        }

        // Move menu to bottom when scrolling down & set lock position
        if (scrollDirection === "down" && menuPosition === "top") {
          setMenuPosition("bottom");
          setLockPosition(currentScrollY); // Store the scroll position where it moved down
        }

        // Move back to top **only when scrolling up past the lock position**
        if (
          scrollDirection === "up" &&
          lockPosition !== null &&
          currentScrollY <= lockPosition
        ) {
          setMenuPosition("top");
          setLockPosition(null); // Reset lock once back at original position
        }

        setLastScrollY(currentScrollY);
      }, 100); // Debounce to prevent flickering
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timeoutId);
    };
  }, [lastScrollY, scrollDirection, menuPosition, lockPosition]);

  return (
    <motion.header
      initial={{ y: 0 }}
      animate={{ y: menuPosition === "top" ? 0 : "calc(100vh - 5rem)" }}
      transition={{ duration: 0.4, ease: "easeOut" }} // Smooth animation
      className="fixed top-3 transition-all duration-300 z-50"
    >
      <nav
        className="menu font-poppins rounded-full pr-2 pl-6 py-2 h-fit opacity-1 drop-shadow-xl z-50 
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
    </motion.header>
  );
};

export default Menu;

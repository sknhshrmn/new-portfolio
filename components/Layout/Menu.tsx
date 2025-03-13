"use client";

import Link from "next/link";
import { CiLinkedin } from "react-icons/ci";
import { FaHome } from "react-icons/fa";
import { Button } from "../ui/button";
import { motion, useScroll, useTransform } from "framer-motion";
import { useLayoutEffect, useState } from "react";

const Menu: React.FC = () => {
  const { scrollY } = useScroll(); // Tracks scroll position
  const [windowHeight, setWindowHeight] = useState(0);

  useLayoutEffect(() => {
    const updateHeight = () => setWindowHeight(window.innerHeight);

    updateHeight(); // Set initial value
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  // Moves header from top (0) to bottom (100vh - height) smoothly
  const yPosition = useTransform(
    scrollY,
    [0, windowHeight * 0.6, windowHeight], // Delay movement until 90% of page height
    ["0%", "0%", "calc(100vh - 4.5rem)"] // Stay at top, then transition down
  );

  return (
    <motion.header
      style={{ y: yPosition }}
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
              <Link href="/#about-me">About Me</Link>
            </Button>
          </li>
          <li>
            <Button
              variant="secondary"
              className="px-1 text-white hover:text-primary dark:text-white dark:hover:text-primary"
            >
              <Link href="/#experiences">Experiences</Link>
            </Button>
          </li>
          <li>
            <Button
              variant="secondary"
              className="px-1 text-white hover:text-primary dark:text-white dark:hover:text-primary"
            >
              <Link href="/#projects">Projects</Link>
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

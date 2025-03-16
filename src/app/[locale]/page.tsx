"use client";

import "./globals.css";
import ProfileCard from "@/src/components/Layout/ProfileCard";
import AboutMeCard from "@/src/components/Layout/AboutMeCard";
import ExperienceMainCard from "@/src/components/Layout/ExperienceMainCard";
import ProjectsCard from "@/src/components/Layout/ProjectsCard";
import { useEffect, useState } from "react";
import Typography from "@/src/components/Shared/Typography";

export default function Home() {
  const [activeSection, setActiveSection] = useState<string>("home");
  const [bigTitle, setBigTitle] = useState<string>("home");

  useEffect(() => {
    // Set "home" as active immediately on mount
    setActiveSection("home");
    setBigTitle("home");

    const sections = document.querySelectorAll(".section");

    // Create an IntersectionObserver for each section
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id); // Set the active section when it's in view
            setBigTitle(entry.target.id);
          }
        });
      },
      {
        threshold: 0.8, // 80% of the section should be visible
      }
    );

    // Delay the observer to avoid conflicts with initial state
    const timeout = setTimeout(() => {
      sections.forEach((section) => observer.observe(section));
    }, 100); // Small delay to allow the UI to settle

    return () => {
      clearTimeout(timeout);
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <main className="w-auto sm:w-2/3 py-6 flex flex-col gap-12">
      <Typography
        variant="h1"
        className="hidden lg:block fixed top-[10%]  text-gray-900 dark:text-white capslock -ml-[100px] uppercase sm:text-[100px] [writing-mode:vertical-lr] font-extrabold tracking-wide leading-none drop-shadow-lg"
      >
        {bigTitle}
      </Typography>

      <section
        id="home"
        className={`section ${
          activeSection === "home"
            ? "border-2 border-primary shadow-2xl rounded-[10px]"
            : ""
        }  transition-all duration-100 ease-in-out hover:scale-101 hover:bg-primary/10 hover:shadow-lg`}
      >
        <ProfileCard />
      </section>
      <section
        id="about-me"
        className={`section ${
          activeSection === "about-me"
            ? "border-2 border-primary shadow-2xl rounded-[10px]"
            : ""
        } transition-all duration-100 ease-in-out hover:scale-101 hover:bg-primary/10 hover:shadow-lg`}
      >
        <AboutMeCard />
      </section>
      <section
        id="experiences"
        className={`section ${
          activeSection === "experiences"
            ? "border-2 border-primary shadow-2xl rounded-[10px]"
            : ""
        } transition-all duration-100 ease-in-out hover:scale-101 hover:bg-primary/10 hover:shadow-lg`}
      >
        <ExperienceMainCard />
      </section>
      <section
        id="projects"
        className={`section ${
          activeSection === "projects"
            ? "border-2 border-primary shadow-2xl rounded-[10px]"
            : ""
        } transition-all duration-100 ease-in-out hover:scale-101 hover:bg-primary/10 hover:shadow-lg`}
      >
        <ProjectsCard />
      </section>
    </main>
  );
}

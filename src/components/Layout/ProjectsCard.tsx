"use client";

import { useLocale, useTranslations } from "next-intl";
import Card from "../Shared/Card";
import ProjectSubCard from "../Shared/ProjectSubCard";
import Typography from "../Shared/Typography";
import { useEffect, useState } from "react";
import { Spinner } from "../ui/spinner";

interface Project {
  id: string; // Assuming each project has an ID
  title: string;
  type: string;
  description: string;
  image: string;
  link: string;
}

const ProjectsCard = () => {
  const t = useTranslations("Home");
  const locale = useLocale();
  const [projects, setProjects] = useState<Project[] | null>(null);

  useEffect(() => {
    async function fetchProjects() {
      try {
        const res = await fetch(`/locales/${locale}/projects.json`);
        const data: Project[] = await res.json();
        setProjects(data);
      } catch (error) {
        console.error("Error fetching projects data:", error);
      }
    }

    fetchProjects();
  }, [locale]);

  return (
    <Card>
      <Typography
        variant="h2"
        className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent"
      >
        {t("Projects")}
      </Typography>
      {projects ? (
        <div className="flex flex-col gap-12">
          {projects?.map((project, index) => (
            <ProjectSubCard key={index} project={project} />
          ))}
        </div>
      ) : (
        <Spinner />
      )}
    </Card>
  );
};

export default ProjectsCard;

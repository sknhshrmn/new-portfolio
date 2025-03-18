"use client";

import { useState } from "react";
import Image from "next/image";
import Typography from "./Typography";
import dynamic from "next/dynamic";
const ProjectDrawer = dynamic(() => import("./ProjectDrawer"), { ssr: false });
import ProjectScreenshots from "./ProjectScreenshots";
import { useTranslations } from "next-intl";

interface StackType {
  name: string;
  description?: string;
}

interface ProblemSolutionType {
  problem: string[];
  solution: string[];
}

interface ImageType {
  caption: string;
  url: string;
}

interface ProjectType {
  title: string;
  type: string;
  description?: string;
  techStack?: StackType[];
  users?: string[]; // Changed from StackType[] to string[] to match JSON
  status?: string;
  problem_solution?: ProblemSolutionType; // Changed from array to object
  link?: string;
  thumbnail?: string;
  screenshots?: ImageType[];
}
interface ProjectSubCardProps {
  project: ProjectType;
}
const ProjectSubCard: React.FC<ProjectSubCardProps> = ({ project }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<ProjectType | null>(
    null
  );

  const {
    title,
    type,
    status,
    screenshots,
    description,
    techStack,
    thumbnail,
  } = project;

  const handleReadMoreClick = () => {
    setSelectedProject(project);
    setDrawerOpen(true); // Open drawer on Read More click
  };

  const handleThumbnailClick = () => {
    setSelectedProject(project);
    setModalOpen(true); // Open modal on thumbnail click
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
    setSelectedProject(null);
  };

  const handleModalClose = () => {
    setModalOpen(false);
    setSelectedProject(null);
  };
  const t = useTranslations("Home");

  return (
    <div className="w-full flex flex-col gap-6 ">
      {/* Title */}
      <div className="flex flex-col gap-2">
        <div className="flex flex-col sm:flex-row sm:space-between items-start ">
          <Typography variant="h3" className="font-bold !text-primary">
            {title}
          </Typography>
          {type && (
            <Typography
              variant="small"
              className={`mt-1 w-min px-3 py-1 text-xs font-semibold text-white whitespace-nowrap rounded-full ${
                type === "Backend"
                  ? "bg-yellow-500"
                  : type === "Frontend"
                  ? "bg-green-500"
                  : "bg-blue-500"
              }`}
            >
              {type}
            </Typography>
          )}
        </div>
        <Typography variant="quote" className="!text-accent">
          {t("Status")}: {status}
        </Typography>
      </div>

      {/* Image and Description */}
      <div className="flex sm:flex-row flex-col gap-6 sm:gap-8">
        <div className="mx-auto text-center w-full sm:w-[50%]  flex sm:items-start items-center">
          <div className="thumbnail-container" onClick={handleThumbnailClick}>
            <Image
              src={thumbnail ?? "/images/default-thumbnail.png"}
              alt={t("Screenshot of the app")}
              className="thumbnail-image"
              layout="fill" // Automatically fills the container dimensions
            />
          </div>
        </div>

        <div className="flex flex-col justify-between w-full sm:w-[50%]">
          {/* Description */}
          <Typography variant="p" className="!text-foreground">
            {description}
          </Typography>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 gap-y-[0.5px]">
            {techStack?.map((stack, index) => (
              <span key={index} className="inline !text-muted">
                <Typography variant="small" className="!text-muted-foreground">
                  {stack.name} {index < techStack.length - 1 ? " | " : ""}
                </Typography>
              </span>
            ))}
          </div>

          {/* Read More */}
          <div className="pt-8" onClick={handleReadMoreClick}>
            <Typography
              variant="small"
              className="font-bold !text-destructive cursor-pointer transition-colors"
            >
              {t("Read more")}...
            </Typography>
          </div>
        </div>
      </div>

      {/* Drawer Component */}
      {selectedProject && (
        <ProjectDrawer
          open={drawerOpen}
          onClose={handleDrawerClose}
          project={selectedProject}
        />
      )}

      {/* Modal Component */}
      {selectedProject && (
        <ProjectScreenshots
          open={modalOpen}
          onClose={handleModalClose}
          title={title}
          images={screenshots}
        />
      )}
    </div>
  );
};

export default ProjectSubCard;

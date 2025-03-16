"use client";

import { useState } from "react";
import Image from "next/image";
import Typography from "./Typography";
import ProjectDrawer from "./ProjectDrawer"; // Ensure to import ProjectDrawer
import ProjectScreenshots from "./ProjectScreenshots";

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

  const { title, status, screenshots, description, techStack, thumbnail } =
    project;

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

  return (
    <div className="w-full flex flex-col gap-6 ">
      {/* Title */}
      <div className="flex flex-col gap-2">
        <Typography variant="h3" className="font-bold !text-primary">
          {title}
        </Typography>
        <Typography variant="quote" className="!text-accent">
          Status: {status}
        </Typography>
      </div>

      {/* Image and Description */}
      <div className="flex sm:flex-row flex-col gap-6 sm:gap-8">
        <div className="mx-auto text-center">
          {screenshots ? (
            <Image
              onClick={handleThumbnailClick}
              src={thumbnail ?? "/images/default-thumbnail.png"}
              width={649}
              height={491}
              alt="Screenshot of the Django-based app"
              className="mx-auto rounded-lg shadow-md cursor-pointer"
            />
          ) : (
            <Image
              src={thumbnail ?? "/images/default-thumbnail.png"}
              width={649}
              height={491}
              alt="Screenshot of the Django-based app"
              className="mx-auto rounded-lg shadow-md"
            />
          )}
        </div>

        <div className="flex flex-col justify-between">
          {/* Description */}
          <Typography variant="p" className="!text-foreground">
            {description}
          </Typography>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 gap-y-[0.5px]">
            {techStack?.map((stack, index) => (
              <span key={index} className="inline !text-muted">
                <Typography variant="small" className="!text-muted-foreground">
                  {stack.name}
                </Typography>
                {/* Add separator if it's not the last item */}
                {index < techStack.length - 1 ? (
                  <span>
                    <Typography
                      variant="small"
                      className="!text-muted-foreground"
                    >
                      {" "}
                      |
                    </Typography>
                  </span>
                ) : null}
              </span>
            ))}
          </div>

          {/* Read More */}
          <div className="pt-8" onClick={handleReadMoreClick}>
            <Typography
              variant="small"
              className="font-bold !text-destructive cursor-pointer transition-colors"
            >
              Read more...
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
          title={selectedProject?.title}
          images={selectedProject?.screenshots}
        />
      )}
    </div>
  );
};

export default ProjectSubCard;

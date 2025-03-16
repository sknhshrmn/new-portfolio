"use client";

import Card from "@/src/components/Shared/Card";
import Typography from "@/src/components/Shared/Typography";
import { Button } from "@/src/components/ui/button";
import { Spinner } from "@/src/components/ui/spinner";
import { useLocale } from "next-intl";
import { useEffect, useState } from "react";
import {
  FaCheckCircle,
  FaUserCircle,
  FaCode,
  FaLightbulb,
  FaTasks,
  FaChartBar,
  FaUserShield,
} from "react-icons/fa";

const InnerCard = ({
  title,
  children,
}: Readonly<{
  title: string;
  children: React.ReactNode;
}>) => {
  return (
    <div className="border border-blue-500/50 rounded-lg p-2 sm:p-4 w-full bg-blue-900/40 backdrop-blur-lg shadow-md shadow-blue-500/30">
      <div>
        <Typography
          variant="h3"
          className="text-primary-foreground font-semibold flex items-center gap-2"
        >
          {title == "Description" && (
            <FaLightbulb className="text-yellow-400" />
          )}
          {title == "Key Features" && <FaTasks className="text-yellow-400" />}
          {title == "Current Status" && (
            <FaChartBar className="text-yellow-400" />
          )}
          {title == "My Role & Responsibilities" && (
            <FaUserShield className="text-yellow-400" />
          )}
          {title}
        </Typography>
      </div>
      {children}
    </div>
  );
};

interface Project {
  title: string;
  description?: string;
  users?: string[];
  techStack?: { name: string }[];
  keyFeatures?: string[];
  current_status?: { development?: string };
  my_role?: string[];
}

export default function DjangoProject() {
  const locale = useLocale();
  const [project, setProject] = useState<Project>({
    title: "Untitled Project",
    description: "",
    users: [],
    techStack: [],
    keyFeatures: [],
    current_status: { development: "" },
    my_role: [],
  });

  useEffect(() => {
    async function fetchProjectData() {
      try {
        const res = await fetch(`/locales/${locale}/projects.json`);
        if (!res.ok) throw new Error("Failed to load projects.json");
        const data = await res.json();
        setProject(data[0] || {});
      } catch (error) {
        console.error("Error fetching project data:", error);
      }
    }
    fetchProjectData();
  }, [locale]); // Ensure it re-fetches on locale change

  return (
    <main className="w-auto sm:w-2/3 py-6 flex flex-col gap-12 mx-auto">
      <Card>
        {project ? (
          <>
            {/* Project Title */}
            <Typography
              variant="h2"
              className="font-poppins text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary text-center !leading-[1.5]"
            >
              {project.title || "Untitled Project"}
            </Typography>

            {/* Project Description */}
            <InnerCard title="Description">
              <Typography className="text-foreground">
                {project.description || "No description available."}
              </Typography>
            </InnerCard>

            {/* Users & Tech Stack */}
            <div className="w-full flex sm:flex-row flex-col p-2 sm:p-4 gap-6">
              {(project?.users?.length ?? 0) > 0 && (
                <div className="w-full sm:w-1/2 flex flex-col gap-2">
                  <Typography
                    variant="h3"
                    className="font-semibold flex items-center gap-2"
                  >
                    <FaUserCircle className="text-blue-400" /> Users
                  </Typography>
                  <div className="flex flex-wrap gap-2">
                    {project?.users?.map((user: string, index: number) => (
                      <Button
                        key={index}
                        variant="outline"
                        className="rounded-full cursor-default"
                      >
                        {user}
                      </Button>
                    ))}
                  </div>
                </div>
              )}
              {(project?.techStack?.length ?? 0) > 0 && (
                <div className="w-full sm:w-1/2 flex flex-col gap-2">
                  <Typography
                    variant="h3"
                    className="font-semibold flex items-center gap-2"
                  >
                    <FaCode className="text-green-400" /> Tech Stack
                  </Typography>
                  <div className="flex flex-wrap gap-2">
                    {project?.techStack?.map(
                      (stack: { name: string }, index: number) => (
                        <Button
                          key={index}
                          variant="default"
                          className="rounded-full cursor-default"
                        >
                          {stack.name}
                        </Button>
                      )
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Key Features */}
            {(project?.keyFeatures?.length ?? 0) > 0 && (
              <InnerCard title="Key Features">
                <Typography variant="p">
                  <ul className="list-disc list-inside w-full text-foreground">
                    {project?.keyFeatures?.map(
                      (feat: string, index: number) => (
                        <li key={index} className="flex items-start gap-2">
                          <FaCheckCircle className="text-secondary mt-0 sm:mt-0.5" />
                          {feat}
                        </li>
                      )
                    )}
                  </ul>
                </Typography>
              </InnerCard>
            )}

            {/* Development Status */}
            {project?.current_status?.development && (
              <InnerCard title="Current Status">
                <Typography className="text-foreground">
                  {project.current_status.development}
                </Typography>
              </InnerCard>
            )}

            {/* My Role */}
            <InnerCard title="My Role & Responsibilities">
              <ul className="list-disc list-inside w-full text-foreground">
                {project?.my_role?.map((role: string, index: number) => (
                  <li key={index} className="flex items-start gap-2">
                    <FaCheckCircle className="text-secondary mt-0 sm:mt-0.5" />
                    <Typography variant="p">{role}</Typography>
                  </li>
                ))}
              </ul>
            </InnerCard>
          </>
        ) : (
          <Spinner />
        )}
      </Card>
    </main>
  );
}

"use client";

import { Button } from "../ui/button";
import Typography from "./Typography";
import {
  FaCheckCircle,
  FaLightbulb,
  FaChartBar,
  FaUserShield,
  FaLaptopCode,
  FaUsers,
  FaCogs,
  FaStar,
  FaRocket,
  FaPuzzlePiece,
  FaInfoCircle,
} from "react-icons/fa";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

interface StackType {
  name: string;
  description?: string;
}

interface ProblemSolutionType {
  problem: string[];
  solution: string[];
}

interface CurrentStatusType {
  development: string[];
  next_steps: string[];
}

interface KeyTakeAwayType {
  technical_growth: string[];
  professional_growth: string[];
}

interface ImageType {
  caption: string;
  url: string;
}

interface ProjectType {
  title: string;
  description?: string;
  techStack?: StackType[];
  users?: string[];
  keyFeatures?: string[];
  status?: string;
  problem_solution?: ProblemSolutionType;
  impact?: string;
  my_role?: string;
  current_status?: CurrentStatusType;
  key_takeaways?: KeyTakeAwayType;
  screenshots?: ImageType[];
}

interface ProjectDrawerProps {
  open: boolean;
  onClose: () => void;
  project: ProjectType | null;
}

const ProjectDrawer: React.FC<ProjectDrawerProps> = ({
  open,
  onClose,
  project,
}) => {
  if (!project) return null;

  const InnerCard = ({
    title,
    children,
  }: {
    title: string;
    children: React.ReactNode;
  }) => (
    <div className="border border-border rounded-lg p-4 bg-muted dark:bg-background backdrop-blur-md shadow-md">
      <Typography
        variant="h3"
        className="font-semibold flex items-center gap-2"
      >
        {title === "Description" && (
          <FaInfoCircle className="text-yellow-400" />
        )}
        {title === "Users" && <FaUsers className="text-blue-500" />}
        {title === "Current Status" && (
          <FaChartBar className="text-yellow-400" />
        )}
        {title === "Tech Stack" && <FaCogs className="text-blue-500" />}
        {title === "Key Features" && <FaStar className="text-yellow-400" />}
        {title === "Impact" && <FaRocket className="text-green-500" />}

        {title === "My Role & Responsibilities" && (
          <FaUserShield className="text-blue-500" />
        )}
        {title === "Problem & Solution" && (
          <FaPuzzlePiece className="text-blue-500" />
        )}
        {title === "My Role" && <FaLaptopCode className="text-blue-500" />}
        {title === "Key Takeaways" && (
          <FaLightbulb className="text-orange-400" />
        )}

        {title}
      </Typography>
      <div className="mt-2">{children}</div>
    </div>
  );

  return (
    <Sheet open={open} onOpenChange={onClose}>
      <SheetContent className="w-full sm:w-[600px] bg-card text-card-foreground border border-border shadow-lg pb-0 scrollbar-hide">
        <SheetHeader>
          <SheetTitle className="text-xl font-bold text-primary">
            {project.title}
          </SheetTitle>

          <SheetDescription className="overflow-y-auto max-h-[75vh] space-y-6 py-4 scrollbar-hide">
            <InnerCard title="Description">
              <Typography variant="p" className="!text-foreground">
                {project.description || "No description available."}
              </Typography>
            </InnerCard>

            {project.keyFeatures && project.keyFeatures.length > 0 && (
              <InnerCard title="Key Features">
                <ul className="list-disc list-inside text-foreground">
                  <Typography variant="p" className="!text-foreground">
                    {project.keyFeatures.map((feat, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <FaCheckCircle className="text-secondary" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </Typography>
                </ul>
              </InnerCard>
            )}

            {project.techStack && project.techStack.length > 0 && (
              <InnerCard title="Tech Stack">
                <div className="flex flex-wrap gap-4">
                  {project.techStack.map((stack, index) => (
                    <div
                      key={index}
                      className="flex flex-col items-start border p-2 rounded-lg w-full"
                    >
                      <Typography
                        variant="p"
                        className="font-montserrat font-semibold"
                      >
                        {stack.name}
                      </Typography>
                      <Typography variant="p" className="!text-foreground">
                        {stack.description}
                      </Typography>
                    </div>
                  ))}
                </div>
              </InnerCard>
            )}

            {project.users && project.users.length > 0 && (
              <InnerCard title="Users">
                <div className="flex flex-wrap gap-4">
                  {project.users.map((user, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      className="!text-muted-foreground rounded-full cursor-default border-muted-foreground"
                    >
                      <Typography variant="stack">{user}</Typography>
                    </Button>
                  ))}
                </div>
              </InnerCard>
            )}

            {project.problem_solution && (
              <InnerCard title="Problem & Solution">
                <div className="space-y-2">
                  <Typography
                    variant="p"
                    className="font-montserrat font-semibold text-muted-foreground"
                  >
                    Problem:
                  </Typography>
                  <ul className="list-disc list-inside text-gray-600">
                    <Typography variant="p" className="!text-foreground">
                      {project.problem_solution.problem.map((prob, index) => (
                        <li key={index}>{prob}</li>
                      ))}
                    </Typography>
                  </ul>
                  <Typography
                    variant="p"
                    className="font-montserrat font-semibold text-muted-foreground"
                  >
                    Solution:
                  </Typography>
                  <ul className="list-disc list-inside text-gray-600">
                    <Typography variant="p" className="!text-foreground">
                      {project.problem_solution.solution.map((sol, index) => (
                        <li key={index}>{sol}</li>
                      ))}
                    </Typography>
                  </ul>
                </div>
              </InnerCard>
            )}

            {project.impact && (
              <InnerCard title="Impact">
                <ul className="list-disc list-inside text-gray-600">
                  <Typography variant="p" className="!text-foreground">
                    {Object.entries(project.impact).map((value, index) => (
                      <li key={index}>{value}</li>
                    ))}
                  </Typography>
                </ul>
              </InnerCard>
            )}

            {project.my_role && project.my_role.length > 0 && (
              <InnerCard title="My Role">
                <ul className="list-disc list-inside text-gray-600">
                  <Typography variant="p" className="!text-foreground">
                    {Object.entries(project.my_role).map((value, index) => (
                      <li key={index}>{value}</li>
                    ))}
                  </Typography>
                </ul>
              </InnerCard>
            )}

            {project.current_status && (
              <InnerCard title="Current Status">
                <Typography className="text-muted-foreground font-semibold">
                  {project.current_status.development}
                </Typography>

                {project.current_status.next_steps.length > 0 && (
                  <div className="mt-2">
                    <Typography
                      variant="p"
                      className="font-semibold text-muted-foreground"
                    >
                      Next Steps:
                    </Typography>
                    <ul className="list-disc list-inside text-gray-600">
                      <Typography variant="p" className="!text-foreground">
                        {project.current_status.next_steps.map(
                          (step, index) => (
                            <li key={index}>{step}</li>
                          )
                        )}
                      </Typography>
                    </ul>
                  </div>
                )}
              </InnerCard>
            )}

            {project.key_takeaways && (
              <InnerCard title="Key Takeaways">
                <div className="space-y-2">
                  <Typography
                    variant="p"
                    className="font-semibold text-muted-foreground"
                  >
                    Technical Growth:
                  </Typography>
                  <ul className="list-disc list-inside text-gray-600">
                    <Typography variant="p" className="!text-foreground">
                      {project.key_takeaways.technical_growth.map(
                        (item: string, index: number) => (
                          <li key={index}>{item}</li>
                        )
                      )}
                    </Typography>
                  </ul>
                  <Typography
                    variant="p"
                    className="font-semibold text-muted-foreground"
                  >
                    Professional Growth:
                  </Typography>
                  <ul className="list-disc list-inside text-gray-600">
                    <Typography variant="p" className="!text-foreground">
                      {project.key_takeaways.professional_growth.map(
                        (item: string, index: number) => (
                          <li key={index}>{item}</li>
                        )
                      )}
                    </Typography>
                  </ul>
                </div>
              </InnerCard>
            )}
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default ProjectDrawer;

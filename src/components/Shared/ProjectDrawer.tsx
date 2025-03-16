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
} from "@/src/components/ui/sheet";
import { useTranslations } from "next-intl";
import { Spinner } from "../ui/spinner";

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
  const t = useTranslations("Home") ?? (() => (key: string) => key);

  if (!project) return <Spinner />;

  const InnerCard = ({
    title,
    children,
  }: {
    title: string;
    children: React.ReactNode;
  }) => (
    <div className="border border-border rounded-lg p-4 bg-muted dark:bg-background backdrop-blur-md shadow-md">
      <h3 className="font-semibold flex items-center gap-2">
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
      </h3>
      <div className="mt-2 text-left">{children}</div>
    </div>
  );

  return (
    <Sheet open={open} onOpenChange={onClose}>
      <SheetContent className="w-full sm:w-[600px] bg-card text-card-foreground border border-border shadow-lg pb-0 scrollbar-hide">
        <SheetHeader>
          <SheetTitle className="text-xl font-bold text-primary">
            {project.title}
          </SheetTitle>

          <SheetDescription className="overflow-y-auto max-h-[85vh] space-y-6 py-4 scrollbar-hide">
            <InnerCard title={t("Description")}>
              <div className="!text-foreground">
                {project.description || t("No description available")}
              </div>
            </InnerCard>

            {project.keyFeatures && project.keyFeatures.length > 0 && (
              <InnerCard title={t("Key Features")}>
                <div className="!text-foreground">
                  <ul className="list-disc list-inside text-foreground">
                    {project.keyFeatures.map((feat, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <FaCheckCircle className="text-secondary" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </InnerCard>
            )}

            {project.techStack && project.techStack.length > 0 && (
              <InnerCard title={t("Tech Stack")}>
                <div className="flex flex-wrap gap-4">
                  {project.techStack.map((stack, index) => (
                    <div
                      key={index}
                      className="flex flex-col items-start border p-2 rounded-lg w-full"
                    >
                      <span className="font-montserrat font-semibold">
                        {stack.name}
                      </span>
                      <span className="!text-foreground">
                        {stack.description}
                      </span>
                    </div>
                  ))}
                </div>
              </InnerCard>
            )}

            {project.users && project.users.length > 0 && (
              <InnerCard title={t("Users")}>
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
              <InnerCard title={t("Problem & Solution")}>
                <div className="space-y-1">
                  <div className="font-montserrat font-semibold text-muted-foreground">
                    {t("Problem")}:
                  </div>
                  <ul className="list-disc list-inside text-gray-600">
                    <span className="!text-foreground">
                      {project.problem_solution.problem.map((prob, index) => (
                        <li key={index}>{prob}</li>
                      ))}
                    </span>
                  </ul>
                  <span className="font-montserrat font-semibold text-muted-foreground">
                    {t("Solution")}:
                  </span>
                  <ul className="list-disc list-inside text-gray-600">
                    <span className="!text-foreground">
                      {project.problem_solution.solution.map((sol, index) => (
                        <li key={index}>{sol}</li>
                      ))}
                    </span>
                  </ul>
                </div>
              </InnerCard>
            )}

            {project.impact && (
              <InnerCard title={t("Impact")}>
                <ul className="list-disc list-inside text-gray-600">
                  <span className="!text-foreground">
                    {Object.entries(project.impact).map(
                      ([_key, value], index) => (
                        <li key={index}>{value}</li>
                      )
                    )}
                  </span>
                </ul>
              </InnerCard>
            )}

            {project.my_role && project.my_role.length > 0 && (
              <InnerCard title={t("My Role")}>
                <ul className="list-disc list-inside text-gray-600">
                  <span className="!text-foreground">
                    {Object.entries(project.my_role).map(
                      ([_key, value], index) => (
                        <li key={index}>{value}</li>
                      )
                    )}
                  </span>
                </ul>
              </InnerCard>
            )}

            {project.current_status && (
              <InnerCard title={t("Current Status")}>
                <span className="text-muted-foreground font-semibold">
                  {project.current_status.development}
                </span>

                {project.current_status.next_steps.length > 0 && (
                  <div className="mt-2 text-left">
                    <span className="font-semibold text-muted-foreground">
                      {t("Next Steps")}:
                    </span>
                    <ul className="list-disc list-inside text-gray-600">
                      <span className="!text-foreground">
                        {project.current_status.next_steps.map(
                          (step, index) => (
                            <li key={index}>{step}</li>
                          )
                        )}
                      </span>
                    </ul>
                  </div>
                )}
              </InnerCard>
            )}

            {project.key_takeaways && (
              <InnerCard title={t("Key Takeaways")}>
                <div className="space-y-2">
                  <div className="font-semibold text-muted-foreground">
                    {t("Technical Growth")}:
                  </div>
                  <ul className="list-disc list-inside text-gray-600">
                    <span className="!text-foreground">
                      {project.key_takeaways.technical_growth.map(
                        (item: string, index: number) => (
                          <li key={index}>{item}</li>
                        )
                      )}
                    </span>
                  </ul>
                  <div className="font-semibold text-muted-foreground">
                    {t("Professional Growth")}:
                  </div>
                  <ul className="list-disc list-inside text-gray-600">
                    <span className="!text-foreground">
                      {project.key_takeaways.professional_growth.map(
                        (item: string, index: number) => (
                          <li key={index}>{item}</li>
                        )
                      )}
                    </span>
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

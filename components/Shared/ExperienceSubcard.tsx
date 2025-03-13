import React from "react";
import Typography from "./Typography";
import { Button } from "../ui/button";

interface ExperienceType {
  title: string;
  company: string;
  date: string;
  description: string;
  stack: string[];
}

interface ExperienceSubcardProps {
  exp: ExperienceType;
}

const ExperienceSubcard: React.FC<ExperienceSubcardProps> = ({ exp }) => {
  return (
    <div className="w-full flex flex-col gap-3 justify-between w-full h-auto">
      {/* Gradient Border Glow */}
      <div className="flex flex-col gap-1">
        <Typography variant="h3" className="font-bold !text-primary">
          {exp.title}
        </Typography>
        <Typography variant="quote" className="!text-accent">
          {exp.company}
        </Typography>
        <Typography variant="quote" className="!text-accent">
          {exp.date}
        </Typography>
      </div>
      <Typography variant="p" className="!text-foreground">
        {exp.description}
      </Typography>
      <div className="flex flex-wrap gap-2">
        {exp.stack?.map((stack: string, index: number) => (
          <Button
            key={index}
            variant="outline"
            className="!text-muted-foreground rounded-full cursor-default border-muted-foreground"
          >
            <Typography variant="small" className="!text-muted-foreground">
              {stack}
            </Typography>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default ExperienceSubcard;

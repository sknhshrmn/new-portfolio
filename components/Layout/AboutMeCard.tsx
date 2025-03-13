import Typography from "../Shared/Typography";
import Card from "../Shared/Card";
import { Button } from "../ui/button";
import aboutMe from "@/app/data/aboutMe.json";
import React from "react";

const { text, resume_link, github_link } = aboutMe;

const AboutMeCard = () => {
  return (
    <Card>
      {/* Title with Turquoise Gradient */}
      <Typography
        variant="h2"
        className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent"
      >
        About Me
      </Typography>

      {/* About Text */}
      <p
        className="text-xs sm:text-sm text-poppins"
        dangerouslySetInnerHTML={{ __html: text }}
      />

      {/* Button Section */}
      <div className="flex gap-2">
        <Button
          variant="outline"
          className="border-primary text-primary hover:bg-primary/10"
        >
          <a
            href={resume_link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View my resume"
          >
            Resume
          </a>
        </Button>
        <Button
          variant="default"
          className="bg-accent !text-accent-foreground hover:bg-accent/90"
        >
          <a
            href={github_link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit my GitHub profile"
          >
            Github
          </a>
        </Button>
      </div>
    </Card>
  );
};

export default AboutMeCard;

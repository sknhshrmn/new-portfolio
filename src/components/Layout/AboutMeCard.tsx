"use client";

import Typography from "../Shared/Typography";
import Card from "../Shared/Card";
import { Button } from "../ui/button";
import React, { useEffect, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { Spinner } from "../ui/spinner";

interface AboutMe {
  text: string;
  resume_link: string;
  github_link: string;
}

const AboutMeCard = () => {
  const t = useTranslations("Home");
  const locale = useLocale();
  const [aboutMe, setAboutMe] = useState<AboutMe | null>(null);

  useEffect(() => {
    async function fetchAboutMe() {
      const res = await fetch(`/locales/${locale}/aboutMe.json`);
      const data = await res.json();
      setAboutMe(data);
    }
    fetchAboutMe();
  }, [locale]);

  return (
    <Card>
      {/* Title with Turquoise Gradient */}
      <Typography
        variant="h2"
        className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent"
      >
        {t("AboutMe")}
      </Typography>
      {!aboutMe ? (
        <Spinner />
      ) : (
        <>
          {/* About Text */}
          <p
            className="text-xs sm:text-sm text-poppins"
            dangerouslySetInnerHTML={{ __html: aboutMe.text }}
          />

          {/* Button Section */}
          <div className="flex gap-2">
            <Button
              variant="outline"
              className="border-primary text-primary hover:bg-primary/10"
            >
              <a
                href={aboutMe.resume_link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View my resume"
              >
                {t("Resume")}
              </a>
            </Button>
            <Button
              variant="default"
              className="bg-accent !text-accent-foreground hover:bg-accent/90"
            >
              <a
                href={aboutMe.github_link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit my GitHub profile"
              >
                {t("Github")}
              </a>
            </Button>
          </div>
        </>
      )}
    </Card>
  );
};

export default AboutMeCard;

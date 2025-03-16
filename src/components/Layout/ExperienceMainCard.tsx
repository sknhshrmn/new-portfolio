"use client";

import { useLocale, useTranslations } from "next-intl";
import Card from "../Shared/Card";
import ExperienceSubcard from "../Shared/ExperienceSubcard";
import Typography from "../Shared/Typography";
import { useEffect, useState } from "react";
import { Spinner } from "../ui/spinner";

const ExperienceMainCard = () => {
  const t = useTranslations("Home");
  const locale = useLocale();
  const [experiences, setExperiences] = useState<[] | null>(null);

  useEffect(() => {
    async function fetchExperiences() {
      try {
        const res = await fetch(`/locales/${locale}/experiences.json`);
        const data = await res.json();
        setExperiences(data);
      } catch (error) {
        console.error("Error fetching experiences:", error);
      }
    }

    fetchExperiences();
  }, [locale]);

  return (
    <Card>
      <Typography
        variant="h2"
        className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent"
      >
        {t("Experiences")}
      </Typography>

      {experiences ? (
        <>
          <div className="w-full flex flex-col justify-start gap-10">
            {experiences?.map((exp, index) => (
              <ExperienceSubcard key={index} exp={exp} />
            ))}
          </div>
        </>
      ) : (
        <Spinner />
      )}
    </Card>
  );
};

export default ExperienceMainCard;

"use client";

import Image from "next/image";
import Typography from "../Shared/Typography";
import Card from "../Shared/Card";
import { useEffect, useState } from "react";
import { useLocale } from "next-intl";

const ProfileCard = () => {
  const locale = useLocale();
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    async function fetchProfile() {
      try {
        const res = await fetch(`/locales/${locale}/profile.json`);
        const data = await res.json();
        setProfile(data);
      } catch (error) {
        console.error("Error fetching profile data:", error);
      }
    }

    fetchProfile();
  }, [locale]);

  if (!profile) return <p>Loading...</p>;

  const { profilePicture, name, position, tagline } = profile;

  return (
    <Card>
      {/* Profile Image */}
      <Image
        src={profilePicture}
        width={1920}
        height={1080}
        alt={`Profile image of ${name}`}
        priority
        className="h-[10rem] w-[10rem] rounded-full border-4 border-foreground/20 shadow-lg object-cover"
      />

      {/* Profile Details */}
      <div
        className="w-full flex flex-col gap-6 px-4 py-8"
        style={{ color: "var(--foreground)" }}
      >
        <div className="w-full text-center">
          <Typography variant="h2" className="font-poppins">
            {name}
          </Typography>

          <Typography variant="h1" className="italic mt-2 !text-foreground">
            {position}
          </Typography>
        </div>
        <Typography
          variant="h3"
          className="text-center font-montserrat opacity-80 "
        >
          {tagline}
        </Typography>
      </div>
    </Card>
  );
};

export default ProfileCard;

"use client";

import Image from "next/image";
import Typography from "../Shared/Typography";
import Card from "../Shared/Card";
import { useEffect, useState } from "react";
import { useLocale } from "next-intl";
import { Spinner } from "../ui/spinner";

interface Profile {
  profilePicture: string;
  name: string;
  position: string;
  tagline: string;
}
const ProfileCard = () => {
  const locale = useLocale();
  const [profile, setProfile] = useState<Profile | null>(null);

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

  return (
    <Card>
      {profile ? (
        <>
          {/* Profile Image */}
          <Image
            src={profile.profilePicture}
            width={1920}
            height={1080}
            alt={`Profile image of ${profile.name}`}
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
                {profile.name}
              </Typography>

              <Typography variant="h1" className="italic mt-2 !text-foreground">
                {profile.position}
              </Typography>
            </div>
            <Typography
              variant="h3"
              className="text-center font-montserrat opacity-80 "
            >
              {profile.tagline}
            </Typography>
          </div>
        </>
      ) : (
        <Spinner />
      )}
    </Card>
  );
};

export default ProfileCard;

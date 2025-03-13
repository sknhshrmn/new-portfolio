import Image from "next/image";
import Typography from "../Shared/Typography";
import Card from "../Shared/Card";
import profile from "@/app/data/profile.json";

const { profilePicture, name, position, tagline } = profile;

const ProfileCard = () => {
  return (
    <Card>
      {/* Profile Image */}
      <Image
        src={profilePicture}
        width={1920}
        height={1080}
        alt={`Profile image of ${name}`}
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

import Card from "../Shared/Card";
import ExperienceSubcard from "../Shared/ExperienceSubcard";
import Typography from "../Shared/Typography";
import experiences from "@/app/data/experiences.json";

const ExperienceMainCard = () => {
  return (
    <Card>
      <Typography
        variant="h2"
        className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent"
      >
        Experiences
      </Typography>

      <div className="w-full flex flex-col justify-start gap-10">
        {experiences?.map((exp, index) => (
          <ExperienceSubcard key={index} exp={exp} />
        ))}
      </div>
    </Card>
  );
};

export default ExperienceMainCard;

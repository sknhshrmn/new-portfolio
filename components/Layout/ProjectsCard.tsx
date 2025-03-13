import Card from "../Shared/Card";
import ProjectSubCard from "../Shared/ProjectSubCard";
import Typography from "../Shared/Typography";
import projects from "@/app/data/projects.json";

const ProjectsCard = () => {
  return (
    <Card>
      <Typography
        variant="h2"
        className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent"
      >
        Projects
      </Typography>
      {projects?.map((project, index) => (
        <ProjectSubCard key={index} project={project} />
      ))}
    </Card>
  );
};

export default ProjectsCard;

import { FC } from "react";
import ProjectItem from "./ProjectItem";
import { IProject } from "@/interfaces/Ifirebase";

interface ProjectListProps {
  projects: IProject[];
}

const ProjectList: FC<ProjectListProps> = ({ projects }) => {
  return (
    <ul className="grid gap-y-5 grid-cols-1 justify-items-center items-center sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 xl:grid-cols-4 ">
      {projects.map((project) => (
        <ProjectItem
          key={project.id}
          id={project.id!}
          livePageLink={project.livePageLink}
          githubLink={project.githubLink}
          stack={project.stack}
          imageUrl={project.imageUrl}
        />
      ))}
    </ul>
  );
};

export default ProjectList;

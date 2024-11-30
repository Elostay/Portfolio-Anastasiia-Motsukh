"use client";

import { fetchProjects } from "@/helpers/firebase";
import { IProject } from "@/interfaces/Ifirebase";
import { useEffect, useState } from "react";
import ProjectItem from "../components/ProjectItem";

const Projects = () => {
  const [theBestProjects, setTheBestProjects] = useState<IProject[]>([]);
  const [frontendProjects, setFrontendProjects] = useState<IProject[]>([]);
  const [backendProjects, setBackendProjects] = useState<IProject[]>([]);
  const [practiceProjects, setPracticeProjects] = useState<IProject[]>([]);
  const [teamProjects, setTeamProjects] = useState<IProject[]>([]);

  useEffect(() => {
    const getProjects = async () => {
      const data = await fetchProjects();
      console.log("💖 ~ handleFetchProjects ~ data:", data);

      const theBest = data.filter((project) => project.theBest === true);
      const frontend = data.filter((project) => project.frontend === true);
      const backend = data.filter((project) => project.backend === true);
      const practice = data.filter((project) => project.practice === true);
      const team = data.filter((project) => project.team === true);

      setTheBestProjects(theBest);
      setFrontendProjects(frontend);
      setBackendProjects(backend);
      setPracticeProjects(practice);
      setTeamProjects(team);
    };
    getProjects();
  }, []);

  return (
    <section className="py-10">
      <div className="container mx-auto px-4">
        <div>
          <h1 className="text-center font-semibold text-3xl mb-10">
            The best projects
          </h1>
          <ul>
            {theBestProjects.map((project) => (
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
        </div>
        <h2 className="text-center font-semibold text-3xl mb-10">Frontend</h2>
        <ul>
          {frontendProjects.map((project) => (
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
        <h2 className="text-center font-semibold text-3xl mb-10">Practice</h2>
        <ul>
          {practiceProjects.map((project) => (
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
        <h2 className="text-center font-semibold text-3xl mb-10">Backend</h2>
        <ul>
          {backendProjects.map((project) => (
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
      </div>
    </section>
  );
};

export default Projects;

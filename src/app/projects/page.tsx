"use client";

import { fetchProjects } from "@/helpers/firebase";
import { IProject } from "@/interfaces/Ifirebase";
import { useEffect, useState } from "react";
import ProjectList from "../components/ProjectList";
import ScrollToTopButton from "../components/ScrollToTopButton";

const Projects = () => {
  const [theBestProjects, setTheBestProjects] = useState<IProject[]>([]);

  const [backendProjects, setBackendProjects] = useState<IProject[]>([]);
  const [practiceProjects, setPracticeProjects] = useState<IProject[]>([]);
  const [teamProjects, setTeamProjects] = useState<IProject[]>([]);

  useEffect(() => {
    const getProjects = async () => {
      const data = await fetchProjects();

      const theBest = data.filter((project) => project.theBest === true);
      const backend = data.filter((project) => project.backend === true);
      const practice = data.filter((project) => project.practice === true);
      const team = data.filter((project) => project.team === true);

      setTheBestProjects(theBest);

      setBackendProjects(backend);
      setPracticeProjects(practice);
      setTeamProjects(team);
    };
    getProjects();
  }, []);

  return (
    <section className="py-10 relative">
      <div className="absolute inset-0 dark:bg-black dark:bg-opacity-40 "></div>
      <div className="relative container mx-auto px-4">
        <div className="pb-5 ">
          <h1 className="text-center font-semibold text-3xl mb-10 ">
            The best projects ✨
          </h1>
          <ProjectList projects={theBestProjects} />
        </div>

        <div className="py-5">
          <h2 className="text-center font-semibold text-3xl mb-10">
            Frontend practice
          </h2>
          <ProjectList projects={practiceProjects} />
        </div>
        <div className="py-5">
          <h2 className="text-center font-semibold text-3xl mb-10">
            Backend practice
          </h2>
          <ProjectList projects={backendProjects} />
        </div>
        <div className="py-5">
          <h2 className="text-center font-semibold text-3xl mb-10">Team</h2>

          <ProjectList projects={teamProjects} />
        </div>
      </div>
      <ScrollToTopButton />
    </section>
  );
};

export default Projects;

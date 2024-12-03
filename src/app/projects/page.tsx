"use client";

import { fetchProjects } from "@/helpers/firebase";
import { IProject } from "@/interfaces/Ifirebase";
import { useEffect, useState } from "react";
import ProjectList from "../components/ProjectList";
import ScrollToTopButton from "../components/ScrollToTopButton";
import { Hourglass } from "react-loader-spinner";

const Projects = () => {
  const [theBestProjects, setTheBestProjects] = useState<IProject[]>([]);
  const [backendProjects, setBackendProjects] = useState<IProject[]>([]);
  const [practiceProjects, setPracticeProjects] = useState<IProject[]>([]);
  const [teamProjects, setTeamProjects] = useState<IProject[]>([]);

  const [loading, setLoading] = useState(true);

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

      setLoading(false);
    };
    getProjects();
  }, []);

  return (
    <section className="py-10 relative">
      {loading ? (
        <div className="flex justify-center items-center absolute top-0 left-0 w-full h-[calc(100vh-68px)]">
          <Hourglass
            visible={true}
            height="80"
            width="80"
            ariaLabel="hourglass-loading"
            wrapperStyle={{}}
            wrapperClass=""
            colors={["#086d0e", "#4fa94d"]}
          />
        </div>
      ) : (
        <div>
          <div className="absolute inset-0 "></div>
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
        </div>
      )}
    </section>
  );
};

export default Projects;

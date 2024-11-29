"use client";

import { fetchProjects } from "@/helpers/firebase";
import { IProject } from "@/interfaces/Ifirebase";
import Image from "next/image";
import { useEffect, useState } from "react";

const Projects = () => {
  const [projects, setProjects] = useState<IProject[]>([]);

  useEffect(() => {
    const getProjects = async () => {
      const data = await fetchProjects();
      console.log("💖 ~ handleFetchProjects ~ data:", data);
      setProjects(data);
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
            {projects.map((project) => {
              return (
                <li className="w-[300px] overflow-hidden" key={project.id}>
                  <a target="_blank" href={project.livePageLink}>
                    <Image
                      className="w-[300px] border-x-2 border-t-2 rounded-t-2xl object-cover"
                      width={300}
                      height={300}
                      src={project.imageUrl}
                      alt="photo of project"
                    />
                  </a>
                  <div className="border-x-2 border-b-2 rounded-b-2xl p-3">
                    <div className=" overflow-hidden">
                      <div className="flex gap-x-3 gap-y-1 flex-wrap items-center ">
                        <p className="text-lg font-semibold">Technologies:</p>
                        {project.stack.map((el) => (
                          <p key={el}>{el}</p>
                        ))}
                      </div>
                      <div className="my-3">
                        <p className="text-lg font-semibold"> GitHub:</p>
                        <a
                          className=" whitespace-nowrap"
                          target="_blank"
                          href={project.githubLink}
                        >
                          {project.githubLink}
                        </a>
                      </div>
                      <div>
                        <p className="text-lg font-semibold">Live Page:</p>
                        <a
                          className=" whitespace-nowrap"
                          target="_blank"
                          href={project.livePageLink}
                        >
                          {project.livePageLink
                            ? project.livePageLink
                            : "Live page doesn't exist"}
                        </a>
                      </div>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
        <h2 className="text-center font-semibold text-3xl mb-10">Frontend</h2>
        <h2 className="text-center font-semibold text-3xl mb-10">Practice</h2>
        <h2 className="text-center font-semibold text-3xl mb-10">Backend</h2>
      </div>
    </section>
  );
};

export default Projects;

"use client";

import { CardoRegular } from "@/fonts/fonts";
// import { addProject } from "@/helpers/firebase";
import clsx from "clsx";
/*
  export interface IProject {
  id?: string;
  stack: string[];
  githubLink: string;
  frontend: boolean;
  backend: boolean;
  practice: boolean;
  theBest: boolean;
  imageUrl: string;
   role?: string;
  team?: boolean;
  livePageLink?: string;
}
*/
// const handleAddProject = async () => {
//   const project = {
//     stack: ["JavaScript", "Notiflix", "Axios", "Slim select"],
//     githubLink: "https://github.com/Elostay/goit-js-hw-10",
//     livePageLink: "https://elostay.github.io/goit-js-hw-10/",
//     frontend: false,
//     backend: false,
//     practice: true,
//     theBest: false,
//     imageUrl: "/images/cat-finder.png",
//   };

//   await addProject(project);
// };

export default function Home() {
  return (
    <section>
      <div className="relative main-bg-light ">
        <div className="absolute inset-0 dark:bg-black dark:bg-opacity-40 "></div>
        <div className="container mx-auto px-4  flex items-center justify-center min-h-[calc(100vh-68px)]">
          <div
            className={clsx(
              "p-8 backdrop-blur-md rounded-3xl dark:bg-white dark:bg-opacity-80  w-[300px] xs:w-[480px] md:w-[768px] lg:w-[1024px]",
              CardoRegular.className
            )}
          >
            <h1 className="border-b border-black pb-2 mb-2 text-3xl xs:text-5xl md:text-7xl  lg:text-8xl font-semibold whitespace-nowrap">
              Anastasiia Motsukh
            </h1>
            <h2 className="text-2xl xs:text-3xl md:text-4xl lg:text-5xl">
              Frontend Developer
            </h2>
            {/* <button type="button" onClick={handleAddProject}>
              add project
            </button> */}
          </div>
        </div>
      </div>
      <div>
        I have practical experience as a front-end developer and strive to write
        clean, efficient, and maintainable code. I am an adaptable and flexible
        individual with a primary focus on personal development. I gain
        satisfaction from the process of continual learning and find inspiration
        in witnessing the tangible outcomes of my efforts. My goal is continuous
        growth, working on engaging projects, and collaborating with inspiring
        people.
      </div>
    </section>
  );
}

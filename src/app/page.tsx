"use client";

import { CardoRegular } from "@/fonts/fonts";
import { addProject } from "@/helpers/firebase";
import clsx from "clsx";
/*



 const project = {
    stack: [
      "NestJS",
      "Prisma",
      "Jwt",
      "Pactum",
      "Jest",
      "TypeScript",
      "Postman",
    ],
    githubLink: "https://github.com/Elostay/nestjs-practice",
    frontend: false,
    backend: true,
    practice: true,
    theBest: false,
    imageUrl: "/images/nestjs.png",
  };


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
const handleAddProject = async () => {
  const project = {
    stack: ["Next.js", "Formik", "TypeScript", "Tailwind CSS"],
    githubLink: "https://github.com/Elostay/CRM-for-vendors",
    livePageLink: "https://crm-for-vendors-one.vercel.app/",
    frontend: true,
    backend: false,
    practice: true,
    theBest: false,
    imageUrl: "/images/crm-for-vendors.png",
  };

  await addProject(project);
};

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
            <button type="button" onClick={handleAddProject}>
              add project
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

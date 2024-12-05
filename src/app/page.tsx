"use client";

import "animate.css";
import { cardoRegular } from "@/fonts/fonts";
import { addProject } from "@/helpers/firebase";
import clsx from "clsx";
import Image from "next/image";
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

const handleAddProject = async () => {
  const project = {
    stack: ["GraphQL", "Apollo Server"],
    githubLink: "https://github.com/Elostay/graphql-practice",
    frontend: false,
    backend: false,
    practice: true,
    theBest: false,
    imageUrl: "/images/graphql.png",
  };

  await addProject(project);
};

export default function Home() {
  return (
    <section className="relative">
      <div className="relative main-bg">
        <div className="container mx-auto px-4  flex  min-h-[calc(100vh-68px)] gap-10">
          <div className="flex items-center gap-[50px] w-full">
            <div
              style={{ animationIterationCount: 1 }}
              className="hidden md:block md:w-[350px] md:h-[350px] lg:w-[400px] lg:h-[400px] xl:w-[500px] xl:h-[500px] 2xl:w-[600px] 2xl:h-[600px] shrink-0 animate__animated animate__bounceInDown"
            >
              <Image
                className="w-full h-full "
                src="/images/me.png"
                quality={100}
                fill
                alt="Anastasiia's photo"
              />
            </div>
            <div className="overflow-hidden">
              <div
                className="w-full animate__animated animate__bounceInRight"
                style={{ animationIterationCount: 1 }}
              >
                <div className={clsx("p-8 b rounded-3xl ")}>
                  <div className={clsx("", cardoRegular.className)}>
                    <h1 className="border-b border-black pb-2 mb-4 text-4xl sm:text-6xl md:text-3xl lg:text-5xl xl:text-7xl font-semibold ">
                      Anastasiia Motsukh
                    </h1>
                    <h2 className="text-2xl sm:text-3xl md:text-xl lg:text-3xl xl:text-5xl mb-10">
                      &lt;frontend developer/&gt;
                    </h2>
                  </div>
                  <div className="w-full">
                    <div className="mb-10 text-lg xl:text-xl ">
                      I have practical experience as a front-end developer and
                      strive to write clean, efficient, and maintainable code. I
                      am an adaptable and flexible individual with a primary
                      focus on personal development. My goal is continuous
                      growth, working on engaging projects, and collaborating
                      with inspiring people.
                    </div>
                    <a
                      href="/Anastasiia_Motsukh_frontend.pdf"
                      download="Anastasiia_Motsukh_frontend"
                      className={clsx(
                        "download-button",
                        cardoRegular.className
                      )}
                    >
                      Download CV
                    </a>
                  </div>

                  <button type="button" onClick={handleAddProject}>
                    add project
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden sm:block marquee absolute bottom-16 left-0">
          <div className="marquee-content text-3xl lg:text-5xl custom-spacing">
            React Redux Next.js Typescript TailwindCSS MUI
          </div>
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";
import { FC } from "react";

interface ProjectItemProps {
  id: string;
  livePageLink?: string;
  githubLink: string;
  stack: string[];
  imageUrl: string;
}

const ProjectItem: FC<ProjectItemProps> = ({
  id,
  livePageLink,
  githubLink,
  stack,
  imageUrl,
}) => {
  return (
    <li className="w-[300px] overflow-hidden" key={id}>
      <a target="_blank" href={livePageLink}>
        <Image
          className="w-[300px] border-x-2 border-t-2 rounded-t-2xl object-cover"
          width={300}
          height={300}
          src={imageUrl!}
          alt="photo of project"
        />
      </a>
      <div className="border-x-2 border-b-2 rounded-b-2xl p-3">
        <div className=" overflow-hidden">
          <div className="flex gap-x-3 gap-y-1 flex-wrap items-center ">
            <p className="text-lg font-semibold">Technologies:</p>
            {stack.map((el) => (
              <p key={el}>{el}</p>
            ))}
          </div>
          <div className="my-3">
            <p className="text-lg font-semibold"> GitHub:</p>
            <a className=" whitespace-nowrap" target="_blank" href={githubLink}>
              {githubLink}
            </a>
          </div>
          <div>
            <p className="text-lg font-semibold">Live Page:</p>
            <a
              className=" whitespace-nowrap"
              target="_blank"
              href={livePageLink}
            >
              {livePageLink ? livePageLink : "Live page doesn't exist"}
            </a>
          </div>
        </div>
      </div>
    </li>
  );
};

export default ProjectItem;

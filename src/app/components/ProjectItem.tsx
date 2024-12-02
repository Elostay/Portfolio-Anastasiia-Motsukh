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
    <li
      className="w-[300px] overflow-hidden flex flex-col h-full border-2 rounded-2xl  dark:bg-white dark:bg-opacity-80 "
      key={id}
    >
      <a target="_blank" href={livePageLink}>
        <Image
          className="w-full h-[170px] object-cover"
          width={300}
          height={300}
          src={imageUrl!}
          alt="photo of project"
        />
      </a>
      <div className="p-3 h-full">
        <div className="flex flex-col justify-between h-full overflow-hidden">
          <div className="flex gap-x-3 gap-y-1 flex-wrap items-center ">
            <p className="text-lg font-semibold">Technologies:</p>
            {stack.map((el) => (
              <p key={el}>{el}</p>
            ))}
          </div>
          <div>
            <div className="my-3">
              <p className="text-lg font-semibold"> GitHub:</p>
              <a
                rel="noopener noreferrer"
                className=" whitespace-nowrap truncate"
                target="_blank"
                href={githubLink}
              >
                {githubLink}
              </a>
            </div>
            <div>
              <p className="text-lg font-semibold">Live Page:</p>
              <a
                rel="noopener noreferrer"
                className=" whitespace-nowrap truncate"
                target="_blank"
                href={livePageLink}
              >
                {livePageLink ? livePageLink : "Live page doesn't exist"}
              </a>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

export default ProjectItem;

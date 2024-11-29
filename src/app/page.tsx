import { CardoRegular } from "@/fonts/fonts";
import clsx from "clsx";

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
            <p className="border-b border-black pb-2 mb-2 text-3xl xs:text-5xl md:text-7xl  lg:text-8xl font-semibold whitespace-nowrap">
              Anastasiia Motsukh
            </p>
            <p className="text-2xl xs:text-3xl md:text-4xl lg:text-5xl">
              Frontend Developer
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

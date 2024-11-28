import { CardoRegular } from "@/fonts/fonts";
import clsx from "clsx";

export default function Home() {
  return (
    <section>
      <div className="relative main-bg-light ">
        <div className="absolute inset-0 dark:bg-black dark:bg-opacity-40 "></div>
      </div>
      <div className="container mx-auto px-4 ">
        <div
          className={clsx(
            "p-8 backdrop-blur-md absolute top-1/3 md:left-1/4 rounded-3xl dark:bg-white dark:bg-opacity-80  w-[300px] m-auto",
            CardoRegular.className
          )}
        >
          <p className="border-b border-black pb-2 mb-2 text-3xl md:text-8xl font-semibold whitespace-nowrap">
            Anastasiia Motsukh
          </p>
          <p className="text-xl md:text-4xl">Frontend Developer</p>
        </div>
      </div>
    </section>
  );
}

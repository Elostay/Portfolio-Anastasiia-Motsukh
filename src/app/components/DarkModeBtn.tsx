"use client";
import useDarkMode from "@/hooks/useDarkMode";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";

const DarkModeBtn = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <div className="relative hidden md:block">
      <div className="absolute -top-1 -left-2 w-[45px] h-[45px] z-0 dark:bg-white dark:bg-opacity-100 rounded-full"></div>
      <button
        type="button"
        onClick={toggleDarkMode}
        className="w-[30px] h-[30px]"
      >
        {isDarkMode ? (
          <MdOutlineLightMode className="w-full h-full absolute top-0 left-0  z-50" />
        ) : (
          <MdOutlineDarkMode className="w-full h-full absolute top-0 left-0  z-50" />
        )}
      </button>
    </div>
  );
};

export default DarkModeBtn;

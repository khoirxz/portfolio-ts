"use client";

import MoonIcon from "@/assets/moon";
import SunIcon from "@/assets/sun";
import useDarkMode from "@/hooks/useDarkMode";

export default function AppDarkMode() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <div className="flex flex-row gap-2">
      <button onClick={toggleDarkMode}>
        {/* Icon */}
        {isDarkMode ? (
          <MoonIcon className="h-5 w-5" />
        ) : (
          <SunIcon className="h-5 w-5" />
        )}
      </button>
    </div>
  );
}

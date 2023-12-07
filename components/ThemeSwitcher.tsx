import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";

interface ThemeSwitcherProps {
  theme: string;
  toggleTheme: () => void;
}

const ThemeSwitcher: React.FC<ThemeSwitcherProps> = ({
  theme,
  toggleTheme,
}) => {
  return (
    <button
      onClick={toggleTheme}
      className="dark:text-white text-writing2 bg-sky-500 dark:bg-green-500"
    >
      <div className="border p-2 transition duration-150 ease-in-out rounded hover:border-dark1 hover:bg-dark1 hover:text-white dark:hover:bg-blue dark:hover:border-blue dark:hover:text-[#ffff00]">
        {theme === "light" ? (
          <MoonIcon className="h-5 w-5 block" />
        ) : (
          <SunIcon className="h-5 w-5 block" />
        )}
      </div>
    </button>
  );
};

export default ThemeSwitcher;

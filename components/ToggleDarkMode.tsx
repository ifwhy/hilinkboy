'use client';

import { useEffect, useState } from 'react';

const ToggleDarkMode = () => {
  const TakeIsDarkModeFromLocalStorage = (): boolean => {
    const isDarkMode = localStorage.getItem('isDarkMode');
    return isDarkMode === 'true';
  };

  const SetIsDarkModeToLocalStorage = (isDarkMode: boolean) => {
    localStorage.setItem('isDarkMode', isDarkMode.toString());
  };

  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  useEffect(() => {
    const darkModeFromLocalStorage = TakeIsDarkModeFromLocalStorage();
    setIsDarkMode(darkModeFromLocalStorage);

    const html = document.documentElement;
    if (darkModeFromLocalStorage) {
      html.classList.add('dark');
    } else {
      html.classList.remove('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    SetIsDarkModeToLocalStorage(newMode);

    const html = document.documentElement;
    if (newMode) {
      html.classList.add('dark');
    } else {
      html.classList.remove('dark');
    }
  };

  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={isDarkMode} // Mengatur checkbox berdasarkan status mode gelap
          onChange={toggleDarkMode} // Menangani perubahan checkbox
          className="peer hidden"
        />
        <div className="group flex w-fit cursor-pointer items-center gap-2 overflow-hidden border rounded-full border-green-50 fill-none p-2 px-3 font-extrabold text-green-50 transition-all active:scale-90 peer-checked:fill-green-50 peer-checked:hover:text-white">
          <div className="z-10 transition group-hover:translate-x-4">
            {isDarkMode ? 'Dark' : 'Light'}
          </div>
          <svg
            className="size-6 transition duration-500 group-hover:scale-[1100%]"
            stroke="currentColor"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="12"
              cy="12"
              r="8"
              strokeLinejoin="round"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </label>
    </div>
  );
};

export default ToggleDarkMode;

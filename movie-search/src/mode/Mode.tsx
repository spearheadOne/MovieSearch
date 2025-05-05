import { useEffect, useState } from 'react';

function Mode() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia(
      '(prefers-color-scheme: dark)',
    ).matches;

    if (savedTheme) {
      setTheme(savedTheme);
    } else if (systemPrefersDark) {
      setTheme('dark');
    }
  }, []);

  useEffect(() => {
    const html = document.documentElement;
    html.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const switchMode = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className="flex items-center gap-2">
      <span className="text-sm text-gray-800 dark:text-gray-200">Light</span>
      <label className="relative inline-flex cursor-pointer items-center">
        <input type="checkbox" checked={theme === 'dark'}
               onChange={switchMode} className="peer sr-only" />
        <div
          className="peer h-6 w-11 rounded-full bg-gray-300 after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:bg-white
                     after:transition-all after:content-[''] peer-checked:bg-blue-600
                     peer-checked:after:translate-x-full peer-focus:outline-none"
        ></div>
      </label>
      <span className="text-sm text-gray-800 dark:text-gray-200">Dark</span>
    </div>
  );
}

export default Mode;

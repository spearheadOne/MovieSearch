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
    <>
      <button
        onClick={switchMode}
        className="rounded bg-gray-200 px-4 py-2 text-sm text-gray-800 dark:bg-gray-700 dark:text-white"
      >
        Switch to {theme ? 'Dark' : 'Light'} Mode
      </button>
    </>
  );
}

export default Mode;

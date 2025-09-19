import React, {createContext, useEffect, useState} from "react";

const ThemeContext = createContext();

function ThemeProvider({children}) {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem("theme");
    if (saved) return saved;

    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    return prefersDark ? "dark" : "light";
  });

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    if (theme) {
      document.body.className =
        theme === "light"
          ? "bg-backgroundLight text-black"
          : "bg-backgroundDark text-white";
    }
    localStorage.setItem("theme", theme);
  }, [theme]);
  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;
export {ThemeContext};

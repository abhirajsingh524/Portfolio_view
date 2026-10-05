import {
  createContext,
  useContext,
  useEffect,
  useState,
  PropsWithChildren,
} from "react";

export type ThemeName =
  | "cyber-cyan"
  | "quantum-emerald"
  | "cosmic-violet"
  | "solar-amber";

interface ThemeContextType {
  theme: ThemeName;
  setTheme: (theme: ThemeName) => void;
  cycleTheme: () => void;
  cvMode: boolean;
  setCvMode: (val: boolean) => void;
  toggleCvMode: () => void;
}

const ThemeContext = createContext<ThemeContextType | null>(null);

const themesList: ThemeName[] = [
  "cyber-cyan",
  "quantum-emerald",
  "cosmic-violet",
  "solar-amber",
];

export const ThemeProvider = ({ children }: PropsWithChildren) => {
  const [theme, setTheme] = useState<ThemeName>("cyber-cyan");
  const [cvMode, setCvMode] = useState<boolean>(false);

  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute("data-theme", theme);
    root.setAttribute("data-cv-mode", cvMode ? "true" : "false");
  }, [theme, cvMode]);

  const cycleTheme = () => {
    const currentIndex = themesList.indexOf(theme);
    const nextIndex = (currentIndex + 1) % themesList.length;
    setTheme(themesList[nextIndex]);
  };

  const toggleCvMode = () => {
    setCvMode((prev) => !prev);
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
        cycleTheme,
        cvMode,
        setCvMode,
        toggleCvMode,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

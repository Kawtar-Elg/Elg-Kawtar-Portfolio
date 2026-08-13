import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";

export type ExperienceMode = "developer" | "designer";

interface ExperienceModeContextValue {
  mode: ExperienceMode;
  setMode: (mode: ExperienceMode) => void;
  toggleMode: () => void;
}

const STORAGE_KEY = "kawtar-experience-mode";

const ExperienceModeContext = createContext<ExperienceModeContextValue | undefined>(undefined);

const getInitialMode = (): ExperienceMode => {
  if (typeof window === "undefined") return "developer";
  const stored = window.localStorage.getItem(STORAGE_KEY);
  return stored === "designer" ? "designer" : "developer";
};

export function ExperienceModeProvider({ children }: { children: React.ReactNode }) {
  const [mode, setModeState] = useState<ExperienceMode>(getInitialMode);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, mode);
  }, [mode]);

  const setMode = useCallback((next: ExperienceMode) => {
    setModeState(next);
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  const toggleMode = useCallback(() => {
    setModeState((current) => {
      const next = current === "developer" ? "designer" : "developer";
      window.scrollTo({ top: 0, behavior: "auto" });
      return next;
    });
  }, []);

  const value = useMemo(() => ({ mode, setMode, toggleMode }), [mode, setMode, toggleMode]);

  return <ExperienceModeContext.Provider value={value}>{children}</ExperienceModeContext.Provider>;
}

export function useExperienceMode() {
  const context = useContext(ExperienceModeContext);
  if (!context) {
    throw new Error("useExperienceMode must be used within an ExperienceModeProvider");
  }
  return context;
}
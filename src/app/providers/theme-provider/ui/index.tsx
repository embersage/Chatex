import { Theme, ThemeContext } from "../lib/theme-context";
import { FC, useMemo, useState } from "react";

const defaultTheme = (localStorage.getItem("theme") as Theme) || Theme.LIGHT;

interface Props {
  children: React.ReactNode;
}

export const ThemeProvider: FC<Props> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(defaultTheme);

  const defaultProps = useMemo(
    () => ({
      theme,
      setTheme,
    }),
    [theme]
  );

  return (
    <ThemeContext.Provider value={defaultProps}>
      {children}
    </ThemeContext.Provider>
  );
};

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainPage, NotFoundPage } from "../pages";
import { ThemeProvider } from "./providers/theme-provider/ui";

export const App = () => {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

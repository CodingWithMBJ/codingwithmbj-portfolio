import { useCallback, useState } from "react";
import { Route, Routes } from "react-router-dom";

import Home from "../pages/home/Home";
import ProjectsPage from "../features/latest-work/pages/ProjectsPage";
import LoadingIntro from "../shared/components/loading-intro/LoadingIntro";

const INTRO_SESSION_KEY = "codingwithmbj-intro-viewed";

const App = () => {
  const [isLoading, setIsLoading] = useState(() => {
    return sessionStorage.getItem(INTRO_SESSION_KEY) !== "true";
  });

  const handleIntroComplete = useCallback(() => {
    sessionStorage.setItem(INTRO_SESSION_KEY, "true");
    setIsLoading(false);
  }, []);

  return (
    <>
      {isLoading && (
        <LoadingIntro
          minimumDuration={2200}
          exitDuration={700}
          onComplete={handleIntroComplete}
        />
      )}

      <div
        className={`app-shell ${
          isLoading ? "app-shell--loading" : "app-shell--ready"
        }`}
        aria-hidden={isLoading}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<ProjectsPage />} />
        </Routes>
      </div>
    </>
  );
};

export default App;

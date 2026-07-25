import { Route, Routes } from "react-router-dom";

import Home from "../pages/home/Home";
import ProjectsPage from "../features/latest-work/pages/ProjectsPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<ProjectsPage />} />
    </Routes>
  );
};

export default App;

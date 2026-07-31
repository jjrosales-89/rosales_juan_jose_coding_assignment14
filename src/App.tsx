import { Route, Routes } from 'react-router';
import './App.css';
import PortfolioLayout from './layouts/PortfolioLayout';
import DeveloperSetupPage from './pages/DeveloperSetupPage';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import ResourcesPage from './pages/ResourcesPage';
import SkillsPage from './pages/SkillsPage';
import WorkPage from './pages/WorkPage';

function App() {
  return (
    <Routes>
      <Route element={<PortfolioLayout />}>
        <Route index element={<HomePage />} />
        <Route path="work" element={<WorkPage />} />
        <Route path="skills" element={<SkillsPage />} />
        <Route path="resources" element={<ResourcesPage />} />
        <Route path="developer-setup" element={<DeveloperSetupPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;

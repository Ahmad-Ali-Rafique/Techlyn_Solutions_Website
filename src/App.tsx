import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import IndexPage from './pages/Index';
import ServicesPage from './pages/Services';
import TechlynSuites from './pages/TechlynSuites';
import NotFound from './pages/NotFound';
import { GlobalSuitesSidebar } from './components/GlobalSuitesSidebar';

function App() {
  return (
    <Router>
      <GlobalSuitesSidebar />
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/suites" element={<TechlynSuites />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;


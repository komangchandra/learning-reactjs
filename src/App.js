import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import AboutPage from "./pages/AboutePage";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;

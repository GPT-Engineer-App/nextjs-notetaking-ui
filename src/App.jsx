import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import Index from "./pages/Index.jsx";
import RssFeedConfig from "./pages/RssFeedConfig.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/rss-feed-config" element={<RssFeedConfig />} />
      </Routes>
    </Router>
  );
}

export default App;

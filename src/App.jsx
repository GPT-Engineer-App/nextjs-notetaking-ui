import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Box, useColorMode } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Index from "./pages/Index.jsx";
import RssFeedConfig from "./pages/RssFeedConfig.jsx";
import ApiKeysConfig from "./pages/ApiKeysConfig.jsx";
import Sidebar from "./components/Sidebar.jsx";

function App() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box bgGradient={colorMode === "dark" ? "linear(to-r, gray.800, gray.900)" : "linear(to-r, white, gray.100)"}>
      <Router>
        <Box display="flex">
          <Sidebar />
          <Box flex="1">
            <Routes>
              <Route exact path="/" element={<Index />} />
              <Route path="/rss-feed-config" element={<RssFeedConfig />} />
              <Route path="/api-keys-config" element={<ApiKeysConfig />} />
            </Routes>
          </Box>
        </Box>
      </Router>
    </Box>
  );
}

export default App;

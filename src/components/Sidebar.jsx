import { Box, VStack, Link, useColorMode } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

function Sidebar() {
  const { colorMode } = useColorMode();

  return (
    <Box as="nav" p={4} borderRight="1px" borderColor={colorMode === "dark" ? "gray.700" : "gray.200"} height="100vh" bgGradient={colorMode === "dark" ? "linear(to-b, gray.800, gray.900)" : "linear(to-b, white, gray.100)"}>
      <VStack spacing={4} align="stretch">
        <Link as={RouterLink} to="/">
          Home
        </Link>
        <Link as={RouterLink} to="/rss-feed-config">
          RSS Feed Config
        </Link>
        <Link as={RouterLink} to="/api-keys-config">
          API Keys Config
        </Link>
      </VStack>
    </Box>
  );
}

export default Sidebar;

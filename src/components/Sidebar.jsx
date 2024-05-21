import { Box, VStack, Link, useColorMode, Icon } from "@chakra-ui/react";
import { FaHome, FaRss, FaKey } from "react-icons/fa";
import { Link as RouterLink } from "react-router-dom";

function Sidebar() {
  const { colorMode } = useColorMode();

  return (
    <Box as="nav" p={4} borderRight="1px" borderColor={colorMode === "dark" ? "gray.700" : "gray.200"} height="100vh" bgGradient={colorMode === "dark" ? "linear(to-b, gray.800, gray.900)" : "linear(to-b, white, gray.100)"}>
      <VStack spacing={4} align="stretch">
        <Link as={RouterLink} to="/" display="flex" alignItems="center">
          <Icon as={FaHome} mr={2} />
          Home
        </Link>
        <Link as={RouterLink} to="/rss-feed-config" display="flex" alignItems="center">
          <Icon as={FaRss} mr={2} />
          RSS Feed Config
        </Link>
        <Link as={RouterLink} to="/api-keys-config" display="flex" alignItems="center">
          <Icon as={FaKey} mr={2} />
          API Keys Config
        </Link>
      </VStack>
    </Box>
  );
}

export default Sidebar;

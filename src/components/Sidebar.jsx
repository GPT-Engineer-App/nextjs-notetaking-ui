import { Box, VStack, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

function Sidebar() {
  return (
    <Box as="nav" p={4} borderRight="1px" borderColor="gray.200" height="100vh">
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

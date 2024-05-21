import { Box, Heading, Text, Button, useColorMode } from "@chakra-ui/react";

const Hero = () => {
  const { colorMode } = useColorMode();

  return (
    <Box as="section" pt={20} pb={20} textAlign="center" bgGradient={colorMode === "dark" ? "linear(to-r, gray.800, gray.900)" : "linear(to-r, white, gray.100)"}>
      <Button mt={8} size="lg" colorScheme="teal" variant="solid">
        Record
      </Button>
      <Button mt={8} size="lg" colorScheme="teal" variant="solid" ml={4}>
        Upload Audio File
      </Button>
    </Box>
  );
};

export default Hero;

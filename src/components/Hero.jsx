import { Box, Heading, Text, Button, useColorMode } from "@chakra-ui/react";

const Hero = () => {
  const { colorMode } = useColorMode();

  return (
    <Box as="section" pt={40} pb={20} textAlign="center" bgGradient={colorMode === "dark" ? "linear(to-r, gray.800, gray.900)" : "linear(to-r, white, gray.100)"}>
      <Heading fontSize={{ base: "3xl", md: "5xl" }} bgGradient="linear(to-l, #7928CA, #FF0080)" bgClip="text">
        Welcome to NoteTaking App
      </Heading>
      <Text fontSize={{ base: "md", md: "xl" }} mt={4}>
        Simplify your note-taking experience with advanced summarization and visualization tools.
      </Text>
      <Button mt={8} size="lg" colorScheme="teal" variant="solid">
        Get Started
      </Button>
    </Box>
  );
};

export default Hero;

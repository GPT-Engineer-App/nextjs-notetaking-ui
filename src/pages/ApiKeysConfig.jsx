import { Box, Button, FormControl, FormLabel, Input, VStack, useColorMode } from "@chakra-ui/react";

function ApiKeysConfig() {
  const { colorMode } = useColorMode();

  return (
    <Box p={4} bgGradient={colorMode === "dark" ? "linear(to-r, gray.800, gray.900)" : "linear(to-r, white, gray.100)"}>
      <VStack spacing={4} align="stretch">
        <FormControl id="ollama-endpoint">
          <FormLabel>Ollama Endpoint</FormLabel>
          <Input type="text" />
        </FormControl>
        <FormControl id="lmstudio-endpoint">
          <FormLabel>LM Studio Endpoint</FormLabel>
          <Input type="text" />
        </FormControl>
        <FormControl id="claude-key">
          <FormLabel>Claude Key</FormLabel>
          <Input type="text" />
        </FormControl>
        <FormControl id="openai-key">
          <FormLabel>OpenAI Key</FormLabel>
          <Input type="text" />
        </FormControl>
        <Button colorScheme="blue">Save</Button>
      </VStack>
    </Box>
  );
}

export default ApiKeysConfig;

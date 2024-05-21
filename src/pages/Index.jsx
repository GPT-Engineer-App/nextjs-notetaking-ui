import { Container, VStack, Select, Button, Text, Box, Heading, SimpleGrid, Radio, RadioGroup, Stack, Input } from "@chakra-ui/react";
import { FaCloudUploadAlt } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" py={8}>
      <VStack spacing={6}>
        <Heading>NoteTaking App</Heading>
        <Text>Select your LLM and input preferences for note summarization.</Text>

        <SimpleGrid columns={2} spacing={10} width="full">
          <Box>
            <Text mb={2}>Choose LLM Provider:</Text>
            <Select placeholder="Select provider">
              <option value="openai">OpenAI</option>
              <option value="claude">Claude</option>
              <option value="ollama">Ollama</option>
              <option value="lm-studio">LM Studio</option>
            </Select>
          </Box>
          <Box>
            <Text mb={2}>Upload LLM:</Text>
            <Button leftIcon={<FaCloudUploadAlt />} colorScheme="teal" variant="solid">
              Upload LLM
            </Button>
          </Box>
        </SimpleGrid>

        <Box width="full">
          <Text mb={2}>Note Type:</Text>
          <Select placeholder="Select note type">
            <option value="meeting">Meeting</option>
            <option value="lecture">Lecture</option>
            <option value="personal">Personal</option>
          </Select>
        </Box>

        <Box width="full">
          <Text mb={2}>Summary Length:</Text>
          <Select placeholder="Select summary length">
            <option value="short">Short</option>
            <option value="medium">Medium</option>
            <option value="long">Long</option>
          </Select>
        </Box>

        <Box width="full">
          <Text mb={2}>Visualization Selector:</Text>
          <RadioGroup defaultValue="word-cloud">
            <Stack spacing={5} direction="row">
              <Radio value="word-cloud">Word Cloud</Radio>
              <Radio value="entity-graph">Entity Graph</Radio>
            </Stack>
          </RadioGroup>
        </Box>

        <Box width="full" p={4} borderWidth="1px" borderRadius="lg">
          <Heading size="md" mb={2}>
            Summary
          </Heading>
          <Text>No data yet...</Text>
        </Box>

        <Box width="full" p={4} borderWidth="1px" borderRadius="lg">
          <Heading size="md" mb={2}>
            Sentiment Analysis
          </Heading>
          <Text>No data yet...</Text>
        </Box>

        <Box width="full" p={4} borderWidth="1px" borderRadius="lg">
          <Heading size="md" mb={2}>
            Tags
          </Heading>
          <Text>No data yet...</Text>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;

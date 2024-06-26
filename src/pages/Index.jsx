import { Container, VStack, Select, Button, Text, Box, Heading, SimpleGrid, Radio, RadioGroup, Stack, useColorMode } from "@chakra-ui/react";
import Hero from "../components/Hero";
import { FaCloudUploadAlt } from "react-icons/fa";

const Index = () => {
  const { colorMode } = useColorMode();

  return (
    <Container maxW="container.xl" py={8} bgGradient={colorMode === "dark" ? "linear(to-r, gray.800, gray.900)" : "linear(to-r, white, gray.100)"}>
      <Hero />
      <VStack spacing={6} mt={4}>
        <Box>
          <Text mb={2}>Actions:</Text>
          <Button leftIcon={<FaCloudUploadAlt />} colorScheme="teal" variant="solid">
            Record
          </Button>
          <Button leftIcon={<FaCloudUploadAlt />} colorScheme="teal" variant="solid" ml={4}>
            Upload Audio File
          </Button>
        </Box>

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

        <Box width="full" p={4} borderWidth="1px" borderRadius="lg" bg={colorMode === "dark" ? "gray.700" : "white"}>
          <Heading size="md" mb={2}>
            Summary
          </Heading>
          <Text>No data yet...</Text>
        </Box>

        <Box width="full" p={4} borderWidth="1px" borderRadius="lg" bg={colorMode === "dark" ? "gray.700" : "white"}>
          <Heading size="md" mb={2}>
            Sentiment Analysis
          </Heading>
          <Text>No data yet...</Text>
        </Box>

        <Box width="full" p={4} borderWidth="1px" borderRadius="lg" bg={colorMode === "dark" ? "gray.700" : "white"}>
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

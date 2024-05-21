import { useState } from "react";
import { Box, Button, Input, Select, Text, useColorMode } from "@chakra-ui/react";

function RssFeedConfig() {
  const [rssUrl, setRssUrl] = useState("");
  const [interval, setInterval] = useState("daily");

  const handleSubmit = () => {
    console.log("RSS URL:", rssUrl);
    console.log("Summary Interval:", interval);
  };

  const { colorMode } = useColorMode();

  return (
    <Box p={4} ml="200px" bgGradient={colorMode === "dark" ? "linear(to-r, gray.800, gray.900)" : "linear(to-r, white, gray.100)"}>
      <Text fontSize="xl" mb={4}>
        Configure RSS Feed
      </Text>
      <Input placeholder="Enter RSS Feed URL" value={rssUrl} onChange={(e) => setRssUrl(e.target.value)} mb={4} />
      <Select value={interval} onChange={(e) => setInterval(e.target.value)} mb={4}>
        <option value="hourly">Hourly</option>
        <option value="daily">Daily</option>
        <option value="weekly">Weekly</option>
      </Select>
      <Button onClick={handleSubmit}>Submit</Button>
    </Box>
  );
}

export default RssFeedConfig;

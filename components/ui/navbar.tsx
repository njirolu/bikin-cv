import { Box, Flex, Text, HStack } from "@chakra-ui/react";
import Logo from "./logo";

export default function Navbar() {
  return (
    <Box className={"not-print"}>
      <Flex minH={"80px"} py={2} align={"center"}>
        <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
          <HStack as="a" href="/">
            <Logo />
            <Text
              textAlign={{ base: "center", md: "left" }}
              fontWeight={600}
              color={"#171716"}
              fontSize={"18px"}
            >
              bikin cv
            </Text>
          </HStack>
        </Flex>
      </Flex>
    </Box>
  );
}

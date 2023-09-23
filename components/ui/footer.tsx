import { VStack, Text, Flex } from "@chakra-ui/react";
import Logo from "./logo";

function Footer() {
  return (
    <Flex flexGrow={1} align={"end"} pb={"24px"}>
      <VStack alignItems={"flex-start"} width={{ base: "100%", md: "40%" }}>
        <Logo />
        <Text color={"#000"}>
          bikin cv · Interactive CV Building Platform & Online Tools
        </Text>
        <Text color={"#505050"} mb={"10px"}>
          At bikin cv, we are dedicated to helping you craft the perfect CV that
          showcases your unique talents and experiences. Our user-friendly CV
          builder web app is designed to empower you in your job search journey.
        </Text>
        <Text color={"#000"}>© bikin cv Ltd 2023</Text>
      </VStack>
    </Flex>
  );
}

export default Footer;

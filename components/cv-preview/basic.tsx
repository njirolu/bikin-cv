"use client";

import useBasic from "@/stores/basic";
import { Box, Text, Flex } from "@chakra-ui/react";

function BasicPreview() {
  const {
    name,
    objective,
    email,
    location,
    website,
    phoneNumber,
    wantedJobTitle,
  } = useBasic((state) => state);

  return (
    <>
      <Flex alignItems={"center"} flexDirection={"column"} mb={"8px"}>
        <Text fontSize={"md"} fontWeight={"bold"}>
          {name}
        </Text>
        <Text fontSize={"md"} fontWeight={"bold"}>
          {wantedJobTitle}
        </Text>
        <Flex gap={1}>
          <Text fontSize={"2xs"}>{location} •</Text>
          <Text fontSize={"2xs"}>{email} •</Text>
          <Text fontSize={"2xs"}>{website} •</Text>
          <Text fontSize={"2xs"}>{phoneNumber}</Text>
        </Flex>
      </Flex>

      <Text textAlign={"left"} fontSize={"2xs"} mb={"6px"}>
        <Box dangerouslySetInnerHTML={{ __html: objective }} />
      </Text>
    </>
  );
}

export default BasicPreview;

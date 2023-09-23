"use client";

import useBasic from "@/stores/basic";
import {
  Box,
  Card,
  CardBody,
  Stack,
  FormControl,
  FormLabel,
  Input,
  Flex,
} from "@chakra-ui/react";
import Editor from "@/components/editor";

function BasicForm() {
  const {
    name,
    objective,
    email,
    location,
    website,
    phoneNumber,
    wantedJobTitle,
    setName,
    setObjective,
    setEmail,
    setLocation,
    setWebsite,
    setPhoneNumber,
    setWantedJobTitle,
  } = useBasic((state) => state);

  return (
    <Card>
      <CardBody>
        <Stack spacing="4">
          <Box>
            <FormControl>
              <FormLabel>Name</FormLabel>
              <Input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder="Njirolu"
              />
            </FormControl>
          </Box>
          <Box>
            <FormControl>
              <FormLabel>Wanted Job Title</FormLabel>
              <Input
                value={wantedJobTitle}
                onChange={(e) => setWantedJobTitle(e.target.value)}
                type="text"
                placeholder="Frontend Engineer"
              />
            </FormControl>
          </Box>

          <Flex flexDirection={{ base: "column", md: "row" }} gap={4}>
            <Box width={{ base: "100%", md: "70%" }}>
              <FormControl>
                <FormLabel>Email</FormLabel>
                <Input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="text"
                  placeholder="njirolu@vercel.com"
                />
              </FormControl>
            </Box>
            <Box width={{ base: "100%", md: "30%" }}>
              <FormControl>
                <FormLabel>Phone</FormLabel>
                <Input
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  type="text"
                  placeholder="082 110 XXX XXX"
                />
              </FormControl>
            </Box>
          </Flex>
          <Flex flexDirection={{ base: "column", md: "row" }} gap={4}>
            <Box width={{ base: "100%", md: "70%" }}>
              <FormControl>
                <FormLabel>Website</FormLabel>
                <Input
                  value={website}
                  onChange={(e) => setWebsite(e.target.value)}
                  type="text"
                  placeholder="https://vercel.com"
                />
              </FormControl>
            </Box>
            <Box width={{ base: "100%", md: "30%" }}>
              <FormControl>
                <FormLabel>Location</FormLabel>
                <Input
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  type="text"
                  placeholder="San Francisco, California, U.S"
                />
              </FormControl>
            </Box>
          </Flex>

          <Box>
            <FormControl>
              <FormLabel>Objective</FormLabel>
              <Editor content={objective} onUpdate={setObjective} />
            </FormControl>
          </Box>
        </Stack>
      </CardBody>
    </Card>
  );
}

export default BasicForm;

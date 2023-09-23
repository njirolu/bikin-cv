"use client";

import {
  Box,
  Button,
  Card,
  CardBody,
  CardHeader,
  Flex,
  FormControl,
  FormLabel,
  IconButton,
  Input,
  Stack,
  StackDivider,
} from "@chakra-ui/react";
import {
  BackpackIcon,
  EyeOpenIcon,
  ArrowDownIcon,
  ArrowUpIcon,
  PlusIcon,
  TrashIcon,
  EyeClosedIcon,
} from "@radix-ui/react-icons";
import Editor from "@/components/editor";
import useProfessionalExperience from "@/stores/professional-experience";

function ProfessionalExperienceForm() {
  const {
    title: workExperienceTitle,
    experiences,
    update,
    setTitle,
    toggle,
    visible,
    add,
    remove,
    moveDown,
    moveUp,
  } = useProfessionalExperience((state) => state);

  return (
    <Card>
      <CardHeader pb={0}>
        <Flex justifyContent={"space-between"} alignItems={"center"} gap={2}>
          <Flex alignItems={"center"} gap={2} width={"100%"}>
            <BackpackIcon height={"auto"} width={24} />
            <Input
              borderRadius={0}
              borderColor={"#FFFFFF"}
              _hover={{
                borderLeftColor: "#FFFFFF",
                borderTopColor: "#FFFFFF",
                borderRightColor: "#FFFFFF",
              }}
              _focusVisible={{
                borderLeftColor: "#FFFFFF",
                borderTopColor: "#FFFFFF",
                borderRightColor: "#FFFFFF",
                borderBottomColor: "#3182ce",
              }}
              pl={0}
              fontWeight={600}
              fontSize={"20px"}
              type="text"
              onChange={(e) => setTitle(e.target.value)}
              value={workExperienceTitle}
            />
          </Flex>
          <IconButton
            borderRadius={"50%"}
            background={"unset"}
            size={"md"}
            aria-label="Visible work experience"
            onClick={toggle}
            icon={
              visible ? (
                <EyeOpenIcon color="#9ca3af" height={20} width={20} />
              ) : (
                <EyeClosedIcon color="#9ca3af" height={20} width={20} />
              )
            }
          />
        </Flex>
      </CardHeader>

      <CardBody>
        <Stack
          divider={
            <StackDivider
              borderColor={"#fff2dc"}
              borderBottomWidth={"4px !important"}
              borderBottomStyle={"dotted"}
            />
          }
        >
          {(experiences || []).map((experience, index) => {
            return (
              <Flex
                flexDirection={"column"}
                gap={4}
                key={experience.id}
                pb={"8px"}
              >
                <Box>
                  <FormControl>
                    <Flex
                      justifyContent={"space-between"}
                      alignItems={"center"}
                    >
                      <FormLabel>Company</FormLabel>
                      <Flex gap={1}>
                        {index > 0 && (
                          <IconButton
                            size={"sm"}
                            background={"unset"}
                            borderRadius={"50%"}
                            aria-label="Move up"
                            onClick={() => moveUp(index)}
                            icon={<ArrowUpIcon color="#9ca3af" />}
                          />
                        )}

                        {index + 1 !== experiences.length &&
                          experiences.length > 1 && (
                            <IconButton
                              size={"sm"}
                              background={"unset"}
                              borderRadius={"50%"}
                              aria-label="Move down"
                              onClick={() => moveDown(index)}
                              icon={<ArrowDownIcon color="#9ca3af" />}
                            />
                          )}

                        {experiences.length > 1 && (
                          <IconButton
                            size={"sm"}
                            background={"unset"}
                            borderRadius={"50%"}
                            aria-label="Remove"
                            onClick={() => remove(index)}
                            icon={<TrashIcon color="#9ca3af" />}
                          />
                        )}
                      </Flex>
                    </Flex>

                    <Input
                      value={experience.companyName}
                      onChange={(e) => {
                        const currentExperience = { ...experience };
                        currentExperience.companyName = e?.target?.value;
                        update(index, currentExperience);
                      }}
                      type="text"
                      placeholder="Github Inc"
                    />
                  </FormControl>
                </Box>
                <Box>
                  <FormControl>
                    <FormLabel>Location</FormLabel>
                    <Input
                      value={experience.location}
                      onChange={(e) => {
                        const currentExperience = { ...experience };
                        currentExperience.location = e.target.value;
                        update(index, currentExperience);
                      }}
                      type="text"
                      placeholder="Jakarta, Indonesia"
                    />
                  </FormControl>
                </Box>
                <Flex flexDirection={{ base: "column", md: "row" }} gap={4}>
                  <Box width={{ base: "100%", md: "65%" }}>
                    <FormControl>
                      <FormLabel>Job Title</FormLabel>
                      <Input
                        value={experience.jobTitle}
                        onChange={(e) => {
                          const currentExperience = { ...experience };
                          currentExperience.jobTitle = e.target.value;
                          update(index, currentExperience);
                        }}
                        type="text"
                        placeholder="Frontend Engineer"
                      />
                    </FormControl>
                  </Box>
                  <Box width={{ base: "100%", md: "35%" }}>
                    <FormControl>
                      <FormLabel>Date</FormLabel>
                      <Input
                        value={experience.date}
                        onChange={(e) => {
                          const currentExperience = { ...experience };
                          currentExperience.date = e.target.value;
                          update(index, currentExperience);
                        }}
                        type="text"
                        placeholder="Jul 2021 - Jul 2023"
                      />
                    </FormControl>
                  </Box>
                </Flex>
                <Box>
                  <FormControl>
                    <FormLabel>Description</FormLabel>
                    <Editor
                      content={experience.description}
                      onUpdate={(content) => {
                        const currentExperience = { ...experience };
                        currentExperience.description = content;
                        update(index, currentExperience);
                      }}
                    />
                  </FormControl>
                </Box>
              </Flex>
            );
          })}
        </Stack>
        <Box textAlign={"right"}>
          <Button size={"sm"} leftIcon={<PlusIcon />} onClick={add}>
            Add Job
          </Button>
        </Box>
      </CardBody>
    </Card>
  );
}

export default ProfessionalExperienceForm;

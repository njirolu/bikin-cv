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
  Show,
  Stack,
  StackDivider,
} from "@chakra-ui/react";
import {
  EyeOpenIcon,
  ArrowDownIcon,
  ArrowUpIcon,
  PlusIcon,
  TrashIcon,
  EyeClosedIcon,
  RocketIcon,
} from "@radix-ui/react-icons";
import Editor from "@/components/editor";
import useEducation from "@/stores/education";

function Action({ index }: { index: number }) {
  const { educations, remove, moveDown, moveUp } = useEducation(
    (state) => state
  );
  return (
    <Flex>
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

      {index + 1 !== educations.length && educations.length > 1 && (
        <IconButton
          size={"sm"}
          background={"unset"}
          borderRadius={"50%"}
          aria-label="Move down"
          onClick={() => moveDown(index)}
          icon={<ArrowDownIcon color="#9ca3af" />}
        />
      )}

      {educations.length > 1 && (
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
  );
}

function EducationForm() {
  const {
    title: educationTitle,
    educations,
    update,
    setTitle,
    toggle,
    visible,
    add,
    remove,
    moveDown,
    moveUp,
  } = useEducation((state) => state);

  return (
    <Card>
      <CardHeader pb={0}>
        <Flex justifyContent={"space-between"} alignItems={"center"} gap={2}>
          <Flex alignItems={"center"} gap={2} width={"100%"}>
            <RocketIcon height={"auto"} width={24} />
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
              value={educationTitle}
            />
          </Flex>
          <IconButton
            borderRadius={"50%"}
            background={"unset"}
            size={"md"}
            aria-label="Visible work education"
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
          {(educations || []).map((education, index) => {
            return (
              <Flex
                flexDirection={"column"}
                gap={"4"}
                key={education.id}
                pb={"8px"}
              >
                <Flex flexDirection={{ base: "column", md: "row" }} gap={4}>
                  <Box width={{ base: "100%", md: "65%" }}>
                    <FormControl>
                      <Flex
                        justifyContent={"space-between"}
                        alignItems={"center"}
                      >
                        <FormLabel>School</FormLabel>
                        <Show below="lg">
                          <Action index={index} />
                        </Show>
                      </Flex>

                      <Input
                        value={education.schoolName}
                        onChange={(e) => {
                          const currenteducation = { ...education };
                          currenteducation.schoolName = e?.target?.value;
                          update(index, currenteducation);
                        }}
                        type="text"
                        placeholder="Github Inc"
                      />
                    </FormControl>
                  </Box>

                  <Box width={{ base: "100%", md: "35%" }}>
                    <FormControl>
                      <Flex
                        justifyContent={"space-between"}
                        alignItems={"center"}
                      >
                        <FormLabel>Date</FormLabel>
                        <Show above="lg">
                          <Action index={index} />
                        </Show>
                      </Flex>

                      <Input
                        value={education.date}
                        onChange={(e) => {
                          const currenteducation = { ...education };
                          currenteducation.date = e.target.value;
                          update(index, currenteducation);
                        }}
                        type="text"
                        placeholder="2016 - 2020"
                      />
                    </FormControl>
                  </Box>
                </Flex>

                <Flex flexDirection={"row"} gap={4}>
                  <Box width={"65%"}>
                    <FormControl>
                      <FormLabel>Degree & Major</FormLabel>
                      <Input
                        value={education.degreeAndMajor}
                        onChange={(e) => {
                          const currenteducation = { ...education };
                          currenteducation.degreeAndMajor = e.target.value;
                          update(index, currenteducation);
                        }}
                        type="text"
                        placeholder="S1 Teknik Informatika"
                      />
                    </FormControl>
                  </Box>
                  <Box width={"35%"}>
                    <FormControl>
                      <FormLabel>GPA</FormLabel>
                      <Input
                        value={education.gpa}
                        onChange={(e) => {
                          const currenteducation = { ...education };
                          currenteducation.gpa = e.target.value;
                          update(index, currenteducation);
                        }}
                        type="text"
                        placeholder="4.00"
                      />
                    </FormControl>
                  </Box>
                </Flex>
                <Box>
                  <FormControl>
                    <FormLabel>Description</FormLabel>
                    <Editor
                      content={education.description}
                      onUpdate={(content) => {
                        const currenteducation = { ...education };
                        currenteducation.description = content;
                        update(index, currenteducation);
                      }}
                    />
                  </FormControl>
                </Box>
              </Flex>
            );
          })}
        </Stack>
        <Box textAlign={"right"}>
          <Button size="sm" leftIcon={<PlusIcon />} onClick={add}>
            Add Education
          </Button>
        </Box>
      </CardBody>
    </Card>
  );
}

export default EducationForm;

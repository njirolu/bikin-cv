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
  EyeOpenIcon,
  ArrowDownIcon,
  ArrowUpIcon,
  PlusIcon,
  TrashIcon,
  EyeClosedIcon,
  StarIcon
} from "@radix-ui/react-icons";
import Editor from "@/components/editor";
import useProject from "@/stores/project";

function ProjectForm() {
  const {
    title: projectTitle,
    projects,
    update,
    setTitle,
    toggle,
    visible,
    add,
    remove,
    moveDown,
    moveUp,
  } = useProject((state) => state);

  return (
    <Card>
      <CardHeader pb={0}>
        <Flex justifyContent={"space-between"} alignItems={"center"} gap={2}>
          <Flex alignItems={"center"} gap={2} width={"100%"}>
            <StarIcon height={"auto"} width={24} />
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
              value={projectTitle}
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
          {(projects || []).map((project, index) => {
            return (
              <Flex
                flexDirection={"column"}
                gap={"4"}
                key={project.id}
                pb={"8px"}
              >
                <Flex flexDirection={"row"} gap={4}>
                  <Box width={"65%"}>
                    <FormControl>
                      <FormLabel>Project</FormLabel>
                      <Input
                        value={project.projectName}
                        onChange={(e) => {
                          const currentProject = { ...project };
                          currentProject.projectName = e?.target?.value;
                          update(index, currentProject);
                        }}
                        type="text"
                        placeholder="Github Inc"
                      />
                    </FormControl>
                  </Box>

                  <Box width={"35%"}>
                    <FormControl>
                      <Flex
                        justifyContent={"space-between"}
                        alignItems={"center"}
                      >
                        <FormLabel>Date</FormLabel>
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

                          {index + 1 !== projects.length &&
                            projects.length > 1 && (
                              <IconButton
                                size={"sm"}
                                background={"unset"}
                                borderRadius={"50%"}
                                aria-label="Move down"
                                onClick={() => moveDown(index)}
                                icon={<ArrowDownIcon color="#9ca3af" />}
                              />
                            )}

                          {projects.length > 1 && (
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
                        value={project.date}
                        onChange={(e) => {
                          const currentProject = { ...project };
                          currentProject.date = e.target.value;
                          update(index, currentProject);
                        }}
                        type="text"
                        placeholder="2016 - 2020"
                      />
                    </FormControl>
                  </Box>
                </Flex>

                <Box>
                  <FormControl>
                    <FormLabel>Description</FormLabel>
                    <Editor
                      content={project.description}
                      onUpdate={(content) => {
                        const currentproject = { ...project };
                        currentproject.description = content;
                        update(index, currentproject);
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
            Add Project
          </Button>
        </Box>
      </CardBody>
    </Card>
  );
}

export default ProjectForm;

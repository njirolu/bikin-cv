"use client";

import { Box, Text, Flex } from "@chakra-ui/react";
import useProject from "@/stores/project";

function ProjectPreview() {
  const {
    title: projectTitle,
    projects,
    visible,
  } = useProject((state) => state);

  return (
    <>
      {visible && (
        <>
          <Text
            borderBottom={"1px solid #000"}
            fontSize={"xs"}
            fontWeight={"bold"}
            pb={"2px"}
            mb={"8px"}
          >
            {projectTitle}
          </Text>
          <Flex flexDirection={"column"} gap={2} mb={2}>
            {(projects || []).map((project) => {
              return (
                <Box key={project.id}>
                  <Flex justifyContent={"space-between"}>
                    <Text fontSize={"2xs"} fontWeight={"bold"}>
                      {project.projectName}
                    </Text>
                    <Text fontSize={"2xs"} fontWeight={"bold"}>
                      {project.date}
                    </Text>
                  </Flex>
                  <Text textAlign={"left"} fontSize={"2xs"}>
                    <Box
                      css={`
                        p:not(:last-child) {
                          min-height: 12px;
                        }
                        ul {
                          padding-left: 12px;
                        }
                      `}
                      dangerouslySetInnerHTML={{ __html: project.description }}
                    />
                  </Text>
                </Box>
              );
            })}
          </Flex>
        </>
      )}
    </>
  );
}

export default ProjectPreview;

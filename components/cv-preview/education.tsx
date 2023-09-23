"use client";

import useEducation from "@/stores/education";

import { Box, Text, Flex } from "@chakra-ui/react";

function EducationPreview() {
  const {
    title: educationTitle,
    educations,
    visible,
  } = useEducation((state) => state);

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
            {educationTitle}
          </Text>

          <Flex flexDirection={"column"} gap={2} mb={2}>
            {(educations || []).map((education) => {
              return (
                <Box key={education.id}>
                  <Text fontSize={"2xs"} fontWeight={"bold"}>
                    {education.schoolName}
                  </Text>

                  <Flex justifyContent={"space-between"}>
                    <Text fontSize={"2xs"} fontWeight={"bold"}>
                      {education.degreeAndMajor} - {education.gpa}
                    </Text>
                    <Text fontSize={"2xs"} fontWeight={"bold"}>
                      {education.date}
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
                      dangerouslySetInnerHTML={{
                        __html: education.description,
                      }}
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

export default EducationPreview;

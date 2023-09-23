"use client";

import useProfessionalExperience from "@/stores/professional-experience";
import { Box, Text, Flex } from "@chakra-ui/react";

function ProfessionalExperiencePreview() {
  const {
    title: workExperienceTitle,
    experiences,
    visible,
  } = useProfessionalExperience((state) => state);
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
            {workExperienceTitle}
          </Text>
          <Flex flexDirection={"column"} gap={2} mb={2}>
            {(experiences || []).map((experience) => {
              return (
                <Box key={experience.id}>
                  <Flex justifyContent={"space-between"} key={experience.id}>
                    <Text fontSize={"2xs"} fontWeight={"bold"}>
                      {experience.companyName}
                    </Text>
                    <Text fontSize={"2xs"} fontWeight={"bold"}>
                      {experience.location}
                    </Text>
                  </Flex>
                  <Flex justifyContent={"space-between"}>
                    <Text fontSize={"2xs"} fontWeight={"bold"}>
                      {experience.jobTitle}
                    </Text>
                    <Text fontSize={"2xs"} fontWeight={"bold"}>
                      {experience.date}
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
                        __html: experience.description,
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

export default ProfessionalExperiencePreview;

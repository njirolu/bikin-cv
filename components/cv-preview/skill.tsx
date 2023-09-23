"use client";

import useSkill from "@/stores/skill";

import { Box, Text } from "@chakra-ui/react";

function SkillPreview() {
  const { title: skillTitle, skills, visible } = useSkill((state) => state);

  return (
    <>
      <Text
        borderBottom={"1px solid #000"}
        fontSize={"xs"}
        fontWeight={"bold"}
        pb={"2px"}
        mb={"8px"}
      >
        {skillTitle}
      </Text>

      <Text textAlign={"left"} fontSize={"2xs"} mt={"2px"}>
        <Box
          css={`
            p:not(:last-child) {
              min-height: 12px;
            }
            ul {
              padding-left: 12px;
            }
          `}
          dangerouslySetInnerHTML={{ __html: skills }}
        />
      </Text>
    </>
  );
}

export default SkillPreview;

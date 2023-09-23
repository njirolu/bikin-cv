"use client";

import useZoom from "@/stores/zoom";
import { Box, Flex } from "@chakra-ui/react";
import BasicPreview from "./basic";
import ProfessionalExperiencePreview from "./professional-experience";
import EducationPreview from "./education";
import ProjectPreview from "./project";
import SkillPreview from "./skill";

function CVPreview() {
  const zoom = useZoom((state) => state.zoom);
  const scale = zoom / 100;

  return (
    <Box
      className="print-area"
      transform={`scale(${scale})`}
      transformOrigin={"top left"}
    >
      <Box
        width={"215.9mm"}
        height={"279.4mm"}
        background={"white"}
        className="print"
        padding={"1.52cm"}
      >
        <Flex flexDirection={"column"}>
          <BasicPreview />
          <EducationPreview />
          <ProfessionalExperiencePreview />
          <ProjectPreview />
          <SkillPreview />
        </Flex>
      </Box>
    </Box>
  );
}

export default CVPreview;

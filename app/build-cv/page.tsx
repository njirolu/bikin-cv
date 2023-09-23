import CVForm from "@/components/cv-form";
import CVPreview from "@/components/cv-preview";
import ControlBar from "@/components/cv-preview/control-bar";
import { Box, Flex } from "@chakra-ui/react";

function BuildCVPage() {
  return (
    <Flex
      height={"calc(100vh - 80px)"}
      width={"100%"}
      flexDirection={{ base: "column", lg: "row" }}
      className="print-area"
      gap={{ base: 10, lg: "unset" }}
    >
      <Flex
        minW={{ md: "400px" }}
        overflowX={{ base: "initial", lg: "hidden" }}
        overflowY={{ base: "initial", lg: "scroll" }}
        pr={{ lg: "40px" }}
        className={"not-print"}
        css={`
          /* width */
          ::-webkit-scrollbar {
            width: 10px;
          }

          /* Track */
          ::-webkit-scrollbar-track {
            background: #fff2dc;
          }

          /* Handle */
          ::-webkit-scrollbar-thumb {
            background: #ffebc8;
          }

          /* Handle on hover */
          ::-webkit-scrollbar-thumb:hover {
            background: #f3c679;
          }
        `}
      >
        <CVForm />
      </Flex>

      <Flex
        flexDirection={"column"}
        width={{base: "100%", md: "calc(100% - 400px)" }}
        className="print-area"
      >
        <Box
          className="print-area"
          overflowX={"scroll"}
          overflowY={"scroll"}
          pl={{ base: "unset", lg: "50px" }}
          css={`
            ::-webkit-scrollbar {
              display: none;
            }
            -ms-overflow-style: none;
            scrollbar-width: none;
          `}
        >
          <CVPreview />
        </Box>
        <ControlBar />
      </Flex>
    </Flex>
  );
}

export default BuildCVPage;

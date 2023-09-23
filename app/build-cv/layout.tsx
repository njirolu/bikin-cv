import Navbar from "@/components/ui/navbar";
import { Flex } from "@chakra-ui/react";

function BuildCVLayout({ children }: { children: React.ReactNode }) {
  return (
    <Flex
      flexDirection={"column"}
      maxWidth={"95%"}
      mx={"auto"}
      className="print-area"
    >
      <Navbar />
      {children}
    </Flex>
  );
}

export default BuildCVLayout;

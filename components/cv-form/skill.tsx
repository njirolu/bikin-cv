"use client";

import {
  Box,
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
  EyeClosedIcon,
  LightningBoltIcon
} from "@radix-ui/react-icons";
import Editor from "@/components/editor";
import useSkill from "@/stores/skill";

function SkillForm() {
  const {
    title: skillTitle,
    skills,
    update,
    setTitle,
    toggle,
    visible,
  } = useSkill((state) => state);

  return (
    <Card>
      <CardHeader pb={0}>
        <Flex justifyContent={"space-between"} alignItems={"center"} gap={2}>
          <Flex alignItems={"center"} gap={2} width={"100%"}>
            <LightningBoltIcon height={"auto"} width={24} />
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
              value={skillTitle}
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
          <Flex flexDirection={"column"} gap={"4"} pb={"8px"}>
            <Box>
              <FormControl>
                <FormLabel>Description</FormLabel>
                <Editor content={skills} onUpdate={update} />
              </FormControl>
            </Box>
          </Flex>
        </Stack>
      </CardBody>
    </Card>
  );
}

export default SkillForm;

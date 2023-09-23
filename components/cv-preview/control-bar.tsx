"use client";

import useZoom from "@/stores/zoom";
import {
  Button,
  Flex,
  Show,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  Text,
} from "@chakra-ui/react";
import {
  DownloadIcon,
  MagnifyingGlassIcon,
  TransformIcon,
} from "@radix-ui/react-icons";

function ControlBar() {
  const zoom = useZoom((state) => state.zoom);
  const setZoom = useZoom((state) => state.setZoom);

  return (
    <Flex
      w={"100%"}
      height={"80px"}
      alignItems={"center"}
      borderTop={"2px solid #fff2dc"}
      pl={{ base: "initial", lg: "40px" }}
      className={"not-print"}
    >
      <Flex justifyContent={"space-between"} width={"100%"}>
        <Flex alignItems={"center"} gap={4}>
          <MagnifyingGlassIcon height={"18"} width={"18"} />
          <Slider
            w={"150px"}
            aria-label="slider-zoom"
            min={50}
            value={zoom}
            max={150}
            onChange={setZoom}
          >
            <SliderTrack>
              <SliderFilledTrack />
            </SliderTrack>
            <SliderThumb />
          </Slider>
          <Text>{`${zoom}%`}</Text>

          <Button
            size={"sm"}
            leftIcon={<TransformIcon />}
            css={`
              @media screen and max-width("768px") {
                span {
                  margin-right: 0 !important;
                }
              }
            `}
            onClick={() => setZoom(100)}
          >
            <Show above="md">Fit Content</Show>
          </Button>
        </Flex>

        <Button
          size={"sm"}
          leftIcon={<DownloadIcon />}
          css={`
            @media screen and max-width("768px") {
              span {
                margin-right: 0 !important;
              }
            }
          `}
          onClick={() => window.print()}
        >
          <Show above="md">
            <Text>Download as PDF</Text>
          </Show>
        </Button>
      </Flex>
    </Flex>
  );
}

export default ControlBar;

import { Box, GridItem, Image, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";

const Main = () => {
  return (
    <Box>
      <SimpleGrid columns={4} gap={6}>
        <GridItem>
          <Box position="relative" roundedBottom="10px">
            <Image
              roundedTop="10px"
              src="https://s.mxmcdn.net/images-storage/albums5/5/9/0/5/6/5/32565095_500_500.jpg"
            />
            <Text pos="absolute" bottom="0px">
              Pencarian
            </Text>
            <Box bg="white" pos="relative" roundedBottom="10px">
              <Box
                pos="absolute"
                width="full"
                height="full"
                zIndex="2"
                bg="rgba(0,0,0,0.38)"
                roundedBottom="10px"
                style={{
                  backdropFilter: "blur(12px)",
                }}
              >
                <Box zIndex={3} px="4" py="8px">
                  <Text color="whiteAlpha.600" fontWeight="bold" fontSize="xs">
                    PLAYLIST
                  </Text>
                  <Text fontWeight="bold">Pendaman</Text>
                </Box>
              </Box>
              <Image
                roundedBottom="10px"
                fit="cover"
                width="100%"
                height="100px"
                src="https://s.mxmcdn.net/images-storage/albums5/5/9/0/5/6/5/32565095_500_500.jpg"
              />
            </Box>
          </Box>
        </GridItem>
      </SimpleGrid>
    </Box>
  );
};

export default Main;

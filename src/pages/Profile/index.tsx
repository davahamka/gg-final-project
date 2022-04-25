import { Box, Heading, Image, Text } from "@chakra-ui/react";
import React, { useContext } from "react";
import Layout from "../../components/Layout";
import { AppContext } from "../../context/AppContext";
import { useAppSelector } from "../../hooks";

const Profile = () => {
  const { colorTop } = useContext(AppContext);
  const { dataProfile } = useAppSelector((state) => state.auth);

  console.log(dataProfile);

  return (
    <Layout>
      <Box px={{ base: "20px", lg: "48px" }} bg={colorTop} pb="48px">
        <Box
          color="white"
          pt="120px"
          display="flex"
          experimental_spaceX={"10px"}
        >
          <Image
            src={dataProfile?.images[0].url}
            rounded="full"
            width="240px"
          />
          <Box alignSelf="end">
            <Heading fontSize="2xl" color="whiteAlpha.900">
              Profile
            </Heading>
            <Text fontSize="5xl" fontWeight="black">
              {dataProfile?.display_name}
            </Text>
            <Box display="flex" experimental_spaceX="6px">
              <Text>{dataProfile?.country}</Text>
              <Text>- {dataProfile?.followers.total} followers</Text>
            </Box>
          </Box>
        </Box>
      </Box>
    </Layout>
  );
};

export default Profile;

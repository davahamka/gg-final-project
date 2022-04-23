import { Box, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import React, { useEffect, useMemo, useState } from "react";
import { FiChevronLeft, FiChevronRight, FiSearch } from "react-icons/fi";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { searchTracks, setSearch } from "../../modules/tracks/trackSlice";
import debounce from "lodash.debounce";

const MainHeader = () => {
  const [search, setSearch] = useState("");
  const dispatch = useAppDispatch();
  const { token } = useAppSelector((state) => state.auth);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    if (search.length > 0) {
      dispatch(searchTracks({ token: token as string, q: search }));
    }
  }, [search]);

  return (
    <Box
      height="70px"
      display="flex"
      alignItems="center"
      px={{ base: "20px", lg: "48px" }}
      justifyContent="space-between"
    >
      <Box display="flex" experimental_spaceX="6px">
        <Box
          width={{ base: "32px", lg: "40px" }}
          height={{ base: "32px", lg: "40px" }}
          bg="#1F1F22"
          borderRadius="3xl"
          alignItems="center"
          justifyContent="center"
          display="flex"
          cursor="pointer"
          borderWidth="1px"
          borderColor="rgba(235, 235, 255,0.05)"
        >
          <FiChevronLeft size="1.2em" color="#fff" />
        </Box>
        <Box
          width={{ base: "32px", lg: "40px" }}
          height={{ base: "32px", lg: "40px" }}
          bg="#1F1F22"
          borderRadius="3xl"
          alignItems="center"
          justifyContent="center"
          display="flex"
          cursor="pointer"
          borderWidth="1px"
          borderColor="rgba(235, 235, 255,0.05)"
        >
          <FiChevronRight size="1.2em" color="#fff" />
        </Box>
      </Box>
      <Box display="flex" alignItems="center" experimental_spaceX="6px">
        <InputGroup rounded="">
          <InputLeftElement pointerEvents="none">
            <FiSearch color="#fff" />
          </InputLeftElement>
          <Input
            width={{ lg: "280px" }}
            bg="#1F1F22"
            placeholder="Search"
            color="#fff"
            value={search}
            onChange={handleChange}
            borderColor="rgba(235, 235, 255,0.05)"
            rounded="xl"
          />
        </InputGroup>
        <Box
          minW={{ base: "32px", lg: "40px" }}
          minH={{ base: "32px", lg: "40px" }}
          width={{ base: "32px", lg: "40px" }}
          height={{ base: "32px", lg: "40px" }}
          bg="#1F1F22"
          borderRadius="3xl"
          alignItems="center"
          justifyContent="center"
          display="flex"
          cursor="pointer"
          borderWidth="1px"
          borderColor="rgba(235, 235, 255,0.05)"
        >
          <FiChevronRight size="1.2em" color="#fff" />
        </Box>
      </Box>
    </Box>
  );
};

export default MainHeader;

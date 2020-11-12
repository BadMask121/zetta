import React from "react";
import { Box, Text } from "@chakra-ui/core";
import AboutDetailsList from "components/list/AboutDetailsList/index";

const AboutB = () => {
  return (
    <Box
      backgroundImage="url(/assets/images/abt-1.png)"
      backgroundSize="cover"
      backgroundRepeat="no-repeat"
      width="auto"
      height="100vh"
      d="flex"
      flexDirection="column"
      marginTop="90px"
    >
      <Box
        background="rgba(0, 0, 0, 0.43)"
        height="inherit"
        padding="90px 139px"
      >
        <Text
          color="#5863F8"
          fontWeight={700}
          fontSize="14px"
          textTransform="uppercase"
        >
          About us
        </Text>
        <Text>We bring you the finest details</Text>
        <Box>
          <AboutDetailsList />
        </Box>
      </Box>
    </Box>
  );
};

export default AboutB;

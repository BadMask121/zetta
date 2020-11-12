import React from "react";
import { Box } from "@chakra-ui/core";

import RightArrow from "public/assets/svgs/arrow-right.svg";
import LeftArrow from "public/assets/svgs/arrow-left.svg";

const AboutDetailsList = () => {
  return (
    <Box>
      <Box>
        <LeftArrow />
      </Box>
      <Box>hello</Box>
      <Box>
        <RightArrow />
      </Box>
    </Box>
  );
};

export default AboutDetailsList;

import { Grid, Box, Text } from "@chakra-ui/core";
import React from "react";
import RightArrow from "public/assets/svgs/arrow-right.svg";
import Button from "components/button";

const AboutA = () => {
  return (
    <Grid
      padding="20px 139px"
      marginTop="128px"
      templateColumns="1fr 1fr"
      width="auto"
    >
      <Box width="444px">
        <Text
          color="#5863F8"
          fontWeight={700}
          fontSize="14px"
          textTransform="uppercase"
        >
          About us
        </Text>
        <Text
          fontWeight={700}
          fontSize="42px"
          color="#000000"
          paddingBottom="10px"
        >
          Trust and quality are our atuus
        </Text>
        <Text fontWeight={500} fontSize="16px" paddingBottom="10px">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </Text>
        <Text fontWeight="normal" fontSize="14px" paddingBottom="20px">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </Text>
        <Button
          variant="primary"
          fontSize="14px"
          padding="15px 45px"
          width="fit-content"
        >
          <Text marginRight="10px">read more</Text>
          <RightArrow />
        </Button>
      </Box>
      <Grid
        templateColumns="repeat(3, 1fr)"
        gap={4}
        width="100%"
        height="500px"
      >
        <Box
          backgroundImage="url(/assets/images/house-2.jpg)"
          backgroundPosition="center"
          gridColumn="1 / span 1"
          backgroundSize="cover"
          width="300px"
        />
        <Box
          backgroundImage="url(/assets/images/house-1.jpg)"
          backgroundPosition="center"
          backgroundSize="cover"
          width="100%"
        />
        <Box
          backgroundImage="url(/assets/images/house-3.jpg)"
          backgroundPosition="center"
          gridColumn="1 / span 10"
          backgroundSize="cover"
          width="100%"
        />
      </Grid>
    </Grid>
  );
};

export default AboutA;

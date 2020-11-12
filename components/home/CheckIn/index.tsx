import { Box, Flex, Text } from "@chakra-ui/core";
import Button from "components/button";
import Input from "components/input";
import Link from "components/link";
import Send from "public/assets/svgs/send.svg";
import RightArrow from "public/assets/svgs/arrow-right.svg";
import LeftArrow from "public/assets/svgs/arrow-left.svg";
import React from "react";

import style from "./CheckIn.module.css";

const CheckIn = () => {
  return (
    <Box
      backgroundImage="url(/assets/images/check-in.png)"
      backgroundSize="cover"
      backgroundRepeat="no-repeat"
      width="auto"
      height="100vh"
      padding="20px 139px"
      d="flex"
      flexDirection="column"
    >
      <Box d="inline-flex" justifyContent="space-between" width="100%">
        <Text color="white" fontWeight={600}>
          Zetta Hotel
        </Text>
        <Box>
          <ul className={style.links}>
            <Link href="/">Home</Link>
            <Link href="/room" hasChildren>
              Rooms
            </Link>
            <Link href="/restuarant">Restuarant</Link>
            <Link href="/aboutus">About Us</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/contact">Contact</Link>
          </ul>
        </Box>
      </Box>
      <Box color="white" width="578px" margin="auto 0">
        <Text fontSize="62px" fontWeight={700} paddingBottom="20px">
          The best hotel you will ever need
        </Text>
        <Text fontSize="14px" fontWeight="normal">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </Text>
      </Box>
      <Box position="relative">
        <Box
          display="block"
          position="absolute"
          top="-120px"
          width="100%"
          height="148px"
        >
          <Box float="right" color="#fff" height="52px">
            <Button variant="secondary" height="inherit">
              <LeftArrow />
            </Button>
            <Button variant="primary" height="inherit">
              <RightArrow />
            </Button>
          </Box>
          <Flex
            background="white"
            boxShadow=" 0px 15px 30px #0000001A"
            padding="0px 92px"
            width="100%"
            alignItems="center"
            height="inherit"
          >
            <Box className={style.CheckInInputGroup} width="100%">
              <Text>Check In Date</Text>
              <Input placeholder="check in date" />
            </Box>
            <Box className={style.CheckInInputGroup} width="100%">
              <Text>Check Out Date</Text>
              <Input placeholder="check out date" />
            </Box>
            <Box className={style.CheckInInputGroup} width="100%">
              <Text>Rooms</Text>
              <Flex d="inline-flex">
                <Input placeholder="rooms" />
                <Button marginLeft="23px" width="58px" variant="primary">
                  <Send />
                </Button>
              </Flex>
            </Box>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};

export default CheckIn;

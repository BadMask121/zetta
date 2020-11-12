import { Box, ChakraProvider } from "@chakra-ui/core";
import AboutUs from "components/home/AboutUs";
import CheckIn from "components/home/CheckIn";
import Head from "next/head";
import React from "react";
import { ThemeProvider } from "styled-components";

import { GlobalStyles } from "../theme/global";
import { lightTheme } from "../theme/theme";

export default function Home() {
  return (
    <ThemeProvider theme={lightTheme}>
      <ChakraProvider resetCSS>
        <Head>
          <title>Zetta</title>
          <link rel="icon" href="/favicon.ico" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <GlobalStyles />
        <Box>
          <CheckIn />
          <AboutUs />
          {/* <Testimonials /> */}
          {/* <Restuarants /> */}
          {/* <Blog /> */}
          {/* <Photos /> */}
          {/* <Footer/> */}
        </Box>
      </ChakraProvider>
    </ThemeProvider>
  );
}

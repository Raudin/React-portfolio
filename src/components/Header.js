import { useColorMode } from '@chakra-ui/color-mode'
import { Stack, Square, Flex, Box, Text } from '@chakra-ui/layout';
import { useMediaQuery } from '@chakra-ui/media-query';
import React from 'react'

function Header() {

  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";

  const {isNotSmallerScreen } = useMediaQuery("(min-width:600px)");

  return (
    <Stack>
      <Square position="absolute" bg="blue.100" opacity="0.10" w="200px" h="200px" alignSelf="flex-end"></Square>
      <Flex direction={ isNotSmallerScreen ? "row" : "column"} spacing="150px" p={isNotSmallerScreen ? "32": "0"} alignSelf="flex-start">
        <Box mt= {isNotSmallerScreen ? "0": 16} align='flex-start'>
          <Text fontSize="3xl" fontWeight="semibold">Hello, I am </Text>
          <Text fontSize="7xl" fontWeight="bold" bgGradient="linear(to-r, cyan.400, blue.500, green.600)" >MARK MUGA </Text>
          <Text color={ isDark ? "gray.500":"gray.500"}>Software Engineer, Fullstack Developer,CyberSecurity, Entrepreneur </Text>
        </Box>
        

      </Flex>

    </Stack>
  )
}

export default Header
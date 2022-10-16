import { useColorMode } from '@chakra-ui/color-mode'
import { Stack, Flex, Box, Text} from '@chakra-ui/layout';
import { useMediaQuery } from '@chakra-ui/media-query';
import React from 'react'

function Header() {

  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";

  const {isNotSmallerScreen } = useMediaQuery("(min-width:600px)");

  return (
    
    <Stack>
      <Flex direction={ isNotSmallerScreen ? "row" : "column"} spacing="200px" p={isNotSmallerScreen ? "32": "0"} alignSelf="flex-start">
        <Box mt= {isNotSmallerScreen ? "0": 16} align='flex-start'>
          <Text fontSize="5xl" fontWeight="semibold">Hello 👋🏿, I'm </Text>
          <Text fontSize="7xl" fontWeight="bold" bgGradient="linear(to-r, cyan.400, blue.500, green.600)" bgClip='text'>MARK MUGA </Text>
          <Text color={ isDark ? "gray.500":"gray.500"}>Software Engineer, Fullstack Developer, CyberSecurity, Entrepreneur </Text>
        </Box>
      </Flex>

    </Stack>
  )
}

export default Header
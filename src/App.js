import { IconButton } from "@chakra-ui/button"
import { Flex, VStack, Heading, Spacer } from "@chakra-ui/layout";
import { useColorMode } from "@chakra-ui/color-mode"
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa"
import {  MdLightMode, MdDarkMode } from "react-icons/md";
import Header from "./components/Header";

function App(){

  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";

  return (
    <VStack p={5}> 
      <Flex w="100%">
        <Heading
          ml="8" size="md" fontWeight="semibold" color="cyan.400">markmuga</Heading>

      
      <Spacer></Spacer>
      <IconButton icon={<FaLinkedin/>} isRound='true' onClick={toggleColorMode}></IconButton>
      <IconButton ml={2} icon={<FaGithub/>} isRound='true' onClick={toggleColorMode}></IconButton>
      <IconButton ml={2}  icon={<FaInstagram/>} isRound='true' onClick={toggleColorMode}></IconButton>
      <IconButton ml={6} icon={isDark? <MdLightMode/> : <MdDarkMode/>} isRound="true" onClick={toggleColorMode}></IconButton>
      </Flex>
      <Header></Header>
    </VStack>
  );
}

export default App;

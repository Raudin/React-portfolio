import { IconButton } from "@chakra-ui/button"
import { Flex, VStack, Heading, Spacer } from "@chakra-ui/layout";
import { useColorMode } from "@chakra-ui/color-mode"
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa"
import {  MdLightMode, MdDarkMode } from "react-icons/md";
import Header from "./components/Header";
import Profile from "./components/Profile";
import Social from "./components/Social"

function App(){

  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";

  return (
    <VStack p={5}> 
      <Flex w="100%">
        <Heading
          ml="8" size="md" fontWeight="semibold" color="cyan.500">markmuga</Heading>

      
      <Spacer></Spacer>
      <IconButton ml={1} icon={<FaLinkedin/>} isRound='true' onClick={()=> window.open("https://www.linkedin.com/in/mark-muga-74a665111/")}> </IconButton> 
      <IconButton ml={1} icon={<FaGithub/>} isRound='true' onClick={()=> window.open("https://github.com/Raudin")}></IconButton>
      <IconButton ml={1}  icon={<FaInstagram/>} isRound='true' onClick={()=> window.open("https://instagram.com/marrkmuga")}></IconButton>
      <IconButton ml={6} icon={isDark? <MdLightMode/> : <MdDarkMode/>} isRound="true" onClick={toggleColorMode}></IconButton>
      </Flex>
      <Header></Header>
      <Social></Social>
      <Profile></Profile>
    </VStack>
  );
}

export default App;

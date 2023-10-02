import { Customcard } from "../../components/Customcard"
import campus_plo from "../../assets/campus_plo.jpeg"
import {Heading, Button,Text,Box, Card ,Image, Stack, HStack, Icon} from "@chakra-ui/react"
import {FcGoogle} from "react-icons/fc"
import { signInWithGoogle } from "../../Firebase"
import { Link } from "react-router-dom"
const Login = () => {
  return (
    
    <Customcard maxW="70vw"mx="15vw" my={{base:"15vh", lg:"25vh"}} >
        <HStack display="flex" justify="space-around" flexDirection={{base:"column", lg:"row"}}>
        <Heading as="h1" fontSize={{base:"30px", lg:"80px"}} pt="1rem" textAlign="Center" color="#257bdd">
            CAMPUS <br/>
            PLACEMENTS
        </Heading>
        <Stack paddingLeft={{base:"10x", lg:"14px"}} display="flex">
        <Image src={campus_plo} width="350px" marginTop="2" borderRadius="10"></Image>
        <Link to="/dash">
       <Button onClick={signInWithGoogle} marginLeft={{base:"12px", lg:"25%"}} bg="#96d3ff" _hover={{
            bg:"#8cabcc" 
        }}fontSize={{base:"22px", lg:"24px"}} fontWeight="500" px="6" marginTop="6">Login with &nbsp;<Icon as={FcGoogle}/></Button>
       </Link>
       </Stack>
       </HStack>
    </Customcard>
   
  );
};

export default Login
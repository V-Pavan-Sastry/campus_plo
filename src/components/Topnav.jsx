import {Menu,MenuButton,Box,HStack,Button,Icon,Heading,Image,Text} from "@chakra-ui/react"
import {FaRegUserCircle,FaBars} from "react-icons/fa"
import MyCredentials from "../pages/MyCredentials/MyCredentials";
import { Link } from "react-router-dom";

const Topnav = ({title,name,onOpen}) => {
    const fullName = localStorage.getItem("name");
const words = fullName.split(" ");
  return (
    <Box bg="#FFFF" px="4">
   <HStack boxShadow="xl" h="16" justify="space-between" >
    <Icon as={FaBars} onClick={onOpen} display={{
        base:"block",
        lg:"none",
    }}/>
        <Heading fontSize="28px">{title}</Heading>
        
        <Menu>
        <Link to="/MyCredentials">
            <MenuButton as={Button} leftIcon={<Image borderRadius="full" src={localStorage.getItem("profilepic")} width="30px"/>} bg="#96d3ff" color="#171717" _hover={{
                bg:"#61a9fa",
            }}>
                <Text fontSize="20px" px="2px">{words.slice(0, 2).join(" ")}</Text>
            </MenuButton></Link>
        </Menu>
   </HStack></Box>
  )
};

export default Topnav
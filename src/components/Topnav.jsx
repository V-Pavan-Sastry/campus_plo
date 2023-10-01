import {Menu,MenuButton,Box,HStack,Button,Icon,Heading} from "@chakra-ui/react"
import {FaRegUserCircle,FaBars} from "react-icons/fa"
const Topnav = ({title,name,onOpen}) => {
  return (
    <Box bg="#FFFF" px="4">
   <HStack boxShadow="xl" h="16" justify="space-between" >
    <Icon as={FaBars} onClick={onOpen} display={{
        base:"block",
        lg:"none",
    }}/>
        <Heading fontSize="28px">{title}</Heading>
        <Menu>
            <MenuButton as={Button} leftIcon={<FaRegUserCircle/>} bg="#96d3ff" color="#171717" _hover={{
                bg:"#61a9fa",
            }}>
                {name}
            </MenuButton>
        </Menu>
   </HStack></Box>
  )
};

export default Topnav
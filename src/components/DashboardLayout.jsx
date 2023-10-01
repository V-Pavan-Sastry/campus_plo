import SideDrawer from "./SideDrawer";
import Topnav from "./Topnav"
import Sidenav from "./sidenav"
import {Box,Flex,Container,useDisclosure} from "@chakra-ui/react"
const DashboardLayout = ({title, name ,children}) => {
    const {isOpen,onOpen,onClose} = useDisclosure();
  return (
    <Flex>
        <Box display={{
        base:"none",
        lg:"flex"
    }}>
        <Sidenav/>
        </Box>
        <SideDrawer isOpen={isOpen} onClose={onClose}/>
        <Box flexGrow={1}>
            <Topnav title={title} name={name} onOpen={onOpen}/>
            <Container mt="6" maxW="80 rem" >{children}</Container>
        </Box>
    </Flex>
  );
};

export default DashboardLayout
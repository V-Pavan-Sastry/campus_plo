import {Box,Icon,Text,Stack,HStack,Heading} from "@chakra-ui/react"
import {RxDashboard} from "react-icons/rx"
import {BiSupport} from "react-icons/bi"
import {GrDocumentTransfer} from "react-icons/gr"
import {Link} from "react-router-dom"
const Sidenav = () => {

    const navlinks =[
        {
            icon:RxDashboard,
            text:"DashBoard",
            link:"/"
        },
        {
            icon:GrDocumentTransfer,
            text:"Applications",
            link:"/applications"
        }
    ];
  return (
    <Stack bg="#FFFF" justify="space-between" boxShadow={{base:"none",lg:"lg"}} w={{base:"full",lg:"16rem"}} h="100vh" colSpan={{base:"2",lg:"4"}}>
        <Box><Heading as="h1" fontSize="20px" pt="2.5rem" textAlign="Center" color="#257bdd">
            CAMPUS <br/>
            PLACEMENTS
        </Heading>
        <Box mt="6" mx="3">
        {navlinks.map((nav)=>(
            <Link to={nav.link} key={nav.text}>
            <HStack   py="3" px="4" borderRadius="10px" _hover={{
                bg:"#F3F3F7",
                color:"#171717"
            }}
            fontWeight="medium" color="#797E82">
                <Icon as={nav.icon}/>
                <Text fontSize="16px" >{nav.text}</Text>
            </HStack>
            </Link>
        )
        )}
        </Box></Box>
        <Link to="/support">
        <Box mt="6" mx="3" mb="3">
        <HStack py="3" px="4" borderRadius="10px" _hover={{
                bg:"#F3F3F7",
                color:"#171717"
            }}
            fontWeight="medium" color="#797E82">
                <Icon as={BiSupport}/>
                <Text fontSize="16px" >Support</Text>
            </HStack>
            </Box>
            </Link>
    </Stack>
  );
};

export default Sidenav
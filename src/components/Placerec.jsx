import {HStack,Stack,Text,Icon,Button} from "@chakra-ui/react"
import React from "react"
import {AiOutlineInfoCircle} from "react-icons/ai"
import {FcRefresh} from "react-icons/fc"

const Placerec = () => {
  return (
    <HStack mx="auto" bg="#ffff" borderRadius="xl" p="4" justify="space-between" flexDirection={{
        md:"row",
        base:"column"
    }} colSpan={{md:2,
    base:4}} maxW={{
        md:"100vw",
        base:"250px"
    }}>
        <Stack>
            <HStack color="#535D66">
                <Text fontSize="18px">Tier 2</Text>
                <Icon as={AiOutlineInfoCircle}/>
                <Text fontSize="10px">more than 6 LPA</Text>
            </HStack>
            <Text align="center" fontSize={{base:"22px", lg:"24px"}} fontWeight="500">No Offer</Text>
        </Stack>
        <Stack>
            <HStack color="#535D66">
                <Text fontSize="18px">Tier 1</Text>
                <Icon as={AiOutlineInfoCircle}/><Text fontSize="10px">less than 6 LPA</Text>
            </HStack>
            <Text align="center" fontSize={{base:"22px", lg:"24px"}} fontWeight="500">No Offer</Text>
        </Stack>
        <Stack>
            <HStack color="#535D66">
                <Text fontSize="18px">Total Companies visited</Text>
            </HStack>
            <Text align="center" fontSize={{base:"22px", lg:"24px"}} fontWeight="500">44</Text>
        </Stack>
        <Stack>
            <HStack color="#535D66">
                <Text fontSize="18px">Open Applications</Text>
            </HStack>
            <Text align="center" fontSize={{base:"22px", lg:"24px"}}fontWeight="500">7</Text>
        </Stack>
        <Button bg="#96d3ff" _hover={{
            bg:"#e0efff" 
        }}fontSize={{base:"22px", lg:"24px"}} fontWeight="500">
            <Icon as={FcRefresh}/> Refresh
        </Button>
    </HStack>
  )
}

export default Placerec
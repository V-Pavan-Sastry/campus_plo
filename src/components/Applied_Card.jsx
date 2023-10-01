import { Customcard } from "./Customcard"
import {Text,Stack,Flex,Grid,Icon,Divider,Button} from "@chakra-ui/react"
import {PiNumberCircleOneFill,PiNumberCircleTwoFill} from "react-icons/pi"
import {BiRupee} from "react-icons/bi"
const Applied_Card = () => {
    const applications = [{
        id:1,
        icon:PiNumberCircleTwoFill,
        text:"Google",
        pkg:"25 LPA",
        time_stamp:"07-10-2023 7:30 PM",
        type:"Internship + FTE"
    },
    {
        id:2,
        icon:PiNumberCircleTwoFill,
        text:"NVIDIA Software",
        pkg:"75 K",
        time_stamp:"07-10-2023 7:30 PM",
        type:"Internship + PBC"
    },
    {
        id:3,
        icon:PiNumberCircleTwoFill,
        text:"NXP",
        pkg:"15LPA",
        time_stamp:"07-10-2023 7:30 PM",
        type:"Internship + PBC"
    },
]

  return (
    <Customcard h="full">
        <Text fontSize="sm" color="#535D66" mb={6}> Applied Opprtunities</Text>
        <Stack spacing={4}>
            {applications.map((application,i)=>(
                <div key={application.id}>
                    {i!= "0" && <Divider/>}
                <Flex  gap={4} w="full" mt={4}>
                    <Grid placeItems="center" bg="#cde8ff"boxSize={10} borderRadius="full">
                        <Icon as={application.icon} fontSize="33px"></Icon>
                    </Grid>
                    <Flex justify="space-between" w="full">
                        <Stack  spacing={0}>
                            <Text fontSize="h5" color="black" fontWeight="500">
                                {application.text}
                            </Text>
                            <Text fontSize="sm1" color="#535D66">
                                {application.time_stamp}
                            </Text>
                        </Stack>
                        <Stack spacing={0}>
                        <Text fontSize="sm2" color="black" align="right" fontWeight="500">
                        <Icon as={BiRupee}/>{application.pkg}
                            </Text>
                            <Text fontSize="sm1" color="#535D66">
                                {application.type}
                            </Text>
                        </Stack>
                    </Flex>
                </Flex></div>
            ))}
        </Stack>
        <Button mt="6"w="full" colorScheme="gray" >
            View All
        </Button>
    </Customcard>
  )
}

export default Applied_Card
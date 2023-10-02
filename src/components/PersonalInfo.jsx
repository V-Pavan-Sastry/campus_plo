import React from 'react'
import { Customcard } from './Customcard'
import {Divider,Text,Heading,HStack, Image ,Stack} from '@chakra-ui/react'
const PersonalInfo = () => {
  return (
    <Customcard>
        <HStack display="flex" align="center" justify="space-between" spacing={{base:"2px", lg:"2px"}} flexDirection={{base:"column", lg:"row"}}>
        <Image borderRadius="full" src={localStorage.getItem("profilepic")} width="80px"/>
        <Stack align="center">
        <Heading as="h1" fontSize="20px" pt="2.5rem" textAlign="Center" color="black">
            {localStorage.getItem("name")}
        </Heading>
        <Text color="#535D66"fontSize="16px">{localStorage.getItem("email")}</Text>
        <Text color="#535D66"fontSize="16px">{localStorage.getItem("phno")}</Text>
        </Stack>
        </HStack>
        <Stack spacing={4}>
                <Stack  gap={3} w="full" mt={3} alignItems="center">
                <Divider/>
                    <HStack justify="space-between" w="full">
                            <Text fontSize={{base:"20x", lg:"16px"}} color="black" fontWeight="500">
                                Full Name
                            </Text>
                            <Text fontSize={{base:"20x", lg:"16px"}} color="#535D66">
                            Not Available
                            </Text>
                    </HStack>
                    <Divider/>
                    <HStack justify="space-between" w="full">
                            <Text fontSize={{base:"20x", lg:"16px"}} color="black" fontWeight="500">
                                First Name
                            </Text>
                            <Text fontSize={{base:"20x", lg:"16px"}} color="#535D66">
                            Not Available
                            </Text>
                    </HStack>
                    <Divider/>
                    <HStack justify="space-between" w="full">
                            <Text fontSize={{base:"20x", lg:"16px"}} color="black" fontWeight="500">
                                Middle Name
                            </Text>
                            <Text fontSize={{base:"20x", lg:"16px"}} color="#535D66">
                            Not Available
                            </Text>
                    </HStack>
                    <Divider/>
                    <HStack justify="space-between" w="full">
                            <Text fontSize={{base:"20x", lg:"16px"}} color="black" fontWeight="500">
                                Last Name
                            </Text>
                            <Text fontSize={{base:"20x", lg:"16px"}} color="#535D66">
                            Not Available
                            </Text>
                    </HStack>
                    <Divider/>
                    <HStack justify="space-between" w="full">
                            <Text fontSize={{base:"20x", lg:"16px"}} color="black" fontWeight="500">
                                Date of Birth
                            </Text>
                            <Text fontSize={{base:"20x", lg:"16px"}} color="#535D66">
                            Not Available
                            </Text>
                    </HStack>
                    <Divider/>
                    <HStack justify="space-between" w="full">
                            <Text fontSize={{base:"20x", lg:"16px"}} color="black" fontWeight="500">
                                Year of Passing
                            </Text>
                            <Text fontSize={{base:"20x", lg:"16px"}} color="#535D66">
                            Not Available
                            </Text>
                    </HStack>
                    <Divider/>
                    <HStack justify="space-between" w="full">
                            <Text fontSize={{base:"20x", lg:"16px"}} color="black" fontWeight="500">
                                Gender
                            </Text>
                            <Text fontSize={{base:"20x", lg:"16px"}} color="#535D66">
                            Not Available
                            </Text>
                    </HStack>
                    <Divider/>
                    <HStack justify="space-between" w="full">
                            <Text fontSize={{base:"20x", lg:"16px"}} color="black" fontWeight="500">
                                Phone Number
                            </Text>
                            <Text fontSize={{base:"20x", lg:"16px"}} color="#535D66">
                            Not Available
                            </Text>
                    </HStack>
                    <Divider/>
                    <HStack justify="space-between" w="full">
                            <Text fontSize={{base:"20x", lg:"16px"}} color="black" fontWeight="500">
                                Personal Mail ID
                            </Text>
                            <Text fontSize={{base:"20x", lg:"16px"}} color="#535D66">
                            Not Available
                            </Text>
                    </HStack>
                </Stack>
                </Stack>
                      
    </Customcard>
  )
}

export default PersonalInfo
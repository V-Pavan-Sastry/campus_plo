import React from 'react'
import { Customcard } from './Customcard'
import {Divider,Text,Heading,HStack, Image ,Stack} from '@chakra-ui/react'
const AcademicInfo = () => {
  return (
    <Customcard>
        <Stack spacing={2}>
                <Stack  gap={3} w="full" mt={3} alignItems="center">  
                <Heading as="h1" fontSize="28px" textAlign="Center" color="black">
            Academic Perfomance
        </Heading>
        <HStack justify="space-between" w="full">
                            <Text fontSize={{base:"20x", lg:"16px"}} color="black" fontWeight="500">
                                Course
                            </Text>
                            <Text fontSize={{base:"20x", lg:"16px"}} color="#535D66">
                            Not Available
                            </Text>
                    </HStack>
                    <Divider/>
                    <HStack justify="space-between" w="full">
                    <Text fontSize={{base:"20x", lg:"16px"}} color="black" fontWeight="500">
                                Branch
                            </Text>
                            <Text fontSize={{base:"20x", lg:"16px"}} color="#535D66">
                            Not Available
                            </Text>
                    </HStack>
                    <Divider/>
                    <HStack justify="space-between" w="full">
                            <Text fontSize={{base:"20x", lg:"16px"}} color="black" fontWeight="500">
                                1st Sem SGPA
                            </Text>
                            <Text fontSize={{base:"20x", lg:"16px"}} color="#535D66">
                                Not Available
                            </Text>
                    </HStack>
                    <Divider/>
                    <HStack justify="space-between" w="full">
                            <Text fontSize={{base:"20x", lg:"16px"}} color="black" fontWeight="500">
                            2nd Sem SGPA
                            </Text>
                            <Text fontSize={{base:"20x", lg:"16px"}} color="#535D66">
                                Not Available
                            </Text>
                    </HStack>
                    <Divider/>
                    <HStack justify="space-between" w="full">
                            <Text fontSize={{base:"20x", lg:"16px"}} color="black" fontWeight="500">
                            3rd Sem SGPA
                            </Text>
                            <Text fontSize={{base:"20x", lg:"16px"}} color="#535D66">
                                Not Available
                            </Text>
                    </HStack>
                    <Divider/>
                    <HStack justify="space-between" w="full">
                            <Text fontSize={{base:"20x", lg:"16px"}} color="black" fontWeight="500">
                            4th Sem SGPA
                            </Text>
                            <Text fontSize={{base:"20x", lg:"16px"}} color="#535D66">
                                Not Available
                            </Text>
                    </HStack>
                    <Divider/>
                    <HStack justify="space-between" w="full">
                            <Text fontSize={{base:"20x", lg:"16px"}} color="black" fontWeight="500">
                            5th Sem SGPA
                            </Text>
                            <Text fontSize={{base:"20x", lg:"16px"}} color="#535D66">
                                Not Available
                            </Text>
                    </HStack>
                    <Divider/>
                    <HStack justify="space-between" w="full">
                            <Text fontSize={{base:"20x", lg:"16px"}} color="black" fontWeight="500">
                            6th Sem SGPA
                            </Text>
                            <Text fontSize={{base:"20x", lg:"16px"}} color="#535D66">
                                Not Available
                            </Text>
                    </HStack>
                    <Divider/>
                    <HStack justify="space-between" w="full">
                            <Text fontSize={{base:"20x", lg:"16px"}} color="black" fontWeight="500">
                            Total CGPA
                            </Text>
                            <Text fontSize={{base:"20x", lg:"16px"}} color="#535D66">
                                Not Available
                            </Text>
                    </HStack>
                    <Divider/>
                    <HStack justify="space-between" w="full">
                            <Text fontSize={{base:"20x", lg:"16px"}} color="black" fontWeight="500">
                                10th Percentage
                            </Text>
                            <Text fontSize={{base:"20x", lg:"16px"}} color="#535D66">
                                Not Available
                            </Text>
                    </HStack>
                    <Divider/>
                    <HStack justify="space-between" w="full">
                            <Text fontSize={{base:"20x", lg:"16px"}} color="black" fontWeight="500">
                                12th Percentage
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

export default AcademicInfo
import {Card} from "@chakra-ui/react"
import DashboardLayout from "../../components/DashboardLayout"
import { Tabs, TabList,HStack,TabPanels, Tab, TabPanel,Tag,Text } from '@chakra-ui/react'
import Applicationstable from "../../components/applicationstable"
import { Input,InputGroup,InputLeftElement,Icon} from '@chakra-ui/react'

  import {BsSearch}  from "react-icons/bs"
const Applications = () => {

  return (
    <DashboardLayout title="Applications" name="Someone" alignItems="center">
    <Card><Tabs variant='soft-rounded' colorScheme='blue'>
  <TabList mx="4" mt="4" display="flex" justifyContent="space-between">
    <HStack>
    <Tab display="flex" gap="2"><Text color="black">All</Text><Tag borderRadius="full" fontSize="15px">13</Tag></Tab>
    <Tab display="flex" gap="2"><Text color="black">Applied </Text> <Tag borderRadius="full" fontSize="15px">10</Tag></Tab>
    </HStack><InputGroup maxW="200px"justifySelf="end">
    <InputLeftElement pointerEvents='none'>
      <Icon as={BsSearch} color='gray.300' />
    </InputLeftElement>
    <Input type='cname' placeholder="Search"/>
  </InputGroup>
  </TabList>
  <TabPanels>
    <TabPanel>
      <Applicationstable/>
    </TabPanel>
    <TabPanel>
    <Applicationstable/>
    </TabPanel>
  </TabPanels>
</Tabs></Card>
    </DashboardLayout>
  )
}

export default Applications
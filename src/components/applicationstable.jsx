import {
    Table,
    Thead,
    Tbody,
    Text,
    Tr,
    Th,
    Td,
    Tag,
    TableContainer,
  } from '@chakra-ui/react'
  import {PiNumberCircleOneFill,PiNumberCircleTwoFill} from "react-icons/pi"
const Applicationstable = () => {
  const ApplicationsData = [{
    id:1,
    icon:PiNumberCircleTwoFill,
    text:"Google",
    pkg:"25 LPA",
    date:"07-10-2023",
    time:"7:30 PM",
    type:"Internship + FTE",
    status:"Closed"
},
{
    id:2,
    icon:PiNumberCircleTwoFill,
    text:"NVIDIA Software",
    pkg:"75 K",date:"07-10-2023",
    time:"7:30 PM",
    type:"Internship + PBC",
    status:"Applied"
},
{
    id:3,
    icon:PiNumberCircleTwoFill,
    text:"NXP",
    pkg:"15LPA",
    date:"07-10-2023",
    time:"7:30 PM",
    type:"Internship + PBC",
    status:"Apply"
},
{
  id:4,
  icon:PiNumberCircleTwoFill,
  text:"Amazon",
  pkg:"25 LPA",
  date:"07-10-2023",
  time:"7:30 PM",
  type:"Internship + FTE",
  status:"NotEligible"
},
{
  id:5,
  icon:PiNumberCircleTwoFill,
  text:"Synobsis",
  pkg:"75 K",date:"07-10-2023",
  time:"7:30 PM",
  type:"Internship + PBC",
  status:"Applied"
},
{
  id:6,
  icon:PiNumberCircleTwoFill,
  text:"Accenture",
  pkg:"15LPA",
  date:"07-10-2023",
  time:"7:30 PM",
  type:"Internship + PBC",
  status:"Apply"
},
,{
  id:7,
  icon:PiNumberCircleOneFill,
  text:"TCS",
  pkg:" 6 LPA",
  date:"07-10-2023",
  time: "7:30 PM",
  type:"FTE",
  status:"Closed"
},
];
const statusColor={
  Applied:"#f5A50B",
  Closed:"#EB5757",
  NotEligible:"#c0c0c0",
  Apply:"#059669"
}
  return (
    <TableContainer maxW={{lg:"full",base:"350px"}}>
  <Table variant='simple' fontSize="16px">
    <Thead>
      <Tr>
        <Th>Company Name</Th>
        <Th>Date & Time</Th>
        <Th>Package </Th>
        <Th>Status </Th>
      </Tr>
    </Thead>
    <Tbody >
      {ApplicationsData.map((data)=>(
        <Tr key={data.id}>
          <Td>{data.text}</Td>
          <Td>{data.date}<br/><Text color="#535D66" fontSize="14px">{data.time}</Text></Td>
          <Td>{data.pkg} <br/><Text color="#535D66" fontSize="14px" >{data.type}</Text></Td>
          <Td><Tag p="2"borderRadius="full" bg={statusColor[data.status]}>{data.status}</Tag></Td>
          </Tr>
      ))}
    </Tbody>
  </Table>
</TableContainer>
  )
}

export default Applicationstable
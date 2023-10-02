import DashboardLayout from "../../components/DashboardLayout"
import { Grid,GridItem } from "@chakra-ui/react"
import PersonalInfo from "../../components/PersonalInfo"
import AcademicInfo from "../../components/AcademicInfo"
const MyCredentials = () => {
  return (
    <DashboardLayout title="My Info">
    <Grid gridTemplateColumns={{
        md : "repeat(2,1fr)",
    }} gap="4">
<GridItem colSpan={{base:2,md:1}}>
                <PersonalInfo/>
            </GridItem>
            <GridItem colSpan={{base:2,md:1}}>
                <AcademicInfo/>
            </GridItem>
            </Grid></DashboardLayout>
  )
}

export default MyCredentials
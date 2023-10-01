import DashboardLayout from "../../components/DashboardLayout"
import Applied_Card from "../../components/Applied_Card"
import Placerec from "../../components/Placerec"
import {Grid,GridItem} from "@chakra-ui/react"
import Recent_Card from "../../components/Recent_Card"
import Infocard from "../../components/Infocard"
import dot_bg from "../../assets/dot_bg.svg"
import grid_bg from "../../assets/grid_bg.svg"
 const Dashboard = () => {
  return (
    <DashboardLayout title="Dashboard" name="Someone">
        <Grid gridTemplateColumns={{
            md : "repeat(2,1fr)",
        }} gap="4">
            <GridItem colSpan={2}>
                <Placerec align="center"/>
            </GridItem>
            <GridItem colSpan={{base:2,
                                md:1}}>
                <Recent_Card/>
            </GridItem>
            <GridItem colSpan={{base:2,
                                md:1}}>
                <Applied_Card/>
            </GridItem>
            <GridItem colSpan={{base:2,
                                md:1}}>
            <Infocard ImgUrl={dot_bg} text="Policies" tagtext="Learn more about our campus Placement Policies " inverted={false}/>
            </GridItem>
            <GridItem colSpan={{base:2,
                                md:1}}>
                <Infocard ImgUrl={grid_bg} text="Stories" tagtext="Know about Success Stories from your campus" inverted={true}/>
            </GridItem>
        </Grid>
        
    </DashboardLayout>
  )
}

export default Dashboard
import DashboardLayout from "../../components/DashboardLayout"
import Infocard from "../../components/Infocard"
import grid_bg from "../../assets/grid_bg.svg"

const Support = () => {
  return (
    <DashboardLayout title="Support" name="Someone">
      <Infocard ImgUrl={grid_bg} text="Contact Us" tagtext="If you are facing any technical difficulties Contact us at: support@plo.ac.in" inverted={true}/>
    </DashboardLayout>
  )
}

export default Support
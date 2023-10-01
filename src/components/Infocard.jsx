import { Customcard} from './Customcard'
import {Tag,Text} from "@chakra-ui/react"

const Infocard = ({ImgUrl,text,tagtext,inverted}) => {
  return (
    <Customcard bgImage={ImgUrl} bgSize="cover" bgRepeat="no-repeat" bgColor={inverted ? "#0030D9" :"white"}>
        <Tag color={inverted ? "#0030D9" :"white"} bg={inverted ?"white":"#0030D9"}borderRadius="full">{text}</Tag>
        <Text fontSize={{lg:"1.125rem",
    base:"1rem"}} fontWeight="medium" mt="4" color={inverted ?"white":"black"}>{tagtext}</Text>
    </Customcard>

  )
}

export default Infocard
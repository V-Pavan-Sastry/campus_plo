import { extendTheme } from "@chakra-ui/react"
export const theme = extendTheme({
    fonts: {
        heading: "Ubuntu",
        body: "Ubuntu",
      },
      styles: {
        global: {
          'html, body': {
            bg:"#e0efff",
          },
        },
      },
      fontSizes:{
        h6:{
            fontSize:{
            base:"16px",
            md:"18px"
        },
        color:"black",
        lineheight:{base:"20px",md:"22px"},
        
      },
      h5:{
        fontSize:{
        base:"1.125rem",
        md:"1.125rem"
    },
    color:"black",
    lineheight:{base:"20px",md:"22px"},
    
  },
        sm1:{
            lg:"18px",
            base:"10px"
        }
      },
      sm2:{
        lg:"24px",
        base:"18px"
    }
});
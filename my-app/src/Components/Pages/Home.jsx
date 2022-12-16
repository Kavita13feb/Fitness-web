import react from "react"
import { Box, Flex, Img } from '@chakra-ui/react'
import { Container , VStack} from '@chakra-ui/react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

import { brands } from '@fortawesome/fontawesome-svg-core'
export default function Home (){
    return (
        <div>
          {/* <h1>HomePage</h1>  */}

          <Box bg='rgb(24 79 163)' w='100%' p={4} color='white' h='600px'>
          <FontAwesomeIcon icon="fa-brands fa-instagram" color="white"/>
  <Flex>
  <Box bg='rgb(24 79 163)' w='100%' p={4} color='white' h='600px'>
 
  <Box maxW='100%' color='white' fontSize={'50px'} fontWeight={"bold"} >
  MANAGE & TRACK
  <br/>ALL YOUR WORKOUTS
  <br/>
  IN ONE PLACE
  </Box>
  
  <Box maxW='100%'  color='white' fontSize={'30px'} fontWeight={"bold"} fontStyle={"italic"}>
  #1 Popular Workout Tracking Platform
Stay Strong Together
  </Box>



    <Flex gap={4}>
        <Box gap={4}>
        <Img src ='https://www.jefit.com/wp/wp-content/uploads/2021/11/googleplay.png'/>
        <Img src="https://www.jefit.com/wp/wp-content/uploads/2021/11/appstore.png"
          mt={4}/>

          <FontAwesomeIcon icon="fa-brands fa-instagram" color="white"/>
        </Box>
        <Box>
<Img src ='https://www.jefit.com/wp/wp-content/uploads/2021/11/qrcode_white.png'/>
        </Box>
    </Flex>


  
  </Box>         
   <Box bg='rgb(24 79 163)' w='100%' p={4} color='white' h='600px'>
 
  <Img src="https://www.jefit.com/wp/wp-content/uploads/2022/03/website_hero_watch-1536x1280.png"/>
</Box>
  </Flex>
  
  
</Box>

        </div>
    )
}
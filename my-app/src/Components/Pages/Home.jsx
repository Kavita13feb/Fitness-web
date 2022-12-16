import react from "react"
import { Box, Flex, Img ,Text ,Stack } from '@chakra-ui/react'
import { Container , VStack} from '@chakra-ui/react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { Button, ButtonGroup  ,Heading} from '@chakra-ui/react'
import {CheckIcon} from '@chakra-ui/icons'
import {
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
  

} from '@chakra-ui/react'

import { brands } from '@fortawesome/fontawesome-svg-core'
// import {MdCheckCircle} from "@chakra-ui/icons"
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


<Box marginTop={'50px'} w={'100%'} border='1px solid red'>
  <Text fontWeight={"bold"} fontSize={'40px'}>
  CONNECT WITH OVER 10 MILLION JEFIT MEMBERS
  </Text>
  <Text fontSize={'20px'} fontWeight={'600'} marginTop={4}>
  As the most active workout community, we invite you and your friends to join us and support each other.

  </Text>

</Box>
<Box>
  slider
</Box>
<Box>
<Stack direction='row' spacing={4} align='center' justifyContent={'center'}>

<Button colorScheme='teal' variant='outline' bg={'#39B7FF'} borderRadius='20px' p={'0px 70px 0px 70px'} fontSize={'25px'} 
>
    Trending Topics
  </Button>
  <Button colorScheme='teal' variant='outline' bg={'teal.300'} borderRadius='20px' p={'0px 70px 0px 70px'} fontSize={'25px'} >
    Join Now
  </Button>

</Stack>
</Box>

<Heading>JEFIT COVERS ALL OF YOUR WORKOUT NEEDS</Heading>

<Box>
  <Flex>
    <Box>
      <Img src ='https://www.jefit.com/wp/wp-content/uploads/2022/08/web1-1536x1536.png' 
      w='50%'
      />
    </Box>
    <Box>
    <List spacing={3}>
  <ListItem>
    <ListIcon  color='green.500' />
    Lorem ipsum dolor sit amet, consectetur adipisicing elit
  </ListItem>
  <ListItem>
    <ListIcon  color='green.500' />
    Assumenda, quia temporibus eveniet a libero incidunt suscipit
  </ListItem>
  <ListItem>
    <CheckIcon/><ListIcon  color='green.500' />
    Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
  </ListItem>
  {/* You can also use custom icons from react-icons */}
  <ListItem>
    <ListIcon color='green.500' />
    Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
  </ListItem>
</List>
    </Box>
  </Flex>
</Box>

        </div>
    )
}
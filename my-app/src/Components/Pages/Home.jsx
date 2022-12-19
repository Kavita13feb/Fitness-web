import react from "react"
import { Box, Flex, Img ,Text ,Stack } from '@chakra-ui/react'
import { Container , VStack} from '@chakra-ui/react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { Button, ButtonGroup  ,Heading} from '@chakra-ui/react'
import {CheckIcon} from '@chakra-ui/icons'
import { Grid, GridItem } from '@chakra-ui/react'
import {BsFillStarFill} from  'react-icons/bs';
import{FaCrown,FaStarOfLife} from 'react-icons/fa'
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

<Box border={'1px solid red '} w='90%' margin={'auto'}>
  <Flex >
    <Box border={'1px solid red '} w='50%'>
      <Img src ='https://www.jefit.com/wp/wp-content/uploads/2022/08/web1-1536x1536.png' 
      w='80%'
      />
    </Box>
    <Box border={'1px solid red '} w='50%'>
      <Heading fontSize={'20px'} color='teal'>WORKOUT TRACKING</Heading>
      <Heading>PERSONALIZE YOUR WORKOUT PLANS</Heading>
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

  <Button colorScheme='teal' variant='outline' bg={'teal.300'} borderRadius='20px' p={'0px 70px 0px 70px'} fontSize={'25px'} >
    Join Now
  </Button>
    </Box>
    
  </Flex>
</Box>

{/* 2 */}

<Heading>JEFIT COVERS ALL OF YOUR WORKOUT NEEDS</Heading>

<Box border={'1px solid red '} w='90%' margin={'auto'}>
  <Flex >
   
    <Box border={'1px solid red '} w='50%'>
      <Heading fontSize={'20px'} color='teal'>WORKOUT TRACKING</Heading>
      <Heading>PERSONALIZE YOUR WORKOUT PLANS</Heading>
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

  <Button colorScheme='teal' variant='outline' bg={'teal.300'} borderRadius='20px' p={'0px 70px 0px 70px'} fontSize={'25px'} >
    Join Now
  </Button>
    </Box>
    <Box border={'1px solid red '} w='50%'>
      <Img src ='https://www.jefit.com/wp/wp-content/uploads/2022/08/web2-1536x1536.png' 
      
      />
    </Box>
  </Flex>
</Box>

{/* 3 */}

<Heading>JEFIT COVERS ALL OF YOUR WORKOUT NEEDS</Heading>

<Box border={'1px solid red '} w='90%' margin={'auto'}>
  <Flex >
    <Box border={'1px solid red '} w='50%'>
      <Img src ='https://www.jefit.com/wp/wp-content/uploads/2022/08/web3-1536x1536.png' 
      w='80%'
      />
    </Box>
    <Box border={'1px solid red '} w='50%'>
      <Heading fontSize={'20px'} color='teal'>WORKOUT TRACKING</Heading>
      <Heading>PERSONALIZE YOUR WORKOUT PLANS</Heading>
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

  <Button colorScheme='teal' variant='outline' bg={'teal.300'} borderRadius='20px' p={'0px 70px 0px 70px'} fontSize={'25px'} >
    Join Now
  </Button>
    </Box>
    
  </Flex>
</Box>


{/* cards */}

<Heading>PLANS THAT SUIT YOU BEST</Heading>

<Box w='90%' margin={'auto'}>
<Grid templateColumns='repeat(3, 1fr)' gap={6}>
  <GridItem w='100%' h='600px' bg='blue.500' ><BsFillStarFill/>
  <Heading>FREE</Heading>

  <Text>Basic
  <br></br>
Ads supported
Flexible workout planner
Top-notch log tracker
1400+ exercises library
Body stats tracking tools
Support interval training</Text>

<Button colorScheme='teal' variant='outline' bg={'teal.300'} borderRadius='20px' p={'0px 70px 0px 70px'} fontSize={'25px'} >
    Join Now
  </Button>
  </GridItem>
  <GridItem w='100%' h='600px' bg='blue.500' ><FaStarOfLife/>
  <Heading>Elite
Monthly</Heading>

<Text>
  $12.99/month
  <br></br>
All BASIC plan features
No ads
Comprehensive training reports
Advanced tracking features
Compare records with friends
Exercise tips from JEFIT experts
Premium workout plans
More...</Text>

<Button colorScheme='teal' variant='outline' bg={'teal.300'} borderRadius='20px' p={'0px 70px 0px 70px'} fontSize={'25px'} >
  Join Now
</Button>
  </GridItem>
  <GridItem w='100%' h='600' bg='blue.500' ><FaCrown/>
  <Heading>Elite
Yearly</Heading>

<Text color={'white'}>$5.83/month
<br></br>
All BASIC plan features
No ads
Comprehensive training reports
Advanced tracking features
Compare records with friends
Exercise tips from JEFIT experts
Premium workout plans
More...</Text>

<Button colorScheme='teal' variant='outline' bg={'teal.300'} borderRadius='20px' p={'0px 70px 0px 70px'} fontSize={'25px'} >
  Join Now
</Button>
  </GridItem>

</Grid>
</Box>
<Box>
  <Heading>WANT TO BUILD YOUR OWN WORKOUT PLAN?</Heading>
  <Heading>Customize your workout plan with over 1400 free exercises in Jefit Workout Plan Builder. And easily share with friends.
</Heading>

<Button colorScheme='teal' variant='outline' bg={'teal.300'} borderRadius='20px' p={'0px 70px 0px 70px'} fontSize={'25px'} >
    Join Now
  </Button>
</Box>

{/* footer */}

<Box>
<Grid templateColumns='repeat(5, 1fr)' gap={6}>
  <GridItem w='100%'  >
    <Heading>Products</Heading>
    <UnorderedList>
  <ListItem>Lorem ipsum dolor sit amet</ListItem>
  <ListItem>Consectetur adipiscing elit</ListItem>
  <ListItem>Integer molestie lorem at massa</ListItem>
  <ListItem>Facilisis in pretium nisl aliquet</ListItem>
</UnorderedList>
  </GridItem>
  <GridItem w='100%'  >

  <Heading>Products</Heading>
    <UnorderedList>
  <ListItem>Lorem ipsum dolor sit amet</ListItem>
  <ListItem>Consectetur adipiscing elit</ListItem>
  <ListItem>Integer molestie lorem at massa</ListItem>
  <ListItem>Facilisis in pretium nisl aliquet</ListItem>
</UnorderedList>
  </GridItem>
  <GridItem w='100%'  >
    <Heading>Products</Heading>
    <UnorderedList>
  <ListItem>Lorem ipsum dolor sit amet</ListItem>
  <ListItem>Consectetur adipiscing elit</ListItem>
  <ListItem>Integer molestie lorem at massa</ListItem>
  <ListItem>Facilisis in pretium nisl aliquet</ListItem>
</UnorderedList>
  </GridItem>
  <GridItem w='100%'  >
    <Heading>Products</Heading>
    <UnorderedList>
  <ListItem>Lorem ipsum dolor sit amet</ListItem>
  <ListItem>Consectetur adipiscing elit</ListItem>
  <ListItem>Integer molestie lorem at massa</ListItem>
  <ListItem>Facilisis in pretium nisl aliquet</ListItem>
</UnorderedList>
  </GridItem>
</Grid>

Copyright © 2010 - 2022 Jefit, Inc.
All Rights Reserved.


</Box>

        </div>
    )
}
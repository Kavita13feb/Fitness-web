import {
    List,
    ListItem,
    ListIcon,
    OrderedList,
    UnorderedList,
    Box,
    Grid,
    GridItem,
    Heading,
    Text
  
  } from '@chakra-ui/react'

export default function Footer(){

    return (
        <Box bg='pink.50' paddingTop='60px' >
        <Grid w='90%' margin={'auto'} templateColumns='repeat(4, 1fr)' gap={6}>
          <GridItem w='100%'  >
            <Heading fontSize={'25px'} marginBottom='30px'>Products</Heading>
            <List>
          <ListItem >Elite Membership</ListItem>
          <ListItem >Coach</ListItem>
          <ListItem >Signup</ListItem>
          <ListItem >Login</ListItem>
        </List>
          </GridItem>
          <GridItem w='100%'  >
        
          <Heading fontSize={'25px'} marginBottom='20px'>Resource</Heading>
            <List>
          <ListItem >Workout</ListItem>
          <ListItem >Execrcise Database</ListItem>
          <ListItem >Community</ListItem>
          <ListItem >Help Center</ListItem>
        </List>
          </GridItem>
          <GridItem w='100%'  >
            <Heading fontSize={'25px'}  marginBottom='30px'>Legal</Heading>
            <List >
          <ListItem >Privacy Policy</ListItem>
          <ListItem >Terms of use</ListItem>
          <ListItem>Ip /DMCA  Notices</ListItem>
          <ListItem>Press and Media</ListItem>
        </List>
          </GridItem>
          <GridItem w='100%'  >
            <Heading fontSize={'25px'}  marginBottom='30px'>Follow us</Heading>
            <List>
          <ListItem >  <a href="#">Blog</a></ListItem>
          <ListItem > <a href=''>Facebook</a></ListItem>
          <ListItem > <a href=''>Instagram</a></ListItem>
          <ListItem > <a href=''>Twitter</a></ListItem>
        </List>
          </GridItem>
        </Grid>
        
        
        
        <Text marginTop='60px'fontsize='5px'>Copyright © 2010 - 2022 Jefit, Inc.<br></br>
        All Rights Reserved.</Text>
        
        </Box>
    )

}
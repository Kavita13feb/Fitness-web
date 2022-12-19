import { Heading,Box, Img } from "@chakra-ui/react"
import react from "react"
import { Grid, GridItem ,Stack } from '@chakra-ui/react'
import { useState } from "react"
import { useEffect } from "react"
import { Radio, RadioGroup } from '@chakra-ui/react'
import { Checkbox, CheckboxGroup } from '@chakra-ui/react'
import { Input } from '@chakra-ui/react'
import { Button, ButtonGroup } from '@chakra-ui/react'
import {GrFormNext,GrFormPrevious} from 'react-icons/gr'
import Slider from "react-slick";
import React, { Component } from "react";
// import "slick-carousel/slick/slick.css" ;
// import "slick-carousel/slick/slick-theme.css";
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
  } from '@chakra-ui/react'

export default function Excercise (){
    var settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
      
      }
  

const [data,setData]=useState([])
const[page,setPage]=useState(1)
const[total,setTotal]=useState(1)
const [value, setValue] = useState(1)

let c0=1
useEffect(()=>{
    getdata()
},[])

// useEffect(()=>{
//     gettotaldata()
// },[])

const getdata=async()=>{
    let res =await fetch(`http://localhost:8080/posts?category=begainner&_page=${c0}`)
    
        let gymdata =await res.json()
        console.log(gymdata)
        // let home_decore_div =document.querySelector(".swiper-wrapper");
        // let fast_div= document.querySelector(".fast_container")
  setData(gymdata)
    }
  
    
// let id;
// const getdata=async(page)=>{
// let res =await fetch(`  http://localhost:8080/posts?category=begainner&_page=${page}&_limit=3`)

//     let gymdata =await res.json()
//     console.log(gymdata)
//     setData(gymdata)
    // let home_decore_div =document.querySelector(".swiper-wrapper");
//     let container= document.querySelector(".carousal_container")
//    container.innerHTML="";
    // let image=document.createElement("img")

    // image.src=data[0].Image
 // container.append(image)


//   console.log(page)
   
    // id=setInterval(function(){
    //     if(page===total){
    //         setPage(1) 
    //  }else{
    //     setPage(page+1)
    //  }
            
    // },50000)
  




    return (
        <div>
           <Heading>JEFIT Workout Routine Database
</Heading> 

<Heading>Featured Workout plans</Heading>
<Heading>Try one of these professionally designed workout plans</Heading>

<Box w='90%' margin={'auto'}>


        <Slider {...settings}   >

            {
                data.map((el)=>(
                    <GridItem key={el.id}  h='290px' boxShadow={'rgba(0, 0, 0, 0.24) 0px 3px 8px'} borderRadius='20px' >
                     <Img src ={el.image} w='100%'  borderTopRadius={'20px'} marginBottom='20px'/>
        <Heading marginTop={'30px'} fontSize={'20px'}>{el.title}</Heading>
                  </GridItem>
                ))
            }

          {/* <div bg='blue' border='1px solid red'>
            <h3  border='1px solid red' >2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div> */}
        </Slider>
  
      </Box>
{/* <Grid templateColumns='repeat(3, 1fr)' gap={6} margin='auto' w='90%'>

    {
data.map((el)=>(
    <GridItem key={el.id} w='90%' h='250px' boxShadow={'rgba(0, 0, 0, 0.24) 0px 3px 8px'} borderRadius='20px' >

        <Img src ={el.image} w='100%' marginTop={'1px'}  borderTopRadius={'20px'} marginBottom='20px'/>
        <Heading fontSize={'20px'}>{el.title}</Heading>
    </GridItem> 
    ))
    }

  
</Grid>
<GrFormPrevious fontSize={'30px'} 

position={'absolute'} 
top={'0'} 
left={'0'}
width={'8vw'}
height= '100%'

zIndex='9'
// cursor= 'pointer'
display= 'flex'
alignItems='center'
justifyContent= 'center'
color='#f98d29'  */}
{/* // font-size= '15px' */}
{/* // scroll-behavior='smooth' */}
{/* /> */}
{/* <GrFormNext fontSize={'30px'}/> */}

{/* 2 */}

{/* <Box marginTop={'10px'}>
<Grid templateColumns='repeat(3, 1fr)' gap={6} margin='auto' w='90%' >

    {
data.map((el)=>(
    <GridItem key={el.id} w='90%' h='250px' boxShadow={'rgba(0, 0, 0, 0.24) 0px 3px 8px'} borderRadius='20px' >

        <Img src ={el.image} w='100%' marginTop={'1px'}  borderTopRadius={'20px'} marginBottom='20px'/>
        <Heading fontSize={'20px'}>{el.title}</Heading>
    </GridItem> 
    ))
    }

  
</Grid> */}

{/* </Box> */}
{/* 3 */}
<Heading>Jefit Workout plans
</Heading> 

<Heading>Filter results down to your specific needs and find a new plan</Heading>

<Box  w='90%' margin={'auto'}>
<RadioGroup onChange={setValue} value={value}  >
      <Stack direction='row' gap={10}>
        <Radio value='1'>Male</Radio>
        <Radio value='2'>Female</Radio>
        <Radio value='3'>Both</Radio>
        <Checkbox colorScheme='blue' defaultChecked>
    Checkbox
  </Checkbox>
  <Checkbox colorScheme='blue' defaultChecked>
    Checkbox
  </Checkbox>
  <Checkbox colorScheme='blue' defaultChecked>
    Checkbox
  </Checkbox>
  <Box>
  <Stack direction='row' >
  <Input placeholder='Search'  padding={'20px'}/>
 
 <Box
   as='button'
   height='39px'
   lineHeight='1.2'
   transition='all 0.2s cubic-bezier(.08,.52,.52,1)'
   border='1px'
   px='20px'
   borderRadius='2px'
   fontSize='14px'
   fontWeight='semibold'
   bg='white'
   borderColor='#ccd0d5'
   color='#4b4f56'
   _hover={{ bg: '#ebedf0' }}
   _active={{
     bg: '#dddfe2',
     transform: 'scale(0.98)',
     borderColor: '#bec3c9',
   }}
   _focus={{
     boxShadow:
       '0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)',
   }}
 >
 Search
 </Box>
 </Stack>
  </Box>
  
      </Stack>

    </RadioGroup>


   


</Box>

<Box w='90%' margin={'auto'}>
<TableContainer>
  <Table variant='striped' colorScheme='teal'>
    <TableCaption>Imperial to metric conversion factors</TableCaption>
    <Thead>
      <Tr>
        <Th> Plan Name</Th>
        <Th>Frequency</Th>
        <Th >Category</Th>
        <Th>Exp. Level</Th>
        <Th>Views/Downloads	</Th>
        <Th> Created By</Th>
        <Th> Elite/Free</Th>


      </Tr>
    </Thead>
    <Tbody>
{
    data.map((el)=>(
        <Tr>
        <Td>{el.title}</Td>
        <Td>{el.Frequency}</Td>
        <Td >{el.Category}</Td>
        
        <Td>{el.Difficulty}</Td>
        <Td>{el.Views}</Td>
        <Td>{el.Created }</Td>
        <Td>{el.status}</Td>
      </Tr>
    ))

}
   
    </Tbody>

  </Table>
</TableContainer>
</Box>



</div> 
)
 }     

// 



   
    

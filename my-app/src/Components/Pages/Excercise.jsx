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
    let res =await fetch(`http://localhost:8080/posts?Category=Maintaining&_page=${c0}`)
    
        let gymdata =await res.json()
        console.log(gymdata)
        // let home_decore_div =document.querySelector(".swiper-wrapper");
        // let fast_div= document.querySelector(".fast_container")
  setData(gymdata)
    }
  
   
  




    return (
        <div>
           <Heading  marginTop={'50px'}>JEFIT Workout Routine Database
</Heading> 

<Heading marginTop={'30px'}>Featured Workout plans</Heading>
<Heading  marginTop={'30px'} fontSize='25px' color={'gray '} marginBottom='50px'>Try one of these professionally designed workout plans</Heading>

<Box w='100%' padding={'50px 40px 40px 80px'}>


        <Slider {...settings}   >

            {
                

                  data.map((el)=>(
                    <div key={el.id}  boxShadow={'rgba(0, 0, 0, 0.24) 0px 3px 8px'}  >

                   <Img w='80%' src={el.image} borderRadius={'10px'}/>
                   <Heading marginTop={'30px'} marginLeft='-40px'fontSize={'22px'}>{el.title}</Heading>
                

                  </div>
                  ))
                   
                  
            }
        </Slider>
  
      </Box>

      <Box w='100%' padding={'50px 40px 40px 80px'} >


<Slider {...settings}   >

    {
        

          data.map((el)=>(
            <div key={el.id}  boxShadow={'rgba(0, 0, 0, 0.24) 0px 3px 8px'}  >

           <Img w='80%' src={el.image} borderRadius={'10px'}/>
           <Heading marginTop={'30px'} marginLeft='-40px'fontSize={'22px'}>{el.title}</Heading>
        

          </div>
          ))
           
          
    }
</Slider>

</Box>


{/* 3 */}
<Heading marginTop={'50px'}>Jefit Workout plans
</Heading> 

<Heading  marginTop={'30px'} color='gray' fontSize={'28px'} >Filter results down to your specific needs and find a new plan</Heading>

<Box  Box w='100%' border='1px solid red'>
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



   
    

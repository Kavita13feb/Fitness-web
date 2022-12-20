import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Link,
    Button,
    Heading,
    Text,
    useColorModeValue,
  } from '@chakra-ui/react';
import { useState } from 'react';
  
  export default function Login() {

    const [email,setEmail]=useState()
    const [password,setPassword]=useState()

   

const getuser = async()=>{
  const login_data={
             email,
                password
            };
           
    let login_api =`https://masai-api-mocker.herokuapp.com/auth/register`
            
            const response=await fetch(login_api,{
                method : 'post',
                body :JSON.stringify(),
                headers: {
                    'Content-Type':'application/json',
        
        
                },
            });
            
            const data = await response.json()
            console.log(data)
    

}





    return (
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'}>LOG IN</Heading>
            
          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
              <FormControl id="email">
                <FormLabel> Username Or Email</FormLabel>
                <Input type="email" 
                value={email}
                placeholder ="Username or Email"
                onChange={(e)=>setEmail(e.target.value)}
                
                />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input type="password" 
                value={password}
                placeholder="password"
                onChange={(e)=>setPassword(e.target.value)}
                
                />
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: 'column', sm: 'row' }}
                  align={'start'}
                  justify={'space-between'}>
                  <Checkbox>Remember me</Checkbox>
                  <Link color={'blue.400'}>Forgot password?</Link>
                </Stack>
                <Button
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                   
                  }}
                  as='a'
                  href='/'

                  
                  >
                  Log in
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    );
  }
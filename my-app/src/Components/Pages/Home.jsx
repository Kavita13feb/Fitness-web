import react from "react";
import { Box, Flex, Img, Text, Stack } from "@chakra-ui/react";
import { Container, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, ButtonGroup, Heading } from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  SimpleGrid,
} from "@chakra-ui/react";
import { Grid, GridItem } from "@chakra-ui/react";

import { BsFillStarFill } from "react-icons/bs";
import { useState } from "react";
import { useEffect } from "react";
import {
  FaCrown,
  FaStarOfLife,
  FaInstagram,
  FaFacebook,
  FaTwitter,
} from "react-icons/fa";
import { GiSevenPointedStar } from "react-icons/gi";
import Slider from "react-slick";
import React, { Component } from "react";
import { AiFillCheckCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
import {
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
} from "@chakra-ui/react";

import { brands } from "@fortawesome/fontawesome-svg-core";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "../Footer";
// import {MdCheckCircle} from "@chakra-ui/icons"
export default function Home() {
  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };

  const [data, setData] = useState([]);
  // const data =[1,2,3,4,5,6,7,8]

  let c0 = 1;
  useEffect(() => {
    getdata();
  }, []);

  const getdata = async () => {
    let res = await fetch(
      `http://localhost:8080/posts/?Category=home&_page=${c0}`
    );

    let gymdata = await res.json();
    console.log(gymdata);
    // let home_decore_div =document.querySelector(".swiper-wrapper");
    // let fast_div= document.querySelector(".fast_container")
    setData(gymdata);
  };

  // let CardArr = [
  //   {
  //     icon: BsFillStarFill,
  //     type: "Free",
  //     fee: "Basic",
  //     desc: "Ads supported Flexible workout planner Top-notch log tracker 1400+ exercises library Body stats tracking tools Support interval training",
  //     btn: "Free Download",
  //   },
  // ];
  return (
    <div>
      {/* <h1>HomePage</h1>  */}

      <Box bg="rgb(24 79 163)" w="100%" p={4} color="white" marginTop="-5px">
        <Flex gap={"5%"} direction={["column", "row"]}>
          <Box marginTop="50px"w={{ lg: "40%", sm: "90%" }} margin={'auto'}>
            <Heading size={'2xl'}  textAlign={'left'}>MANAGE & TRACK ALL YOUR WORKOUTS IN ONE PLACE</Heading>
            <Heading size={'lg'} textAlign={'left'}  marginTop={"20px"}>
              #1 Popular Workout Tracking Platform Stay Strong Together
            </Heading>
  

            <Flex gap={4}>
              <Box gap={4} marginTop="25px">
                <Box
                  as="a"
                  href="https://play.google.com/store/apps/details?id=je.fit&referrer=utm_source%3Demail"
                >
                  <Img src="https://www.jefit.com/wp/wp-content/uploads/2021/11/googleplay.png" />
                </Box>
                <Box
                  as="a"
                  href="https://apps.apple.com/app/apple-store/id449810000"
                >
                  {" "}
                  <Img
                    src="https://www.jefit.com/wp/wp-content/uploads/2021/11/appstore.png"
                    mt={4}
                  />
                </Box>

                <FontAwesomeIcon icon="fa-brands fa-instagram" color="white" />
              </Box>
              <Box marginTop="25px">
                <Img src="https://www.jefit.com/wp/wp-content/uploads/2021/11/qrcode_white.png" />
              </Box>
            </Flex>

            <Flex gap={6}>
              <FaInstagram fontSize={"25px"} />

              <FaFacebook fontSize={"25px"} />
              <FaTwitter fontSize={"25px"} />
            </Flex>
          </Box>
          <Box marginTop={"80px"}  w={{ lg: "45%", sm: "90%" }}>
            <Img
              src="https://www.jefit.com/wp/wp-content/uploads/2022/03/website_hero_watch-1536x1280.png"
              w="100%"
            />
          </Box>
        </Flex>
      </Box>

      <Box padding={"50px 10px 10px 50px"} w="100%" bg="#F8FBFE">
        <Heading fontWeight={"bold"} >
          CONNECT WITH OVER 10 MILLION JEFIT MEMBERS
        </Heading>
        <Text
          fontSize={"25px"}
          fontWeight={"600"}
          marginTop={4}
          marginBottom="20px"
        >
          As the most active workout community, we invite you and your friends
          to join us and support each other.
        </Text>
      </Box>
      <Box w="100%" padding={"50px 40px 40px 60px"} bg="#F8FBFE">
        <Slider {...settings}>
          {data.map((el) => (
            <div key={el.id}>
              <Img src={el.image} w="80%" borderRadius={"10px"} />
            </div>
          ))}
        </Slider>
      </Box>
      <Box marginTop="30px" bg="#F8FBFE"  margin={"auto"}>
        <Stack
          direction={["column","row"]}
          spacing={4}
          align="center"
          justifyContent={"center"}
        >
          <Button
            colorScheme="teal"
            variant="outline"
            bg={"#39B7FF"}
            borderRadius="20px"
            p={"0px 80px 0px 80px"}
            fontSize={"25px"}
          >
            Trending Topics
          </Button>
          <Button
            colorScheme="teal"
            variant="outline"
            bg={"teal.300"}
            borderRadius="20px"
            p={"0px 70px 0px 70px"}
            fontSize={"25px"}
          >
            Join Now
          </Button>
        </Stack>
      </Box>

      <Box w="100%" padding={"100px 10px 100px 10px"} bg="#F7F9FD">
        <Heading marginTop={"20px"} marginBottom={"80px"}>
          JEFIT COVERS ALL OF YOUR WORKOUT NEEDS
        </Heading>
        <Flex direction={["column", "row"]}>
          <Box w={{ lg: "50%", sm: "100%" }}>
            <Img
              src="https://www.jefit.com/wp/wp-content/uploads/2022/08/web1-1536x1536.png"
              width="100%"
            />
          </Box>
          <Box w={{ lg: "50%", sm: "100%" }}>
            <Heading fontSize={"20px"} color="teal" marginTop={"30px"}>
              WORKOUT TRACKING
            </Heading>
            <Heading size={"xl"} marginTop={"30px"}>
              PERSONALIZE YOUR{" "}
            </Heading>
            <Heading size={"xl"} marginTop={"4px"}>
              {" "}
              WORKOUT PLANS
            </Heading>
            <List spacing={3} marginTop={"70px"} marginBottom={"50px"}>
              <ListItem fontSize={"20px"} w={"60%"} margin="auto">
                <Flex
                  justifyContent={"space-between"}
                  alignItems="center"
                  gap={6}
                >
                  <AiFillCheckCircle color="blue" fontSize={"20px"} />
                  1400+ exercises with instructions
                </Flex>
              </ListItem>
              <ListItem
                w={"60%"}
                margin="auto"
                fontSize={"20px"}
                fontWeight="400"
              >
                <Flex
                  justifyContent={"space-between"}
                  alignItems="center"
                  gap={6}
                >
                  <AiFillCheckCircle color="blue" fontSize={"20px"} />
                  Pro-designed workout plans
                </Flex>
              </ListItem>
              <ListItem w={"60%"} margin="auto" fontSize={"20px"}>
                <Flex
                  justifyContent={"space-between"}
                  alignItems="center"
                  gap={6}
                >
                  <AiFillCheckCircle color="blue" fontSize={"20px"} />
                  Support custom exercises
                </Flex>
              </ListItem>
              {/* You can also use custom icons from react-icons */}
              <ListItem w={"60%"} margin="auto" fontSize={"20px"}>
                <Flex justifyContent={"space-between"} alignItems="center">
                  <AiFillCheckCircle color="blue" fontSize={"20px"} />
                  Flexible workout planning tool
                </Flex>
              </ListItem>
            </List>

            <Button
              colorScheme="teal"
              variant="outline"
              bg={"teal.300"}
              borderRadius="20px"
              p={"0px 70px 0px 70px"}
              fontSize={"25px"}
            >
              Join Now
            </Button>
          </Box>
        </Flex>
      </Box>

      {/* 2 */}

      <Box w="100%" padding={"0px 10px 10px 10px"} bg="#F8FBFE">
        <Flex gap={"10%"} direction={["column", "row"]}>
          <Box w={{ lg: "50%", sm: "100%" }} marginTop="80px">
            <Heading fontSize={"20px"} color="teal">
              SMART WATCH INTEGRATION
            </Heading>
            <Heading marginTop="30px">
              TRAIN & LOG SEAMLESSLY IN GYM AND HOME
            </Heading>
            <List spacing={3} marginTop={"80px"} marginBottom={"50px"}>
              <ListItem fontSize={"20px"} w={"60%"} margin="auto">
                <Flex
                  justifyContent={"space-between"}
                  alignItems="center"
                  gap={6}
                >
                  <AiFillCheckCircle color="blue" fontSize={"20px"} />
                  Log training with one-click
                </Flex>
              </ListItem>
              <ListItem
                w={"60%"}
                margin="auto"
                fontSize={"20px"}
                fontWeight="400"
              >
                <Flex
                  justifyContent={"space-between"}
                  alignItems="center"
                  gap={6}
                >
                  <AiFillCheckCircle color="blue" fontSize={"20px"} />
                  Control rest time easily
                </Flex>
              </ListItem>
              <ListItem w={"60%"} margin="auto" fontSize={"20px"}>
                <Flex
                  justifyContent={"space-between"}
                  alignItems="center"
                  gap={6}
                >
                  <AiFillCheckCircle color="blue" fontSize={"20px"} />
                  Available on mobile and watch
                </Flex>
              </ListItem>
              {/* You can also use custom icons from react-icons */}
              <ListItem w={"60%"} margin="auto" fontSize={"20px"}>
                <Flex justifyContent={"space-between"} alignItems="center">
                  <AiFillCheckCircle color="blue" fontSize={"20px"} />
                  Audio and video instructions
                </Flex>
              </ListItem>
            </List>

            <Button
              colorScheme="teal"
              variant="outline"
              bg={"teal.300"}
              borderRadius="20px"
              p={"0px 70px 0px 70px"}
              fontSize={"25px"}
            >
              Join Now
            </Button>
          </Box>
          <Box w={{ lg: "50%", sm: "100%" }}>
            <Img src="https://www.jefit.com/wp/wp-content/uploads/2022/08/web2-1536x1536.png" />
          </Box>
        </Flex>
      </Box>

      {/* 3 */}

      <Box w="100%" padding={"100px 10px 100px 10px"} bg="#F8FBFE">
        <Flex gap={"5%"} direction={["column", "row"]}>
          <Box w={{ lg: "50%", sm: "100%" }}>
            <Img
              src="https://www.jefit.com/wp/wp-content/uploads/2022/08/web3-1536x1536.png"
              w="100%"
            />
          </Box>
          <Box w={{ lg: "45%", sm: "100%" }}>
            <Heading fontSize={"20px"} color="teal" marginTop="80px">
              WORKOUT TRACKING
            </Heading>
            <Heading marginTop="40px">PERSONALIZE YOUR WORKOUT PLANS</Heading>
            <List spacing={3} marginTop={"80px"} marginBottom={"50px"}>
              <ListItem fontSize={"20px"} w={"60%"} margin="auto">
                <Flex
                  justifyContent={"space-between"}
                  alignItems="center"
                  gap={6}
                >
                  <AiFillCheckCircle color="blue" fontSize={"20px"} />
                  Log training with one-click
                </Flex>
              </ListItem>
              <ListItem
                w={"60%"}
                margin="auto"
                fontSize={"20px"}
                fontWeight="400"
              >
                <Flex
                  justifyContent={"space-between"}
                  alignItems="center"
                  gap={6}
                >
                  <AiFillCheckCircle color="blue" fontSize={"20px"} />
                  Control rest time easily
                </Flex>
              </ListItem>
              <ListItem w={"60%"} margin="auto" fontSize={"20px"}>
                <Flex
                  justifyContent={"space-between"}
                  alignItems="center"
                  gap={6}
                >
                  <AiFillCheckCircle color="blue" fontSize={"20px"} />
                  Available on mobile and watch
                </Flex>
              </ListItem>
              {/* You can also use custom icons from react-icons */}
              <ListItem w={"60%"} margin="auto" fontSize={"20px"}>
                <Flex justifyContent={"space-between"} alignItems="center">
                  <AiFillCheckCircle color="blue" fontSize={"20px"} />
                  Audio and video instructions
                </Flex>
              </ListItem>
            </List>

            <Button
              colorScheme="teal"
              variant="outline"
              bg={"teal.300"}
              borderRadius="20px"
              p={"0px 70px 0px 70px"}
              fontSize={"25px"}
            >
              Join Now
            </Button>
          </Box>
        </Flex>
      </Box>

      {/* cards */}
      {/*  */}

      <Heading marginTop="110px">PLANS THAT SUIT YOU BEST</Heading>

      <Box w="80%" margin={"auto"} marginTop="80px">
        <Grid
          templateColumns={{ lg: "repeat(3, 1fr)", sm: "repeat(1, 1fr)" }}
          gap={6}
        >
          <GridItem
            w="100%"
            h="750px"
            bg="#404040"
            borderRadius={"10px"}
            padding="100px 10px 50px 10px"
          >
            <Button
              padding={"30px 20px 30px 20px"}
              borderRadius={"29px"}
              marginTop="35px"
            >
              <BsFillStarFill fontSize={"25px"} />
            </Button>

            <Heading color={"white"} marginTop="35px">
              FREE
            </Heading>

            <Container
              color={"white"}
              marginTop="35px"
              lineHeight="35px"
              fontSize={"24px"}
              marginBottom="3 0px"
            >
              Basic
              <br marginTop="35px"></br>
              Ads supported Flexible workout planner Top-notch log tracker 1400+
              exercises library Body stats tracking tools Support interval
              training
            </Container>

            <Button
              colorScheme="black"
              variant="outline"
              bg={"#404040"}
              borderRadius="20px"
              p={"0px 70px 0px 70px"}
              fontSize={"25px"}
              borderColor="white"
              color={"white"}
              _groupHover={{
                bg: "white",
                color: "blue",
              }}
            >
              Free Download
            </Button>
          </GridItem>
          <GridItem
            w="100%"
            h="750px"
            bg="#404040"
            borderRadius={"10px"}
            padding="100px 10px 50px 10px"
          >
            <Button
              padding={"30px 20px 30px 20px"}
              borderRadius={"30px"}
              marginTop="35px"
            >
              <GiSevenPointedStar fontSize={"25px"} />
            </Button>

            <Heading color={"white"} marginTop="35px">
              Elite Monthly
            </Heading>

            <Container
              color={"white"}
              lineHeight="35px"
              fontSize={"24px"}
              marginTop="35px"
            >
              $12.99/month
              <br></br>
              All BASIC plan features No ads Comprehensive training reports
              Advanced tracking features Compare records with friends Exercise
              tips from JEFIT experts Premium workout plans More...
            </Container>

            <Button
              colorScheme="teal"
              variant="outline"
              bg={"teal.300"}
              borderRadius="20px"
              p={"0px 60px 0px 60px"}
              fontSize={"25px"}
            >
              LEARN MORE
            </Button>
            <Container fontSize="20px" marginTop="20px">
              $12.99 billed / month
            </Container>
          </GridItem>
          <GridItem
            w="100%"
            h="750"
            bg="#404040"
            borderRadius={"10px"}
            padding="100px 10px 50px 10px"
          >
            <Button
              padding={"30px 20px 30px 20px"}
              borderRadius={"29px"}
              marginTop="35px"
            >
              <FaCrown fontSize={"24px"} />
            </Button>
            <Heading color={"white"} marginTop="35px">
              Elite Yearly
            </Heading>

            <Container
              lineHeight={"35px"}
              color={"white"}
              fontSize="24px"
              marginTop="35px"
            >
              $5.83/month
              <br></br>
              All BASIC plan features No ads Comprehensive training reports
              Advanced tracking features Compare records with friends Exercise
              tips from JEFIT experts Premium workout plan More...
            </Container>

            <Button
              colorScheme="teal"
              variant="outline"
              bg={"teal.300"}
              borderRadius="20px"
              p={"0px 70px 0px 70px"}
              fontSize={"25px"}
            >
              LEARN MORE
            </Button>
            <Container fontSize="20px" marginTop="20px">
              Save 55%, $69.99 billed / year
            </Container>
          </GridItem>
        </Grid>
      </Box>
      <Box
        marginTop={"90px"}
        w="100%"
        bg="#F8FBFE"
        padding={"15px 10px 80px 15px "}
      >
        <Heading marginTop={"90px"}>
          WANT TO BUILD YOUR OWN WORKOUT PLAN?
        </Heading>
        <Heading marginTop={"30px"} marginBottom={"30px"} fontSize="2xl">
          Customize your workout plan with over 1400 free exercises in Jefit
          Workout Plan Builder. And easily share with friends.
        </Heading>

        <Button
          colorScheme="teal"
          variant="outline"
          bg={"teal.300"}
          borderRadius="20px"
          p={"0px 70px 0px 70px"}
          fontSize={"25px"}
        >
          Join Now
        </Button>
      </Box>

      {/* footer */}

      <Footer />
    </div>
  );
}

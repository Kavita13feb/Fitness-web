import { Heading, Box, Img } from "@chakra-ui/react";
import react from "react";
import { Grid, GridItem, Stack } from "@chakra-ui/react";
import { useState } from "react";
import { useEffect } from "react";
import { Radio, RadioGroup } from "@chakra-ui/react";
import { Checkbox, CheckboxGroup } from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import Slider from "react-slick";
import React, { Component } from "react";
// import "slick-carousel/slick/slick.css" ;
// import "slick-carousel/slick/slick-theme.css";
import Footer from "../Footer";
import {
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
  Flex,
} from "@chakra-ui/react";
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
} from "@chakra-ui/react";

export default function Excercise() {
  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };

  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(1);
  const [value, setValue] = useState(1);
  const [category, setCategory] = useState("Maintaining");
  const [tableData, setTabledata] = useState([]);

  let c0 = 1;
  useEffect(() => {
    getdata(category);
  }, []);

  const getdata = async () => {
    let res = await fetch(
      `http://localhost:8080/posts?Category=Maintaining&_page=${c0}`
    );

    let gymdata = await res.json();
    console.log(gymdata);

    setData(gymdata);
  };

  useEffect(() => {
    getdataforTale(category);
  }, [category]);

  const getdataforTale = async () => {
    let res = await fetch(
      `http://localhost:8080/posts?Category=${category}&_page=${c0}`
    );

    let gymdata = await res.json();
    console.log(gymdata);

    setTabledata(gymdata);
  };

  return (
    <div>
      <Heading marginTop={"50px"}>JEFIT Workout Routine Database</Heading>

      <Heading marginTop={"30px"}>Featured Workout plans</Heading>
      <Heading
        marginTop={"30px"}
        fontSize="25px"
        color={"gray "}
        marginBottom="50px"
      >
        Try one of these professionally designed workout plans
      </Heading>

      <Box w="100%" padding={"50px 40px 40px 80px"}>
        <Slider {...settings}>
          {data.map((el) => (
            <div key={el.id} boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"}>
              <Img w="80%" src={el.image} borderRadius={"10px"} />
              <Heading marginTop={"30px"} marginLeft="-40px" fontSize={"22px"}>
                {el.title}
              </Heading>
            </div>
          ))}
        </Slider>
      </Box>

      <Box w="100%" padding={"50px 40px 40px 80px"}>
        <Slider {...settings}>
          {data.map((el) => (
            <div key={el.id} boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"}>
              <Img w="80%" src={el.image} borderRadius={"10px"} />
              <Heading marginTop={"30px"} marginLeft="-40px" fontSize={"22px"}>
                {el.title}
              </Heading>
            </div>
          ))}
        </Slider>
      </Box>

      {/* 3 */}
      <Heading marginTop={"50px"}>Jefit Workout plans</Heading>

      <Heading marginTop={"30px"} color="gray" fontSize={"28px"}>
        Filter results down to your specific needs and find a new plan
      </Heading>

      <Box
        Box
        w="90%"
        paddingLeft={"30px"}
        marginLeft={"80px"}
        marginTop={"30px"}
      >
        <RadioGroup onChange={setValue} value={value}>
          <Stack direction="row" gap={10}>
            <Radio value="1">Male</Radio>
            <Radio value="2">Female</Radio>
            <Radio value="3">Both</Radio>
            <Checkbox colorScheme="blue" defaultChecked>
              Checkbox
            </Checkbox>
            <Checkbox colorScheme="blue" defaultChecked>
              Checkbox
            </Checkbox>
            <Checkbox colorScheme="blue" defaultChecked>
              Checkbox
            </Checkbox>
            <Box>
              <Stack direction="row">
                <Input placeholder="Search" padding={"20px"} />

                <Box
                  as="button"
                  height="39px"
                  lineHeight="1.2"
                  transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
                  border="1px"
                  px="20px"
                  borderRadius="2px"
                  fontSize="14px"
                  fontWeight="semibold"
                  bg="white"
                  borderColor="#ccd0d5"
                  color="#4b4f56"
                  _hover={{ bg: "#ebedf0" }}
                  _active={{
                    bg: "#dddfe2",
                    transform: "scale(0.98)",
                    borderColor: "#bec3c9",
                  }}
                  _focus={{
                    boxShadow:
                      "0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)",
                  }}
                >
                  Search
                </Box>
              </Stack>
            </Box>
          </Stack>
        </RadioGroup>
      </Box>

      <Box paddingTop="60px" marginBottom={"50px"}>
        <Grid w="90%" margin={"auto"} templateColumns="repeat(4, 1fr)" gap={6}>
          <GridItem w="100%">
            <Heading fontSize={"25px"} marginBottom="30px">
              All Categories:
            </Heading>
            <List>
              <ListItem
                _hover={{
                  fontWeight: "bold",
                  cursor: "pointer",
                  transition: "all .3s ease",
                  transform: "translateX(-10px)",
                  opacity: "100%",
                }}
                onClick={(e) => setCategory(e.target.innerText)}
              >
                Maintaining
              </ListItem>
              <ListItem
                ListItem
                _hover={{
                  fontWeight: "bold",
                  cursor: "pointer",
                  transition: "all .3s ease",
                  transform: "translateX(-10px)",
                  opacity: "100%",
                }}
                onClick={(e) => setCategory(e.target.innerText)}
              >
                Bulking
              </ListItem>
              <ListItem>Cutting</ListItem>
              <ListItem>Sport</ListItem>
            </List>
          </GridItem>
          <GridItem w="100%">
            <Heading fontSize={"25px"} marginBottom="20px">
              Sort by:
            </Heading>
            <List>
              <ListItem>Latest</ListItem>
              <ListItem>Most Popular</ListItem>
              <ListItem>Most Downloaded</ListItem>
            </List>
          </GridItem>
          <GridItem w="100%">
            <Heading fontSize={"25px"} marginBottom="30px">
              Exp. Level:
            </Heading>
            <List>
              <ListItem>Beginner</ListItem>
              <ListItem>Intermediate</ListItem>
              <ListItem>Advanced</ListItem>
            </List>
          </GridItem>
          <GridItem w="100%">
            <Heading fontSize={"25px"} marginBottom="30px">
              Type:
            </Heading>
            <List>
              <ListItem> Featured</ListItem>
              <ListItem> Elite</ListItem>
              <ListItem> Free</ListItem>
            </List>
          </GridItem>
        </Grid>
      </Box>

      <Box w="90%" margin={"auto"}>
        <TableContainer>
          <Table variant="striped" colorScheme="teal">
            <TableCaption>Imperial to metric conversion factors</TableCaption>
            <Thead>
              <Tr>
                <Th> Plan Name</Th>
                <Th>Frequency</Th>
                <Th>Category</Th>
                <Th>Exp. Level</Th>
                <Th>Views/Downloads </Th>
                <Th> Created By</Th>
                <Th> Elite/Free</Th>
              </Tr>
            </Thead>
            <Tbody>
              {tableData.map((el) => (
                <Tr>
                  <Td color={"blue"} fontWeight="bold">
                    {" "}
                    <Flex gap={"10px"} alignItems="center">
                      <Img w="25%" src={el.image} />
                      {el.title}{" "}
                    </Flex>
                  </Td>
                  <Td>{el.Frequency}</Td>
                  <Td>{el.Category}</Td>

                  <Td>{el.Difficulty}</Td>
                  <Td>{el.Views}</Td>
                  <Td color={"blue"} fontWeight="bold">
                    {el.Created}
                  </Td>
                  <Td>{el.status}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>

      <Footer />
    </div>
  );
}

//

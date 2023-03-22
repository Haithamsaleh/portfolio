import React from 'react'
import {
    Box,
    Heading,
    Container,
    Text,
    Button,
    Stack,
    Icon,
    useColorModeValue,
    Flex, Image, Link, chakra,
  } from '@chakra-ui/react';
  import logo from '../../../public/pngegg.png'
const Card_one = () => {
  return (
    <Box
    h='40rem'
    id='card1'
  mx="auto"
  rounded="lg"
  shadow="md"
  bg="rgba(255, 255, 255, 0.8)"
  _dark={{ bg: "gray.800" }}
  maxW="7xl"
>


  <Box p={6}>
    <Box>
      <chakra.span
        fontWeight="bold"
        fontSize="4xl"
        textTransform="uppercase"
        color="brand.600"
        _dark={{ color: "brand.400" }}
        ml='0.5rem'

      >
        Hi, i'm 
        
      </chakra.span>
      <chakra.span
        fontWeight="bold"
        fontSize="4xl"
        textTransform="uppercase"
        color="#646AFF"
        _dark={{ color: "brand.400" }}
      >
        
        &nbsp; Haitham <br/>
      </chakra.span>
      <chakra.span
        fontWeight="bold"
        fontSize="4xl"
        textTransform="uppercase"
        color="#646AFF"
        ml='5rem'
        _dark={{ color: "brand.400" }}
      >
        web developer 
      </chakra.span>
      <Image w='30rem' ml='90==rem' src= {logo}/>
      <Link
        display="block"
        color="gray.800"
        _dark={{ color: "white" }}
        fontWeight="bold"
        fontSize="2xl"
        mt={2}
        _hover={{ color: "gray.600", textDecor: "underline" }}
      >
        I Built A Successful Blog In One Year
      </Link>
      <chakra.p
        mt={2}
        fontSize="sm"
        color="gray.600"
        _dark={{ color: "gray.400" }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie
        parturient et sem ipsum volutpat vel. Natoque sem et aliquam
        mauris egestas quam volutpat viverra. In pretium nec senectus
        erat. Et malesuada lobortis.
      </chakra.p>
    </Box>

    <Box mt={4}>
      <Flex alignItems="center">
        <Flex alignItems="center">
          <Image
            h={10}
            fit="cover"
            rounded="full"
            src="https://images.unsplash.com/photo-1586287011575-a23134f797f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=48&q=60"
            alt="Avatar"
          />
          <Link
            mx={2}
            fontWeight="bold"
            color="gray.700"
            _dark={{ color: "gray.200" }}
          >
            Jone Doe
          </Link>
        </Flex>
        <chakra.span
          mx={1}
          fontSize="sm"
          color="gray.600"
          _dark={{ color: "gray.300" }}
        >
          21 SEP 2015
        </chakra.span>
      </Flex>
    </Box>
  </Box>
</Box>

  )
}

export default Card_one
import React, { useState } from 'react';
import { QueryClientProvider, QueryClient } from 'react-query';
import { ChakraProvider } from "@chakra-ui/react";
import { Heading } from "@chakra-ui/react";
import Header from './components/Header';
import { Flex, Spacer, Box  } from "@chakra-ui/react"
import People from './components/People';
import Planets from './components/Planets'
const App = () => {
    const [endPoint, setEndPoint] = useState('people')
    const queryClient = new QueryClient()
    return (
        <ChakraProvider>
            <Flex direction="column" >
                <Heading colorScheme="teal" m="40px" alignSelf="center">
                    The Star Wars Fans
                </Heading>
                <Box alignSelf="center">
                    <Header setEndPoint={setEndPoint}/>
                </Box>
                <Box m="10">
                    {endPoint === 'people' ?
                        <QueryClientProvider client = {queryClient}>
                            <People />
                        </QueryClientProvider>
                        : <QueryClientProvider client = {queryClient}>
                            <Planets />
                        </QueryClientProvider>
                    }
                </Box>
            </Flex>
        </ChakraProvider>
    )
}

export default App;
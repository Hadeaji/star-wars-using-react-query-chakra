import React, { useState } from 'react';
import {  useQuery } from 'react-query';
import { Flex, Button,Text,Box, Spinner } from "@chakra-ui/react";
import "../assets/box.css"
import Planet from './Planet'

const getPlanets = async ({queryKey}) => {
    const [key,pageNum] = queryKey
    console.log(key)
    const data = await fetch(`https://swapi.dev/api/planets/?page=${pageNum}`);
    return data.json();
}

const Planets = () => {
    const [ pageNum , setpage] = useState(1)
    // console.log(pageNum)
    const query = ['planets', pageNum]
    const {data,isLoading, isError, error} = useQuery(query, getPlanets)
    


    if (isLoading) {
       return (<Flex direction="column" justifyContent="center" alignItems="center" >
           <Spinner size="xl" margin="30px" /> Loading...
        </Flex>)
    }
    if (isError) {
       return (<div>
            {error.message}
        </div>)
    }
    if (data){
    return (
        
        <Box>
            <Text fontSize="35px" color="teal" textAlign="center" mb="30px">
                Planets
            </Text>
            <div className="mm">
            {data.results.map((planet) => {
                return (
                    <Box key = {planet.name} m="20px" minWidth="150px" bg="whitesmoke" borderRadius="10px" p="15px">
                        <Planet planet = {planet} />
                    </Box>
                )
            })}

            </div>
            <Flex justifyContent="center" mt="20px">
                <Box>

            <Button width="150px" m='10px' onClick={()=> { setpage(Math.max(pageNum-1 , 1))}} disabled = {pageNum === 1}>
                 Previous
            </Button>
                <Text m="10px" display="inline">
                    {`Page No: ${pageNum}`}
                </Text>
            <Button width="150px" m="10px" onClick={()=> { setpage(Math.min(pageNum+1 , data.count/10))}} disabled = {pageNum === data.count/10}>
                next
            </Button>
                </Box>
            </Flex>
        </Box>
    )}
    else{
        return(
            <>
            </>
        )
    }
};

export default Planets;
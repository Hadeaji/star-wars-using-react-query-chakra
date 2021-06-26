import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { Flex, Button,Text,Box, Spinner } from "@chakra-ui/react";
import Person from './Person'
import "../assets/box.css"

const getPlanets = async ({queryKey}) => {
    const [key, page] = queryKey
    console.log(key);
    const data = await fetch(`https://swapi.dev/api/people/?page=${page}`)
    return data.json()
};

const People = () => {
    const [page,setPage] = useState(1)
    const query = ['people',page]
    const { data, isLoading, isError, error } =  useQuery(query, getPlanets)
    // console.log(data)
    if (isLoading){
        return(<Flex direction="column" justifyContent="center" alignItems="center" >
        <Spinner size="xl" margin="30px" /> Loading...
     </Flex>)
    }
    if (isError) {
        return <div>{error.message}</div>
    }
    if (data){
    return(
        <Box>
            <Text fontSize="35px" color="teal" textAlign="center" mb="30px">
                People
            </Text>

            <div className="mm">
                {data.results.map(person => <Box m="20px" minWidth="150px" bg="whitesmoke" borderRadius="10px" p="15px" key={person.name}><Person  person={person} /></Box>)}
            </div>

            <Flex justifyContent="center" mt="20px">
                <Box>
                    <Button width="150px" onClick={()=> { setPage(Math.max(page-1 , 1))}} disabled = {page === 1} m="10px">
                        Previous
                    </Button>
                        <Text m="10px" display="inline">
                            {`Page No: ${page}`}
                        </Text>
                    <Button width="150px" m="10px" onClick={()=> { setPage(Math.min(page+1 ,Math.ceil(data.count/10)))}} disabled = {page ===Math.ceil(data.count/10)}>
                        next
                    </Button>

                </Box>
            </Flex>

        </Box>
    )}
    else{
        return(<>
        </>)
    }
};

export default People;
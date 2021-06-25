import React from 'react';
import { Button, ButtonGroup } from "@chakra-ui/react"


const Header = ({setEndPoint}) =>{
    return(
        <ButtonGroup colorScheme="teal" spacing="4" px="40px" py="20px">
            <Button size="md" onClick = {()=> setEndPoint('people')}>
                People
            </Button>

            <Button size="md" onClick={()=> setEndPoint('planets')}>
                Planets
            </Button>
        </ButtonGroup >
    )
};

export default Header;
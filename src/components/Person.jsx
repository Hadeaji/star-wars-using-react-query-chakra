import React from 'react';
import { Text } from "@chakra-ui/react";

const Person = ({person}) =>{
    return (
        <div>
            <Text fontSize="18px" fontFamily="cursive" color="teal.800" fontWeight="bold">
                {person.name}
            </Text>
            <Text fontSize="16px" fontFamily="cursive" color="teal.400">
                <span style={{color: "grey"}}>Eye color: </span> {person.eye_color}
            </Text>
            <Text fontSize="16px" fontFamily="cursive" color="teal.400">
                <span style={{color: "grey"}}>height:</span> {person.height}
            </Text>
        </div>
    )
};

export default Person;
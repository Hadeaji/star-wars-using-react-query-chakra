import React from 'react';
import { Text } from "@chakra-ui/react";

const Planet = ({planet}) => {
    return(
        <div>
            <Text fontSize="18px" fontFamily="cursive" color="teal.800" fontWeight="bold">
                {planet.name}
            </Text>
            
            <Text fontSize="16px" fontFamily="cursive" color="teal.400">
                <span style={{color: "grey"}}>Climate: </span> {planet.climate}
            </Text>
            <Text fontSize="16px" fontFamily="cursive" color="teal.400">
                <span style={{color: "grey"}}>Terrain: </span>{planet.terrain}
            </Text>
        </div>
    )
}

export default Planet;
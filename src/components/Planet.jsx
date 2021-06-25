import React from 'react';

const Planet = ({planet}) => {
    return(
        <div>
            <h3>
                {planet.name}
            </h3>
            
            <h4>
                {planet.climate}
            </h4>
            <h4>
                {planet.terrain}
            </h4>
        </div>
    )
}

export default Planet;
import React from 'react';

const Header = ({setEndPoint}) =>{
    return(
        <div>
            <button onClick = {()=> setEndPoint('people')}>
                People
            </button>

            <button onClick={()=> setEndPoint('planets')}>
                Planets
            </button>
        </div>
    )
};

export default Header;
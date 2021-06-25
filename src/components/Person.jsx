import React from 'react';

const Person = ({person}) =>{
    return (
        <div>
            <h3>
                {person.name}
            </h3>
            <h4>
                {person.eye_color}
            </h4>
            <h4>
                {person.height}
            </h4>
        </div>
    )
};

export default Person;
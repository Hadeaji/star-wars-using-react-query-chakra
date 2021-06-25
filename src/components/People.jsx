import React, { useState } from 'react';
import { useQuery } from 'react-query';

import Person from './Person'

const getPlanets = async ({queryKey}) => {
    const [key, page] = queryKey
    const data = await fetch(`https://swapi.dev/api/people/?page=${page}`)
    return data.json()
};

const People = () => {
    const [page,setPage] = useState(1)
    const query = ['people',page]
    const { data, isLoading, isError, error } =  useQuery(query, getPlanets)
    // console.log(data)
    if (isLoading){
        return <div>Loading...</div>
    }
    if (isError) {
        return <div>{error.message}</div>
    }
    if (data){
    return(
        <div>
            <button onClick={()=> { setPage(Math.max(page-1 , 1))}} disabled = {page === 1}>
                 Previous
            </button>
                <span>
                    {`Page No: ${page}`}
                </span>
            <button onClick={()=> { setPage(Math.min(page+1 ,Math.ceil(data.count/10)))}} disabled = {page ===Math.ceil(data.count/10)}>
                next
            </button>
            <h1>
                People
            </h1>
            {data.results.map(person => <div key={person.name}><Person  person={person} /></div>)}
        </div>
    )}
    else{
        return(<>
        </>)
    }
};

export default People;
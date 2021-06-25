import React, { useState } from 'react';
import {  useQuery } from 'react-query';

import Planet from './Planet'

const getPlanets = async ({queryKey}) => {
    const [key,pageNum] = queryKey
    // console.log(page)
    const data = await fetch(`https://swapi.dev/api/planets/?page=${pageNum}`);
    return data.json();
}

const Planets = () => {
    const [ pageNum , setpage] = useState(1)
    // console.log(pageNum)
    const query = ['planets', pageNum]
    const {data,isLoading, isError, error} = useQuery(query, getPlanets)
    


    if (isLoading) {
       return (<div>
            Loading...
        </div>)
    }
    if (isError) {
       return (<div>
            {error.message}
        </div>)
    }
    if (data){
    return (
        
        <div>
            <h1>
                Planets
            </h1>
            <button onClick={()=> { setpage(Math.max(pageNum-1 , 1))}} disabled = {pageNum === 1}>
                 Previous
            </button>
                <span>
                    {`Page No: ${pageNum}`}
                </span>
            <button onClick={()=> { setpage(Math.min(pageNum+1 , data.count/10))}} disabled = {pageNum === data.count/10}>
                next
            </button>
            {data.results.map((planet) => {
                return (
                    <div key = {planet.name}>
                        <Planet planet = {planet} />
                    </div>
                )
            })}
        </div>
    )}
    else{
        return(
            <>
            </>
        )
    }
};

export default Planets;
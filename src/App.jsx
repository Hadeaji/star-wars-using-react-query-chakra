import React, { useState } from 'react';
import { QueryClientProvider, QueryClient } from 'react-query';

import Header from './components/Header'
import People from './components/People';
import Planets from './components/Planets'
const App = () => {
    const [endPoint, setEndPoint] = useState('people')
    const queryClient = new QueryClient()
    return (
        <div>
            <h1>
                The Star Wars Fans
            </h1>
            <Header setEndPoint={setEndPoint} />
            {endPoint === 'people' ?
                <QueryClientProvider client = {queryClient}>
                    <People />
                </QueryClientProvider>
                : <QueryClientProvider client = {queryClient}>

                    <Planets />
                </QueryClientProvider>
            }
        </div>
    )
}

export default App;
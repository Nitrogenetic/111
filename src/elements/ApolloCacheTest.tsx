import React, {useState} from 'react';
import { InMemoryCache, ApolloClient } from '@apollo/client';

const client = new ApolloClient({
    // ...other arguments...
    cache: new InMemoryCache("options")
});

interface ApolloTestCacheProps {
    children: JSX.Element
}

const ApolloTestCache: React.FC<ApolloTestCacheProps> = props => {
    const {children} = props

    return (
        <div>{children}</div>
    );
}

export default ApolloTestCache;
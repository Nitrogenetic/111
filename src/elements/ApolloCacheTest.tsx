import React, {useState} from 'react';
import { InMemoryCache, ApolloClient } from '@apollo/client';

const client = new ApolloClient({
    // ...other arguments...
    cache: new InMemoryCache("options")
});

function ApolloTestCache(props) {
    const {children} = props

    return (
        <div>{children}</div>
    );
}

export default ApolloTestCache;
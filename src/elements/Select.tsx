import React, {useState} from 'react';
import ApolloTestCache from "./ApolloCacheTest";
import Pagination from "./Pagination";

interface SelectProps {
    children: JSX.Element
    title: string
}

function Select(props:SelectProps) {
    const {children, title} = props

    return (
        <div className={"select"}>
            <p className={"selectTitle"}>{title}</p>
            <div className={"selectCheckBoxes"}>
                {children}
            </div>
            <ApolloTestCache>
                Data
            </ApolloTestCache>
        </div>
    );
}

export default Select;
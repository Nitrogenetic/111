import React, {useState} from 'react';
import ApolloTestCache from "./ApolloCacheTest";

interface SelectProps {
    children: JSX.Element
    title: string
}

const GolfClubBodyFilterSelectTemplate: React.FC<SelectProps> = (props) => {
    const {children, title} = props

    return (
        <div className={"select"}>
            <p className={"selectTitle"}>{title}</p>
            <div className={"selectCheckBoxes"}>
                {children}
            </div>
            <ApolloTestCache>
                SomeData
            </ApolloTestCache>
        </div>
    );
}

export default GolfClubBodyFilterSelectTemplate;
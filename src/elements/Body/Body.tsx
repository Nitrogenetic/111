import React, {useEffect, useState} from 'react';
import {useSiteMetadata} from "@hooks";
import {FooterProps} from "@elements";
import PaginationPage from "../PaginationPage";
import Section from "../Section";
import PaginationItems from "../PaginationItems";
import SelectBlock from "../SelectBlock";

interface BodyProps {
    children: JSX.Element
}

function Body(props) {

    const {children, title} = props

    return (
        <div className={"body"}>
            <Section/>
            <div className={"bodyMain"}>
                <SelectBlock/>
                <PaginationItems/>
            </div>
        </div>
    );
}

export default Body;
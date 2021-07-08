import React, {useEffect, useState} from 'react';
import {useSiteMetadata} from "@hooks";
import GolfClubBodyTopSection from "../GolfClubBodyTopSection";
import GolfClubPaginationItems from "../GolfClubPaginationItems";
import GolfClubBodyFilterSelectCheckboxies from "../GolfClubBodyFilterSelectCheckboxies";

interface BodyProps {
    children: JSX.Element
}

function Body(props) {

    const {children, title} = props

    return (
        <div className={"body"}>
            <GolfClubBodyTopSection/>
            <div className={"bodyMain"}>
                <GolfClubBodyFilterSelectCheckboxies/>
                <GolfClubPaginationItems/>
            </div>
        </div>
    );
}

export default Body;
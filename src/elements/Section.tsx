import React, {useEffect, useState} from 'react';
import {useSiteMetadata} from "@hooks";
import {FooterProps} from "@elements";
import SectionElement from "./SectionElements";

interface BodyProps {
    children: JSX.Element,
    url: string
}

function Section(props) {

    const {children, url} = props

    return (
        <div className={"section"}>
            <SectionElement url={"#Drivers"}>Drivers</SectionElement>
            <SectionElement url={"#FairwayWoods"}>Fairway Woods</SectionElement>
            <SectionElement url={"#Hybrids"}>Hybrids</SectionElement>
            <SectionElement url={"#Irons"}>Irons</SectionElement>
            <SectionElement url={"#Putters"}>Putters</SectionElement>
            <SectionElement url={"#Wedges"}>Wedges</SectionElement>
        </div>
    );
}

export default Section;
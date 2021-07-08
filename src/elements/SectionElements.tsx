import React, {useEffect, useState} from 'react';
import {useSiteMetadata} from "@hooks";
import {FooterProps} from "@elements";
import {redirects} from "gatsby/dist/redux/reducers";

interface BodyProps {
    children: JSX.Element,
    url: string
}

function SectionElement(props) {
    const {children, url} = props

    function redirectUrl() {
        document.location = url;
    }

    return (
        <>
            <p onClick={() => redirectUrl(url)}>{children}</p>
        </>
)
    ;
}

export default SectionElement;
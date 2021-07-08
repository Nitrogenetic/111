import React, {useEffect, useState} from 'react';
import {useSiteMetadata} from "@hooks";
import {FooterProps} from "@elements";
import Image from "./Image/Image";

interface AuthorisationProps {
    children: JSX.Element
    url: string
    className: string
}

function Authorisation(props) {
    const {children, url, className} = props;

    function redirect() {
        document.location = url;
    }

    return (
        <p className={className} onClick={() => redirect()}>
            {children}
        </p>
    );
}

export default Authorisation;
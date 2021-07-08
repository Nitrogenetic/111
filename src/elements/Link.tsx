import React, {useEffect, useState} from 'react';
import {useSiteMetadata} from "@hooks";
import {FooterProps} from "@elements";
import Image from "./Image/Image";

interface LinkProps {
    children: JSX.Element
    url: string
}

function Link(props) {
    const {children, url} = props;

    function redirect() {
        document.location = url;
    }

    return (
        <p className={'link'} onClick={() => redirect()}>
            {children}
        </p>
    );
}

export default Link;
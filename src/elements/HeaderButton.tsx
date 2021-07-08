import React, {useEffect, useState} from 'react';
import {useSiteMetadata} from "@hooks";
import {FooterProps} from "@elements";

interface HeaderButtonProps {
    value: JSX.Element
    children: JSX.Element
}

function HeaderButton(props) {
    const {value, children} = props;

    function search(value) {
        document.location = '#' + value;
    }

    return (
        <>
            <button className={"headerButton"} onClick={() => search(value)}>
                {children}
            </button>
        </>
    )
}

export default HeaderButton;
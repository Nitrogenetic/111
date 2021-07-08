import React, {useEffect, useState} from 'react';
import {useSiteMetadata} from "@hooks";
import {FooterProps} from "@elements";

interface EnterEmailButtonProps {
    value: JSX.Element
    children: JSX.Element
}

function EnterEmailButton(props: EnterEmailButtonProps) {
    const {value, children} = props;

    function sendEmail(value) {
        document.location = '#Email:' + value;
    }

    return (
        <>
            <button className={"enterEmailButton"} onClick={() => sendEmail(value)}>
                {children}
            </button>
        </>
    )
}

export default EnterEmailButton;
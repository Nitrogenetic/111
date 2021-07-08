import React, {useEffect, useState} from 'react';
import {useSiteMetadata} from "@hooks";
import {FooterProps} from "@elements";

function FAQ() {

    function redirectFAQ() {
        document.location = "#FAQ";
    }

    return (
        <>
            <p className={"FAQ"} onClick={() => redirectFAQ()}>FAQ</p>
        </>
    )
}

export default FAQ;
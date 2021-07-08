import React, {useEffect, useState} from 'react';
import {useSiteMetadata} from "@hooks";
import {FooterProps} from "@elements";

interface FooterInfoProps {
    topLeft: JSX.Element
    topRight: JSX.Element
    bottomLeft: JSX.Element
    bottomRight: JSX.Element
    enterEmailInput: JSX.Element
    FAQ: JSX.Element
}

function FooterInfo(props: FooterInfoProps) {
    const {topLeft, topRight, bottomLeft, bottomRight, enterEmailInput, FAQ} = props;

    return (
        <div className={"footerInfo"}>
            <div className={"footerInfoLeft"}>
                <p className={"footerInfoTopLeft"}>{topLeft}</p>
                <p className={"footerInfoBottomLeft"}>{bottomLeft}</p>
                <div>{enterEmailInput}</div>
            </div>
            <div className={"footerInfoRight"}>
                <p className={"footerInfoTopRight"}>{topRight}</p>
                <p className={"footerInfoBottomRight"}>{bottomRight}</p>
                <div>{FAQ}</div>
            </div>
        </div>
    );
}

export default FooterInfo;
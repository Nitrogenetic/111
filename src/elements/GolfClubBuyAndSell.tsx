import React, {useEffect, useState} from 'react';
import {useSiteMetadata} from "@hooks";
import {FooterProps} from "@elements";
import Image from "./Image/Image";

function GolfClubBuyAndSell() {

    return (
        <>
            <p className={"golfClubs"}>Golf Clubs</p>
            <p className={"buyAndSell"}>Buy & Sell</p>
        </>
    )
}

export default GolfClubBuyAndSell;
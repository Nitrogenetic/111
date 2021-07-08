import React, {useEffect, useState} from 'react';
import GolfClubBodyTopHoverSectionElements from "./GolfClubBodyTopHoverSectionElements";

const GolfClubBodyTopSection: React.FC = () => {

    return (
        <div className={"section"}>
            <GolfClubBodyTopHoverSectionElements url={"/#Drivers"}>Drivers</GolfClubBodyTopHoverSectionElements>
            <GolfClubBodyTopHoverSectionElements url={"/#FairwayWoods"}>Fairway Woods</GolfClubBodyTopHoverSectionElements>
            <GolfClubBodyTopHoverSectionElements url={"/#Hybrids"}>Hybrids</GolfClubBodyTopHoverSectionElements>
            <GolfClubBodyTopHoverSectionElements url={"/#Irons"}>Irons</GolfClubBodyTopHoverSectionElements>
            <GolfClubBodyTopHoverSectionElements url={"/#Putters"}>Putters</GolfClubBodyTopHoverSectionElements>
            <GolfClubBodyTopHoverSectionElements url={"/#Wedges"}>Wedges</GolfClubBodyTopHoverSectionElements>
        </div>
    );
}

export default GolfClubBodyTopSection;
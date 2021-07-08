import React, {useEffect, useState} from 'react';
import {Link} from "gatsby";

interface GolfClubFooterEnterEmailButtonProps {
    children: JSX.Element
    value: Location
}

const GolfClubFooterEnterEmailButton: React.FC<GolfClubFooterEnterEmailButtonProps> = props => {
    const {value, children} = props;

    return (
        <>
            <Link to={'#Email:' + value}>
                <button className={"enterEmailButton"}>
                    {children}
                </button>
            </Link>
        </>
    )
}

export default GolfClubFooterEnterEmailButton;
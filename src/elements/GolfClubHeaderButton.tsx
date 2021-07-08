import React, {useEffect, useState} from 'react';
import {Link} from 'gatsby';

interface GolfClubHeaderButtonProps {
    value: JSX.Element
    children: JSX.Element
}

const GolfClubHeaderButton: React.FC<GolfClubHeaderButtonProps> = props => {
    const {value, children} = props;

    return (
        <>
            <Link to={'/#'+value}>
                <button className={"GolfClubHeaderButton"}>
                    {children}
                </button>
            </Link>
        </>
    )
}

export default GolfClubHeaderButton;
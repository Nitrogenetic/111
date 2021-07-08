import React, {useEffect, useState} from 'react';
import { Link } from "gatsby";

interface GolfClubHeaderAuthorisationButtonsProps {
    children: JSX.Element
    url: string
    className: string
}

const GolfClubHeaderAuthorisationButtons: React.FC<GolfClubHeaderAuthorisationButtonsProps> = props => {
    const {children, url, className} = props;

    return (
        <Link to={url}>
            <p className={className}>
                {children}
            </p>
        </Link>
    )
}

export default GolfClubHeaderAuthorisationButtons;
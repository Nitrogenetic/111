import React, {useEffect, useState} from 'react';
import {Link} from "gatsby";

interface BodyProps {
    children: JSX.Element,
    url: string
}

const GolfClubBodyTopHoverSectionElements: React.FC<BodyProps> = props => {
    const {children, url} = props

    return (
        <p>
            <Link to={url}>
                {children}
            </Link>
        </p>
    )
}

export default GolfClubBodyTopHoverSectionElements;
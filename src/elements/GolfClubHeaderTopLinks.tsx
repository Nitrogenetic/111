import React, {useEffect, useState} from 'react';
import { Link } from 'gatsby';

interface GolfClubHeaderTopLinksProps {
    children: JSX.Element
    url: string
}

const GolfClubHeaderTopLinks: React.FC<GolfClubHeaderTopLinksProps> = props => {
    const {children, url} = props;

    return (
        <>
            <Link to={url}>
                <p className={'link'}>
                    {children}
                </p>
            </Link>
        </>
    );
}

export default GolfClubHeaderTopLinks;
import React, {useEffect, useState} from 'react';
import { Link } from 'gatsby';

const GolfClubFooterFAQSpecialLink: React.FC = () => {

    return (
        <>
            <Link to={'/#FAQ'}>
                <p className={"GolfClubFooterFAQSpecialLink"}>FAQ</p>
            </Link>
        </>
    )
}

export default GolfClubFooterFAQSpecialLink;
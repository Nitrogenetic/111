import React, {memo} from 'react'
import GolfClubFooterInfoParentBlock from "../GolfClubFooterInfoParentBlock";
import GolfClubFooterDescriptionPositionTopLeft from "../GolfClubFooterDescriptionPositionTopLeft";
import GolfClubFooterDescriptionPositionTopRight from "../GolfClubFooterDescriptionPositionTopRight";
import GolfClubFooterDescriptionPositionBottomRight from "../GolfClubFooterDescriptionPositionBottomRight";
import GolfClubFooterDescriptionPositionBottomLeft from "../GolfClubFooterDescriptionPositionBottomLeft";
import GolfClubFooterEnterEmailInput from "../GolfClubFooterEnterEmailInput";
import GolfClubFooterFAQSpecialLink from "../GolfClubFooterFAQSpecialLink";

const Footer: React.FC = () => {

    return (
        <div className={'footer'} role="contentinfo">
            <GolfClubFooterInfoParentBlock
                topLeft={<GolfClubFooterDescriptionPositionTopLeft/>}
                topRight={<GolfClubFooterDescriptionPositionTopRight/>}
                bottomLeft={<GolfClubFooterDescriptionPositionBottomLeft/>}
                bottomRight={<GolfClubFooterDescriptionPositionBottomRight/>}
                enterEmailInput={<GolfClubFooterEnterEmailInput/>}
                FAQ={<GolfClubFooterFAQSpecialLink/>}
            />
        </div>
    )
}

export default memo(Footer)

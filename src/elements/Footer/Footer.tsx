import React, {memo} from 'react'
import {Container} from '@elements'
import {useSiteMetadata} from '@hooks'
import FooterInfo from "../FooterInfo";
import TopLeft from "../TopLeft";
import TopRight from "../TopRight";
import BottomRight from "../BottomRight";
import BottomLeft from "../BottomLeft";
import EnterEmailInput from "../EnterEmailInput";
import FAQ from "../FAQ";

export interface FooterProps {
}

const Footer: React.FC<FooterProps> = props => {
    const {navigation} = useSiteMetadata()

    return (
        <div className={'footer'} role="contentinfo">
            <FooterInfo
                topLeft={<TopLeft/>}
                topRight={<TopRight/>}
                bottomLeft={<BottomLeft/>}
                bottomRight={<BottomRight/>}
                enterEmailInput={<EnterEmailInput/>}
                FAQ={<FAQ/>}
            />
        </div>
    )
}

export default memo(Footer)

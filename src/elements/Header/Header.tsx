import React, {memo} from 'react'
import {Container} from '@elements'
import {useSiteMetadata} from '@hooks'
import GolfClubHeaderTopLeftSmallLogo from "../GolfClubHeaderTopLeftSmallLogo";
import GolfClubHeaderTopLinks from "../GolfClubHeaderTopLinks";
import GolfClubHeaderAuthorisationButtons from "../GolfClubHeaderAuthorisationButtons";
import GolfClubHeaderBuyAndSellDescription from "../GolfClubHeaderBuyAndSellDescription";
import GolfClubHeaderMainInput from "../GolfClubHeaderMainInput";

export interface HeaderProps {

}

const Header: React.FC<HeaderProps> = props => {
    const {navigation} = useSiteMetadata()

    return (
        <div className={'header'}>
            <GolfClubHeaderTopLeftSmallLogo/>
            <GolfClubHeaderTopLinks url={"/#Browse"}>Browse</GolfClubHeaderTopLinks>
            <GolfClubHeaderTopLinks url={"/#About"}>About</GolfClubHeaderTopLinks>
            <GolfClubHeaderTopLinks url={"/#FAQ"}>FAQ</GolfClubHeaderTopLinks>
            <GolfClubHeaderAuthorisationButtons url={"/#Sign_up"} className={"signUp"}>Sign up</GolfClubHeaderAuthorisationButtons>
            <GolfClubHeaderAuthorisationButtons url={"/#Sign_in"} className={"signIn"}>Sign in</GolfClubHeaderAuthorisationButtons>
            <GolfClubHeaderBuyAndSellDescription/>
            <GolfClubHeaderMainInput/>
        </div>
    )
}

export default memo(Header)

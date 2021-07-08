import React, {memo} from 'react'
import {Container} from '@elements'
import {useSiteMetadata} from '@hooks'
import Group from "../Group";
import Link from "../Link";
import Authorisation from "../Authorisation";
import GolfClubBuyAndSell from "../GolfClubBuyAndSell";
import HeaderInput from "../HeaderInput";

export interface HeaderProps {

}

const Header: React.FC<HeaderProps> = props => {
    const {navigation} = useSiteMetadata()

    return (
        <div className={'header'}>
            <Group/>
            <Link url={"#Browse"}>Browse</Link>
            <Link url={"#About"}>About</Link>
            <Link url={"#FAQ"}>FAQ</Link>
            <Authorisation url={"#Sign_up"} className={"signUp"}>Sign up</Authorisation>
            <Authorisation url={"#Sign_in"} className={"signIn"}>Sign in</Authorisation>
            <GolfClubBuyAndSell/>
            <HeaderInput/>
        </div>
    )
}

export default memo(Header)

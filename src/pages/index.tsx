import React, {memo} from 'react'
import {RouteComponentProps} from '@reach/router'
import {SEO} from '@components'
import {HomeTest} from '@pages-components/home'
import Body from "../elements/Body/Body";

interface HomeProps extends RouteComponentProps {
}

const Home: React.FC<HomeProps> = props => {
    return (
        <section>
            <Body/>
        </section>
    )
}

export default memo(Home)

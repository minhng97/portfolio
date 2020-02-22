import React from 'react'
import Description from './Description'

import HeaderComponent from '../Header'
import FooterComponent from '../Footer'


class AboutComponent extends React.Component {

    render() {
        return (
            <>
                <HeaderComponent />
                <Description />
                <FooterComponent />
            </>
        )
    }
}

export default AboutComponent
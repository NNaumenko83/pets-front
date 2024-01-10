// eslint-disable-next-line import/no-extraneous-dependencies

import NavWrapper from './Nav.styled'
import CustomLink from '../CustomLink/CustomLink'

function Nav() {
    return (
        <NavWrapper>
            <CustomLink to="/news">News</CustomLink>
            <CustomLink to="/notices">Notices</CustomLink>
            <CustomLink to="/friends">Our friends</CustomLink>
        </NavWrapper>
    )
}

export default Nav

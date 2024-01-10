// eslint-disable-next-line import/no-extraneous-dependencies

import AuthLink from '../AuthLink/AuthLink'
import AuthLinksWrapper from './AuthNav.styled'

function AuthNav() {
    return (
        <AuthLinksWrapper>
            <AuthLink to="/login">Log IN</AuthLink>
            <AuthLink to="/register">Registration</AuthLink>
        </AuthLinksWrapper>
    )
}

export default AuthNav

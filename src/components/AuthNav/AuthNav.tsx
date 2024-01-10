// eslint-disable-next-line import/no-extraneous-dependencies

import AuthLink from '../AuthLink/AuthLink'
import Icon from '../Icon/Icon'
import AuthLinksWrapper from './AuthNav.styled'

function AuthNav() {
    return (
        <AuthLinksWrapper>
            <AuthLink to="/login">
                Log IN <Icon name="pawprint" />
            </AuthLink>
            <AuthLink to="/register">Registration</AuthLink>
        </AuthLinksWrapper>
    )
}

export default AuthNav

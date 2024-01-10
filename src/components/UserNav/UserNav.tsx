// eslint-disable-next-line import/no-extraneous-dependencies
import Button from '../Button/Button'
import CustomLink from '../CustomLink/CustomLink'
import Icon from '../Icon/Icon'
import UserNavWrapper from './UserNav.styled'

function UserNav() {
    const handleButtonClick = () => console.log('LogOut')

    return (
        <UserNavWrapper>
            <CustomLink to="/user">User</CustomLink>
            <Button type="button" onClick={handleButtonClick}>
                <Icon name="logout" />
            </Button>
        </UserNavWrapper>
    )
}

export default UserNav

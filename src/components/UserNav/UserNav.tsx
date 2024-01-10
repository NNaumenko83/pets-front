// eslint-disable-next-line import/no-extraneous-dependencies
import useAuth from 'src/hooks/useAuth'
import Button from '../Button/Button'
import CustomLink from '../CustomLink/CustomLink'
import Icon from '../Icon/Icon'
import UserNavWrapper from './UserNav.styled'

function UserNav() {
    const handleButtonClick = () => console.log('LogOut')
    const { user } = useAuth()

    return (
        <UserNavWrapper>
            <CustomLink to="/user">
                <Icon name="user" width={28} height={28} />
                {user.name}
            </CustomLink>
            <Button type="button" onClick={handleButtonClick}>
                <Icon name="logout" width={28} height={28} />
            </Button>
        </UserNavWrapper>
    )
}

export default UserNav

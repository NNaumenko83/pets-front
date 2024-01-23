/* eslint-disable no-nested-ternary */
import { selectUser } from 'src/redux/auth/selectors'
import AvatarWrapper from './UserAvatar.styled'
import photoDefault from '../../assets/images/PhotoDefault.png'
import { useAppSelector } from 'src/redux/hooks'

interface IUserAvatarProps {
    croppedImage: string | undefined
}

function UserAvatar({ croppedImage }: IUserAvatarProps) {
    const { avatar } = useAppSelector(selectUser)
    console.log('avatar:', avatar)
    return (
        <AvatarWrapper>
            {croppedImage ? (
                <img src={croppedImage} alt="avatar" width="182" />
            ) : avatar ? (
                <img src={avatar} alt="defaultAvatar" width="182" />
            ) : (
                <img src={photoDefault} alt="defaultAvatar" width="182" />
            )}
        </AvatarWrapper>
    )
}

export default UserAvatar

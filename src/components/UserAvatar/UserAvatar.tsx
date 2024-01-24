/* eslint-disable no-nested-ternary */
import { selectUser } from 'src/redux/auth/selectors'
import { useAppSelector } from 'src/redux/hooks'
import AvatarWrapper from './UserAvatar.styled'
import photoDefault from '../../assets/images/PhotoDefault.png'

interface IUserAvatarProps {
    croppedImage: string | undefined
}

function UserAvatar({ croppedImage }: IUserAvatarProps) {
    const { avatarURL } = useAppSelector(selectUser)
    console.log('avatarURL:', avatarURL)
    return (
        <AvatarWrapper>
            {croppedImage ? (
                <img src={croppedImage} alt="avatar" width="182" />
            ) : avatarURL ? (
                <img src={avatarURL} alt="defaultAvatar" width="182" />
            ) : (
                <img src={photoDefault} alt="defaultAvatar" width="182" />
            )}
        </AvatarWrapper>
    )
}

export default UserAvatar

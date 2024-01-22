import AvatarWrapper from './UserAvatar.styled'
import photoDefault from '../../assets/images/PhotoDefault.png'

interface IUserAvatarProps {
    croppedImage: string | null
}

function UserAvatar({ croppedImage }: IUserAvatarProps) {
    return (
        <AvatarWrapper>
            {croppedImage ? (
                <img src={croppedImage} alt="avatar" width="182" />
            ) : (
                <img src={photoDefault} alt="defaultAvatar" width="182" />
            )}
        </AvatarWrapper>
    )
}

export default UserAvatar

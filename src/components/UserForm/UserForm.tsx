/* eslint-disable no-restricted-syntax */
/* eslint-disable no-console */
import { useState } from 'react'
import { getCroppedImg } from 'src/utils/canvasUtils'

import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import axios from 'axios'
import {
    UserFormStyled,
    StyledBox,
    AvatarWrapper,
    InputsUserFormWrapper,
    AvatarInputWrapper,
    UserFormInputGroupStyled,
    AvatarLabel,
    StyledEditIcon,
    StyledUserInfoLabel,
    LabelText,
} from './UserForm.styled'
import CropperImage from '../CropperImage/CropperImage'
import AuthButton from '../AuthButton/AuthButton'

import photoDefault from '../../assets/images/PhotoDefault.png'
import Icon from '../Icon/Icon'
import InputRightAddon from '../InputRightAddon/InputRightAddon'

function readFile(file) {
    return new Promise(resolve => {
        const reader = new FileReader()
        reader.addEventListener('load', () => resolve(reader.result), false)
        reader.readAsDataURL(file)
    })
}

import Input from '../Input/Input'

function UserForm() {
    // =====
    const [open, setOpen] = useState(false)

    const handleClickOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }
    // =====

    const [imageSrc, setImageSrc] = useState(null)
    const [crop, setCrop] = useState({ x: 0, y: 0 })
    const [rotation, setRotation] = useState(0)
    const [zoom, setZoom] = useState(1)
    const [croppedAreaPixels, setCroppedAreaPixels] = useState(null)
    const [croppedImage, setCroppedImage] = useState<string | null>(null)

    const onFileChange = async e => {
        if (e.target.files && e.target.files.length > 0) {
            const file = e.target.files[0]

            const imageDataUrl = await readFile(file)
            setImageSrc(imageDataUrl)
            setOpen(true)
        }
    }

    const showCroppedImage = async () => {
        try {
            const croppedImage = await getCroppedImg(
                imageSrc,
                croppedAreaPixels,
                rotation,
            )
            console.log('donee', { croppedImage })
            setCroppedImage(croppedImage)
            setOpen(false)
        } catch (e) {
            console.error(e)
        }
    }

    const onCropComplete = (croppedArea, croppedAreaPixels) => {
        setCroppedAreaPixels(croppedAreaPixels)
    }

    const handleSubmit = async e => {
        e.preventDefault()

        const avatar = await fetch(croppedImage)
        const blobImage = await avatar.blob()

        const formData = new FormData()

        formData.append('avatar', blobImage, 'croppedImage.jpeg')
        for (const [key, value] of formData.entries()) {
            console.log(key, value)
        }
        const res = await axios.patch('/auth/avatars', formData)
        console.log('res:', res)
    }

    return (
        <div>
            <UserFormStyled onSubmit={handleSubmit}>
                <AvatarInputWrapper>
                    <AvatarWrapper>
                        {croppedImage ? (
                            <img src={croppedImage} alt="avatar" width="182" />
                        ) : (
                            <img
                                src={photoDefault}
                                alt="defaultAvatar"
                                width="182"
                            />
                        )}
                    </AvatarWrapper>
                    <AvatarLabel htmlFor="avatar">
                        <Icon name="camera" width={24} height={24} />
                        Edit Photo
                        <input
                            id="avatar"
                            type="file"
                            onChange={onFileChange}
                            accept="image/*"
                            style={{ display: 'none' }}
                            name="avatar"
                        />
                    </AvatarLabel>
                </AvatarInputWrapper>

                <InputsUserFormWrapper>
                    <StyledUserInfoLabel htmlFor="name">
                        <LabelText> Name:</LabelText>
                        <UserFormInputGroupStyled>
                            <input
                                id="name"
                                type="text"
                                name="name"
                                placeholder="Name"
                            />
                            <InputRightAddon>
                                <StyledEditIcon />
                            </InputRightAddon>
                        </UserFormInputGroupStyled>
                    </StyledUserInfoLabel>
                    <StyledUserInfoLabel htmlFor="email">
                        <LabelText>Email:</LabelText>
                        <UserFormInputGroupStyled>
                            <input
                                id="email"
                                type="email"
                                name="email"
                                placeholder="Email"
                            />
                        </UserFormInputGroupStyled>
                    </StyledUserInfoLabel>
                    <StyledUserInfoLabel htmlFor="birthday">
                        <LabelText>Birthday:</LabelText>
                        <UserFormInputGroupStyled>
                            <input
                                id="birthday"
                                type="text"
                                name="birthday"
                                placeholder="Birthday"
                            />
                        </UserFormInputGroupStyled>
                    </StyledUserInfoLabel>
                    <StyledUserInfoLabel htmlFor="phone">
                        <LabelText>Phone:</LabelText>
                        <UserFormInputGroupStyled>
                            <input id="phone" type="text" placeholder="Phone" />
                        </UserFormInputGroupStyled>
                    </StyledUserInfoLabel>
                    <StyledUserInfoLabel htmlFor="city">
                        <LabelText>City:</LabelText>
                        <UserFormInputGroupStyled>
                            <input id="city" type="text" placeholder="City" />
                        </UserFormInputGroupStyled>
                    </StyledUserInfoLabel>
                </InputsUserFormWrapper>

                <button type="submit">Submit</button>
            </UserFormStyled>
            <Dialog open={open} onClose={handleClose}>
                <DialogContent
                    dividers
                    sx={{
                        background: '#333',
                        position: 'relative',
                        height: 400,
                        width: 400,
                        minWidth: { sm: 200 },
                        padding: 0,
                        overflow: 'hidden',
                    }}
                >
                    <CropperImage
                        image={imageSrc}
                        crop={crop}
                        zoom={zoom}
                        onCropChange={setCrop}
                        onZoomChange={setZoom}
                        onCropComplete={onCropComplete}
                    />
                </DialogContent>
                <DialogActions>
                    <StyledBox>
                        <AuthButton type="button" onClick={showCroppedImage}>
                            APPLY
                        </AuthButton>
                    </StyledBox>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default UserForm

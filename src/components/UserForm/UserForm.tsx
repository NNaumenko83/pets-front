/* eslint-disable no-restricted-syntax */
/* eslint-disable no-console */
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { getCroppedImg } from 'src/utils/canvasUtils'
import * as yup from 'yup'

import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import axios from 'axios'
import parseDateString from 'src/utils/parseDateString'
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

import Input from '../Input/Input'

const today = new Date()

function readFile(file) {
    return new Promise(resolve => {
        const reader = new FileReader()
        reader.addEventListener('load', () => resolve(reader.result), false)
        reader.readAsDataURL(file)
    })
}

const schema = yup
    .object({
        name: yup
            .string()
            .required()
            .matches(/^[a-zA-Z]+$/, 'Input correct name with letters only'),
        email: yup
            .string()
            .required()
            .matches(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/),
        birthday: yup.date().required().transform(parseDateString).max(today),
        phone: yup
            .string()
            .required()
            .matches(
                /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/,
            ),
        city: yup
            .string()
            .required()
            .matches(/^[A-Z][a-zA-Z0-9-' ]*$/),
    })
    .required()

type TFormData = yup.InferType<typeof schema>

function UserForm() {
    const [open, setOpen] = useState(false)

    const handleClickOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    const [imageSrc, setImageSrc] = useState(null)
    const [crop, setCrop] = useState({ x: 0, y: 0 })
    const [rotation, setRotation] = useState(0)
    const [zoom, setZoom] = useState(1)
    const [croppedAreaPixels, setCroppedAreaPixels] = useState(null)
    const [croppedImage, setCroppedImage] = useState<string | null>(null)

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<TFormData>({
        resolver: yupResolver(schema),
    })

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

    // const handleSubmit = async e => {
    //     e.preventDefault()

    //     const avatar = await fetch(croppedImage)
    //     const blobImage = await avatar.blob()

    //     const formData = new FormData()

    //     formData.append('avatar', blobImage, 'croppedImage.jpeg')
    //     for (const [key, value] of formData.entries()) {
    //         console.log(key, value)
    //     }
    //     const res = await axios.patch('/auth/avatars', formData)
    //     console.log('res:', res)
    // }

    return (
        <div>
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
            <UserFormStyled
                onSubmit={handleSubmit(data => {
                    console.log('data:', data)
                })}
            >
                <InputsUserFormWrapper>
                    <StyledUserInfoLabel htmlFor="name">
                        <LabelText> Name:</LabelText>
                        <UserFormInputGroupStyled error={!!errors.name}>
                            <Input
                                id="name"
                                type="text"
                                name="name"
                                placeholder="Name"
                                register={register}
                            />
                            <InputRightAddon>
                                <StyledEditIcon />
                            </InputRightAddon>
                        </UserFormInputGroupStyled>
                    </StyledUserInfoLabel>
                    <StyledUserInfoLabel htmlFor="email">
                        <LabelText>Email:</LabelText>
                        <UserFormInputGroupStyled error={!!errors.email}>
                            <Input
                                id="email"
                                type="email"
                                name="email"
                                placeholder="Email"
                                register={register}
                            />
                        </UserFormInputGroupStyled>
                    </StyledUserInfoLabel>
                    <StyledUserInfoLabel htmlFor="birthday">
                        <LabelText>Birthday:</LabelText>
                        <UserFormInputGroupStyled error={!!errors.birthday}>
                            <Input
                                id="birthday"
                                type="text"
                                name="birthday"
                                placeholder="Birthday"
                                register={register}
                            />
                        </UserFormInputGroupStyled>
                    </StyledUserInfoLabel>
                    <StyledUserInfoLabel htmlFor="phone">
                        <LabelText>Phone:</LabelText>
                        <UserFormInputGroupStyled error={!!errors.phone}>
                            <Input
                                id="phone"
                                name="phone"
                                type="text"
                                placeholder="Phone"
                                register={register}
                            />
                        </UserFormInputGroupStyled>
                    </StyledUserInfoLabel>
                    <StyledUserInfoLabel htmlFor="city">
                        <LabelText>City:</LabelText>
                        <UserFormInputGroupStyled error={!!errors.city}>
                            <Input
                                id="city"
                                name="city"
                                type="text"
                                placeholder="City"
                                register={register}
                            />
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

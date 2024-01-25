/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable jsx-a11y/control-has-associated-label */
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
import { format } from 'date-fns'

import parseDateString from 'src/utils/parseDateString'
import { updateAvatar } from 'src/redux/auth/operations'
import { useAppDispatch, useAppSelector } from 'src/redux/hooks'
import { selectUser } from 'src/redux/auth/selectors'
import {
    emailRegexp,
    phoneRegexp,
    cityRegexp,
    nameRegexp,
} from 'src/constants/regex'
import {
    UserFormWrapper,
    StyledBox,
    InputsUserFormWrapper,
    AvatarInputWrapper,
    UserFormInputGroupStyled,
    AvatarLabel,
    StyledUserInfoLabel,
    LabelText,
    StyledUserForm,
    AvatarWrapper,
} from './UserForm.styled'
import CropperImage from '../CropperImage/CropperImage'
import AuthButton from '../AuthButton/AuthButton'

import Icon from '../Icon/Icon'

import Input from '../Input/Input'
import UserAvatar from '../UserAvatar/UserAvatar'

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
        name: yup.string().required().matches(nameRegexp),
        email: yup.string().required().matches(emailRegexp),
        birthday: yup.date().required().transform(parseDateString).max(today),
        phone: yup.string().required().matches(phoneRegexp),
        city: yup.string().required().matches(cityRegexp),
    })
    .required()

type TFormData = yup.InferType<typeof schema>

function UserForm() {
    const [open, setOpen] = useState(false)
    const [isEditing, setIsEditing] = useState(false)

    const handleClose = () => {
        setOpen(false)
    }

    const [imageSrc, setImageSrc] = useState(null)
    const [crop, setCrop] = useState({ x: 0, y: 0 })
    const [rotation, setRotation] = useState(0)
    const [zoom, setZoom] = useState(1)
    const [croppedAreaPixels, setCroppedAreaPixels] = useState(null)
    const [croppedImage, setCroppedImage] = useState('')

    const dispatch = useAppDispatch()
    const { name, email, phone, city, birthday } = useAppSelector(selectUser)
    console.log('name:', name)

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
            e.target.value = null
            setOpen(true)
        }
    }

    const showCroppedImage = async () => {
        try {
            const image = await getCroppedImg(
                imageSrc,
                croppedAreaPixels,
                rotation,
            )
            setCroppedImage(image)
            setOpen(false)
        } catch (e) {
            console.error(e)
        }
    }

    const onCropComplete = (croppedArea, croppedAreaPixels) => {
        setCroppedAreaPixels(croppedAreaPixels)
    }

    const onEditButtonClick = () => {
        setIsEditing(!isEditing)
    }

    const onConfirmButtonClick = async () => {
        try {
            const avatar = await fetch(croppedImage)
            const blobImage = await avatar.blob()

            const formData = new FormData()

            formData.append('avatar', blobImage, 'croppedImage.jpeg')

            dispatch(updateAvatar(formData))

            setCroppedImage('')
        } catch (error) {
            console.log(error)
        }
    }

    const onCancelButtonClick = () => {
        setCroppedImage('')
    }

    const handleSumbit = data => {
        const { birthday } = data
        const formatedBirthday = format(new Date(birthday), 'dd-MM-yyyy')
        const body = { ...data, birthday: formatedBirthday }
        console.log('body:', body)

        setIsEditing(false)
    }

    return (
        <UserFormWrapper>
            <AvatarInputWrapper>
                <UserAvatar croppedImage={croppedImage} />
                {!croppedImage ? (
                    <AvatarLabel htmlFor="avatar">
                        <AvatarWrapper>
                            <Icon name="camera" width={24} height={24} />
                        </AvatarWrapper>
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
                ) : (
                    <div>
                        <button type="button" onClick={onConfirmButtonClick}>
                            <Icon name="check" />
                        </button>
                        <button type="button" onClick={onCancelButtonClick}>
                            <Icon name="cross-small" />
                        </button>
                    </div>
                )}
            </AvatarInputWrapper>
            <StyledUserForm
                onSubmit={handleSubmit(data => {
                    handleSumbit(data)
                    // setIsEditing(false)
                })}
            >
                <InputsUserFormWrapper>
                    <StyledUserInfoLabel htmlFor="name">
                        <LabelText> Name:</LabelText>
                        <UserFormInputGroupStyled error={!!errors.name}>
                            <Input
                                id="name"
                                defaultValue={name}
                                type="text"
                                name="name"
                                placeholder="Name"
                                register={register}
                                disabled={!isEditing}
                            />
                        </UserFormInputGroupStyled>
                    </StyledUserInfoLabel>
                    <StyledUserInfoLabel htmlFor="email">
                        <LabelText>Email:</LabelText>
                        <UserFormInputGroupStyled error={!!errors.email}>
                            <Input
                                id="email"
                                defaultValue={email}
                                type="email"
                                name="email"
                                placeholder="Email"
                                register={register}
                                disabled={!isEditing}
                            />
                        </UserFormInputGroupStyled>
                    </StyledUserInfoLabel>
                    <StyledUserInfoLabel htmlFor="birthday">
                        <LabelText>Birthday:</LabelText>
                        <UserFormInputGroupStyled error={!!errors.birthday}>
                            <Input
                                id="birthday"
                                defaultValue={birthday}
                                type="text"
                                name="birthday"
                                placeholder="Birthday"
                                register={register}
                                disabled={!isEditing}
                            />
                        </UserFormInputGroupStyled>
                    </StyledUserInfoLabel>
                    <StyledUserInfoLabel htmlFor="phone">
                        <LabelText>Phone:</LabelText>
                        <UserFormInputGroupStyled error={!!errors.phone}>
                            <Input
                                id="phone"
                                defaultValue={phone}
                                name="phone"
                                type="text"
                                placeholder="Phone"
                                register={register}
                                disabled={!isEditing}
                            />
                        </UserFormInputGroupStyled>
                    </StyledUserInfoLabel>
                    <StyledUserInfoLabel htmlFor="city">
                        <LabelText>City:</LabelText>
                        <UserFormInputGroupStyled error={!!errors.city}>
                            <Input
                                id="city"
                                defaultValue={city}
                                name="city"
                                type="text"
                                placeholder="City"
                                register={register}
                                disabled={!isEditing}
                            />
                        </UserFormInputGroupStyled>
                    </StyledUserInfoLabel>
                </InputsUserFormWrapper>
                {isEditing && <AuthButton type="submit">Save</AuthButton>}
                {!isEditing && (
                    <AuthButton type="button" onClick={onEditButtonClick}>
                        Edit
                    </AuthButton>
                )}
            </StyledUserForm>
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
        </UserFormWrapper>
    )
}

export default UserForm

/* eslint-disable no-restricted-syntax */
/* eslint-disable no-console */
import { useState } from 'react'
import { getCroppedImg } from 'src/utils/canvasUtils'

import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import axios from 'axios'
import { UserFormStyled, StyledBox } from './UserForm.styled'
import CropperImage from '../CropperImage/CropperImage'
import AuthButton from '../AuthButton/AuthButton'

function readFile(file) {
    return new Promise(resolve => {
        const reader = new FileReader()
        reader.addEventListener('load', () => resolve(reader.result), false)
        reader.readAsDataURL(file)
    })
}

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
    const [croppedImage, setCroppedImage] = useState<Blob | null>(null)

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
            {croppedImage && <img src={croppedImage} alt="test" width="300" />}
            User form
            <UserFormStyled onSubmit={handleSubmit}>
                <input type="file" onChange={onFileChange} accept="image/*" />
                <label htmlFor="name">
                    Name:
                    <input
                        id="name"
                        type="text"
                        name="name"
                        placeholder="Name"
                    />
                </label>
                <label htmlFor="email">
                    Email:
                    <input
                        id="email"
                        type="email"
                        name="email"
                        placeholder="Email"
                    />
                </label>
                <label htmlFor="birthday">
                    Birthday:
                    <input
                        id="birthday"
                        type="text"
                        name="birthday"
                        placeholder="Birthday"
                    />
                </label>
                <label htmlFor="phone">
                    Phone:
                    <input id="phone" type="text" placeholder="Phone" />
                </label>
                <label htmlFor="city">
                    City:
                    <input id="city" type="text" placeholder="City" />
                </label>
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

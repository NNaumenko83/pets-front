import useModal from 'src/hooks/useModal'
import { useState } from 'react'
import { getCroppedImg } from 'src/utils/canvasUtils'
import AppModal from '../AppModal/AppModal'
import CropperImage from '../CropperImage/CropperImage'
import UserFormStyled from './UserForm.styled'

function readFile(file) {
    return new Promise(resolve => {
        const reader = new FileReader()
        reader.addEventListener('load', () => resolve(reader.result), false)
        reader.readAsDataURL(file)
    })
}

function UserForm() {
    const { isOpen, onClose, openModal } = useModal()
    const [imageSrc, setImageSrc] = useState(null)
    const [crop, setCrop] = useState({ x: 0, y: 0 })
    const [rotation, setRotation] = useState(0)
    const [zoom, setZoom] = useState(1)
    const [croppedAreaPixels, setCroppedAreaPixels] = useState(null)
    console.log('croppedAreaPixels:', croppedAreaPixels)
    const [croppedImage, setCroppedImage] = useState(null)

    const onFileChange = async e => {
        if (e.target.files && e.target.files.length > 0) {
            const file = e.target.files[0]
            const imageDataUrl = await readFile(file)
            setImageSrc(imageDataUrl)
            openModal()
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
            onClose()
        } catch (e) {
            console.error(e)
        }
    }

    const onCropComplete = (croppedArea, croppedAreaPixels) => {
        setCroppedAreaPixels(croppedAreaPixels)
    }

    return (
        <div>
            <button type="button" onClick={openModal}>
                Open modal
            </button>
            {croppedImage && <img src={croppedImage} alt="test" width="300" />}
            {imageSrc && (
                <AppModal isOpen={isOpen} onClose={onClose}>
                    <CropperImage
                        image={imageSrc}
                        crop={crop}
                        zoom={zoom}
                        onCropChange={setCrop}
                        onZoomChange={setZoom}
                        onCropComplete={onCropComplete}
                    />
                    <button type="button" onClick={showCroppedImage}>
                        Show Result
                    </button>
                </AppModal>
            )}
            User form
            <UserFormStyled>
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
        </div>
    )
}

export default UserForm

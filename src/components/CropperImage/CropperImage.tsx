/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable import/no-extraneous-dependencies */
import { useState } from 'react'
import Cropper from 'react-easy-crop'
import CropperWrapper from './CropperImage.styled'

function CropperImage({
    image,
    crop,
    zoom,
    onCropChange,
    onZoomChange,
    onCropComplete,
}) {
    return (
        <CropperWrapper>
            <Cropper
                image={image}
                crop={crop}
                zoom={zoom}
                aspect={1}
                onCropChange={onCropChange}
                onCropComplete={onCropComplete}
                onZoomChange={onZoomChange}
            />
        </CropperWrapper>
    )
}

export default CropperImage

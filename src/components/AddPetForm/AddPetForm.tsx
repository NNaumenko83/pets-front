/* eslint-disable react/jsx-props-no-spreading */
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import {
    ButtonsWrapper,
    InputsButtonsWrapper,
    Label,
    OptionsWrapper,
    StepName,
    StepsWrapper,
    StyledAddPetForm,
    СancelButton,
    InputsWrapper,
    StyledLabel,
} from './AddPetForm.styled'
import PetFormTitle from './PetFormTitle/PetFormTitle'
import Button from './Button/Button'
import Icon from '../Icon/Icon'
import Input from './Input/Input'

enum OptionEnum {
    yourPet = 'your pet',
    sell = 'sell',
    lostFound = 'lost/found',
    inGoodHands = 'in good hands',
}

interface IFormInput {
    type: OptionEnum
    name: string
    birthDate: string
    breed: string
    image: string
    comments: string
}

function AddPetForm() {
    const { register, handleSubmit, errors, watch } = useForm<IFormInput>()

    const type = watch('type')
    console.log('type:', type)

    const [step, setStep] = useState(1)

    const handleSubmitForm = data => {
        console.log('data:', data)
    }

    return (
        <StyledAddPetForm onSubmit={handleSubmit(handleSubmitForm)}>
            <PetFormTitle>
                {(step === 1 ||
                    type === 'your pet' ||
                    type === 'in good hands') &&
                    'Add pet'}
                {step !== 1 && type === 'sell' && 'Add  pet for sell'}
                {step !== 1 && type === 'lost/found' && 'Add lost pet'}
            </PetFormTitle>
            <StepsWrapper step={step}>
                <StepName current={step === 1} step={1} currentStep={step}>
                    Choose option
                </StepName>
                <StepName current={step === 2} step={2} currentStep={step}>
                    Personal details
                </StepName>
                <StepName current={step === 3} step={3} currentStep={step}>
                    More info
                </StepName>
            </StepsWrapper>
            <InputsButtonsWrapper>
                {step === 1 && (
                    <>
                        <OptionsWrapper>
                            <Label
                                htmlFor="your_pet"
                                checked={type === 'your pet'}
                            >
                                your pet
                                <input
                                    {...register('type')}
                                    type="radio"
                                    id="your_pet"
                                    value="your pet"
                                    style={{ display: 'none' }}
                                    checked={type === 'your pet'}
                                />
                            </Label>

                            <Label htmlFor="sell" checked={type === 'sell'}>
                                sell
                                <input
                                    {...register('type')}
                                    type="radio"
                                    id="sell"
                                    value="sell"
                                    style={{ display: 'none' }}
                                    checked={type === 'sell'}
                                />
                            </Label>

                            <Label
                                htmlFor="lost_found"
                                checked={type === 'lost/found'}
                            >
                                lost/found
                                <input
                                    {...register('type')}
                                    type="radio"
                                    id="lost_found"
                                    value="lost/found"
                                    style={{ display: 'none' }}
                                    checked={type === 'lost/found'}
                                />
                            </Label>

                            <Label
                                htmlFor="good_hands"
                                checked={type === 'in good hands'}
                            >
                                in good hands
                                <input
                                    {...register('type')}
                                    type="radio"
                                    id="good_hands"
                                    value="in good hands"
                                    style={{ display: 'none' }}
                                    checked={type === 'in good hands'}
                                />
                            </Label>
                        </OptionsWrapper>
                        <ButtonsWrapper>
                            <СancelButton type="button">
                                <Icon
                                    name="icon-arrow-left"
                                    width={24}
                                    height={24}
                                />
                                <span>Cancel</span>
                            </СancelButton>
                            <Button
                                type="button"
                                onClick={() => setStep(step + 1)}
                            >
                                <span>Next</span>
                                <Icon name="pawprint" width={24} height={24} />
                            </Button>
                        </ButtonsWrapper>
                    </>
                )}
                {step === 2 && (
                    <>
                        <InputsWrapper>
                            <StyledLabel htmlFor="name">
                                <span>Pet’s name</span>
                                <Input
                                    id="name"
                                    name="name"
                                    type="text"
                                    placeholder="Type name pet"
                                />
                            </StyledLabel>
                            <StyledLabel htmlFor="birth">
                                <span>Date of birth</span>
                                <Input
                                    id="birth"
                                    name="birth"
                                    type="text"
                                    placeholder="Type date of birth"
                                />
                            </StyledLabel>
                            <StyledLabel htmlFor="breed">
                                <span>Breed</span>
                                <Input
                                    id="breed"
                                    name="breed"
                                    type="text"
                                    placeholder="Type breed"
                                />
                            </StyledLabel>
                        </InputsWrapper>

                        <ButtonsWrapper>
                            <СancelButton
                                type="button"
                                onClick={() => setStep(step - 1)}
                            >
                                <Icon
                                    name="icon-arrow-left"
                                    width={24}
                                    height={24}
                                />
                                <span>Back</span>
                            </СancelButton>
                            <Button
                                type="button"
                                onClick={() => setStep(step + 1)}
                            >
                                <span>Next</span>
                                <Icon name="pawprint" width={24} height={24} />
                            </Button>
                        </ButtonsWrapper>
                    </>
                )}
                {step === 3 && (
                    <>
                        <label htmlFor="comments">
                            <span>Comments</span>
                            <input
                                id="comments"
                                name="comments"
                                type="text"
                                placeholder="Type comments"
                            />
                        </label>
                        <ButtonsWrapper>
                            <СancelButton
                                type="button"
                                onClick={() => setStep(step - 1)}
                            >
                                <Icon
                                    name="icon-arrow-left"
                                    width={24}
                                    height={24}
                                />
                                <span>Back</span>
                            </СancelButton>
                            <button type="submit">
                                <span>Submit</span>
                                <Icon name="pawprint" width={24} height={24} />
                            </button>
                        </ButtonsWrapper>
                    </>
                )}
            </InputsButtonsWrapper>
        </StyledAddPetForm>
    )
}

export default AddPetForm

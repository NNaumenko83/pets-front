import { useState } from 'react'
import {
    ButtonsWrapper,
    InputsButtonsWrapper,
    Label,
    OptionsWrapper,
    StepName,
    StepsWrapper,
    StyledAddPetForm,
} from './AddPetForm.styled'
import PetFormTitle from './PetFormTitle/PetFormTitle'
import Button from './Button/Button'

function AddPetForm() {
    const [step, setStep] = useState(1)
    const [typeAdv, setTypeAdv] = useState('your pet')

    const handleCheckBoxChange = e => {
        setTypeAdv(e.target.value)
    }
    return (
        <StyledAddPetForm>
            <PetFormTitle>
                {(step === 1 ||
                    typeAdv === 'your pet' ||
                    typeAdv === 'in good hands') &&
                    'Add pet'}
                {step !== 1 && typeAdv === 'sell' && 'Add  pet for sell'}
                {step !== 1 && typeAdv === 'lost-found' && 'Add lost pet'}
            </PetFormTitle>
            <StepsWrapper>
                <StepName current={step === 1}>Choose option</StepName>
                <StepName current={step === 2}>Personal details</StepName>
                <StepName current={step === 3}>More info</StepName>
            </StepsWrapper>
            {step === 1 && (
                <InputsButtonsWrapper>
                    <OptionsWrapper>
                        <Label
                            htmlFor="your_pet"
                            checked={typeAdv === 'your pet'}
                        >
                            your pet
                            <input
                                type="radio"
                                id="your_pet"
                                name="type"
                                value="your pet"
                                style={{ display: 'none' }}
                                checked={typeAdv === 'your pet'}
                                onChange={handleCheckBoxChange}
                            />
                        </Label>

                        <Label htmlFor="sell" checked={typeAdv === 'sell'}>
                            sell
                            <input
                                type="radio"
                                id="sell"
                                name="type"
                                value="sell"
                                style={{ display: 'none' }}
                                checked={typeAdv === 'sell'}
                                onChange={handleCheckBoxChange}
                            />
                        </Label>

                        <Label
                            htmlFor="lost_found"
                            checked={typeAdv === 'lost-found'}
                        >
                            lost/found
                            <input
                                type="radio"
                                id="lost_found"
                                name="type"
                                value="lost-found"
                                style={{ display: 'none' }}
                                checked={typeAdv === 'lost/found'}
                                onChange={handleCheckBoxChange}
                            />
                        </Label>

                        <Label
                            htmlFor="good_hands"
                            checked={typeAdv === 'good_hands'}
                        >
                            in good hands
                            <input
                                type="radio"
                                id="good_hands"
                                name="type"
                                value="good_hands"
                                style={{ display: 'none' }}
                                checked={typeAdv === 'good_hands'}
                                onChange={handleCheckBoxChange}
                            />
                        </Label>
                    </OptionsWrapper>
                    <ButtonsWrapper>
                        <button
                            style={{ height: '40px', marginTop: 'auto' }}
                            type="button"
                            onClick={() => console.log('Cancel')}
                        >
                            Cancel
                        </button>
                        <Button type="button" onClick={() => setStep(step + 1)}>
                            Next
                        </Button>
                    </ButtonsWrapper>
                </InputsButtonsWrapper>
            )}
            {step === 2 && (
                <>
                    <div>
                        <label htmlFor="name">
                            <span>Pet’s name</span>
                            <input
                                id="name"
                                name="name"
                                type="text"
                                placeholder="Type name pet"
                            />
                        </label>
                        <label htmlFor="birth">
                            <span>Date of birth</span>
                            <input
                                id="birth"
                                name="birth"
                                type="text"
                                placeholder="Type date of birth"
                            />
                        </label>
                        <label htmlFor="birth">
                            <span>Breed</span>
                            <input
                                id="breed"
                                name="breed"
                                type="text"
                                placeholder="Type breed"
                            />
                        </label>
                    </div>

                    <input type="text" />
                    <button type="button" onClick={() => setStep(step - 1)}>
                        Back
                    </button>
                    <button type="button" onClick={() => setStep(step + 1)}>
                        Next
                    </button>
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
                    <button type="button" onClick={() => setStep(step - 1)}>
                        Back
                    </button>
                    <button type="submit">Submit</button>
                </>
            )}
        </StyledAddPetForm>
    )
}

export default AddPetForm

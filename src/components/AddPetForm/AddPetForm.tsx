import { useState } from 'react'
import Label from './AddPetForm.styled'

function AddPetForm() {
    const [step, setStep] = useState(1)
    const [typeAdv, setTypeAdv] = useState('your pet')

    const handleCheckBoxChange = e => {
        console.log(e.target.value)
        setTypeAdv(e.target.value)
    }
    return (
        <form>
            <p>Step: {step} </p>
            {step === 1 && (
                <>
                    <Label htmlFor="your_pet" checked={typeAdv === 'your pet'}>
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
                        checked={typeAdv === 'lost/found'}
                    >
                        lost/found
                        <input
                            type="radio"
                            id="lost_found"
                            name="type"
                            value="lost/found"
                            style={{ display: 'none' }}
                            checked={typeAdv === 'lost/found'}
                            onChange={handleCheckBoxChange}
                        />
                    </Label>

                    <Label
                        htmlFor="good_hands"
                        checked={typeAdv === 'in good hands'}
                    >
                        in good hands
                        <input
                            type="radio"
                            id="good_hands"
                            name="type"
                            value="in good hands"
                            style={{ display: 'none' }}
                            checked={typeAdv === 'in good hands'}
                            onChange={handleCheckBoxChange}
                        />
                    </Label>

                    <button type="button" onClick={() => console.log('Cancel')}>
                        Cancel
                    </button>
                    <button type="button" onClick={() => setStep(step + 1)}>
                        Next
                    </button>
                </>
            )}
            {step === 2 && (
                <>
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
                    <input type="text" />
                    <button type="button" onClick={() => setStep(step - 1)}>
                        Back
                    </button>
                    <button type="submit">Submit</button>
                </>
            )}
        </form>
    )
}

export default AddPetForm

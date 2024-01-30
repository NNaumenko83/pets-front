import { useState } from 'react'

function AddPetForm() {
    const [step, setStep] = useState(1)
    return (
        <form>
            <p>Step: {step} </p>
            {step === 1 && (
                <>
                    <input type="text" />
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

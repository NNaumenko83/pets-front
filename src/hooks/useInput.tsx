import { useState, ChangeEvent } from 'react'

function useInput() {
    const [value, setValue] = useState('')

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value)
    }

    return {
        value,
        onChange: handleChange,
    }
}

export default useInput

/* eslint-disable no-nested-ternary */
import styled from '@emotion/styled'

type ILabelProps = {
    checked: boolean
}
type IStepNameProps = {
    current: boolean
    step: number
    currentStep: number
}

export const Label = styled.label<ILabelProps>`
    padding: 0.5rem 1rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border-radius: 40px;
    background: ${props => (props.checked ? '#54ADFF' : '#CCE4FB')};
    color: ${props => (props.checked ? '#FEF9F9' : '#54ADFF')};
    cursor: pointer;
`

export const OptionsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.75rem;
`
export const StepsWrapper = styled.div`
    display: flex;
    width: 100%;
    gap: 16px;
    margin-bottom: 2.5rem;
`

export const StyledAddPetForm = styled.form`
    display: flex;
    flex-direction: column;
    width: 28.625rem;
    height: 33.875rem;
    padding: 1.25rem 2rem;
    border-radius: 2.5rem;
    background-color: ${({ theme }) =>
        (theme as any).colors?.formBackgroundColor};
    box-shadow: 3px 8px 14px 0px rgba(136, 198, 253, 0.19);
`
export const StepName = styled.p<IStepNameProps>`
    width: 120px;
    color: ${props => {
        if (props.current) {
            return '#54ADFF'
        }

        if (props.step < props.currentStep) {
            return '#00C3AD'
        }

        return '#888888'
    }};

    font-family: 'Manrope Medium';
    font-size: 16px;
    letter-spacing: 0px;

    line-height: 1.66;
    display: flex;
    flex-direction: column;
    gap: 12px;

    ::after {
        content: '';
        display: inline-block;
        width: 100%;
        height: 8px;
        border-radius: 8px;
        background: ${props => {
            if (props.current) {
                return '#54ADFF'
            }

            if (props.step < props.currentStep) {
                return '#00C3AD'
            }

            return '#CCE4FB'
        }};
    }
`
export const ButtonsWrapper = styled.div`
    display: flex;
    margin-top: auto;
    gap: 1.5rem;
`
export const InputsButtonsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
`

export const СancelButton = styled.button`
    height: 2.5rem;
    width: 94px;
    margin-top: auto;
    background: transparent;
    margin-left: 28px;
    display: flex;
    align-items: center;
    gap: 0.75rem;

    font-family: 'Manrope Bold';
    font-size: 16px;

    line-height: 1.375;
    letter-spacing: 4%;

    color: #54adff;
`

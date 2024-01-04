/* eslint-disable @typescript-eslint/no-explicit-any */
import type {
    FieldValues,
    UseFormWatch,
    UseFormRegister,
    UseFormGetFieldState,
    UseFormGetValues,
    UseFormSetError,
    UseFormClearErrors,
    UseFormSetValue,
    UseFormTrigger,
    FormState,
    UseFormResetField,
    UseFormReset,
    UseFormHandleSubmit,
    UseFormUnregister,
    Control,
    UseFormSetFocus,
} from 'react-hook-form'

type UseFormReturn<
    TFieldValues extends FieldValues = FieldValues,
    TContext = any,
> = {
    watch: UseFormWatch<TFieldValues>
    getValues: UseFormGetValues<TFieldValues>
    getFieldState: UseFormGetFieldState<TFieldValues>
    setError: UseFormSetError<TFieldValues>
    clearErrors: UseFormClearErrors<TFieldValues>
    setValue: UseFormSetValue<TFieldValues>
    trigger: UseFormTrigger<TFieldValues>
    formState: FormState<TFieldValues>
    resetField: UseFormResetField<TFieldValues>
    reset: UseFormReset<TFieldValues>
    handleSubmit: UseFormHandleSubmit<TFieldValues>
    unregister: UseFormUnregister<TFieldValues>
    control: Control<TFieldValues, TContext>
    register: UseFormRegister<TFieldValues>
    setFocus: UseFormSetFocus<TFieldValues>
}

export default UseFormReturn

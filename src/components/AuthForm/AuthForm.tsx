/* eslint-disable no-console */
/* eslint-disable no-useless-escape */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/no-extraneous-dependencies */
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useState } from 'react'
import { register as registerUser } from 'src/redux/auth/operations'
import { useAppDispatch } from 'src/redux/hooks'
import Form from './AuthForm.styled'
import Title from '../Title/Title'
import Input from '../Input/Input'
import InputGroup from '../InputGrooup/InputGrooup'
import InputsWrapper from '../InputsWrapper/InputsWrapper'
import InputErrorWrapper from '../InputErrorWrapper/InputErrorWrapper'
import ErrorMessage from '../ErrorMessage/ErrorMessage'
import FormContentWrapper from '../FormContentWrapper/FormContentWrapper'
import AuthButton from '../AuthButton/AuthButton'
import FormText from '../FormTextAndLink/FormTextAndLink'
import InputRightAddon from '../InputRightAddon/InputRightAddon'
import EyeButton from '../EyeButton/EyeButton'

const schema = yup
    .object({
        email: yup
            .string()
            .required('Email is required')
            .matches(
                /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                'Input correct email',
            ),
        password: yup
            .string()
            .required('Password is required')
            .min(6, 'Min length is 6'),
        confirmPassword: yup
            .string()
            .oneOf([yup.ref('password'), undefined], 'Passwords must match')
            .required('Confirm password is required')
            .min(6, 'Min length is 6'),
    })
    .required()

type TFormData = yup.InferType<typeof schema>

function AuthForm() {
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setConfirmPassword] = useState(false)
    const onShowPasswordButtonClick: () => void = () =>
        setShowPassword(!showPassword)
    const onShowConfirmPasswordButtonClick: () => void = () =>
        setConfirmPassword(!showConfirmPassword)

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<TFormData>({
        resolver: yupResolver(schema),
    })

    const dispatch = useAppDispatch()

    return (
        <Form
            onSubmit={handleSubmit(data => {
                console.log('data:', data)
                dispatch(
                    registerUser({
                        email: data.email,
                        password: data.password,
                    }),
                )
            })}
        >
            <FormContentWrapper>
                <Title>Registration</Title>
                <InputsWrapper>
                    <InputErrorWrapper>
                        <InputGroup error={!!errors.email}>
                            <Input
                                type="email"
                                register={register}
                                name="email"
                                placeholder="Email"
                            />
                        </InputGroup>
                        <ErrorMessage>{errors.email?.message}</ErrorMessage>
                    </InputErrorWrapper>
                    <InputErrorWrapper>
                        <InputGroup error={!!errors.password}>
                            <Input
                                type={!showPassword ? 'password' : 'text'}
                                register={register}
                                name="password"
                                placeholder="Password"
                            />
                            <InputRightAddon>
                                <EyeButton
                                    onClick={onShowPasswordButtonClick}
                                    showPassword={showPassword}
                                />
                            </InputRightAddon>
                        </InputGroup>
                        <ErrorMessage>{errors.password?.message}</ErrorMessage>
                    </InputErrorWrapper>
                    <InputErrorWrapper>
                        <InputGroup error={!!errors.confirmPassword}>
                            <Input
                                type={
                                    !showConfirmPassword ? 'password' : 'text'
                                }
                                register={register}
                                name="confirmPassword"
                                placeholder="Confirm password"
                            />
                            <InputRightAddon>
                                <EyeButton
                                    onClick={onShowConfirmPasswordButtonClick}
                                    showPassword={showConfirmPassword}
                                />
                            </InputRightAddon>
                        </InputGroup>
                        <ErrorMessage>
                            {errors.confirmPassword?.message}
                        </ErrorMessage>
                    </InputErrorWrapper>
                </InputsWrapper>
                <AuthButton type="submit">Registration</AuthButton>
            </FormContentWrapper>
            <FormText
                text="Already have an account?"
                to="/login"
                textLink="Login"
            />
        </Form>
    )
}

export default AuthForm

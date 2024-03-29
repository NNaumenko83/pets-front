/* eslint-disable no-console */
/* eslint-disable no-useless-escape */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/no-extraneous-dependencies */
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useState } from 'react'
import { login } from 'src/redux/auth/operations'

import { useAppDispatch } from 'src/redux/hooks'
import Form from './LoginForm.styled'
import Title from '../Title/Title'
import Input from '../Input/Input'

import InputsWrapper from '../InputsWrapper/InputsWrapper'
import InputErrorWrapper from '../InputErrorWrapper/InputErrorWrapper'
import ErrorMessage from '../ErrorMessage/ErrorMessage'
import FormContentWrapper from '../FormContentWrapper/FormContentWrapper'
import AuthButton from '../AuthButton/AuthButton'
import FormText from '../FormTextAndLink/FormTextAndLink'
import InputRightAddon from '../InputRightAddon/InputRightAddon'
import EyeButton from '../EyeButton/EyeButton'
import InputGroup from '../InputGrooup/InputGrooup'

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
    })
    .required()

type TFormData = yup.InferType<typeof schema>

function LoginForm() {
    const [showPassword, setShowPassword] = useState(false)
    const onShowPasswordButtonClick: () => void = () =>
        setShowPassword(!showPassword)

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
                dispatch(
                    login({
                        email: data.email,
                        password: data.password,
                    }),
                )
            })}
        >
            <FormContentWrapper>
                <Title>Login</Title>
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
                </InputsWrapper>
                <AuthButton type="submit">Login</AuthButton>
            </FormContentWrapper>
            <FormText
                text="Don't have an account?"
                to="/register"
                textLink="Register"
            />
        </Form>
    )
}

export default LoginForm

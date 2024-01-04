/* eslint-disable no-console */
/* eslint-disable no-useless-escape */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/no-extraneous-dependencies */
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import Form from './AuthForm.styled'
import Title from '../Title/Title'
import Input from '../Input/Input'
import InputGroup from '../InputGrooup/InputGrooup'
import InputsWrapper from '../InputsWrapper/InputsWrapper'
import InputErrorWrapper from '../InputErrorWrapper/InputErrorWrapper'

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
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<TFormData>({
        resolver: yupResolver(schema),
    })

    return (
        <Form
            onSubmit={handleSubmit(data => {
                console.log(data)
            })}
        >
            <div>
                <Title>Registration</Title>
                <InputsWrapper>
                    <InputErrorWrapper>
                        <InputGroup>
                            <Input
                                type="email"
                                register={register}
                                name="email"
                                placeholder="Email"
                            />
                        </InputGroup>
                        <p>{errors.email?.message}</p>
                    </InputErrorWrapper>
                    <InputErrorWrapper>
                        <InputGroup>
                            <Input
                                type="password"
                                register={register}
                                name="password"
                                placeholder="Password"
                            />
                        </InputGroup>
                        <p>{errors.password?.message}</p>
                    </InputErrorWrapper>
                    <InputErrorWrapper>
                        <InputGroup>
                            <Input
                                type="password"
                                register={register}
                                name="confirmPassword"
                                placeholder="Confirm password"
                            />
                        </InputGroup>
                        <p>{errors.confirmPassword?.message}</p>
                    </InputErrorWrapper>
                </InputsWrapper>
                <button type="submit">Registration</button>
            </div>
        </Form>
    )
}

export default AuthForm

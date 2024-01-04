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
            <Title>Registration</Title>
            <Input
                type="email"
                register={register}
                name="email"
                placeholder="Email"
            />
            <p>{errors.email?.message}</p>
            <Input
                type="password"
                register={register}
                name="password"
                placeholder="Password"
            />
            <p>{errors.password?.message}</p>
            <Input
                type="password"
                register={register}
                name="confirmPassword"
                placeholder="Confirm password"
            />
            <p>{errors.confirmPassword?.message}</p>
            <button type="submit">Registration</button>
        </Form>
    )
}

export default AuthForm

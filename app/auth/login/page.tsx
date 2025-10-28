'use client'

import styles from './page.module.css'
import * as Yup from 'yup'
import { useRouter } from 'next/navigation'
import { Formik } from 'formik'
import { useState } from 'react'
import axios from 'axios'

// Components
import Image from 'next/image'
import FTEButton from '@/app/components/button/FTButton'

// Icons
import logo from '../../media/logo.png'

// Api
const API_URL = process.env.NEXT_PUBLIC_API_URL

export default function Login() {
    const router = useRouter()
    const [errorMessage, setErrorMessage] = useState('')
    
    const handleBackToHome = () => {
        router.push('/')
    }

    const handleLogin = async (
        values: { email: string; password: string },
        { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }
    ) => {
        console.log('Logging in with values:', values)
        axios({
            method: 'post',
            url: `${API_URL}/api/profile/login`,
            headers: {
                'Content-Type': 'application/json'
            },
            data: {
                email: values.email,
                password: values.password
            }
        })
        .then(response => {
            console.log('Login successful:', response.data)
            //router.push('/dashboard')
        })
        .catch(error => {
            console.error('Login error:', error)
            if (error.response && error.response.data && error.response.data.message) {
                setErrorMessage(error.response.data.message)
            } else {
                setErrorMessage('Error de conexión. Por favor, inténtalo de nuevo más tarde.')
            }
        })
        .finally(() => {
            setSubmitting(false)
        })
    }

    return (
        <div className={styles.container}>

            {/* Blur Background */}
            <div className={styles.blur1} />
            <div className={styles.blur2} />

            {/* Main page button */}
            <div className={styles.mainPageButton}>
                <FTEButton text="Volver al inicio" variant="blue" action={handleBackToHome} />
            </div>

            {/* Login Form */}
            <div className={styles.formContainer}>

                {/* Name and logo */}
                <Image
                    src={logo}
                    height={100}
                    alt="FTEmulator Logo"
                    className={styles.logo}
                />
                <h2>Login</h2>
                <p>Entra en tu cuenta para empezar a practicar</p>

                {/* form */}
                <Formik
                    initialValues={{ email: '', password: '' }}
                    validationSchema={Yup.object({
                        email: Yup.string()
                            .email('El email no es válido')
                            .required('El email es obligatorio'),
                        password: Yup.string()
                            .min(6, 'La contraseña debe tener al menos 6 caracteres')
                            .required('La contraseña es obligatoria'),
                    })}
                    onSubmit={handleLogin}
                >
                    {({
                        values,
                        errors,
                        touched,
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        isSubmitting,
                    }) => (
                        <form className={styles.form} onSubmit={handleSubmit}>
                            <input
                                type="email"
                                name="email"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.email}
                                className={styles.input}
                                placeholder='Email'
                                disabled={isSubmitting}
                            />
                            {errors.email && touched.email && (
                                <div className='errors'>{errors.email}</div>
                            )}
                            <input
                                type="password"
                                name="password"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.password}
                                className={styles.input}
                                placeholder='Contraseña'
                                disabled={isSubmitting}
                            />
                            {errors.password && touched.password && (
                                <div className='errors'>{errors.password}</div>
                            )}
                            <a href="/auth/register" className='link'>¿No tienes una cuenta? Regístrate</a>
                            <FTEButton text={isSubmitting ? "Enviando..." : "Inicia sesión"} type='submit' variant="blue" className={styles.submite} />
                            {errorMessage && (
                                <div className='errors'>{errorMessage}</div>
                            )}
                        </form>
                    )}
                </Formik>

            </div>
            
        </div>
    )
}
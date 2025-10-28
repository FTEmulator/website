/*
 * FTEmulator - FTEmulator is a high-performance stock market investment simulator designed with extreme technical efficiency
 * 
 * Copyright (C) 2025-2025 Álex Frías (alexwebdev05)
 * Licensed under GNU Affero General Public License v3.0
 * 
 * For commercial licensing inquiries, please contact: alexwebdev05@proton.me
 * GitHub: https://github.com/alexwebdev05
 */

'use client'

import styles from './page.module.css'
import * as Yup from 'yup'
import { useRouter } from 'next/navigation'
import axios from 'axios'

// Components
import Form from 'next/form'
import { Formik } from 'formik';
import Image from 'next/image'
import FTEButton from '@/app/components/button/FTButton'

// Icons
import logo from '../../media/logo.png';
import { count } from 'console'

// Api
const API_URL = process.env.NEXT_PUBLIC_API_URL

import { useState } from 'react';

export default function Register() {
    const router = useRouter();
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    function handleBackToHome() {
        router.push('/')
    }

    const handleRegister = async (
        values: { name: string, email: string; password: string, passwordConfirmation: string, country: string },
        { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }
    ) => {
        console.log('Registering with values:', values)
        axios({
            method: 'post',
            url: `${API_URL}/api/profile/register`,
            headers: {
                'Content-Type': 'application/json'
            },
            data: {
                name: values.name,
                email: values.email,
                password: values.password,
                country: values.country
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

            {/* Register Form */}
            <div className={styles.formContainer}>

                {/* Name and logo */}
                <Image
                    src={logo}
                    height={100}
                    alt="Picture of the author"
                    className={styles.logo}
                />
                {/* form */}
                <Formik
                    initialValues={{ name: '', email: '', password: '', passwordConfirmation: '', country: '' }}
                    validationSchema={Yup.object({
                        name: Yup.string()
                            .required('El nombre es obligatorio'),
                        email: Yup.string()
                            .email('El email no es válido')
                            .required('El email no es válido'),
                        password: Yup.string()
                            .required('La contraseña es obligatoria'),
                        passwordConfirmation: Yup.string()
                            .oneOf([Yup.ref('password'), ''], 'Las contraseñas tienen que coincidir'),
                        country: Yup.string()
                            .required('El país es obligatorio')
                    })}
                    onSubmit={handleRegister}
                >
                    {({
                        values,
                        errors,
                        touched,
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        isSubmitting
                    }) => (
                        <form className={styles.form} onSubmit={handleSubmit}>
                            <input
                                type="text"
                                name="name"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.name}
                                className={styles.input}
                                placeholder='Nombre de usuario'
                            />
                            {errors.name && touched.name && (
                                <div className='errors'>{errors.name}</div>
                            )}
                            <input
                                type="email"
                                name="email"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.email}
                                className={styles.input}
                                placeholder='Email'
                            />
                            {errors.email && touched.email && (
                                <div className='errors'>{errors.email}</div>
                            )}
                            <input
                                type="text"
                                name="country"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.country}
                                className={styles.input}
                                placeholder='País'
                            />
                            {errors.country && touched.country && (
                                <div className='errors'>{errors.country}</div>
                            )}
                            <input
                                type="password"
                                name="password"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.password}
                                className={styles.input}
                                placeholder='Contraseña'
                            />
                            {errors.password && touched.password && (
                                <div className='errors'>{errors.password}</div>
                            )}
                            <input
                                type="password"
                                name="passwordConfirmation"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.passwordConfirmation}
                                className={styles.input}
                                placeholder='Confirma la contraseña'
                            />
                            {errors.passwordConfirmation && touched.passwordConfirmation && (
                                <div className='errors'>{errors.passwordConfirmation}</div>
                            )}
                            <a href="/auth/login" className='link'>¿Ya tienes una cuenta? Inicia sesión</a>
                            <FTEButton text={isSubmitting ? "Enviando..." : "Registrarse"} type='submit' variant="blue" className={styles.submite} />
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

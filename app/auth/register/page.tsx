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

// Components
import Form from 'next/form'
import { Formik } from 'formik';
import Image from 'next/image'
import FTEButton from '@/app/components/button/FTButton'

// Icons
import logo from '../../media/logo.png';

export default function Register() {
    const router = useRouter();

    function handleBackToHome() {
        router.push('/')
    }

    return (
        <div className={styles.container}>

            {/* Blur Background */}
            <div className={styles.blur1} />
            <div className={styles.blur2} />

            {/* Main page button */}
            <div className={styles.mainPageButton}>
                <FTEButton text="Volver al inicio" type="blue" action={handleBackToHome} />
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
                <h2>Registro</h2>
                <p>Crea tu cuenta para empezar a practicar</p>

                {/* form */}
                <Formik
                    initialValues={{ username: '', email: '', password: '', passwordConfirmation: '' }}
                    validationSchema={Yup.object({
                        username: Yup.string()
                            .required('El nombre de usuario es obligatorio'),
                        email: Yup.string()
                            .email('El email no es válido')
                            .required('El email no es válido'),
                        password: Yup.string()
                            .required('La contraseña es obligatoria'),
                        passwordConfirmation: Yup.string()
                            .oneOf([Yup.ref('password'), ''], 'Las contraseñas tienen que coincidir')
                    })}
                    onSubmit={(values, { setSubmitting }) => {
                        setTimeout(() => {
                            alert(JSON.stringify(values, null, 2));
                            setSubmitting(false);
                        }, 400);
                    }}
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
                                name="username"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.username}
                                className={styles.input}
                                placeholder='Nombre de usuario'
                            />
                            {errors.username && touched.username && (
                                <div className='errors'>{errors.username}</div>
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
                            <FTEButton text={isSubmitting ? "Enviando..." : "Registrarse"} type="blue" className={styles.submite} />
                        </form>
                    )}
                    
                </Formik>
            </div>
            
        </div>
    )
}

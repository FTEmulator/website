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
import { Formik } from 'formik';

// Components
import Form from 'next/form'
import Image from 'next/image'
import FTEButton from '@/app/components/button/FTButton'

// Icons
import logo from '../../media/logo.png';

export default function Login() {
    const router = useRouter();
    
    const  handleBackToHome = () => {
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
                            <a href="/auth/register" className='link'>¿No tienes una cuenta? Regístrate</a>
                            <FTEButton text={isSubmitting ? "Enviando..." : "Iniciar sesión"} type="blue" className={styles.submite} />
                        </form>
                    )}
                </Formik>

            </div>
            
        </div>
    )
}

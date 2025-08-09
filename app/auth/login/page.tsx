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
import { useRouter } from 'next/navigation'

// Components
import Form from 'next/form'
import Image from 'next/image'
import FTEButton from '@/app/components/button/FTButton'

// Icons
import logo from '../../media/logo.png';

export default function Login() {
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
                <h2>Login</h2>
                <p>Entra en tu cuenta para empezar a practicar</p>

                {/* form */}
                <Form className={styles.form} action="/api/auth/register">
                    <label htmlFor="email" className={styles.label}>Email<input type="email" name='email' placeholder='Email' className={styles.input} /></label>
                    <label htmlFor="password" className={styles.label}>Contraseña<input type="password" name='password' placeholder='Password' className={styles.input} /></label>
                    {/* Register link */}
                <a href="/auth/register" className='link'>¿No tienes una cuenta? Regístrate</a>
                    <FTEButton text="Iniciar sesión" type="blue" className={styles.submite} />
                </Form>
            </div>
            
        </div>
    )
}

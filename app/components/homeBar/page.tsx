'use client';

import styles from "./page.module.css";
import FTEButton from "../button/page";
import Image from 'next/image'
import { useRouter } from 'next/navigation'

import logo from "../../media/logo.png";

export default function HomeBar() {
    const router = useRouter();

    function handleLogin() {
        router.push('/auth/login')
    }

    function handleRegister() {
        router.push('/auth/register')
    }

    return (
        <div className={styles.page}>
            <div className={styles.shadow}>
                <div className={styles.container}>
                    <div className={styles.logoName}>
                        <Image
                        src={logo}
                        height={70}
                        alt="Picture of the author"
                        />
                        <h1>FTEmulator</h1>
                    </div>
                    
                    <div className={styles.urls}>
                        <h3><a href="">GitHub</a></h3>
                        <h3><a href="">Doc</a></h3>
                    </div>
                    
                    <div>
                        <FTEButton type="gray" text="Login" className={styles.loginRegister} action={handleLogin}/>
                        <FTEButton type="blue" text="Registro" className={styles.loginRegister} action={handleRegister}/>
                    </div>
                </div>
                
                
            </div>
        </div>
    )
}
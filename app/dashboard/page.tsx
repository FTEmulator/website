/*
 * FTEmulator - FTEmulator is a high-performance stock market investment simulator designed with extreme technical efficiency
 * 
 * Copyright (C) 2025-2025 Álex Frías (alexwebdev05)
 * Licensed under GNU Affero General Public License v3.0
 * 
 * For commercial licensing inquiries, please contact: alexwebdev05@proton.me
 * GitHub: https://github.com/alexwebdev05
 */

import styles from "./page.module.css";

import Image from 'next/image';

import logo from "../media/logo.png";
import profile from "../media/profile.png";

export default function Dashboard() {
    return (
        <div className={styles.container}>
            {/* Menu */}
            <div className={styles.menuContainer}>
                <div className={styles.logoName}>
                    <Image
                    src={logo}
                    height={40}
                    alt="Picture of the author"
                    />
                    <h1>FTEmulator</h1>
                </div>
                <div className={styles.searchContainer}>
                    <input type="text" />
                    
                </div>
                <div className={styles.userContainer}>
                    <div className={styles.balance}>

                    </div>
                    <Image
                    src={profile}
                    height={40}
                    alt="Picture of the author"
                    />
                </div>
            </div>
        </div>
    )
}

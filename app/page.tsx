/*
 * FTEmulator - FTEmulator is a high-performance stock market investment simulator designed with extreme technical efficiency
 * 
 * Copyright (C) 2025-2025 Álex Frías (alexwebdev05)
 * Licensed under GNU Affero General Public License v3.0
 * 
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 * 
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Affero General Public License for more details.
 * 
 * For commercial licensing inquiries, please contact: alexwebdev05@proton.me
 * GitHub: https://github.com/alexwebdev05
 */
import styles from "./page.module.css";
import Home from "./pages/home/page";
import TemplateTest from "./components/template/template"
import FTButton from "./components/button/button";

export default function App() {
    return (
        <div className={styles.page}>
            {/* <TemplateTest /> */}
            {/* Home bar */}
            <Home />

            {/* Background Blurs */}
            <div className={styles.blur1} />
            <div className={styles.blur2} />

            {/* Welcome */}
            <div className={styles.welcomeContainer}>

                {/* Content */}
                <div className={styles.content}>
                    <h2>Fast Trading Emulator</h2>
                    <p>Mejora tus tecnicas de trading antes de entrar al mercado real y proteje tu dinero.</p>
                    <div>
                        <FTButton text="Comencemos" type="whiteBlue" className={styles.welcomeButtons} />
                        <FTButton text="Despliege en local" type="whiteGray" className={styles.welcomeButtons} />
                    </div>
                    
                </div>
            </div>
        </div>
    );
}

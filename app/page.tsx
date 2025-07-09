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
import HomeBar from "./components/homeBar/homeBar";
import TemplateTest from "./components/template/template"
import FTButton from "./components/button/button";

export default function App() {
    return (
        <div className={styles.page}>
            {/* <TemplateTest /> */}
            {/* Home bar */}
            <HomeBar />

            

            {/* Welcome */}
            <div className={styles.welcomeContainer}>
                {/* Background Blurs */}
                <div className={styles.blur1} />
                <div className={styles.blur2} />

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

            {/* What is FTEmulator */}

            <div className={styles.wifContainer}>
                <div className={styles.wifText}>
                    <h2>What is FTEmulator?</h2>
                    <p>FTEmulator is a stock market investment simulator that uses real market data. We offer a completely realistic experience that allows users to observe market fluctuations and test different investment strategies without risking their real capital.</p>
                </div>
                <div className={styles.wfiBennefits}>
                    <div className={styles.wfiHalf1}>
                        <div>Real data</div>
                        <div>Without risk</div>
                    </div>
                    <div className={styles.wfiHalf2}>
                        <div>Strategy</div>
                    </div>
                </div>
            </div>



        </div>
    );
}

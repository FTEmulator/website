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

// Styles
import styles from "./page.module.css";

// Components
import Image from "next/image";
import HomeBar from "./components/homeBar/FTHomeBar";
import FTEButton from "./components/button/FTButton";
import TemplateTest from "./components/template/page"


// Images
import realData from "./media/datosReales.png";
import withoutRisk from "./media/sinRiesgo.png";
import strategy from "./media/estrategia.png";
import FTEFooter from "./components/footer/FTFooter";

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
                        <FTEButton text="Comencemos" variant="blue" className={styles.welcomeButtons} />
                        <FTEButton text="Despliege en local" variant="gray" className={styles.welcomeButtons} />
                    </div>
                    
                </div>
            </div>

            {/* What is FTEmulator */}

            <div className={styles.wifContainer}>
                <div className={styles.wifText}>
                    <h2>¿Que es FTEmulator?</h2>
                    <p>FTEmulator es un simulador de inversión en bolsa que utiliza datos reales del mercado. Ofrecemos una experiencia completamente realista que permite a los usuarios observar las fluctuaciones del mercado y probar diferentes estrategias de inversión sin arriesgar su capital real.</p>
                </div>
                <div className={styles.wfiBennefits}>
                    <div className={styles.wfiHalf1}>
                        <div className={styles.wfiHalf1Content}>
                            <p>Datos reales</p>
                            <Image src={realData} alt="Icono" width={30} height={30} />
                        </div>
                        <div className={styles.wfiHalf1Content}>
                            <p>Sin riesgo</p>
                            <Image src={withoutRisk} alt="Icono" width={30} height={30} />
                        </div>
                    </div>
                    <div className={styles.wfiHalf2}>
                        <div className={styles.wfiHalf2Content}>
                            <p>Estrategia</p>
                            <Image src={strategy} alt="Icono" width={30} height={30} />
                        </div>
                    </div>
                </div>
            </div>

            {/* Intuitive and simple */}
            <div className={styles.isContainer}>
                En desarrollo (tengo diferentes ideas).
            </div>

            {/* Footer */}
            <FTEFooter />

        </div>
    );
}

import styles from "./page.module.css";
import FTEButton from "../button/page";
import Image from 'next/image'

import logo from "../../media/logo.png";

export default function HomeBar() {
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
                        <FTEButton type="gray" text="Login" className={styles.loginRegister} />
                        <FTEButton type="blue" text="Registro" className={styles.loginRegister}/>
                    </div>
                </div>
                
                
            </div>
        </div>
    )
}
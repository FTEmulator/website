import style from "./page.module.css";
import FTButton from "../../components/button/button";
import Image from 'next/image'

import logo from "../../media/logo.png";

export default function Home() {
    return (
        <div className={style.page}>
            <div className={style.shadow}>
                <div className={style.container}>
                    <div className={style.logoName}>
                        <Image
                        src={logo}
                        height={70}
                        alt="Picture of the author"
                        />
                        <h1>FTEmulator</h1>
                    </div>
                    
                    <div className={style.urls}>
                        <h3><a href="">GitHub</a></h3>
                        <h3><a href="">Doc</a></h3>
                    </div>
                    
                    <div>
                        <FTButton type="whiteGray" text="Login" className={style.loginRegister} />
                        <FTButton type="whiteBlue" text="Register" className={style.loginRegister}/>
                    </div>
                </div>
                
                
            </div>
        </div>
    )
}
import style from "./button.module.css";



export default function FTButton({ text, type }: { text: string, type: string }) {
    
    if (type == "whiteBlue") {
        return (
            <button className={`${style.general} ${style.whiteBlue}`}>
                {text}
            </button>
        );
    }
    
    if (type == "whiteGray") {
        return (
            <button className={`${style.general} ${style.whiteGray}`}>
                {text}
            </button>
        );
    }  
}
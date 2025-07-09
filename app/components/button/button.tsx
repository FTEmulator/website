import style from "./button.module.css";



export default function FTButton({ text, type, className }: { text: string, type: string, className?: string }) {
    
    if (type == "whiteBlue") {
        return (
            <button className={`${style.general} ${style.whiteBlue} ${className}`}>
                {text}
            </button>
        );
    }
    
    if (type == "whiteGray") {
        return (
            <button className={`${style.general} ${style.whiteGray} ${className}`}>
                {text}
            </button>
        );
    }  
}
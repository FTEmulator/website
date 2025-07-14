import styles from "./page.module.css";



export default function FTEButton({ text, type, className }: { text: string, type: string, className?: string }) {
    
    if (type == "whiteBlue") {
        return (
            <button className={`${styles.general} ${styles.whiteBlue} ${className}`}>
                {text}
            </button>
        );
    }
    
    if (type == "whiteGray") {
        return (
            <button className={`${styles.general} ${styles.whiteGray} ${className}`}>
                {text}
            </button>
        );
    }  
}
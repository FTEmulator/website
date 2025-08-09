import styles from "./page.module.css";

export default function FTEButton({ text, type, className, action }: { text: string, type: string, className?: string, action?: () => void }) {
    return (
        <button className={`${styles.general} ${styles[type]} ${className}`} onClick={action}>
            {text}
        </button>
    );
}
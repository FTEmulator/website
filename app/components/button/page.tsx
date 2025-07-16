import styles from "./page.module.css";

export default function FTEButton({ text, type, className }: { text: string, type: string, className?: string }) {
    return (
        <button className={`${styles.general} ${styles[type]} ${className}`}>
            {text}
        </button>
    );
}
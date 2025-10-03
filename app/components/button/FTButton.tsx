import styles from "./page.module.css";

type FTEButtonProps = {
    text: string;
    variant?: string; // para el color/estilo
    type?: "button" | "submit" | "reset";
    className?: string;
    action?: () => void;
};

export default function FTEButton({
    text,
    variant = "blue",
    type = "button",
    className = "",
    action,
    ...props
}: FTEButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>) {
    return (
        <button
            type={type}
            className={`${styles.general} ${styles[variant] || ""} ${className}`.trim()}
            onClick={action}
            {...props}
        >
            {text}
        </button>
    );
}
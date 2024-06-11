import { Icon } from "../icon/icon";
import styles from "./button.module.css";

export function Button({
  label,
  buttonType = "button",
  buttonAriaLabel,
  variant,
  buttonIcon,
  onClick,
}) {
  const variants = {
    varaint: {
      primary: styles.primary,
      secondary: styles.secondary,
      ghost: styles.ghost,
    },
  };

  return (
    <button
      className={`${styles.button} ${variants.varaint[variant]}`}
      type={buttonType}
      aria-label={buttonAriaLabel}
      onClick={onClick}
    >
      {label && <span>{label}</span>}
      {buttonIcon && <Icon icon={buttonIcon} />}
    </button>
  );
}

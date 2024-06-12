import { Icon } from "../icon/icon";
import styles from "./button.module.css";

export function Button({
  label,
  buttonType = "button",
  buttonAriaLabel,
  variant = "primary",
  buttonIcon,
  buttonIconSize,
  buttonIconColor,
  onClick,
}) {
  const variants = {
    varaint: {
      primary: styles.primary,
      secondary: styles.secondary,
      ghost: styles.ghost,
      destructive: styles.destructive,
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
      {buttonIcon && (
        <Icon
          icon={buttonIcon}
          iconSize={buttonIconSize}
          iconColor={buttonIconColor}
        />
      )}
    </button>
  );
}

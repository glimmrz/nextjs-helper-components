import styles from "./headers.module.css";

export function Headers({ primaryHeader, secondaryHeader, headerText }) {
  return (
    <hgroup>
      {primaryHeader && (
        <h2 className={styles.primary_header}>{primaryHeader}</h2>
      )}
      {secondaryHeader && (
        <h4 className={styles.secondary_header}>{secondaryHeader}</h4>
      )}
      {headerText && <span className={styles.header_text}>{headerText}</span>}
    </hgroup>
  );
}

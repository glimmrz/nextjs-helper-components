"use client";
import styles from "./sidebar.module.css";

export function Sidebar({ children, footer }) {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.wrapper}>
        <header className={styles.sidebar_header}>Sidebar header</header>
        <main className={styles.sidebar_content}>{children}</main>
        <footer className={styles.sidebar_footer}>{footer}</footer>
      </div>
    </aside>
  );
}

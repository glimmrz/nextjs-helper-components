import styles from "./sidebar.module.css";
import { Container } from "../container/container";
import { Headers } from "../headers/headers";
import { Icon } from "../icon/icon";

export function Sidebar({
  children,
  footer,
  sidebarHeader,
  headerText,
  headerIcon,
}) {
  return (
    <aside>
      <div className={styles.wrapper}>
        <header className={styles.sidebar_header}>
          <Container>
            <div className={styles.header_wrapper}>
              <Headers primaryHeader={sidebarHeader} headerText={headerText} />
              <Icon icon={headerIcon} />
            </div>
          </Container>
        </header>
        <main className={styles.sidebar_content}>
          <Container>
            <div className={styles.sidebar_items}>{children}</div>
          </Container>
        </main>
        {footer && (
          <footer className={styles.sidebar_footer}>
            <Container>{footer}</Container>
          </footer>
        )}
      </div>
    </aside>
  );
}

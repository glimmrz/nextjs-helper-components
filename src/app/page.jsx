import { Sidebar } from "@/js-components/sidebar/sidebar";
import styles from "./page.module.css";
import { CartSidebar } from "@/js-components/sidebar/cart-sidebar/cart-sidebar";

export default function Home() {
  return (
    <main className={styles.main}>
      <CartSidebar />
      <div>
        <h1></h1>
      </div>
    </main>
  );
}

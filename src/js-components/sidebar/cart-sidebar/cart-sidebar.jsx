import styles from "./cart-sidebar.module.css";
import { Sidebar } from "../sidebar";
import { X } from "lucide-react";

export function CartSidebar() {
  return (
    <Sidebar sidebarHeader="my cart" headerText="view my items">
      <h1 className={styles.t}>item 1</h1>
      <h1 className={styles.t}>item 2</h1>
    </Sidebar>
  );
}

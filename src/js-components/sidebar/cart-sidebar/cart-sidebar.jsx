import styles from "./cart-sidebar.module.css";
import { Sidebar } from "../sidebar";
import { X } from "lucide-react";
import { CartItem } from "@/js-components/cart-item/cart-item";

export function CartSidebar() {
  return (
    <Sidebar sidebarHeader="my cart" headerText="view my items">
      <CartItem />
      <CartItem />
      <CartItem />
      <CartItem />
      <CartItem />
      <CartItem />
      <CartItem />
    </Sidebar>
  );
}

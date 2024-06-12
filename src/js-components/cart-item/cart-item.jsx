import Image from "next/image";
import { Container } from "../container/container";
import styles from "./cart-item.module.css";
import { Button } from "../button/button";
import { Plus } from "lucide-react";
import { Minus } from "lucide-react";
import { X } from "lucide-react";

export function CartItem() {
  return (
    <div className={styles.cart_item}>
      <Container>
        <div className={styles.wrapper}>
          <div className={styles.image_wrapper}>
            <Image
              src="https://images.pexels.com/photos/1115128/pexels-photo-1115128.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              className={styles.product_image}
              fill
            />
          </div>
          <div className={styles.details}>
            <h3 className={styles.title}>Product Name</h3>
            <p className={styles.price}>$100 x 7</p>

            <div className={styles.quantity}>
              <Button buttonIcon={Plus} buttonIconSize={16} />
              <span>1</span>
              <Button buttonIcon={Minus} buttonIconSize={16} />
            </div>
            <div className={styles.remove_btn}>
              <Button
                buttonIcon={X}
                variant="destructive"
                buttonIconSize={16}
                buttonAriaLabel="remove item from cart"
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

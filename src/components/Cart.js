import React, { useState, useEffect } from "react";
import CartItem from "./CartItem"; // Import the new component
import "../styles/cart.css";
import CartTotal from "./CartTotal";
import CouponCode from "./CouponCode";

const Cart = ({ cart, setCart, handleChange }) => {
  const [price, setPrice] = useState(0);

  const handlePrice = () => {
    let ans = 0;
    cart.map((item) => (ans += item.amount * item.price));
    setPrice(ans);
  };

  const handleRemove = (id) => {
    const arr = cart.filter((item) => item.id !== id);
    setCart(arr);
  };

  useEffect(() => {
    handlePrice();
  }, [cart]); // Add dependency to re-run effect when cart changes

  return (
    <article className="px-10 mx-auto my-10 ">
      <div class="flex justify-between items-center font-bold py-5 border-b-2">
        <div class="text-center lg:pl-5 lg:pr-28 sm:pr-5 sm:pl-0">Product</div>

        <div class="hidden sm:block sm:pl-16 lg:pl-72 lg:pr-8 text-center">
          Quantity
        </div>

        <div class="lg:pl-9 lg:pr-4 sm:pl-3 sm:pr-5 text-center">Subtotal</div>

        <div class="text-center sm:pr-5">Remove</div>
      </div>

      {cart?.map((item) => (
        <CartItem
          key={item.id}
          item={item}
          handleChange={handleChange}
          handleRemove={handleRemove}
        />
      ))}
      <div className="flex justify-between items-center">
        <CouponCode />
        <CartTotal price={price} />
      </div>
    </article>
  );
};

export default Cart;

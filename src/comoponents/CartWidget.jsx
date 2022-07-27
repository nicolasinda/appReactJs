
import React from "react";
import { Link } from 'react-router-dom';
import { useState } from "react";
import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
const CartWidget = () => {
  const { cartItems } = useContext(CartContext);
  return (
    <div className="ps-4">
      <i className="bi bi-cart3"></i>
      <span className="ps-2">{cartItems.length}</span>
    </div>
  );
};

export default CartWidget;








import React from "react";
import { Outlet } from "react-router-dom";

export default function UserIndex() {
  return (
    <>
      <header>
        <NavLink to="/user/product">Product</NavLink>
        <NavLink to="/user/cart">Cart</NavLink>
      </header>
      <Outlet />
    </>
  );
}

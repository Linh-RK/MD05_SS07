import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export default function AdminIndex() {
  return (
    <>
      <header style={{ display: "flex", gap: "10px" }}>
        <NavLink to="/admin/product">Product</NavLink>
        <NavLink to="/admin/category">Category</NavLink>
      </header>
      <Outlet />
    </>
  );
}

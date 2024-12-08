import React from "react";
import Product from "../pages/user/Product";
import Cart from "../pages/user/Cart";
import UserIndex from "../pages/user/UserIndex";
import ProtectedRoutes from "../pages/ProtectedRoutes";

const userRoutes = [
  {
    path: "/user",
    element: (
      <>
        <ProtectedRoutes>
          <UserIndex />
        </ProtectedRoutes>
      </>
    ),
    children: [
      {
        path: "product",
        element: <Product></Product>,
      },
      {
        path: "cart",
        element: <Cart></Cart>,
      },
    ],
  },
];

export default userRoutes;

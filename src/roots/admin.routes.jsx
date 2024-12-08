import React, { Children } from "react";
import CategoryManage from "../pages/admin/CategoryManage";
import ProductManage from "../pages/admin/ProductManage";
import AdminIndex from "../pages/admin/AdminIndex";
import ProtectedRoutes from "../pages/ProtectedRoutes";
const adminRoutes = [
  {
    path: "/admin",
    element: (
      <>
        <ProtectedRoutes>
          <AdminIndex />
        </ProtectedRoutes>
      </>
    ),
    children: [
      {
        path: "category",
        element: <CategoryManage></CategoryManage>,
      },
      {
        path: "product",
        element: <ProductManage></ProductManage>,
      },
    ],
  },
];

export default adminRoutes;

import { Navigate } from "react-router-dom";

function ProtectedRoute({ children, allowedRoles = [] }) {

  const admin = JSON.parse(localStorage.getItem("admin"));

  if (!admin) {
    return <Navigate to="/login" replace />;
  }

  // Super Admin mar walba waa la oggol yahay
  if (admin.role === "Super Admin") {
    return children;
  }

  // Hubi role-ka loo oggol yahay
  if (
    allowedRoles.length > 0 &&
    !allowedRoles.includes(admin.role)
  ) {
    const rolePages = {
      "Product Manager": "/dashboard/products",
      "Order Manager": "/dashboard/orders",
      "Customer Manager": "/dashboard/customers",
      "Message Manager": "/dashboard/messages",
    };

    return <Navigate to={rolePages[admin.role] || "/dashboard"} replace />;
  }

  return children;
}

export default ProtectedRoute;

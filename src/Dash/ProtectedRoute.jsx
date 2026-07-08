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
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-10 rounded-xl shadow text-center">
          <h1 className="text-3xl font-bold text-red-600">
            Access Denied
          </h1>

          <p className="mt-3 text-gray-600">
            You don't have permission to access this page.
          </p>
        </div>
      </div>
    );
  }

  return children;
}

export default ProtectedRoute;
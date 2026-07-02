function ProtectedRoute({ children }) {
  const role = localStorage.getItem("role")

  if (role !== "admin") {
    return <h1>Access Denied</h1>
  }

  return children
}

export default ProtectedRoute

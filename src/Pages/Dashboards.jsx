import { Link, Outlet } from "react-router-dom";

function Dashboards() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <div className="w-[250px] bg-black text-white p-5">
        <h1 className="text-2xl font-bold mb-8">Admin Panel</h1>

        <ul className="space-y-5">
          <li><Link to="/dashboard">Dashboard</Link></li>
          <li><Link to="/dashboard/products">Products</Link></li>
          <li><Link to="/dashboard/orders">Orders</Link></li>
          <li><Link to="/dashboard/customers">Customers</Link></li>
        </ul>
      </div>

      <div className="flex-1 p-8">
        <Outlet />
      </div>
    </div>
  );
}

export default Dashboards;
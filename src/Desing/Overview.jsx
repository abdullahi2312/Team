import DashboardData from "../Dashboard/DashboardData";

function Overview() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Dashboard</h1>

      <div className="grid grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-gray-500">Products</h2>
          <h1 className="text-3xl font-bold">{DashboardData.totalProducts}</h1>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-gray-500">Orders</h2>
          <h1 className="text-3xl font-bold">{DashboardData.totalOrders}</h1>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-gray-500">Customers</h2>
          <h1 className="text-3xl font-bold">{DashboardData.totalCustomers}</h1>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-gray-500">Sales</h2>
          <h1 className="text-3xl font-bold">${DashboardData.totalSales}</h1>
        </div>
      </div>
    </div>
  );
}

export default Overview;
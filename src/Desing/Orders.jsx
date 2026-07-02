import OrdersData from "../Dashboard/OrdersData";

function Orders() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Orders</h1>

      {OrdersData.map((item) => (
        <div key={item.id} className="bg-white p-5 rounded-xl shadow mb-4">
          <h1>Order ID: {item.id}</h1>
          <p>Customer: {item.customer}</p>
          <p>Total: ${item.total}</p>
          <p>Status: {item.status}</p>
        </div>
      ))}
    </div>
  );
}

export default Orders;
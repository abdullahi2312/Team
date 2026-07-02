import CustomersData from "../Dashboard/CustomersData";

function Customers() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Customers</h1>

      {CustomersData.map((item) => (
        <div key={item.id} className="bg-white p-5 rounded-xl shadow mb-4">
          <h1>{item.name}</h1>
          <p>{item.email}</p>
          <p>{item.phone}</p>
          <p>Orders: {item.orders}</p>
        </div>
      ))}
    </div>
  );
}

export default Customers;
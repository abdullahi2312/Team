import ProductsData from "../Dashboard/ProductsData";

function Products() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Products</h1>

      <div className="grid grid-cols-3 gap-6">
        {ProductsData.map((item) => (
          <div key={item.id} className="bg-white rounded-xl shadow p-4">
            <img src={item.image} className="h-40 w-full object-cover rounded-lg" />
            <h1 className="text-xl font-bold mt-3">{item.name}</h1>
            <p>${item.price}</p>
            <p>Stock: {item.stock}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
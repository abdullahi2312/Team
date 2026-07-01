import Product1 from "../Product/Product1";
import { useState } from "react";

function Product({ Data }) {
  const [search, setSearch] = useState("");

  const handleSearch = Data.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="w-full px-4 md:px-8 py-6">
      <div className="flex justify-center md:justify-start">
        <input
          className="w-full sm:w-[300px] md:w-[400px] h-[45px] border border-gray-300 rounded-lg px-4 outline-none "
          type="text"
          placeholder="Search product..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
        {handleSearch.map((item) => (
          <Product1 key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default Product;
import { useState, useRef } from "react";

import {
  FaEdit,
  FaTrash,
  FaPlus,
  FaStar,
  FaSearch,
} from "react-icons/fa";

import { useProducts } from "../Pages/Productcontext";


function Products() {


  const {
    products,
    addProduct,
    deleteProduct,
    updateProduct
  } = useProducts();



  const [showForm, setShowForm] = useState(false);

  const [editId, setEditId] = useState(null);

  const [search, setSearch] = useState("");


  const formRef = useRef(null);



  const emptyForm = {

    name: "",
    title: "",
    price: "",
    oldPrice: "",
    discount: "",
    category: "",
    brand: "",
    rating: "",
    reviews: "",
    stock: "",
    image: "",

  };



  const [formData, setFormData] = useState(emptyForm);



  const handleChange = (e) => {

    setFormData({

      ...formData,

      [e.target.name]: e.target.value,

    });

  };




  const handleSave = () => {


    if (

      !formData.name ||
      !formData.title ||
      !formData.price ||
      !formData.category ||
      !formData.stock ||
      !formData.image

    ){

      alert("Please fill all required fields");

      return;

    }



    if(editId){

      updateProduct(editId, formData);

    }else{

      addProduct(formData);

    }



    setFormData(emptyForm);

    setEditId(null);

    setShowForm(false);


  };





  const handleDelete = (id)=>{

    deleteProduct(id);

  };





  const handleEdit = (item)=>{


    setEditId(item.id);



    setFormData({

      name:item.name || "",
      title:item.title || "",
      price:item.price || "",
      oldPrice:item.oldPrice || "",
      discount:item.discount || "",
      category:item.category || "",
      brand:item.brand || "",
      rating:item.rating || "",
      reviews:item.reviews || "",
      stock:item.stock || "",
      image:item.image || "",

    });



    setShowForm(true);



    setTimeout(()=>{

      formRef.current?.scrollIntoView({

        behavior:"smooth",

        block:"center"

      });


    },100);



  };




  const filteredProducts = products.filter((item)=>

    item.name

    .toLowerCase()

    .includes(search.toLowerCase())

  );




  return (


    <div className="p-3 bg-gray-100 min-h-screen mt-5">



      <div className="flex flex-col md:flex-row justify-between items-center gap-3 mb-4">



        <h1 className="text-2xl font-bold">

          Products Management

        </h1>




        <button

          onClick={()=>{

            setShowForm(true);

            setEditId(null);

            setFormData(emptyForm);

          }}

          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2"

        >

          <FaPlus/>

          Add Product


        </button>



      </div>





      <div className="bg-white rounded-lg shadow p-3 mb-4 flex items-center gap-2">


        <FaSearch className="text-gray-500" />



        <input

          type="text"

          placeholder="Search Product..."

          value={search}

          onChange={(e)=>setSearch(e.target.value)}

          className="outline-none w-full"

        />


      </div>





      {showForm && (


        <div

          ref={formRef}

          className="bg-white rounded-xl shadow p-3 mb-4"

        >



          <h2 className="text-lg font-bold mb-3">


            {editId ? "Edit Product" : "Add Product"}


          </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">


            <input
              type="text"
              name="name"
              placeholder="Product Name"
              value={formData.name}
              onChange={handleChange}
              className="border p-2 rounded-lg"
            />


            <input
              type="text"
              name="title"
              placeholder="Product Title"
              value={formData.title}
              onChange={handleChange}
              className="border p-2 rounded-lg"
            />


            <input
              type="number"
              name="price"
              placeholder="Price"
              value={formData.price}
              onChange={handleChange}
              className="border p-2 rounded-lg"
            />


            <input
              type="number"
              name="oldPrice"
              placeholder="Old Price"
              value={formData.oldPrice}
              onChange={handleChange}
              className="border p-2 rounded-lg"
            />


            <input
              type="number"
              name="discount"
              placeholder="Discount %"
              value={formData.discount}
              onChange={handleChange}
              className="border p-2 rounded-lg"
            />


            <input
              type="text"
              name="category"
              placeholder="Category"
              value={formData.category}
              onChange={handleChange}
              className="border p-2 rounded-lg"
            />


            <input
              type="text"
              name="brand"
              placeholder="Brand"
              value={formData.brand}
              onChange={handleChange}
              className="border p-2 rounded-lg"
            />


            <input
              type="number"
              name="rating"
              placeholder="Rating"
              value={formData.rating}
              onChange={handleChange}
              className="border p-2 rounded-lg"
            />


            <input
              type="number"
              name="reviews"
              placeholder="Reviews"
              value={formData.reviews}
              onChange={handleChange}
              className="border p-2 rounded-lg"
            />


            <input
              type="number"
              name="stock"
              placeholder="Stock"
              value={formData.stock}
              onChange={handleChange}
              className="border p-2 rounded-lg"
            />


            <input
              type="text"
              name="image"
              placeholder="Image URL"
              value={formData.image}
              onChange={handleChange}
              className="border p-2 rounded-lg"
            />


          </div>




          <div className="mt-4 flex gap-3">


            <button

              onClick={handleSave}

              className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-lg"

            >

              {editId ? "Update Product" : "Save Product"}

            </button>



            <button

              onClick={()=>setShowForm(false)}

              className="bg-gray-500 hover:bg-gray-600 text-white px-5 py-2 rounded-lg"

            >

              Cancel

            </button>


          </div>


        </div>


      )}






      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">


        {

        filteredProducts.length > 0 ? (

          filteredProducts.map((item)=>(


            <div

              key={item.id}

              className="bg-white p-3 rounded-xl shadow hover:shadow-lg transition"

            >



              <img

                src={item.image}

                alt={item.name}

                className="w-full h-36 object-cover rounded-lg"

              />



              <h2 className="font-bold mt-3 text-lg">

                {item.name}

              </h2>



              <p className="text-sm text-gray-500">

                {item.title}

              </p>




              <div className="flex justify-between mt-2">


                <span className="text-gray-500 text-sm">

                  {item.category}

                </span>


                <span className="text-blue-600 text-sm font-semibold">

                  {item.brand}

                </span>


              </div>





              <div className="flex items-center gap-1 text-yellow-500 mt-2">


                <FaStar/>


                <span>

                  {item.rating}

                </span>


              </div>





              <div className="flex items-center gap-2 mt-3">


                <span className="text-blue-600 font-bold text-xl">

                  ${item.price}

                </span>



                {

                item.oldPrice && (

                  <span className="line-through text-gray-400">

                    ${item.oldPrice}

                  </span>

                )

                }


              </div>





              {

              item.discount && (

                <p className="text-red-500 text-sm font-semibold mt-1">

                  {item.discount}% OFF

                </p>

              )

              }





              <div className="flex justify-between items-center mt-3">


                <span

                className={`text-sm font-semibold ${
                  
                  Number(item.stock) > 10

                  ? "text-green-600"

                  : "text-red-500"

                }`}

                >


                {

                  Number(item.stock) > 10

                  ? "In Stock"

                  : "Low Stock"

                }


                </span>




                <span className="text-gray-500 text-sm">

                  {item.stock} left

                </span>


              </div>





              <div className="flex justify-between mt-4">



                <button

                  onClick={()=>handleEdit(item)}

                  className="bg-yellow-400 hover:bg-yellow-500 text-white p-2 rounded-lg"

                >

                  <FaEdit/>


                </button>





                <button

                  onClick={()=>handleDelete(item.id)}

                  className="bg-red-500 hover:bg-red-600 text-white p-2 rounded-lg"

                >

                  <FaTrash/>


                </button>



              </div>




            </div>


          ))


        ) : (


          <div className="col-span-full text-center text-gray-500 py-8">

            No products found.

          </div>


        )


        }



      </div>


    </div>


  );

}



export default Products;
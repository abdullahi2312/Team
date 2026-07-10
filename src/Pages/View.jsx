import { useParams, useNavigate } from "react-router-dom";
import { FaStar, FaHeart } from "react-icons/fa";
import { useDispatch } from "react-redux";

import { addToCart } from "../Redux/Reducer/Index";
import { useProducts } from "../Pages/Productcontext";
import { useUser } from "../Context/Usercontext";

function View() {


  const { id } = useParams();

  const navigate = useNavigate();

  const dispatch = useDispatch();


  const { products } = useProducts();


  const { user, addFavorite } = useUser();



  const product = products.find(
    (item) => item.id === Number(id)
  );

  const isOutOfStock = Number(product?.stock || 0) <= 0;




  if (!product) {

    return (

      <div className="text-center mt-20 text-3xl font-bold">

        Product Not Found

      </div>

    );

  }






  const handleBuyNow = () => {

    if (isOutOfStock) {
      alert("Coming soon — this product is currently out of stock.");
      return;
    }


    const buyProduct = {

      id: product.id,

      name: product.name,

      price: product.price,

      image: product.image,

    };



    localStorage.setItem(
      "buyNow",
      JSON.stringify(buyProduct)
    );



    navigate("/checkout", {

      state: buyProduct,

    });


  };









  const handleFavorite = () => {


    if(!user){

      alert("Please login first");

      navigate("/login");

      return;

    }



    addFavorite(product);


    alert("Added to Favorite");


  };







  return (


    <div className="min-h-screen bg-gray-100 px-6 py-10 mt-[50px]">


      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-xl p-8 grid md:grid-cols-2 gap-10">



        <div className="relative overflow-hidden rounded-xl shadow-lg">


          {
          product.discount && (

            <span className="absolute top-4 left-4 z-10 bg-red-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-md">

              -{product.discount}%

            </span>

          )

          }



          <img

            src={product.image}

            alt={product.name}

            className="w-full h-[500px] object-cover"

          />


        </div>







        <div className="flex flex-col justify-center">


          <h1 className="text-4xl font-bold text-gray-800">

            {product.name}

          </h1>





          <p className="text-gray-500 mt-3 text-lg">

            {product.title}

          </p>







          <div className="flex items-center gap-4 mt-5">


            <h2 className="text-3xl font-bold text-blue-600">

              ${product.price}

            </h2>



            {

            product.oldPrice && (

              <span className="line-through text-gray-400 text-xl">

                ${product.oldPrice}

              </span>

            )

            }


          </div>








          <div className="mt-4">


            <div className="flex gap-1 text-yellow-500">


              <FaStar />

              <FaStar />

              <FaStar />

              <FaStar />

              <FaStar />


            </div>


          </div>







          <p className="mt-5 text-gray-700 leading-7">

            Premium quality product with excellent durability and modern design.

          </p>







          <p className="mt-4 text-lg font-semibold">


            Stock:


            <span className={`${isOutOfStock ? "text-amber-600" : "text-green-600"} ml-2`}>

              {isOutOfStock ? "Coming soon" : `${product.stock} Available`}

            </span>


          </p>







          <div className="flex flex-wrap gap-4 mt-8">





            <button

              onClick={() => dispatch(addToCart(product))}
              disabled={isOutOfStock}
              className={`px-8 py-3 rounded-xl font-semibold ${isOutOfStock ? "cursor-not-allowed bg-slate-300 text-slate-600" : "bg-blue-600 text-white hover:bg-blue-700"}`}

            >

              {isOutOfStock ? "Coming Soon" : "Add To Cart"}

            </button>








            <button

              onClick={handleFavorite}

              className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-xl flex items-center gap-2 font-semibold"

            >

              <FaHeart />

              Favorite

            </button>








            <button

              onClick={handleBuyNow}
              disabled={isOutOfStock}
              className={`px-8 py-3 rounded-xl font-semibold ${isOutOfStock ? "cursor-not-allowed bg-slate-300 text-slate-600" : "bg-black text-white hover:bg-gray-800"}`}

            >

              {isOutOfStock ? "Coming Soon" : "Buy Now"}

            </button>




          </div>





        </div>


      </div>


    </div>


  );


}


export default View;

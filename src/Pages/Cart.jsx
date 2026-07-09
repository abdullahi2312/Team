import { useSelector, useDispatch } from "react-redux";
import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
} from "../Redux/Reducer/Index";

import { Link } from "react-router-dom";


function Cart() {


  const dispatch = useDispatch();



  const cartItem = useSelector(
    (state) => state.cart.cartItem || []
  );




  const total = cartItem.reduce(

    (sum, item) =>

      sum +

      Number(item.price) *

      Number(item.quantity || 1),

    0

  );







  const handleCheckout = () => {


    localStorage.setItem(

      "orderData",

      JSON.stringify({

        items: cartItem,

        total: total,

      })

    );


  };







  return (


    <div className="min-h-screen bg-gray-100 p-6 mt-[80px]">


      {

        cartItem.length === 0 ?


        (


          <div className="flex justify-center items-center h-[400px]">


            <h2 className="text-xl text-gray-500 font-semibold">

              Cart is empty

            </h2>


          </div>


        )


        :


        (


          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">





            {/* CART ITEMS */}

            <div className="md:col-span-2 space-y-5">



              {

                cartItem.map((item) => (



                  <div

                    key={item.cartId}

                    className="bg-white rounded-2xl shadow p-5 flex items-center gap-5"

                  >



                    <img

                      src={item.image}

                      alt={item.name}

                      className="w-28 h-28 object-cover rounded-xl"

                    />






                    <div className="flex-1">


                      <h2 className="text-xl font-bold">

                        {item.name}

                      </h2>




                      <p className="text-blue-600 font-semibold mt-2">

                        ${item.price}

                      </p>







                      {/* QUANTITY */}

                      <div className="flex items-center gap-4 mt-4">


                        <button

                          onClick={() =>

                            dispatch(

                              decreaseQuantity(item.cartId)

                            )

                          }

                          className="w-8 h-8 rounded-lg bg-gray-200 hover:bg-gray-300 font-bold"

                        >

                          -

                        </button>





                        <span className="font-bold text-lg">

                          {item.quantity || 1}

                        </span>





                        <button

                          onClick={() =>

                            dispatch(

                              increaseQuantity(item.cartId)

                            )

                          }

                          className="w-8 h-8 rounded-lg bg-blue-600 text-white hover:bg-blue-700 font-bold"

                        >

                          +

                        </button>



                      </div>



                    </div>









                    {/* REMOVE */}

                    <button

                      onClick={() =>

                        dispatch(

                          removeFromCart(item.cartId)

                        )

                      }

                      className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-xl"

                    >

                      Remove

                    </button>





                  </div>



                ))



              }



            </div>









            {/* SUMMARY */}


            <div className="bg-white rounded-2xl shadow p-6 h-fit">


              <h2 className="text-2xl font-bold mb-5">

                Order Summary

              </h2>





              <div className="flex justify-between mb-3">


                <span>

                  Items

                </span>


                <span className="font-semibold">

                  {cartItem.length}

                </span>


              </div>






              <div className="flex justify-between text-lg">


                <span>

                  Total

                </span>



                <span className="font-bold text-blue-600">

                  ${total}

                </span>



              </div>







              <Link to="/checkout">


                <button

                  onClick={handleCheckout}

                  className="w-full mt-6 bg-black hover:bg-gray-800 text-white py-3 rounded-xl font-semibold"

                >

                  Checkout

                </button>



              </Link>




            </div>







          </div>


        )

      }



    </div>


  );

}



export default Cart;
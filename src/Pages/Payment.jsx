import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { clearCart } from "../Redux/Reducer/Index";
import { useOrders } from "../Context/Ordercontext";
import { useProducts } from "../Pages/Productcontext";

import { FaMobileAlt } from "react-icons/fa";
import { MdPayment } from "react-icons/md";
import { FaMoneyBillWave } from "react-icons/fa";


function Payment() {


  const dispatch = useDispatch();

  const navigate = useNavigate();



  const { addOrder } = useOrders();


  const { reduceStock } = useProducts();




  const orderData =
    JSON.parse(localStorage.getItem("orderData")) || null;




  const [selected, setSelected] = useState("");





  if (!orderData) {

    return (

      <div className="min-h-screen flex items-center justify-center">

        <h1 className="text-2xl font-bold">

          Order Not Found

        </h1>

      </div>

    );

  }







  const handlePay = () => {



    if (!selected) {

      alert("Select Payment Method");

      return;

    }






    const newOrder = {


      ...orderData,


      payment: "Paid",


      paymentMethod: selected,


      status: "Pending",


      paidAt: new Date().toLocaleString(),


    };







    addOrder(newOrder);





    reduceStock(orderData.products);






    localStorage.removeItem("orderData");


    localStorage.removeItem("buyNow");





    dispatch(clearCart());





    alert("Payment Successful");



    navigate("/success");



  };

  return (

    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-6 mt-[60px]">

      <div className="bg-white w-full max-w-lg rounded-2xl shadow-lg p-6">

        <h1 className="text-3xl font-bold text-center mb-6">

          Payment

        </h1>

        <div className="bg-gray-100 rounded-xl p-4 mb-5">

          <h2 className="font-bold mb-3">

            Customer Information

          </h2>

          <p>
            Name : {orderData.customer}
          </p>

          <p>
            Phone : {orderData.phone}
          </p>

          <p>
            Address : {orderData.address}
          </p>

          <p>
            Email : {orderData.email}
          </p>

        </div>

        <div className="bg-gray-100 rounded-xl p-4 mb-5">

          <h2 className="font-bold mb-3">

            Products

          </h2>







          {

           (orderData.products || []).map((item,index)=>(



              <div

                key={index}

                className="flex items-center justify-between mb-4"

              >




                <div className="flex items-center gap-3">



                  <img

                    src={item.image}

                    alt={item.name}

                    className="w-14 h-14 rounded-lg object-cover"

                  />





                  <div>



                    <h2 className="font-semibold">

                      {item.name}

                    </h2>




                    <p className="text-gray-500">

                    Price: ${item.price}

                    </p>


                    <p className="text-gray-500">

                    Quantity: {item.quantity || 1}

                    </p>



                  </div>




                </div>







                <span className="font-bold text-blue-600">

                $
                {
                Number(item.price) *
                Number(item.quantity || 1)
                }

                </span>





              </div>



            ))



          }






          <hr className="my-3"/>







          <div className="flex justify-between font-bold text-lg">



            <span>

              Total

            </span>





            <span className="text-blue-600">

              ${orderData.total}

            </span>



          </div>





        </div>








        <h2 className="font-bold mb-3">

          Select Payment Method

        </h2>








        <div className="space-y-3">





          <div

            onClick={()=>setSelected("EVC Plus")}

            className={`flex items-center gap-3 border rounded-xl p-4 cursor-pointer transition ${
              
              selected === "EVC Plus"

              ? "bg-blue-100 border-blue-600"

              : ""

            }`}

          >


            <FaMobileAlt/>

            <span>

              EVC Plus

            </span>


          </div>








          <div

            onClick={()=>setSelected("Zaad")}

            className={`flex items-center gap-3 border rounded-xl p-4 cursor-pointer transition ${
              
              selected === "Zaad"

              ? "bg-blue-100 border-blue-600"

              : ""

            }`}

          >


            <MdPayment/>

            <span>

              Zaad

            </span>


          </div>








          <div

            onClick={()=>setSelected("Cash")}

            className={`flex items-center gap-3 border rounded-xl p-4 cursor-pointer transition ${
              
              selected === "Cash"

              ? "bg-blue-100 border-blue-600"

              : ""

            }`}

          >


            <FaMoneyBillWave/>

            <span>

              Cash On Delivery

            </span>


          </div>






        </div>








        <button

          onClick={handlePay}

          className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold"

        >

          Pay Now

        </button>






      </div>



    </div>



  );



}



export default Payment;
import { useState } from "react";

import {
  FaEye,
  FaTrash,
  FaTimes,
} from "react-icons/fa";

import { useOrders } from "../Context/Ordercontext";


function Orders() {


  const {
    orders,
    updateOrder,
    deleteOrder,
    clearOrders,
  } = useOrders();



  const [selectedOrder, setSelectedOrder] = useState(null);




  const statusColor = (status) => {

    switch(status){

      case "Pending":
        return "bg-yellow-100 text-yellow-700";

      case "Processing":
        return "bg-blue-100 text-blue-700";

      case "Delivery":
        return "bg-purple-100 text-purple-700";

      case "Completed":
        return "bg-green-100 text-green-700";

      case "Cancelled":
        return "bg-red-100 text-red-700";

      default:
        return "bg-gray-100 text-gray-700";

    }

  };






  const handleDeleteOrder = (id)=>{


    const confirmDelete = window.confirm(
      "Are you sure you want to delete this order?"
    );


    if(confirmDelete){

      deleteOrder(id);


      if(selectedOrder?.id === id){

        setSelectedOrder(null);

      }

    }

  };






  const handleClearOrders = ()=>{


    const confirmClear = window.confirm(
      "Are you sure you want to delete all orders?"
    );


    if(confirmClear){

      clearOrders();

      setSelectedOrder(null);

    }


  };






return (

<div className="p-4 sm:p-6 lg:p-8 bg-gray-100 min-h-screen mt-5">


<div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-6">


<h1 className="text-2xl sm:text-3xl font-bold text-gray-800">

Orders Management

</h1>



<button

onClick={handleClearOrders}

className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg flex items-center gap-2"

>

<FaTrash/>

Clear Orders

</button>



</div>






{
orders.length === 0 ? (


<div className="bg-white p-6 rounded-2xl shadow text-center text-gray-500">

No Orders Found

</div>


):(



<div className="hidden md:block bg-white rounded-2xl shadow overflow-hidden">


<table className="w-full">


<thead className="bg-gray-50">

<tr className="border-b">


<th className="p-4 text-left">
ID
</th>


<th className="p-4 text-left">
Customer
</th>


<th className="p-4 text-left">
Phone
</th>


<th className="p-4 text-left">
Total
</th>


<th className="p-4 text-left">
Status
</th>


<th className="p-4 text-left">
Action
</th>


</tr>

</thead>





<tbody>


{

orders.map((item)=>(


<tr

key={item.id}

className="border-b hover:bg-gray-50"

>


<td className="p-4 font-bold">

#{item.id}

</td>



<td className="p-4">

{item.customer}

</td>



<td className="p-4">

{item.phone}

</td>



<td className="p-4 text-blue-600 font-bold">

${item.total}

</td>





<td className="p-4">


<select

value={item.status}

onChange={(e)=>

updateOrder(item.id,{

status:e.target.value

})

}

className={`border rounded-lg px-3 py-2 font-semibold ${statusColor(item.status)}`}

>


<option>
Pending
</option>


<option>
Processing
</option>


<option>
Delivery
</option>


<option>
Completed
</option>


<option>
Cancelled
</option>


</select>



</td>





<td className="p-4">


<div className="flex gap-2">


<button

onClick={()=>setSelectedOrder(item)}

className="bg-blue-600 text-white p-2 rounded-lg"

>

<FaEye/>

</button>





<button

onClick={()=>handleDeleteOrder(item.id)}

className="bg-red-600 text-white p-2 rounded-lg"

>

<FaTrash/>

</button>



</div>


</td>



</tr>



))


}



</tbody>



</table>


</div>


)

}


      {/* MOBILE ORDERS */}

      {
      orders.length > 0 && (

      <div className="grid grid-cols-1 gap-4 md:hidden">


      {
      orders.map((item)=>(


      <div

      key={item.id}

      className="bg-white rounded-2xl shadow p-4 space-y-4"

      >



      <div className="flex justify-between items-center">


      <h2 className="font-bold text-lg">

      #{item.id}

      </h2>



      <span

      className={`px-3 py-1 rounded-full text-xs font-semibold ${statusColor(item.status)}`}

      >

      {item.status}

      </span>


      </div>





      <p>
      <b>Customer:</b> {item.customer}
      </p>


      <p>
      <b>Phone:</b> {item.phone}
      </p>


      <p>
      <b>Address:</b> {item.address}
      </p>



      <p className="text-blue-600 font-bold text-xl">

      ${item.total}

      </p>





      <select

      value={item.status}

      onChange={(e)=>

      updateOrder(item.id,{

      status:e.target.value

      })

      }

      className="w-full border rounded-lg p-2"

      >


      <option>
      Pending
      </option>


      <option>
      Processing
      </option>


      <option>
      Delivery
      </option>


      <option>
      Completed
      </option>


      <option>
      Cancelled
      </option>


      </select>






      <div className="flex gap-2">


      <button

      onClick={()=>setSelectedOrder(item)}

      className="flex-1 bg-blue-600 text-white py-2 rounded-lg flex justify-center"

      >

      <FaEye/>

      </button>





      <button

      onClick={()=>handleDeleteOrder(item.id)}

      className="flex-1 bg-red-600 text-white py-2 rounded-lg flex justify-center"

      >

      <FaTrash/>

      </button>



      </div>



      </div>



      ))

      }



      </div>

      )

      }







      {/* VIEW MODAL */}


      {
      selectedOrder && (


      <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">


      <div className="bg-white w-full max-w-3xl rounded-2xl shadow-xl p-6 max-h-[90vh] overflow-y-auto">





      <div className="flex justify-between items-center mb-6">


      <h2 className="text-2xl font-bold">

      Order #{selectedOrder.id}

      </h2>



      <button

      onClick={()=>setSelectedOrder(null)}

      className="text-red-600 text-xl"

      >

      <FaTimes/>

      </button>



      </div>







      <div className="grid md:grid-cols-2 gap-5">



      <div className="bg-gray-100 rounded-xl p-5 space-y-2">


      <p>
      <b>Customer:</b> {selectedOrder.customer}
      </p>


      <p>
      <b>Phone:</b> {selectedOrder.phone}
      </p>


      <p>
      <b>Address:</b> {selectedOrder.address}
      </p>


      </div>





      <div className="bg-gray-100 rounded-xl p-5 space-y-2">


      <p>
      <b>Payment:</b> {selectedOrder.payment || "Not Paid"}
      </p>



      <p className="text-blue-600 font-bold text-xl">

      Total: ${selectedOrder.total}

      </p>





      <p>

      <b>Status:</b> {selectedOrder.status}

      </p>





      <p className="font-bold text-lg">

      Total Items:

      {
      selectedOrder.products?.reduce(

      (total,item)=> total + Number(item.quantity || 1),

      0

      ) || 0

      }

      </p>



      </div>


      </div>







      <h3 className="text-xl font-bold mt-8 mb-4">

      Purchased Products

      </h3>






      <div className="space-y-4">


      {

      selectedOrder.products && selectedOrder.products.length > 0 ? (


      selectedOrder.products.map((product,index)=>(


      <div

      key={index}

      className="flex items-center gap-4 border rounded-xl p-4"

      >



      <img

      src={product.image}

      alt={product.name}

      className="w-24 h-24 rounded-xl object-cover"

      />






      <div>


      <h4 className="font-bold text-lg">

      {product.name}

      </h4>




      <p className="text-gray-600">

      Price: ${product.price}

      </p>




      <p className="text-gray-600">

      Quantity: {product.quantity || 1}

      </p>




      <p className="text-blue-600 font-semibold">

      Subtotal:

      ${Number(product.price) * Number(product.quantity || 1)}

      </p>



      </div>



      </div>



      ))


      ):(



      <p className="text-gray-500">

      No Products Found

      </p>


      )


      }



      </div>





      </div>


      </div>


      )

      }







    </div>

  );


}


export default Orders;
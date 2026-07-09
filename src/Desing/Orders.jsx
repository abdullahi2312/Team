import { useState } from "react";

import {
  FaEye,
  FaTrash,
  FaTimes,
  FaMoneyBillWave
} from "react-icons/fa";

import { useOrders } from "../Context/Ordercontext";



function Orders(){


const {
  orders,
  updateOrder,
  deleteOrder,
  clearOrders,
} = useOrders();



const [selectedOrder,setSelectedOrder] = useState(null);






// STATUS COLORS

const statusColor=(status)=>{


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









// PAYMENT COLORS


const paymentColor=(payment)=>{


switch(payment){


case "Paid":

return "bg-green-100 text-green-700";


case "Cancelled":

return "bg-red-100 text-red-700";


case "Not Received":

return "bg-yellow-100 text-yellow-700";


default:

return "bg-gray-100 text-gray-700";


}


};









// DELETE ONE ORDER


const handleDeleteOrder=(id)=>{


const confirmDelete =
window.confirm(
"Are you sure you want to delete this order?"
);



if(confirmDelete){


deleteOrder(id);



if(selectedOrder?.id === id){

setSelectedOrder(null);

}


}


};










// CLEAR ALL


const handleClearOrders=()=>{


const confirmClear =
window.confirm(
"Are you sure you want to delete all orders?"
);



if(confirmClear){


clearOrders();


setSelectedOrder(null);


}


};









return(


<div className="p-4 sm:p-6 lg:p-8 bg-gray-100 min-h-screen mt-5">





<div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-6">


<h1 className="text-2xl sm:text-3xl font-bold text-gray-800">

Orders Management

</h1>





<button

onClick={handleClearOrders}

className="
bg-red-600 
hover:bg-red-700 
text-white 
px-5 
py-2 
rounded-xl 
flex 
items-center 
gap-2
"

>

<FaTrash/>

Clear Orders

</button>



</div>









{
orders.length === 0 ?



<div className="
bg-white 
rounded-2xl 
shadow 
p-8 
text-center 
text-gray-500
">

No Orders Found

</div>



:



<>


{/* DESKTOP TABLE */}


<div className="
hidden 
md:block 
bg-white 
rounded-2xl 
shadow 
overflow-hidden
">


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
Payment
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

className="
border-b 
hover:bg-gray-50 
transition
"

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





<td className="
p-4 
font-bold 
text-blue-600
">

${item.total}

</td>









<td className="p-4">


<select


value={item.payment || "Not Received"}


onChange={(e)=>

updateOrder(item.id,{

payment:e.target.value

})

}



className={`
px-3 
py-2 
rounded-lg 
font-semibold 
border
${paymentColor(item.payment)}
`}


>


<option>
Paid
</option>


<option>
Cancelled
</option>


<option>
Not Received
</option>


</select>



</td>









<td className="p-4">


<select


value={item.status}


onChange={(e)=>

updateOrder(item.id,{

status:e.target.value

})

}



className={`
px-3 
py-2 
rounded-lg 
font-semibold 
border
${statusColor(item.status)}
`}


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

className="
bg-blue-600
hover:bg-blue-700
text-white
p-3
rounded-xl
"

>

<FaEye/>

</button>






<button

onClick={()=>handleDeleteOrder(item.id)}

className="
bg-red-600
hover:bg-red-700
text-white
p-3
rounded-xl
"

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





{/* MOBILE CARD */}


<div className="
grid 
grid-cols-1 
gap-5 
md:hidden
">


{


orders.map((item)=>(


<div

key={item.id}

className="
bg-white
rounded-2xl
shadow
p-5
space-y-4
"


>


<div className="
flex
justify-between
items-center
">


<h2 className="font-bold text-lg">

#{item.id}

</h2>



<span className={`
px-3
py-1
rounded-full
text-xs
font-semibold
${statusColor(item.status)}
`}>

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
<b>Total:</b>

<span className="text-blue-600 font-bold">

 ${item.total}

</span>

</p>







<div>


<p className="font-semibold mb-1">

Payment

</p>



<select


value={item.payment || "Not Received"}


onChange={(e)=>

updateOrder(item.id,{

payment:e.target.value

})

}


className="
w-full
border
rounded-lg
p-2
"


>


<option>
Paid
</option>


<option>
Cancelled
</option>


<option>
Not Received
</option>


</select>


</div>







<div className="flex gap-3">


<button

onClick={()=>setSelectedOrder(item)}

className="
flex-1
bg-blue-600
text-white
py-2
rounded-lg
flex
justify-center
"

>

<FaEye/>

</button>





<button

onClick={()=>handleDeleteOrder(item.id)}

className="
flex-1
bg-red-600
text-white
py-2
rounded-lg
flex
justify-center
"

>

<FaTrash/>

</button>



</div>






</div>


))


}



</div>



</>


}
{/* VIEW ORDER MODAL */}


{
selectedOrder && (


<div className="
fixed 
inset-0 
bg-black/50 
z-50 
flex 
items-center 
justify-center 
p-4
">


<div className="
bg-white
w-full
max-w-4xl
rounded-3xl
shadow-2xl
p-6
max-h-[90vh]
overflow-y-auto
">






{/* HEADER */}

<div className="
flex
justify-between
items-center
mb-6
">


<div>


<h2 className="
text-2xl
font-bold
text-gray-800
">

Order #{selectedOrder.id}

</h2>



<div className="flex gap-3 mt-3">


<span className={`
px-4
py-1
rounded-full
text-sm
font-semibold
${statusColor(selectedOrder.status)}
`}>

{selectedOrder.status}

</span>





<span className={`
px-4
py-1
rounded-full
text-sm
font-semibold
${paymentColor(selectedOrder.payment)}
`}>

{selectedOrder.payment || "Not Received"}

</span>



</div>


</div>







<button

onClick={()=>setSelectedOrder(null)}

className="
text-red-600
text-2xl
hover:rotate-90
transition
"

>

<FaTimes/>

</button>



</div>









{/* CUSTOMER INFORMATION */}


<div className="
grid
md:grid-cols-2
gap-5
mb-8
">





<div className="
bg-gray-50
rounded-2xl
p-5
space-y-3
">


<h3 className="
font-bold
text-lg
mb-3
">

Customer Information

</h3>


<p>

<b>Name:</b>

{" "}

{selectedOrder.customer}

</p>



<p>

<b>Phone:</b>

{" "}

{selectedOrder.phone}

</p>



<p>

<b>Address:</b>

{" "}

{selectedOrder.address}

</p>


</div>







<div className="
bg-gray-50
rounded-2xl
p-5
space-y-3
">


<h3 className="
font-bold
text-lg
mb-3
">

Order Summary

</h3>




<p>

<b>Payment:</b>

{" "}

{selectedOrder.payment || "Not Received"}

</p>






<p>

<b>Status:</b>

{" "}

{selectedOrder.status}

</p>







<p className="
text-blue-600
font-bold
text-xl
">

Total:

${selectedOrder.total}

</p>







<p className="
font-bold
text-lg
">

Total Items:


{" "}

{

selectedOrder.products?.reduce(

(total,item)=>

total + Number(item.quantity || 1),

0

)

|| 0


}


</p>



</div>




</div>









{/* PRODUCTS */}


<h3 className="
text-xl
font-bold
mb-5
">

Purchased Products

</h3>







<div className="space-y-5">


{


selectedOrder.products && selectedOrder.products.length > 0 ?


selectedOrder.products.map((product,index)=>(



<div

key={index}

className="
border
rounded-2xl
p-5
flex
flex-col
sm:flex-row
gap-5
hover:shadow-md
transition
"

>





<img

src={product.image}

alt={product.name}

className="
w-full
sm:w-32
h-32
rounded-xl
object-cover
"

/>








<div className="flex-1">


<h4 className="
text-xl
font-bold
text-gray-800
">

{product.name}

</h4>







<div className="
grid
grid-cols-2
gap-3
mt-4
text-gray-600
">



<p>

<b>Price:</b>

${product.price}

</p>






<p>

<b>Quantity:</b>

{product.quantity || 1}

</p>






<p>

<b>Subtotal:</b>

<span className="
text-blue-600
font-bold
">

$

{

Number(product.price) *

Number(product.quantity || 1)

}

</span>


</p>






</div>





</div>





</div>




))


:



<p className="
text-gray-500
text-center
">

No Products Found

</p>



}



</div>









{/* CLOSE BUTTON */}


<button

onClick={()=>setSelectedOrder(null)}

className="
mt-8
w-full
bg-gray-800
hover:bg-gray-900
text-white
py-3
rounded-xl
font-semibold
"

>

Close Order

</button>






</div>



</div>



)

}
</div>
);
}

export default Orders;
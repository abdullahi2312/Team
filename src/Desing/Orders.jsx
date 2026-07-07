import { useOrders } from "../Context/Ordercontext";


function Orders(){


const {orders}=useOrders();



return(

<div className="p-4 sm:p-6 lg:p-8 bg-gray-100 min-h-screen mt-8">



<h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6">

Orders Management

</h1>





{
orders.length===0 ? (


<div className="bg-white p-6 rounded-2xl shadow text-center text-gray-500">

No Orders Found

</div>



):(


<>



<div className="grid grid-cols-1 gap-4 md:hidden">



{

orders.map((item)=>(


<div

key={item.id}

className="bg-white rounded-2xl shadow p-5 space-y-3 hover:shadow-lg transition"

>



<div className="flex justify-between items-center">


<h2 className="font-bold text-gray-800">

#{item.id}

</h2>



<span className="bg-yellow-100 text-yellow-600 px-3 py-1 rounded-full text-xs font-semibold">

{item.status}

</span>



</div>





<div className="border-t pt-3 space-y-2 text-sm">


<p>

<span className="font-semibold text-gray-700">

Customer:

</span>

{" "}

{item.customer}

</p>





<p>

<span className="font-semibold text-gray-700">

Phone:

</span>

{" "}

{item.phone}

</p>






<p>

<span className="font-semibold text-gray-700">

Address:

</span>

{" "}

{item.address}

</p>






<p>

<span className="font-semibold text-gray-700">

Payment:

</span>

{" "}

{item.payment || "Not Paid"}

</p>





<p className="text-blue-600 font-bold text-lg">

${item.total}

</p>



</div>



</div>



))


}



</div>










<div className="hidden md:block bg-white rounded-2xl shadow overflow-hidden">


<div className="overflow-x-auto">



<table className="w-full min-w-[900px]">



<thead className="bg-gray-50">


<tr className="border-b">


<th className="p-4 text-left text-gray-700">

Order ID

</th>


<th className="p-4 text-left text-gray-700">

Customer

</th>



<th className="p-4 text-left text-gray-700">

Phone

</th>




<th className="p-4 text-left text-gray-700">

Address

</th>




<th className="p-4 text-left text-gray-700">

Total

</th>




<th className="p-4 text-left text-gray-700">

Payment

</th>




<th className="p-4 text-left text-gray-700">

Status

</th>


</tr>


</thead>







<tbody>



{

orders.map((item)=>(



<tr

key={item.id}

className="border-b hover:bg-gray-50 transition"

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






<td className="p-4 max-w-[200px]">

{item.address}

</td>





<td className="p-4 text-blue-600 font-bold">

${item.total}

</td>





<td className="p-4">

{item.payment || "Not Paid"}

</td>





<td className="p-4">


<span className="bg-yellow-100 text-yellow-600 px-3 py-1 rounded-full text-sm font-semibold">

{item.status}

</span>


</td>






</tr>



))


}



</tbody>





</table>



</div>


</div>



</>


)

}





</div>


)


}


export default Orders;
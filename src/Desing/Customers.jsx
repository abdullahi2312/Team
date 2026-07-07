import { FaUserCircle } from "react-icons/fa";
import { useUser } from "../Context/Usercontext";
import { useOrders } from "../Context/Ordercontext";


function Customers(){


const {users=[]}=useUser();

const {orders=[]}=useOrders();
return (


<div className="p-4 sm:p-6 lg:p-8 bg-gray-100 min-h-screen mt-8">





<h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6">

Customers Management

</h1>







{

users.length > 0 ? (



<>

<div className="grid grid-cols-1 gap-4 md:hidden">



{

users.map((item)=>{


const userOrders = orders.filter(

(order)=>

order.email === item.email

);





return(



<div

key={item.email}

className="bg-white rounded-2xl shadow p-5 hover:shadow-lg transition"

>




<div className="flex items-center gap-3 mb-4">


<FaUserCircle className="text-gray-400 text-3xl"/>



<div>

<h2 className="font-bold text-gray-800">

{item.name}

</h2>


<p className="text-sm text-gray-500">

{item.email}

</p>


</div>


</div>







<div className="space-y-2 text-sm">



<p>

<span className="font-semibold">

Phone:

</span>

{" "}

{item.phone || "Not Added"}

</p>






<p className="text-blue-600 font-bold">

{userOrders.length} Orders

</p>




</div>








<div className="mt-4">


{

userOrders.length > 5 ?


<span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm font-semibold">

VIP Customer

</span>



:


<span className="bg-yellow-100 text-yellow-600 px-3 py-1 rounded-full text-sm font-semibold">

Regular

</span>



}



</div>







</div>



)



})



}



</div>


<div className="hidden md:block bg-white rounded-2xl shadow overflow-hidden">



<div className="overflow-x-auto">



<table className="w-full min-w-[700px]">





<thead className="bg-gray-50">


<tr className="border-b">


<th className="p-4 text-left text-gray-700">

Customer

</th>


<th className="p-4 text-left text-gray-700">

Email

</th>


<th className="p-4 text-left text-gray-700">

Phone

</th>



<th className="p-4 text-left text-gray-700">

Orders

</th>



<th className="p-4 text-left text-gray-700">

Status

</th>



</tr>


</thead>







<tbody>



{

users.map((item)=>{



const userOrders = orders.filter(

(order)=>

order.email === item.email

);





return(



<tr

key={item.email}

className="border-b hover:bg-gray-50 transition"

>






<td className="p-4 flex items-center gap-3 font-semibold">


<FaUserCircle className="text-gray-400 text-2xl"/>


{item.name}


</td>

<td className="p-4 text-gray-600">

{item.email}

</td>
<td className="p-4 text-gray-600">
{item.phone || "Not Added"}

</td>

<td className="p-4 text-blue-600 font-bold">

{userOrders.length} Orders

</td>

<td className="p-4">

{

userOrders.length > 5 ?

<span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm font-semibold">

VIP Customer

</span>
:
<span className="bg-yellow-100 text-yellow-600 px-3 py-1 rounded-full text-sm font-semibold">
Regular
</span>
}
</td>
</tr>
)
})
}
</tbody>

</table>

</div>

</div>
</>

)
:
<div className="bg-white rounded-xl shadow p-6 text-center text-gray-500">

No Customers Found

</div>

}

</div>

);

}

export default Customers;
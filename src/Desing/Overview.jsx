import { useOrders } from "../Context/Ordercontext";
import { useUser } from "../Context/Usercontext";

import {
LineChart,
Line,
XAxis,
YAxis,
Tooltip,
ResponsiveContainer,
CartesianGrid
} from "recharts";



function Overview(){


const {orders}=useOrders();

const {users}=useUser();






const recentProducts = orders
.flatMap(order=>order.items || [])
.slice(-8)
.reverse();





const totalSales = orders.reduce(

(sum,item)=>sum + Number(item.total || 0),

0

);







const salesData = orders.map((item,index)=>(

{

month:`Order ${index+1}`,

sales:Number(item.total || 0)

}


));







return(



<div className="p-5 bg-gray-50 min-h-screen mt-8">





<h1 className="text-3xl font-bold mb-2">

Dashboard Overview

</h1>



<p className="text-gray-500 mb-6">

Real store information

</p>








<div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 mb-8">





<div className="bg-white p-5 rounded-xl shadow">

<p>
Products Sold
</p>


<h2 className="text-3xl font-bold text-blue-600">

{
recentProducts.length
}

</h2>


</div>








<div className="bg-white p-5 rounded-xl shadow">

<p>
Orders
</p>


<h2 className="text-3xl font-bold text-green-600">

{
orders.length
}

</h2>


</div>








<div className="bg-white p-5 rounded-xl shadow">

<p>
Customers
</p>


<h2 className="text-3xl font-bold text-purple-600">

{
users?.length || 0
}

</h2>


</div>








<div className="bg-white p-5 rounded-xl shadow">

<p>
Sales
</p>


<h2 className="text-3xl font-bold text-red-600">

${totalSales}

</h2>


</div>






</div>









<div className="bg-white rounded-xl shadow p-5 mb-8">


<h2 className="font-bold text-xl mb-5">

Sales Overview

</h2>




<div className="h-64">


<ResponsiveContainer width="100%" height="100%">



<LineChart data={salesData}>


<CartesianGrid strokeDasharray="3 3"/>


<XAxis dataKey="month"/>


<YAxis/>


<Tooltip/>


<Line

type="monotone"

dataKey="sales"

stroke="#2563eb"

strokeWidth={3}

/>


</LineChart>



</ResponsiveContainer>



</div>



</div>









<div className="bg-white rounded-xl shadow p-5">


<h2 className="text-xl font-bold mb-5">

Recent Products

</h2>






{

recentProducts.length === 0 ?



<p className="text-gray-500">

No products purchased yet

</p>




:



<table className="w-full">


<thead>


<tr className="border-b text-left">


<th className="p-3">
Image
</th>


<th>
Name
</th>


<th>
Price
</th>


<th>
Status
</th>


</tr>


</thead>






<tbody>



{

recentProducts.map((item,index)=>(



<tr

key={index}

className="border-b"


>



<td className="p-3">


<img

src={item.image}

className="w-12 h-12 rounded object-cover"

/>


</td>






<td className="font-semibold">

{item.name}

</td>






<td className="text-blue-600 font-bold">

${item.price}

</td>







<td>


<span className="text-green-600 font-bold">

Purchased

</span>


</td>







</tr>



))


}



</tbody>





</table>



}




</div>






</div>



);



}



export default Overview;
import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useUser } from "../Context/Usercontext";

function Checkout() {

const navigate = useNavigate();
const { user } = useUser();

const cartItem = useSelector(
(state)=>state.cart.cartItem || []
);

const product =
JSON.parse(localStorage.getItem("buyNow")) || null;


const [name,setName]=useState(user?.name || "");
const [phone,setPhone]=useState("");
const [address,setAddress]=useState("");


const items = product ? [product] : cartItem;


const total = items.reduce(
(sum,item)=>
sum + Number(item.price) * Number(item.quantity || 1),
0
);



const handleOrder=()=>{

if(!name || !phone || !address){
alert("Please fill all fields");
return;
}


if(items.length===0){
alert("No products found");
return;
}



const orderData={

id:Date.now(),

email:user?.email,

customer:name,

phone,

address,


products:items.map(item=>({

id:item.id,
name:item.name,
image:item.image,
price:item.price,
quantity:item.quantity || 1

})),


total,

payment:"Not Received",

paymentMethod:"",

status:"Pending",

date:new Date().toLocaleString()

};



localStorage.setItem(
"orderData",
JSON.stringify(orderData)
);


localStorage.removeItem("buyNow");


navigate("/payment");


};



return (

<div className="min-h-screen bg-gray-100 p-6 mt-[80px]">

<div className="max-w-xl mx-auto bg-white rounded-xl shadow p-6">


<h1 className="text-3xl font-bold text-center mb-6">
Checkout
</h1>



<div className="bg-gray-100 p-4 rounded-lg mb-5">


{
items.map((item,index)=>(

<div 
key={index}
className="flex items-center justify-between mb-4"
>


<div className="flex gap-3 items-center">


<img
src={item.image}
className="w-16 h-16 rounded-lg object-cover"
/>


<div>

<h2 className="font-semibold">
{item.name}
</h2>

<p className="text-gray-500">
${item.price} × {item.quantity || 1}
</p>

</div>


</div>



<p className="font-bold text-blue-600">

${Number(item.price)*Number(item.quantity || 1)}

</p>


</div>


))

}



<hr/>


<div className="flex justify-between font-bold text-lg mt-3">

<span>Total</span>

<span className="text-blue-600">
${total}
</span>


</div>



</div>




<input
placeholder="Full Name"
value={name}
onChange={(e)=>setName(e.target.value)}
className="w-full border p-3 rounded-lg mb-3"
/>



<input
placeholder="Phone Number"
value={phone}
onChange={(e)=>setPhone(e.target.value)}
className="w-full border p-3 rounded-lg mb-3"
/>




<input
placeholder="Address"
value={address}
onChange={(e)=>setAddress(e.target.value)}
className="w-full border p-3 rounded-lg mb-5"
/>



<button

onClick={handleOrder}

className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold"

>

Continue Payment

</button>


</div>

</div>


);

}


export default Checkout;
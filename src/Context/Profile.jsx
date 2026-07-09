import { useState } from "react";
import { useUser } from "../Context/Usercontext";
import { useOrders } from "../Context/Ordercontext";
import { useMessages } from "../Context/MessageProvider";
import { useNavigate } from "react-router-dom";

import {
  FaUserCircle,
  FaShoppingBag,
  FaMoneyBillWave,
  FaEdit,
  FaSignOutAlt,
  FaEnvelope,
  FaReply,
  FaCamera,
  FaHeart
} from "react-icons/fa";


function Profile() {


const { 
  user, 
  updateUser, 
  updateUserProfile,
  logout 
} = useUser();


const { orders } = useOrders();


const { messages } = useMessages();


const navigate = useNavigate();





const [name,setName] = useState(
 user?.name || ""
);





if(!user){

navigate("/login");

return null;

}









// ======================
// PROFILE IMAGE
// ======================


const handleImageUpload = (e)=>{


const file = e.target.files[0];


if(!file) return;



const reader = new FileReader();



reader.onloadend = ()=>{


updateUserProfile({

profileImage: reader.result

});


};



reader.readAsDataURL(file);


};









// ======================
// REMOVE FAVORITE
// ======================


const removeFavorite = (id)=>{


const updatedFavorites = 
(user.favorites || []).filter(

(item)=>

item.id !== id

);



updateUserProfile({

favorites:updatedFavorites

});


};











// ======================
// ORDERS
// ======================


const myOrders = orders.filter(

(order)=>

order.email === user.email

);









// ======================
// MESSAGES
// ======================


const myMessages = messages.filter(

(message)=>

message.email === user.email

);









// ======================
// STATISTICS
// ======================


const totalPaid = myOrders.reduce(

(sum,order)=>

order.payment === "Paid"

?

sum + Number(order.total)

:

sum

,0);



const totalProducts = myOrders.reduce(

(sum,order)=>

sum + (order.products?.length || 0)

,0);




const totalMessages = myMessages.length;



const totalReplies = myMessages.filter(

(item)=>

item.reply

).length;









// ======================
// UPDATE NAME
// ======================


const changeName = ()=>{


if(!name.trim()){

alert("Enter your name");

return;

}



updateUser(name);


alert(
"Profile Updated Successfully"
);


};







return (


<div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-100 py-10 px-4 mt-[70px]">


<div className="max-w-6xl mx-auto">









{/* PROFILE HEADER */}


<div className="bg-white rounded-3xl shadow-xl overflow-hidden">



<div className="h-36 bg-gradient-to-r from-blue-600 to-indigo-700"></div>




<div className="px-8 pb-8">



<div className="-mt-16 flex flex-col md:flex-row items-center gap-6">






<div className="relative">



<div className="bg-white p-2 rounded-full shadow-xl">



{
user.profileImage ? (


<img

src={user.profileImage}

alt="profile"

className="w-[120px] h-[120px] rounded-full object-cover"

/>


)

:

(

<FaUserCircle className="text-[120px] text-blue-600"/>

)

}



</div>








<label

className="absolute bottom-2 right-2 bg-blue-600 text-white p-3 rounded-full cursor-pointer"

>


<FaCamera/>



<input

type="file"

accept="image/*"

onChange={handleImageUpload}

className="hidden"

/>


</label>



</div>









<div className="text-center md:text-left">



<h1 className="text-3xl font-bold mt-5">

{user.name}

</h1>




<p className="text-gray-500">

{user.email}

</p>





<span className="inline-block mt-3 bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-sm font-semibold">

Customer Account

</span>




</div>




</div>




</div>




</div>









{/* STATISTICS */}


<div className="grid grid-cols-1 md:grid-cols-4 gap-5 mt-8">





<div className="bg-white rounded-2xl shadow-lg p-6">

<FaShoppingBag className="text-4xl text-blue-600 mb-3"/>

<p className="text-gray-500">

Orders

</p>


<h2 className="text-3xl font-bold">

{myOrders.length}

</h2>


</div>







<div className="bg-white rounded-2xl shadow-lg p-6">

<FaMoneyBillWave className="text-4xl text-green-600 mb-3"/>

<p className="text-gray-500">

Total Paid

</p>


<h2 className="text-3xl font-bold text-green-600">

${totalPaid}

</h2>


</div>







<div className="bg-white rounded-2xl shadow-lg p-6">

<FaShoppingBag className="text-4xl text-purple-600 mb-3"/>


<p className="text-gray-500">

Products

</p>


<h2 className="text-3xl font-bold text-purple-600">

{totalProducts}

</h2>


</div>







<div className="bg-white rounded-2xl shadow-lg p-6">

<FaEnvelope className="text-4xl text-orange-500 mb-3"/>


<p className="text-gray-500">

Messages

</p>


<h2 className="text-3xl font-bold text-orange-500">

{totalMessages}

</h2>


</div>



</div>









{/* FAVORITES */}


<div className="bg-white rounded-2xl shadow-lg p-6 mt-8">


<h2 className="text-2xl font-bold flex items-center gap-2 mb-6">

<FaHeart className="text-red-500"/>

My Favorites

</h2>





{
(user.favorites || []).length === 0 ?


<p className="text-gray-500 text-center py-5">

No Favorite Products

</p>


:


<div className="grid grid-cols-1 md:grid-cols-3 gap-5">



{

user.favorites.map((item)=>(


<div

key={item.id}

className="border rounded-xl p-4"

>


<img

src={item.image}

alt={item.name}

className="w-full h-[200px] object-cover rounded-xl"

/>





<h3 className="font-bold text-lg mt-3">

{item.name}

</h3>





<p className="text-blue-600 font-bold">

${item.price}

</p>






<div className="flex gap-3 mt-4">



<button

onClick={()=>navigate(`/view/${item.id}`)}

className="flex-1 bg-blue-600 text-white py-2 rounded-lg"

>

View

</button>





<button

onClick={()=>removeFavorite(item.id)}

className="flex-1 bg-red-500 text-white py-2 rounded-lg"

>

Remove

</button>



</div>



</div>



))


}



</div>


}



</div>
{/* EDIT PROFILE */}


<div className="bg-white rounded-2xl shadow-lg p-6 mt-8">


<h2 className="text-2xl font-bold flex items-center gap-2 mb-5">

<FaEdit/>

Edit Profile

</h2>





<input

type="text"

value={name}

onChange={(e)=>setName(e.target.value)}

className="w-full border-2 border-gray-200 rounded-xl p-4 outline-none focus:border-blue-500"

/>





<button

onClick={changeName}

className="mt-5 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl"

>

Save Changes

</button>



</div>









{/* MY MESSAGES */}



<div className="bg-white rounded-2xl shadow-lg p-6 mt-8">



<div className="flex items-center justify-between mb-6">


<h2 className="text-2xl font-bold flex items-center gap-2">

<FaEnvelope/>

My Messages

</h2>




{

totalReplies > 0 && (


<span className="bg-green-100 text-green-700 px-4 py-1 rounded-full text-sm font-bold">

{totalReplies} New Reply

</span>


)

}


</div>








{

myMessages.length === 0 ? (


<div className="text-center py-10 text-gray-500">

No Messages Found

</div>


)


:


(


<div className="space-y-5">





{

myMessages.map((item)=>(



<div

key={item.id}

className="border rounded-2xl p-5 hover:shadow-md transition"

>



<div className="flex flex-col md:flex-row md:justify-between gap-3">



<div>


<h3 className="font-bold text-lg">

{item.subject}

</h3>



<p className="text-gray-500 text-sm">

{item.date}

</p>


</div>






<span

className={`px-4 py-1 rounded-full text-sm font-semibold w-fit


${
item.status === "Replied"

?

"bg-green-100 text-green-700"

:

"bg-yellow-100 text-yellow-700"

}


`}

>


{item.status}


</span>



</div>









<div className="mt-4 bg-gray-100 p-4 rounded-xl">


<p className="font-semibold mb-2">

Your Message

</p>


<p>

{item.message}

</p>


</div>








{

item.reply && (



<div className="mt-4 bg-blue-50 border border-blue-100 p-4 rounded-xl">



<div className="flex items-center gap-2 text-blue-700 font-bold mb-2">

<FaReply/>

Admin Reply

</div>




<p>

{item.reply}

</p>



</div>



)

}




</div>



))


}



</div>



)

}



</div>












{/* ORDER HISTORY */}



<div className="bg-white rounded-2xl shadow-lg p-6 mt-8">


<h2 className="text-2xl font-bold mb-6">

Order History

</h2>








{

myOrders.length === 0 ? (


<div className="text-center py-10 text-gray-500">

No Orders Found

</div>


)


:


(


<div className="space-y-6">





{

myOrders.map((order)=>(



<div

key={order.id}

className="border rounded-2xl p-5 hover:shadow-lg transition"

>





<div className="flex flex-col md:flex-row justify-between gap-5">



<div>



<h2 className="font-bold text-xl">

Order #{order.id}

</h2>





<p className="text-gray-500 mt-2">

Date : {order.date}

</p>





<p className="text-gray-500">

Payment Method : {order.paymentMethod}

</p>





<p

className={`font-semibold

${
order.payment === "Paid"

?

"text-green-600"

:

"text-red-600"

}

`}

>


Payment Status : {order.payment}


</p>





<p className="text-blue-600 font-semibold">

Order Status : {order.status}

</p>



</div>







<div className="text-right">


<p className="text-gray-500">

Total

</p>




<h1 className="text-3xl font-bold text-blue-600">

${order.total}

</h1>



</div>




</div>









<hr className="my-5"/>








<div className="space-y-4">





{

(order.products || []).map((item,index)=>(



<div

key={index}

className="flex items-center justify-between border rounded-xl p-3"

>





<div className="flex items-center gap-4">



<img

src={item.image}

alt={item.name}

className="w-20 h-20 rounded-xl object-cover"

/>





<div>


<h3 className="font-bold">

{item.name}

</h3>



<p className="text-gray-500">

Price: ${item.price}

</p>




<p className="text-gray-500">

Quantity: {item.quantity || 1}

</p>



</div>



</div>







<span className="text-blue-600 font-bold">


$

{

Number(item.price) *

Number(item.quantity || 1)

}


</span>




</div>



))


}





</div>








</div>



))


}



</div>



)

}



</div>









{/* LOGOUT */}



<button


onClick={()=>{


logout();

navigate("/login");


}}



className="w-full mt-8 bg-red-600 hover:bg-red-700 text-white py-4 rounded-2xl flex items-center justify-center gap-3 text-lg font-semibold"


>



<FaSignOutAlt/>


Logout


</button>






</div>


</div>


);

}


export default Profile;
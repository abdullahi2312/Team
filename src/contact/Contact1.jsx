import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";
import { useState } from "react";
import { useMessages } from "../Context/MessageProvider";


function Contact1(){


const {addMessage}=useMessages();


const user = JSON.parse(
localStorage.getItem("user")
);



const [form,setForm]=useState({

name:"",
email:"",
subject:"",
message:""

});




const handleChange=(e)=>{


setForm({

...form,

[e.target.name]:e.target.value

});


};






const handleSubmit=(e)=>{


e.preventDefault();



if(!user){

alert("Please login first");

return;

}





if(
!form.name ||
!form.email ||
!form.subject ||
!form.message
){

alert("Fill all fields");

return;

}





const newMessage={


id:Date.now(),

userId:user.id,

name:form.name,

email:form.email,

subject:form.subject,

message:form.message,

reply:"",

status:"Pending",

date:new Date().toLocaleDateString()


};





addMessage(newMessage);



alert("Message sent successfully");



setForm({

name:"",
email:"",
subject:"",
message:""

});


};








return(


<div className="min-h-screen bg-gray-100 pt-[50px]">


<section className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12">



<div>


<h2 className="text-3xl font-bold text-gray-800">

Get In Touch

</h2>



<p className="text-gray-600 mt-4">

Have questions about our products, orders, or delivery?
Contact our support team anytime.

</p>




<div className="mt-8 space-y-6">



<div className="flex gap-4 bg-white p-5 rounded-xl shadow">

<FiPhone className="text-blue-600 text-2xl"/>

<div>

<h3 className="font-bold">
Phone
</h3>

<p>
+252 61 0000000
</p>

</div>

</div>






<div className="flex gap-4 bg-white p-5 rounded-xl shadow">

<FiMail className="text-blue-600 text-2xl"/>

<div>

<h3 className="font-bold">
Email
</h3>

<p>
abdallax089@email.com
</p>

</div>

</div>






<div className="flex gap-4 bg-white p-5 rounded-xl shadow">


<FiMapPin className="text-blue-600 text-2xl"/>

<div>

<h3 className="font-bold">
Location
</h3>

<p>
Mogadishu, Somalia
</p>

</div>


</div>



</div>



</div>







<div className="bg-white p-8 rounded-2xl shadow-xl">


<form

onSubmit={handleSubmit}

className="space-y-5"

>



<input

name="name"

value={form.name}

onChange={handleChange}

placeholder="Your Name"

className="w-full border p-4 rounded-lg"

/>





<input

name="email"

value={form.email}

onChange={handleChange}

placeholder="Email Address"

className="w-full border p-4 rounded-lg"

/>







<input

name="subject"

value={form.subject}

onChange={handleChange}

placeholder="Subject"

className="w-full border p-4 rounded-lg"

/>







<textarea

name="message"

value={form.message}

onChange={handleChange}

rows="6"

placeholder="Write your message..."

className="w-full border p-4 rounded-lg resize-none"

/>







<button

className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-lg font-bold"

>

Send Message

</button>



</form>


</div>





</section>


</div>


);


}



export default Contact1;
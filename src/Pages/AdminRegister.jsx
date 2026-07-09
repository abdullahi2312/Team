import { useState } from "react";

import {
  FaUserShield,
  FaPlus,
  FaTrash,
  FaEdit
} from "react-icons/fa";


function AdminRegister() {


const [admins,setAdmins] = useState(()=>{

const saved = localStorage.getItem("admins");

return saved ? JSON.parse(saved) : [];

});





const [formData,setFormData] = useState({

name:"",
email:"",
phone:"",
password:"",
role:""

});





const [editAdmin,setEditAdmin] = useState(null);







const handleChange=(e)=>{


setFormData({

...formData,

[e.target.name]:e.target.value

});


};









const handleSubmit=(e)=>{


e.preventDefault();



if(
!formData.name ||
!formData.email ||
!formData.password ||
!formData.role
){

alert("Please fill all required fields");

return;

}






const exists = admins.find(

(admin)=>

admin.email === formData.email

);



if(exists){

alert("Email already exists");

return;

}







const newAdmin={


id:Date.now(),

name:formData.name,

email:formData.email,

phone:formData.phone,

password:formData.password,

role:formData.role,

createdAt:new Date().toLocaleDateString()

};







const updated=[

...admins,

newAdmin

];






setAdmins(updated);



localStorage.setItem(

"admins",

JSON.stringify(updated)

);







// Ku dar users si login u aqoonsado

// Ku dar users si login u aqoonsado

const users =

JSON.parse(localStorage.getItem("users")) || [];


localStorage.setItem(

"users",

JSON.stringify([

...users,

newAdmin

])

);







setFormData({

name:"",
email:"",
phone:"",
password:"",
role:""

});



alert("Admin Created Successfully");


};











// DELETE ADMIN


const deleteAdmin=(id)=>{


const updated = admins.filter(

(admin)=>admin.id !== id

);



setAdmins(updated);



localStorage.setItem(

"admins",

JSON.stringify(updated)

);


};









// EDIT ADMIN


const updateAdmin=()=>{


const updated = admins.map(

(admin)=>

admin.id === editAdmin.id

?

editAdmin

:

admin

);



setAdmins(updated);



localStorage.setItem(

"admins",

JSON.stringify(updated)

);






// users update

const users =

JSON.parse(localStorage.getItem("users")) || [];



const updatedUsers = users.map(

(user)=>

user.id === editAdmin.id

?

editAdmin

:

user

);



localStorage.setItem(

"users",

JSON.stringify(updatedUsers)

);




setEditAdmin(null);



alert("Admin Updated Successfully");


};









return (

<div className="min-h-screen bg-gray-100 p-5 mt-5">


<div className="max-w-6xl mx-auto">






<div className="flex items-center gap-3 mb-6">


<FaUserShield className="text-blue-600 text-3xl"/>


<h1 className="text-3xl font-bold">

Admin Management

</h1>


</div>








{/* CREATE ADMIN */}



<div className="bg-white rounded-2xl shadow p-6">


<form

onSubmit={handleSubmit}

className="grid grid-cols-1 md:grid-cols-2 gap-5"

>



<input

name="name"

value={formData.name}

onChange={handleChange}

placeholder="Full Name"

className="border p-3 rounded-lg"

/>





<input

name="email"

value={formData.email}

onChange={handleChange}

placeholder="Email"

className="border p-3 rounded-lg"

/>






<input

name="phone"

value={formData.phone}

onChange={handleChange}

placeholder="Phone"

className="border p-3 rounded-lg"

/>






<input

name="password"

value={formData.password}

onChange={handleChange}

placeholder="Password"

className="border p-3 rounded-lg"

/>







<select

name="role"

value={formData.role}

onChange={handleChange}

className="border p-3 rounded-lg md:col-span-2"

>


<option value="">

Choose Role

</option>


<option value="Customer Manager">

Customer Manager

</option>


<option value="Message Manager">

Message Manager

</option>


<option value="Product Manager">

Product Manager

</option>


<option value="Order Manager">

Order Manager

</option>



</select>






<button

className="md:col-span-2 bg-blue-600 text-white py-3 rounded-xl flex justify-center items-center gap-2"

>


<FaPlus/>

Create Admin


</button>



</form>


</div>









{/* ADMIN LIST */}



<div className="mt-8">


<h2 className="text-2xl font-bold mb-5">

Registered Admins

</h2>





<div className="grid grid-cols-1 md:grid-cols-3 gap-5">



{

admins.map((admin)=>(


<div

key={admin.id}

className="bg-white rounded-xl shadow p-5"

>


<h3 className="font-bold text-xl">

{admin.name}

</h3>


<p>

{admin.email}

</p>



<p className="text-blue-600 font-bold">

{admin.role}

</p>



<p className="text-gray-500">

{admin.phone}

</p>




<div className="flex gap-3 mt-5">



<button

onClick={()=>setEditAdmin(admin)}

className="bg-green-600 text-white px-4 py-2 rounded-lg flex gap-2 items-center"

>


<FaEdit/>

Edit

</button>






<button

onClick={()=>deleteAdmin(admin.id)}

className="bg-red-600 text-white px-4 py-2 rounded-lg flex gap-2 items-center"

>


<FaTrash/>

Delete

</button>



</div>




</div>


))


}



</div>


</div>









{/* EDIT MODAL */}



{

editAdmin && (


<div className="fixed inset-0 bg-black/40 flex items-center justify-center p-5">


<div className="bg-white rounded-2xl p-6 w-full max-w-lg">


<h2 className="text-2xl font-bold mb-5">

Edit Admin

</h2>




<input

value={editAdmin.name}

onChange={(e)=>

setEditAdmin({

...editAdmin,

name:e.target.value

})

}

className="w-full border p-3 rounded-lg mb-3"

/>





<input

value={editAdmin.email}

onChange={(e)=>

setEditAdmin({

...editAdmin,

email:e.target.value

})

}

className="w-full border p-3 rounded-lg mb-3"

/>





<select

value={editAdmin.role}

onChange={(e)=>

setEditAdmin({

...editAdmin,

role:e.target.value

})

}

className="w-full border p-3 rounded-lg mb-5"

>


<option value="Customer Manager">

customer Manager
</option>


<option value="Message Manager">

Message Manager

</option>


<option value="Product Manager">

Product Manager

</option>


<option value="Order Manager">

Order Manager

</option>


</select>







<div className="flex gap-3">


<button

onClick={updateAdmin}

className="bg-blue-600 text-white px-6 py-3 rounded-xl"

>

Save

</button>




<button

onClick={()=>setEditAdmin(null)}

className="bg-gray-400 text-white px-6 py-3 rounded-xl"

>

Cancel

</button>


</div>



</div>


</div>


)


}







</div>


</div>


);


}


export default AdminRegister;
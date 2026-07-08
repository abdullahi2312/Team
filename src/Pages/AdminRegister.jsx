import { useState } from "react";

import {
  FaUserShield,
  FaEnvelope,
  FaLock,
  FaPhone,
  FaUserTag,
  FaPlus,
  FaTrash
} from "react-icons/fa";


function AdminRegister() {


  const [admins,setAdmins] = useState(()=>{

    const savedAdmins = localStorage.getItem("admins");

    return savedAdmins
      ? JSON.parse(savedAdmins)
      : [];

  });




  const [formData,setFormData] = useState({

    name:"",
    email:"",
    phone:"",
    password:"",
    role:""

  });





  const handleChange = (e)=>{


    setFormData({

      ...formData,

      [e.target.name]:e.target.value

    });


  };







  const handleSubmit = (e)=>{


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




    const newAdmin = {

      id:Date.now(),

      ...formData

    };





    const updatedAdmins = [

      ...admins,

      newAdmin

    ];





    setAdmins(updatedAdmins);



    localStorage.setItem(
      "admins",
      JSON.stringify(updatedAdmins)
    );





    setFormData({

      name:"",
      email:"",
      phone:"",
      password:"",
      role:""

    });


  };








  const deleteAdmin = (id)=>{


    const updatedAdmins = admins.filter(

      (admin)=>admin.id !== id

    );



    setAdmins(updatedAdmins);



    localStorage.setItem(

      "admins",

      JSON.stringify(updatedAdmins)

    );


  };








  return (


<div className="min-h-screen bg-gray-100 p-5 mt-5">



<div className="max-w-6xl mx-auto">





<div className="flex items-center gap-3 mb-6">


<FaUserShield className="text-blue-600 text-3xl"/>


<h1 className="text-3xl font-bold text-gray-800">

Admin Management

</h1>


</div>








<div className="bg-white rounded-2xl shadow p-6">



<form

onSubmit={handleSubmit}

className="grid grid-cols-1 md:grid-cols-2 gap-5"

>



<div>

<label className="font-semibold">

Full Name

</label>


<div className="border rounded-lg flex items-center px-3 mt-2">


<FaUserShield className="text-gray-400"/>


<input

type="text"

name="name"

value={formData.name}

onChange={handleChange}

placeholder="Admin name"

className="w-full p-3 outline-none"

/>


</div>


</div>








<div>

<label className="font-semibold">

Email

</label>


<div className="border rounded-lg flex items-center px-3 mt-2">


<FaEnvelope className="text-gray-400"/>


<input

type="email"

name="email"

value={formData.email}

onChange={handleChange}

placeholder="admin@gmail.com"

className="w-full p-3 outline-none"

/>


</div>


</div>








<div>

<label className="font-semibold">

Phone

</label>


<div className="border rounded-lg flex items-center px-3 mt-2">


<FaPhone className="text-gray-400"/>


<input

type="text"

name="phone"

value={formData.phone}

onChange={handleChange}

placeholder="Phone number"

className="w-full p-3 outline-none"

/>


</div>


</div>








<div>

<label className="font-semibold">

Password

</label>


<div className="border rounded-lg flex items-center px-3 mt-2">


<FaLock className="text-gray-400"/>


<input

type="password"

name="password"

value={formData.password}

onChange={handleChange}

placeholder="Password"

className="w-full p-3 outline-none"

/>


</div>


</div>








<div className="md:col-span-2">


<label className="font-semibold">

Select Permission

</label>



<div className="border rounded-lg flex items-center px-3 mt-2">


<FaUserTag className="text-gray-400"/>



<select

name="role"

value={formData.role}

onChange={handleChange}

className="w-full p-3 outline-none"


>


<option value="">

Choose Role

</option>


<option value="Product Manager">

Product Manager

</option>


<option value="Order Manager">

Order Manager

</option>


<option value="Message Manager">

Message Manager

</option>


<option value="Super Admin">

Message Manager

</option>



</select>



</div>



</div>








<button

className="md:col-span-2 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl flex items-center justify-center gap-2 font-semibold"

>


<FaPlus/>

Create Admin


</button>





</form>



</div>









<div className="mt-8">


<h2 className="text-xl font-bold mb-4">

Registered Admins

</h2>




<div className="grid grid-cols-1 md:grid-cols-3 gap-5">



{

admins.map((admin)=>(


<div

key={admin.id}

className="bg-white rounded-xl shadow p-5"

>


<h3 className="font-bold text-lg">

{admin.name}

</h3>



<p className="text-gray-500">

{admin.email}

</p>



<p className="text-blue-600 font-semibold mt-2">

{admin.role}

</p>



<button

onClick={()=>deleteAdmin(admin.id)}

className="mt-4 bg-red-600 text-white px-4 py-2 rounded-lg flex items-center gap-2"

>

<FaTrash/>

Delete

</button>


</div>


))


}



</div>


</div>





</div>


</div>


  );

}


export default AdminRegister;
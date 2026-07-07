import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useUser } from "../Context/Usercontext";


function Singup() {

  const navigate = useNavigate();

  const { signup } = useUser();


  const [fullName,setFullName] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [confirmPassword,setConfirmPassword] = useState("");


  const [showPassword,setShowPassword] = useState(false);
  const [showConfirmPassword,setShowConfirmPassword] = useState(false);



  const handleSignup = ()=>{


    if(!fullName || !email || !password || !confirmPassword){

      alert("Please fill all fields");
      return;

    }



    if(password !== confirmPassword){

      alert("Passwords do not match");
      return;

    }



    const userData = {

      name: fullName,
      email: email,
      password: password,
      phone:"Not Added",
      orders:0

    };



    signup(userData);


    alert("Account Created Successfully");


    navigate("/profile");


  };





return (

<div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-900 mt-[50px] via-gray-800 to-black">


<div className="w-[400px] bg-white/10 backdrop-blur-lg border border-white/20 p-8 rounded-2xl shadow-2xl">


<h1 className="text-3xl font-bold text-center text-white mb-6">
Create Account
</h1>



<input

type="text"

placeholder="Full Name"

value={fullName}

onChange={(e)=>setFullName(e.target.value)}

className="w-full p-3 mb-4 rounded-lg bg-white/10 text-white border border-gray-500"

/>



<input

type="email"

placeholder="Email Address"

value={email}

onChange={(e)=>setEmail(e.target.value)}

className="w-full p-3 mb-4 rounded-lg bg-white/10 text-white border border-gray-500"

/>





<div className="relative mb-4">

<input

type={showPassword ? "text":"password"}

placeholder="Password"

value={password}

onChange={(e)=>setPassword(e.target.value)}

className="w-full p-3 rounded-lg bg-white/10 text-white border border-gray-500"

/>


<div

onClick={()=>setShowPassword(!showPassword)}

className="absolute right-3 top-3 text-white cursor-pointer"

>

{
showPassword ? <FaEyeSlash/> : <FaEye/>
}

</div>


</div>





<div className="relative mb-6">

<input

type={showConfirmPassword ? "text":"password"}

placeholder="Confirm Password"

value={confirmPassword}

onChange={(e)=>setConfirmPassword(e.target.value)}

className="w-full p-3 rounded-lg bg-white/10 text-white border border-gray-500"

/>



<div

onClick={()=>setShowConfirmPassword(!showConfirmPassword)}

className="absolute right-3 top-3 text-white cursor-pointer"

>

{
showConfirmPassword ? <FaEyeSlash/> : <FaEye/>
}

</div>


</div>





<button

onClick={handleSignup}

className="w-full bg-green-600 hover:bg-green-700 p-3 rounded-lg text-white font-semibold"

>

Sign Up

</button>



<p className="text-center text-gray-400 mt-5">

Already have account?

<span

onClick={()=>navigate("/login")}

className="text-blue-400 cursor-pointer ml-2"

>

Login

</span>

</p>


</div>


</div>


);


}


export default Singup;
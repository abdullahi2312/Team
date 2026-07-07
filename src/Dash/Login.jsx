import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useUser } from "../Context/Usercontext";


function Login() {

  const navigate = useNavigate();

  const { login } = useUser();


  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const [showPassword,setShowPassword] = useState(false);



  const handleLogin = ()=>{


    if(!email || !password){

      alert("Please fill all fields");
      return;

    }



    // Admin login
    if(
      email === "xasancabdulaahi132@gmail.com" &&
      password === "55443322"
    ){

      const admin = {

        id:1,
        name:"Admin",
        email:"xasancabdulaahi132@gmail.com",
        role:"admin",
        orders:0

      };



      localStorage.setItem(
        "user",
        JSON.stringify(admin)
      );


      localStorage.setItem(
        "role",
        "admin"
      );


      navigate("/dashboard");

      return;

    }





    // Normal users login
    const success = login(email,password);



    if(!success){

      alert("Invalid email or password");

      return;

    }




    const user = JSON.parse(
      localStorage.getItem("user")
    );




    localStorage.setItem(
      "role",
      "user"
    );



    navigate("/profile");


  };






return (

<div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-900 via-gray-800 to-black">


<div className="w-[380px] bg-white/10 backdrop-blur-lg border border-white/20 p-8 rounded-2xl shadow-2xl">


<h1 className="text-3xl font-bold text-center text-white mb-6">

Welcome Back

</h1>




<input

type="email"

placeholder="Email address"

value={email}

onChange={(e)=>setEmail(e.target.value)}

className="w-full p-3 mb-4 rounded-lg bg-white/10 text-white border border-gray-500 outline-none"

/>





<div className="relative mb-6">


<input

type={showPassword ? "text":"password"}

placeholder="Password"

value={password}

onChange={(e)=>setPassword(e.target.value)}

className="w-full p-3 rounded-lg bg-white/10 text-white border border-gray-500 outline-none"

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





<button

onClick={handleLogin}

className="w-full bg-blue-600 hover:bg-blue-700 p-3 rounded-lg text-white font-semibold"

>

Login

</button>





<p className="text-center text-gray-400 mt-6">

Don't have account?


<span

onClick={()=>navigate("/singup")}

className="text-blue-400 cursor-pointer ml-2"

>

Sign Up

</span>


</p>



</div>


</div>


);


}


export default Login;
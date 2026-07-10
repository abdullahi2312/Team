import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useUser } from "../Context/Usercontext";

function Login() {

  const navigate = useNavigate();

  const { login } = useUser();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {

    if (!email || !password) {
      alert("Please fill all fields");
      return;
    }

    // ==========================
    // Super Admin Login
    // ==========================
    if (
      email === "cabdalla@gmail.com" &&
      password === "55443322"
    ) {

      const superAdmin = {
        id: 1,
        name: "Super Admin",
        email: "cabdalla@gmail.com",
        role: "Super Admin",
      };

      localStorage.setItem(
        "admin",
        JSON.stringify(superAdmin)
      );

      localStorage.setItem("role", "admin");

      navigate("/dashboard");

      return;
    }

    // ==========================
    // Registered Admin Login
    // ==========================
    const admins =
      JSON.parse(localStorage.getItem("admins")) || [];

    const foundAdmin = admins.find(
      (admin) =>
        admin.email === email &&
        admin.password === password
    );

    if (foundAdmin) {

      localStorage.setItem(
        "admin",
        JSON.stringify(foundAdmin)
      );

      localStorage.setItem("role", "admin");

      const rolePages = {
        "Product Manager": "/dashboard/products",
        "Order Manager": "/dashboard/orders",
        "Customer Manager": "/dashboard/customers",
        "Message Manager": "/dashboard/messages",
      };

      navigate(rolePages[foundAdmin.role] || "/dashboard");

      return;
    }

    // ==========================
    // Normal User Login
    // ==========================
    const success = login(email, password);

    if (!success) {
      alert("Invalid email or password");
      return;
    }

    localStorage.setItem("role", "user");

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
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 mb-4 rounded-lg bg-white/10 text-white border border-gray-500 outline-none"
        />

        <div className="relative mb-6">

          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 rounded-lg bg-white/10 text-white border border-gray-500 outline-none"
          />

          <div
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-3 text-white cursor-pointer"
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
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
            onClick={() => navigate("/singup")}
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

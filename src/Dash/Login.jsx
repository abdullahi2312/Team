import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const users = [
    { email: "xasancabdulaahi132@gmail.com", password: "87654321", role: "admin" },
    { email: "cabdulaahix099@gmail.com", password: "12345678", role: "user" }
  ];

  const handleLogin = () => {
    const foundUser = users.find(
      (user) => user.email === email && user.password === password
    );

    if (!foundUser) {
      alert("Invalid email or password");
      return;
    }

    localStorage.setItem("role", foundUser.role);

    if (foundUser.role === "admin") {
      navigate("/dashboard");
    } else {
      navigate("/home");
    }
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
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 mb-4 rounded-lg bg-white/10 text-white border border-gray-500 outline-none focus:border-blue-500"
        />

        <div className="relative mb-6">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 rounded-lg bg-white/10 text-white border border-gray-500 outline-none focus:border-blue-500"
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
          className="w-full bg-blue-600 cursor-pointer hover:bg-blue-700 transition-all p-3 rounded-lg text-white font-semibold"
        >
          Login
        </button>

        <p className="text-center text-gray-400 text-sm mt-5">
          Forgot password? <span className="text-blue-400 cursor-pointer">Reset</span>
        </p>

      </div>
    </div>
  );
}

export default Login;
"use client";
import React, { useState } from "react";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    try {
      setLoading(true);
      if (!email || !password) {
        return alert("Please fill all fields");
      }
      const res = await axios.post("/api/login", {
        email,
        password,
      });

      if (!res.status === 200) {
        return alert("Error while login");
      }

      window.location.href = "/admin/add";
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <div className="login h-[100vh] m-5 ">
      <div className="m-4">
        <h1 className="text-3xl font-semibold">Login</h1>
        <div className="bg-yellow-primary w-10 h-1 rounded-2xl"></div>
      </div>
      <div className="flex flex-col space-y-8 md:space-y-0 gap-5">
        <input
          type="email"
          placeholder="Email"
          className="bg-[#1e1e1f] w-full p-4 rounded-2xl outline-none border-[0.2px] border-[#5a5a5b] caret-yellow-primary placeholder-[#7b7b7b] font-semibold  focus:border-yellow-primary focus:border-2"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="bg-[#1e1e1f]  w-full p-4 rounded-2xl outline-none border-[0.2px] border-[#5a5a5b] caret-yellow-primary placeholder-[#7b7b7b] font-semibold focus:border-yellow-primary focus:border-2"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className="bg-[#1e1e1f]  w-full md:w-40 h-12 rounded-2xl font-semibold flex justify-center items-center space-x-2 px-2 py- text-sm border-[0.2px] border-[#5a5a5b] shadow-lg text-yellow-primary transition-all ease-in-out duration-300 active:scale-95"
          onClick={handleLogin}
        >
          <p> {loading ? "Loging..." : "Login"}</p>
        </button>
      </div>
    </div>
  );
}

export default Login;

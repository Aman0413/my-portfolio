"use client";

import React, { useState } from "react";
import { IoIosSend } from "react-icons/io";
import { motion } from "framer-motion";
import toast, { LoaderIcon } from "react-hot-toast";
import axios from "axios";

function Contact() {
  const [loader, setLoader] = useState(false);
  const [data, setData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (data.name === "" || data.email === "" || data.message === "") {
      toast.error("Please fill all the fields");
      return;
    }

    try {
      setLoader(true);
      const res = await axios.post("/api/email", {
        name: data.name,
        email: data.email,
        message: data.message,
      });
      setLoader(false);
      if (res.data.success) {
        toast.success("Message sent successfully!");
        setData({
          name: "",
          email: "",
          message: "",
        });
      } else if (!res.data.success) {
        toast.error("Something went wrong! Please try again later.");
        setData({
          name: "",
          email: "",
          message: "",
        });
      }
    } catch (error) {
      setLoader(false);
      console.log(error);
      toast.error("Something went wrong! Please try again later.");
      setData({
        name: "",
        email: "",
        message: "",
      });
    }
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="contact py-6 "
    >
      <div className="flex flex-col space-y-3">
        <h1 className="text-3xl font-semibold">Contact</h1>
        <div className="bg-yellow-primary w-10 h-1 rounded-2xl"></div>
      </div>

      {/* contact form start */}
      <form
        onSubmit={handleSubmit}
        className=" flex space-y-11 flex-col my-10 pb-3 text-white"
      >
        <div className="flex flex-col md:flex-row space-y-8 md:space-x-5 md:space-y-0">
          <input
            type="text"
            placeholder="Full Name"
            className="bg-[#1e1e1f] w-full p-4 rounded-2xl outline-none border-[0.2px] border-[#5a5a5b] caret-yellow-primary placeholder-[#7b7b7b] font-semibold  focus:border-yellow-primary focus:border-2"
            onChange={(e) => setData({ ...data, name: e.target.value })}
          />

          <input
            type="email"
            placeholder="Email"
            className="bg-[#1e1e1f]  w-full p-4 rounded-2xl outline-none border-[0.2px] border-[#5a5a5b] caret-yellow-primary placeholder-[#7b7b7b] font-semibold focus:border-yellow-primary focus:border-2"
            onChange={(e) => setData({ ...data, email: e.target.value })}
          />
        </div>
        <div className="w-full">
          <textarea
            type="text"
            placeholder="Your Message"
            className="bg-[#1e1e1f] caret-yellow-primary w-full  h-52 p-4 rounded-2xl outline-none border-[0.2px] border-[#5a5a5b] placeholder-[#7b7b7b] font-semibold focus:border-yellow-primary focus:border-2"
            onChange={(e) => setData({ ...data, message: e.target.value })}
          />
        </div>
        <div className=" flex justify-end">
          <button
            className="bg-[#1e1e1f]  w-full md:w-40 h-12 rounded-2xl font-semibold flex justify-center items-center space-x-2 px-2 py- text-sm border-[0.2px] border-[#5a5a5b] shadow-lg text-yellow-primary transition-all ease-in-out duration-300 active:scale-95"
            disabled={loader}
          >
            <span>
              {loader ? <LoaderIcon /> : <IoIosSend className="text-xl" />}
            </span>
            <p>Send Message</p>
          </button>
        </div>
      </form>
      {/* contact form end */}
    </motion.div>
  );
}

export default Contact;

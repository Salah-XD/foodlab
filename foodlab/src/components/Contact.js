import React from "react";
import "./styles/contact.css";

function Contact() {
  return (
    <div className="contact">
      <div className="title__sec flex items-center gap-x-2 font-bold ml-[55px]">
        <div className="path2 w-1 h-8 bg-[#519259]"></div>
        <h1 className="title text-3xl">Contact Us</h1>
      </div>
      <>
        <div className="cwrapper bg-[#A7C8AB] w-[800px] h-[500px] rounded-[14px] flex justify-center flex-col px-10 gap-3">
          <h3 className="font-semibold">Email</h3>
          <input
            className="h-10 rounded-[6px] px-2 border-none outline-none"
            type="email"
            name=""
            id=""
            placeholder="Enter e-mail"
          />
          <h3 className="text-left font-semibold">Message</h3>
          <input
            className="message_field h-[120px] rounded-[6px] px-2 border-none outline-none"
            type="text"
            name=""
            id=""
            placeholder="Enter text"
          />
          <br />
          <a
            href="#"
            className=" send text-[#fff] bg-[#519259] rounded-[5px] px-10 py-3 font-semibold mt-[-30px]"
          >
            Send
          </a>
          <div className="buttons flex justify-between">
            <div className="flex gap-3 bg-[#fff] px-9 py-3 rounded-[7px]">
              <img
                src="./icons/comment.png"
                alt="message"
                className="w-[25px]  "
              />
              <a href="#" className="font-semibold">
                Message
              </a>
            </div>
            <div className="flex gap-3 bg-[#fff] px-9 py-3 rounded-[7px] ">
              <img src="./icons/call.png" alt="call" className="w-[20px]   " />
              <a href="#" className="font-semibold">
                Get a call back
              </a>
            </div>
          </div>
        </div>
      </>
    </div>
  );
}

export default Contact;

import React from "react";

function Contact() {
  return (
    <div className="contact">
      <div className="title__sec flex items-center gap-x-2 font-bold ml-[55px]">
        <div className="path2 w-1 h-8 bg-[#519259]"></div>
        <h1 className="title text-3xl">Contact Us</h1>
      </div>
      <div className="cwrapper">
        <h3>Email</h3>
        <input type="email" name="" id="" placeholder="Enter e-mail" />
        <h3>Message</h3>
        <input type="text" name="" id="" placeholder="Enter text" />
        <a href="#">Send</a>
        <div className="buttons">
          <a href="#">Message</a>
          <a href="#">Get a call back</a>
        </div>
      </div>
    </div>
  );
}

export default Contact;

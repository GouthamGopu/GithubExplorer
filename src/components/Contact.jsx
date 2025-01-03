import React from 'react';
import { Button } from './ui/button';
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="h-[80vh] flex items-center justify-center ">
      <div className="text-center max-w-3xl px-6">
        <h1 className="font-extrabold text-5xl my-8">Contact Us</h1>
        <p className="text-lg mb-6">
          We would love to hear from you! Whether you have questions, suggestions, or feedback, feel free to reach out to us.
        </p>
        <p className="text-lg mb-6">
          GitHub Explorer is continuously improving, and we welcome all kinds of input to help make the platform better. Whether you're a developer or a user, your feedback is invaluable to us.
        </p>
        <p className="text-lg mb-6">
          You can contact us through the following channels:
        </p>
        <div className="space-y-4 mb-6">
          <div className="flex justify-center items-center gap-2">
            <span className="font-bold text-lg">Email:</span>
            <a href="" className="text-blue-600 hover:underline">
              support@githubexplorer.com
            </a>
          </div>
          <div className="flex justify-center items-center gap-2">
            <span className="font-bold text-lg">Phone:</span>
            <span>+91-9347543210</span>
          </div>
          <div className="flex justify-center items-center gap-2">
            <span className="font-bold text-lg">Address:</span>
            <span>Hyderabad, India</span>
          </div>
        </div>
        <p className="text-lg mb-6">
          If you're interested in collaborating with us, or if you want to report any issues or bugs, please reach out and we'll get back to you as soon as possible.
        </p>
      </div>
    </div>
  );
};

export default Contact;

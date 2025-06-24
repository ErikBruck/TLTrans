import React from "react";

const Footer = () => {
  return (
    <footer className= "text-white py-5">
      <div className="container mx-auto px-10 text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} TL-TRANS OÜ. All Rights Reserved.
        </p>
        <div className="mt-4 space-x-4">
          <a href="/privacy-policy" className="hover:underline hover:text-red-500 transition duration-300">
            Privaatsusavaldus
          </a>
          <a href="/terms" className="hover:underline hover:text-red-500 transition duration-300">
            Kasutustingimused
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

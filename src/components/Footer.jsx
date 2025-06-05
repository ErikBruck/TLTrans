import React from "react";

const Footer = () => {
  return (
    <footer className="bg-darkBlueBlack text-white py-4">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} TL-TRANS OÜ. All Rights Reserved.
        </p>
        <div className="mt-4 space-x-4">
          <a href="/privacy-policy" className="hover:underline">
            Privaatsusavaldus
          </a>
          <a href="/terms" className="hover:underline">
            Kasutustingimused
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

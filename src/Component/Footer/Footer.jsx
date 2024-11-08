import React from "react";
import { useLocation } from "react-router-dom";

const Footer = () => {
  const { pathname } = useLocation();
  return (
    <footer className="bg-base-200 mt-24">
      <div className="text-center space-y-6 py-8 border-b-2">
        <h3 className="font-bold text-3xl text-black_color">Gadget Heaven</h3>
        <p className="font-normal text-black_color/60 text-base w-7/12 mx-auto">
          Leading the way in cutting-edge technology and innovation.
        </p>
      </div>
      <div className="footer py-10 container mx-auto text-black_color flex justify-between w-9/12">
        <nav className="flex flex-col items-center">
          <h6 className="text-black_color font-bold text-lg">Services</h6>
          <a className="link link-hover text-black_color/60 text-base font-normal">
            Product Support
          </a>
          <a className="link link-hover text-black_color/60 text-base font-normal">
            Order Tracking
          </a>
          <a className="link link-hover text-black_color/60 text-base font-normal">
            Shippping & Delivery
          </a>
          <a className="link link-hover text-black_color/60 text-base font-normal">
            Returnd
          </a>
        </nav>
        <nav className="flex flex-col items-center">
          <h6 className="text-black_color font-bold text-lg">Company</h6>
          <a className="link link-hover text-black_color/60 text-base font-normal">
            About us
          </a>
          <a className="link link-hover text-black_color/60 text-base font-normal">
            Careers
          </a>
          <a className="link link-hover text-black_color/60 text-base font-normal">
            Contact
          </a>
        </nav>
        <nav className="flex flex-col items-center">
          <h6 className="text-black_color font-bold text-lg">Legal</h6>
          <a className="link link-hover text-black_color/60 text-base font-normal">
            Terms of Service
          </a>
          <a className="link link-hover text-black_color/60 text-base font-normal">
            Privacy policy
          </a>
          <a className="link link-hover text-black_color/60 text-base font-normal">
            Cookie policy
          </a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;

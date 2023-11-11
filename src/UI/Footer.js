import React from "react";
import { Logo } from "../assets";
import './style.css'

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <>
      <footer className="bg-gray-100 p-20">
        {/* Footer Top */}
        <div className="grid grid-cols-4 gap-10 justify-between mb-20 footer-card-A">
          {/* Company Logo and Details */}
          <div className="flex flex-col justify-center items-start gap-4">
            <img src={Logo} alt="Company's Logo" className="w-[150px]" />
            <p className="text-gray-500 text-xl">
              Sed pottitor lects nibh. Viamus magna justo, lacinia eget
              consectetur sed, convallis at tellus. Curabitur aliquet quam id
              dui posuere blandit. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit.
            </p>
          </div>
          {/* Support */}
          <div className="flex flex-col gap-3">
            <h1 className="text-2xl font-bold text-center">Support</h1>
            <p className="text-xl text-center text-gray-600 cursor-pointer">Documentation</p>
            <p className="text-xl text-center text-gray-600 cursor-pointer">FAQ's</p>
            <p className="text-xl text-center text-gray-600 cursor-pointer">Privacy</p>
          </div>

          {/* Company */}
          <div className="flex flex-col gap-3">
            <h1 className="text-2xl font-bold text-center">Company</h1>
            <p className="text-xl text-center text-gray-600 cursor-pointer">About us</p>
            <p className="text-xl text-center text-gray-600 cursor-pointer">News</p>
            <p className="text-xl text-center text-gray-600 cursor-pointer">Quick Start Guide</p>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col gap-3">
            <h1 className="text-2xl font-bold text-center">Contact Info</h1>
            <p className="text-xl text-center text-gray-600 cursor-pointer">
              <span>Office:</span> <span>86 Upper Esst Side, UK</span>
            </p>
            <p className="text-xl text-center text-gray-600 cursor-pointer">
              <span>Call Us:</span>
              <span>+9212277881199</span>
            </p>
            <p className="text-xl text-center text-gray-600 cursor-pointer">
              <span>Email Us:</span>
              <span>agrisense@support.com</span>
            </p>

            <div className="flex flex-col gap-3 mt-4">
              <span className="flex gap-3">
                Follow Us:
                <a href="#">
                  <img src="" alt="twitter" />
                </a>
                <a href="#">
                  <img src="" alt="instagram" />
                </a>
                <a href="#">
                  <img src="" alt="Linkedin" />
                </a>
              </span>
            </div>
          </div>
        </div>
        {/* Footer Below */}
        <div>
          <hr />
          <div className="flex justify-between mt-10 footer-card-B">
            <div>
              <p className="font-bold text-xl text-gray-800">© {currentYear} Agrisense ALL RIGHTS RESERVED</p>
            </div>
            <div className="flex gap-10 last-foot">
              <a className="cursor-pointer font-bold text-xl text-gray-800">About</a>
              <a className="cursor-pointer font-bold text-xl text-gray-800">Help</a>
              <a className="cursor-pointer font-bold text-xl text-gray-800">Contact</a>
              <a className="cursor-pointer font-bold text-xl text-gray-800">Terms</a>
              <a className="cursor-pointer font-bold text-xl text-gray-800">Privacy</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

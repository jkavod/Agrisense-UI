import React from "react";
import { Correct, Wrong } from "../assets";
import './style.css'

export default function Pricing() {
  return (
    <>
      <div>
        <div className="flex flex-col gap-5 justify-center items-center">
          <h1 className="text-4xl font-bold">Do More with Incubator</h1>
          <p className="text-xl text-gray-500">
            Ut totam hymenaeos a quasi enim, duis erat mollitia, pellentesque ac
            metus!
          </p>
          <div className="bg-green w-20 h-1"></div>
        </div>
        <div className="flex gap-2 justify-center items-center mt-10">
          <a className="bg-green p-5 text-xl font-bold text-white rounded">
            Monthly
          </a>
          <a className="bg-white p-5 border text-xl font-bold text-green rounded">
            Yearly
          </a>
        </div>

        {/* Pricing */}
        <div className="grid grid-cols-3 gap-2 w-[100%] lg:px-32 price">
          <div className="mt-20  w-[25vw] bg-gray-100 p-10 hover:bg-gray-200 price-card">
            <div className="flex flex-col items-center gap-4">
              <h1 className="text-2xl font-bold text-black">Starter</h1>
              <p className="text-xl text-gray-500">Basic Solution</p>
              <div className="bg-gray-500 w-[200px] h-[1px]"></div>
            </div>
            <div className="flex flex-col gap-3 justify-center">
              <h1 className="text-7xl mt-4 text-center">
                $25<span className="text-[10px]">/Month</span>
              </h1>
              <div className="flex gap-4 justify-center items-center">
                <img src={Correct} />
                <p className="text-[15px] text-center">Push Notifications</p>
              </div>
              <div className="flex gap-4 justify-center items-center">
                <img src={Correct} />
                <p className="text-[15px] text-center">Push Notifications</p>
              </div>
              <div className="flex gap-4 justify-center items-center">
                <img src={Correct} />
                <p className="text-[15px] text-center">Push Notifications</p>
              </div>
              <div className="flex gap-4 justify-center items-center">
                <img src={Wrong} className="w-7" />
                <p className="text-[15px] text-center">Push Notifications</p>
              </div>
              <div className="flex gap-4 justify-center items-center">
                <img src={Wrong} className="w-7" />
                <p className="text-[15px] text-center">Push Notifications</p>
              </div>
              <div className="flex gap-4 justify-center items-center">
                <img src={Correct} />
                <p className="text-[15px] text-center">Push Notifications</p>
              </div>
            </div>
            <div className="flex justify-center items-center mt-10">
              <a
                href="#"
                className="text-center text-xl font-bold bg-white border-2 p-4 text-green rounded-sm hover:bg-green hover:text-white"
              >
                Choose This
              </a>
            </div>
          </div>
          <div className="mt-20  w-[25vw] bg-gray-100 p-10 hover:bg-gray-200 price-card">
            <div className="flex flex-col items-center gap-4">
              <h1 className="text-2xl font-bold text-black">Starter</h1>
              <p className="text-xl text-gray-500">Basic Solution</p>
              <div className="bg-gray-500 w-[200px] h-[1px]"></div>
            </div>
            <div className="flex flex-col gap-3 justify-center items-center">
              <h1 className="text-7xl mt-4">
                $25<span className="text-[10px]">/Month</span>
              </h1>
              <div className="flex gap-4 justify-center items-center">
                <img src={Correct} />
                <p className="text-[15px] text-center">Push Notifications</p>
              </div>
              <div className="flex gap-4 justify-center items-center">
                <img src={Correct} />
                <p className="text-[15px] text-center">Push Notifications</p>
              </div>
              <div className="flex gap-4 justify-center items-center">
                <img src={Correct} />
                <p className="text-[15px] text-center">Push Notifications</p>
              </div>
              <div className="flex gap-4 justify-center items-center">
                <img src={Wrong} className="w-7" />
                <p className="text-[15px] text-center">Push Notifications</p>
              </div>
              <div className="flex gap-4 justify-center items-center">
                <img src={Wrong} className="w-7" />
                <p className="text-[15px] text-center">Push Notifications</p>
              </div>
              <div className="flex gap-4 justify-center items-center">
                <img src={Correct} />
                <p className="text-[15px] text-center">Push Notifications</p>
              </div>
            </div>
            <div className="flex justify-center items-center mt-10">
              <a
                href="#"
                className="text-center text-xl font-bold bg-white border-2 p-4 text-green rounded-sm hover:bg-green hover:text-white"
              >
                Choose This
              </a>
            </div>
          </div>
          <div className="mt-20  w-[25vw] bg-gray-100 p-10 hover:bg-gray-200 price-card">
            <div className="flex flex-col items-center gap-4">
              <h1 className="text-2xl font-bold text-black">Starter</h1>
              <p className="text-xl text-gray-500">Basic Solution</p>
              <div className="bg-gray-500 w-[200px] h-[1px]"></div>
            </div>
            <div className="flex flex-col gap-3 justify-center items-center">
              <h1 className="text-7xl mt-4">
                $25<span className="text-[10px]">/Month</span>
              </h1>
              <div className="flex gap-4 justify-center items-center">
                <img src={Correct} />
                <p className="text-[15px] text-center">Push Notifications</p>
              </div>
              <div className="flex gap-4 justify-center items-center">
                <img src={Correct} />
                <p className="text-[15px] text-center">Push Notifications</p>
              </div>
              <div className="flex gap-4 justify-center items-center">
                <img src={Correct} />
                <p className="text-[15px] text-center">Push Notifications</p>
              </div>
              <div className="flex gap-4 justify-center items-center">
                <img src={Wrong} className="w-7" />
                <p className="text-[15px] text-center">Push Notifications</p>
              </div>
              <div className="flex gap-4 justify-center items-center">
                <img src={Wrong} className="w-7" />
                <p className="text-[15px] text-center">Push Notifications</p>
              </div>
              <div className="flex gap-4 justify-center items-center">
                <img src={Correct} />
                <p className="text-[15px] text-center">Push Notifications</p>
              </div>
            </div>
            <div className="flex justify-center items-center mt-10">
              <a
                href="#"
                className="text-center text-xl font-bold bg-white border-2 p-4 text-green rounded-sm hover:bg-green hover:text-white"
              >
                Choose This
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

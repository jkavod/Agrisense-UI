import React from "react";
import { Icon } from "../assets";
import './style.css'

export default function Hero() {
  return (
    <>
      <main className="p-6 lg:px-8 w-auto lg:h-[500px]">
        <section>
          <div className="card-holder grid lg:grid-cols-3 gap-2 sm:grid-rows-3 sm:grid-cols-1 justify-center">
            <div className="card bg-gray-100 gap-5 flex flex-col items-center">
              <img src={Icon} alt="" className="w-12 h-12"/>
              <h1 className="text-2xl font-bold text-gray-900">Farm Support</h1>
              <div className="p-[20px]">
              <p className="text-center text-gray-500 relative">
                kdwdkjjkjdbjidndiodoejpjdpekdwdwdbdbdbdbdeddb n n
                scsbcdjeieuuhdedjideeud bebduebddbndj
              </p>
              </div>
            </div>
            <div className="card bg-gray-100 gap-5 flex flex-col items-center">
              <img src={Icon} alt="" className="w-12 h-12"/>
              <h1 className="text-2xl font-bold text-gray-900">Farm Support</h1>
              <div className="p-[20px]">
              <p className="text-center text-gray-500 relative">
                kdwdkjjkjdbjidndiodoejpjdpekdwdwdbdbdbdbdeddb n n
                scsbcdjeieuuhdedjideeud bebduebddbndj
              </p>
              </div>
            </div>
            <div className="card bg-gray-100 gap-5 flex flex-col items-center">
              <img src={Icon} alt="" className="w-12 h-12"/>
              <h1 className="text-2xl font-bold text-gray-900">Farm Support</h1>
              <div className="p-[20px]">
              <p className="text-center text-gray-500 relative">
                kdwdkjjkjdbjidndiodoejpjdpekdwdwdbdbdbdbdeddb n n
                scsbcdjeieuuhdedjideeud bebduebddbndj
              </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

import React from "react";
import { Splash } from "../assets";

export default function AppScreenshot() {
  return(
    <>
      <div className="flex justify-center items-center">
        <div className="grid grid-cols-4">
            <div>
              <img src={Splash} alt="Screenshots"/>
            </div>
            <div>
              <img src={Splash} alt="Screenshots"/>
            </div>
            <div>
              <img src={Splash} alt="Screenshots"/>
            </div>
            <div>
              <img src={Splash} alt="Screenshots"/>
            </div>
        </div>
      </div>
    </>
  )
}
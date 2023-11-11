import React from "react";
import { App, AppB, Icon, AppImgFeat } from "../assets";
import { CarouselScreenshot, Pricing } from ".";
import Testimonial from "./Testimonial";
import { BlogSection, Download, Partners, Statistics } from "./Constants";
import CtaSection from "./Constants/CtaSection";

export default function Body() {
  return (
    <>
      <main className="top-0 relative p-6 lg:px-8 w-auto mt-20 h-auto">
        <div className="grid grid-cols-2 justify-between items-center features mb-50">
          <div className="px-3 w-[500px] flex flex-col gap-6 features-card">
            <h1 className="text-4xl font-bold">
              Dedicate yourself to the things that really matter
            </h1>
            <p className="text-2xl text-gray-500">
              Nec lacinia. Quod dicta donec perspiciatis rutrum saepe egestas,
              porro repellat curabitur, blandit rerum nostrud id conubia
              phasellus officiis penatibus ac fringilla delectus eu cum platea
              aspernatur taciti, maecenas natoque reiciendis aenean, viverra
              unde irure, eum eget voluptate, enim lorem.!
            </p>
            <div className="grid grid-cols-2 gap-5">
              <a
                href="#"
                className="bg-green px-5 py-5 text-center rounded text-white font-bold hover:border-2 hover:text-green hover:bg-white"
              >
                Read More
              </a>
              <a
                href="#"
                className="bg-white border-2 px-5 py-5 text-center rounded text-green font-bold hover:border-2 hover:text-white hover:bg-green"
              >
                Download
              </a>
            </div>
          </div>
          <div className="px-10 ml-5">
            <img
              src={App}
              alt="App Image"
              className="absolute top-[-80px] right-[300px]"
            />
            <img
              src={AppB}
              alt="App Image"
              className="relative bottom-[-80px] right-[-80px]"
            />
          </div>
        </div>

        {/* Features Section */}
        <div className="features-sec">
          <div className="">
            <div className="flex flex-col gap-4">
              <h1 className="text-center font-bold text-4xl">
                Awesome Features
              </h1>
              <p className="text-center text-2xl font-semibold text-gray-700">
                Ut totam hymenaeos a quasi enim, duis erat mollitia,
                pellentesque ac metus!
              </p>
              <div className="flex justify-center items-center mb-20">
                <hr className="bg-green h-1 w-20 rounded-sm" />
              </div>
            </div>
            <div className="flex justify-center">
              <div className="flex items-center feat-grid gap-10">
                <div className="flex flex-col gap-20">
                  <div className="flex flex-col items-end gap-4 feat-div">
                    <img src={Icon} alt="Icon" className="w-20" />
                    <h1 className="text-2xl">Premium Quality</h1>
                    <p className="text-end text-xl w-[250px]">
                      Magna exercitation! Dolor accumsan sapiente, curabitur
                      voluptate minim quidem placeat.
                    </p>
                  </div>
                  <div className="flex flex-col items-end gap-4 feat-div">
                    <img src={Icon} alt="Icon" className="w-20" />
                    <h1 className="text-2xl">Premium Quality</h1>
                    <p className="text-end text-xl w-[250px]">
                      Magna exercitation! Dolor accumsan sapiente, curabitur
                      voluptate minim quidem placeat.
                    </p>
                  </div>
                </div>
                <div className="AppImg">
                  <img src={AppImgFeat} alt="" />
                </div>
                <div className="flex flex-col gap-20">
                  <div className="flex flex-col items-start gap-4 feat-div">
                    <img src={Icon} alt="Icon" className="w-20 ml-0" />
                    <h1 className="text-2xl">Premium Quality</h1>
                    <p className="text-start text-xl w-[250px]">
                      Magna exercitation! Dolor accumsan sapiente, curabitur
                      voluptate minim quidem placeat.
                    </p>
                  </div>
                  <div className="flex flex-col items-start gap-4 feat-div">
                    <img src={Icon} alt="Icon" className="w-20 ml-0" />
                    <h1 className="text-2xl">Premium Quality</h1>
                    <p className="text-start text-xl w-[250px]">
                      Magna exercitation! Dolor accumsan sapiente, curabitur
                      voluptate minim quidem placeat.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* App Screenshot */}
        <div>
          <div className="flex flex-col gap-4 items-center justify-center mb-20">
            <h1 className="text-4xl font-bold">App Screenshots</h1>
            <p className="text-xl text-gray-400">
              Ut totam hymenaeos a quasi enim, duis erat mollitia, pellentesque
              ac metus!
            </p>
            <div className="divider bg-green h-1 w-20 rounded-md"></div>
          </div>
          <CarouselScreenshot />
        </div>

        {/* Statistics */}
        <div className="p-10 bg-green mt-20">
          <Statistics />
        </div>

        {/* CTA Section */}
        <div>
          <div className="flex flex-col justify-center items-center mt-20 gap-3">
            <h1 className="text-4xl font-bold text-center">Quick Overview</h1>
            <p className="text-xl text-center text-gray-500">
              Ut totam hymenaeos a quasi enim, duis erat mollitia, pellentesque
              ac metus!
            </p>
            <div className="bg-green h-1 w-20 rounded-sm"></div>
          </div>
          <CtaSection />
        </div>

        {/* Testimonials */}
        <div>
          <Testimonial />
        </div>

        {/* Pricing */}
        <div>
          <Pricing />
        </div>

        {/* Download Section */}
        <div>
          <Download />
        </div>

        {/* Blog */}
        <div>
          <BlogSection />
        </div>

        {/* Partners */}
        <div>
          <Partners />
        </div>
      </main>
    </>
  );
}

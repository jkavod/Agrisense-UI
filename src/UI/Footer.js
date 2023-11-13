import { Linkedin, Logo, Twitter } from "../assets";

export default function Footer() {
  return (
    <div className="relative mt-16 bg-gray-100" id="support-section">
      <svg
        className="absolute top-0 w-full h-6 -mt-5 sm:-mt-10 sm:h-16"
        preserveAspectRatio="none"
        viewBox="0 0 1440 54"
      >
        <path
          fill="#F3F4F6"
          d="M0 22L120 16.7C240 11 480 1.00001 720 0.700012C960 1.00001 1200 11 1320 16.7L1440 22V54H1320C1200 54 960 54 720 54C480 54 240 54 120 54H0V22Z"
        />
      </svg>

      <div className="px-4 pt-12 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
        <div className="grid row-gap-5 mb-8 lg:grid-cols-6">
          <div className="md:max-w-md lg:col-span-2">
            <a
              href="/"
              aria-label="Go home"
              title="Company"
              className="inline-flex items-center"
            >
              <img
                src={Logo}
                alt="Logo"
                className="w-48 text-teal-accent-400"
              />

              {/* <svg
                className="w-8 text-teal-accent-400"
                viewBox="0 0 24 24"
                strokeLinejoin="round"
                strokeWidth="2"
                strokeLinecap="round"
                strokeMiterlimit="10"
                stroke="currentColor"
                fill="none"
              >
                <rect x="3" y="1" width="7" height="12" />
                <rect x="3" y="17" width="7" height="6" />
                <rect x="14" y="1" width="7" height="6" />
                <rect x="14" y="11" width="7" height="12" />
              </svg> */}
              {/* <span className="ml-2 text-xl font-bold tracking-wide text-gray-100 uppercase">
                Company
              </span> */}
            </a>
            <div className="mt-4 lg:max-w-[300px]">
              <p className="text-xl text-deep-purple-50 text-justify">
              At AgricIntuit, our ethos centers on delivering cutting-edge, AI-infused agricultural solutions. Our multidisciplinary team crafts innovations to address global farming challenges.
              </p>
              {/* <p className="mt-4 text-sm text-deep-purple-50">
                Eaque ipsa quae ab illo inventore veritatis et quasi architecto
                beatae vitae dicta sunt explicabo.
              </p> */}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-5 row-gap-8 lg:col-span-4 md:grid-cols-3 mt-20">
            <div>
              <p className="font-semibold tracking-wide text-teal-accent-400 text-2xl">
                Support
              </p>
              <ul className="mt-2 space-y-2">
                <li>
                  <a
                    href="/"
                    className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400 text-xl"
                  >
                    Documentation
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400 text-xl"
                  >
                    FAQ's
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400 text-xl"
                  >
                    Privacy
                  </a>
                </li>
                {/* <li>
                  <a
                    href="/"
                    className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400 text-xl"
                  >
                    References
                  </a>
                </li> */}
              </ul>
            </div>
            <div>
              <p className="font-semibold tracking-wide text-teal-accent-400 text-2xl">
                Company
              </p>
              <ul className="mt-2 space-y-2">
                <li>
                  <a
                    href="/"
                    className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400 text-xl"
                  >
                    About us
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400 text-xl"
                  >
                    Feedback
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400 text-xl"
                  >
                    Customers
                  </a>
                </li>
              </ul>
            </div>
            <div className="w-full">
              <p className="font-semibold tracking-wide text-teal-accent-400 text-2xl">
                Contact Info
              </p>
              <ul className="mt-2 space-y-2">
                <li>
                  <a
                    href="/"
                    className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400 text-xl"
                  >
                    <span className="text-gray-800 font-bold text-xl">
                      Office:{" "}
                      <span className="text-xl font-normal text-gray-700">
                        88 Upper Coast Side, UK
                      </span>
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400 text-xl"
                  >
                    <span className="text-gray-800 font-bold text-xl">
                      Call Us:{" "}
                      <span className="text-xl font-normal text-gray-700">
                        +9229922177288
                      </span>
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400 text-xl"
                  >
                    <span className="text-gray-800 font-bold text-xl">
                      Email Us:{" "}
                      <span className="text-xl font-normal text-gray-700">
                        info@agricinuit.com
                      </span>
                    </span>
                  </a>
                </li>
              </ul>
            </div>
            {/* <div>
              <p className="font-semibold tracking-wide text-teal-accent-400">
                Business
              </p>
              <ul className="mt-2 space-y-2">
                <li>
                  <a
                    href="/"
                    className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400 text-xl"
                  >
                    Infopreneur
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400 text-xl"
                  >
                    Personal
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400 text-xl"
                  >
                    Wiki
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400 text-xl"
                  >
                    Forum
                  </a>
                </li>
              </ul>
            </div> */}
          </div>
        </div>
        <div className="flex flex-col justify-between pt-5 pb-10 border-t border-deep-purple-accent-200 sm:flex-row lg:px-5">
          <p className="text-sm text-black">
            © Copyright 2023 AgricIntuit All rights reserved.
          </p>
          <div className="flex items-center mt-4 space-x-4 sm:mt-0">
            <a
              href="/"
              className="transition-colors duration-300 text-deep-purple-100 hover:text-teal-accent-400 text-xl hover:-translate-y-1 hover:p-2 bg-green p-2 rounded-full"
            >
              <img src={Twitter} alt="Twitter" className="h-5"/>
            </a>
            <a
              href="/"
              className="transition-colors duration-300 text-deep-purple-100 hover:text-teal-accent-400 hover:-translate-y-1 hover:p-2 bg-green p-2 rounded-full"
            >
               <img src={Linkedin} alt="Linkedin" className="h-5"/>
            </a>
            {/* <a
              href="/"
              className="transition-colors duration-300 text-deep-purple-100 hover:text-teal-accent-400"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
              </svg>
            </a> */}
          </div>
        </div>
      </div>
    </div>
  );
}

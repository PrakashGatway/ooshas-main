import { useState } from "react";
import {
  GraduationCap,
  Briefcase,
  Monitor,
  MapPin,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: GraduationCap,
    title: "Study Global",
    description:
      "Discover 500+ universities worldwide and find the right program for you.",
    bgColor: "#E8512A",
  },
  {
    icon: Briefcase,
    title: "Work Global",
    description:
      "Get expert guidance on careers, visas, and global employment.",
    bgColor: "#5A5A5A",
  },
  {
    icon: Monitor,
    title: "Learn Online",
    description:
      "Access globally recognized online programs and certifications.",
    bgColor: "#1A2B4A",
  },
  {
    icon: MapPin,
    title: "Study Local",
    description:
      "Find the best institutions near you with expert consultation.",
    bgColor: "#E8512A",
  },
];

export default function WhatWeOffer() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="programs" className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <p
            className="text-sm font-bold tracking-widest uppercase mb-3"
            style={{ color: "#E8512A" }}
          >
            WHAT WE OFFER
          </p>

          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Your Journey. Our Expertise.
          </h2>
        </div>

        {/* Cards */}
        <div className="hidden md:block">
          <div className="flex gap-3 items-center">
            {services.map((service, index) => {
              const isActive = activeIndex === index;

              return (
                <div
                  key={service.title}
                  onMouseEnter={() => setActiveIndex(index)}
                  onMouseLeave={() => setActiveIndex(0)}
                  className={`
                  hover:bg-[#F36E47] bg-[#F9F9F9] border p-6
                  transition-all duration-300 text-gray-900 hover:text-white ease-in-out
                  shadow-sm hover:shadow-xl flex flex-col
                  overflow-hidden
                  ${isActive ? "w-[32%] h-[380px]" : "w-[22.6%] h-[320px]"}
                `}
                >
                  {/* <div
                  className="w-14 h-14 flex items-center justify-center mb-3"
                  // style={{ backgroundColor: "white" }}
                >
                 <img src="https://cdn-icons-png.flaticon.com/512/5405/5405403.png" alt="" />
                </div> */}

                  <h3 className="text-[2rem] mt-6 font-semibold mb-3">
                    {service.title.split(" ")[0]}
                    <br />
                    {service.title.split(" ")[1]}
                  </h3>

                  <p className="font-medium flex-1">
                    {service.description}
                  </p>

                  <div className="flex justify-end mt-4">
                    <ArrowRight
                      size={20}
                      className={`transition-transform duration-300 ${isActive ? "translate-x-2" : ""
                        }`}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="block md:hidden">

          <div className="grid grid-cols-1 md:grid-cols-2 lg:flex gap-3 items-stretch">
            {services.map((service, index) => {
              const isActive = activeIndex === index;

              return (
                <div
                  key={service.title}
                  onMouseEnter={() => window.innerWidth >= 1024 && setActiveIndex(index)}
                  onMouseLeave={() => window.innerWidth >= 1024 && setActiveIndex(0)}
                  className={`
          hover:bg-[#F36E47]
          bg-[#F9F9F9]
          border
          p-6
          text-gray-900
          hover:text-white
          transition-all
          duration-300
          ease-in-out
          shadow-sm
          hover:shadow-xl
          flex flex-col
          overflow-hidden

          h-[280px]
          md:h-[300px]

          lg:${isActive ? "w-[32%] h-[380px]" : "w-[22.6%] h-[320px]"}
        `}
                >
                  <h3 className="text-3xl md:text-[2rem] mt-4 md:mt-6 font-semibold mb-3 leading-tight">
                    {service.title.split(" ")[0]}
                    <br />
                    {service.title.split(" ")[1]}
                  </h3>

                  <p className="font-medium text-sm md:text-base flex-1">
                    {service.description}
                  </p>

                  <div className="flex justify-end mt-4">
                    <ArrowRight
                      size={20}
                      className={`transition-transform duration-300 ${isActive ? "translate-x-2" : ""
                        }`}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}





export function StudyGlobalSection1() {
  return (
    <section className="bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-10 items-center min-h-[650px]">
          {/* Left Content */}
          <div className="py-12 col-span-5">
            {/* Logo */}
            <img
              src="https://ooshasglobal.com/images/newlogo3.png"
              alt="ooshas global Logo"
              className="h-24 mb-6"
            />

            <h2 className="text-5xl font-medium text-gray-900 mb-8">
              Ooshas Global
            </h2>

            <p className="text-[20px] font-medium leading-relaxed text-gray-700 max-w-3xl">
              Ooshas Global is a Global Study Abroad Platform that helps
              students from India, Nigeria, Ghana, Nepal, Sri Lanka,
              Turkey, Kenya, Egypt, Vietnam, Malaysia, Indonesia, and
              other emerging countries access best-matched higher
              education opportunities globally.
            </p>

            <a
              href="#"
              className="inline-block mt-8 text-[#F36E47] text-2xl font-medium hover:underline"
            >
              www.ooshasglobal.com
            </a>
          </div>

          {/* Right Image */}
          <div className="relative col-span-5 flex justify-center lg:justify-end">
            <img
              src="./pnn.png"
              alt="Mobile App"
              className="w-full object-contain"
            />
          </div>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="bg-[#eceaea] -mt-8 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
            <div>
              <h3 className="text-5xl font-bold text-[#F36E47]">
                155,000+
              </h3>
              <p className="mt-2 text-2xl text-gray-800">
                Students Empowered
              </p>
            </div>

            <div>
              <h3 className="text-5xl font-bold text-[#F36E47]">
                850+
              </h3>
              <p className="mt-2 text-2xl text-gray-800">
                Global University Clients
              </p>
            </div>

            <div>
              <h3 className="text-5xl font-bold text-[#F36E47]">
                25+
              </h3>
              <p className="mt-2 text-2xl text-gray-800">
                Countries Served
              </p>
            </div>

            <div>
              <h3 className="text-5xl font-bold text-[#F36E47]">
                24/7
              </h3>
              <p className="mt-2 text-2xl text-gray-800">
                Student Support
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function StudyGlobalSection2() {
  return (
    <section className="bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-10 items-center min-h-[650px]">
          <div className="relative col-span-5 flex justify-center lg:justify-start">
            <img
              src="./pnn.png"
              alt="Mobile App"
              className="w-full object-contain"
            />
          </div>
          {/* Left Content */}
          <div className="py-12 col-span-5">
            {/* Logo */}
            <img
              src="https://ooshasglobal.com/images/newlogo3.png"
              alt="ooshas global Logo"
              className="h-24 mb-6"
            />

            <h2 className="text-5xl font-medium text-gray-900 mb-8">
              Ooshas Prep
            </h2>

            <p className="text-[20px] font-medium leading-relaxed text-gray-700 max-w-3xl">
              Ooshas Global is a Global Study Abroad Platform that helps
              students from India, Nigeria, Ghana, Nepal, Sri Lanka,
              Turkey, Kenya, Egypt, Vietnam, Malaysia, Indonesia, and
              other emerging countries access best-matched higher
              education opportunities globally.
            </p>

            <a
              href="#"
              className="inline-block mt-8 text-[#F36E47] text-2xl font-medium hover:underline"
            >
              www.ooshasprep.com
            </a>
          </div>

          {/* Right Image */}

        </div>
      </div>

      {/* Stats Bar */}
      <div className="bg-[#eceaea] -mt-8 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
            <div>
              <h3 className="text-5xl font-bold text-[#F36E47]">
                155,000+
              </h3>
              <p className="mt-2 text-2xl text-gray-800">
                Students Empowered
              </p>
            </div>

            <div>
              <h3 className="text-5xl font-bold text-[#F36E47]">
                850+
              </h3>
              <p className="mt-2 text-2xl text-gray-800">
                Global Clients
              </p>
            </div>

            <div>
              <h3 className="text-5xl font-bold text-[#F36E47]">
                25+
              </h3>
              <p className="mt-2 text-2xl text-gray-800">
                Countries Served
              </p>
            </div>

            <div>
              <h3 className="text-5xl font-bold text-[#F36E47]">
                24/7
              </h3>
              <p className="mt-2 text-2xl text-gray-800">
                Student Support
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
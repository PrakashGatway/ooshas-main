import { ArrowUp } from "lucide-react";

export default function Footer() {
  return (
    <footer
      className="relative overflow-hidden"
      style={{
        backgroundImage: "url('https://yesgermany.com/wp-content/uploads/2024/10/WhatsApp-Image-2024-10-15-at-14.41.53.jpeg')",
        backgroundSize: "contain",
        backgroundPosition: "bottom",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-[#1c3058]/90" />

      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-6 pt-20 pb-4">
          <div className="grid lg:grid-cols-4 gap-16">
            {/* Logo Section */}
            <div>
              <img
                src="/wlogo.png"
                alt="ooshas"
                className="h-20 mb-8"
              />

              <p className="text-white text-xl font-medium mb-8">
                hello@ooshas.com
              </p>

              <p className="text-gray-200 text-lg leading-relaxed">
                105A, first floor, Geetanjali Towers Geetanjali Tower, Ajmer Rd, Jai Ambey Colony, Civil Lines, Jaipur, Rajasthan 302006
              </p>
            </div>

            {/* Products */}
            <div>
              <h3 className="text-white text-2xl font-semibold mb-6">
                Products
              </h3>

              <ul className="space-y-3">
                {[{name: "Ooshas Global", link: "https://www.ooshasglobal.com"},
                {name: "Ooshas Prep", link: "https://www.ooshasprep.com"},
                {name: "Ooshas Talent", link: "https://www.ooshasprep.com"},
                {name: "Ooshas Visa", link: "https://www.ooshasglobal.com"}].map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.link}
                      className="text-gray-200 hover:text-white text-lg"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Culture */}
            <div>
                            <h3 className="text-white text-2xl font-semibold mb-6">

                Culture
              </h3>

              <ul className="space-y-3">
                {[
                  "Working at Ooshas = Fun + Growth!",
                  "Outside In",
                ].map((item) => (
                  <li key={item}>
                    <a
                      href="https://www.ooshasglobal.com"
                      className="text-gray-200 hover:text-white text-lg"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Important Links */}
            <div>
                            <h3 className="text-white text-2xl font-semibold mb-6">

                Important links
              </h3>

              <ul className="space-y-3">
                {[
                  {name: "Ooshas global", link: "https://www.ooshasglobal.com"},
                  {name: "Connect with us", link: "https://www.ooshasglobal.com/contact"},
                  {name: "Career with us", link: "https://www.ooshasglobal.com/careers"},
                  {name: "Test Preparation", link: "https://www.ooshasprep.com"},
                  {name: "Terms & Conditions", link: "https://www.ooshasglobal.com/terms"},
                  {name: "Privacy Policy", link: "https://www.ooshasglobal.com/privacy"}
                ].map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.link}
                       className="text-gray-200 hover:text-white text-lg"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-white/10 mt-8 pt-4 flex flex-col lg:flex-row justify-between items-center">
            <p className="text-gray-200 text-base">
              Copyright © 2026, Ooshas. All rights reserved.
            </p>
            <button
              onClick={() =>
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                })
              }
              className="mt-6 lg:mt-0 border border-white/20 rounded-xl px-6 py-3 text-white flex items-center gap-3 hover:bg-white/10"
            >
              Back to top
              <ArrowUp size={20} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
import {
  ArrowRight,
  MessageCircle,
  Users,
  Building2,
  Globe,
  Headphones,
} from "lucide-react";

export default function Hero() {
  const stats = [
    {
      icon: Users,
      value: "155,000+",
      label: "Students\nEmpowered",
    },
    {
      icon: Building2,
      value: "850+",
      label: "Global University\nPartners",
    },
    {
      icon: Globe,
      value: "25+",
      label: "Countries\nCovered",
    },
    {
      icon: Headphones,
      value: "24/7",
      label: "Expert Support",
    },
  ];

  return (
    <section className="relative mt-16 overflow-hidden bg-[#f8f8f8] min-h-[90vh] flex items-center">
      <div
        className="absolute inset-0 -z-1 pointer-events-none"
        style={{
          backgroundImage:
            "url('./bg.png')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      />
      <div className="absolute inset-0 flex justify-center items-center">

        <div className="max-w-7xl m-auto px-4 pt-20 w-full  ">
          <div className="grid lg:grid-cols-2 gap-6 items-center">
            {/* LEFT */}
            <div className="max-w-lg">
              <h1 className="text-[44px]  lg:text-[60px] leading-[1.2] lg:leading-[1.2] font-bold text-[#363535]">
                Building 
                <br/>
                <span className="text-[#f05a28]">
                   Global Citizens
                </span>
                <br />
                of Tomorrow.
              </h1>
              <p className="mt-8 text-lg sm:text-[20px] font-medium leading-relaxed max-w-xl">
                Ooshas is a global study abroad platform helping
                students unlock world-class education opportunities and
                build a better tomorrow.
              </p>
              <div className="flex flex-wrap gap-4 mt-8">
                <button className="bg-[#f05a28] text-white px-8 py-3 rounded-xl font-semibold flex items-center gap-3 shadow-lg hover:scale-[1.02] transition">
                  Explore Programs
                  <ArrowRight size={18} />
                </button>

                <button className="border-2 border-gray-300 text-[#222] px-8 py-3 rounded-xl font-semibold flex items-center gap-3 hover:border-gray-500 transition">
                  Talk to an Expert
                  <MessageCircle size={18} />
                </button>
              </div>
            </div>

            {/* RIGHT */}
            {/* <div className="flex flex-col h-full justify-end items-end">
              <div className="bg-white hidden lg:block p-4 -mb-24 absolute z-10 shadow-lg border border-gray-200 rounded-3xl">
                <div className="grid grid-cols-4 divide-x divide-gray-200">
                  {stats.map((item, index) => {
                    const Icon = item.icon;

                    return (
                      <div
                        key={index}
                        className="flex flex-col items-center px-4 text-center"
                      >
                        <Icon
                          className="text-[#f05a28] mb-3"
                          size={30}
                        />

                        <h3 className="text-2xl font-bold text-[#222]">
                          {item.value}
                        </h3>

                        <p className="mt-2 text-sm text-gray-600 whitespace-pre-line leading-relaxed">
                          {item.label}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>

    </section>
  );
}
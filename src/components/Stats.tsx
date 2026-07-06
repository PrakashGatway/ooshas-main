import { Users, Building2, Globe, Headphones } from 'lucide-react';

const stats = [
  { icon: Users, value: '155,000+', label: 'Students Empowered' },
  { icon: Building2, value: '850+', label: 'Global University Partners' },
  { icon: Globe, value: '25+', label: 'Countries Covered' },
  { icon: Headphones, value: '24/7', label: 'Expert Support' },
];

export default function Stats() {
  return (
    <section className="py-12 lg:hidden block bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 px-6 py-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div key={stat.value} className="flex flex-col items-center text-center gap-3">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: '#FFF4F0' }}
                  >
                    <Icon size={22} style={{ color: '#E8512A' }} />
                  </div>
                  <div>
                    <p className="text-2xl lg:text-3xl font-extrabold text-gray-900">{stat.value}</p>
                    <p className="text-sm text-gray-500 mt-1">{stat.label}</p>
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




export function AboutOoshas() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <div className="mb-10">
          <h2
            className="text-[2rem] md:text-[3rem] leading-none text-[#2d2d2d]"
           
          >
            About OOSHAS
          </h2>
        </div>

        {/* Content */}
        <div
          className="max-w-7xl"
        >
          <p className="text-[1.4rem] text-[#0b2d4a] mb-4 text-justify">
            OOSHAS Jaipur was founded with a simple yet powerful vision:
            to empower students with the right guidance, opportunities,
            and support needed to achieve their academic and professional
            aspirations across the world. We believe that quality education
            has the power to transform lives, create opportunities, and
            shape future leaders who can make a meaningful impact on society.
          </p>

          <p className="text-[1.4rem] text-[#0b2d4a] mb-4 text-justify">
            From university selection and application assistance to visa
            guidance and pre-departure support, we offer comprehensive
            solutions that simplify the entire study abroad process. Through
            our strong network of international universities and educational
            institutions, we help students access world-class learning
            opportunities in leading study destinations around the globe.
          </p>

          <p className="text-[1.4rem] text-[#0b2d4a] mb-4 text-justify">
            In today's rapidly evolving world, students need more than just
            academic qualifications. They need global exposure, practical
            skills, and the confidence to succeed in an increasingly
            competitive environment. OOSHAS is committed to preparing
            students for these challenges by connecting them with educational
            experiences that foster personal growth, cultural understanding,
            and career advancement.
          </p>

          <p className="text-[1.4rem] text-[#0b2d4a] mb-4 text-justify">            At OOSHAS Jaipur, we are not just helping students choose a
            university—we are helping them build a future filled with
            possibilities, opportunities, and success.
          </p>

          {/* Closing Statement */}
          <div className="pt-4">
            <p className="text-[2rem] font-medium text-[#0b2d4a]">
              Guiding Dreams. Creating Global Success Stories.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}


export function GlobalCitizensSection() {
  return (
    <section className="bg-white py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-2 items-center">
          <div>
            <h2
              className="text-[2rem] md:text-[3rem] mb-6 leading-none text-[#2d2d2d]"
            >
              Creating Global Citizens
            </h2>

            <div className="space-y-3 text-[#1f2937]">
              <p className="text-[1.4rem]">
                At OOSHAS Jaipur, we believe education is more than a degree—
                it is a gateway to new perspectives, opportunities, and
                lifelong success. Our mission is to empower students with the
                guidance and resources they need to pursue world-class
                education and build meaningful careers across the globe.
              </p>

              <p className="text-[1.4rem]">

                We believe global education breaks barriers—not only of
                geography but also of mindset. 
              </p>

              <p className="text-[1.4rem]">

                At OOSHAS, we are building futures, expanding possibilities,
                and helping students become confident global citizens prepared
                to lead, innovate, and create impact wherever they go.
              </p>
            </div>
          </div>

          {/* Right Images */}
          <div className="relative flex justify-center items-center gap-8">
            <div className="">
              <img
                src="https://ooshasglobal.com/a.png"
                alt="Student Success"
                className="rounded-lg w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
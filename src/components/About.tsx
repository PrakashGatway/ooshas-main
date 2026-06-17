import { ArrowRight } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden py-20 lg:py-28" style={{ backgroundColor: '#1A2B4A' }}>
      {/* Dot pattern */}
      <div className="absolute inset-0 dot-pattern-dark opacity-30 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left content */}
          <div>
            <p className="text-sm font-bold tracking-widest uppercase mb-4" style={{ color: '#E8512A' }}>
              ABOUT Ooshas Global
            </p>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-white mb-6 leading-tight">
              World-Class Guidance for Global Aspirations
            </h2>
            <p className="text-gray-300 text-base leading-relaxed mb-8">
              From shortlisting universities to visa assistance, we support you at every step of your journey.
            </p>
            <a
              href="#about"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-white border-2 border-white hover:bg-white hover:text-navy-800 transition-all duration-200"
              style={{ '--hover-color': '#1A2B4A' } as React.CSSProperties}
            >
              Know More About Us
              <ArrowRight size={18} />
            </a>
          </div>

          {/* Right - App mockup */}
          <div className="relative flex justify-center lg:justify-end">
            {/* Orange circle accent */}
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 lg:w-96 lg:h-96 rounded-full opacity-20"
              style={{ backgroundColor: '#E8512A' }}
            />

            {/* Phone mockups */}
            <div className="relative flex items-end gap-4 z-10">
              {/* Main phone */}
              <div className="bg-white rounded-3xl shadow-2xl overflow-hidden w-48 lg:w-56" style={{ height: '380px' }}>
                {/* Phone status bar */}
                <div className="bg-gray-900 px-4 py-2 flex items-center justify-between">
                  <span className="text-white text-xs">9:41</span>
                  <div className="w-16 h-4 bg-gray-800 rounded-full" />
                  <span className="text-white text-xs">●●●</span>
                </div>
                {/* App content */}
                <div className="bg-white p-3 h-full">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-7 h-7 rounded-full overflow-hidden">
                      <img
                        src="https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=100"
                        alt="User"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-gray-900">Hi, Ananya 👋</p>
                      <p className="text-xs text-gray-500">What do you want to learn today?</p>
                    </div>
                  </div>
                  <div className="bg-gray-100 rounded-lg px-3 py-2 mb-3 flex items-center gap-2">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
                    <span className="text-xs text-gray-400">Search for programs, universities...</span>
                  </div>
                  <p className="text-xs font-semibold text-gray-700 mb-2">Popular Categories</p>
                  <div className="grid grid-cols-4 gap-1 mb-3">
                    {['Universities', 'Online Programs', 'Destinations', 'Visa Guide'].map((cat) => (
                      <div key={cat} className="flex flex-col items-center gap-1">
                        <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#FFF4F0' }}>
                          <div className="w-4 h-4 rounded" style={{ backgroundColor: '#E8512A', opacity: 0.6 }} />
                        </div>
                        <span className="text-gray-600 text-center leading-tight" style={{ fontSize: '7px' }}>{cat}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-xs font-semibold text-gray-700 mb-2">Recommended for you</p>
                  <div className="bg-gray-50 rounded-lg p-2 flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg overflow-hidden flex-shrink-0">
                      <img
                        src="https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=100"
                        alt="Program"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="text-gray-800 font-medium leading-tight" style={{ fontSize: '8px' }}>Master of Data Science</p>
                      <p className="text-gray-400 leading-tight" style={{ fontSize: '7px' }}>University of Sydney • Australia</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Secondary phone */}
              <div className="bg-white rounded-3xl shadow-2xl overflow-hidden w-40 lg:w-48 mb-8" style={{ height: '320px' }}>
                <div className="bg-gray-900 px-4 py-2 flex items-center justify-between">
                  <span className="text-white text-xs">5:29</span>
                  <div className="w-12 h-4 bg-gray-800 rounded-full" />
                  <span className="text-white text-xs">●●</span>
                </div>
                <div className="p-3 h-full bg-white">
                  <p className="text-xs font-bold text-gray-900 mb-2">Top Destinations</p>
                  <div className="flex gap-2 mb-3 text-center">
                    {['Popular', 'Europe', 'Asia', 'More'].map((tab) => (
                      <span
                        key={tab}
                        className="text-gray-500"
                        style={{ fontSize: '7px' }}
                      >
                        {tab}
                      </span>
                    ))}
                  </div>
                  {[
                    { country: 'USA', flag: '🇺🇸', unis: '1,800+ universities' },
                    { country: 'Canada', flag: '🇨🇦', unis: '600+ universities' },
                    { country: 'UK', flag: '🇬🇧', unis: '450+ universities' },
                    { country: 'Australia', flag: '🇦🇺', unis: '350+ universities' },
                  ].map((dest) => (
                    <div key={dest.country} className="flex items-center gap-2 mb-2 bg-gray-50 rounded-lg p-1.5">
                      <span className="text-base">{dest.flag}</span>
                      <div>
                        <p className="font-semibold text-gray-900" style={{ fontSize: '8px' }}>{dest.country}</p>
                        <p className="text-gray-400" style={{ fontSize: '7px' }}>{dest.unis}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

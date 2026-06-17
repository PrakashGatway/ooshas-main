import { ArrowRight } from 'lucide-react';

const destinations = [
  {
    country: 'United States',
    flag: '🇺🇸',
    universities: '1,800+',
    image: 'https://images.pexels.com/photos/378570/pexels-photo-378570.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    country: 'United Kingdom',
    flag: '🇬🇧',
    universities: '450+',
    image: 'https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    country: 'Canada',
    flag: '🇨🇦',
    universities: '600+',
    image: 'https://images.pexels.com/photos/1519088/pexels-photo-1519088.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    country: 'Australia',
    flag: '🇦🇺',
    universities: '350+',
    image: 'https://images.pexels.com/photos/995765/pexels-photo-995765.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    country: 'Germany',
    flag: '🇩🇪',
    universities: '300+',
    image: 'https://images.pexels.com/photos/109629/pexels-photo-109629.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    country: 'France',
    flag: '🇫🇷',
    universities: '250+',
    image: 'https://images.pexels.com/photos/532826/pexels-photo-532826.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
];

export default function Destinations() {
  return (
    <section id="destinations" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <p className="text-sm font-bold tracking-widest uppercase mb-3" style={{ color: '#E8512A' }}>
              POPULAR DESTINATIONS
            </p>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900">
              Study Anywhere in the World
            </h2>
          </div>
          <a
            href="#destinations"
            className="inline-flex items-center gap-2 font-semibold text-sm transition-colors duration-200 hover:opacity-80 flex-shrink-0"
            style={{ color: '#E8512A' }}
          >
            View All Destinations
            <ArrowRight size={16} />
          </a>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {destinations.map((dest) => (
            <div
              key={dest.country}
              className="relative rounded-2xl overflow-hidden group cursor-pointer shadow-md hover:shadow-xl transition-all duration-300"
              style={{ height: '220px' }}
            >
              <img
                src={dest.image}
                alt={dest.country}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-70" />
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xl">{dest.flag}</span>
                      <h3 className="text-white font-bold text-lg">{dest.country}</h3>
                    </div>
                    <p className="text-gray-300 text-sm">{dest.universities} Universities</p>
                  </div>
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                    style={{ backgroundColor: '#E8512A' }}
                  >
                    <ArrowRight size={16} color="white" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

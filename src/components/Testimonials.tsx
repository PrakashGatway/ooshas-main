import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Priya Sharma',
    university: 'University of Toronto, Canada',
    image: 'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=200',
    rating: 5,
    text: 'Ooshas Global made my dream of studying in Canada a reality. Their counselors guided me through every step — from shortlisting universities to getting my visa. I could not have done it without them!',
  },
  {
    name: 'Rahul Verma',
    university: 'University of Melbourne, Australia',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=200',
    rating: 5,
    text: 'The personalized guidance I received was exceptional. My counselor understood my profile and helped me target the right universities. I received three admits including my dream school!',
  },
  {
    name: 'Aisha Khan',
    university: 'King\'s College London, UK',
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200',
    rating: 5,
    text: 'From SOP writing to interview preparation, Ooshas Global supported me at every stage. Their team is knowledgeable, responsive, and truly invested in your success.',
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-sm font-bold tracking-widest uppercase mb-3" style={{ color: '#E8512A' }}>
            SUCCESS STORIES
          </p>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-4">
            Students Who Made It Big
          </h2>
          <div className="w-12 h-1 rounded-full mx-auto" style={{ backgroundColor: '#E8512A' }} />
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white rounded-2xl p-7 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} size={16} fill="#E8512A" color="#E8512A" />
                ))}
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">"{t.text}"</p>
              <div className="flex items-center gap-3">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover flex-shrink-0"
                />
                <div>
                  <p className="font-bold text-gray-900 text-sm">{t.name}</p>
                  <p className="text-gray-500 text-xs mt-0.5">{t.university}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

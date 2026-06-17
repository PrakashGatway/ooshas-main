import { useState } from 'react';
import { Mail } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setEmail('');
    }
  }

  return (
    <section className="py-10" style={{ backgroundColor: '#E8512A' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left */}
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-xl bg-white bg-opacity-20 flex items-center justify-center flex-shrink-0">
              <Mail size={28} color="white" />
            </div>
            <div>
              <h3 className="text-white font-bold text-xl lg:text-2xl">
                Stay Updated with
              </h3>
              <p className="text-white text-xl lg:text-2xl font-bold">
                Global Education Insights
              </p>
            </div>
          </div>

          {/* Right - form */}
          {submitted ? (
            <div className="bg-white bg-opacity-20 rounded-xl px-6 py-4 text-white font-semibold text-center">
              Thank you for subscribing!
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex w-full md:w-auto gap-0 rounded-xl overflow-hidden shadow-lg min-w-[320px] max-w-md flex-1 md:flex-initial">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 px-5 py-3.5 text-gray-800 placeholder-gray-400 bg-white outline-none text-sm min-w-0"
              />
              <button
                type="submit"
                className="px-6 py-3.5 font-semibold text-white text-sm flex-shrink-0 transition-opacity hover:opacity-90"
                style={{ backgroundColor: '#1A2B4A' }}
              >
                Subscribe
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

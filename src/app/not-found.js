import React from "react";
import Link from "next/link";

const NotFoundPage = () => {
  return (
    <main className="min-h-[80vh] flex items-center justify-center px-6 py-16 bg-linear-to-br from-pink-50 via-white to-cyan-50 overflow-hidden relative">
      
      {/* Decorative blurred circles */}
      <div className="absolute -top-24 -left-24 w-72 h-72 bg-pink-300/30 rounded-full blur-3xl" />
      <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-cyan-300/30 rounded-full blur-3xl" />

      {/* Main Card */}
      <div className="relative z-10 max-w-2xl w-full text-center">
        
        {/* 404 */}
        <div className="relative mb-6">
          <h1 className="text-[120px] sm:text-[160px] md:text-[200px] font-black leading-none tracking-tight bg-linear-to-r from-pink-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent select-none">
            404
          </h1>

          {/* Floating emoji */}
          <div className="absolute top-2 right-[18%] sm:right-[20%] text-4xl sm:text-5xl animate-bounce">
            ✈️
          </div>

          <div className="absolute bottom-4 left-[18%] sm:left-[22%] text-3xl animate-pulse">
            🧭
          </div>
        </div>

        {/* Content */}
        <div className="backdrop-blur-xl bg-white/70 border border-white/80 shadow-xl rounded-3xl p-8 sm:p-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-5 rounded-full bg-pink-100 text-pink-600 text-sm font-semibold">
            🌍 Lost Destination
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Looks like you&apos;ve wandered off the map!
          </h2>

          <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-xl mx-auto mb-8">
            The destination you&apos;re looking for doesn&apos;t exist or may have
            been moved. Don&apos;t worry — every great adventure starts by finding
            the right path.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/"
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-gray-900 text-white font-semibold hover:bg-gray-800 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              🏠 Back to Home
            </Link>

            <Link
              href="/destinations"
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl border-2 border-gray-900 text-gray-900 font-semibold hover:bg-gray-900 hover:text-white transition-all duration-300 hover:-translate-y-1"
            >
              🌎 Explore Destinations
            </Link>
          </div>
        </div>

        {/* Bottom message */}
        <p className="mt-6 text-sm text-gray-500">
          ✨ Your next adventure is just a click away.
        </p>
      </div>
    </main>
  );
};

export default NotFoundPage;
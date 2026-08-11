"use client";

import Link from "next/link";

const ErrorPage = ({ error, reset }) => {
  return (
    <main className="min-h-[80vh] flex items-center justify-center px-6 py-16 bg-linear-to-br from-pink-50 via-white to-cyan-50 overflow-hidden relative">

      {/* Background Decorations */}
      <div className="absolute -top-24 -left-24 w-80 h-80 bg-pink-300/30 rounded-full blur-3xl" />
      <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-cyan-300/30 rounded-full blur-3xl" />

      <div className="relative z-10 w-full max-w-2xl text-center">

        {/* Error Icon */}
        <div className="relative inline-flex items-center justify-center mb-8">
          <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-white/80 backdrop-blur-xl shadow-xl border border-white flex items-center justify-center">
            <span className="text-6xl sm:text-7xl">😵</span>
          </div>

          {/* Floating Elements */}
          <span className="absolute -top-4 -right-5 text-3xl animate-bounce">
            ⚠️
          </span>

          <span className="absolute -bottom-2 -left-6 text-3xl animate-pulse">
            🧭
          </span>
        </div>

        {/* Content Card */}
        <div className="backdrop-blur-xl bg-white/75 border border-white/80 shadow-2xl rounded-3xl p-8 sm:p-10">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-5 rounded-full bg-red-100 text-red-600 text-sm font-semibold">
            ⚠️ Something went wrong
          </div>

          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mb-5">
            Looks like we hit a{" "}
            <span className="bg-linear-to-r from-pink-500 to-cyan-500 bg-clip-text text-transparent">
              rough patch
            </span>
          </h1>

          {/* Description */}
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-xl mx-auto mb-8">
            Something unexpected happened while loading this page.
            Don&apos;t worry, your adventure doesn&apos;t have to end here.
          </p>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">

            <button
              onClick={() => reset()}
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-gray-900 text-white font-semibold hover:bg-gray-800 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg cursor-pointer"
            >
              🔄 Try Again
            </button>

            <Link
              href="/"
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl border-2 border-gray-900 text-gray-900 font-semibold hover:bg-gray-900 hover:text-white transition-all duration-300 hover:-translate-y-1"
            >
              🏠 Back to Home
            </Link>

          </div>
        </div>

        {/* Footer Message */}
        <p className="mt-6 text-sm text-gray-500">
          ✈️ Every journey has a few unexpected turns.
        </p>

      </div>
    </main>
  );
};

export default ErrorPage;
// src/components/About.jsx
import React from "react";
import chaitanya from "../assets/chaitanya.jpg";

export default function About() {
  return (
    <section
      id="about"
      className="
        relative w-full min-h-screen flex flex-col justify-center items-center text-center
        overflow-hidden px-6 py-16
        bg-gradient-to-br from-pink-300 via-orange-200 to-yellow-100
        dark:from-gray-900 dark:via-gray-800 dark:to-gray-900
      "
    >
      {/* 🌈 Background glowing orbs */}
      <div className="absolute top-10 left-10 w-64 h-64 bg-pink-400/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-16 w-72 h-72 bg-yellow-400/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute top-1/3 right-24 w-60 h-60 bg-orange-400/25 rounded-full blur-3xl animate-pulse"></div>

      {/* ✨ Section Title */}
      <h2 className="relative z-10 text-3xl md:text-4xl font-semibold mb-10 text-gray-900 drop-shadow-[0_0_6px_rgba(255,140,0,0.4)]">
        About Me
      </h2>

      {/* 💎 Glass Card */}
      <div
        className="
          relative z-10 max-w-5xl w-full
          backdrop-blur-2xl bg-white/30 border border-white/40
          shadow-[0_8px_32px_rgba(31,38,135,0.25)]
          rounded-3xl p-10 md:p-14
          flex flex-col md:flex-row items-center gap-10
          transition-transform duration-500
          hover:scale-[1.02] hover:shadow-[0_0_80px_rgba(255,165,0,0.6)]
        "
      >
        {/* LEFT SIDE — Circular Profile Photo */}
        <div className="flex-shrink-0 flex justify-center">
          <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-white/50 shadow-[0_0_60px_rgba(255,255,255,0.2)]">
            <img
              src={chaitanya}
              alt="Chaitanya"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

        {/* RIGHT SIDE — About Text */}
        <div className="text-center md:text-left max-w-xl">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 drop-shadow-[0_0_6px_rgba(255,140,0,0.4)]">
            Hi, I&apos;m <span className="text-orange-600">Chaitanya</span> 👋
          </h1>

          <p className="text-gray-800 leading-relaxed mb-4">
            I’m an aspiring{" "}
            <span className="font-semibold text-pink-600">Full Stack Developer</span>{" "}
            passionate about building scalable, user-friendly, and visually
            appealing web applications.
          </p>

          <p className="text-gray-700 leading-relaxed">
            I love creating digital experiences with clean UI, powerful backend logic,
            and real-world impact using technologies like{" "}
            <span className="text-blue-700 font-medium">React</span>,{" "}
            <span className="text-green-700 font-medium">Node.js</span>, and{" "}
            <span className="text-yellow-600 font-medium">MongoDB</span>. Always
            learning, always improving 🚀
          </p>
        </div>
      </div>
    </section>
  );
}

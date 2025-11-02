// src/components/About.jsx
import React from "react";
import chaitanya from "../assets/chaitanya.jpg";

export default function About() {
  return (
    <section
      id="about"
      className="w-full min-h-[70vh] flex items-center justify-center py-16 px-4"
    >
      <div className="max-w-5xl w-full bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-10 md:p-14 shadow-[0_0_40px_rgba(255,255,255,0.05)] flex flex-col md:flex-row items-center gap-10">
        
        {/* LEFT SIDE: PROFILE PHOTO */}
        <div className="flex-shrink-0 flex justify-center">
          <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-white/20 shadow-[0_0_60px_rgba(255,255,255,0.15)]">
            <img
              src={chaitanya}
              alt="Chaitanya"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

        {/* RIGHT SIDE: ABOUT TEXT */}
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 drop-shadow-lg">
            Hi, I&apos;m <span className="text-yellow-400">Chaitanya</span> 👋
          </h1>

          <p className="text-gray-200 leading-relaxed max-w-xl">
            I’m an aspiring{" "}
            <span className="font-semibold text-pink-400">Full Stack Developer</span>{" "}
            passionate about crafting scalable and user-friendly web applications.
            My focus is on clean UI, robust backend logic, and creating real-world
            digital solutions using modern tools like{" "}
            <span className="text-cyan-300 font-medium">React</span>,{" "}
            <span className="text-green-300 font-medium">Node.js</span>, and{" "}
            <span className="text-amber-300 font-medium">MongoDB</span>.
          </p>

          <p className="mt-6 text-gray-300/90 leading-relaxed max-w-xl">
            I believe in continuous learning, exploring new technologies, and
            turning innovative ideas into impactful web experiences.
          </p>
        </div>
      </div>
    </section>
  );
}

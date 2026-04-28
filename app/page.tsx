"use client";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="bg-white text-black">
      
      {/* HERO */}
      <section className="h-screen flex flex-col justify-center items-center text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-semibold tracking-tight"
        >
          Ankit Verma
        </motion.h1>

        <p className="mt-6 text-xl text-gray-600 max-w-xl">
          iOS Developer crafting high-performance apps with real-time experiences.
        </p>

        <div className="mt-8 flex gap-4">
          <a href="#projects" className="px-6 py-3 bg-black text-white rounded-full">
            View Work
          </a>
          <a href="mailto:vankit10@gmail.com" className="px-6 py-3 border rounded-full">
            Contact
          </a>
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-24 px-6 max-w-4xl mx-auto">
        <h2 className="text-4xl font-semibold mb-6">About</h2>
        <p className="text-lg text-gray-600 leading-relaxed">
          I’m an iOS developer with 1.5+ years of experience building scalable mobile
          applications using Swift, SwiftUI, and UIKit. I specialize in real-time
          systems including live streaming, chat, and location-based features.
        </p>
      </section>

      {/* PROJECT - FEATURED */}
      <section id="projects" className="py-24 bg-gray-50 px-6">
        <div className="max-w-6xl mx-auto">
          
          <h2 className="text-4xl font-semibold mb-12">Featured Work</h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            
            <div>
              <h3 className="text-3xl font-semibold">
                Whitetail Tactical Deer Optics
              </h3>

              <p className="mt-4 text-gray-600">
                A live production app that simulates deer vision and enables
                real-time tracking, communication, and outdoor coordination.
              </p>

              <ul className="mt-6 text-gray-600 space-y-2">
                <li>• Real-time GPS tracking & geofencing</li>
                <li>• Live streaming & camera processing</li>
                <li>• Chat system with Firebase & Socket.IO</li>
                <li>• Push notifications & engagement flows</li>
              </ul>

              <a
                href="https://apps.apple.com/us/app/whitetail-tactical-deer-optics/id6467631622"
                target="_blank"
                className="inline-block mt-6 text-blue-600 font-medium"
              >
                View on App Store →
              </a>
            </div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="rounded-3xl overflow-hidden shadow-lg"
            >
              <img
                src="/app-preview.png"
                alt="App Preview"
                className="w-full"
              />
            </motion.div>

          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section className="py-24 px-6 max-w-5xl mx-auto">
        <h2 className="text-4xl font-semibold mb-12">Skills</h2>

        <div className="grid md:grid-cols-3 gap-8 text-gray-600">
          <div>
            <h3 className="font-semibold text-black mb-2">Languages</h3>
            <p>Swift</p>
          </div>

          <div>
            <h3 className="font-semibold text-black mb-2">Frameworks</h3>
            <p>SwiftUI, UIKit, Combine</p>
          </div>

          <div>
            <h3 className="font-semibold text-black mb-2">Tools</h3>
            <p>Xcode, Git, Firebase</p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <section className="py-16 text-center border-t">
        <p className="text-gray-500">
          © 2026 Ankit Verma
        </p>
      </section>

    </main>
  );
}

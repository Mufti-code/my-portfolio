"use client"

import { motion } from "framer-motion"

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-12">

      {/* HERO */}
      <section className="max-w-4xl mx-auto text-center">
        <motion.h1 
          initial={{opacity:0,y:40}}
          animate={{opacity:1,y:0}}
          transition={{duration:0.6}}
          className="text-5xl font-bold mb-4"
        >
          Maulana Al Mufti
        </motion.h1>

        <motion.p 
          initial={{opacity:0}}
          animate={{opacity:1}}
          transition={{delay:0.3}}
          className="text-xl text-gray-400 mb-6"
        >
          Full Stack Developer
        </motion.p>

        <div className="flex justify-center gap-4">
          <a
            href="mailto:maulana3al0mufti@gmail.com"
            className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:scale-105 transition"
          >
            Hire Me
          </a>

          <a
            href="https://wa.me/6282218292014"
            className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-black transition"
          >
            WhatsApp
          </a>
        </div>
      </section>

      {/* ABOUT */}
      <section className="max-w-4xl mx-auto mt-24">
        <h2 className="text-3xl font-bold mb-6">
          About
        </h2>

        <p className="text-gray-400 leading-relaxed">
          Saya seorang Full Stack Developer yang fokus membangun aplikasi web modern 
          menggunakan React, Next.js, Node.js dan Laravel. 
          Saya senang membuat produk digital yang cepat, scalable dan user friendly.
        </p>
      </section>

      {/* TECH STACK */}
      <section className="max-w-4xl mx-auto mt-24">
        <h2 className="text-3xl font-bold mb-6">
          Tech Stack
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            "JavaScript",
            "React",
            "Next.js",
            "Node.js",
            "Laravel",
            "Tailwind",
            "PostgreSQL",
            "Git"
          ].map((tech)=>(
            <div 
              key={tech}
              className="bg-gray-900 p-4 rounded-lg text-center hover:scale-105 transition"
            >
              {tech}
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section className="max-w-4xl mx-auto mt-24">
        <h2 className="text-3xl font-bold mb-6">
          Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          <div className="bg-gray-900 p-6 rounded-lg hover:scale-105 transition">
            <h3 className="font-semibold mb-2">
              AI Tools Website
            </h3>
            <p className="text-sm text-gray-400">
              Platform kumpulan tools AI untuk produktivitas developer.
            </p>
          </div>

          <div className="bg-gray-900 p-6 rounded-lg hover:scale-105 transition">
            <h3 className="font-semibold mb-2">
              Developer Portfolio
            </h3>
            <p className="text-sm text-gray-400">
              Portfolio modern menggunakan Next.js dan Tailwind.
            </p>
          </div>

          <div className="bg-gray-900 p-6 rounded-lg hover:scale-105 transition">
            <h3 className="font-semibold mb-2">
              Admin Dashboard
            </h3>
            <p className="text-sm text-gray-400">
              Dashboard analytics untuk manajemen data.
            </p>
          </div>

        </div>
      </section>

      {/* CONTACT */}
      <section className="max-w-4xl mx-auto mt-24 text-center">
        <h2 className="text-3xl font-bold mb-6">
          Contact
        </h2>

        <p className="text-gray-400 mb-6">
          Available for freelance work.
        </p>

        <div className="flex justify-center gap-6">
          <a href="mailto:maulana3al0mufti@gmail.com" className="underline">
            Email
          </a>

          <a href="https://wa.me/6282218292014" className="underline">
            WhatsApp
          </a>

          <a href="https://github.com/Mufti-code" className="underline">
            GitHub
          </a>
        </div>
      </section>

    </main>
  )
}
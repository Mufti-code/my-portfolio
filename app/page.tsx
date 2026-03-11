"use client"

import { motion } from "framer-motion"

export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen">

      {/* NAVBAR */}
      <nav className="flex justify-between items-center px-8 py-6 max-w-6xl mx-auto">
        <h1 className="font-bold text-xl">Tocha-Dev</h1>

        <div className="flex gap-6 text-gray-400">
          <a href="#about">About</a>
          <a href="#stack">Stack</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>


      {/* HERO */}
      <section className="text-center mt-24 px-6">

        <motion.h1
          initial={{opacity:0,y:40}}
          animate={{opacity:1,y:0}}
          transition={{duration:0.6}}
          className="text-6xl font-bold mb-6"
        >
          Maulana Al Mufti
        </motion.h1>

        <p className="text-xl text-gray-400 mb-6">
          Full Stack Developer
        </p>

        <p className="text-gray-500 mb-10">
          JavaScript • PHP • Python • Node.js
        </p>

        <div className="flex justify-center gap-4">

          <a
            href="mailto:maulana3al0mufti@gmail.com"
            className="bg-white text-black px-6 py-3 rounded-lg"
          >
            Hire Me
          </a>

          <a
            href="https://github.com/Mufti-code"
            className="border border-white px-6 py-3 rounded-lg"
          >
            GitHub
          </a>

        </div>

      </section>


      {/* ABOUT */}
      <section id="about" className="max-w-4xl mx-auto mt-32 px-6">

        <h2 className="text-3xl font-bold mb-6">
          About Me
        </h2>

        <p className="text-gray-400 leading-relaxed">
          Saya adalah Full Stack Developer yang berpengalaman membangun aplikasi web modern 
          menggunakan JavaScript, React, Next.js, PHP, dan Python. 
          Saya fokus pada pembuatan sistem yang scalable, performa tinggi, dan mudah digunakan.
        </p>

      </section>


      {/* TECH STACK */}
      <section id="stack" className="max-w-4xl mx-auto mt-32 px-6">

        <h2 className="text-3xl font-bold mb-6">
          Tech Stack
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

          {[
            "JavaScript",
            "React",
            "Next.js",
            "Node.js",
            "PHP",
            "Python",
            "MySQL",
            "PostgreSQL",
            "TailwindCSS",
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
      <section id="projects" className="max-w-5xl mx-auto mt-32 px-6">

        <h2 className="text-3xl font-bold mb-10">
          Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          <div className="bg-gray-900 p-6 rounded-lg">
            <h3 className="font-semibold mb-2">
              AI Tools Platform
            </h3>

            <p className="text-gray-400 text-sm">
              Platform kumpulan tools AI untuk meningkatkan produktivitas developer.
            </p>
          </div>

          <div className="bg-gray-900 p-6 rounded-lg">
            <h3 className="font-semibold mb-2">
              Developer Portfolio
            </h3>

            <p className="text-gray-400 text-sm">
              Portfolio modern menggunakan Next.js dan TailwindCSS.
            </p>
          </div>

          <div className="bg-gray-900 p-6 rounded-lg">
            <h3 className="font-semibold mb-2">
              Admin Dashboard
            </h3>

            <p className="text-gray-400 text-sm">
              Dashboard analytics untuk manajemen data dan monitoring sistem.
            </p>
          </div>

        </div>

      </section>


      {/* CONTACT */}
      <section id="contact" className="text-center mt-32 pb-20">

        <h2 className="text-3xl font-bold mb-6">
          Contact
        </h2>

        <p className="text-gray-400 mb-6">
          Available for freelance work
        </p>

        <div className="flex justify-center gap-6">

          <a href="mailto:maulana3al0mufti@gmail.com">
            Email
          </a>

          <a href="https://wa.me/6282218292014">
            WhatsApp
          </a>

          <a href="https://github.com/Mufti-code">
            GitHub
          </a>

        </div>

      </section>

    </main>
  )
}
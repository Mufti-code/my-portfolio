export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-12">

      {/* HERO */}
      <section className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl font-bold mb-4">
          Maulana Al Mufti
        </h1>

        <p className="text-xl text-gray-400 mb-6">
          Full Stack Developer
        </p>

        <p className="text-gray-400 mb-8">
          React • Next.js • Node.js • Laravel
        </p>

        <div className="flex justify-center gap-4">
          <a
            href="mailto:maulana3al0mufti@gmail.com"
            className="bg-white text-black px-6 py-3 rounded-lg font-semibold"
          >
            Email Me
          </a>

          <a
            href="https://wa.me/6282218292014"
            className="border border-white px-6 py-3 rounded-lg"
          >
            WhatsApp
          </a>
        </div>
      </section>

      {/* ABOUT */}
      <section className="max-w-4xl mx-auto mt-20">
        <h2 className="text-3xl font-bold mb-6">
          About Me
        </h2>

        <p className="text-gray-400 leading-relaxed">
          Saya seorang Full Stack Developer yang fokus membangun web modern 
          menggunakan React, Next.js, Node.js dan Laravel. 
          Saya suka membuat aplikasi yang cepat, scalable dan user friendly.
        </p>
      </section>

      {/* TECH STACK */}
      <section className="max-w-4xl mx-auto mt-20">
        <h2 className="text-3xl font-bold mb-6">
          Tech Stack
        </h2>

        <div className="flex flex-wrap gap-3">

          {[
            "JavaScript",
            "React",
            "Next.js",
            "Node.js",
            "Laravel",
            "TailwindCSS",
            "PostgreSQL",
            "Git"
          ].map((tech) => (
            <span
              key={tech}
              className="bg-gray-800 px-4 py-2 rounded-lg"
            >
              {tech}
            </span>
          ))}

        </div>
      </section>

      {/* PROJECTS */}
      <section className="max-w-4xl mx-auto mt-20">
        <h2 className="text-3xl font-bold mb-6">
          Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          <div className="border border-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">
              AI Tools Website
            </h3>

            <p className="text-gray-400 text-sm">
              Website kumpulan tools AI untuk produktivitas.
            </p>
          </div>

          <div className="border border-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">
              Developer Portfolio
            </h3>

            <p className="text-gray-400 text-sm">
              Portfolio developer modern menggunakan Next.js.
            </p>
          </div>

          <div className="border border-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">
              Admin Dashboard
            </h3>

            <p className="text-gray-400 text-sm">
              Dashboard admin untuk manajemen data.
            </p>
          </div>

        </div>
      </section>

      {/* CONTACT */}
      <section className="max-w-4xl mx-auto mt-20 text-center">
        <h2 className="text-3xl font-bold mb-6">
          Contact
        </h2>

        <p className="text-gray-400 mb-6">
          Available for freelance and collaboration.
        </p>

        <div className="flex justify-center gap-6">
          <a
            href="mailto:maulana3al0mufti@gmail.com"
            className="underline"
          >
            Email
          </a>

          <a
            href="https://wa.me/6282218292014"
            className="underline"
          >
            WhatsApp
          </a>

          <a
            href="https://github.com/Mufti-code"
            className="underline"
          >
            GitHub
          </a>
        </div>
      </section>

    </main>
  );
}
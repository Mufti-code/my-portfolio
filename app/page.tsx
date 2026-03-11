"use client"

import { useEffect, useState } from "react"

import { FaReact, FaNodeJs, FaPhp, FaPython, FaGithub, FaGitAlt } from "react-icons/fa"
import { SiNextdotjs, SiMysql, SiPostgresql, SiTailwindcss } from "react-icons/si"

type Repo = {
 id:number
 name:string
 html_url:string
 description:string
}

export default function Home(){

const [repos,setRepos] = useState<Repo[]>([])

useEffect(()=>{

fetch("/api/github")
.then(res=>res.json())
.then(data=>setRepos(data))

},[])

return(

<main className="bg-black text-white min-h-screen">

{/* HERO */}

<section className="text-center pt-32 px-6">

<h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">

Maulana Al Mufti

</h1>

<p className="text-xl text-gray-300 mb-4">

Full Stack Developer

</p>

<p className="text-gray-500 mb-8">

JavaScript • PHP • Python • Node.js

</p>

<div className="flex justify-center gap-4">

<a
href="https://github.com/Mufti-code"
target="_blank"
className="flex items-center gap-2 border border-gray-600 px-6 py-3 rounded-lg hover:bg-gray-900 transition"
>

<FaGithub/>
GitHub

</a>

</div>

</section>


{/* ABOUT */}

<section className="max-w-4xl mx-auto mt-32 px-6 text-center">

<h2 className="text-3xl font-bold mb-6">

About Me

</h2>

<p className="text-gray-400 leading-relaxed">

Saya adalah Full Stack Developer yang fokus membangun aplikasi web modern menggunakan JavaScript, React, Next.js, PHP, dan Python. 
Saya menyukai membuat sistem yang cepat, scalable, dan user friendly.

</p>

</section>


{/* TECH STACK */}

<section className="max-w-5xl mx-auto mt-32 px-6">

<h2 className="text-3xl font-bold mb-12 text-center">

Tech Stack

</h2>

<div className="grid grid-cols-3 md:grid-cols-5 gap-10 text-5xl text-center">

<div className="hover:text-cyan-400 transition"><FaReact/></div>

<div className="hover:text-white transition"><SiNextdotjs/></div>

<div className="hover:text-green-500 transition"><FaNodeJs/></div>

<div className="hover:text-purple-400 transition"><FaPhp/></div>

<div className="hover:text-yellow-400 transition"><FaPython/></div>

<div className="hover:text-blue-500 transition"><SiMysql/></div>

<div className="hover:text-indigo-400 transition"><SiPostgresql/></div>

<div className="hover:text-cyan-300 transition"><SiTailwindcss/></div>

<div className="hover:text-orange-500 transition"><FaGitAlt/></div>

</div>

</section>


{/* PROJECTS */}

<section className="max-w-6xl mx-auto mt-32 px-6">

<h2 className="text-3xl font-bold mb-12 text-center">

Projects

</h2>

<div className="grid md:grid-cols-3 gap-8">

{repos.map((repo)=>(

<a
key={repo.id}
href={repo.html_url}
target="_blank"
className="bg-gray-900 p-6 rounded-xl border border-gray-800 hover:border-cyan-400 hover:shadow-[0_0_25px_#00ffff40] transition"
>

<h3 className="text-lg font-semibold mb-2">

{repo.name}

</h3>

<p className="text-gray-400 text-sm">

{repo.description || "No description"}

</p>

</a>

))}

</div>

</section>


{/* CONTACT */}

<section className="text-center mt-32 pb-20">

<h2 className="text-3xl font-bold mb-6">

Contact

</h2>

<p className="text-gray-400 mb-6">

Available for freelance work

</p>

<div className="flex justify-center gap-6">

<a
href="mailto:maulana3al0mufti@gmail.com"
className="hover:text-cyan-400"
>

Email

</a>

<a
href="https://wa.me/6282218292014"
className="hover:text-green-400"
>

WhatsApp

</a>

<a
href="https://github.com/Mufti-code"
className="hover:text-gray-300"
>

GitHub

</a>

</div>

</section>

</main>

)

}
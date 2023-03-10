import Head from "next/head";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,

} from "react-icons/ai";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useState } from "react";
import deved from "../public/dev-ed-wave.png";
import backend from "../public/backend.png"
import code1 from "../public/code1.png";
import design from "../public/design.png";
import consulting from "../public/consulting.png";
import Image from "next/image";
import web1 from "../public/web1.png";
import web2 from "../public/web2.png";
import web3 from "../public/web3.png";
import web4 from "../public/web4.png";
import web5 from "../public/web5.png";
import web6 from "../public/web6.png";
import { userState } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Robert Palicka Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
     
     <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900">
       <section className="min-h-screen">
         <nav className="py-10 mb-12 flex justify-between">
         <h1 className="text-lg font-burtons dark:text-white">developedbyrob</h1>
         <ul className="flex items-center">
        <li><BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className="cursor-pointer text-2xl dark:text-white" /></li>
        <li>
          <a className=" bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8" href="#">Resume</a>
          </li>
         </ul>
         </nav>
    
    <div className="text-center p-10 py-10">
      <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-3xl dark:text-white">Robert Palicka</h2>
      <h3 className="text-2xl py-2 md:text-3xl dark:text-cyan-600">Developer.</h3>
      <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto dark:text-gray-500">
        Freelancer providing services for programming 
        needs. Joind me down below and lets get cracking!
      </p>
    </div>

    <div className="text-4xl flex justify-center gap-5 py5 text-gray-600 cursor-pointer">
      <AiFillTwitterCircle />
      <AiFillLinkedin />
    </div>

    <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96">
    <Image src={deved} layout="fill" objectFit="cover" alt="me" />
    </div>

       </section>


      <section>

    <div>
      <h3 className="text-4xl py-4 text-center dark:text-white">Skills</h3>
     
    </div>

    <div className="lg:flex gap-10 justify-center dark:text-white dark:shadow-xl">
 <div className="text-center shadow-lg p-10 rounded-xl my-10">
      <Image src={code1} width={100} height={100} alt="code" />
      <h4 className="text-2xl font-light">Web Front-End</h4>
      <h4 className="py-4 text-teal-600">Tech Stack</h4>
      <p>HTML</p>
      <p>CSS(Tailwind)</p>
      <p>JS</p>
      <p>React</p>
      <p>NextJS</p>
    </div>

    <div className="text-center shadow-lg p-10 rounded-xl my-10">
      <Image src={backend} width={100} height={100} alt="backend" />
      <h4 className="text-2xl font-light">Web Back-End</h4>
      <h4 className="py-4 text-teal-600">Tech Stack</h4>
      <p>Node.js</p>
      <p>PHP</p>
      <p>MySQL</p>
      <p>MongoDB</p>
      <p>PostgreSQL</p>
    </div>

    <div className="text-center shadow-lg p-10 rounded-xl my-10">
      <Image src={design} width={100} height={100} alt="design" />
      <h4 className="text-2xl font-light">Designs</h4>
      <h4 className="py-4 text-teal-600">Design tools I use</h4>
      <p>Photoshop</p>
      <p>Xd</p>
      <p>Blender</p>
    </div>

    

    </div>
      </section>


     </main>
    </div>
  );
}

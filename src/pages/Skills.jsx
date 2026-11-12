import { IoDesktopOutline } from "react-icons/io5";
import { FaCode } from "react-icons/fa6";
import { VscGraphLine } from "react-icons/vsc";
import { IoColorPaletteOutline } from "react-icons/io5";
import { FaPlus, FaMinus } from 'react-icons/fa'
import { useState } from "react";
import Canva from '../assets/Canva.png'
import { FaHtml5 } from "react-icons/fa";
// <FaHtml5 />
import { FaCss3Alt } from "react-icons/fa";
// <FaCss3Alt />
import { FaSquareJs } from "react-icons/fa6";
// <FaSquareJs />
import { FaReact } from "react-icons/fa";
// <FaReact />
import { RiTailwindCssFill } from "react-icons/ri";
// <RiTailwindCssFill />
import { SiPython } from "react-icons/si";
// <SiPython />
import { FaGitSquare } from "react-icons/fa";
// <FaGitSquare />
import { IoLogoGithub } from "react-icons/io5";
// <IoLogoGithub />
import { SiVite } from "react-icons/si";
// <SiVite />
import { FaNpm } from "react-icons/fa";
// <FaNpm />
import { BsFillFileEarmarkExcelFill } from "react-icons/bs";
// 
import { FaFileWord } from "react-icons/fa6";

import { SiCoreldraw } from "react-icons/si";
// <SiCoreldraw />
import { AiFillFilePpt } from "react-icons/ai";

const Skills = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [programmingOpen, setProgrammingOpen] = useState(false)
  const [analyticsOpen, setAnalyticsOpen] = useState(false)
  const [creativeOpen, setCreativeOpen] = useState(false)
  return (
    <div className="bg-[var(--page-bg)] text-[var(--page-text)] p-3">
      <div className="flex flex-col gap-3">
        <div className="flex flex-col gap-3">
          <p className="text-orange-500 font-extrabold">[ WHAT I WORK WITH ]</p>

          <h1 className="text-3xl font-bold">Skills & Technologies.</h1>

          <p>Tools, technologies and abilities I've been exploring throughtout my development journey.</p>

        </div>

        <div className="flex flex-col gap-4">
          <div className=" p-4 rounded-2xl flex flex-col gap-3 border-b border-amber-600">
            <div onClick={() => setIsOpen(!isOpen)} className="flex items-center gap-4 bg-orange-400 p-2 rounded-xl cursor-pointer">
              <IoDesktopOutline />

              <p className="text-[1.2rem] font-bold">FullStack Development</p>
              {isOpen ? <FaMinus /> : <FaPlus />}
            </div>
            {isOpen && (
              <div className="flex flex-col gap-4 text-[.9rem] font-semibold">
                <div className=" flex gap-4 items-center">
                  <div className="bg-[#292929] h-20 w-20 rounded-full shrink-0 flex items-center justify-center text-[#E34F26]">
                    <FaHtml5 className="h-13 w-13"/>

                  </div>
                  <div className="flex-1 min-w-0 min-h-20 border-r-2 border-t-2 border-b-2 rounded-r-3xl p-3 border-orange-600 flex flex-col justify-center relative">
                    <p className="font-extrabold">HTML – Structure of the Web</p>
                    <p className="text-xs">Builds the foundation of web pages using semantic and accessible markup.</p>
                    <div className="h-3 w-3 rounded-2xl bg-orange-600 absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2"></div>
                    <div className="h-3 w-3 rounded-2xl bg-orange-600 absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/2"></div>
                  </div>
                </div>

                <div className="flex gap-4 items-center">
                  <div className="flex-1 min-w-0 min-h-20 border-l-2 border-t-2 border-b-2 rounded-l-3xl p-3 border-orange-600 flex flex-col justify-center relative">
                    <p className="font-extrabold">CSS – Styling & Design</p>
                    <p className="text-xs">Styles web pages with layouts, colours, animations and responsive designs.</p>
                    <div className="h-3 w-3 rounded-2xl bg-orange-600 absolute top-0 right-0 translate-x-1/2 -translate-y-1/2"></div>
                    <div className="h-3 w-3 rounded-2xl bg-orange-600 absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2"></div>
                  </div>

                  <div className="bg-[#292929] h-20 w-20 rounded-full shrink-0 flex items-center justify-center text-[#1572B6]">
                    <FaCss3Alt className="h-13 w-13"/>
                  </div>
                </div>

                <div className=" flex items-center">

                  <div className="bg-[#292929] h-20 w-20 rounded-full shrink-0 flex items-center justify-center text-[#F7DF1E]">
                    <FaSquareJs className="h-13 w-13"/>

                  </div>

                  <div className="flex-1 min-w-0 min-h-20 border-r-2 border-t-2 border-b-2 rounded-r-3xl p-3 border-orange-600  flex flex-col justify-center relative">
                    <p className="font-extrabold">JavaScript – Interactivity & Logic</p>
                    <p className="text-xs">Adds dynamic functionality, user interactions and logic to websites.</p>
                    <div className="h-3 w-3 rounded-2xl bg-orange-600 absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2"></div>
                    <div className="h-3 w-3 rounded-2xl bg-orange-600 absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/2"></div>
                  </div>

                </div>

                <div className="flex items-center">
                  <div className="flex-1 min-w-0 min-h-20 border-l-2 border-t-2 border-b-2 rounded-l-3xl p-3 border-orange-600 flex flex-col justify-center relative">
                    <p className="font-extrabold">React – Modern UI Development</p>
                    <p className="text-xs">Builds interactive user interfaces using reusable components and state.</p>
                    <div className="h-3 w-3 rounded-2xl bg-orange-600 absolute top-0 right-0 translate-x-1/2 -translate-y-1/2"></div>
                    <div className="h-3 w-3 rounded-2xl bg-orange-600 absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2"></div>
                  </div>

                  <div className="bg-[#292929] h-20 w-20 rounded-full shrink-0 flex items-center justify-center text-[#61DAFB]">
                    <FaReact className="h-13 w-13"/>

                  </div>

                </div>

                <div className=" flex items-center">

                  <div className="bg-[#292929] h-20 w-20 rounded-full shrink-0 flex items-center justify-center text-[#06B6D4]">
                    <RiTailwindCssFill className="h-13 w-13"/>

                  </div>
                  <div className="flex-1 min-w-0 min-h-20 border-r-2 border-t-2 border-b-2 rounded-r-3xl p-3 border-orange-600 flex flex-col justify-center relative">
                    <p className="font-extrabold">Tailwind CSS – Utility-First Styling</p>
                    <p className="text-xs">Creates modern and responsive interfaces using utility-based CSS classes.</p>
                    <div className="h-3 w-3 rounded-2xl bg-orange-600 absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2"></div>
                    <div className="h-3 w-3 rounded-2xl bg-orange-600 absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/2"></div>
                  </div>
                </div>
              </div>)}
          </div>

          <div className=" p-4 rounded-2xl flex flex-col gap-3 border-b border-amber-600">
            <div onClick={() => setProgrammingOpen(!programmingOpen)}
              className="flex items-center gap-4  bg-orange-400 p-2 rounded-xl cursor-pointer">

              <FaCode />

              <p className="text-[1.2rem] font-bold">Programming & Tools</p>
              {programmingOpen ? <FaMinus /> : <FaPlus />}

            </div>
            {programmingOpen && (
              <div className="flex flex-col gap-4 text-[.9rem] font-semibold">

                <div className="flex items-center">

                  <div className="flex-1 min-w-0 min-h-20 border-l-2 border-t-2 border-b-2 rounded-l-3xl p-3 border-orange-600 flex flex-col justify-center relative">
                    <p className="font-extrabold">Python – Programming & Automation</p>
                    <p className="text-xs">Used for programming, problem-solving, scripting and data-related tasks.</p>
                    <div className="h-3 w-3 rounded-2xl bg-orange-600 absolute top-0 right-0 translate-x-1/2 -translate-y-1/2"></div>
                    <div className="h-3 w-3 rounded-2xl bg-orange-600 absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2"></div>
                  </div>
                  <div className="bg-[#3776AB] h-20 w-20 rounded-full shrink-0 flex items-center justify-center text-[#FFD43B]">
                    <SiPython className="h-13 w-13"/>

                  </div>
                </div>

                <div className="flex items-center">

                  <div className="bg-[#292929] h-20 w-20 rounded-full shrink-0 flex items-center justify-center text-[#F05032]">
                    <FaGitSquare className="h-13 w-13"/>
                  </div>

                  <div className="flex-1 min-w-0 min-h-20 border-r-2 border-t-2 border-b-2 rounded-r-3xl p-3 border-orange-600 flex flex-col justify-center relative">
                    <p className="font-extrabold">Git – Version Control</p>
                    <p className="text-xs">Tracks code changes and helps manage different stages of development.</p>
                    <div className="h-3 w-3 rounded-2xl bg-orange-600 absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2"></div>
                    <div className="h-3 w-3 rounded-2xl bg-orange-600 absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/2"></div>
                  </div>
                </div>

                <div className="flex items-center">

                  <div className="flex-1 min-w-0 min-h-20 border-l-2 border-t-2 border-b-2 rounded-l-3xl p-3 border-orange-600 flex flex-col justify-center relative">
                    <p className="font-extrabold">GitHub – Code Hosting & Collaboration</p>
                    <p className="text-xs">Stores code repositories and makes project sharing and collaboration easier.</p>
                    <div className="h-3 w-3 rounded-2xl bg-orange-600 absolute top-0 right-0 translate-x-1/2 -translate-y-1/2"></div>
                    <div className="h-3 w-3 rounded-2xl bg-orange-600 absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2"></div>
                  </div>


                  <div className="bg-[#292929] h-20 w-20 rounded-full shrink-0 flex items-center justify-center text-white">
                    <IoLogoGithub className="h-13 w-13"/>
                  </div>


                </div>


              </div>)}
          </div>

          {/* <div className=" p-4 rounded-2xl flex flex-col gap-3 border-b border-amber-600">
            <div onClick={() => setAnalyticsOpen(!analyticsOpen)} className="flex items-center gap-4  bg-orange-400 p-2 rounded-xl cursor-pointer">

              <VscGraphLine />

              <p className="text-[1.2rem] font-bold">Data & Analytics → Academic Knowledge</p>
              {analyticsOpen ? <FaMinus /> : <FaPlus />}
            </div>
            {analyticsOpen && (

              <div className="flex gap-4 text-[.9rem] font-semibold">



                <p className="bg-orange-300 pr-[1px] pl-[1px] rounded">Excel</p>
                <p className="bg-orange-300 pr-[1px] pl-[1px] rounded">Power BI</p>
                <p className="bg-orange-300 pr-[1px] pl-[1px] rounded">Tableau</p>

              </div>)}
          </div> */}

          
<div className="p-4 rounded-2xl flex flex-col gap-3 border-b border-amber-600">

  <div
    onClick={() => setCreativeOpen(!creativeOpen)}
    className="flex items-center gap-4 bg-orange-400 p-2 rounded-xl cursor-pointer"
  >
    <IoColorPaletteOutline />
    <p className="text-[1.2rem] font-bold">Creative Tools</p>
    {creativeOpen ? <FaMinus /> : <FaPlus />}
  </div>

  {creativeOpen && (
    <div className="flex flex-col gap-4 text-sm font-semibold">

      {/* Canva */}
      <div className="flex items-center gap-3 w-full">
        <div className="bg-[#292929] h-20 w-20 rounded-full shrink-0 flex items-center justify-center">
          <img className="h-16 w-16 object-contain" src={Canva} alt="Canva" />
        </div>

        <div className="flex-1 min-w-0 min-h-20 border-r-2 border-t-2 border-b-2 rounded-r-3xl p-3 border-orange-600 flex flex-col justify-center relative">
          <p className="font-extrabold">Canva – Graphic Design</p>
          <p className="text-xs">Creates designs, presentations and social media graphics.</p>
          <div className="h-3 w-3 rounded-full bg-orange-600 absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2"></div>
          <div className="h-3 w-3 rounded-full bg-orange-600 absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/2"></div>
        </div>
      </div>

      {/* CorelDRAW */}
      <div className="flex items-center gap-3 w-full">

        <div className="flex-1 min-w-0 min-h-20 border-l-2 border-t-2 border-b-2 rounded-l-3xl p-3 border-orange-600 flex flex-col justify-center relative">
          <p className="font-extrabold">CorelDRAW – Vector Design</p>
          <p className="text-xs">Creates vector graphics, layouts and illustrations.</p>
          <div className="h-3 w-3 rounded-full bg-orange-600 absolute top-0 right-0 translate-x-1/2 -translate-y-1/2"></div>
          <div className="h-3 w-3 rounded-full bg-orange-600 absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2"></div>
        </div>
        <div className="bg-[#292929] h-20 w-20 rounded-full shrink-0 flex items-center justify-center ">
          <SiCoreldraw className=" h-13 w-13 text-[#00A859]"/>
        </div>
      </div>

      {/* MS Word */}
      <div className="flex items-center gap-3 w-full">
        <div className="bg-[#292929] h-20 w-20 rounded-full shrink-0 flex items-center justify-center">
          <FaFileWord className="text-[#2076f8] h-13 w-13"/>
        </div>

        <div className="flex-1 min-w-0 min-h-20 border-r-2 border-t-2 border-b-2 rounded-r-3xl p-3 border-orange-600 flex flex-col justify-center relative">
          <p className="font-extrabold">MS Word – Documentation</p>
          <p className="text-xs">Creates and formats documents and reports.</p>
          <div className="h-3 w-3 rounded-full bg-orange-600 absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2"></div>
          <div className="h-3 w-3 rounded-full bg-orange-600 absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/2"></div>
        </div>
      </div>

      {/* MS PowerPoint */}
      <div className="flex items-center gap-3 w-full">

        <div className="flex-1 min-w-0 min-h-20 border-l-2 border-t-2 border-b-2 rounded-l-3xl p-3 border-orange-600 flex flex-col justify-center relative">
          <p className="font-extrabold">MS PowerPoint – Presentations</p>
          <p className="text-xs">Designs structured and visually engaging presentations.</p>
          <div className="h-3 w-3 rounded-full bg-orange-600 absolute top-0 right-0 translate-x-1/2 -translate-y-1/2"></div>
          <div className="h-3 w-3 rounded-full bg-orange-600 absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2"></div>
        </div>
        <div className="bg-[#292929] h-20 w-20 rounded-full shrink-0 flex items-center justify-center">
          <AiFillFilePpt className="text-[#D24726] h-13 w-13"/>
        </div>
      </div>

    </div>
  )}
</div>

          </div>
        </div>
      </div>

  )
}

export default Skills
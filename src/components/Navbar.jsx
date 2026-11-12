import { Link } from 'react-router-dom'
import { VscThreeBars } from "react-icons/vsc"
// import { MdModeNight } from "react-icons/md"


import { AiFillHome } from "react-icons/ai";
import { FaRegUser } from "react-icons/fa6";
import { GiGraduateCap } from "react-icons/gi";
import { FaCode } from "react-icons/fa6";
import { BsStack } from "react-icons/bs";
import { PiBagSimpleFill } from "react-icons/pi";
import { MdOutlineEmail } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
// import { FaYoutube } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import Logo from '../assets/DEVX-AYU.png'
import { MdModeNight, MdLightMode } from "react-icons/md"
import { MdDarkMode } from "react-icons/md";
// import { useState } from 'react'
import { useState, useEffect, useRef } from "react";
const Navbar = ({ darkMode, setDarkMode }) => {

    const [menuOpen, setMenuOpen] = useState(false)
    const menuRef = useRef(null);
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setMenuOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);
    return (
        <div>
            {/* Menu Wrapper */}
            <div ref={menuRef} className="relative">

                <nav className='bg-[#ffc176] h-14  flex justify-between items-center p-3 sticky top-0 z-50 relative shadow-[0_6px_12px_rgba(180,83,9,0.35)] text-[var(--page-text)]'>
                    <Link onClick={() => setMenuOpen(false)} to="/home" className='flex items-center'><span> <img className='h-10 w-10' src={Logo} alt="" /></span> <span className='text-black font-extrabold'>DevX</span><span className='text-orange-500 font-extrabold'>Ayu</span></Link>
                    <div className='flex gap-10'>
                        <button onClick={() => setDarkMode(!darkMode)} className='bg-white p-[5px] rounded-2xl cursor-pointer text-[black]'>
                            {darkMode ? <MdLightMode /> : <MdModeNight />}
                        </button>
                        <button onClick={() => setMenuOpen(true)} className='text-2xl cursor-pointer text-[black]'><VscThreeBars /></button>
                        {/* ------------- */}

                        {menuOpen && (
                            <div className=' h-90 w-90 top-16 right-2 absolute rounded-xl p-5 bg-white/20
  backdrop-blur-xl
  border border-white/30
  shadow-lg'>
                                <div className='flex flex-col gap-3 p-2'>
                                    <Link onClick={() => setMenuOpen(false)} className='flex items-center gap-3' to="/home">
                                        <AiFillHome />
                                        Home
                                    </Link>

                                    <Link onClick={() => setMenuOpen(false)} className='flex items-center gap-3' to="/about">
                                        <FaRegUser />
                                        About Me
                                    </Link>

                                    <Link onClick={() => setMenuOpen(false)} className='flex items-center gap-3' to="/education">
                                        <GiGraduateCap />
                                        Education
                                    </Link>

                                    <Link onClick={() => setMenuOpen(false)} className='flex items-center gap-3' to="/skills">
                                        <FaCode />
                                        Skills
                                    </Link>

                                    <Link onClick={() => setMenuOpen(false)} className='flex items-center gap-3' to="/projects">
                                        <BsStack />
                                        Projects
                                    </Link>

                                    <Link onClick={() => setMenuOpen(false)} className='flex items-center gap-3' to="/experience">
                                        <PiBagSimpleFill />
                                        Experience
                                    </Link>

                                    <Link onClick={() => setMenuOpen(false)} className='flex items-center gap-3' to="/contact">
                                        <MdOutlineEmail />
                                        Contact
                                    </Link>
                                </div>

                                <div onClick={() => setMenuOpen(false)} className='absolute top-5 right-5 text-2xl cursor-pointer'>
                                    <RxCross2 />
                                </div>

                                <div className='h-[1px] bg-black m-3'>

                                </div>

                                <div className='flex text-3xl justify-between p-2'>
                                    <Link to="https://github.com/devx-ayk"><FaGithub /></Link>
                                    <Link to="https://www.linkedin.com/in/ayush-kumar-996948340/"><FaLinkedin /></Link>
                                    <Link to="https://www.instagram.com/ayushhh._.kumar_?utm_source=qr&igsh=M251OGJ1c2xpMWk="><RiInstagramFill /></Link>
                                    <Link to="https://mail.google.com/mail/?view=cm&fs=1&to=YOUR_EMAIL@gmail.com"><IoMail /></Link>
                                </div>

                            </div>)}
                        {/* ---------- */}
                    </div>


                </nav>

            </div>
        </div>
    )
}

export default Navbar
import { Link } from "react-router-dom"
import { MdArrowOutward } from "react-icons/md";
import { IoMail } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

import Girl from '../assets/chilling.png'

const Contact = () => {
  return (
    <div className="bg-[var(--page-bg)] text-[var(--page-text)] p-3">
      <div className="p-4 flex flex-col gap-3">
        <div className="flex">
          <div>
            <p className="text-2xl font-extrabold text-orange-600">[ Get in Touch ]</p>
            <h1 className="text-4xl font-bold">Let's Build Something Together.</h1>
          </div>


          <div>
            <img src={Girl} alt="" />
          </div>
        </div>


        <p>Open to collaborations, opportunities and new projects.</p>

        <div className="text-xl flex flex-col gap-5 justify-center">

          <div className="flex justify-between items-center border-b border-amber-600 p-3">


            <div><Link to="https://mail.google.com/mail/u/0/?fs=1&to=YOUR_EMAIL@gmail.com&tf=cm" className="flex items-center gap-4"><IoMail /><p>ayushkumar.dev@gmail.com</p></Link></div>
            <div>
              <Link to="https://mail.google.com/mail/u/0/?fs=1&to=YOUR_EMAIL@gmail.com&tf=cm">
              <MdArrowOutward /></Link>
            </div>
          </div>

          <div className="flex justify-between items-center border-b border-amber-600 p-3">


            <div><Link to="https://www.linkedin.com/in/ayush-kumar-996948340/" className="flex items-center  gap-4"><FaLinkedin /><p>linkedin.com/in/ayush-kumar</p></Link></div>
            <Link>
            <div><MdArrowOutward /></div>

            </Link>
          </div>

          <div className="flex justify-between items-center border-b border-amber-600 p-3">


            <div>
              <Link to="https://github.com/devx-ayk" className="flex items-center  gap-4"><FaGithub /><p>github.com/devx-ayk</p></Link>
            </div>
            <Link  to="https://github.com/devx-ayk" >

            <div><MdArrowOutward /></div>

            </Link>
          </div>

          <div className="flex justify-between items-center  p-3">


            <div>
              <Link to="https://www.instagram.com/ayushhh._.kumar_?utm_source=qr&igsh=M251OGJ1c2xpMWk=" className="flex items-center  gap-4"><RiInstagramFill /><p>instagram.com/devx_ayk</p></Link>
            </div>
            <Link to="https://www.instagram.com/ayushhh._.kumar_?utm_source=qr&igsh=M251OGJ1c2xpMWk=">
            <div><MdArrowOutward /></div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
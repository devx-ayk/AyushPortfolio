import myImg from '../assets/my-img.png';
import Myimg from '../assets/my-img-2.png';
import { MdArrowOutward } from "react-icons/md";
import { MdArrowDownward } from "react-icons/md";
import { Link } from "react-router-dom"

const Home = () => {
  return (
    <div className="w-full bg-[var(--page-bg)] text-[var(--page-text)] p-4">
      <div className='flex flex-col gap-3'>
        <div className='p-3'>

        </div>
        <div className='flex justify-center flex-col items-center relative'>
          {/* <img className='h-80 w-80 rounded-xl' src={myImg} alt="" /> */}
          <div className='relative'>
            <div className='h-20 w-20 bg-orange-200 absolute rounded-[50%] left-5 top-3'></div>
            <div className='h-40 bg-amber-500 rounded-[50%] w-40 absolute bottom-3 left-0 '></div>
            <div className='h-30 w-30 rounded-[50%] bg-orange-300 absolute right-0'></div>
            <Link to="/about"><img className='relative z-10 rounded-2xl' src={Myimg} alt="" /></Link>
          </div>


          <h1 className='p-3 text-4xl font-semibold'>Hey! I'm Ayush, A <span className='text-orange-600'>Developer</span> building for the web.</h1>
          <p className='p-3'>
            BCA Graudate in Artificial Intelligence & Data Analytics. Passionate about web development, technology and buildingmeaningful digital experiences.
          </p>
        </div>


        <div className='flex flex-col gap-5'>
          <Link to="/contact" className=" w-full bg-orange-400 p-3 rounded-4xl flex justify-center items-center gap-2 cursor-pointer hover:bg-orange-300">
            <button className='flex gap-3 items-center cursor-pointer'>
              <p>Contact Me</p>  <MdArrowOutward />
            </button></Link>

          <a href="/CV Ayush kumar.pdf"
            download="Ayush-Kumar-CV.pdf"
            className="border border-amber-600 p-3 rounded-4xl flex justify-center items-center gap-2 cursor-pointer hover:bg-orange-300">

            <button className='flex items-center gap-3 cursor-pointer'>
              <p>Download CV</p>  <MdArrowDownward />
            </button>

          </a>
        </div>


        <div className='bg-amber-600 h-[1px] m-4'>

        </div>
        <div className='flex flex-col gap-4'>
          <p className='text-orange-500 font-extrabold text-2xl'>[ Brief Intro ]</p>

          <h1 className='text-4xl font-semibold'>Curious by nature.
            <span className='text-orange-600'>Developer</span>   by passion.
          </h1>

          <p>
            My journey started with undestanding how websites work. Now I'm exploring fullstack development, programming and the wold of data and AI.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Home